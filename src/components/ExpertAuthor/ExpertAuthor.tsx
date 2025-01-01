import React from 'react';
import { ExternalLink, Linkedin, Twitter, Globe } from 'lucide-react';
import type { Expert } from '../../types/expert';

interface ExpertAuthorProps {
  expert: Expert;
  showSocial?: boolean;
}

export function ExpertAuthor({ expert, showSocial = true }: ExpertAuthorProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-start gap-4">
        <img
          src={expert.imageUrl}
          alt={expert.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{expert.name}</h3>
              <p className="text-sm text-gray-600">{expert.title}</p>
              <p className="text-sm text-blue-600 mt-1">{expert.specialization}</p>
            </div>
            {showSocial && expert.socialLinks && (
              <div className="flex gap-2">
                {expert.socialLinks.linkedin && (
                  <a
                    href={expert.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-600"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {expert.socialLinks.twitter && (
                  <a
                    href={expert.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-400"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {expert.socialLinks.website && (
                  <a
                    href={expert.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Globe className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="mt-3 space-y-2">
            <div className="space-x-2">
              {expert.credentials.map((credential, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                >
                  {credential.title} - {credential.institution}, {credential.year}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-2">{expert.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}