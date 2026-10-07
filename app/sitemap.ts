import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/pricing",
    "/about",
    "/founder",
    "/cookies",
    "/terms",
    "/privacy",
    "/refund",
    "/shipping",
    "/contact",
    "/license",
  ];
  const currentDate = new Date().toISOString().split("T")[0];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" || route === "/pricing" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/pricing" ? 0.9 : 0.7,
  }));
}
