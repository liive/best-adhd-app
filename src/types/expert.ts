export interface ExpertCredential {
  title: string;
  institution: string;
  year: string;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  credentials: ExpertCredential[];
  specialization: string;
  bio: string;
  imageUrl: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}