import React from 'react';
import { ResearchStudies } from './components/ResearchStudies';
import { ExpertOpinions } from './components/ExpertOpinions';
import { BenefitsRisks } from './components/BenefitsRisks';
import { LongTermImpact } from './components/LongTermImpact';

export function MedicalAnalysisPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-gray max-w-none">
        <h1 className="text-4xl font-bold mb-6">Medical Analysis: Digital Tools & ADHD Management</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg text-gray-700">
            A comprehensive analysis of scientific research on the impact of digital tools in ADHD management, including long-term effects, benefits, and potential risks.
          </p>
        </div>

        <ResearchStudies />
        <ExpertOpinions />
        <BenefitsRisks />
        <LongTermImpact />
      </article>
    </main>
  );
}