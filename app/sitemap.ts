import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://adislimited.com"

    return [
        { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/services`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/projects`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/policy`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/careers`, lastModified: new Date().toISOString() },
    ]
}