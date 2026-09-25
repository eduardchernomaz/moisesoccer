// Confirmed profile facts: Charles Okeke, NYC, soccer/performance, 1-on-1/small groups.
// Replace empty rates, events, reviews and payment URL only with confirmed information.
export const business = {
  name: 'Moïse Soccer & Performance Training',
  coach: 'Charles Okeke',
  location: 'New York City',
  instagram: 'https://www.instagram.com/moisesoccerperformancetraining/',
  bookingUrl: 'https://calendly.com/moisefitness/60minutes',
  paymentUrl: '', // HTTPS hosted payment link, when supplied. Never collect card details here.
  paymentMethods: ['Zelle', 'Venmo', 'Cash App'],
  email: '',
  phone: '',
  bio: 'Charles Okeke is the coach behind Moïse Soccer & Performance Training in New York City. His training brings together player development, soccer skills, and performance work through one-on-one and small-group sessions.',
};
export const navigation = [
  { href: '/about/', label: 'The coach' },
  { href: '/services/', label: 'Training & plans' },
  { href: '/highlights/', label: 'Highlights' },
  { href: '/events/', label: 'Events' },
  { href: '/contact/', label: 'Contact' },
];
export const publicPages = ['/', ...navigation.map(n => n.href), '/booking/', '/payment/'];
export const programs = [
  { title: '1-on-1 training', label: 'Your game. Your focus.', description: 'Individual attention for the details you want to develop. Talk with Coach Charles about your goals, current level, and what you want to work on.', image: '/images/technical-session.jpg' },
  { title: 'Small-group training', label: 'Push each other forward.', description: 'Train alongside other players. Ask about a group that fits your experience, goals, and availability.', image: '/images/training-photo.jpg' },
  { title: 'Performance training', label: 'Move with purpose.', description: 'Explore speed, agility, footwork, and explosive movement alongside your soccer training.', image: '/images/ball-work.jpg' },
];
export interface Plan { id: string; title: string; category: string; description: string; rate: string; details: string[]; }
export const plans: Plan[] = [
  { id: 'private', title: 'Private session', category: 'YOUR STARTING POINT', description: 'Individual training focused on your game.', rate: '', details: ['One-on-one coaching', 'Discuss your training goals', 'Confirm location before booking'] },
  { id: 'monthly', title: 'Monthly training', category: 'BUILD YOUR ROUTINE', description: 'Ask about a monthly plan that fits your goals and schedule.', rate: '', details: ['Discuss your preferred frequency', 'Confirm session count and monthly rate', 'Agree a schedule with the coach'] },
  { id: 'group', title: 'Small-group plan', category: 'TRAIN TOGETHER', description: 'Ask about group sessions and upcoming training events.', rate: '', details: ['Small-group soccer training', 'Ask about player level and group size', 'Confirm dates and per-player rate'] },
];
export const highlights = [
  { title: 'On the training field', date: 'September 21, 2026', image: '/images/ball-work.jpg', url: 'https://www.instagram.com/moisesoccerperformancetraining/reel/DdktgeKAh7c/' },
  { title: 'A closer look at the work', date: 'September 15, 2026', image: '/images/training-detail.jpg', url: 'https://www.instagram.com/moisesoccerperformancetraining/reel/DdTUvPbB1Mp/' },
  { title: 'Session in focus', date: 'August 26, 2026', image: '/images/technical-session.jpg', url: 'https://www.instagram.com/moisesoccerperformancetraining/reel/DcgdxwGhvWK/' },
];
export const photos = [
  { src: '/images/training-photo.jpg', alt: 'Players practicing together on a grass soccer field', caption: 'Together on the field', url: 'https://www.instagram.com/moisesoccerperformancetraining/p/DZ6YNO1l4ce/' },
  { src: '/images/technical-session.jpg', alt: 'Player practicing ball control on an outdoor field', caption: 'The details make the difference', url: highlights[2].url },
  { src: '/images/ball-work.jpg', alt: 'Soccer player working through a cone exercise', caption: 'One repetition at a time', url: highlights[0].url },
  { src: '/images/small-group.jpg', alt: 'Two players training near a soccer goal', caption: 'Put it into play', url: 'https://www.instagram.com/moisesoccerperformancetraining/reel/DcbUcz2ubgi/' },
];
export interface Testimonial { quote: string; name: string; role: string; }
export const testimonials: Testimonial[] = []; // Approved, verbatim reviews only.
export interface TrainingEvent { title: string; date: string; location: string; details: string; rate: string; }
export const events: TrainingEvent[] = []; // Confirmed events only.
export function validExternalUrl(value: string): string | undefined {
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : undefined; } catch { return undefined; }
}
