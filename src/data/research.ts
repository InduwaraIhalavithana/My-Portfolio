import type { Dictionary } from "@/i18n/dictionaries/en";

export type ResearchSlug = keyof Dictionary["research"]["items"];

export type ResearchItem = {
  slug: ResearchSlug;
  // Official English title, shown in every language.
  title: string;
  authors: string[];
  supervisor: string;
  lab: string;
  // Names only; descriptions come from the dictionary, in the same order.
  technologies: string[];
  // Proposal presentation slides under public/research; captions come from the dictionary, same order.
  slides: string[];
  poster: { image: string; pdf: string };
};

// The owner's name as printed in author lists, highlighted in each entry.
export const OWNER_AUTHOR = "P.I. Ihalavithana";

// Facts come from the research proposal and its presentation; the poster is an earlier output and
// still carries the project's first title.
export const research: ResearchItem[] = [
  {
    slug: "pharma-supply-chain",
    title: "AI-Enhanced Blockchain Framework for Pharmaceutical Drug Transaction Traceability",
    authors: ["M.R.T. Gimhan", OWNER_AUTHOR, "N. Farook"],
    supervisor: "Prof. E.M.U.W.J.B. Ekanayake",
    lab: "AIDICA Lab",
    technologies: ["Hyperledger Fabric", "GS1 identifiers", "Isolation Forest + Autoencoder", "Hyperledger Caliper"],
    slides: [1, 2, 3, 4, 5].map((n) => `/research/pharma-supply-chain/${n}.webp`),
    poster: {
      image: "/research/pharma-supply-chain-poster.jpg",
      pdf: "/research/pharma-supply-chain-poster.pdf",
    },
  },
];
