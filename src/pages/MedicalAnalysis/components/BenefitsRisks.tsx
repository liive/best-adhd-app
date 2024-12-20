import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

export function BenefitsRisks() {
  const analysis = {
    benefits: [
      {
        title: "Cognitive Support",
        description: "Digital tools can provide immediate feedback and reinforcement, supporting executive function development."
      },
      {
        title: "Structured Environment",
        description: "Apps create consistent, predictable frameworks that help regulate attention and behavior."
      },
      {
        title: "Data-Driven Insights",
        description: "Continuous monitoring enables better understanding of individual patterns and triggers."
      }
    ],
    risks: [
      {
        title: "Digital Dependence",
        description: "Over-reliance on apps may inhibit the development of internal coping mechanisms."
      },
      {
        title: "Cognitive Load",
        description: "Poorly designed interfaces or too many features can increase rather than decrease cognitive burden."
      },
      {
        title: "Privacy Concerns",
        description: "Collection of sensitive behavioral and health data raises privacy and security considerations."
      }
    ]
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Medical Benefits & Risks Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Medical Benefits</h3>
          </div>
          
          <div className="space-y-4">
            {analysis.benefits.map((benefit, index) => (
              <div key={index}>
                <h4 className="font-medium text-gray-900 mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold text-gray-900">Medical Risks</h3>
          </div>
          
          <div className="space-y-4">
            {analysis.risks.map((risk, index) => (
              <div key={index}>
                <h4 className="font-medium text-gray-900 mb-1">{risk.title}</h4>
                <p className="text-sm text-gray-600">{risk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}