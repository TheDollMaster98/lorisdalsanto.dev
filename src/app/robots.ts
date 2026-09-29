import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site/site";

export const dynamic = "force-static";

// Nota: i crawler leggono robots.txt solo alla radice del dominio. Su GitHub Pages in
// sottocartella non viene considerato; diventa efficace con un dominio proprio.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("sitemap.xml"),
  };
}
