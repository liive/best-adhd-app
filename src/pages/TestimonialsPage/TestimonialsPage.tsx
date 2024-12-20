import React from 'react';
import { UserTestimonials } from './components/UserTestimonials';
import { TestimonialStats } from './components/TestimonialStats';
import { SubmitTestimonial } from './components/SubmitTestimonial';

export function TestimonialsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Real User Stories</h1>
      
      <p className="text-lg text-gray-600 mb-8">
        Discover how ADHD apps have helped people improve their daily lives, productivity, and overall well-being.
      </p>

      <div className="space-y-12">
        <TestimonialStats />
        <UserTestimonials />
        <SubmitTestimonial />
      </div>
    </main>
  );
}