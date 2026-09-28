import { en } from "@/content/en";
import { it } from "@/content/it";
import type { Content } from "@/models/content.model";

export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "it";

const contents: Record<Locale, Content> = { it, en };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getContent(locale: Locale): Content {
  return contents[locale];
}
