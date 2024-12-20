import React from 'react';
import { Lightbulb } from 'lucide-react';

export function ManagementTips() {
  const tips = [
    {
      title: "Combine Apps Strategically",
      description: "Use different apps for different symptoms. For example, combine a focus app with a task manager."
    },
    {
      title: "Start Small",
      description: "Begin with one app targeting your most challenging symptom before adding more tools."
    },
    {
      title: "Regular Review",
      description: "Assess app effectiveness every few weeks and adjust your toolkit as needed."
    },
    {
      title: "Customize Settings",
      description: "Take time to personalize app settings to match your specific ADHD presentation."
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Management Tips</h2>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg">
                <Lightbulb className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}