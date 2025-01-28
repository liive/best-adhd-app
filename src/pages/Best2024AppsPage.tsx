import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppList } from '../components/AppList/AppList';
import { apps } from '../data/apps';

export function Best2024AppsPage() {
  return (
    <>
      <Helmet>
        <title>10 Best ADHD Apps of 2024 | Top-Rated Apps for ADHD Management</title>
        <meta 
          name="description" 
          content="Discover the top 10 ADHD apps for 2024. Expert-reviewed and ranked list of the most effective apps for focus, organization, and productivity with ADHD."
        />
        <link rel="canonical" href="https://bestadhdapp.com/best-adhd-apps-2024" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">10 Best ADHD Apps for 2024</h1>
          <p className="text-xl text-gray-600">
            Comprehensive reviews of this year's most effective ADHD management apps.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">How We Choose the Best Apps</h2>
          <p className="text-gray-700">
            Our selections are based on extensive testing, user feedback, and expert consultation. Each app is evaluated for its effectiveness in managing ADHD symptoms, ease of use, and long-term value.
          </p>
        </div>

        <AppList apps={apps} />
      </main>
    </>
  );
}