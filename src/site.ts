// Coach biography supplied by the business owner.
export const coachBio = [
  "Coach Charles Okeke is the Founder and Head Trainer of Moise Soccer & Performance Training, a player-development program dedicated to developing technically skilled, confident, disciplined, and well-rounded soccer players.",
  "With playing experience across both defensive and midfield positions, Coach Charles brings a comprehensive understanding of the technical, tactical, physical, and mental demands of the game. His coaching approach combines technical excellence with athletic performance, creating purposeful training environments designed to challenge players, build confidence, and maximize individual development.",
  "Coach Charles has also gained coaching experience with Brooklyn Football Club Women and the New York Cosmos, serving as a Performance Coach. These experiences have further strengthened his understanding of performance development and the demands required to compete at higher levels of the game.",
  "Through individual and small-group training, Coach Charles places a strong emphasis on technical mastery, quality repetition, decision-making, and confidence under pressure. His sessions incorporate 1v1 attacking and defending, ball mastery, speed, agility, balance, coordination, and game-specific movement, helping players develop the tools needed to perform effectively in competitive environments.",
  "His coaching philosophy is built on discipline, consistency, accountability, and attention to detail. Coach Charles believes that meaningful player development extends beyond technical ability—it requires the development of confidence, character, work ethic, and a mindset committed to continuous improvement."
];
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
  coachRole: 'Founder & Head Trainer | Moise Soccer & Performance Training',
  bio: coachBio[0],
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
export interface TrainingEvent {
  id: string; title: string; date: string; location: string; details: string;
  image: string; registrationUrl: string; footwear: string; flyerNote?: string;
  groups: { label: string; dates: string[] }[];
  focus: string[]; rates: { label: string; price: string }[];
}
// Dates follow the supplied flyer; rates, venue and requirements follow the registration form.
// No calendar year is added because neither source specifies one.
export const events: TrainingEvent[] = [{
  id: 'winter-training',
  title: 'Winter Soccer Group Training',
  date: 'Sundays · 8–9 AM',
  location: '445 Winding Road, Old Bethpage, NY 11804',
  details: 'Maximum 10 players per session. Minimum 4 consecutive weeks to register.',
  image: '/images/winter-soccer-training.png',
  flyerNote: 'Age-group update: the younger group includes birth years 2017–2014, as listed in the registration form.',
  registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdTpmDdOhjB_6VxcbX7urUJUkks8y3EErEgbYjLyypWhiiI_g/viewform',
  footwear: 'Indoor / turf shoes only',
  groups: [
    { label: '2017–2014', dates: ['Dec 6, 13, 20', 'Jan 3, 10, 17'] },
    { label: '2013–2011', dates: ['Jan 24, 31', 'Feb 7, 21, 28', 'Mar 7'] },
  ],
  focus: ['Technical training / ball mastery', 'Agility / coordination', '1v1 attacking & defending', 'Scrimmage'],
  rates: [{ label: '4 weeks', price: '$320' }, { label: '6 weeks', price: '$480' }],
}];
export function validExternalUrl(value: string): string | undefined {
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : undefined; } catch { return undefined; }
}
