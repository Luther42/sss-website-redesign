export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: number;
}

export interface ServiceInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
  category: string;
  requirements?: string[];
  processingTime?: string;
}

export interface BenefitProgram {
  id: string;
  name: string;
  description: string;
  eligibility: string[];
  requirements: string[];
  benefits: string[];
  howToApply: string;
}

export interface LoanProduct {
  id: string;
  type: string;
  name: string;
  maxAmount: number;
  interestRate: number;
  terms: string;
  requirements: string[];
  description: string;
}

export interface ContactInfo {
  hotlines: string[];
  email: string;
  addresses: {
    name: string;
    address: string;
    operatingHours: string;
  }[];
}

export interface BulletinAnnouncement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  link?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  occupation: string;
  photo: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Statistics {
  members: number;
  benefitsPaid: string;
  branches: number;
  years: number;
}
