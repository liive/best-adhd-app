export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  institution: string;
  journal?: string;
  year: number;
  doi?: string;
  abstract: string;
  findings: string[];
  methodology: string;
  keywords: string[];
}