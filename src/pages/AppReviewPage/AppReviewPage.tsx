import React from 'react';
import { useParams } from 'react-router-dom';
import { apps } from '../../data/apps';

export function AppReviewPage() {
  const { appName } = useParams();
  const app = apps.find(a => a.name.toLowerCase().replace(/\s+/g, '-') === appName);

  if (!app) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">App not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose prose-gray max-w-none">
        <h1 className="text-4xl font-bold mb-6">{app.name} Review</h1>
        
        <div className="mb-8">
          <img src={app.imageUrl} alt={app.name} className="rounded-lg w-full h-64 object-cover" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Rating</h3>
            <p className="text-2xl font-bold text-blue-600">{app.rating}/5.0</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Price</h3>
            <p className="text-2xl font-bold text-green-600">{app.price}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Platform</h3>
            <p className="text-2xl font-bold">iOS & Android</p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-600">{app.description}</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Pros</h2>
            <ul className="space-y-2">
              {app.pros.map((pro, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {pro}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cons</h2>
            <ul className="space-y-2">
              {app.cons.map((con, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  {con}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <a
          href={app.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Download App
        </a>
      </article>
    </main>
  );
}