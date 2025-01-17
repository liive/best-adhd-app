import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');
    
    try {
      const templateParams = {
        to_email: email,
        from_name: 'BestADHDApp',
        message: `New subscription request from: ${email}`,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setStatus('success');
      setMessage('Thanks for subscribing! We\'ll keep you updated.');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="bg-white border border-gray-100 shadow-sm py-8 px-4 sm:px-6 lg:px-8 mx-4 sm:mx-6 lg:mx-8 rounded-lg mb-12">
      <div className="max-w-2xl mx-auto text-center">
        <Mail className="w-5 h-5 text-gray-400 mx-auto mb-4" />
        
        <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-2">
          Stay Updated
        </h2>
        
        <p className="text-gray-500 mb-6 text-sm">
          Get notified about new ADHD productivity tools and app updates.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-grow relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full px-3 py-2 text-sm rounded-md border transition-colors ${
                  status === 'error' 
                    ? 'border-red-300 focus:ring-red-200 focus:border-red-400' 
                    : 'border-gray-200 focus:ring-gray-200 focus:border-gray-300'
                }`}
                disabled={status === 'loading' || status === 'success'}
                required
              />
              {status === 'error' && (
                <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-500" />
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <span className="inline-flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Subscribing...
                </span>
              ) : status === 'success' ? (
                <span className="inline-flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Subscribed
                </span>
              ) : (
                <span className="inline-flex items-center">
                  Subscribe
                  <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              )}
            </button>
          </div>
          {message && (
            <p className={`mt-2 text-sm ${
              status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}>
              {message}
            </p>
          )}
        </form>

        <p className="mt-3 text-xs text-gray-400">
          No spam, unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}