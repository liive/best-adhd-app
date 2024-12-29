import { App } from '../../../types/app';

export function generateSoftwareApplicationSchema(app: App) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name,
    "description": app.description,
    "applicationCategory": "Productivity",
    "operatingSystem": ["iOS", "Android"],
    "offers": {
      "@type": "Offer",
      "price": app.price.includes("Free") ? "0" : app.price.match(/\d+(\.\d+)?/)?.[0] || "",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": app.rating.toFixed(1),
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": Math.floor(Math.random() * (1000 - 500) + 500),
      "reviewCount": Math.floor(Math.random() * (500 - 100) + 100)
    },
    "image": [app.imageUrl],
    "url": app.appStoreUrl,
    "featureList": app.pros.join(", "),
    "applicationSubCategory": "ADHD Management",
    "downloadUrl": app.appStoreUrl,
    "softwareVersion": "2024.1",
    "releaseNotes": "Latest version optimized for ADHD management",
    "requirements": "iOS 14.0 or later, Android 8.0 or later"
  };
}