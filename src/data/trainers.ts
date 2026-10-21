// ========================================
// IRONPEAK FITNESS — Trainers Data
// ========================================
// Note: All trainer profiles below are sample/placeholder content.
// Replace with verified trainer information before going live.

import type { Trainer } from '@/types';

export const trainers: Trainer[] = [
  {
    id: 'marcus-johnson',
    name: 'Marcus Johnson',
    specialization: 'Strength & Powerlifting',
    bio: 'With over 12 years in competitive powerlifting and coaching, Marcus brings a methodical, science-based approach to building raw strength. He has helped hundreds of athletes achieve their personal records.',
    qualifications: [
      'NSCA Certified Strength and Conditioning Specialist',
      'USA Powerlifting Level 2 Coach',
      '12+ years coaching experience',
    ],
    image: '/images/trainers/trainer-1.jpg',
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    specialization: 'Functional Fitness & Mobility',
    bio: 'Sarah combines athletic training with movement science to help clients move better and feel stronger. Her sessions focus on building a foundation that prevents injury and boosts performance.',
    qualifications: [
      'ACE Certified Personal Trainer',
      'FMS Level 2 Certified',
      '8+ years coaching experience',
    ],
    image: '/images/trainers/trainer-2.jpg',
  },
  {
    id: 'james-wright',
    name: 'James Wright',
    specialization: 'HIIT & Conditioning',
    bio: 'James is known for his high-energy training style and innovative conditioning circuits. Former collegiate athlete, he specializes in pushing clients past their limits safely and effectively.',
    qualifications: [
      'NASM Certified Personal Trainer',
      'CrossFit Level 2 Trainer',
      '10+ years coaching experience',
    ],
    image: '/images/trainers/trainer-3.jpg',
  },
  {
    id: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    specialization: 'Weight Management & Nutrition',
    bio: 'Elena takes a holistic approach to fitness, combining metabolic training with evidence-based nutritional guidance. She is passionate about sustainable body transformations and long-term health.',
    qualifications: [
      'ISSA Certified Fitness Trainer',
      'Precision Nutrition Level 1',
      '7+ years coaching experience',
    ],
    image: '/images/trainers/trainer-4.jpg',
  },
];
