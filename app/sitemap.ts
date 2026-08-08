import { MetadataRoute } from "next";
import { SERVICES_CONTENT } from "@/lib/content/services";
import { SOURCE_SYSTEMS_CONTENT } from "@/lib/content/sourceSystems";
import { INSIGHTS } from "@/lib/content/insights";

const BASE = "https://www.chivora.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages with hand-set dates — prevents Google thinking every page
  // changes daily (new Date() would do that on every build).
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, priority: 1.0, changeFrequency: "weekly", lastModified: new Date("2025-07-01") },
    { url: `${BASE}/about`, priority: 0.8, changeFrequency: "monthly", lastModified: new Date("2025-07-01") },
    { url: `${BASE}/how-we-engage`, priority: 0.8, changeFrequency: "monthly", lastModified: new Date("2025-07-01") },
    { url: `${BASE}/methodology`, priority: 0.8, changeFrequency: "monthly", lastModified: new Date("2025-07-01") },
    { url: `${BASE}/case-studies`, priority: 0.8, changeFrequency: "monthly", lastModified: new Date("2025-07-01") },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly", lastModified: new Date("2025-07-01") },
    { url: `${BASE}/source-systems`, priority: 0.8, changeFrequency: "monthly", lastModified: new Date("2025-07-01") },
    { url: `${BASE}/insights`, priority: 0.8, changeFrequency: "weekly", lastModified: new Date("2025-07-01") },
    { url: `${BASE}/faq`, priority: 0.7, changeFrequency: "monthly", lastModified: new Date("2025-07-01") },
    { url: `${BASE}/contact`, priority: 0.7, changeFrequency: "monthly", lastModified: new Date("2025-07-01") },
    { url: `${BASE}/capability-statement`, priority: 0.6, changeFrequency: "monthly", lastModified: new Date("2025-07-01") },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES_CONTENT.map((s) => ({
    url: `${BASE}/services/${s.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
    lastModified: new Date("2025-07-01"),
  }));

  const sourceSystemPages: MetadataRoute.Sitemap = SOURCE_SYSTEMS_CONTENT.map((s) => ({
    url: `${BASE}/source-systems/${s.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: new Date("2025-07-01"),
  }));

  const insightPages: MetadataRoute.Sitemap = INSIGHTS.filter((a) => a.published).map((a) => ({
    url: `${BASE}/insights/${a.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
    lastModified: new Date("2025-07-01"),
  }));

  return [...staticPages, ...servicePages, ...sourceSystemPages, ...insightPages];
}
