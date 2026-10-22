// Basalt Strength Club is a fictional concept brand. Photography: Unsplash (free licence).
const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const siteMeta = {
  title: 'Basalt Strength Club | Independent Strength Gym in Leith, Edinburgh',
  description:
    "Basalt is Leith's independent strength gym. 12 lifting platforms, 140+ pieces of kit, 24/7 member access and coaches who actually lift. Memberships from £29/month. Your first session is free.",
  canonical: 'https://basalt-strength.vercel.app/',
  themeColor: '#0c0b0a',
};

export const announceText =
  'First session on us · No contract, ever · 24/7 member access in Leith';

export const navLinks = [
  { href: '#difference', label: 'Home' },
  { href: '#gallery', label: 'The Gym' },
  { href: '#pts', label: 'Coaching' },
  { href: '#membership', label: 'Membership' },
  { href: '#faq', label: 'FAQs' },
  { href: '#location', label: 'Contact' },
];

export const heroSlides = [
  {
    src: unsplash('1623874514711-0f321325f318', 2000),
    alt: 'The main training floor at Basalt under the warehouse skylights',
  },
  {
    src: unsplash('1605296867304-46d5465a13f1', 2000),
    alt: 'Member setting up a heavy deadlift on the platform',
  },
  {
    src: unsplash('1571902943202-507ec2618e8f', 2000),
    alt: 'Conditioning area with benches and cardio machines',
  },
  {
    src: unsplash('1534438327276-14e5300c3a48', 2000),
    alt: 'Long dumbbell rack running the length of the gym',
  },
  {
    src: unsplash('1517836357463-d25dfeac3438', 2000),
    alt: 'Lifter pulling a loaded barbell from the floor',
  },
];

export const stats = [
  { label: 'Est. Since', target: 2016, format: 'year' },
  { label: 'Pieces of Kit', target: 140 },
  { label: 'Lifting Platforms', target: 12 },
  { label: 'Hour Member Access', target: 24 },
];

export const differenceSection = {
  eyebrow: 'Our Difference',
  heading: 'Built on solid ground. Made for heavy days.',
  body: [
    "Basalt started in 2016 in a disused rope works off the Leith shore — two racks, a pile of second-hand plates and a stubborn idea that a gym should be built around lifting, not mirrors. Nearly a decade on, the floor has grown but the idea hasn't moved.",
    "Expect calibrated plates, proper platforms and chalk without the side-eye. Expect a crowd that racks its weights and cheers your PBs. Whether it's your first barbell or your next meet, you'll train next to people who take it seriously and don't take themselves too seriously.",
  ],
  button: { href: '#gallery', label: 'Take a look inside' },
  brands: ['Calibrated Plates', 'Competition Racks', 'Strongman Yard'],
  image: {
    src: unsplash('1590487988256-9ed24133863e', 1200),
    alt: 'Power rack and dumbbell wall against the original brickwork at Basalt',
    tag: 'Leith · Since 2016',
  },
};

const galleryIds = [
  { id: '1558611848-73f7eb4001a1', alt: 'Plate-loaded machine area at Basalt' },
  { id: '1576678927484-cc907957088c', alt: 'Rows of hex dumbbells on the rack' },
  { id: '1532029837206-abbe2b7620e3', alt: 'Member working through a lat pulldown' },
  { id: '1583454110551-21f2fa2afe61', alt: 'Close-up of a heavy dumbbell row' },
  { id: '1599058917212-d750089bc07e', alt: 'Battle rope conditioning in the yard' },
  { id: '1517963879433-6ad2b056d712', alt: 'Deadlift set-up on the lifting platform' },
  { id: '1567598508481-65985588e295', alt: 'Split squats in the functional zone' },
  { id: '1550345332-09e3ac987658', alt: 'Member focusing between sets' },
];

export const galleryItems = galleryIds.map(({ id, alt }) => ({
  href: unsplash(id, 1800),
  src: unsplash(id, 600),
  alt,
}));

export const reviews = [
  {
    avatar: 'E',
    name: 'Eilidh M.',
    date: 'Member since 2019',
    text: "Moved from a big chain and haven't looked back. Proper platforms, plates that are actually what they say they are, and the coaches know your name by week two.",
  },
  {
    avatar: 'C',
    name: 'Callum R.',
    date: 'Member since 2017',
    text: 'Best strength gym in Edinburgh, no contest. 24/7 access means I can lift before my shift, and the atmosphere on a Saturday morning is unreal.',
  },
  {
    avatar: 'P',
    name: 'Priya S.',
    date: 'Member since 2022',
    text: "I was nervous walking in as a total beginner. Nobody stared, everyone helped. Six months in and I've just deadlifted my bodyweight — couldn't have done it anywhere else.",
  },
  {
    avatar: 'T',
    name: 'Tomasz K.',
    date: 'Member since 2020',
    text: 'Did my first powerlifting meet off the back of Basalt coaching. Programming was spot on, and half the gym came to watch. That says it all.',
  },
];

