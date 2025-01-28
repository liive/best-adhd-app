import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppList } from '../components/AppList/AppList';
import { apps } from '../data/apps';

export function AdultsAppsPage() {
  return (
    <>
      <Helmet>
        <title>Best ADHD Apps for Adults in 2024 | Top-Rated Adult ADHD Apps</title>
        <meta 
          name="description" 
          content="Discover the most effective ADHD apps for adults in 2024. Expert-reviewed apps for focus, organization, and productivity, specifically designed for adults managing ADHD."
        />
        <link rel="canonical" href="https://bestadhdapp.com/adhd-apps-for-adults" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Best ADHD Apps for Adults (2024)</h1>
          <p className="text-xl text-gray-600">
            Comprehensive guide to the most effective ADHD management apps, specifically designed for adult needs and challenges.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Adults Need Specialized ADHD Apps</h2>
          <p className="text-gray-700">
            Adult ADHD presents unique challenges in professional, personal, and social contexts. Our curated selection focuses on apps that address these specific needs, from complex project management to maintaining work-life balance.
          </p>
        </div>

        <AppList apps={apps} />
      </main>
    </>
  );
}