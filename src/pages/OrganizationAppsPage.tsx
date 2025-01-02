import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppList } from '../components/AppList/AppList';
import { apps } from '../data/apps';

export function OrganizationAppsPage() {
  const organizationApps = apps.filter(app => 
    app.pros.some(pro => 
      pro.toLowerCase().includes('organiz') || 
      pro.toLowerCase().includes('task') ||
      pro.toLowerCase().includes('project')
    )
  );

  return (
    <>
      <Helmet>
        <title>Best ADHD Organization Apps 2024 | Top-Rated Organization Tools</title>
        <meta name="description" content="Discover the best ADHD organization apps of 2024. Expert-reviewed tools to help manage tasks, projects, and daily organization for adults with ADHD." />
        <link rel="canonical" href="https://bestadhdapp.com/best-adhd-organization-apps" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Best ADHD Organization Apps 2024</h1>
        <AppList apps={organizationApps} />
      </main>
    </>
  );
}