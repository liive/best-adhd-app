import React from 'react';
import { Brain, Stethoscope, GraduationCap } from 'lucide-react';

export function ExpertOpinions() {
  const opinions = [
    {
      expert: "Dr. Rachel Martinez",
      role: "Neuroscientist, UCLA",
      icon: Brain,
      opinion: "Digital tools can serve as external scaffolding for executive function, potentially leading to improved neural pathways over time. However, the key is consistent, structured use rather than sporadic engagement.",
      focus: "Neural plasticity and digital interventions"
    },
    {
      expert: "Dr. James Wilson",
      role: "Clinical Psychiatrist, Johns Hopkins",
      icon: Stethoscope,
      opinion: "While apps can be valuable tools in ADHD management, they should be viewed as part of a comprehensive treatment approach that may include medication, behavioral therapy, and lifestyle modifications.",
      focus: "Integrated treatment approaches"
    },
    {
      expert: "Prof. Lisa Chang",
      role: "Cognitive Psychology Researcher",
      icon: GraduationCap,
      opinion: "The effectiveness of digital tools varies significantly based on individual ADHD presentations. Personalization and adaptive features are crucial for long-term benefits.",
      focus: "Individual differences in digital intervention efficacy"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Expert Medical Perspectives</h2>
      
      <div className="space-y-6">
        {opinions.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{item.expert}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.role}</p>
                <p className="text-gray-600 mb-2">{item.opinion}</p>
                <p className="text-sm text-blue-600">Focus: {item.focus}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}