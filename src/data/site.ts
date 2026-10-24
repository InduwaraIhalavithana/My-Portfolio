// Facts shared by every language. Wording lives in src/i18n/dictionaries.
export const site = {
  name: "Induwara Ihalavithana",
  shortName: "Induwara",
  degreeShort: "BSc (Hons) CS & Technology",
  url: "https://induwara-ihalavithana.vercel.app",
  photo: "/images/induwara.webp",
  links: {
    github: "https://github.com/InduwaraIhalavithana",
    linkedin: "https://www.linkedin.com/in/induwara-ihalavithana-06a998342",
    email: "induwara.ihalavithana@gmail.com",
    cv: "/cv/Induwara-Ihalavithana-CV.pdf",
  },
} as const;

// Page sections in order; ids double as dictionary keys under `nav`.
export const sectionIds = ["projects", "skills", "research", "about", "contact"] as const;
export type SectionId = (typeof sectionIds)[number];
