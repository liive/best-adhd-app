import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

export function SubmitTestimonial() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [appUsed, setAppUsed] = useState('');
  const [rating, setRating] = useState('5');
  const [testimonial, setTestimonial] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle testimonial submission
    console.log({ name, email, appUsed, rating, testimonial });
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <MessageSquare className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-bold">Share Your Experience</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="app" className="block text-sm font-medium text-gray-700 mb-1">
              App Used
            </label>
            <input
              type="text"
              id="app"
              value={appUsed}
              onChange={(e) => setAppUsed(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
              Rating
            </label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            >
              {[5, 4, 3, 2, 1].map((value) => (
                <option key={value} value={value}>
                  {value} Star{value !== 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-1">
            Your Experience
          </label>
          <textarea
            id="testimonial"
            value={testimonial}
            onChange={(e) => setTestimonial(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit Testimonial
        </button>
      </form>
    </section>
  );
}