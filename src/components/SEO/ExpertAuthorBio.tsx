import React from 'react';

interface ExpertAuthorBioProps {
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  imageUrl: string;
}

export function ExpertAuthorBio({
  name,
  title,
  credentials,
  bio,
  imageUrl
}: ExpertAuthorBioProps) {
  return (
    <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{title}</p>
        <div className="mt-2 space-y-1">
          {credentials.map((credential, index) => (
            <span 
              key={index}
              className="inline-block text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full mr-2"
            >
              {credential}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm text-gray-600">{bio}</p>
      </div>
    </div>
  );
}