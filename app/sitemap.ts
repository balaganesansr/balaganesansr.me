import type { MetadataRoute } from "next";
import { SITE_META } from "@/constants/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_META.url,
      lastModified: new Date("2026-07-12"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
