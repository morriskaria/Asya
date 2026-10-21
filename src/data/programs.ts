// ========================================
// IRONPEAK FITNESS — Programs Data
// ========================================

import type { Program } from '@/types';

export const programs: Program[] = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    description:
      'Build raw power and functional strength with our comprehensive barbell, dumbbell, and machine-based training programs. Progressive overload principles guide every session.',
    audience: 'All fitness levels — beginner to advanced lifters',
    image: '/images/programs/strength.jpg',
    icon: 'Dumbbell',
    features: [
      'Personalized strength programming',
      'Olympic lifting platforms',
      'Progressive overload tracking',
      'Form correction and safety coaching',
    ],
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    description:
      'One-on-one coaching tailored to your unique goals. Our certified trainers design individualized programs, monitor your form, and keep you accountable every step of the way.',
    audience: 'Anyone seeking personalized guidance and faster results',
    image: '/images/programs/personal.jpg',
    icon: 'UserCheck',
    features: [
      'Custom workout plans',
      'Nutritional guidance',
      'Weekly progress assessments',
      'Flexible scheduling',
    ],
  },
  {
    id: 'weight-management',
    title: 'Weight Management',
    description:
      'A science-backed approach combining resistance training, metabolic conditioning, and nutritional coaching to help you achieve and maintain a healthy body composition.',
    audience: 'Those focused on fat loss and body recomposition',
    image: '/images/programs/weight.jpg',
    icon: 'Scale',
    features: [
      'Body composition analysis',
      'Metabolic conditioning circuits',
      'Nutritional planning support',
      'Weekly check-ins and adjustments',
    ],
  },
  {
    id: 'functional-fitness',
    title: 'Functional Fitness',
    description:
      'Train movement patterns that translate to real-world performance. Improve mobility, stability, and coordination through dynamic, multi-plane exercises.',
    audience: 'Athletes and anyone seeking better movement quality',
    image: '/images/programs/functional.jpg',
    icon: 'Zap',
    features: [
      'Movement screening and assessment',
      'Mobility and flexibility work',
      'Core stability training',
      'Sport-specific conditioning',
    ],
  },
  {
    id: 'cardio-training',
    title: 'Cardio & Conditioning',
    description:
      'Elevate your cardiovascular fitness with high-intensity interval training, steady-state cardio, and metabolic finishers designed to maximize calorie burn and endurance.',
    audience: 'All levels — from beginners to endurance athletes',
    image: '/images/programs/cardio.jpg',
    icon: 'Heart',
    features: [
      'HIIT and Tabata sessions',
      'Heart rate zone training',
      'Rowing, cycling, and running programs',
      'Endurance progression tracking',
    ],
  },
  {
    id: 'group-fitness',
    title: 'Group Fitness',
    description:
      'High-energy group classes led by motivating instructors. From circuit training to yoga, find your community and push your limits together.',
    audience: 'Anyone who thrives in a motivating group environment',
    image: '/images/programs/group.jpg',
    icon: 'Users',
    features: [
      'Diverse class formats',
      'Expert-led group sessions',
      'Community atmosphere',
      'All skill levels welcome',
    ],
  },
];
