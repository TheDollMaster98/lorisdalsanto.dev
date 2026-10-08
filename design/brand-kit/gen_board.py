import math, random, sys
random.seed(7)
PAPER="#f4f2ee"; RAISED="#ebe8e2"; INK="#151515"; MUTED="#5e5b55"; LINE="#d9d5cd"; SIGNAL="#3f7a4a"; CANVAS="#1c1c1b"

def mark(size, fg, bg=None, cursor=True, ticks=28):
    # anello di trattini radiali (il campo della hero) + barra del cursore al centro
    c=size/2; r=size*0.36; L=size*0.11; w=max(1.2,size*0.028)
    out=[f'<svg width="{size}" height="{size}" viewBox="0 0 {size} {size}" xmlns="http://www.w3.org/2000/svg">']
    if bg: out.append(f'<rect width="{size}" height="{size}" rx="{size*0.22}" fill="{bg}"/>')
    for i in range(ticks):
        a=2*math.pi*i/ticks - math.pi/2
        k=0.55+0.45*math.cos(a+math.pi/2)**2  # trattini più lunghi in alto e in basso
        l=L*k
        x1=c+(r-l/2)*math.cos(a); y1=c+(r-l/2)*math.sin(a)
        x2=c+(r+l/2)*math.cos(a); y2=c+(r+l/2)*math.sin(a)
        out.append(f'<line x1="{x1:.2f}" y1="{y1:.2f}" x2="{x2:.2f}" y2="{y2:.2f}" stroke="{fg}" stroke-width="{w:.2f}" stroke-linecap="round"/>')
    if cursor:
        cw=size*0.07; ch=size*0.30
        out.append(f'<rect x="{c-cw/2:.2f}" y="{c-ch/2:.2f}" width="{cw:.2f}" height="{ch:.2f}" fill="{fg}"/>')
    out.append('</svg>'); return "".join(out)

def construction(size):
    c=size/2; r=size*0.36; L=size*0.11
    s=[f'<svg width="{size}" height="{size}" viewBox="0 0 {size} {size}" xmlns="http://www.w3.org/2000/svg">']
    s.append(f'<g stroke="{LINE}" stroke-width="1" fill="none">')
    for rr in (r-L/2, r, r+L/2): s.append(f'<circle cx="{c}" cy="{c}" r="{rr:.1f}"/>')
    s.append(f'<line x1="0" y1="{c}" x2="{size}" y2="{c}"/><line x1="{c}" y1="0" x2="{c}" y2="{size}"/>')
    s.append(f'<line x1="{c-r}" y1="{c-r}" x2="{c+r}" y2="{c+r}" stroke-dasharray="3 4"/></g>')
    s.append(mark(size, INK, cursor=True).split('>',1)[1].rsplit('</svg>',1)[0])
    f='font-family="IBM Plex Mono" font-size="11" fill="'+MUTED+'"'
    s.append(f'<text x="{c+r+L/2-58}" y="{c+r+L/2+18}" {f}>r 0.36</text>')
    s.append(f'<text x="{c+8}" y="{c-r-L/2-8}" {f}>28 segni</text>')
    s.append(f'<text x="{c+size*0.06}" y="{c+size*0.16}" {f}>cursore</text>')
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
html=f'''<!doctype html><html><head><meta charset="utf-8"><title>Brand kit, Loris Dal Santo</title>
<link href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{{box-sizing:border-box;margin:0}} body{{background:{CANVAS};width:{W}px;height:{H}px;padding:{G}px;display:grid;grid-template-columns:repeat(3,{PW}px);grid-template-rows:repeat(3,{PH}px);gap:{G}px;font-family:"Schibsted Grotesk",sans-serif;color:{INK}}}
.p{{position:relative;overflow:hidden;background:{PAPER};border-radius:6px;padding:28px}}
.lab{{position:absolute;left:28px;right:28px;bottom:20px;display:flex;justify-content:space-between;font:400 11px "IBM Plex Mono",monospace;letter-spacing:.12em;text-transform:uppercase}}
.mono{{font-family:"IBM Plex Mono",monospace;letter-spacing:.12em;text-transform:uppercase}}
.cursor{{display:inline-block;width:.07em;height:.8em;background:{INK};vertical-align:-.06em;margin-left:.04em}}
</style></head><body>

<div class="p" style="display:flex;flex-direction:column;justify-content:center;gap:26px">
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
    <div style="padding:20px 20px">
      <div class="mono" style="font-size:9px;color:{MUTED}">Milano <span style="color:{SIGNAL}">●</span> Aperto a nuove opportunità</div>
      <div style="font-size:30px;line-height:1.05;letter-spacing:-.02em;margin-top:14px">Progetto e sviluppo applicazioni web e mobile<span class="cursor"></span></div>
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
    {mark(84,PAPER,bg=INK)}{mark(48,PAPER,bg=INK)}{mark(32,PAPER,bg=INK)}{mark(16,INK)}
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
