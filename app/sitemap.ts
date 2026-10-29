import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/benchmarks",
    "/benchmarks/methodology",
    "/architecture",
    "/features",
    "/developers",
    "/drivers",
    "/deployment",
    "/cloud",
    "/pricing",
    "/changelog",
    "/community",
    "/about",
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
    changeFrequency: route === "" || route === "/benchmarks" || route === "/changelog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/pricing" || route === "/developers" ? 0.9 : 0.7,
  }));
}
