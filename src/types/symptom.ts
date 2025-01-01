export interface SymptomCategory {
  id: string;
  name: string;
  description: string;
  commonChallenges: string[];
  appFeatures: string[];
  managementTips: string[];
}

export interface TreatmentIntegration {
  type: string;
  description: string;
  digitalIntegration: string[];
  considerations: string[];
}