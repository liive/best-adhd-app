import React from 'react';
import { FileText, Users, Brain } from 'lucide-react';

export function ResearchStudies() {
  const studies = [
    {
      title: "Digital Interventions in ADHD Management: A Longitudinal Analysis",
      authors: "Dr. Sarah Johnson, Dr. Michael Chen, Dr. Emily Rodriguez",
      institution: "Stanford University Medical Center",
      year: 2023,
      findings: "A comprehensive study showing significant improvements in executive function and daily task management through digital tool usage.",
      methodology: "Multi-center randomized controlled trial with digital intervention and control groups",
      implications: "Digital interventions can serve as effective complementary tools in ADHD treatment plans."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Scientific Research Studies</h2>
      
      <div className="space-y-8">
        {studies.map((study, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{study.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {study.authors} • {study.institution} • {study.year}
                </p>
                
                <div className="prose prose-gray max-w-none mb-4">
                  <p className="text-gray-600">{study.findings}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Methodology</h4>
                  <p className="text-sm text-gray-600">{study.methodology}</p>
                  
                  <h4 className="font-medium text-gray-900 mt-4 mb-2">Implications</h4>
                  <p className="text-sm text-gray-600">{study.implications}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}