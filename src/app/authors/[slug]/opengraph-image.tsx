import { ImageResponse } from "next/og";
import { OgCard, ogSize, ogContentType } from "@/lib/og";
import { authors } from "@/data/authors";
import { SITE } from "@/lib/site";

export const alt = "Author";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OG({ params }: { params: { slug: string } }) {
  const author = authors.find((a) => a.slug === params.slug);
  const title = author?.name ?? SITE.name;
  const subtitle = author?.role;
  return new ImageResponse(
    <OgCard eyebrow="Author" title={title} subtitle={subtitle} />,
    size,
  );
}
