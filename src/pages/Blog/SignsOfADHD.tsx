import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, AlertCircle, Target, Clock } from 'lucide-react';

export function SignsOfADHD() {
  return (
    <>
      <Helmet>
        <title>Common Signs of ADHD | Recognizing ADHD Symptoms</title>
        <meta 
          name="description" 
          content="Learn about the common signs and indicators of ADHD. Understand how ADHD manifests in different aspects of life and when to seek professional evaluation."
        />
        <link rel="canonical" href="https://bestadhdapp.com/blog/signs-of-adhd" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-gray max-w-none">
          <h1 className="text-4xl font-bold mb-6">Common Signs of ADHD: A Comprehensive Guide</h1>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700">
              ADHD manifests differently in each individual, but there are common patterns and signs that can help identify the condition. Understanding these signs is crucial for early recognition and appropriate support seeking.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Core Signs of ADHD</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Brain className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Attention Patterns</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-gray-600">Difficulty maintaining focus on non-preferred tasks</li>
                  <li className="text-gray-600">Hyperfocus on engaging activities</li>
                  <li className="text-gray-600">Easily distracted by external stimuli</li>
                  <li className="text-gray-600">Trouble following detailed instructions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Executive Function</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-gray-600">Poor time management skills</li>
                  <li className="text-gray-600">Difficulty with organization</li>
                  <li className="text-gray-600">Procrastination tendencies</li>
                  <li className="text-gray-600">Struggles with task initiation</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">Behavioral Signs</h3>
                </div>
                <ul className="space-y-2">
                  <li className="text-gray-600">Impulsive decision making</li>
                  <li className="text-gray-600">Restlessness or fidgeting</li>
                  <li className="text-gray-600">Difficulty sitting still</li>
                  <li className="text-gray-600">Interrupting conversations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Impact on Daily Life</h2>
            <p>
              ADHD signs often manifest across various life domains, affecting both personal and professional aspects. Understanding these impacts can help identify patterns that might indicate ADHD:
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Work/Academic Life</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">Missing deadlines despite good intentions</li>
                    <li className="text-gray-600">Difficulty maintaining organized workspaces</li>
                    <li className="text-gray-600">Inconsistent performance</li>
                    <li className="text-gray-600">Trouble with long-term projects</li>
                    <li className="text-gray-600">Forgetting important meetings</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Personal Life</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">Relationship maintenance challenges</li>
                    <li className="text-gray-600">Financial management difficulties</li>
                    <li className="text-gray-600">Household organization struggles</li>
                    <li className="text-gray-600">Emotional regulation issues</li>
                    <li className="text-gray-600">Sleep pattern disruptions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Less Recognized Signs</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <strong>Emotional Sensitivity:</strong>
                    <p className="text-gray-600">Heightened emotional responses and difficulty managing feelings</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <strong>Time Blindness:</strong>
                    <p className="text-gray-600">Poor awareness of time passing and difficulty estimating time needed for tasks</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <strong>Analysis Paralysis:</strong>
                    <p className="text-gray-600">Overthinking decisions and struggling to take action</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <strong>Sensory Sensitivities:</strong>
                    <p className="text-gray-600">Heightened reactions to sounds, textures, or visual stimuli</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">When to Seek Professional Evaluation</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                Consider seeking professional evaluation if you experience multiple signs that:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-600">• Persist for 6 months or longer</li>
                <li className="text-gray-600">• Occur in multiple settings (work, home, social)</li>
                <li className="text-gray-600">• Significantly impact daily functioning</li>
                <li className="text-gray-600">• Cause distress or interfere with relationships</li>
                <li className="text-gray-600">• Cannot be explained by other conditions</li>
              </ul>
              
              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <p className="text-sm text-gray-600">
                  Remember: Only a qualified healthcare professional can diagnose ADHD. This guide provides information about common signs but is not a diagnostic tool.
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}