// Genera il CV in PDF (italiano e inglese) dalla pagina /cv già costruita in out/.
// Va lanciato dopo `npm run build`, con lo stesso PAGES_BASE_PATH della build.
// Le pagine si aprono su localhost e ogni richiesta viene servita da out/:
// nessun server da avviare. Chromium: quello di Playwright, oppure CHROMIUM_PATH.
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const OUT = path.resolve("out");
const BASE = process.env.PAGES_BASE_PATH ?? "";
// localhost: il reindirizzamento a https (src/lib/site/https.ts) lo lascia passare.
const ORIGIN = "http://localhost";
const LOCALES = ["it", "en"];
const TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".woff2": "font/woff2",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".txt": "text/plain",
};

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
});
const page = await browser.newPage();
// Ogni file chiesto e non trovato in out/: un PDF da una pagina rotta non deve uscire.
const missing = [];
await page.route(`${ORIGIN}/**`, async (route) => {
  let file = new URL(route.request().url()).pathname;
  if (BASE && file.startsWith(BASE)) file = file.slice(BASE.length);
  if (file.endsWith("/")) file += "index.html";
  try {
    const body = await readFile(path.join(OUT, decodeURIComponent(file)));
    await route.fulfill({
      body,
      contentType: TYPES[path.extname(file)] ?? "application/octet-stream",
    });
  } catch {
    missing.push(file);
    await route.fulfill({ status: 404, body: "" });
  }
});

await mkdir(path.join(OUT, "assets/cv"), { recursive: true });
for (const lang of LOCALES) {
  const response = await page.goto(`${ORIGIN}${BASE}/${lang}/cv/`, {
    waitUntil: "networkidle",
  });
  if (!response?.ok() || missing.length) {
    await browser.close();
    throw new Error(
      `CV ${lang}: pagina o risorse mancanti in out/ (${missing.join(", ") || response?.status()}). ` +
        "PAGES_BASE_PATH deve essere lo stesso della build.",
    );
  }
  await page.evaluate(() => document.fonts.ready);
  const file = path.join(OUT, `assets/cv/loris-dal-santo-cv-${lang}.pdf`);
  await page.pdf({
    path: file,
    preferCSSPageSize: true,
    printBackground: true,
  });
  console.log(`CV ${lang}: ${path.relative(process.cwd(), file)}`);
}
await browser.close();
