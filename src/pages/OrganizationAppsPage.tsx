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
        <title>Best ADHD Organization Apps 2024 | Top Task Management Tools</title>
        <meta 
          name="description" 
          content="Discover the best ADHD organization apps of 2024. Expert-reviewed tools for task management, project organization, and daily planning designed for ADHD minds."
        />
        <link rel="canonical" href="https://bestadhdapp.com/best-adhd-organization-apps" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Best ADHD Organization Apps 2024</h1>
          <p className="text-xl text-gray-600">
            Expert-selected apps to help you organize tasks, manage projects, and maintain order in your daily life.
          </p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Organization Apps Matter for ADHD</h2>
          <p className="text-gray-700">
            Organization apps provide external structure and visual systems that help ADHD minds manage tasks more effectively. Our selections focus on apps that reduce cognitive load while improving productivity.
          </p>
        </div>

        <AppList apps={organizationApps} />
      </main>
    </>
  );
}