// ========================================
// IRONPEAK FITNESS — Membership Plans
// ========================================

import type { MembershipPlan } from '@/types';

export const membershipPlans: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 39,
    period: '/month',
    description: 'Essential access to start your fitness journey with full gym floor privileges.',
    features: [
      'Full gym floor access',
      'Cardio equipment zone',
      'Locker room facilities',
      'Free fitness assessment',
      'Mobile app access',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 69,
    period: '/month',
    description:
      'Our most popular plan — everything in Basic plus group classes and recovery amenities.',
    features: [
      'Everything in Basic',
      'Unlimited group classes',
      'Sauna & steam room',
      'Nutrition consultation',
      'Workout plan templates',
      'Guest pass (1/month)',
    ],
    highlighted: true,
    cta: 'Most Popular',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 119,
    period: '/month',
    description:
      'The ultimate experience — personal training sessions, priority booking, and exclusive member benefits.',
    features: [
      'Everything in Standard',
      '4 personal training sessions/month',
      'Priority class booking',
      'Towel service',
      'Supplement discounts (15%)',
      'Unlimited guest passes',
      'Access to all locations',
    ],
    highlighted: false,
    cta: 'Go Premium',
  },
];
