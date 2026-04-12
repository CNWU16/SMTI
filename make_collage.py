"""SMTI collage v3 - compact grid, auto-crop whitespace"""
from PIL import Image, ImageDraw, ImageFont, ImageOps
import os
import numpy as np

TYPES_DIR = r"d:\0410smti\images\types"
OUTPUT = r"C:\Users\14361\.gemini\antigravity\brain\d1409718-06b8-4a51-8a60-11d82a8f96a1\smti_collage.png"

W, H = 1080, 1350

def auto_crop(img):
    """Remove whitespace around character"""
    img = img.convert("RGBA")
    arr = np.array(img)
    # Find non-white and non-transparent pixels
    mask = (arr[:,:,3] > 30) & ~((arr[:,:,0] > 240) & (arr[:,:,1] > 240) & (arr[:,:,2] > 240))
    if not mask.any():
        return img
    rows = mask.any(axis=1)
    cols = mask.any(axis=0)
    rmin, rmax = np.where(rows)[0][[0,-1]]
    cmin, cmax = np.where(cols)[0][[0,-1]]
    pad = 5
    return img.crop((max(0,cmin-pad), max(0,rmin-pad), min(img.width,cmax+pad), min(img.height,rmax+pad)))

canvas = Image.new("RGB", (W, H), (25, 18, 20))
draw = ImageDraw.Draw(canvas)

# dark gradient
for y in range(H):
    t = y / H
    draw.line([(0,y),(W,y)], fill=(int(25+18*t), int(18+8*t), int(20+16*t)))

try:
    tfont = ImageFont.truetype("C:/Windows/Fonts/msyhbd.ttc", 56)
    sfont = ImageFont.truetype("C:/Windows/Fonts/msyh.ttc", 22)
    cfont = ImageFont.truetype("C:/Windows/Fonts/msyhbd.ttc", 12)
except:
    tfont = sfont = cfont = ImageFont.load_default()

draw.text((W//2, 30), "SMTI", fill=(210,180,180), font=tfont, anchor="mt")
draw.text((W//2, 92), "27 TYPES  |  YOU ARE WHICH ONE?", fill=(130,110,110), font=sfont, anchor="mt")
draw.text((W//2, H-22), "smti.top", fill=(170,140,140), font=sfont, anchor="mm")

characters = [
    "king","silk","whip","heel","fire","ice","cage","mind","bell",
    "dual","edge","flow","play","link","moon","wine","jade","turn",
    "pet","rope","waxs","dove","doll","echo","seed","nest","free"
]

cols, rows = 9, 3
margin_top = 130
margin_bot = 55
area_h = H - margin_top - margin_bot
cell_w = W // cols
cell_h = area_h // rows
size = min(cell_w, cell_h) - 4

for i, name in enumerate(characters):
    col = i % cols
    row = i // cols
    cx = col * cell_w + cell_w // 2
    cy = margin_top + row * cell_h + cell_h // 2

    path = os.path.join(TYPES_DIR, f"{name}.webp")
    if not os.path.exists(path):
        continue
    
    img = Image.open(path).convert("RGBA")
    img = auto_crop(img)
    
    # fit to cell
    scale = min(size / img.width, (size - 16) / img.height)
    nw, nh = int(img.width * scale), int(img.height * scale)
    img = img.resize((nw, nh), Image.LANCZOS)
    
    # paste with alpha
    px, py = cx - nw//2, cy - nh//2 - 6
    temp = Image.new("RGBA", (W, H), (0,0,0,0))
    temp.paste(img, (px, py), img)
    canvas = Image.alpha_composite(canvas.convert("RGBA"), temp).convert("RGB")
    
    draw = ImageDraw.Draw(canvas)
    draw.text((cx, cy + size//2 - 10), name.upper(), fill=(150,130,130), font=cfont, anchor="mt")

# red accent line
draw = ImageDraw.Draw(canvas)
draw.line([(40, 120), (W-40, 120)], fill=(100, 35, 45), width=1)
draw.line([(40, H-50), (W-40, H-50)], fill=(100, 35, 45), width=1)

canvas.save(OUTPUT, quality=95)
print("done")
