export interface AuditIssue {
  id: string;
  category: 'performance' | 'seo' | 'security' | 'code';
  title: string;
  impact: 'high' | 'medium' | 'low';
  before: string;
  after: string;
  status: 'fixed' | 'scanning' | 'pending';
}

export interface ServiceCardData {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  metrics: string;
  highlights: string[];
  gradient: string;
}

export interface StepData {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  estimatedTime: string;
}
