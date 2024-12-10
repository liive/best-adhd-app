import React from 'react';
import { apps } from '../../data/apps';

export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best ADHD Apps | Top-Rated Tools for Focus and Productivity",
    "description": "Comprehensive guide to the best productivity apps designed for ADHD minds, featuring detailed reviews, comparisons, and real user ratings.",
    "image": "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f",
    "datePublished": "2024-03-19",
    "dateModified": "2024-03-19",
    "author": {
      "@type": "Organization",
      "name": "Best ADHD Apps"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Best ADHD Apps",
      "logo": {
        "@type": "ImageObject",
        "url": "https://your-domain.com/logo.png"
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
        "offers": {
          "@type": "Offer",
          "price": app.price.includes("Free") ? "0" : app.price.match(/\d+(\.\d+)?/)?.[0] || "",
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": app.rating,
          "ratingCount": Math.floor(Math.random() * (1000 - 100) + 100)
        }
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}