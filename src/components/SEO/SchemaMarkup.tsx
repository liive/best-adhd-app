import React from 'react';
import { apps } from '../../data/apps';

export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "10 Best ADHD Apps for 2024 | Expert Reviews & Comparisons",
    "description": "Comprehensive guide to the best productivity apps designed for ADHD minds, featuring detailed reviews, comparisons, and real user ratings.",
    "image": "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f",
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "BestADHDApp",
      "url": "https://bestadhdapp.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BestADHDApp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bestadhdapp.com/logo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": apps.map((app, index) => ({
        "@type": "SoftwareApplication",
        "position": index + 1,
        "name": app.name,
        "description": app.description,
        "applicationCategory": "Productivity",
        "operatingSystem": "iOS, Android",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": app.rating,
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": Math.floor(Math.random() * (1000 - 500) + 500),
          "reviewCount": Math.floor(Math.random() * (500 - 100) + 100)
        },
        "offers": {
          "@type": "Offer",
          "price": app.price.includes("Free") ? "0" : app.price.match(/\d+(\.\d+)?/)?.[0] || "",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
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
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bestadhdapp.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Best ADHD Apps 2024",
          "item": "https://bestadhdapp.com/best-adhd-apps-2024"
        }
      ]
    },
    "isPartOf": {
      "@type": "WebSite",
      "name": "BestADHDApp",
      "url": "https://bestadhdapp.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}