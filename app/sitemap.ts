import type { MetadataRoute } from 'next'

const baseURL = 'https://audifonosxmenos.com'

type changeFrequencyType = "yearly" | "always" | "hourly" | "daily" | "weekly" | "monthly" | "never" | undefined

interface siteMapElement {
  fragmentedURL: string
  changeFrequency?: changeFrequencyType;
  priority?: number
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allCategories: siteMapElement[] = [
    {fragmentedURL: "EARPHONE", priority: 0.9}, 
    {fragmentedURL: "ACCESSORY", priority: 1}]
  const allServices: siteMapElement[] = [
    {fragmentedURL:"about-us", changeFrequency:"yearly", priority:0.5}, 
    {fragmentedURL:"appointment", changeFrequency:"yearly", priority:0.6}, 
    {fragmentedURL:"bargains", changeFrequency:"monthly", priority:0.7},
    {fragmentedURL:"contact", changeFrequency:"monthly", priority:0.8},
    {fragmentedURL:"novelties", changeFrequency:"monthly", priority:0.7},
    {fragmentedURL:"send-audiometry-file", changeFrequency:"yearly", priority:0.1},
  ]
  
  const searchingLandingPages = allCategories.map(
    elem => ({
      url: `${baseURL}/search?category=${elem.fragmentedURL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: elem.priority,
    })
  ) as MetadataRoute.Sitemap

  const servicesLandingPages = allServices.map(
    elem => ({
      url: `${baseURL}/services/${elem.fragmentedURL}`,
      lastModified: new Date(),
      changeFrequency: elem.changeFrequency,
      priority: elem.priority,
    })
  )

  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseURL}/profile`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    ...searchingLandingPages,
    ...servicesLandingPages,
  ]
}