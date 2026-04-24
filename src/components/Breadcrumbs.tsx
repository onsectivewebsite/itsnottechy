import Script from "next/script";
import { SITE } from "@/lib/site";

type Crumb = { name: string; path: string };

export function BreadcrumbSchema({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
  const id = `ld-bc-${items.map((c) => c.path).join("-").replace(/[^a-z0-9]+/gi, "-")}`;
  return (
    <Script id={id} type="application/ld+json">
      {JSON.stringify(schema)}
    </Script>
  );
}
