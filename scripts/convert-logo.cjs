const fs = require("fs");
const path = require("path");
const { PNG } = require("pngjs");
const ImageTracer = require("imagetracerjs");

const pngPath = path.join(__dirname, "..", "public", "logo-transparent.png");
const svgPath = path.join(__dirname, "..", "public", "logo.svg");

const options = {
  ltres: 1,
  qtres: 1,
  pathomit: 12,
  colorsampling: 2,
  numberofcolors: 12,
  mincolorratio: 0.02,
  colorquantcycles: 3,
  scale: 1,
  strokewidth: 0,
  linefilter: false,
  roundcoords: 1,
  viewbox: true,
  desc: false,
  lcpr: 0,
  qcpr: 0,
};

const buffer = fs.readFileSync(pngPath);
const png = PNG.sync.read(buffer);
const imageData = {
  width: png.width,
  height: png.height,
  data: png.data,
};

const svg = ImageTracer.imagedataToSVG(imageData, options);

fs.writeFileSync(svgPath, svg, "utf8");
console.log(`Saved ${svgPath} (${svg.length} bytes)`);
