# Genera il brand kit 3x3 (HTML). Uso:
#   python3 -I design/brand-kit/gen_board.py public/design/brand-kit/index.html
# Pubblicato su lorisdalsanto.it/design/brand-kit/ (non linkato, noindex).
import math, random, sys
random.seed(7)
PAPER="#f4f2ee"; RAISED="#ebe8e2"; INK="#151515"; MUTED="#5e5b55"; LINE="#d9d5cd"; SIGNAL="#3f7a4a"; CANVAS="#1c1c1b"

def mark(size, fg, bg=None, **_):
    # Marchio: "ld" + cursore, stesse proporzioni di src/components/brand/Mark.tsx.
    # Con bg: riquadro pieno (icone), il segno occupa il 62% dell'altezza.
    h = size*0.62 if bg else size
    fs = h*0.8; cw = max(1.5, h*0.07); ch = h*0.66
    tw = 0.738*fs                     # larghezza visibile di "ld" in Schibsted 500 (misurata), -0.04em
    x0 = (size - (tw + h*0.13 + cw))/2
    base = size/2 + 0.36*fs           # testo centrato in verticale sul cursore
    out = [f'<svg width="{size}" height="{size}" viewBox="0 0 {size} {size}" xmlns="http://www.w3.org/2000/svg">']
    if bg: out.append(f'<rect width="{size}" height="{size}" rx="{size*0.22}" fill="{bg}"/>')
    out.append(f'<text x="{x0:.2f}" y="{base:.2f}" font-family="Schibsted Grotesk" font-weight="500" font-size="{fs:.2f}" letter-spacing="{-0.04*fs:.2f}" fill="{fg}">ld</text>')
    out.append(f'<rect x="{x0+tw+h*0.07:.2f}" y="{(size-ch)/2:.2f}" width="{cw:.2f}" height="{ch:.2f}" fill="{fg}"/>')
    out.append('</svg>'); return "".join(out)

_seals = 0
def seal(size, fg=INK, bg=PAPER, rot=-8):
    # Timbro della hero: stesse misure di src/app/(public)/[lang]/_landing-sections/Seal.tsx
    # (disegnato su 128, testo steso su tutto il giro meno 7 di spazio tra * e L).
    global _seals; _seals += 1; pid = f"seal-ring-{_seals}"
    r = 47; ring = 2*math.pi*r - 7
    inner = mark(28, fg).replace('<svg ', '<svg x="50" y="50" ', 1)
    return (f'<svg width="{size}" height="{size}" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" style="transform:rotate({rot}deg);flex:none">'
            f'<defs><path id="{pid}" d="M64,64 m-{r},0 a{r},{r} 0 1,1 {2*r},0 a{r},{r} 0 1,1 -{2*r},0"/></defs>'
            f'<circle cx="64" cy="64" r="61" fill="{bg}" stroke="{fg}" stroke-width="1.5"/>'
            f'<circle cx="64" cy="64" r="34" fill="none" stroke="{fg}" stroke-width="1"/>'
            f'<text font-family="IBM Plex Mono" font-size="9.5" fill="{fg}"><textPath href="#{pid}" textLength="{ring:.2f}" lengthAdjust="spacing">LORIS DAL SANTO * FRONT-END DEVELOPER * MILANO *</textPath></text>'
            f'{inner}</svg>')

def construction(size):
    # Linee guida tipografiche del marchio: ascendente, altezza x, linea di base, cursore.
    h = size*0.62; fs = h*0.8; tw = 0.738*fs
    x0 = (size - (tw + h*0.13 + max(1.5, h*0.07)))/2
    base = size/2 + 0.36*fs; asc = base - fs*0.72; xh = base - fs*0.52
    cx = x0 + tw + h*0.13 + max(1.5, h*0.07)/2
    f = 'font-family="IBM Plex Mono" font-size="11" fill="'+MUTED+'"'
    s = [f'<svg width="{size}" height="{size}" viewBox="0 0 {size} {size}" xmlns="http://www.w3.org/2000/svg"><g stroke="{LINE}" stroke-width="1">']
    for y in (asc, xh, base):
        s.append(f'<line x1="0" y1="{y:.1f}" x2="{size}" y2="{y:.1f}"/>')
    s.append(f'<line x1="{cx:.1f}" y1="0" x2="{cx:.1f}" y2="{size}" stroke-dasharray="3 4"/></g>')
    s.append(mark(size, INK, bg="none").split('>',1)[1].rsplit('</svg>',1)[0])
    s.append(f'<text x="4" y="{asc-6:.1f}" {f}>ascendente</text>')
    s.append(f'<text x="4" y="{xh-6:.1f}" {f}>altezza x</text>')
    s.append(f'<text x="4" y="{base+16:.1f}" {f}>linea di base</text>')
    s.append(f'<text x="{cx+8:.1f}" y="{size-8}" {f}>cursore</text>')
    s.append('</svg>'); return "".join(s)

