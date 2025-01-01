import React from 'react';
import { Brain, CheckCircle, AlertTriangle } from 'lucide-react';
import type { SymptomCategory } from '../../types/symptom';

interface SymptomGuideProps {
  category: SymptomCategory;
}

export function SymptomGuide({ category }: SymptomGuideProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Brain className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
      </div>

      <p className="text-gray-600 mb-6">{category.description}</p>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Common Challenges</h4>
          <ul className="space-y-2">
            {category.commonChallenges.map((challenge, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">Helpful App Features</h4>
          <ul className="space-y-2">
            {category.appFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-medium text-gray-900 mb-3">Management Tips</h4>
        <ul className="grid gap-2 md:grid-cols-2">
          {category.managementTips.map((tip, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-600">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}