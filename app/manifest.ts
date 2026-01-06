// app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Omroep Brabant – Voor jou",
    short_name: "OB Voor jou",
    description: "Jouw nieuws op basis van locaties en thema’s.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0B0F",
    theme_color: "#E00000",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
