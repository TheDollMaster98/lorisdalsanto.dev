import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getContent, isLocale } from "@/lib/i18n";
import { Motion } from "@/lib/motion/Motion";
import { asset } from "@/lib/site/asset";
import { About } from "./_landing-sections/About";
import { Contact } from "./_landing-sections/Contact";
import { Hero } from "./_landing-sections/Hero";
import {
  ProjectGallery,
  type GalleryProject,
} from "./_landing-sections/ProjectGallery";
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

  // Percorsi delle immagini risolti qui, lato server, con il basePath di GitHub Pages.
  const gallery: GalleryProject[] = content.work.projects.flatMap((project) =>
    project.slug && project.images?.length
      ? [
          {
            slug: project.slug,
            title: project.title,
            context: project.context,
            year: project.year,
            href: project.href,
            images: project.images.map((image) => ({
              src: asset(`assets/img/projects/${project.slug}/${image.file}`),
              alt: image.alt,
              caption: image.caption,
              width: image.width ?? 1600,
              height: image.height ?? 1000,
            })),
          },
        ]
      : [],
  );

  return (
    <Motion>
      <Header locale={lang} nav={content.nav} />
      <main>
        <Hero locale={lang} hero={content.hero} mail={content.contact.mail} />
        <Intro intro={content.intro} />
        <Work work={content.work} />
        <ProjectGallery projects={gallery} labels={content.work.gallery} />
        <About about={content.about} />
        <Stack stack={content.stack} />
        <Contact
          locale={lang}
          contact={content.contact}
          cvLabel={content.nav.cv}
        />
      </main>
      <Footer locale={lang} footer={content.footer} />
    </Motion>
  );
}
