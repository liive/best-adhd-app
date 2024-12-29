import React from 'react';
import { useSchemaUpdates } from '../../hooks/useSchemaUpdates';
import { generateItemListSchema } from './schemas/ItemListSchema';
import { generateBreadcrumbSchema } from './schemas/BreadcrumbSchema';
import { generatePublisherSchema } from './schemas/PublisherSchema';
import { apps } from '../../data/apps';

export function DynamicSchemaMarkup() {
  const { sortedApps, schemaVersion } = useSchemaUpdates(apps);

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best ADHD Apps for 2024",
    "description": "Comprehensive guide to the best productivity apps designed for ADHD minds.",
    "dateModified": schemaVersion,
    "mainEntity": generateItemListSchema(sortedApps),
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