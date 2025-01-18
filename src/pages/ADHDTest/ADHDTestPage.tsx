import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { TestQuestionnaire } from './components/TestQuestionnaire';
import { TestResults } from './components/TestResults';
import { DisclaimerBanner } from './components/DisclaimerBanner';

export function ADHDTestPage() {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});

  const handleTestComplete = (finalScore: number, answers: Record<string, number>) => {
    setScore(finalScore);
    setResponses(answers);
    setShowResults(true);
  };

  return (
    <>
      <Helmet>
        <title>Test for ADHD in Women | Free Online ADHD Assessment</title>
        <meta 
          name="description" 
          content="Take our comprehensive ADHD test for women. This free assessment helps identify common ADHD symptoms in women and provides insights for seeking professional evaluation."
        />
        <link rel="canonical" href="https://bestadhdapp.com/adhd-test" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <DisclaimerBanner />

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">ADHD Test for Women</h1>
          <p className="text-lg text-gray-600">
            This assessment is designed to help identify common ADHD symptoms in women. While not a diagnostic 
            tool, it can provide insights into whether professional evaluation might be beneficial.
          </p>
        </div>

        {!showResults ? (
          <TestQuestionnaire onComplete={handleTestComplete} />
        ) : (
          <TestResults score={score} responses={responses} />
        )}

        <div className="mt-8 bg-blue-50 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Important Note</h2>
              <p className="text-gray-600">
                This test is not a diagnostic tool. ADHD can only be diagnosed by qualified healthcare 
                professionals through comprehensive evaluation. If you're concerned about ADHD, please consult 
                with a healthcare provider who specializes in adult ADHD, particularly in women.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}