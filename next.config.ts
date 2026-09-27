import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Sottocartella di GitHub Pages (es. /lorisdalsanto.dev); vuoto con un dominio proprio.
  basePath: process.env.PAGES_BASE_PATH ?? "",
  // Genera it/index.html ed en/index.html: funziona su qualsiasi hosting statico.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
