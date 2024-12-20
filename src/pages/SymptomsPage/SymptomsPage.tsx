import React from 'react';
import { SymptomsList } from './components/SymptomsList';
import { AppRecommendations } from './components/AppRecommendations';
import { ManagementTips } from './components/ManagementTips';

export function SymptomsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-gray max-w-none">
        <h1 className="text-4xl font-bold mb-6">ADHD Symptoms and App Solutions</h1>
        
        <p className="lead text-xl text-gray-600 mb-8">
          Understanding how different apps address specific ADHD symptoms can help you build an effective digital toolkit for managing your condition.
        </p>

        <div className="space-y-12">
          <SymptomsList />
          <AppRecommendations />
          <ManagementTips />
        </div>
      </article>
    </main>
  );
}