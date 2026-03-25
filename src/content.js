import {
  BellRing,
  Bot,
  Filter,
  Headphones,
  MessagesSquare,
  ScanSearch,
  ShieldCheck,
  ShoppingBag,
  Store,
  Users,
  WalletCards,
  Zap,
} from 'lucide-react'

export const heroVideoUrl = 'https://www.youtube.com/embed/7a1AXiAmSB0'

export const industries = [
  {
    id: 'clothing',
    label: 'Clothing',
    title: 'Reply fast about sizes, colors, and ready stock.',
    description: 'Help fashion buyers get quick answers and place orders without waiting on your team.',
    useCase: 'Auto replies for size charts, color variants, COD, and delivery details.',
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
    icon: ShoppingBag,
  },
  {
    id: 'toys',
    label: 'Toys',
    title: 'Detect bulk buyers and repeated reseller interest early.',
    description: 'Sort casual browsing chats from serious wholesale buyers asking for cartons and repeat supply.',
    useCase: 'Bulk inquiry filtering, catalog replies, and faster routing for reseller leads.',
    image:
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80',
    icon: Users,
  },
  {
    id: 'dry-fruits',
    label: 'Dry Fruits',
    title: 'Answer price, weight, and packaging questions automatically.',
    description: 'Stay quick during busy seasonal demand without repeating the same details all day.',
    useCase: 'Per-kilo pricing, packaging sizes, delivery zones, and wholesale quantity support.',
    image:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',
    icon: Store,
  },
  {
    id: 'electronics',
    label: 'Electronics',
    title: 'Manage product inquiries with cleaner handoff to sales.',
    description: 'Keep availability, specs, and pricing chats moving while your team focuses on ready buyers.',
    useCase: 'Product info replies, urgent lead tagging, and follow-up on high-intent chats.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    icon: Zap,
  },
]

export const features = [
  {
    title: 'Serious Buyer Detection',
    description: 'Find chats with clear buying intent before your team wastes time.',
    icon: ScanSearch,
  },
  {
    title: 'Auto Replies',
    description: 'Answer common questions instantly, even when you are offline.',
    icon: Bot,
  },
  {
    title: 'Smart Follow-ups',
    description: 'Send timely reminders so interested buyers come back and order.',
    icon: BellRing,
  },
  {
    title: 'Spam Filtering',
    description: 'Mute low-value chats and keep your inbox focused on real demand.',
    icon: Filter,
  },
]

export const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    blurb: 'Best for businesses starting their first WhatsApp automation flow.',
    points: ['Basic features', 'Limited usage', 'Simple auto replies', 'No card required'],
    highlight: true,
    badge: 'Entry Plan',
  },
  {
    name: 'Pro',
    price: '$49',
    blurb: 'For growing teams managing daily sales and lead follow-ups.',
    points: ['Advanced automation', 'Smart lead filtering', 'Follow-up flows', 'Priority support'],
    highlight: false,
    badge: 'Popular',
  },
  {
    name: 'Premium',
    price: '$99',
    blurb: 'For high-volume sellers who want a full virtual sales assistant.',
    points: ['Full automation', 'Priority features', 'Lead routing', 'Dedicated success help'],
    highlight: false,
  },
]

export const trustedBusinesses = [
  'Noor Abaya House',
  'Rafiq Toys Wholesale',
  'Sultan Dry Fruits',
  'ElectroHub Traders',
  'Bazaar Cart PK',
  'GCC Style Mart',
]

export const reviews = [
  {
    name: 'Ayesha Khan',
    businessType: 'Clothing seller',
    feedback: 'We reply faster now and our team only jumps into chats that are ready to order.',
  },
  {
    name: 'Mohammed Sami',
    businessType: 'Electronics retailer',
    feedback: 'Sova helped us stop missing serious buyers during evening WhatsApp rush hours.',
  },
  {
    name: 'Farhan Ali',
    businessType: 'Dry fruits wholesaler',
    feedback: 'Price and quantity questions are handled quickly, so our sales staff saves hours every week.',
  },
  {
    name: 'Reem Al Mansoori',
    businessType: 'Gift and toy store',
    feedback: 'Bulk buyers are much easier to spot now, and follow-ups happen without reminders from me.',
  },
]

