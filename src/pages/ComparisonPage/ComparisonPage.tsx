import React from 'react';
import { ComparisonTable } from './components/ComparisonTable';
import { FeatureMatrix } from './components/FeatureMatrix';
import { PricingComparison } from './components/PricingComparison';
import { apps } from '../../data/apps';

export function ComparisonPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">ADHD App Comparison</h1>
      
      <div className="space-y-12">
        <ComparisonTable apps={apps} />
        <FeatureMatrix apps={apps} />
        <PricingComparison apps={apps} />
      </div>
    </main>
  );
}