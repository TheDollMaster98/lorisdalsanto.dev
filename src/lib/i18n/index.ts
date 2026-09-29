import { cvEn } from "@/content/cv/en";
import { cvIt } from "@/content/cv/it";
import { en } from "@/content/en";
import { it } from "@/content/it";
import type { Content } from "@/models/content.model";
import type { Cv } from "@/models/cv.model";
import type { Locale } from "./locales";

export { fallbackLocale, isLocale, locales, type Locale } from "./locales";

const contents: Record<Locale, Content> = { it, en };

export function getContent(locale: Locale): Content {
  return contents[locale];
}

const cvs: Record<Locale, Cv> = { it: cvIt, en: cvEn };

export function getCv(locale: Locale): Cv {
  return cvs[locale];
}
