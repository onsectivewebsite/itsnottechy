import { ImageResponse } from "next/og";
import { OgCard, ogSize, ogContentType } from "@/lib/og";
import { getOfficeBySlug } from "@/data/offices";
import { SITE } from "@/lib/site";

export const alt = "Office";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OG({ params }: { params: { city: string } }) {
  const office = getOfficeBySlug(params.city);
  const title = office ? `${office.city} Digital Marketing` : SITE.name;
  const subtitle = office?.heroTagline;
  return new ImageResponse(
    <OgCard eyebrow={office?.role ?? "Office"} title={title} subtitle={subtitle} />,
    size,
  );
}
