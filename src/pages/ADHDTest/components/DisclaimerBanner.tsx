import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function DisclaimerBanner() {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
        <div>
          <h2 className="text-sm font-medium text-yellow-800">Medical Disclaimer</h2>
          <p className="mt-1 text-sm text-yellow-700">
            This test is for informational purposes only and should not be used for self-diagnosis. 
            ADHD can only be diagnosed by qualified healthcare professionals through comprehensive evaluation. 
            If you're concerned about ADHD, please consult with a healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
}