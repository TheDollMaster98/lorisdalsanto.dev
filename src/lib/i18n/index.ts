import { en } from "@/content/en";
import { it } from "@/content/it";
import type { Content } from "@/models/content.model";
import type { Locale } from "./locales";

export { fallbackLocale, isLocale, locales, type Locale } from "./locales";

const contents: Record<Locale, Content> = { it, en };

export function getContent(locale: Locale): Content {
  return contents[locale];
}
