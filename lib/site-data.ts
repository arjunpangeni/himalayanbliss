export type Service = {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  tag: string;
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    id: 'swedish',
    name: 'Swedish Relaxation Massage',
    description: 'Long, flowing strokes with light to medium pressure to ease tension and quiet the mind.',
    duration: 60,
    price: 80,
    tag: 'Relaxation',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Relaxing massage treatment in a spa setting',
  },
  {
    id: 'deep-tissue',
    name: 'Deep Tissue Massage',
    description: 'Firm, focused pressure on knots and tight muscle layers for pain relief and mobility.',
    duration: 60,
    price: 90,
    tag: 'Deep tissue',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Therapist providing a massage treatment',
  },
  {
    id: 'sports',
    name: 'Sports Massage',
    description: 'Targeted work to prepare, recover and prevent injury for runners and active lifestyles.',
    duration: 60,
    price: 95,
    tag: 'Sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Athlete preparing for a sports recovery session',
  },
  {
    id: 'hot-stone',
    name: 'Hot Stone Massage',
    description: 'Warm basalt stones melt away tension and deepen relaxation during your session.',
    duration: 90,
    price: 120,
    tag: 'Luxury',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Spa treatment prepared in a calm room',
  },
  {
    id: 'aromatherapy',
    name: 'Aromatherapy Massage',
    description: 'Hand-blended essential oils chosen to suit your mood, stress and recovery needs.',
    duration: 60,
    price: 85,
    tag: 'Aromatherapy',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Essential oils and aromatherapy ingredients',
  },
  {
    id: 'pregnancy',
    name: 'Pregnancy Massage',
    description: 'Gentle, supported massage after the first trimester with tailored comfort and care.',
    duration: 60,
    price: 90,
    tag: 'Pregnancy',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85',
    imageAlt: 'Gentle massage treatment in a spa setting',
  },
];

export const pricingRows = [
  { treatment: 'Swedish', minutes: 30, price: '£55', popular: false },
  { treatment: 'Swedish', minutes: 60, price: '£80', popular: true },
  { treatment: 'Swedish', minutes: 90, price: '£110', popular: false },
  { treatment: 'Deep Tissue', minutes: 30, price: '£60', popular: false },
  { treatment: 'Deep Tissue', minutes: 60, price: '£90', popular: true },
  { treatment: 'Deep Tissue', minutes: 90, price: '£120', popular: false },
  { treatment: 'Sports', minutes: 30, price: '£70', popular: false },
  { treatment: 'Sports', minutes: 60, price: '£95', popular: true },
  { treatment: 'Sports', minutes: 90, price: '£130', popular: false },
];

export const faqs = [
  {
    question: 'Do I need to undress?',
    answer: 'You undress to your comfort level. Towels are used throughout the treatment and only the area being worked on is uncovered.',
  },
  {
    question: 'How do I confirm my booking?',
    answer: 'After you choose a time, we email you a secure confirmation link. Press Confirm and your appointment is locked in.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Free cancellation or rescheduling is available up to 24 hours before your appointment. Late changes may be charged at 50% to 100% depending on the treatment.',
  },
  {
    question: 'Is massage suitable during pregnancy?',
    answer: 'Yes, after the first trimester with a trained pregnancy therapist. Please mention this in your booking notes so we can tailor the treatment.',
  },
];

export const testimonials = [
  'The best massage in London.',
  'Very calming and professional.',
  'I left feeling completely reset.',
];

export const therapistOptions = ['Any available', 'Alicia', 'Sam', 'Rhea'];

export const slotTimes = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:30',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
];
