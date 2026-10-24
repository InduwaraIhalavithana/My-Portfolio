import { FileDown, Mail } from "lucide-react";
import { site } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { GitHubIcon, LinkedInIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function Contact({ dict }: { dict: Dictionary }) {
  const t = dict.contact;
  const { github, linkedin, email, cv } = site.links;

  return (
    <section id="contact" className="scroll-mt-20 py-20">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.48_0.24_285)] via-[oklch(0.52_0.22_340)] to-[oklch(0.6_0.19_40)] p-10 text-center text-white sm:p-14">
            <div aria-hidden className="bg-dots absolute inset-0 opacity-30" />
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">{t.title}</h2>
              <p className="mx-auto mt-3 max-w-xl text-lg text-white/85">
                {t.text}
              </p>
              {email && (
                <a href={`mailto:${email}`} className="mt-4 inline-block font-mono text-white/90 underline-offset-4 hover:underline">
                  {email}
                </a>
              )}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button size="lg" variant="secondary" asChild>
                  <a href={github} target="_blank" rel="noreferrer">
                    <GitHubIcon /> GitHub
                  </a>
                </Button>
                {linkedin && (
                  <Button size="lg" variant="secondary" asChild>
                    <a href={linkedin} target="_blank" rel="noreferrer">
                      <LinkedInIcon /> LinkedIn
                    </a>
                  </Button>
                )}
                {email && (
                  <Button size="lg" variant="secondary" asChild>
                    <a href={`mailto:${email}`}>
                      <Mail /> {t.emailMe}
                    </a>
                  </Button>
                )}
                {cv && (
                  <Button size="lg" variant="secondary" asChild>
                    <a href={cv} download>
                      <FileDown /> {dict.common.downloadCv}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
