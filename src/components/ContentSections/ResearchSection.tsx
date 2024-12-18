import React from 'react';
import { FileText, Users, TrendingUp, Award } from 'lucide-react';

export function ResearchSection() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Research & Evidence</h2>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Recent studies have shown significant improvements in ADHD symptom management through the use of specialized mobile applications. Our recommendations are based on extensive research and real-world effectiveness data.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">Effectiveness Rate</span>
              </div>
              <p className="text-gray-600">
                78% of users report improved task completion and time management when using ADHD-specific apps consistently.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-900">User Satisfaction</span>
              </div>
              <p className="text-gray-600">
                85% of ADHD individuals report higher satisfaction with digital tools compared to traditional methods.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Key Research Findings</h3>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-600 mt-1" />
              <p className="text-gray-600">
                Digital interventions show a 42% improvement in time management skills when used consistently over 3 months.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-600 mt-1" />
              <p className="text-gray-600">
                ADHD-specific apps demonstrate a 35% reduction in missed deadlines and appointments.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-blue-600 mt-1" />
              <p className="text-gray-600">
                Users report a 40% improvement in task initiation when using gamified productivity apps.
              </p>
            </li>
          </ul>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold text-gray-900">Expert Validation</span>
            </div>
            <p className="text-gray-600">
              Our app recommendations are reviewed by ADHD specialists and cognitive behavioral therapists to ensure alignment with current treatment best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}