import { ImageResponse } from "next/og";
import { OgCard, ogSize, ogContentType } from "@/lib/og";
import { getBlogBySlug } from "@/data/blogs";
import { SITE } from "@/lib/site";

export const alt = "Blog post";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OG({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug);
  const title = post?.title ?? SITE.name;
  const eyebrow = post?.category ?? "Blog";
  const subtitle = post?.excerpt;
  return new ImageResponse(
    <OgCard eyebrow={eyebrow} title={title} subtitle={subtitle} />,
    size,
  );
}
