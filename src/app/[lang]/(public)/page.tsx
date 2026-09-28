import { notFound } from "next/navigation";
import { getContent, isLocale } from "@/lib/i18n";
import { LandingPage } from "@/views/landing/landing.page";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <LandingPage locale={lang} content={getContent(lang)} />;
}
