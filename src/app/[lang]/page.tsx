import { notFound } from "next/navigation";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Motion } from "@/components/layout/Motion";
import { Work } from "@/components/sections/Work";
import { getContent, isLocale } from "@/lib/i18n";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
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
