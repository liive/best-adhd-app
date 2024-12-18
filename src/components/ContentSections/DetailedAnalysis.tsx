import React from 'react';

export function DetailedAnalysis() {
  return (
    <section className="mt-20 mb-16 bg-gray-50 rounded-2xl p-8 border border-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Understanding ADHD App Categories</h2>
      
      <p className="text-gray-600 mb-8 text-lg">
        Different ADHD apps serve various needs and symptoms. Understanding these categories helps in selecting the right combination of tools for your specific challenges.
      </p>

      <div className="space-y-6">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Task Management & Organization</h3>
          </div>
          <p className="text-gray-600 mb-6 text-lg">
            Task management apps designed for ADHD minds differ from standard productivity tools by incorporating features that address executive function challenges. These apps often include visual task breakdowns, dopamine-triggering reward systems, and flexible scheduling that accommodates varying attention levels.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-3 marker:text-blue-500">
            <li>Visual task hierarchies for better information processing</li>
            <li>Flexible deadlines that adapt to executive function variations</li>
            <li>Integrated reward systems for motivation maintenance</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Focus & Concentration Tools</h3>
          </div>
          <p className="text-gray-600 mb-6 text-lg">
            Focus-enhancement apps utilize various techniques including background sound manipulation, visual timers, and distraction blocking. These tools are particularly effective when customized for different types of ADHD and varying sensitivity levels.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-3 marker:text-purple-500">
            <li>Customizable background sounds for optimal focus</li>
            <li>Visual time management tools</li>
            <li>Smart distraction blocking based on usage patterns</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Emotional Regulation & Mindfulness</h3>
          </div>
          <p className="text-gray-600 mb-6 text-lg">
            Emotional regulation apps help manage the often overlooked emotional aspects of ADHD. These applications provide tools for mood tracking, mindfulness exercises, and cognitive behavioral techniques specifically adapted for ADHD minds.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-3 marker:text-green-500">
            <li>ADHD-specific meditation and mindfulness exercises</li>
            <li>Emotional pattern recognition and analysis</li>
            <li>Immediate coping strategy suggestions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}