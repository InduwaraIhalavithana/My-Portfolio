import type { Dictionary } from "@/i18n/dictionaries/en";

export type LabSlug = keyof Dictionary["labs"]["items"];

export type Lab = {
  slug: LabSlug;
  name: string;
  // 16:9 artwork under public/labs, shown first in the slideshow. The full demo lives in the LinkedIn post.
  cover: string;
  stack: string[];
  repo: string;
  // LinkedIn post with the demo; the button appears only when this is set.
  demo?: string;
  // Presentation slides shown after the cover; captions come from the dictionary, same order.
  slides: string[];
};

// Smaller hands-on builds; facts come from each lab's README.
export const labs: Lab[] = [
  {
    slug: "network-automation",
    name: "Network Automation Lab",
    cover: "/labs/network-automation-cover.jpg",
    stack: ["Ansible", "Netplan", "YAML", "SSH", "Ubuntu Server", "VirtualBox"],
    repo: "https://github.com/InduwaraIhalavithana/Network-Automation-Lab",
    slides: [1, 2, 3, 4, 5, 6].map((n) => `/labs/network-automation/${n}.webp`),
    demo: "https://lnkd.in/p/gkB9Xt8K",
  },
];
