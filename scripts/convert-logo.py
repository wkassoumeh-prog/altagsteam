from PIL import Image
from pathlib import Path

src = Path(
    r"C:\Users\wasim\.cursor\projects\c-Users-wasim-Documents-altagsteam\assets\c__Users_wasim_AppData_Roaming_Cursor_User_workspaceStorage_d671c39a321d3e090804a602fdbdc9e8_images_WhatsApp_Image_2026-08-13_at_8.13.19_PM-03ddd3f2-be76-4e13-8b00-26a22794b5d8.png"
)
out_dir = Path(__file__).resolve().parent.parent / "public"
png_out = out_dir / "logo-transparent.png"

img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if r > 240 and g > 240 and b > 240:
            pixels[x, y] = (r, g, b, 0)

bbox = img.getbbox()
if bbox:
    img = img.crop(bbox)

img.save(png_out)
print(f"Saved {png_out} ({img.size[0]}x{img.size[1]})")
