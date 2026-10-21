// ========================================
// IRONPEAK FITNESS — Type Definitions
// ========================================

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
  social: {
    instagram: string;
    facebook: string;
    twitter: string;
    youtube: string;
  };
}

export interface Program {
  id: string;
  title: string;
  description: string;
  audience: string;
  image: string;
  icon: string;
  features: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  bio: string;
  qualifications: string[];
  image: string;
}

export interface ClassSchedule {
  id: string;
  name: string;
  instructor: string;
  day: string;
  time: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  spots: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface TrialFormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  preferredDate?: string;
  consent: boolean;
}

// API Response
export interface ApiResponse {
  success: boolean;
  message: string;
  error?: string;
}
