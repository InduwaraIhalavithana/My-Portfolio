import type { Dictionary } from "@/i18n/dictionaries/en";

export type LabSlug = keyof Dictionary["labs"]["items"];

export type Lab = {
  slug: LabSlug;
  name: string;
  // Both live under public/labs. The poster is 16:9 artwork with text, shown before the video plays.
  video: string;
  poster: string;
  stack: string[];
  repo: string;
};

// Smaller hands-on builds; facts come from each lab's README.
export const labs: Lab[] = [
  {
    slug: "network-automation",
    name: "Network Automation Lab",
    video: "/labs/network-automation-demo.mp4",
    poster: "/labs/network-automation-poster.jpg",
    stack: ["Ansible", "Netplan", "YAML", "SSH", "Ubuntu Server", "VirtualBox"],
    repo: "https://github.com/InduwaraIhalavithana/Network-Automation-Lab",
  },
];
