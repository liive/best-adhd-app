import React from 'react';
import { TrendingUp, Brain, Shield } from 'lucide-react';

export function LongTermImpact() {
  const impacts = [
    {
      icon: TrendingUp,
      title: "Behavioral Adaptation",
      timeframe: "2-5 years",
      findings: "Studies indicate potential improvements in self-regulation and executive function through consistent digital tool usage.",
      considerations: [
        "Individual variation in response",
        "Importance of consistent engagement",
        "Role of complementary treatments"
      ]
    },
    {
      icon: Brain,
      title: "Cognitive Development",
      timeframe: "5-10 years",
      findings: "Preliminary research suggests possible positive impacts on neural pathways related to attention and executive function.",
      considerations: [
        "Age-dependent effects",
        "Interaction with natural development",
        "Quality of digital interventions"
      ]
    },
    {
      icon: Shield,
      title: "Treatment Integration",
      timeframe: "Ongoing",
      findings: "Digital tools are increasingly recognized as valuable components of comprehensive ADHD management strategies.",
      considerations: [
        "Balance with traditional treatments",
        "Personalization requirements",
        "Healthcare system integration"
      ]
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Long-Term Impact Analysis</h2>
      
      <div className="space-y-6">
        {impacts.map((impact, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <impact.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{impact.title}</h3>
                  <span className="text-sm text-gray-500">({impact.timeframe})</span>
                </div>
                <p className="text-gray-600 mb-4">{impact.findings}</p>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Considerations:</h4>
                  <ul className="space-y-1">
                    {impact.considerations.map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}