import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://audifonosxmenos.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://audifonosxmenos.com/search?category=EARPHONE',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://audifonosxmenos.com/search?category=EARPHONE',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 9,
    },
    {
      url: 'https://audifonosxmenos.com/services/about-us',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://audifonosxmenos.com/services/appointment',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: 'https://audifonosxmenos.com/profile',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ]
}