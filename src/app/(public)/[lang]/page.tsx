import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getContent, isLocale } from "@/lib/i18n";
import { Motion } from "@/lib/motion/Motion";
import { About } from "./_sections/About";
import { Contact } from "./_sections/Contact";
import { Hero } from "./_sections/Hero";
import { Work } from "./_sections/Work";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const content = getContent(lang);

  return (
    <Motion>
      <Header locale={lang} nav={content.nav} />
      <main>
        <Hero hero={content.hero} />
        <Work work={content.work} />
        <About about={content.about} />
        <Contact contact={content.contact} />
      </main>
      <Footer footer={content.footer} />
    </Motion>
  );
}
