import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ComparisonTable } from './components/ComparisonTable';
import { FeatureMatrix } from './components/FeatureMatrix';
import { PricingComparison } from './components/PricingComparison';
import { apps } from '../../data/apps';

export function ComparisonPage() {
  return (
    <>
      <Helmet>
        <title>Compare ADHD Apps 2024 | Features, Pricing & Ratings Comparison</title>
        <meta 
          name="description" 
          content="Compare the best ADHD apps side-by-side. Detailed comparison of features, pricing, and ratings to help you choose the right ADHD management app for your needs."
        />
        <link rel="canonical" href="https://bestadhdapp.com/comparison" />
      </Helmet>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">ADHD App Comparison Guide 2024</h1>
          <p className="text-xl text-gray-600">
            Compare features, pricing, and ratings to find the perfect ADHD app for your needs.
          </p>
        </div>
        
        <div className="space-y-12">
          <ComparisonTable apps={apps} />
          <FeatureMatrix apps={apps} />
          <PricingComparison apps={apps} />
        </div>
      </main>
    </>
  );
}