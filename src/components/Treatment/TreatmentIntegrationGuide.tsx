import React from 'react';
import { Stethoscope, CheckSquare } from 'lucide-react';
import type { TreatmentIntegration } from '../../types/symptom';

interface TreatmentIntegrationGuideProps {
  treatment: TreatmentIntegration;
}

export function TreatmentIntegrationGuide({ treatment }: TreatmentIntegrationGuideProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-green-50 rounded-lg">
          <Stethoscope className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{treatment.type}</h3>
      </div>

      <p className="text-gray-600 mb-6">{treatment.description}</p>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Digital Integration</h4>
          <ul className="space-y-2">
            {treatment.digitalIntegration.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <CheckSquare className="w-4 h-4 text-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-3">Key Considerations</h4>
          <ul className="space-y-2">
            {treatment.considerations.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}