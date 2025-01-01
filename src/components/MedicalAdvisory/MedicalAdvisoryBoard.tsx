import React from 'react';
import { ExpertAuthor } from '../ExpertAuthor/ExpertAuthor';
import { experts } from '../../data/experts';
import { Shield } from 'lucide-react';

export function MedicalAdvisoryBoard() {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Shield className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Medical Advisory Board</h2>
      </div>

      <p className="text-gray-600 mb-8">
        Our recommendations are reviewed and validated by leading ADHD specialists and mental health professionals to ensure accuracy and clinical relevance.
      </p>

      <div className="space-y-6">
        {experts.map(expert => (
          <ExpertAuthor key={expert.id} expert={expert} />
        ))}
      </div>
    </section>
  );
}