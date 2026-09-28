// Lingue del sito. Da tenere allineate a public/index.html (redirect di "/").
export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];

// Lingua per chi usa una lingua non supportata.
export const fallbackLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
