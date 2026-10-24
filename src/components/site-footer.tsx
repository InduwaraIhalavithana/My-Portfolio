import { cacheLife } from "next/cache";
import { site } from "@/data/site";
import type { Dictionary } from "@/i18n/dictionaries/en";

// Cached so the year is fixed at build time; every deploy rebuilds it.
async function CopyrightYear() {
  "use cache";
  cacheLife("max");
  return <>{new Date().getFullYear()}</>;
}

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t py-8">
      <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-muted-foreground sm:flex-row">
        <p>
          © <CopyrightYear /> {site.name}
        </p>
        <p>{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
