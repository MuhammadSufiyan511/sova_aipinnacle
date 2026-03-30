export const industries = {
  items: {
    clothing: { label: 'Clothing', title: 'Reply fast about sizes, colors, and ready stock.', description: 'Help fashion buyers get quick answers and place orders without waiting on your team.', useCase: 'Auto replies for size charts, color variants, COD, and delivery details.' },
    jewellery: { label: 'Jewellery', title: 'Show premium catalogs and handle purity or weight queries.', description: 'Automate responses for gold rates, certifications, and design availability.', useCase: 'Instant catalog sharing and gold rate updates.' },
    toys: { label: 'Toys', title: 'Detect bulk buyers and repeated reseller interest early.', description: 'Sort casual browsing chats from serious wholesale buyers asking for cartons and repeat supply.', useCase: 'Bulk inquiry filtering, catalog replies, and faster routing for reseller leads.' },
    'books-stationary': { label: 'Books & Stationary', title: 'Help students and readers find titles and stock instantly.', description: 'Handle inquiries for book availability, school stationary lists, and office supplies.', useCase: 'Automated stock checks and stationary list pricing.' },
    'dry-fruits': { label: 'Dry Fruits', title: 'Answer price, weight, and packaging questions automatically.', description: 'Stay quick during busy seasonal demand without repeating the same details all day.', useCase: 'Per-kilo pricing, packaging sizes, delivery zones, and wholesale quantity support.' },
    decoration: { label: 'Decoration', title: 'Share event themes and package prices for home or party decor.', description: 'Manage queries for birthday, wedding, and interior decor themes automatically.', useCase: 'Theme selection guides and package cost automation.' },
    electronics: { label: 'Electronics', title: 'Manage product inquiries with cleaner handoff to sales.', description: 'Keep availability, specs, and pricing chats moving while your team focuses on ready buyers.', useCase: 'Product info replies, urgent lead tagging, and follow-ups on high-intent chats.' },
    'medical-instruments': { label: 'Medical Instruments', title: 'Provide specs and availability for hospital and clinic gear.', description: 'Speed up inquiries for medical devices, diagnostic tools, and clinical equipment.', useCase: 'Technical spec replies and stock availability status.' },
    'surgical-instruments': { label: 'Surgical Instruments', title: 'Manage precision tool inquiries for hospitals and distributors.', description: 'Automate responses for surgical sets, steel quality, and bulk order discounts.', useCase: 'Order set customization and quality certification sharing.' },
    hardware: { label: 'Hardware', title: 'Handle builder and contractor queries for tools and materials.', description: 'Automate replies for power tools, plumbing fixtures, and construction essentials.', useCase: 'Bulk price lists and tool specifications.' },
    fireworks: { label: 'Fireworks', title: 'Manage seasonal demand for displays and celebrations safely.', description: 'Handle inquiries for firework bundles, safety instructions, and event packages.', useCase: 'Seasonal catalog sharing and safety guidelines.' },
  },
}

export const pricing = {
  plans: [
    { name: 'Free Trial', price: '30 Days Free', blurb: 'Experience the full power of SOVA automation for 30 days. No credit card required.', points: ['Full Features', 'High Usage Limits', 'Smart Auto Replies', 'Multi-Device Support'], badge: 'Get Started' },
    { name: 'Pro', price: '$49', blurb: 'For growing teams managing daily sales and lead follow-ups.', points: ['Advanced Automation', 'Smart Lead Filtering', 'Follow-up Flows', 'Priority Support'], badge: 'Popular' },
    { name: 'Custom', price: 'Contact Us', blurb: 'Scale your automation with custom solutions tailored for enterprise needs.', points: ['Discuss your plan with us and we will approach you accordingly.'], badge: 'Enterprise', cta: 'Contact Us' },
  ],
}

export const trustedBusinesses = {
  label: 'Trusted by growing businesses',
  items: ['Noor Abaya House', 'Rafiq Toys Wholesale', 'Sultan Dry Fruits', 'ElectroHub Traders', 'Bazaar Cart PK', 'GCC Style Mart'],
  stats: [
    { stat: '60%', label: 'Rise in productivity' },
    { stat: '3x', label: 'Faster response time' },
    { stat: '90%', label: 'Higher conversion rate' },
    { stat: '24/7', label: 'Always online' },
  ],
}

export const reviews = {
  items: [
    { name: 'Ayesha Khan', businessType: 'Clothing seller', feedback: 'We reply faster now and our team only jumps into chats that are ready to order.' },
    { name: 'Mohammed Sami', businessType: 'Electronics retailer', feedback: 'SOVA helped us stop missing serious buyers during evening WhatsApp rush hours.' },
    { name: 'Farhan Ali', businessType: 'Dry fruits wholesaler', feedback: 'Price and quantity questions are handled quickly, so our sales staff saves hours every week.' },
    { name: 'Reem Al Mansoori', businessType: 'Gift and toy store', feedback: 'Bulk buyers are much easier to spot now, and follow-ups happen without reminders from me.' },
  ],
}

export const faq = {
  items: [
    { question: 'Does SOVA work only with WhatsApp?', answer: 'SOVA is focused on WhatsApp today, while the brand direction supports a wider omni-channel future over time.' },
    { question: 'Do I need technical skills to set it up?', answer: 'No. The setup is designed for business owners and sales teams. Connect your Meta account and choose how you want replies handled.' },
    { question: 'Can SOVA reply in my business tone?', answer: 'Yes. You can keep the messaging simple, formal, friendly, or sales-focused based on your brand voice.' },
    { question: 'Is a credit card required for the trial?', answer: 'No. Every main CTA keeps the same promise: no card required to start.' },
    { question: 'How do I connect my WhatsApp number?', answer: 'Connect your Meta Business account to SOVA in three simple steps through our clean onboarding flow.' },
    { question: 'Can I use a personal WhatsApp number?', answer: 'No, SOVA requires a WhatsApp Business API connection through Meta to ensure stable, high-volume automation.' },
    { question: 'Does SOVA support multiple languages?', answer: 'Yes, SOVA is optimized for both English and Urdu, making it perfect for local and international markets.' },
    { question: 'Is the 30-day trial fully featured?', answer: 'Absolutely. You get access to all core features to see the real impact on your sales team before committing.' },
    { question: 'Can I cancel my subscription anytime?', answer: 'Yes, our plans are flexible. You can manage your subscription or cancel at any time from your dashboard.' },
    { question: 'Can I send broadcast messages?', answer: 'Yes. SOVA supports Meta-compliant broadcast messages to help you reach your customer list with offers and updates.' },
    { question: 'Are there any hidden costs?', answer: 'No. We believe in simple pricing. Your chosen plan covers the SOVA platform fees clearly.' },
    { question: 'Is my customer data secure?', answer: "Yes. We process data according to Meta's security standards and prioritize the privacy of your business conversations." },
  ],
}
