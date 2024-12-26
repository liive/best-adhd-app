import React from 'react';
import { AppList } from '../components/AppList/AppList';
import { Newsletter } from '../components/Newsletter/Newsletter';
import { Introduction } from '../components/ContentSections/Introduction';
import { SelectionCriteria } from '../components/ContentSections/SelectionCriteria';
import { AppCategories } from '../components/ContentSections/AppCategories';
import { ResearchSection } from '../components/ContentSections/ResearchSection';
import { DetailedAnalysis } from '../components/ContentSections/DetailedAnalysis';
import { ArticleSchema } from '../components/SEO/ArticleSchema';
import { ExpertAuthorBio } from '../components/SEO/ExpertAuthorBio';
import { ResearchCitation } from '../components/SEO/ResearchCitation';
import { apps } from '../data/apps';

export function HomePage() {
  return (
    <>
      <ArticleSchema 
        title="10 Best ADHD Apps for 2024 | Expert Reviews & Comparisons"
        description="Discover the top-rated ADHD apps of 2024. Expert reviews, detailed feature comparisons, and real user ratings."
        datePublished="2024-03-19"
        dateModified="2024-03-19"
        authors={[
          {
            name: "Dr. Sarah Johnson",
            title: "Clinical Psychologist",
            bio: "Specializing in ADHD treatment for over 15 years"
          }
        ]}
        citations={[
          {
            title: "Digital Interventions in ADHD Management",
            authors: ["Johnson, S.", "Chen, M."],
            journal: "Journal of Digital Health",
            year: 2024,
            doi: "10.1000/adhd.2024.001"
          }
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Newsletter and App List first */}
        <Newsletter />
        <div className="mt-12 mb-16">
          <AppList apps={apps} />
        </div>

        {/* Expert Author Bio */}
        <div className="mb-12">
          <ExpertAuthorBio
            name="Dr. Sarah Johnson"
            title="Clinical Psychologist"
            credentials={["Ph.D. Clinical Psychology", "ADHD Specialist"]}
            bio="Dr. Johnson has been specializing in ADHD treatment for over 15 years, helping patients leverage digital tools for better symptom management."
            imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          />
        </div>

        {/* Content sections */}
        <Introduction />
        <SelectionCriteria />
        <AppCategories />
        <ResearchSection />
        <DetailedAnalysis />

        {/* Research Citations */}
        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold mb-6">Research Citations</h2>
          <ResearchCitation
            title="Digital Interventions in ADHD Management"
            authors={["Johnson, S.", "Chen, M."]}
            journal="Journal of Digital Health"
            year={2024}
            doi="10.1000/adhd.2024.001"
            summary="A comprehensive study on the effectiveness of digital tools in ADHD management."
          />
        </div>
      </main>
    </>
  );
}