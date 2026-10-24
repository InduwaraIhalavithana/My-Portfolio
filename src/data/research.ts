import type { Dictionary } from "@/i18n/dictionaries/en";

export type ResearchSlug = keyof Dictionary["research"]["items"];

export type ResearchItem = {
  slug: ResearchSlug;
  // Official English title, shown in every language.
  title: string;
  authors: string[];
  // Names only; descriptions come from the dictionary, in the same order.
  technologies: string[];
  poster: { image: string; pdf: string };
};

// The owner's name as printed in author lists, highlighted in each entry.
export const OWNER_AUTHOR = "P.I. Ihalavithana";

// Facts transcribed from the poster PDF in public/research/.
export const research: ResearchItem[] = [
  {
    slug: "pharma-supply-chain",
    title:
      "Blockchain and AI-Driven Pharmaceutical Supply Chain Framework for Secure Drug Traceability and Counterfeit Detection",
    authors: ["M.R.T. Gimhan", OWNER_AUTHOR, "N. Farook", "E.M.U.W.J.B. Ekanayake"],
    technologies: ["Hyperledger Fabric", "GS1 identifiers", "Isolation Forest + Autoencoder", "Hyperledger Caliper"],
    poster: {
      image: "/research/pharma-supply-chain-poster.jpg",
      pdf: "/research/pharma-supply-chain-poster.pdf",
    },
  },
];
