import { BellRing, Bot, Filter, ScanSearch } from 'lucide-react'

export const heroVideoUrl = 'https://www.youtube.com/embed/7a1AXiAmSB0'
export const contactPhone = '+92 344 0555915'
export const whatsappLink = 'https://wa.me/923440555915'
export const mapEmbedUrl = 'https://www.google.com/maps?q=Pakistan&output=embed'

export const features = [
  { title: 'Serious Buyer Detection', description: 'Find chats with clear buying intent before your team wastes time.', icon: ScanSearch },
  { title: 'Auto Replies', description: 'Answer common questions instantly, even when you are offline.', icon: Bot },
  { title: 'Smart Follow-ups', description: 'Send timely reminders so interested buyers come back and order.', icon: BellRing },
  { title: 'Spam Filtering', description: 'Mute low-value chats and keep your inbox focused on real demand.', icon: Filter },
  { title: 'Broadcast', description: 'Send updates, offers and announcements to your entire customer list in one click.', icon: ScanSearch },
  { title: 'Built-in Integrations', description: 'Connect Sova with your favorite apps to sync leads and automate workflows.', icon: ScanSearch },
]

export const pricingPlans = [
  {
    name: 'Free Trial',
    price: '30 Days Free',
    blurb: 'Experience the full power of SOVA automation for 30 days. No credit card required.',
    points: ['Full Features', 'High Usage Limits', 'Smart Auto Replies', 'Multi-Device Support'],
    badge: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$49',
    blurb: 'For growing teams managing daily sales and lead follow-ups.',
    points: ['Advanced Automation', 'Smart Lead Filtering', 'Follow-up Flows', 'Priority Support'],
    badge: 'Popular',
  },
  {
    name: 'Custom',
    price: 'Contact Us',
    blurb: 'Scale your automation with custom solutions tailored for enterprise needs.',
    points: ['Discuss your plan with us and we will approach you accordingly.'],
    badge: 'Enterprise',
    cta: 'Contact Us',
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
  { name: 'Ayesha Khan', businessType: 'Clothing seller', feedback: 'We reply faster now and our team only jumps into chats that are ready to order.' },
  { name: 'Mohammed Sami', businessType: 'Electronics retailer', feedback: 'Sova helped us stop missing serious buyers during evening WhatsApp rush hours.' },
  { name: 'Farhan Ali', businessType: 'Dry fruits wholesaler', feedback: 'Price and quantity questions are handled quickly, so our sales staff saves hours every week.' },
  { name: 'Reem Al Mansoori', businessType: 'Gift and toy store', feedback: 'Bulk buyers are much easier to spot now, and follow-ups happen without reminders from me.' },
]

export const faqs = [
  { question: 'Does Sova work only with WhatsApp?', answer: 'Sova is focused on WhatsApp today, while the brand direction supports a wider omni-channel future over time.' },
  { question: 'Do I need technical skills to set it up?', answer: 'No. The setup is designed for business owners and sales teams. Connect your Meta account and choose how you want replies handled.' },
  { question: 'Can Sova reply in my business tone?', answer: 'Yes. You can keep the messaging simple, formal, friendly, or sales-focused based on your brand voice.' },
  { question: 'Is a credit card required for the trial?', answer: 'No. Every main CTA keeps the same promise: no card required to start.' },
]
