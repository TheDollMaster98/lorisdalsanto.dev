import { notFound } from "next/navigation";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Motion } from "@/components/Motion";
import { Work } from "@/components/Work";
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
