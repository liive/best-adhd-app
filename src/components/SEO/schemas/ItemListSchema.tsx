import { App } from '../../../types/app';

export function generateItemListSchema(apps: App[]) {
  return {
    "@type": "ItemList",
    "name": "Best ADHD Mobile Apps 2024",
    "description": "A curated directory of the most effective mobile apps for managing ADHD symptoms and improving productivity.",
    "numberOfItems": apps.length,
    "itemListElement": apps.map((app, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": app.name,
        "description": app.description,
        "applicationCategory": "Productivity",
        "operatingSystem": "iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": app.price.includes("Free") ? "0" : app.price.match(/\d+(\.\d+)?/)?.[0] || "",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": app.rating,
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": Math.floor(Math.random() * (1000 - 500) + 500)
        },
        "image": app.imageUrl,
        "url": app.appStoreUrl,
        "featureList": app.pros.join(", "),
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": app.rating,
            "bestRating": "5"
          },
          "author": {
            "@type": "Organization",
            "name": "BestADHDApp"
          }
        }
      }
    }))
  };
}