def field(w,h,step=18):
    cx,cy=w*0.58,h*0.55; R=min(w,h)*0.42; band=min(w,h)*0.16
    s=[f'<svg width="{w}" height="{h}" viewBox="0 0 {w} {h}" xmlns="http://www.w3.org/2000/svg"><rect width="{w}" height="{h}" fill="{PAPER}"/>']
    y=step/2
    while y<h:
        x=step/2
        while x<w:
            px=x+(random.random()-.5)*step*.7; py=y+(random.random()-.5)*step*.7
            dx,dy=px-cx,py-cy; d=math.hypot(dx,dy) or 1
            k=math.exp(-((d-R)/band)**2*2.2)
            if k<.08: s.append(f'<rect x="{px:.1f}" y="{py:.1f}" width="1.2" height="1.2" fill="{LINE}"/>')
            else:
                ux,uy=dx/d,dy/d; half=(1.5+k*5)/2
                col=INK if k>.7 else (MUTED if k>.35 else LINE); op=.55 if k>.7 else (.45 if k>.35 else 1)
                s.append(f'<line x1="{px-ux*half:.1f}" y1="{py-uy*half:.1f}" x2="{px+ux*half:.1f}" y2="{py+uy*half:.1f}" stroke="{col}" stroke-opacity="{op}" stroke-width="1.5" stroke-linecap="round"/>')
            x+=step
        y+=step
    s.append('</svg>'); return "".join(s)

