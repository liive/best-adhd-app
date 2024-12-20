import React from 'react';
import { Brain, Clock, Target, AlertCircle } from 'lucide-react';

export function SymptomsList() {
  const symptoms = [
    {
      icon: Brain,
      category: "Focus & Attention",
      symptoms: [
        "Difficulty maintaining attention",
        "Easy distraction",
        "Problems with sustained mental effort",
        "Frequent task switching"
      ]
    },
    {
      icon: Clock,
      category: "Time Management",
      symptoms: [
        "Poor time awareness",
        "Difficulty meeting deadlines",
        "Procrastination",
        "Time blindness"
      ]
    },
    {
      icon: Target,
      category: "Organization",
      symptoms: [
        "Trouble prioritizing tasks",
        "Difficulty with planning",
        "Lost or misplaced items",
        "Cluttered workspace"
      ]
    },
    {
      icon: AlertCircle,
      category: "Executive Function",
      symptoms: [
        "Task initiation problems",
        "Working memory challenges",
        "Difficulty with transitions",
        "Decision-making struggles"
      ]
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Common ADHD Symptoms</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {symptoms.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <category.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">{category.category}</h3>
            </div>
            
            <ul className="space-y-2">
              {category.symptoms.map((symptom, symptomIndex) => (
                <li key={symptomIndex} className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                  {symptom}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}