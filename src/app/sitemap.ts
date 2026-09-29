import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/locales";
import { absoluteUrl } from "@/lib/site/site";

export const dynamic = "force-static";

const pages = ["", "cv/", "privacy/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((path) =>
    locales.map((lang) => ({
      url: absoluteUrl(`${lang}/${path}`),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "cv/" ? 0.8 : 0.3,
      alternates: {
        languages: Object.fromEntries(
          locales.map((code) => [code, absoluteUrl(`${code}/${path}`)]),
        ),
      },
    })),
  );
}
