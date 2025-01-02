import { Layout, Brain, Clock, Target } from 'lucide-react';

export function AppCategories() {
  const categories = [
    {
      icon: Layout,
      title: "Task & Project Management",
      description: "Apps like Things 3 and Todoist excel in helping ADHD individuals break down complex projects into manageable tasks. These tools provide visual organization systems that align with ADHD cognitive patterns.",
      features: [
        "Visual task hierarchies",
        "Flexible deadline management",
        "Progress tracking",
        "Priority-based organization"
      ]
    },
    {
      icon: Brain,
      title: "Focus & Concentration",
      description: "Focus-enhancing apps like Forest and Focus@Will use scientifically-backed methods to improve concentration. These tools help create optimal environments for sustained attention.",
      features: [
        "Pomodoro techniques",
        "Background sound optimization",
        "Distraction blocking",
        "Focus analytics"
      ]
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Time management tools like Structured and Due help ADHD individuals better understand and work with time. These apps make time more visible and manageable.",
      features: [
        "Visual time blocking",
        "Smart reminders",
        "Schedule optimization",
        "Time awareness tools"
      ]
    },
    {
      icon: Target,
      title: "Habit Building",
      description: "Habit-forming apps like Streaks help establish and maintain positive routines. These tools use psychology-based approaches to make habit formation more achievable for ADHD minds.",
      features: [
        "Streak tracking",
        "Reward systems",
        "Habit stacking",
        "Progress visualization"
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50 rounded-xl px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">ADHD App Categories</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{category.description}</p>
              
              <ul className="space-y-2">
                {category.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}