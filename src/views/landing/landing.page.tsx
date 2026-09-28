import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Locale } from "@/lib/i18n";
import type { Content } from "@/models/content.model";
import { Motion } from "./Motion";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";

type LandingPageProps = {
  locale: Locale;
  content: Content;
};

export function LandingPage({ locale, content }: LandingPageProps) {
  return (
    <Motion>
      <Header locale={locale} nav={content.nav} />
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
