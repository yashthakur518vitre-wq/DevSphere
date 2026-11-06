/**
 * DevSphere Core Types
 * Central type definitions for the application's data models and components.
 */

export type FeatureCategory = 'identity' | 'practice' | 'portfolio' | 'community' | 'career' | 'intelligence';

export interface Feature {
  id: string;
  name: string;
  tagline: string;
  description: string;
  iconName: 'UserCheck' | 'Code2' | 'GitFork' | 'Users' | 'UserPlus' | 'Briefcase' | 'BarChart3' | 'Sparkles';
  badge: string;
  highlightColor: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  proofEvidence: string;
  badge: string;
}

export interface NavItem {
  label: string;
  href: string;
  isAction?: boolean;
}

export interface ModalState {
  isOpen: boolean;
  title: string;
  message: string;
  featureName?: string;
}

export interface ComparisonItem {
  aspect: string;
  traditional: string;
  devSphere: string;
}