export const caseStudies = [
  {
    slug: 'abaya-store',
    businessType: 'Fashion retailer',
    company: 'Noor Abaya House',
    headline: 'Faster replies turned evening WhatsApp traffic into confirmed orders.',
    summary: 'A growing abaya seller needed to stop losing buyers during high-volume chat windows.',
    problem: 'The team was spending too much time answering repeated size and stock questions.',
    solution: 'Sova handled first replies, tagged hot buyers, and pushed urgent delivery chats forward.',
    result: 'Saved 12 hours per week and improved ready-to-buy leads by 31%.',
    metrics: ['12 hrs saved weekly', '31% more ready buyers'],
    image:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'toy-wholesale',
    businessType: 'Toy wholesaler',
    company: 'Rafiq Toys Wholesale',
    headline: 'Bulk buyers became easier to spot in a noisy inbox.',
    summary: 'This wholesale team wanted fewer distractions and quicker routing for reseller demand.',
    problem: 'Reseller leads were getting mixed with casual price checks and low-value spam.',
    solution: 'Sova filtered bulk intent, highlighted carton buyers, and sent follow-up reminders automatically.',
    result: 'Lead quality improved by 42% and response speed doubled during peak demand.',
    metrics: ['42% higher lead quality', '2x faster response'],
    image:
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'electronics-shop',
    businessType: 'Electronics seller',
    company: 'ElectroHub Traders',
    headline: 'Urgent product inquiries stopped getting buried under routine questions.',
    summary: 'A busy electronics store needed better signal inside a flood of WhatsApp inquiries.',
    problem: 'Product inquiry volume was high and urgent sales chats were easy to miss.',
    solution: 'Sova organized inquiries, answered common product questions, and surfaced high-intent chats first.',
    result: 'Saved 9 hours weekly and reduced missed leads by 28%.',
    metrics: ['9 hrs saved weekly', '28% fewer missed leads'],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'dry-fruit-bulk',
    businessType: 'Dry fruits wholesaler',
    company: 'Sultan Dry Fruits',
    headline: 'Busy seasonal demand became easier to manage without hiring extra staff.',
    summary: 'A wholesaler needed help answering repeated quantity and pricing questions during high-demand periods.',
    problem: 'The sales team was buried under repetitive inquiries about rates, weights, and delivery timing.',
    solution: 'Sova answered common questions automatically and surfaced high-intent bulk buyers for manual follow-up.',
    result: 'Saved 11 hours weekly and improved wholesale inquiry conversion by 26%.',
    metrics: ['11 hrs saved weekly', '26% higher conversion'],
    image:
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'beauty-retail',
    businessType: 'Beauty retailer',
    company: 'Glow Cart Studio',
    headline: 'Product recommendation chats started converting with less manual effort.',
    summary: 'This beauty seller wanted quicker answers across shades, stock, and delivery questions.',
    problem: 'The team was losing buyers when response times slowed during launch campaigns and sale days.',
    solution: 'Sova replied with product information, nudged undecided leads, and kept hot chats moving to checkout.',
    result: 'Response time dropped by 53% and repeat buyer leads improved by 22%.',
    metrics: ['53% faster replies', '22% more repeat leads'],
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'home-appliances',
    businessType: 'Home appliances dealer',
    company: 'Urban Home Deals',
    headline: 'High-value appliance buyers stopped getting lost in routine support chats.',
    summary: 'A home appliance team needed clearer lead prioritization during product inquiry spikes.',
    problem: 'Warranty questions, delivery checks, and low-value chats were slowing down the sales queue.',
    solution: 'Sova handled first-level support, tagged buyers asking for pricing and stock, and automated reminders.',
    result: 'Missed sales leads dropped by 33% and the team reclaimed 8 hours every week.',
    metrics: ['33% fewer missed leads', '8 hrs saved weekly'],
    image:
      'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?auto=format&fit=crop&w=1200&q=80',
  },
]

export const faqs = [
  {
    question: 'Does Sova work only with WhatsApp?',
    answer:
      'Sova is focused on WhatsApp today, while the brand direction supports a wider omni-channel future over time.',
  },
  {
    question: 'Do I need technical skills to set it up?',
    answer:
      'No. The setup is designed for business owners and sales teams. Connect your Meta account and choose how you want replies handled.',
  },
  {
    question: 'Can Sova reply in my business tone?',
    answer: 'Yes. You can keep the messaging simple, formal, friendly, or sales-focused based on your brand voice.',
  },
  {
    question: 'Is a credit card required for the trial?',
    answer: 'No. Every main CTA keeps the same promise: no card required to start.',
  },
]

export const termsSections = [
  {
    title: '1. Acceptance of Terms',
    icon: WalletCards,
    items: [
      'By accessing and using Sova, you agree to be bound by these Terms and Conditions.',
      'If you do not agree, please do not use our services.',
    ],
  },
  {
    title: '2. Service Description',
    icon: MessagesSquare,
    items: [
      'Sova provides an AI-powered WhatsApp sales automation platform that helps businesses manage customer conversations, product catalogs, and order processing.',
    ],
  },
  {
    title: '3. User Responsibilities',
    icon: Headphones,
    items: [
      'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
      "You must comply with WhatsApp's Business Policy and Commerce Policy.",
    ],
  },
  {
    title: '4. Intellectual Property',
    icon: Bot,
    items: [
      'All content, features, and functionality of Sova are owned by us and are protected by international copyright, trademark, and other intellectual property laws.',
    ],
  },
  {
    title: '5. Limitation of Liability',
    icon: ShieldCheck,
    items: [
      'Sova shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.',
    ],
  },
  {
    title: '6. Termination',
    icon: Users,
    items: [
      'We may terminate or suspend your account at any time without prior notice if you breach these Terms.',
      'Upon termination, your right to use the service will immediately cease.',
    ],
  },
  {
    title: '7. Governing Law',
    icon: Headphones,
    items: [
      'These terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.',
    ],
  },
]

export const privacySections = [
  {
    title: 'Introduction',
    icon: ShieldCheck,
    items: [
      'This Privacy Policy explains how Sova collects, uses, stores, and protects data related to your use of the service.',
      'It applies to business owners, team members, and connected messaging interactions processed through the platform.',
    ],
  },
  {
    title: 'Data collection',
    icon: MessagesSquare,
    items: [
      'We may collect business contact details, account credentials needed for connection, customer conversation content, metadata, and support messages.',
      'We may also collect device, browser, and analytics information to improve performance, reliability, and security.',
    ],
  },
  {
    title: 'Data usage',
    icon: Bot,
    items: [
      'Data is used to automate conversations, identify intent, send follow-ups, maintain service quality, and provide customer support.',
      'We may use aggregated and de-identified insights to improve the platform without exposing private customer identities.',
    ],
  },
  {
    title: 'Security',
    icon: ShieldCheck,
    items: [
      'We use reasonable technical and organizational safeguards to protect stored and processed information.',
      'Access to operational data is limited to authorized systems and personnel with a legitimate service need.',
    ],
  },
  {
    title: 'User rights',
    icon: Users,
    items: [
      'You may request access to your account information, ask for corrections, or request deletion where legally available.',
      'You can contact us to raise questions about processing, retention, or your privacy rights.',
    ],
  },
]
