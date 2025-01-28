import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Target, Clock, Sparkles } from 'lucide-react';

export function ExpertInsightsPage() {
  return (
    <>
      <Helmet>
        <title>ADHD Expert Insights 2024 | Professional App Recommendations</title>
        <meta 
          name="description" 
          content="Expert insights on ADHD app effectiveness from leading specialists. Learn how digital tools can complement traditional ADHD treatment approaches and improve daily management."
        />
        <link rel="canonical" href="https://bestadhdapp.com/expert-insights" />
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Expert Insights: ADHD Apps & Digital Tools</h1>
          <p className="text-xl text-gray-600">
            Leading ADHD specialists share their perspectives on using digital tools effectively for ADHD management.
          </p>
        </div>
        
        <article className="prose prose-gray max-w-none">
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700">
              Discover how mental health professionals and ADHD specialists recommend integrating apps into your treatment plan for optimal results.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Clinical Perspectives</h2>
            
            <div className="grid gap-6">
              {[
                {
                  icon: Brain,
                  expert: "Dr. Sarah Johnson",
                  role: "Clinical Psychologist",
                  insight: "Digital tools can provide immediate feedback and reinforcement, which is crucial for ADHD minds. The best apps leverage this through gamification and reward systems."
                },
                {
                  icon: Target,
                  expert: "Dr. Michael Chen",
                  role: "Neuroscience Researcher",
                  insight: "Apps that use evidence-based techniques like the Pomodoro method or time-blocking can help create external structures that ADHD brains often struggle to maintain internally."
                },
                {
                  icon: Clock,
                  expert: "Dr. Emily Rodriguez",
                  role: "ADHD Specialist",
                  insight: "The key is finding apps that match your specific ADHD presentation. What works for primarily inattentive type might not work as well for combined type ADHD."
                },
                {
                  icon: Sparkles,
                  expert: "Prof. David Thompson",
                  role: "Behavioral Therapist",
                  insight: "The most effective apps are those that reduce cognitive load rather than adding to it. Simplicity and intuitive design are crucial features."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.expert}</h3>
                      <p className="text-sm text-gray-500 mb-2">{item.role}</p>
                      <p className="text-gray-600">{item.insight}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Implementation Guidelines</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ol className="list-decimal pl-6 space-y-4">
                <li className="text-gray-600">
                  <strong>Start Small:</strong> Begin with one app that addresses your most pressing ADHD challenge.
                </li>
                <li className="text-gray-600">
                  <strong>Establish Routines:</strong> Integrate app usage into your daily schedule.
                </li>
                <li className="text-gray-600">
                  <strong>Regular Review:</strong> Assess app effectiveness every few weeks and adjust as needed.
                </li>
                <li className="text-gray-600">
                  <strong>Combine Strategically:</strong> Use different apps for different aspects of ADHD management.
                </li>
              </ol>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}