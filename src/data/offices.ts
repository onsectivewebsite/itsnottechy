export type OfficeDetail = {
  slug: string;
  city: string;
  country: string;
  countryCode: string;
  locale: string;
  flag: string;
  role: string;
  tz: string;
  heroTagline: string;
  summary: string;
  whyHere: string[];
  popularServices: string[];
  popularIndustries: string[];
  blogCategories: string[];
  nearbyCities: string[];
  keywords: string[];
  /**
   * Local-business signals. Fill these in with REAL verified registered
   * addresses + per-office phone numbers before claiming each office's Google
   * Business Profile. Fake or placeholder addresses are an SEO risk (Google
   * cross-checks against business registries) and can result in GBP suspension.
   *
   * Leave blank for service-area offices with no walk-in location — the
   * LocalBusiness schema will correctly emit as a service-area business with
   * `areaServed`, which is the right schema.org shape for that situation.
   */
  streetAddress?: string;
  postalCode?: string;
  addressRegion?: string;
  phone?: string;
  phoneRaw?: string;
  geo?: { latitude: number; longitude: number };
  openingHours?: string[];
  /** True if the office has a registered walk-in address. Emits richer LocalBusiness schema. */
  verified?: boolean;
};

/**
 * Offices that still need verified street address + regional phone data before
 * we can claim their regional Google Business Profile listings. This list is
 * generated at module load for validation / reporting.
 */
export function getOfficesNeedingVerification() {
  return offices.filter((o) => !o.verified);
}

