import { ImageResponse } from "next/og";
import { OgCard, ogSize, ogContentType } from "@/lib/og";
import { getServiceBySlug } from "@/data/services";
import { getOfficeBySlug } from "@/data/offices";
import { SITE } from "@/lib/site";

export const alt = "Service × City";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OG({
  params,
}: {
  params: { slug: string; city: string };
}) {
  const service = getServiceBySlug(params.slug);
  const office = getOfficeBySlug(params.city);
  const title = service && office ? `${service.shortTitle} Agency in ${office.city}` : SITE.name;
  const subtitle = service ? service.tagline : undefined;
  const eyebrow = office ? `${office.flag} ${office.country}` : "Service";
  return new ImageResponse(
    <OgCard eyebrow={eyebrow} title={title} subtitle={subtitle} />,
    size,
  );
}
