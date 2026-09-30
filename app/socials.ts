export type Social = {
  id: "youtube" | "instagram" | "linkedin" | "x" | "facebook";
  name: string;
  handle: string;
  href: string;
  about: string;
  featured: boolean;
};

// Every social link on the site reads from this list.
// LinkedIn, X and Facebook are placeholders — swap in the real profile URLs.
export const socials: Social[] = [
  {
    id: "youtube",
    name: "YouTube",
    handle: "@Tigan.ai.innovations",
    href: "https://www.youtube.com/@Tigan.ai.innovations",
    about: "Product demos, build walkthroughs and the occasional failed experiment.",
    featured: true,
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@tigan.ai.innovations",
    href: "https://www.instagram.com/tigan.ai.innovations/",
    about: "Short clips from the studio, early sketches and launch-day photos.",
    featured: true,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "Tigan AI Innovations",
    href: "https://www.linkedin.com/company/tigan-ai-innovations/",
    about: "Company news and open roles.",
    featured: false,
  },
  {
    id: "x",
    name: "X",
    handle: "@tiganai",
    href: "https://x.com/tiganai",
    about: "Release notes as they ship.",
    featured: false,
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "tigan.ai.innovations",
    href: "https://www.facebook.com/tigan.ai.innovations",
    about: "Event photos and community updates.",
    featured: false,
  },
];

export const youtube = socials.find((s) => s.id === "youtube")!;
