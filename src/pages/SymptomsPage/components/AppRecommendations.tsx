import React from 'react';
import { apps } from '../../../data/apps';

export function AppRecommendations() {
  const categories = [
    {
      symptom: "Focus & Attention",
      apps: apps.filter(app => 
        app.pros.some(pro => 
          pro.toLowerCase().includes('focus') || 
          pro.toLowerCase().includes('distraction')
        )
      )
    },
    {
      symptom: "Time Management",
      apps: apps.filter(app => 
        app.pros.some(pro => 
          pro.toLowerCase().includes('time') || 
          pro.toLowerCase().includes('schedule')
        )
      )
    },
    {
      symptom: "Organization",
      apps: apps.filter(app => 
        app.pros.some(pro => 
          pro.toLowerCase().includes('organiz') || 
          pro.toLowerCase().includes('task')
        )
      )
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Recommended Apps by Symptom</h2>
      
      <div className="space-y-6">
        {categories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4">{category.symptom}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.apps.slice(0, 4).map((app, appIndex) => (
                <div key={appIndex} className="flex items-start gap-3 p-4 border rounded-lg">
                  <img 
                    src={app.imageUrl} 
                    alt={app.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{app.name}</h4>
                    <p className="text-sm text-gray-500">{app.pros[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}