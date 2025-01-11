import { Brain } from 'lucide-react';

export function SelectionCriteria() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">How We Evaluate ADHD Apps</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">ADHD-Specific Design</h3>
          </div>
          <p className="text-gray-600">
            Apps specifically designed around ADHD cognitive patterns and challenges
          </p>
        </div>
      </div>
    </section>
  );
}