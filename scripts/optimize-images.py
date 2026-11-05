"""Generate content-addressed, uncropped WebP variants. Requires Pillow >= 10."""
from pathlib import Path
from PIL import Image, ImageOps
import hashlib,json
root=Path(__file__).resolve().parents[1]
out=root/'public/optimized'; out.mkdir(exist_ok=True)
manifest={}; report=[]
for p in sorted((root/'public').rglob('*')):
 if out in p.parents or p.suffix.lower() not in {'.png','.jpg','.jpeg','.webp'}: continue
 with Image.open(p) as source:
  im=ImageOps.exif_transpose(source).convert('RGBA' if 'A' in source.getbands() else 'RGB')
  w,h=im.size
  digest=hashlib.sha256(p.read_bytes()+b'webp-q85-v1').hexdigest()[:12]
  variants=[]
  for width in sorted(set([min(w,n) for n in [480,768,1280,1920]])):
   target=out/f'{p.stem.replace(" ","-")}-{digest}-{width}.webp'
   im.resize((width,round(h*width/w)),Image.Resampling.LANCZOS).save(target,'WEBP',quality=85,method=6)
   variants.append({'src':'/'+str(target.relative_to(root/'public')),'width':width,'bytes':target.stat().st_size})
  preferred=min(variants,key=lambda v:abs(v['width']-1280))
  entry={'src':preferred['src'],'width':w,'height':h,'srcSet':', '.join(f'{v["src"]} {v["width"]}w' for v in variants)}
  manifest['/'+str(p.relative_to(root/'public'))]=entry
  report.append({'original':str(p.relative_to(root/'public')),'originalBytes':p.stat().st_size,'variants':variants})
(root/'src/data/optimized-images.json').write_text(json.dumps(manifest,indent=2)+'\n')
(root/'scripts/image-size-report.json').write_text(json.dumps(report,indent=2)+'\n')
print('Optimized',len(report),'images; original bytes:',sum(r['originalBytes'] for r in report),'1280px bytes:',sum(min(r['variants'],key=lambda v:abs(v['width']-1280))['bytes'] for r in report))
