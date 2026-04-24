import { ImageResponse } from "next/og";
import { OgCard, ogSize, ogContentType } from "@/lib/og";
import { getGlossaryTerm, GLOSSARY_CATEGORIES } from "@/data/glossary";
import { SITE } from "@/lib/site";

export const alt = "Glossary term";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OG({ params }: { params: { slug: string } }) {
  const t = getGlossaryTerm(params.slug);
  const title = t?.term ?? "Marketing Glossary";
  const subtitle = t?.tagline;
  const category = t ? GLOSSARY_CATEGORIES.find((c) => c.slug === t.category)?.name ?? "Glossary" : "Glossary";
  return new ImageResponse(
    <OgCard eyebrow={category} title={title} subtitle={subtitle} />,
    size,
  );
}
