export type Author = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  office: string;
  linkedin?: string;
};

export const authors: Author[] = [
  {
    slug: "rishabh-sharma",
    name: "Rishabh Sharma",
    role: "Founder & Strategy Lead",
    image: "/images/team/rishabh.jpg",
    bio: "Rishabh founded It's Not Techy to build the agency he always wanted to hire — senior-led, outcomes-obsessed, and honest about what works. Before that he led growth teams across SaaS and DTC, shipping programs from zero to $100M+ ARR.",
    expertise: [
      "B2B Growth",
      "SaaS Marketing",
      "Marketing Platforms",
      "Fractional CMO",
    ],
    office: "toronto",
  },
  {
    slug: "kavya-mehra",
    name: "Kavya Mehra",
    role: "Brand & Creative Director",
    image: "/images/team/kavya.jpg",
    bio: "Kavya leads brand strategy and creative direction across every engagement — from naming and identity systems to campaign art direction and design systems. Ten years across boutique and in-house studios.",
    expertise: ["Brand Design", "Visual Identity", "Creative Direction", "UX/UI"],
    office: "mumbai",
  },
  {
    slug: "kumakshi-verma",
    name: "Kumakshi Verma",
    role: "Head of Content & Social",
    image: "/images/team/kumakshi.jpg",
    bio: "Kumakshi owns editorial and social across the practice — turning research and POV into content that ranks, resonates, and compounds. Published author, ex-newsroom, cares deeply about craft.",
    expertise: [
      "Content Marketing",
      "Social Media Strategy",
      "Editorial",
      "Influencer Marketing",
    ],
    office: "toronto",
  },
  {
    slug: "riyan-kapoor",
    name: "Riyan Kapoor",
    role: "Growth & Paid Media Lead",
    image: "/images/team/riyan.jpg",
    bio: "Riyan runs paid media across Meta, Google, LinkedIn, TikTok, and programmatic. Deep focus on creative testing, CAC payback, and media mix modeling — every account ships to clear unit economics.",
    expertise: ["Paid Marketing", "Performance Marketing", "Ecommerce", "Analytics"],
    office: "new-york",
  },
  {
    slug: "shabir-malik",
    name: "Shabir Malik",
    role: "Engineering & Web Lead",
    image: "/images/team/team-shabir.jpg",
    bio: "Shabir leads engineering — websites, web apps, integrations, and MarTech stacks. Specialist in Next.js, Shopify Hydrogen, server-side tracking, and AI-assisted workflows.",
    expertise: [
      "Web Design",
      "Web Development",
      "Marketing Platforms",
      "AI Marketing",
    ],
    office: "berlin",
  },
  {
    slug: "its-not-techy-editorial",
    name: "It's Not Techy Editorial",
    role: "Editorial Collective",
    image: "/images/team/rishabh.jpg",
    bio: "Our collective byline for pieces written by multiple specialists across the practice — research briefs, industry reports, and technical deep dives that come out of the studio.",
    expertise: ["Editorial", "Research", "Industry Reports"],
    office: "toronto",
  },
];

export const getAuthorBySlug = (slug: string) =>
  authors.find((a) => a.slug === slug);

export function authorSlugFromName(name: string): string {
  return name
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
