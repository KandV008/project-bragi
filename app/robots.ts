import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/config', '/api', '/in-development', '/profile/shoppingList/shopping', '/model', '/ui'],
    },
    sitemap: 'https://audifonosxmenos.com/sitemap.xml',
  }
}