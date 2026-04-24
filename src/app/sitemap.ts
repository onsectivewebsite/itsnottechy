import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { blogPosts, blogCategories } from "@/data/blogs";
import { offices } from "@/data/offices";
import { authors } from "@/data/authors";
import { SITE } from "@/lib/site";

// Captured once at module init (build time for static export, server start for
// SSR). This keeps lastmod stable between requests so crawlers can trust it.
const BUILD_TIME = new Date();

const latestBlogDate = blogPosts.reduce<Date>((acc, p) => {
  const d = new Date(p.updatedAt ?? p.publishedAt);
  return d > acc ? d : acc;
}, new Date(0));

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: "weekly", priority: 1, lastModified: BUILD_TIME },
    { url: `${SITE.url}/services`, changeFrequency: "monthly", priority: 0.9, lastModified: BUILD_TIME },
    { url: `${SITE.url}/industries`, changeFrequency: "monthly", priority: 0.9, lastModified: BUILD_TIME },
    { url: `${SITE.url}/offices`, changeFrequency: "monthly", priority: 0.8, lastModified: BUILD_TIME },
    { url: `${SITE.url}/authors`, changeFrequency: "monthly", priority: 0.7, lastModified: BUILD_TIME },
    { url: `${SITE.url}/portfolio`, changeFrequency: "monthly", priority: 0.8, lastModified: BUILD_TIME },
    { url: `${SITE.url}/blog`, changeFrequency: "weekly", priority: 0.9, lastModified: latestBlogDate },
    { url: `${SITE.url}/about`, changeFrequency: "monthly", priority: 0.7, lastModified: BUILD_TIME },
    { url: `${SITE.url}/contact`, changeFrequency: "yearly", priority: 0.8, lastModified: BUILD_TIME },
    { url: `${SITE.url}/privacy`, changeFrequency: "yearly", priority: 0.3, lastModified: BUILD_TIME },
    { url: `${SITE.url}/terms`, changeFrequency: "yearly", priority: 0.3, lastModified: BUILD_TIME },
    { url: `${SITE.url}/cookies`, changeFrequency: "yearly", priority: 0.3, lastModified: BUILD_TIME },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: BUILD_TIME,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${SITE.url}/industries/${i.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
    lastModified: BUILD_TIME,
  }));

  const officeRoutes: MetadataRoute.Sitemap = offices.map((o) => ({
    url: `${SITE.url}/offices/${o.slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
    lastModified: BUILD_TIME,
    alternates: {
      languages: Object.fromEntries(
        offices.map((x) => [x.locale, `${SITE.url}/offices/${x.slug}`]),
      ),
    },
  }));

  const authorRoutes: MetadataRoute.Sitemap = authors.map((a) => ({
    url: `${SITE.url}/authors/${a.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
    lastModified: BUILD_TIME,
  }));

  const blogCategoryRoutes: MetadataRoute.Sitemap = blogCategories.map((c) => {
    const latestInCategory = blogPosts
      .filter((p) => p.categorySlug === c.slug)
      .reduce<Date>((acc, p) => {
        const d = new Date(p.updatedAt ?? p.publishedAt);
        return d > acc ? d : acc;
      }, new Date(0));
    return {
      url: `${SITE.url}/blog/category/${c.slug}`,
      changeFrequency: "weekly",
      priority: 0.75,
      lastModified: latestInCategory.getTime() > 0 ? latestInCategory : BUILD_TIME,
    };
  });

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
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
