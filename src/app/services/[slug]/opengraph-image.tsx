import { ImageResponse } from "next/og";
import { OgCard, ogSize, ogContentType } from "@/lib/og";
import { getServiceBySlug } from "@/data/services";
import { SITE } from "@/lib/site";

export const alt = "Service";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OG({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  const title = service?.title ?? SITE.name;
  const subtitle = service?.tagline;
  return new ImageResponse(
    <OgCard eyebrow="Service" title={title} subtitle={subtitle} />,
    size,
  );
}
