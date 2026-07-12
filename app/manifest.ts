import type { MetadataRoute } from "next";
import { IDENTITY, SITE_META } from "@/constants/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_META.title,
    short_name: IDENTITY.name,
    description: SITE_META.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f2e9",
    theme_color: "#f6f2e9",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
