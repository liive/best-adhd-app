import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppList } from '../components/AppList/AppList';
import { apps } from '../data/apps';

export function Best2024AppsPage() {
  return (
    <>
      <Helmet>
        <title>Best ADHD Apps 2024 | Top-Rated ADHD Management Apps</title>
        <meta name="description" content="Discover the best ADHD apps of 2024. Comprehensive reviews and comparisons of top-rated apps for ADHD management, focus, and productivity." />
        <link rel="canonical" href="https://bestadhdapp.com/best-adhd-apps-2024" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Best ADHD Apps 2024</h1>
        <AppList apps={apps} />
      </main>
    </>
  );
}