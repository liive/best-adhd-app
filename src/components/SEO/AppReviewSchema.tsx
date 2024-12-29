import React from 'react';
import { App } from '../../types/app';
import { Review } from '../../types/review';
import { generateSoftwareApplicationSchema } from './schemas/SoftwareApplicationSchema';
import { generateReviewListSchema } from './schemas/ReviewListSchema';

interface AppReviewSchemaProps {
  app: App;
  reviews: Review[];
}

export function AppReviewSchema({ app, reviews }: AppReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${app.name} Review - Best ADHD Apps`,
    "description": `Detailed review of ${app.name} for ADHD management, including features, pricing, and user experiences.`,
    "mainEntity": {
      ...generateSoftwareApplicationSchema(app),
      "review": generateReviewListSchema(reviews)
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}