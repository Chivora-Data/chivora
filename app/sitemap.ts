import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.chivora.co.uk'
  const now = new Date()

  const routes = [
    { url: '/', priority: 1.0 },
    { url: '/about', priority: 0.8 },
    { url: '/how-we-engage', priority: 0.8 },
    { url: '/methodology', priority: 0.8 },
    { url: '/case-studies', priority: 0.8 },
    { url: '/insights', priority: 0.7 },
    { url: '/contact', priority: 0.7 },
    { url: '/capability-statement', priority: 0.6 },
    { url: '/services/end-to-end-data-migration', priority: 0.9 },
    { url: '/services/data-migration-health-check', priority: 0.9 },
    { url: '/services/migration-rescue', priority: 0.9 },
    { url: '/services/post-go-live-retainer', priority: 0.8 },
    { url: '/services/data-cleansing-enrichment', priority: 0.8 },
    { url: '/services/data-migration-project-management', priority: 0.8 },
    { url: '/services/integration-interface-services', priority: 0.8 },
    { url: '/services/data-governance-mdm', priority: 0.8 },
    { url: '/services/reconciliation-analytics', priority: 0.8 },
    { url: '/source-systems/sap', priority: 0.8 },
    { url: '/source-systems/oracle', priority: 0.8 },
    { url: '/source-systems/sage', priority: 0.8 },
    { url: '/source-systems/dynamics-nav', priority: 0.8 },
    { url: '/source-systems/bpcs', priority: 0.7 },
    { url: '/source-systems/ifs', priority: 0.7 },
    { url: '/source-systems/access-dimensions', priority: 0.7 },
    { url: '/insights/why-data-migration-fails-on-d365-projects', priority: 0.7 },
    { url: '/insights/dmf-vs-kingswaysoft-vs-scribe', priority: 0.7 },
    { url: '/insights/migrating-open-ar-ap-transactions-lessons-learned', priority: 0.7 },
  ]

  return routes.map(({ url, priority }) => ({
    url: `${base}${url}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  }))
}
