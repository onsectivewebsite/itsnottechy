import { ImageResponse } from "next/og";
import { OgCard, ogSize, ogContentType } from "@/lib/og";
import { getIndustryBySlug } from "@/data/industries";
import { SITE } from "@/lib/site";

export const alt = "Industry";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OG({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  const title = industry?.name ?? SITE.name;
  const subtitle = industry?.tagline;
  return new ImageResponse(
    <OgCard eyebrow="Industry" title={title} subtitle={subtitle} />,
    size,
  );
}
