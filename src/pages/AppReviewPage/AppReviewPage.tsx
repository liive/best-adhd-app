import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { apps } from '../../data/apps';
import { generateSoftwareApplicationSchema } from '../../components/SEO/schemas/SoftwareApplicationSchema';
import { generateReviewListSchema } from '../../components/SEO/schemas/ReviewListSchema';
import { useReviews } from '../../hooks/useReviews';

export function AppReviewPage() {
  const { appName } = useParams();
  const app = apps.find(a => a.name.toLowerCase().replace(/\s+/g, '-') === appName);
  const { reviews } = useReviews(appName);

  if (!app) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">App not found</h1>
      </main>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${app.name} Review - Best ADHD Apps`,
    "description": `Detailed review of ${app.name} for ADHD management.`,
    "mainEntity": {
      ...generateSoftwareApplicationSchema(app),
      "review": generateReviewListSchema(reviews)
    }
  };

  return (
    <>
      <Helmet>
        <title>{`${app.name} Review - Best ADHD Apps 2024`}</title>
        <meta name="description" content={`Detailed review of ${app.name} for ADHD management, including features, pricing, and user experiences.`} />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-gray max-w-none">
          {/* Rest of your existing AppReviewPage content */}
        </article>
      </main>
    </>
  );
}