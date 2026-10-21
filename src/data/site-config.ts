// ========================================
// IRONPEAK FITNESS — Site Configuration
// ========================================
// All brand details, contact information, and business data
// are centralized here for easy customization.

import type { SiteConfig, NavLink } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'IRONPEAK FITNESS',
  tagline: 'Forge Your Strength. Conquer Your Peak.',
  description:
    'Premium strength and fitness center offering world-class training programs, expert coaching, and state-of-the-art facilities. Transform your body and mind at IRONPEAK FITNESS.',
  url: 'https://ironpeakfitness.com', // Placeholder — update before production
  phone: '+1 (555) 123-4567', // Placeholder
  email: 'info@ironpeakfitness.com', // Placeholder
  address: {
    street: '1250 Iron Street',
    city: 'Austin',
    state: 'TX',
    zip: '73301',
    country: 'United States',
  },
  hours: {
    weekday: '5:00 AM – 11:00 PM',
    saturday: '6:00 AM – 10:00 PM',
    sunday: '7:00 AM – 8:00 PM',
  },
  social: {
    instagram: 'https://instagram.com/ironpeakfitness', // Placeholder
    facebook: 'https://facebook.com/ironpeakfitness', // Placeholder
    twitter: 'https://twitter.com/ironpeakfitness', // Placeholder
    youtube: 'https://youtube.com/@ironpeakfitness', // Placeholder
  },
};

export const navLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Membership', href: '/membership' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Classes', href: '/classes' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];
