import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getContent, isLocale } from "@/lib/i18n";
import { Motion } from "@/lib/motion/Motion";
import { About } from "./_landing-sections/About";
import { Contact } from "./_landing-sections/Contact";
import { Hero } from "./_landing-sections/Hero";
import { Intro } from "./_landing-sections/Intro";
import { Stack } from "./_landing-sections/Stack";
import { Work } from "./_landing-sections/Work";

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
        <Hero hero={content.hero} mail={content.contact.mail} />
        <Intro intro={content.intro} />
        <Work work={content.work} />
        <About about={content.about} />
        <Stack stack={content.stack} />
        <Contact contact={content.contact} />
      </main>
      <Footer locale={lang} footer={content.footer} />
    </Motion>
  );
}
