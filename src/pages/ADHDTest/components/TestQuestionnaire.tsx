import React, { useState } from 'react';
import { questions } from '../data/questions';

interface TestQuestionnaireProps {
  onComplete: (score: number, responses: Record<string, number>) => void;
}

export function TestQuestionnaire({ onComplete }: TestQuestionnaireProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});

  const handleResponse = (questionId: string, value: number) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateScore = () => {
    return Object.values(responses).reduce((sum, value) => sum + value, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalScore = calculateScore();
    onComplete(finalScore, responses);
  };

  const currentQuestions = questions[currentSection].questions;
  const isLastSection = currentSection === questions.length - 1;
  const canProceed = currentQuestions.every(q => responses[q.id] !== undefined);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {questions[currentSection].title}
          </h2>
          <p className="text-gray-600">{questions[currentSection].description}</p>
        </div>

        <div className="space-y-6">
          {currentQuestions.map((question) => (
            <div key={question.id} className="border-b border-gray-200 pb-6">
              <p className="text-gray-900 mb-4">{question.text}</p>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: 0, label: 'Never' },
                  { value: 1, label: 'Sometimes' },
                  { value: 2, label: 'Often' },
                  { value: 3, label: 'Very Often' }
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleResponse(question.id, option.value)}
                    className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                      responses[question.id] === option.value
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          {currentSection > 0 && (
            <button
              type="button"
              onClick={() => setCurrentSection(prev => prev - 1)}
              className="px-6 py-2 text-blue-600 font-medium hover:text-blue-700"
            >
              Previous Section
            </button>
          )}
          {!isLastSection ? (
            <button
              type="button"
              onClick={() => setCurrentSection(prev => prev + 1)}
              disabled={!canProceed}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
            >
              Next Section
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canProceed}
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
            >
              Get Results
            </button>
          )}
        </div>
      </form>
    </div>
  );
}