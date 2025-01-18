import React from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

interface TestResultsProps {
  score: number;
  responses: Record<string, number>;
}

export function TestResults({ score, responses }: TestResultsProps) {
  const maxScore = Object.keys(responses).length * 3;
  const scorePercentage = (score / maxScore) * 100;

  const getResultCategory = () => {
    if (scorePercentage >= 70) {
      return {
        level: 'High likelihood of ADHD symptoms',
        description: 'Your responses indicate a significant presence of ADHD symptoms. Professional evaluation is strongly recommended.',
        icon: AlertCircle,
        color: 'text-red-600',
        bg: 'bg-red-50'
      };
    } else if (scorePercentage >= 40) {
      return {
        level: 'Moderate presence of ADHD symptoms',
        description: 'Your responses suggest some ADHD symptoms. Consider discussing these results with a healthcare provider.',
        icon: Info,
        color: 'text-yellow-600',
        bg: 'bg-yellow-50'
      };
    } else {
      return {
        level: 'Low indication of ADHD symptoms',
        description: 'Your responses suggest minimal ADHD symptoms. However, if you have concerns, discuss them with a healthcare provider.',
        icon: CheckCircle,
        color: 'text-green-600',
        bg: 'bg-green-50'
      };
    }
  };

  const result = getResultCategory();

  return (
    <div className="space-y-8">
      <div className={`${result.bg} p-6 rounded-lg`}>
        <div className="flex items-start gap-3">
          <result.icon className={`w-6 h-6 ${result.color} flex-shrink-0 mt-1`} />
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{result.level}</h2>
            <p className="text-gray-600">{result.description}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-medium">1</span>
            </div>
            <p className="text-gray-600">
              Save or print these results to share with a healthcare provider.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-medium">2</span>
            </div>
            <p className="text-gray-600">
              Schedule an appointment with a healthcare provider who specializes in adult ADHD.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-medium">3</span>
            </div>
            <p className="text-gray-600">
              Keep track of your symptoms and how they affect your daily life to discuss during your evaluation.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Resources</h3>
        <ul className="space-y-3">
          <li>
            <a href="/blog/adhd-women-symptoms" className="text-blue-600 hover:text-blue-700">
              Understanding ADHD Symptoms in Women
            </a>
          </li>
          <li>
            <a href="/blog/add-women" className="text-blue-600 hover:text-blue-700">
              Complete Guide to ADD/ADHD in Women
            </a>
          </li>
          <li>
            <a href="/expert-insights" className="text-blue-600 hover:text-blue-700">
              Expert Insights on ADHD Management
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}