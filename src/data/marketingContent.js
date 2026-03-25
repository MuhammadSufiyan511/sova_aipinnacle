import { BellRing, Bot, Filter, ScanSearch } from 'lucide-react'

export const heroVideoUrl = 'https://www.youtube.com/embed/7a1AXiAmSB0'

export const features = [
  { title: 'Serious Buyer Detection', description: 'Find chats with clear buying intent before your team wastes time.', icon: ScanSearch },
  { title: 'Auto Replies', description: 'Answer common questions instantly, even when you are offline.', icon: Bot },
  { title: 'Smart Follow-ups', description: 'Send timely reminders so interested buyers come back and order.', icon: BellRing },
  { title: 'Spam Filtering', description: 'Mute low-value chats and keep your inbox focused on real demand.', icon: Filter },
]

export const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    blurb: 'Best for businesses starting their first WhatsApp automation flow.',
    points: ['Basic features', 'Limited usage', 'Simple auto replies', 'No card required'],
    badge: 'Entry Plan',
  },
  {
    name: 'Pro',
    price: '$49',
    blurb: 'For growing teams managing daily sales and lead follow-ups.',
    points: ['Advanced automation', 'Smart lead filtering', 'Follow-up flows', 'Priority support'],
    badge: 'Popular',
  },
  {
    name: 'Premium',
    price: '$99',
    blurb: 'For high-volume sellers who want a full virtual sales assistant.',
    points: ['Full automation', 'Priority features', 'Lead routing', 'Dedicated success help'],
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
