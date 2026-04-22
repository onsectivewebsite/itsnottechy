import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { blogPosts, blogCategories } from "@/data/blogs";
import { offices } from "@/data/offices";
import { authors } from "@/data/authors";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: "weekly", priority: 1, lastModified: now },
    { url: `${SITE.url}/services`, changeFrequency: "weekly", priority: 0.9, lastModified: now },
    { url: `${SITE.url}/industries`, changeFrequency: "weekly", priority: 0.9, lastModified: now },
    { url: `${SITE.url}/offices`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${SITE.url}/authors`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${SITE.url}/portfolio`, changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: `${SITE.url}/blog`, changeFrequency: "daily", priority: 0.9, lastModified: now },
    { url: `${SITE.url}/about`, changeFrequency: "monthly", priority: 0.7, lastModified: now },
    { url: `${SITE.url}/contact`, changeFrequency: "yearly", priority: 0.8, lastModified: now },
    { url: `${SITE.url}/privacy`, changeFrequency: "yearly", priority: 0.3, lastModified: now },
    { url: `${SITE.url}/terms`, changeFrequency: "yearly", priority: 0.3, lastModified: now },
    { url: `${SITE.url}/cookies`, changeFrequency: "yearly", priority: 0.3, lastModified: now },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: now,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${SITE.url}/industries/${i.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: now,
  }));

  const officeRoutes: MetadataRoute.Sitemap = offices.map((o) => ({
    url: `${SITE.url}/offices/${o.slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
    lastModified: now,
  }));

  const authorRoutes: MetadataRoute.Sitemap = authors.map((a) => ({
    url: `${SITE.url}/authors/${a.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
    lastModified: now,
  }));

  const blogCategoryRoutes: MetadataRoute.Sitemap = blogCategories.map((c) => ({
    url: `${SITE.url}/blog/category/${c.slug}`,
    changeFrequency: "weekly",
    priority: 0.75,
    lastModified: now,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: new Date(p.publishedAt),
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...officeRoutes,
    ...authorRoutes,
    ...blogCategoryRoutes,
    ...blogRoutes,
  ];
}
