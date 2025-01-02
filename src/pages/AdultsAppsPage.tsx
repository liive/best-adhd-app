import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppList } from '../components/AppList/AppList';
import { apps } from '../data/apps';

export function AdultsAppsPage() {
  return (
    <>
      <Helmet>
        <title>Best ADHD Apps for Adults 2024 | Adult ADHD Management Tools</title>
        <meta name="description" content="Comprehensive guide to the best ADHD apps for adults in 2024. Find expert-reviewed apps for focus, organization, and productivity designed for adult ADHD." />
        <link rel="canonical" href="https://bestadhdapp.com/adhd-apps-for-adults" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Best ADHD Apps for Adults 2024</h1>
        <AppList apps={apps} />
      </main>
    </>
  );
}