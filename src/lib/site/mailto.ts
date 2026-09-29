import { profile } from "@/content/profile";
import type { Content } from "@/models/content.model";

// Link email con oggetto e testo già compilati. "\r\n" per gli a capo: lo leggono bene
// anche i client più rigidi, come Outlook.
export function mailtoHref({
  subject,
  body,
}: Content["contact"]["mail"]): string {
  const params = [
    `subject=${encodeURIComponent(subject)}`,
    `body=${encodeURIComponent(body.replace(/\n/g, "\r\n"))}`,
  ].join("&");
  return `mailto:${profile.email}?${params}`;
}
