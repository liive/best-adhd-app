import React from 'react';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';
import type { ResearchPaper } from '../../types/research';

interface ResearchCitationProps {
  paper: ResearchPaper;
  expanded?: boolean;
}

export function ResearchCitation({ paper, expanded = false }: ResearchCitationProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <FileText className="w-6 h-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{paper.title}</h3>
          
          <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-600">
            <span>{paper.authors.join(', ')}</span>
            <span>•</span>
            <span>{paper.institution}</span>
            {paper.journal && (
              <>
                <span>•</span>
                <span>{paper.journal}</span>
              </>
            )}
            <span>•</span>
            <span>{paper.year}</span>
          </div>

          {expanded && (
            <div className="mt-4 space-y-4">
              <p className="text-gray-600">{paper.abstract}</p>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Key Findings:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {paper.findings.map((finding, index) => (
                    <li key={index} className="text-gray-600">{finding}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">Methodology:</h4>
                <p className="text-gray-600">{paper.methodology}</p>
              </div>
            </div>
          )}

          <div className="mt-4 flex items-center gap-4">
            {paper.doi && (
              <a
                href={`https://doi.org/${paper.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Paper</span>
              </a>
            )}
            <div className="flex flex-wrap gap-2">
              {paper.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}