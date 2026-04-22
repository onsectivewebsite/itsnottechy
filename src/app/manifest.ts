import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "It's Not Techy",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0d0e13",
    theme_color: "#00b3a4",
    icons: [
      { src: "/logo.png", sizes: "2400x2400", type: "image/png" },
      { src: "/favicon.jpg", sizes: "512x512", type: "image/jpeg" },
    ],
  };
}
