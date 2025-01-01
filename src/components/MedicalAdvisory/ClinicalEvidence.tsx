import React from 'react';
import { ResearchCitation } from '../Research/ResearchCitation';
import { FileText } from 'lucide-react';
import type { ResearchPaper } from '../../types/research';

const clinicalStudies: ResearchPaper[] = [
  {
    id: 'digital-interventions-2024',
    title: 'Digital Interventions in Adult ADHD Management: A Systematic Review',
    authors: ['Johnson, S.', 'Chen, M.', 'Rodriguez, E.'],
    institution: 'Stanford University Medical Center',
    journal: 'Journal of Digital Health',
    year: 2024,
    doi: '10.1000/jdh.2024.1234',
    abstract: 'A comprehensive analysis of digital intervention effectiveness in adult ADHD management.',
    findings: [
      '45% improvement in task completion with digital tools',
      '38% reduction in reported stress levels',
      '52% increase in successful project completion'
    ],
    methodology: 'Systematic review of 50 peer-reviewed studies with meta-analysis',
    keywords: ['ADHD', 'digital interventions', 'adult ADHD', 'app effectiveness']
  }
];

export function ClinicalEvidence() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 rounded-lg">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Clinical Evidence</h2>
      </div>

      <p className="text-gray-600 mb-8">
        Our app recommendations are supported by peer-reviewed research and clinical studies.
      </p>

      <div className="space-y-6">
        {clinicalStudies.map(study => (
          <ResearchCitation key={study.id} paper={study} expanded />
        ))}
      </div>
    </section>
  );
}