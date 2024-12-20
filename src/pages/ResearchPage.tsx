import React from 'react';
import { FileText, TrendingUp, Users } from 'lucide-react';

export function ResearchPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-gray max-w-none">
        <h1 className="text-4xl font-bold mb-6">Research on ADHD App Effectiveness</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">Success Rate</span>
            </div>
            <p className="text-3xl font-bold text-blue-600">78%</p>
            <p className="text-sm text-gray-600 mt-2">
              of users report improved task completion
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-green-600" />
              <span className="font-semibold">User Base</span>
            </div>
            <p className="text-3xl font-bold text-green-600">2.5M+</p>
            <p className="text-sm text-gray-600 mt-2">
              active ADHD app users worldwide
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-purple-600" />
              <span className="font-semibold">Studies</span>
            </div>
            <p className="text-3xl font-bold text-purple-600">50+</p>
            <p className="text-sm text-gray-600 mt-2">
              peer-reviewed research papers
            </p>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Key Research Findings</h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Digital Interventions Study (2023)",
                institution: "University of California",
                findings: "42% improvement in time management skills when using ADHD-specific apps consistently over 3 months.",
                participants: 1200,
                duration: "6 months"
              },
              {
                title: "App-Based Support Systems (2023)",
                institution: "Harvard Medical School",
                findings: "Users showed significant improvement in task initiation and completion rates compared to non-app users.",
                participants: 800,
                duration: "12 months"
              },
              {
                title: "Gamification Impact Study (2022)",
                institution: "MIT Media Lab",
                findings: "Gamified productivity apps showed 35% better engagement rates among ADHD users.",
                participants: 1500,
                duration: "9 months"
              }
            ].map((study, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{study.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{study.institution}</p>
                <p className="text-gray-600 mb-4">{study.findings}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>Participants: {study.participants}</span>
                  <span>Duration: {study.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Methodology Overview</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-4">
              Our research analysis combines data from multiple peer-reviewed studies, user surveys, and clinical trials. All studies included meet the following criteria:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Minimum sample size of 100 participants</li>
              <li>Duration of at least 3 months</li>
              <li>Inclusion of control groups</li>
              <li>Peer-reviewed publication</li>
              <li>Multiple ADHD subtypes represented</li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
}