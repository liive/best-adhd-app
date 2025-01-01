import type { SymptomCategory, TreatmentIntegration } from '../types/symptom';

export const symptomCategories: SymptomCategory[] = [
  {
    id: 'executive-function',
    name: 'Executive Function',
    description: 'Difficulties with planning, organizing, and completing tasks',
    commonChallenges: [
      'Task initiation',
      'Project planning',
      'Time management',
      'Working memory'
    ],
    appFeatures: [
      'Task breakdown tools',
      'Visual planning interfaces',
      'Reminder systems',
      'Progress tracking'
    ],
    managementTips: [
      'Break large tasks into smaller steps',
      'Use visual organization tools',
      'Set up regular review periods',
      'Create external memory aids'
    ]
  },
  {
    id: 'attention-focus',
    name: 'Attention & Focus',
    description: 'Challenges maintaining attention and managing distractions',
    commonChallenges: [
      'Sustained attention',
      'Distraction management',
      'Task switching',
      'Focus duration'
    ],
    appFeatures: [
      'Focus timers',
      'Distraction blocking',
      'Background noise control',
      'Work session tracking'
    ],
    managementTips: [
      'Use time-blocking techniques',
      'Create a distraction-free environment',
      'Take regular breaks',
      'Monitor focus patterns'
    ]
  }
];

export const treatmentIntegrations: TreatmentIntegration[] = [
  {
    type: 'Medication Management',
    description: 'Integration of digital tools with medication schedules',
    digitalIntegration: [
      'Medication reminder apps',
      'Symptom tracking features',
      'Side effect monitoring',
      'Treatment effectiveness logging'
    ],
    considerations: [
      'Consult healthcare provider',
      'Maintain consistent tracking',
      'Report significant changes',
      'Regular medication reviews'
    ]
  },
  {
    type: 'Behavioral Therapy',
    description: 'Supporting therapy techniques with digital tools',
    digitalIntegration: [
      'Habit tracking apps',
      'CBT exercise support',
      'Progress monitoring',
      'Skill practice reminders'
    ],
    considerations: [
      'Align with therapy goals',
      'Share data with therapist',
      'Practice recommended techniques',
      'Track behavioral patterns'
    ]
  }
];