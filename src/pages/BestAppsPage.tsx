import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AppList } from '../components/AppList/AppList';
import { Newsletter } from '../components/Newsletter/Newsletter';
import { Introduction } from '../components/ContentSections/Introduction';
import { SelectionCriteria } from '../components/ContentSections/SelectionCriteria';
import { AppCategories } from '../components/ContentSections/AppCategories';
import { ResearchSection } from '../components/ContentSections/ResearchSection';
import { DetailedAnalysis } from '../components/ContentSections/DetailedAnalysis';
import { MedicalAdvisoryBoard } from '../components/MedicalAdvisory/MedicalAdvisoryBoard';
import { ClinicalEvidence } from '../components/MedicalAdvisory/ClinicalEvidence';
import { apps } from '../data/apps';

export function BestAppsPage() {
  return (
    <>
      <Helmet>
        <title>Best ADHD Apps | Expert Reviews & App Recommendations</title>
        <meta 
          name="description" 
          content="Discover the best ADHD apps. Expert-reviewed recommendations for focus, organization, and productivity. Find the perfect app for your ADHD management needs."
        />
        <link rel="canonical" href="https://bestadhdapp.com/best-adhd-apps" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Best ADHD Apps</h1>
          <p className="text-xl text-gray-600">
            Comprehensive reviews of the most effective ADHD management apps, tested and recommended by experts.
          </p>
        </div>

        <Newsletter />
        
        <div className="mt-12 mb-16">
          <AppList apps={apps} isLink={true} />
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Living with ADHD?</h2>
          <p className="text-gray-700">
            We understand the daily challenges. Our team has personally tested each app 
            to ensure they actually work for ADHD brains. No more trial and error - 
            find the tools that truly help you thrive.
          </p>
        </div>

        <div className="mb-12 overflow-x-auto">
          <h2 className="text-2xl font-bold mb-4">Quick Price Comparison</h2>
          <table className="w-full bg-white rounded-lg shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">App</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Best For</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Free Trial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {apps.map(app => (
                <tr key={app.name} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{app.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{app.pros[0]}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{app.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {app.price.toLowerCase().includes('free') ? 'Yes' : 'No'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-16">
          <Introduction />
          <ClinicalEvidence />
          <SelectionCriteria />
          <AppCategories />
          <ResearchSection />
          <DetailedAnalysis />
          <MedicalAdvisoryBoard />
        </div>
      </main>
    </>
  );
}