W,H=1600,1200; G=14; PW=(W-G*4)//3; PH=(H-G*4)//3
def lab(n,t,col=MUTED): return f'<div class="lab" style="color:{col}"><span>{n}</span><span>{t}</span></div>'
html=f'''<!doctype html><html><head><meta charset="utf-8"><meta name="robots" content="noindex, nofollow"><title>Brand kit, Loris Dal Santo</title>

<style>
/* Font serviti dal sito (fonts/ accanto a questa pagina): nessuna richiesta a Google, come dice la privacy. */
@font-face{{font-family:"Schibsted Grotesk";src:url(fonts/schibsted-grotesk.woff2) format("woff2");font-weight:400 900;font-display:swap}}
@font-face{{font-family:"IBM Plex Mono";src:url(fonts/ibm-plex-mono-400.woff2) format("woff2");font-weight:400;font-display:swap}}
@font-face{{font-family:"IBM Plex Mono";src:url(fonts/ibm-plex-mono-500.woff2) format("woff2");font-weight:500;font-display:swap}}
*{{box-sizing:border-box;margin:0}} body{{background:{CANVAS};width:{W}px;height:{H}px;padding:{G}px;display:grid;grid-template-columns:repeat(3,{PW}px);grid-template-rows:repeat(3,{PH}px);gap:{G}px;font-family:"Schibsted Grotesk",sans-serif;color:{INK}}}
.p{{position:relative;overflow:hidden;background:{PAPER};border-radius:6px;padding:28px}}
.lab{{position:absolute;left:28px;right:28px;bottom:20px;display:flex;justify-content:space-between;font:400 11px "IBM Plex Mono",monospace;letter-spacing:.12em;text-transform:uppercase}}
.mono{{font-family:"IBM Plex Mono",monospace;letter-spacing:.12em;text-transform:uppercase}}
.cursor{{display:inline-block;width:.07em;height:.8em;background:{INK};vertical-align:-.06em;margin-left:.04em}}
</style></head><body>

<div class="p" style="display:flex;flex-direction:column;justify-content:center;gap:26px">
  <div style="position:absolute;right:26px;top:26px">{seal(150)}</div>
  {mark(112,INK)}
  <div><div style="font-size:44px;font-weight:500;letter-spacing:-.02em;line-height:1">Loris Dal Santo</div>
  <div class="mono" style="font-size:12px;color:{MUTED};margin-top:14px">Front-End &amp; Flutter Developer</div></div>
  {lab("01","Marchio")}
</div>

<div class="p" style="display:flex;align-items:center;justify-content:center;padding-bottom:48px">
  {construction(300)}
  {lab("02","Costruzione")}
</div>

<div class="p" style="background:{RAISED};padding:22px 22px 48px">
  <div style="background:{PAPER};border:1px solid {LINE};border-radius:8px;height:100%;overflow:hidden">
    <div style="display:flex;align-items:center;gap:7px;padding:10px 12px;border-bottom:1px solid {LINE}">
      <i style="width:9px;height:9px;border-radius:50%;background:{LINE}"></i><i style="width:9px;height:9px;border-radius:50%;background:{LINE}"></i><i style="width:9px;height:9px;border-radius:50%;background:{LINE}"></i>
      <div class="mono" style="margin-left:10px;flex:1;background:{RAISED};border-radius:5px;padding:5px 10px;font-size:10px;letter-spacing:.06em;text-transform:none;color:{MUTED};display:flex;align-items:center;gap:7px">{mark(12,MUTED)} lorisdalsanto.it</div>
    </div>
    <div style="padding:20px 20px;position:relative">
      <div style="position:absolute;right:14px;top:8px">{seal(54)}</div>
      <div class="mono" style="font-size:9px;color:{MUTED}">Milano <span style="color:{SIGNAL}">●</span> Aperto a nuove opportunità</div>
      <div style="font-size:30px;line-height:1.05;letter-spacing:-.02em;margin-top:14px;padding-right:64px">Progetto e sviluppo applicazioni web e mobile<span class="cursor"></span></div>
      <div style="display:flex;gap:18px;margin-top:18px;font-size:13px"><span style="border-bottom:1px solid {INK};padding-bottom:3px">Scrivimi →</span><span style="color:{MUTED}">Leggi il CV →</span></div>
    </div>
  </div>
  {lab("03","Applicazione web")}
</div>

<div class="p" style="background:{INK};color:{PAPER};display:flex;align-items:center">
  <div style="font-size:46px;line-height:1.02;letter-spacing:-.025em;font-weight:500">Dall’architettura<br>alla messa online.<span class="cursor" style="background:{PAPER}"></span></div>
  {lab("04","Promessa",col="#8f8b84")}
</div>

<div class="p" style="padding:0;display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr 1.2fr">
  {''.join(f'<div style="background:{c};position:relative"><div class="mono" style="position:absolute;left:12px;bottom:48px;font-size:9.5px;line-height:1.6;color:{t}">{n}<br>{c.upper()}</div></div>' for c,n,t in [(PAPER,"Paper",MUTED),(RAISED,"Raised",MUTED),(LINE,"Line",MUTED),(MUTED,"Muted",PAPER),(INK,"Ink",PAPER)])}
  <div style="position:absolute;right:20px;top:20px;display:flex;align-items:center;gap:8px;background:{PAPER};border-radius:99px;padding:6px 12px" class="mono"><span style="width:8px;height:8px;border-radius:50%;background:{SIGNAL}"></span><span style="font-size:10px;color:{INK}">Signal #3F7A4A</span></div>
  {lab("05","Colore",col=PAPER)}
</div>

<div class="p">
  <div style="display:flex;align-items:flex-end;gap:22px"><div style="font-size:150px;line-height:.8;letter-spacing:-.04em">Aa</div>
  <div style="padding-bottom:6px"><div style="font-size:15px;font-weight:500">Schibsted Grotesk</div><div style="font-size:13px;color:{MUTED}">Titoli e testo</div></div></div>
  <div style="font-size:15px;color:{MUTED};margin-top:22px;letter-spacing:.01em">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz 0123456789</div>
  <div class="mono" style="font-size:13px;margin-top:20px">00 / Presentazione</div>
  <div class="mono" style="font-size:10px;color:{MUTED};margin-top:6px">IBM Plex Mono, etichette e dati</div>
  {lab("06","Tipografia")}
</div>

<div class="p" style="background:{RAISED}">
  <div style="position:absolute;left:46px;top:46px;width:260px;height:150px;background:{INK};border-radius:6px;box-shadow:0 18px 40px rgba(0,0,0,.18);transform:rotate(-6deg);display:flex;align-items:center;justify-content:center">{mark(64,PAPER)}</div>
  <div style="position:absolute;left:180px;top:138px;width:260px;height:150px;background:{PAPER};border-radius:6px;box-shadow:0 18px 40px rgba(0,0,0,.14);transform:rotate(3deg);padding:20px;display:flex;flex-direction:column;justify-content:space-between">
    <div style="display:flex;justify-content:space-between;align-items:flex-start"><div><div style="font-size:17px;font-weight:500">Loris Dal Santo</div><div class="mono" style="font-size:8.5px;color:{MUTED};margin-top:6px">Front-End &amp; Flutter Developer</div></div>{mark(22,INK)}</div>
    <div class="mono" style="font-size:8.5px;line-height:1.8;color:{MUTED};text-transform:none;letter-spacing:.04em">contatti@lorisdalsanto.it<br>lorisdalsanto.it</div>
  </div>
  {lab("07","Biglietto")}
</div>

<div class="p" style="padding:0">
  {field(PW,PH)}
  <div style="position:absolute;left:0;right:0;bottom:0;height:44px;background:{PAPER};border-top:1px solid {LINE}"></div>{lab("08","Campo della hero")}
</div>

<div class="p">
  <div style="display:flex;gap:14px;align-items:flex-end">
    {seal(96)}{mark(84,PAPER,bg=INK)}{mark(48,PAPER,bg=INK)}{mark(32,PAPER,bg=INK)}{mark(16,INK)}
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:26px">
    <span class="mono" style="font-size:10.5px;border:1px solid {LINE};border-radius:99px;padding:7px 12px;display:flex;gap:8px;align-items:center"><span style="width:7px;height:7px;border-radius:50%;background:{SIGNAL}"></span>Aperto a nuove opportunità</span>
    <span class="mono" style="font-size:10.5px;border:1px solid {LINE};border-radius:99px;padding:7px 12px">02 / Percorso</span>
    <span style="font-size:14px;border-bottom:1px solid {INK};padding:6px 0 3px">Scrivimi →</span>
  </div>
  {lab("09","Icone e componenti")}
</div>
</body></html>'''
open(sys.argv[1],"w").write(html)
