import { notFound } from "next/navigation";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SideRails } from "@/components/side-rails";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <SiteHeader lang={lang} nav={dict.nav} />
      <SideRails nav={dict.nav} location={dict.common.location} />
      <main className="flex-1">
        <Hero dict={dict} />
        <Projects dict={dict} />
        <Skills dict={dict} />
        <Research dict={dict} />
        <About dict={dict} />
        <Contact dict={dict} />
      </main>
      <SiteFooter dict={dict} />
    </>
  );
}
