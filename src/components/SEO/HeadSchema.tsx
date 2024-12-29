import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { App } from '../../types/app';
import { Review } from '../../types/review';
import { generateSoftwareApplicationSchema } from './schemas/SoftwareApplicationSchema';
import { generateReviewListSchema } from './schemas/ReviewListSchema';
import { generateItemListSchema } from './schemas/ItemListSchema';
import { generateBreadcrumbSchema } from './schemas/BreadcrumbSchema';
import { generatePublisherSchema } from './schemas/PublisherSchema';
import { apps } from '../../data/apps';

export function HeadSchema() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Best ADHD Apps for 2024",
    "description": "Comprehensive guide to the best ADHD apps.",
    "mainEntity": generateItemListSchema(apps),
    "publisher": generatePublisherSchema(),
    "breadcrumb": generateBreadcrumbSchema()
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}