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
        <meta 
          name="description" 
          content="Discover the best ADHD time management apps of 2024. Expert-selected tools for improving time awareness, scheduling, and planning, designed specifically for ADHD minds."
        />
        <link rel="canonical" href="https://bestadhdapp.com/best-adhd-time-management-apps" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Best ADHD Time Management Apps 2024</h1>
          <p className="text-xl text-gray-600">
            Expert-selected apps to help you manage time, stay on schedule, and overcome time blindness.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Time Management Apps Matter for ADHD</h2>
          <p className="text-gray-700">
            Time management apps provide visual cues and structured systems that help ADHD minds better understand and work with time. Our selections focus on apps that make time more tangible and manageable.
          </p>
        </div>

        <AppList apps={timeManagementApps} />
      </main>
    </>
  );
}