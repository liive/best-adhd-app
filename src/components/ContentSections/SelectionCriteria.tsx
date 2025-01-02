import { CheckCircle, Shield, Brain, Gauge } from 'lucide-react';

export function SelectionCriteria() {
  const criteria = [
    {
      icon: Brain,
      title: "ADHD-Specific Design",
      description: "Apps specifically designed around ADHD cognitive patterns and challenges"
    },
    // Rest of the criteria array remains the same
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">How We Evaluate ADHD Apps</h2>
      
      {/* Rest of the component remains the same */}
    </section>
  );
}