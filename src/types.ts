export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables?: string[];
  deliverablesSummary?: string;
  iconName?: string;
}

export interface WorkProject {
  id: string;
  title: string;
  tag: string;
  description: string;
  outcome?: string;
  methods?: string[];
  clientContext?: string;
  fullOverview?: string;
}

export interface HeroFact {
  label: string;
  value: string;
}

export interface ContactLink {
  label: string;
  href: string;
  type: 'email' | 'github' | 'linkedin' | 'custom';
}

export interface PortfolioData {
  person: {
    fullName: string;
    role: string;
    headline: string;
    intro?: string;
    aboutHeadline: string;
    aboutBody: string;
    extendedBio?: string[];
  };
  facts: HeroFact[];
  navigation: NavItem[];
  services: ServiceItem[];
  projects: WorkProject[];
  contact: {
    heading: string;
    email: string;
    github: string;
    links: ContactLink[];
  };
}

export interface VeloraKeyArea {
  id: string;
  title: string;
  description: string;
  iconName: 'Cpu' | 'Wrench' | 'LineChart' | 'TrendingUp' | 'Sparkles';
  badge?: string;
}

export interface VeloraArticle {
  id: string;
  title: string;
  tag: 'AI' | 'TECHNOLOGY' | 'RESEARCH' | 'FUTURE TECH';
  tagColor?: string;
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string[];
  keyFindings: string[];
  coverImage?: string;
}

export interface VeloraData {
  mark: string;
  submark: string;
  headline: string;
  subheadline: string;
  keyAreas: VeloraKeyArea[];
  articles: VeloraArticle[];
}
