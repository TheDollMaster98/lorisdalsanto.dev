import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Genera it/index.html ed en/index.html: funziona su qualsiasi hosting statico.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