export const ptSection = {
  eyebrow: 'Coaching',
  heading: 'Coaching that moves the bar.',
  description:
    'Our in-house coaches run 1-2-1 sessions, small-group strength blocks and meet prep — whether you want your first pull-up or your first total.',
  bulletPoints: [
    '1-2-1 coaching from £35 per session',
    'Free technique clinics every Sunday for members',
    'Programmes built around your lifts, not a template',
  ],
  image: unsplash('1548690312-e3b507d8c110', 1200),
  cta: { href: '#location', label: 'Meet the Coaches' },
};

export const pricingSection = {
  eyebrow: 'Join Now',
  heading: 'Memberships with no small print.',
  description:
    'No joining fee, no 12-month lock-in. Cancel with 30 days notice — and your first session is free either way.',
  plans: [
    {
      title: 'Full Access',
      amount: '£39',
      details: '/month',
      subtext: '24/7 access · technique clinics · £10 day pass',
      popular: true,
      ctaLabel: 'Join Now',
      ctaHref: '#location',
    },
    {
      title: 'Student',
      amount: '£29',
      details: '/month',
      subtext: 'Valid student ID · full 24/7 access',
      ctaLabel: 'Join Now',
      ctaHref: '#location',
    },
    {
      title: 'Off-Peak',
      amount: '£25',
      details: '/month',
      subtext: 'Weekdays 9am–4pm · all day weekends',
      ctaLabel: 'Join Now',
      ctaHref: '#location',
    },
    {
      title: 'Annual',
      amount: '£390',
      details: '/year',
      subtext: 'Two months free · full 24/7 access',
      ctaLabel: 'Join Now',
      ctaHref: '#location',
    },
  ],
  note:
    'Running a team in Leith? Ask about corporate memberships — discounted rates and group coaching for your staff.',
  noteCta: { href: '#location', label: 'Get in touch →' },
};

export const faqItems = [
  {
    question: 'Do I need a membership to train at Basalt?',
    answer:
      "No — day passes are £10, and your first session is completely free. Memberships just work out cheaper if you're in more than four times a month.",
  },
  {
    question: 'Is there parking?',
    answer:
      'Yes, there are 20 free spaces in the yard in front of the unit, plus bike racks inside the door. Lothian bus routes 16 and 22 stop two minutes away.',
  },
  {
    question: 'Can I train at any time?',
    answer:
      'Members get 24/7 access via the Basalt app. The gym is staffed 6am–9pm on weekdays and 8am–4pm at weekends.',
  },
  {
    question: "I'm a beginner — is Basalt right for me?",
    answer:
      'Absolutely. Every new member gets a free induction, and our Sunday technique clinics cover the squat, bench and deadlift from scratch.',
  },
  {
    question: 'Can I use chalk?',
    answer: 'Yes. Chalk is welcome everywhere. Just brush down the bar when you finish.',
  },
  {
    question: 'Do you offer personal training?',
    answer:
      'Yes, our coaches offer 1-2-1 sessions from £35, small-group strength blocks and full meet prep for powerlifting and strongman.',
  },
];

export const locationSection = {
  heading: 'Kilnmoss Lane, Leith.',
  address: 'Basalt Strength Club, Unit 3, Kilnmoss Works, Leith, Edinburgh EH6 7QX',
  hours: '24/7 member access, 365 days a year',
  staffed: '6am–9pm weekdays · 8am–4pm weekends',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Leith+Edinburgh',
  iframeSrc: 'https://maps.google.com/maps?q=Leith%2C%20Edinburgh&z=15&output=embed',
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
};

export const footerLinks = {
  explore: [
    { href: '#difference', label: 'Home' },
    { href: '#gallery', label: 'The Gym' },
    { href: '#pts', label: 'Coaching' },
    { href: '#membership', label: 'Membership' },
  ],
  info: [
    { href: '#faq', label: 'FAQs' },
    { href: '#location', label: 'Contact' },
    { href: locationSection.mapUrl, label: 'Directions' },
  ],
  follow: [
    { href: locationSection.instagram, label: 'Instagram' },
    { href: locationSection.facebook, label: 'Facebook' },
  ],
};

export const ctaBanner = {
  tag: 'No Contract Required',
  heading: 'Your first session at Basalt is free.',
  copy: 'Come lift on the platforms, meet the coaches and see why Leith has trained here since 2016.',
  primary: { href: '#membership', label: 'Claim Your Free Session' },
  secondary: { href: '#location', label: 'Ask a Question' },
  image: unsplash('1526506118085-60ce8714f8c5', 2000),
};

export const pageSections = ['difference', 'gallery', 'pts', 'membership', 'faq', 'location'];
