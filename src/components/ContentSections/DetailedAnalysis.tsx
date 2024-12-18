import React from 'react';

export function DetailedAnalysis() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Understanding ADHD App Categories</h2>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Task Management & Organization</h3>
          <p className="text-gray-600 mb-4">
            Task management apps designed for ADHD minds differ from standard productivity tools by incorporating features that address executive function challenges. These apps often include visual task breakdowns, dopamine-triggering reward systems, and flexible scheduling that accommodates varying attention levels.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Visual task hierarchies for better information processing</li>
            <li>Flexible deadlines that adapt to executive function variations</li>
            <li>Integrated reward systems for motivation maintenance</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Focus & Concentration Tools</h3>
          <p className="text-gray-600 mb-4">
            Focus-enhancement apps utilize various techniques including background sound manipulation, visual timers, and distraction blocking. These tools are particularly effective when customized for different types of ADHD and varying sensitivity levels.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Customizable background sounds for optimal focus</li>
            <li>Visual time management tools</li>
            <li>Smart distraction blocking based on usage patterns</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4">Emotional Regulation & Mindfulness</h3>
          <p className="text-gray-600 mb-4">
            Emotional regulation apps help manage the often overlooked emotional aspects of ADHD. These applications provide tools for mood tracking, mindfulness exercises, and cognitive behavioral techniques specifically adapted for ADHD minds.
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>ADHD-specific meditation and mindfulness exercises</li>
            <li>Emotional pattern recognition and analysis</li>
            <li>Immediate coping strategy suggestions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}