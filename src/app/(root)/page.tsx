import type { Metadata } from "next";
import { defaultLocale, locales } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Loris Dal Santo",
  robots: { index: false },
};

// Con l'export statico non c'è un server che possa fare redirect:
// sceglie la lingua del browser via script (inglese per le lingue non supportate),
// con meta refresh sulla lingua predefinita se JavaScript è disattivato.
const base = process.env.PAGES_BASE_PATH ?? "";
const redirect = `
  var supported = ${JSON.stringify(locales)};
  var lang = (navigator.language || "").slice(0, 2).toLowerCase();
  location.replace("${base}/" + (supported.indexOf(lang) >= 0 ? lang : "en") + "/");
`;

export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${base}/${defaultLocale}/`} />
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <noscript>
        <a href={`${base}/${defaultLocale}/`}>Loris Dal Santo</a>
      </noscript>
    </>
  );
}
