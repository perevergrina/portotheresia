from pathlib import Path
from shutil import copyfile

from PIL import Image


site = Path.cwd()
root = site.parent
output = site / "public" / "portfolio"
downloads = site / "public" / "downloads"
output.mkdir(parents=True, exist_ok=True)
downloads.mkdir(parents=True, exist_ok=True)

images = [
    ("p03-01.png", "vera-portrait.webp", 1000),
    ("p05-01.png", "radjawali-ketoprak.webp", 900),
    ("p05-04.png", "radjawali-little-netherland.webp", 900),
    ("p05-06.png", "radjawali-travel-copy.webp", 900),
    ("p08-01.jpg", "bunk-islamic-new-year.webp", 900),
    ("p08-02.jpg", "bunk-jogja-copy.webp", 900),
    ("p08-03.jpg", "bunk-junescape.webp", 900),
    ("p07-01.jpg", "travelxism-fieldwork.webp", 900),
    ("p07-03.jpg", "travelxism-team.webp", 900),
    ("p09-01.jpg", "teman-kartini.webp", 1200),
    ("p09-04.jpg", "realino-learning.webp", 1200),
    ("p11-04.jpg", "self-project-topeng.webp", 900),
    ("p11-05.jpg", "self-project-roni.webp", 900),
]

for source_name, output_name, width in images:
    source = root / "tmp" / "pdfs" / "extracted" / source_name
    with Image.open(source) as image:
        if image.width > width:
            height = round(image.height * width / image.width)
            image = image.resize((width, height), Image.Resampling.LANCZOS)
        image.save(output / output_name, "WEBP", quality=84, method=6)

copyfile(root / "CV Theresia Verani P 2026 (1).pdf", downloads / "CV-Theresia-Verani-2026.pdf")
print(f"Prepared {len(images)} images and 1 PDF.")
