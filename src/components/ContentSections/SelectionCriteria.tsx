import React from 'react';
import { CheckCircle, Shield, Brain, Gauge } from 'lucide-react';

export function SelectionCriteria() {
  const criteria = [
    {
      icon: Brain,
      title: "ADHD-Specific Design",
      description: "Apps specifically designed around ADHD cognitive patterns and challenges"
    },
    {
      icon: Shield,
      title: "Evidence-Based Features",
      description: "Features grounded in clinical research and behavioral science"
    },
    {
      icon: Gauge,
      title: "Performance & Reliability",
      description: "Consistent performance with minimal technical issues"
    },
    {
      icon: CheckCircle,
      title: "User Experience",
      description: "Intuitive interface designed for ADHD-friendly navigation"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">How We Evaluate ADHD Apps</h2>
      
      <p className="text-gray-600 mb-8">
        Our rigorous evaluation process considers multiple factors to ensure each recommended app truly serves the ADHD community. We combine user feedback, expert reviews, and extensive testing to provide accurate, helpful recommendations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {criteria.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}