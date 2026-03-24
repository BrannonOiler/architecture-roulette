import type { TECH_STACK_CATEGORIES } from '@/data';

export interface TechOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
}

export type TechStackCategory = (typeof TECH_STACK_CATEGORIES)[number];

// Frontend ecosystems drive many downstream choices
export interface FrontendEcosystem {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
  metaFrameworks: TechOption[];
  stateManagement: TechOption[];
  styling: TechOption[]; // Some styling is universal, but component libraries are ecosystem-specific
  testing: TechOption[];
}

// Backend ecosystems constrain ORM/data access choices
export interface BackendEcosystem {
  id: string;
  name: string;
  language: string;
  description: string;
  icon: string;
  url: string;
  frameworks: TechOption[];
  orms: TechOption[];
  testing: TechOption[];
}

// These are largely independent of frontend/backend ecosystem
export interface UniversalOptions {
  auth: TechOption[];
  databases: TechOption[];
  hosting: TechOption[];
  storage: TechOption[];
}

export interface FullStackConfig {
  frontend: FrontendEcosystem;
  metaFramework: TechOption;
  stateManagement: TechOption;
  styling: TechOption;
  backend: BackendEcosystem;
  backendFramework: TechOption;
  orm: TechOption;
  database: TechOption;
  auth: TechOption;
  hosting: TechOption;
  storage: TechOption;
  frontendTesting: TechOption;
  backendTesting: TechOption;
}
