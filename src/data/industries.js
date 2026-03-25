import { ShoppingBag, Store, Users, Zap } from 'lucide-react'

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
