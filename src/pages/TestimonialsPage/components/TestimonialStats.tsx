import React from 'react';
import { Users, Star, MessageSquare } from 'lucide-react';

export function TestimonialStats() {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Active Users",
      color: "text-blue-600"
    },
    {
      icon: Star,
      value: "4.8",
      label: "Average Rating",
      color: "text-yellow-600"
    },
    {
      icon: MessageSquare,
      value: "5,000+",
      label: "Reviews",
      color: "text-green-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="flex justify-center mb-2">
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>
          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          <div className="text-sm text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}