import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

interface ResearchCitationProps {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  summary: string;
}

export function ResearchCitation({
  title,
  authors,
  journal,
  year,
  doi,
  summary
}: ResearchCitationProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-white rounded-lg">
          <FileText className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{title}</h4>
          <p className="text-sm text-gray-500 mt-1">
            {authors.join(', ')} • {journal} • {year}
          </p>
          {doi && (
            <a
              href={`https://doi.org/${doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 mt-1"
            >
              <span>View Paper</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <p className="text-sm text-gray-600 mt-2">{summary}</p>
        </div>
      </div>
    </div>
  );
}