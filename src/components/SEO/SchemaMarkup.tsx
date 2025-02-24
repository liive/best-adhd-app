import React from 'react';
import { apps } from '../../data/apps';
import { generateItemListSchema } from './schemas/ItemListSchema';
import { generateBreadcrumbSchema } from './schemas/BreadcrumbSchema';
import { generatePublisherSchema } from './schemas/PublisherSchema';

export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best ADHD Apps for 2024",
    "description": "Comprehensive guide to the best productivity apps designed for ADHD minds, featuring detailed reviews, comparisons, and real user ratings.",
    "url": "https://bestadhdapp.com",
    "mainEntity": generateItemListSchema(apps),
    "publisher": generatePublisherSchema(),
    "breadcrumb": generateBreadcrumbSchema()
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}