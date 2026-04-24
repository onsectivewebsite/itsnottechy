import { ImageResponse } from "next/og";
import { OgCard, ogSize, ogContentType } from "@/lib/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function OG() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Digital Marketing Agency"
        title={SITE.tagline}
        subtitle="Web · SEO · Social · Video · Brand · Paid · Platforms"
      />
    ),
    size,
  );
}
