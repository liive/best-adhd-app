import React from 'react';

export function Introduction() {
  return (
    <section className="prose prose-gray max-w-none mb-12">
      <h2 className="text-3xl font-bold mb-6">Managing ADHD with Mobile Apps in 2024</h2>
      
      <div className="space-y-4 text-gray-600">
        <p>
          Living with ADHD presents unique challenges in today's fast-paced world. While medication and behavioral therapy remain cornerstone treatments, mobile applications have emerged as powerful complementary tools for managing ADHD symptoms. Our comprehensive guide explores how these digital solutions are revolutionizing ADHD management through innovative features and evidence-based approaches.
        </p>
        
        <p>
          The latest generation of ADHD apps leverages advanced technology like artificial intelligence, machine learning, and behavioral science to provide personalized support. These tools help with common ADHD challenges including time management, task organization, focus enhancement, and emotional regulation.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Statistics</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Over 366 million adults worldwide live with ADHD</li>
            <li>70% of adults with ADHD report using mobile apps for support</li>
            <li>Digital tools can improve task completion rates by up to 40%</li>
            <li>Proper app usage has shown a 25% reduction in missed deadlines</li>
          </ul>
        </div>
      </div>
    </section>
  );
}