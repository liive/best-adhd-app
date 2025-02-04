import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Clock, Target, ArrowRight, Layout, Star } from 'lucide-react';
import { Newsletter } from '../components/Newsletter/Newsletter';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Understanding ADHD | Comprehensive Guide & Management Tools</title>
        <meta 
          name="description" 
          content="Learn about ADHD, its symptoms, and effective management strategies. Discover expert-reviewed digital tools and resources to help you thrive with ADHD."
        />
        <link rel="canonical" href="https://bestadhdapp.com" />
        <script>
          {`
            gtag('event', 'conversion_event_page_view_1', {});
          `}
        </script>
      </Helmet>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Understanding and Thriving with ADHD
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover evidence-based strategies, expert insights, and digital tools to help you manage ADHD effectively.
          </p>
        </div>

        <Newsletter />

        <section className="mt-16 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What is ADHD?</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg">
              Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that affects how the brain processes information and regulates attention and behavior. It's characterized by differences in brain development and activity that impact attention, impulse control, and organization.
            </p>
            <p className="text-lg mt-4">
              While often diagnosed in childhood, ADHD continues into adulthood for many individuals. Research indicates that approximately 4-5% of adults worldwide have ADHD, though many remain undiagnosed. The condition affects various aspects of daily life, from work performance to personal relationships, but with proper understanding and support, individuals with ADHD can develop effective strategies to manage their symptoms and thrive.
            </p>
            <p className="text-lg mt-4">
              Modern neuroscience has revealed that ADHD involves differences in brain structure and function, particularly in areas responsible for executive functions. These differences affect dopamine regulation, working memory, and the brain's reward system. This biological understanding has led to more effective, targeted treatments and management strategies, including both medical and behavioral approaches.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mt-6">
              <h3 className="text-xl font-semibold mb-4">Key Aspects of ADHD:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-blue-600 mt-1" />
                  <span>Neurodevelopmental condition affecting executive functions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1" />
                  <span>Impacts time management and organization</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 mt-1" />
                  <span>Affects focus, attention, and impulse control</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Digital Tools for ADHD Management</h2>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Layout className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Organization</h3>
                <p className="text-gray-600 text-sm">Tools for task and project management</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Time Management</h3>
                <p className="text-gray-600 text-sm">Apps for scheduling and time awareness</p>
              </div>
              <div className="text-center">
                <Brain className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Focus</h3>
                <p className="text-gray-600 text-sm">Solutions for concentration and productivity</p>
              </div>
            </div>

            <div className="flex justify-center">
              <Link 
                to="/best-adhd-apps" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Explore Top ADHD Apps</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/adhd-symptoms-and-apps" 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Brain className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">ADHD Symptoms Guide</h3>
              <p className="text-gray-600 text-sm">Understand common symptoms and find targeted solutions</p>
            </Link>
            <Link 
              to="/expert-insights" 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Star className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Expert Insights</h3>
              <p className="text-gray-600 text-sm">Professional perspectives on ADHD management</p>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Your ADHD Management Journey</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-6">
                Whether you're newly diagnosed or looking to optimize your ADHD management strategy, we're here to help you find the right tools and approaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/adhd-test" 
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Take ADHD Assessment
                </Link>
                <Link 
                  to="/best-adhd-apps" 
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Explore ADHD Apps
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}