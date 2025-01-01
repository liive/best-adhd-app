import React from 'react';
import { SymptomGuide } from '../../components/Symptoms/SymptomGuide';
import { TreatmentIntegrationGuide } from '../../components/Treatment/TreatmentIntegrationGuide';
import { symptomCategories, treatmentIntegrations } from '../../data/symptoms';
import { AppRecommendations } from './components/AppRecommendations';
import { ManagementTips } from './components/ManagementTips';

export function SymptomsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-gray max-w-none">
        <h1 className="text-4xl font-bold mb-6">ADHD Symptoms and Digital Management</h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Understanding how different apps address specific ADHD symptoms can help you build an effective digital toolkit for managing your condition.
        </p>

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
      </article>
    </main>
  );
}