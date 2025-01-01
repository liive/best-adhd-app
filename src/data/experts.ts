import type { Expert } from '../types/expert';

export const experts: Expert[] = [
  {
    id: 'dr-sarah-johnson',
    name: 'Dr. Sarah Johnson',
    title: 'Clinical Psychologist & ADHD Specialist',
    credentials: [
      {
        title: 'Ph.D. Clinical Psychology',
        institution: 'Stanford University',
        year: '2015'
      },
      {
        title: 'ADHD Clinical Certification',
        institution: 'American Board of Professional Psychology',
        year: '2016'
      }
    ],
    specialization: 'Adult ADHD & Digital Interventions',
    bio: 'Dr. Johnson specializes in adult ADHD treatment and has conducted extensive research on digital interventions for ADHD management. Her work focuses on integrating technology into evidence-based treatment approaches.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/drsarahjohnson',
      twitter: 'https://twitter.com/drsarahjohnson'
    }
  },
  {
    id: 'dr-michael-chen',
    name: 'Dr. Michael Chen',
    title: 'Neuroscience Researcher & Digital Health Expert',
    credentials: [
      {
        title: 'Ph.D. Neuroscience',
        institution: 'Harvard University',
        year: '2014'
      },
      {
        title: 'M.S. Digital Health',
        institution: 'MIT',
        year: '2016'
      }
    ],
    specialization: 'Neuroplasticity & Digital Therapeutics',
    bio: 'Dr. Chen combines neuroscience expertise with digital health innovation to develop and evaluate ADHD management applications. His research focuses on how digital tools can promote positive neuroplastic changes.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/drmichaelchen',
      website: 'https://drmichaelchen.com'
    }
  }
];