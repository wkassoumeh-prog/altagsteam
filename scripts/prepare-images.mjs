import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicDirectory = path.join(root, "public");
const outputDirectory = path.join(publicDirectory, "generated", "images");
const manifestPath = path.join(root, "src", "generated", "images.json");
const quality = 95;
const photoWidths = [320, 480, 640, 828, 1080, 1280, 1600, 1920, 2560];
const logoWidths = [48, 64, 96, 128, 192, 256, 384, 512];
const sourceExtensions = new Set([".astro", ".tsx", ".ts", ".jsx", ".js", ".mdx"]);
const imagePattern = /(["'`])(\/[^"'`\r\n]+?\.(?:jpe?g|png|webp|avif|tiff?))\1/gi;

async function sourceFiles(directory) {
  if (!existsSync(directory)) return [];

  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "generated") continue;
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await sourceFiles(entryPath)));
    else if (entry.isFile() && sourceExtensions.has(path.extname(entry.name))) {
      files.push(entryPath);
    }
  }
  return files;
}

async function referencedImages() {
  const references = new Set();
  for (const sourceRoot of ["app", "src"]) {
    for (const filename of await sourceFiles(path.join(root, sourceRoot))) {
      const source = await readFile(filename, "utf8");
      for (const match of source.matchAll(imagePattern)) references.add(match[2]);
    }
  }
  return [...references].sort();
}

function localImagePath(source) {
  const filename = path.resolve(publicDirectory, `.${decodeURI(source)}`);
  const relative = path.relative(publicDirectory, filename);
  if (relative.startsWith(`..${path.sep}`) || relative === ".." || path.isAbsolute(relative)) {
    throw new Error(`Image source must remain inside public/: ${source}`);
  }
  return filename;
}

let generatedCount = 0;

async function prepareImage(source) {
  const buffer = await readFile(localImagePath(source));
  const metadata = await sharp(buffer).metadata();
  const rotated = metadata.orientation >= 5 && metadata.orientation <= 8;
  const width = rotated ? metadata.height : metadata.width;
  const height = rotated ? metadata.width : metadata.height;
  if (!width || !height) throw new Error(`Cannot determine image dimensions: ${source}`);

  // Root-level assets are the site's small brand and city logos.
  const isLogo = !source.startsWith("/images/");
  const candidates = isLogo ? logoWidths : photoWidths;
  const maxWidth = Math.min(width, candidates.at(-1));
  const widths = [...new Set([...candidates.filter((value) => value < maxWidth), maxWidth])];
  const transform = JSON.stringify({ format: "webp", quality, widths, autoOrient: true, sharp: sharp.versions.sharp });
  const hash = createHash("sha256").update(buffer).update(transform).digest("hex").slice(0, 16);
  const name = path.parse(source).name.normalize("NFKD").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "").toLowerCase() || "image";
  const variants = [];

  for (const variantWidth of widths) {
    const filename = `${name}-${hash}-${variantWidth}.webp`;
    const destination = path.join(outputDirectory, filename);
    if (!existsSync(destination)) {
      await sharp(buffer)
        .rotate()
        .resize({ width: variantWidth, withoutEnlargement: true })
        .webp({ quality })
        .toFile(destination);
      generatedCount += 1;
    }
    variants.push({ src: `/generated/images/${filename}`, width: variantWidth });
  }

  const fallbackWidth = isLogo ? 256 : 1280;
  const fallback = variants.find((variant) => variant.width >= fallbackWidth) ?? variants.at(-1);
  return {
    width,
    height,
    quality,
    src: fallback.src,
    srcSet: variants.map((variant) => `${variant.src} ${variant.width}w`).join(", "),
  };
}

await mkdir(outputDirectory, { recursive: true });
await mkdir(path.dirname(manifestPath), { recursive: true });
const sources = await referencedImages();
const prepared = new Map();
let nextSource = 0;

// Bound parallel processing so large source photos do not exhaust memory.
await Promise.all(Array.from({ length: Math.min(3, sources.length) }, async () => {
  while (nextSource < sources.length) {
    const source = sources[nextSource++];
    prepared.set(source, await prepareImage(source));
  }
}));

const manifest = `${JSON.stringify(Object.fromEntries(sources.map((source) => [source, prepared.get(source)])), null, 2)}\n`;
const previousManifest = existsSync(manifestPath) ? await readFile(manifestPath, "utf8") : null;
if (manifest !== previousManifest) await writeFile(manifestPath, manifest);

// Retire only files created by this generator after every source is ready.
const currentFiles = new Set([...prepared.values()].flatMap((image) =>
  image.srcSet.split(", ").map((variant) => path.posix.basename(variant.split(" ")[0]))
));
for (const entry of await readdir(outputDirectory, { withFileTypes: true })) {
  if (entry.isFile() && /^[a-z0-9-]+-[a-f0-9]{16}-\d+\.webp$/.test(entry.name) && !currentFiles.has(entry.name)) {
    await unlink(path.join(outputDirectory, entry.name));
  }
}
console.info(`Prepared ${sources.length} referenced images at quality ${quality}; generated ${generatedCount} WebP variants.`);
