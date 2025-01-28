import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SymptomGuide } from '../../components/Symptoms/SymptomGuide';
import { TreatmentIntegrationGuide } from '../../components/Treatment/TreatmentIntegrationGuide';
import { symptomCategories, treatmentIntegrations } from '../../data/symptoms';
import { AppRecommendations } from './components/AppRecommendations';
import { ManagementTips } from './components/ManagementTips';

export function SymptomsPage() {
  return (
    <>
      <Helmet>
        <title>ADHD Symptoms & Best Apps for Each Symptom | Complete Guide 2024</title>
        <meta 
          name="description" 
          content="Match your ADHD symptoms with the most effective apps. Expert guide to finding the right digital tools for managing specific ADHD challenges and symptoms."
        />
        <link rel="canonical" href="https://bestadhdapp.com/adhd-symptoms-and-apps" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">ADHD Symptoms and App Solutions Guide</h1>
          <p className="text-xl text-gray-600">
            Find the perfect apps to manage your specific ADHD symptoms and challenges.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6">Symptom-Specific Guides</h2>
            <div className="space-y-6">
              {symptomCategories.map(category => (
                <SymptomGuide key={category.id} category={category} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Treatment Integration</h2>
            <div className="space-y-6">
              {treatmentIntegrations.map((treatment, index) => (
                <TreatmentIntegrationGuide key={index} treatment={treatment} />
              ))}
            </div>
          </section>

          <AppRecommendations />
          <ManagementTips />
        </div>
      </main>
    </>
  );
}