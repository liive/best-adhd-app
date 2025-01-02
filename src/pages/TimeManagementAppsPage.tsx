import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppList } from '../components/AppList/AppList';
import { apps } from '../data/apps';

export function TimeManagementAppsPage() {
  const timeManagementApps = apps.filter(app => 
    app.pros.some(pro => 
      pro.toLowerCase().includes('time') || 
      pro.toLowerCase().includes('schedule') ||
      pro.toLowerCase().includes('planning')
    )
  );

  return (
    <>
      <Helmet>
        <title>Best ADHD Time Management Apps 2024 | Time Management Tools</title>
        <meta name="description" content="Find the best ADHD time management apps of 2024. Expert-selected tools to improve time awareness, scheduling, and daily planning for adults with ADHD." />
        <link rel="canonical" href="https://bestadhdapp.com/best-adhd-time-management-apps" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Best ADHD Time Management Apps 2024</h1>
        <AppList apps={timeManagementApps} />
      </main>
    </>
  );
}