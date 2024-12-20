import React from 'react';
import { AppList } from '../components/AppList/AppList';
import { Newsletter } from '../components/Newsletter/Newsletter';
import { Introduction } from '../components/ContentSections/Introduction';
import { SelectionCriteria } from '../components/ContentSections/SelectionCriteria';
import { AppCategories } from '../components/ContentSections/AppCategories';
import { ResearchSection } from '../components/ContentSections/ResearchSection';
import { DetailedAnalysis } from '../components/ContentSections/DetailedAnalysis';
import { apps } from '../data/apps';

export function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Introduction />
      <SelectionCriteria />
      <AppCategories />
      <Newsletter />
      <AppList apps={apps} />
      <ResearchSection />
      <DetailedAnalysis />
    </main>
  );
}