export const offices: OfficeDetail[] = [
  {
    slug: "toronto",
    city: "Toronto",
    country: "Canada",
    countryCode: "CA",
    locale: "en-CA",
    flag: "🇨🇦",
    role: "Global HQ",
    tz: "America/Toronto",
    heroTagline: "Our Global HQ, serving ambitious Canadian brands.",
    summary:
      "Our Toronto office is the global HQ — the origin of our brand, our playbook, and most of our leadership. From here we serve growth-stage brands across the GTA, Ottawa, Montreal, and Vancouver, plus US clients that want a Canadian production base.",
    whyHere: [
      "English/French bilingual content and media planning.",
      "Compliance fluency for PIPEDA, CASL, and Quebec's Bill 96.",
      "Direct proximity to Bay Street finance and MaRS innovation district clients.",
    ],
    popularServices: [
      "web-development",
      "seo",
      "social-media-marketing",
      "branding",
      "performance-marketing",
    ],
    popularIndustries: [
      "saas-and-b2b",
      "finance-and-fintech",
      "real-estate-and-proptech",
      "professional-services",
    ],
    blogCategories: ["seo", "web-design", "brand-design", "paid-marketing"],
    nearbyCities: ["New York", "Berlin"],
    keywords: [
      "Toronto digital marketing agency",
      "GTA marketing agency",
      "Etobicoke marketing agency",
      "Canada marketing agency",
      "Toronto SEO agency",
      "Toronto web design",
      "Toronto social media agency",
    ],
    streetAddress: "1111 Albion Rd",
    postalCode: "M9V 2X3",
    addressRegion: "ON",
    phone: "+1 672-673-7900",
    phoneRaw: "+16726737900",
    geo: { latitude: 43.7444, longitude: -79.5636 },
    openingHours: ["Mo-Fr 09:00-18:00"],
    verified: true,
  },
  {
    slug: "new-york",
    city: "New York",
    country: "United States",
    countryCode: "US",
    locale: "en-US",
    flag: "🇺🇸",
    role: "Americas Hub",
    tz: "America/New_York",
    heroTagline: "Growth engine for US-market brands.",
    summary:
      "Our New York office runs Americas hub accounts — high-velocity DTC, fintech, SaaS, and media brands that need aggressive creative, sharp paid media, and compounding SEO. If you're growing from $1M to $100M in the US market, this is the team you'll work with day to day.",
    whyHere: [
      "Same-day creative production in NYC for beauty, fashion, and DTC brands.",
      "Embedded with creator networks across Brooklyn and Manhattan.",
      "Finance, fintech, and SaaS clients concentrated around NYC.",
    ],
    popularServices: [
      "performance-marketing",
      "ecommerce-marketing",
      "influencer-marketing",
      "video-production",
      "seo",
    ],
    popularIndustries: [
      "ecommerce-and-dtc",
      "beauty-and-fashion",
      "finance-and-fintech",
      "saas-and-b2b",
    ],
    blogCategories: ["paid-marketing", "ecommerce", "video-production"],
    nearbyCities: ["Toronto"],
    keywords: [
      "New York digital marketing agency",
      "NYC marketing agency",
      "New York SEO agency",
      "New York paid marketing agency",
      "Brooklyn agency",
      "Manhattan marketing agency",
    ],
    addressRegion: "NY",
    geo: { latitude: 40.7128, longitude: -74.006 },
    openingHours: ["Mo-Fr 09:00-18:00"],
  },
  {
    slug: "london",
    city: "London",
    country: "United Kingdom",
    countryCode: "GB",
    locale: "en-GB",
    flag: "🇬🇧",
    role: "EMEA Hub",
    tz: "Europe/London",
    heroTagline: "EMEA hub for brands building in Europe and the UK.",
    summary:
      "Our London office runs EMEA programs — serving UK brands and global companies expanding into Europe. We handle GDPR-first analytics, multi-country SEO, and paid media across the UK, Ireland, DACH, France, and the Nordics.",
    whyHere: [
      "GDPR-first analytics and consent management as a default.",
      "Multi-language SEO and content across EN, DE, FR, ES, NL.",
      "Creator network coverage across London, Manchester, Dublin, and Berlin.",
    ],
    popularServices: [
      "seo",
      "content-marketing",
      "performance-marketing",
      "marketing-platforms",
      "b2b-marketing",
    ],
    popularIndustries: [
      "saas-and-b2b",
      "ecommerce-and-dtc",
      "finance-and-fintech",
      "professional-services",
    ],
    blogCategories: ["seo", "content-marketing", "analytics", "b2b-growth"],
    nearbyCities: ["Berlin", "Dubai"],
    keywords: [
      "London digital marketing agency",
      "UK marketing agency",
      "London SEO agency",
      "EMEA marketing agency",
      "GDPR marketing agency",
    ],
    geo: { latitude: 51.5074, longitude: -0.1278 },
    openingHours: ["Mo-Fr 09:00-18:00"],
  },
  {
    slug: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    locale: "en-AE",
    flag: "🇦🇪",
    role: "Middle East Hub",
    tz: "Asia/Dubai",
    heroTagline: "Middle East hub — bilingual, compliance-aware growth.",
    summary:
      "Our Dubai office runs campaigns across the UAE, KSA, Qatar, Egypt, and the wider GCC. We produce bilingual Arabic/English content, run campaigns respectful of regional compliance, and plug into influencer networks across the Middle East.",
    whyHere: [
      "Bilingual Arabic/English content and creative production.",
      "Compliance-aware creative for KSA, UAE, Qatar, and Egypt.",
      "Integrated with GCC creator and media networks.",
    ],
    popularServices: [
      "social-media-marketing",
      "video-production",
      "performance-marketing",
      "influencer-marketing",
      "branding",
    ],
    popularIndustries: [
      "hospitality-and-travel",
      "real-estate-and-proptech",
      "beauty-and-fashion",
      "ecommerce-and-dtc",
    ],
    blogCategories: ["social-media", "video-production", "paid-marketing"],
    nearbyCities: ["London", "Mumbai"],
    keywords: [
      "Dubai digital marketing agency",
      "UAE marketing agency",
      "GCC marketing agency",
      "KSA marketing agency",
      "Arabic marketing agency",
    ],
    geo: { latitude: 25.2048, longitude: 55.2708 },
    openingHours: ["Su-Th 09:00-18:00"],
  },
  {
    slug: "mumbai",
    city: "Mumbai",
    country: "India",
    countryCode: "IN",
    locale: "en-IN",
    flag: "🇮🇳",
    role: "APAC Delivery Center",
    tz: "Asia/Kolkata",
    heroTagline: "APAC delivery — scale with craft, around the clock.",
    summary:
      "Our Mumbai office is our largest delivery center — SEO production, content writing, design, development, and analytics delivered at scale with the same senior-led quality bar. We also run India-market campaigns for domestic DTC, fintech, and SaaS brands.",
    whyHere: [
      "Senior-led content, SEO, development, and design at scale.",
      "Native Hindi, English, Marathi, Tamil, Bengali language coverage.",
      "India-market campaigns for DTC, fintech, and SaaS brands.",
    ],
    popularServices: [
      "seo",
      "content-marketing",
      "web-development",
      "analytics",
      "graphic-design",
    ],
    popularIndustries: [
      "ecommerce-and-dtc",
      "saas-and-b2b",
      "finance-and-fintech",
      "education-and-edtech",
    ],
    blogCategories: ["seo", "content-marketing", "analytics", "web-design"],
    nearbyCities: ["Singapore", "Dubai"],
    keywords: [
      "Mumbai digital marketing agency",
      "India marketing agency",
      "India SEO agency",
      "Bangalore marketing agency",
      "Delhi marketing agency",
    ],
    addressRegion: "MH",
    geo: { latitude: 19.076, longitude: 72.8777 },
    openingHours: ["Mo-Fr 09:30-18:30"],
  },
  {
    slug: "singapore",
    city: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    locale: "en-SG",
    flag: "🇸🇬",
    role: "APAC Hub",
    tz: "Asia/Singapore",
    heroTagline: "APAC hub for regional expansion and Southeast Asia growth.",
    summary:
      "Our Singapore office runs APAC programs — from Singapore-HQ SaaS and fintech brands expanding across Southeast Asia to global brands entering the region. Multi-country campaigns across SG, MY, ID, PH, TH, VN, and HK.",
    whyHere: [
      "Multi-country APAC campaign management across 8 markets.",
      "English, Bahasa, Thai, Tagalog, Vietnamese content coverage.",
      "Fintech, SaaS, and ecommerce specialists for APAC.",
    ],
    popularServices: [
      "b2b-marketing",
      "performance-marketing",
      "marketing-platforms",
      "seo",
      "content-marketing",
    ],
    popularIndustries: [
      "saas-and-b2b",
      "finance-and-fintech",
      "ecommerce-and-dtc",
      "hospitality-and-travel",
    ],
    blogCategories: ["b2b-growth", "paid-marketing", "analytics"],
    nearbyCities: ["Sydney", "Mumbai"],
    keywords: [
      "Singapore digital marketing agency",
      "APAC marketing agency",
      "Southeast Asia marketing",
      "Singapore SEO agency",
    ],
    geo: { latitude: 1.3521, longitude: 103.8198 },
    openingHours: ["Mo-Fr 09:00-18:00"],
  },
  {
    slug: "sydney",
    city: "Sydney",
    country: "Australia",
    countryCode: "AU",
    locale: "en-AU",
    flag: "🇦🇺",
    role: "Oceania Hub",
    tz: "Australia/Sydney",
    heroTagline: "Oceania hub for ANZ brands and global expansion.",
    summary:
      "Our Sydney office runs programs across Australia and New Zealand — from local DTC and hospitality brands to SaaS companies scaling into APAC. We blend Sydney's creative talent with our global delivery network.",
    whyHere: [
      "ANZ-fluent creative and media planning.",
      "Australian Privacy Principles and Spam Act compliance built in.",
      "Connected to global APAC capacity across Singapore and Mumbai.",
    ],
    popularServices: [
      "web-development",
      "branding",
      "social-media-marketing",
      "performance-marketing",
      "email-marketing",
    ],
    popularIndustries: [
      "ecommerce-and-dtc",
      "hospitality-and-travel",
      "saas-and-b2b",
      "fitness-and-sports",
    ],
    blogCategories: ["social-media", "ecommerce", "brand-design"],
    nearbyCities: ["Singapore"],
    keywords: [
      "Sydney digital marketing agency",
      "Australia marketing agency",
      "ANZ marketing agency",
      "Sydney SEO agency",
    ],
    addressRegion: "NSW",
    geo: { latitude: -33.8688, longitude: 151.2093 },
    openingHours: ["Mo-Fr 09:00-18:00"],
  },
  {
    slug: "berlin",
    city: "Berlin",
    country: "Germany",
    countryCode: "DE",
    locale: "en-DE",
    flag: "🇩🇪",
    role: "EU Engineering",
    tz: "Europe/Berlin",
    heroTagline: "Berlin — engineering craft for EU data and performance.",
    summary:
      "Our Berlin office focuses on engineering-heavy work — headless commerce builds, Next.js platforms, server-side tracking for GDPR environments, AI integrations, and MarTech stack architecture for EU clients.",
    whyHere: [
      "Headless commerce and Next.js platform specialists.",
      "GDPR-native server-side tracking and consent architecture.",
      "AI integrations built to EU AI Act requirements.",
    ],
    popularServices: [
      "web-development",
      "app-development",
      "analytics",
      "marketing-platforms",
      "ai-marketing",
    ],
    popularIndustries: [
      "saas-and-b2b",
      "ecommerce-and-dtc",
      "finance-and-fintech",
      "manufacturing-and-industrial",
    ],
    blogCategories: ["web-design", "analytics", "marketing-platforms", "ai-marketing"],
    nearbyCities: ["London"],
    keywords: [
      "Berlin digital marketing agency",
      "Germany marketing agency",
      "Berlin web development",
      "EU marketing agency",
      "DACH marketing agency",
    ],
    geo: { latitude: 52.52, longitude: 13.405 },
    openingHours: ["Mo-Fr 09:00-18:00"],
  },
];

export const getOfficeBySlug = (slug: string) =>
  offices.find((o) => o.slug === slug);
