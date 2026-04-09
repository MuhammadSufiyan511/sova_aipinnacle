const onboarding = {
  business: {
    title: "What's your business?",
    subtitle: 'SOVA tailors its replies and lead detection to your specific industry.',
    searchPlaceholder: 'Search industries...',
    customCategoryPlaceholder: 'Enter your business category...',
    nextBtn: 'Pick My Industry →',
    categories: {
      clothing: { label: 'Clothing', desc: 'Apparel, shoes, accessories.' },
      jewellery: { label: 'Jewellery', desc: 'Gold, silver, ornaments.' },
      toys: { label: 'Toys', desc: 'Kids, puzzles, games.' },
      'books-stationary': { label: 'Books & Stationary', desc: 'Education, office supplies.' },
      'dry-fruits': { label: 'Dry Fruits', desc: 'Almonds, cashews, dates.' },
      decoration: { label: 'Decoration', desc: 'Events, themes, home decor.' },
      electronics: { label: 'Electronics', desc: 'Phones, gadgets, accessories.' },
      'medical-instruments': { label: 'Medical Instruments', desc: 'Hospital and clinic gear.' },
      'surgical-instruments': { label: 'Surgical Instruments', desc: 'Precision tools and sets.' },
      hardware: { label: 'Hardware', desc: 'Tools, materials, fixtures.' },
      fireworks: { label: 'Fireworks', desc: 'Celebrations and events.' },
      service: { label: 'Service Business', desc: 'Booking, consulting, local.' },
      agency: { label: 'Agency & B2B', desc: 'Clients, pitches, retainers.' },
      creator: { label: 'Content Creator', desc: 'Digital products, audience.' },
      other: { label: 'Other', desc: 'Something unique to you.' }
    }
  },
  products: {
    title: 'Add your products',
    subtitle: 'SOVA uses your catalog to answer buyer questions automatically.',
    addBtn: 'Add Product',
    nextBtn: 'Save & Continue →',
    toastError: 'Add at least one product so SOVA can learn about your business.',
    modal: {
      titleAdd: 'Add New Product',
      titleUpdate: 'Update Product',
      subtitleAdd: 'Give your product a name, short description, and an optional image, video, or PDF.',
      subtitleUpdate: 'Edit the product details SOVA uses in buyer chats.',
      mediaLabel: 'Product Media',
      mediaHelp: 'Click to upload',
      nameLabel: 'Product Name',
      namePlaceholder: 'e.g. Premium Silk Scarf',
      descLabel: 'Description',
      descPlaceholder: 'e.g. Premium silk scarf with soft finish and gift packaging.',
      saveBtn: 'Save Product',
      updateBtn: 'Update Product',
      invalidMediaType: 'Please upload a valid image, video, or PDF file'
    }
  },
  tone: {
    title: "Set SOVA's voice",
    subtitle: "Pick one or more tones that match how you speak to your customers.",
    profiles: {
      professional: { label: 'Professional', desc: 'Clear, polite, and business-focused.' },
      friendly: { label: 'Friendly', desc: 'Warm, welcoming, and approachable.' },
      persuasive: { label: 'Persuasive', desc: 'Sales-driven, highlights benefits.' },
      direct: { label: 'Direct', desc: 'Short, concise, and to-the-point.' },
      playful: { label: 'Playful', desc: 'Uses emojis, energetic and fun.' },
      empathetic: { label: 'Empathetic', desc: 'Understanding, patient and helpful.' }
    },
    completeBtn: 'Launch Dashboard →'
  },
  loader: {
    init: 'INITIALIZING ONBOARDING',
    wait: 'Please wait while we prepare your setup.',
    finalWait: 'Please wait while we finalize your setup.',
    steps: {
      catalog: 'Building your catalog...',
      ai: 'Applying AI persona...',
      meta: 'Integrating with Meta API...',
      workspace: 'Preparing your workspace...'
    }
  }
}

const admin = {
  nav: {
    workspace: 'Workspace',
    overview: 'Overview',
    broadcasts: 'Broadcasts',
    chat: 'WhatsApp Chat',
    products: 'Products',
    files: 'Files',
    reports: 'Reports',
    settings: 'Settings',
    notifications: 'Notifications',
    profile: 'Profile'
  },
  common: {
    currentView: 'Current View',
    automationLive: 'Automation live',
    live: 'Live',
    preview: 'Preview',
    open: 'Open',
    edit: 'Edit'
  },
  overview: {
    performance: 'Workspace performance',
    growth: 'Since last 7 days',
    quickActions: {
      products: 'View Products',
      settings: 'Business tone setting',
      businessSettings: 'Business settings'
    },
    stats: {
      activeConversations: 'Active Conversations',
      qualifiedLeads: 'Qualified Leads',
      automatedReplies: 'Automated Replies',
      avgResponseTime: 'Avg. Response Time'
    },
    charts: {
      saleTrend: {
        title: 'Conversation to sale trend',
        subtitle: 'Live weekly automation performance',
        pill: '{{count}}% this month'
      },
      leadMix: {
        title: 'Lead quality mix',
        subtitle: 'Where SOVA is focusing next',
        label: 'Lead mix'
      },
      leadsByDay: {
        title: 'Qualified leads by day',
        subtitle: 'Real-time lead capture volume',
        pill: 'Updated live'
      }
    },
    activity: {
      title: 'Recent automation activity',
      subtitle: 'What SOVA handled just now',
      feeds: {
        order: 'New order intent detected',
        followup: 'Follow-up sent automatically',
        spam: 'Spam inquiry filtered'
      }
    },
    donuts: {
      buyers: 'Serious buyers',
      followups: 'Follow-ups',
      spam: 'Spam filtered'
    }
  },
  broadcasts: {
    title: 'Broadcast Campaigns',
    subtitle: 'Schedule WhatsApp messages to leads, customers, and segments — powered by SOVA.',
    newBtn: 'New Broadcast',
    stats: {
      scheduled: 'Scheduled',
      sentWeek: 'Sent this week',
      avgResponse: 'Avg response rate'
    },
    workflow: {
      title: 'Automation workflow',
      subtitle: 'How SOVA routes incoming WhatsApp messages into qualified leads',
      nodes: {
        trigger: { label: 'Inbound Message', sub: 'WhatsApp trigger' },
        filter: { label: 'Intent Filter', sub: 'SOVA detects lead quality' },
        route: { label: 'Route & Reply', sub: 'Auto response sent' },
        capture: { label: 'Lead Captured', sub: 'CRM entry created' }
      },
      status: {
        active: 'Active',
        processing: 'Processing',
        delivered: 'Delivered',
        captured: 'Captured'
      }
    },
    campaigns: {
      title: 'All campaigns',
      status: {
        scheduled: 'Scheduled',
        draft: 'Draft',
        sent: 'Sent'
      },
      meta: {
        audience: 'Audience: {{count}}',
        powered: 'Powered by SOVA automation',
        stats: 'Opens: {{opens}} · Replies: {{replies}}'
      }
    }
  },
  products: {
    title: 'Product Catalog',
    subtitle: '{{count}} item{{s}} shared by SOVA in buyer chats',
    newBtn: 'Add Product',
    banner: 'SOVA uses your catalog to answer questions about product availability, pricing, and features automatically.',
    empty: {
      title: 'No products yet',
      desc: 'Add your first product so SOVA can share it with potential buyers on WhatsApp.',
      btn: 'Add your first product'
    },
      item: {
        price: 'Rs. {{price}}',
        priceLabel: 'Price',
        mediaLabel: 'Media type',
        view: 'View',
        active: 'Active',
        inactive: 'Inactive',
        activate: 'Activate',
        deactivate: 'Deactivate',
        modalTitle: 'Product overview',
        noDescription: 'No description added yet.',
        none: 'None'
      },
      controls: {
        searchPlaceholder: 'Search products...',
        show: 'Show',
        perPage: 'page',
        all: 'All',
        pageInfo: '{{start}}-{{end}} of {{total}} products',
        filters: {
          all: 'All',
          active: 'Active',
          inactive: 'Inactive'
        },
        empty: {
          title: 'No matching products',
          desc: 'Try a different search term or switch the active filter.'
        }
      }
  },
  files: {
    title: 'Files Library',
    subtitle: '{{count}} file{{s}} ready for SOVA replies and media sharing',
    newBtn: 'Add File',
    banner: 'Keep your images, videos, PDFs, and supporting files in one place so SOVA can use the right media while guiding buyers on WhatsApp.',
    empty: {
      title: 'No files yet',
      desc: 'Add your first file so SOVA can use it in buyer chats and product support.',
      btn: 'Add your first file'
    },
    item: {
      view: 'View',
      active: 'Active',
      inactive: 'Inactive',
      activate: 'Activate',
      deactivate: 'Deactivate',
      modalTitle: 'File overview',
      noDescription: 'No description added yet.',
      none: 'None',
      mediaLabel: 'File type',
      fileNameLabel: 'File name',
      types: {
        image: 'Image',
        video: 'Video',
        file: 'File'
      }
    },
    controls: {
      searchPlaceholder: 'Search files...',
      show: 'Show',
      perPage: 'page',
      all: 'All',
      pageInfo: '{{start}}-{{end}} of {{total}} files',
      filters: {
        all: 'All',
        image: 'Images',
        video: 'Videos',
        file: 'Files'
      },
      empty: {
        title: 'No matching files',
        desc: 'Try a different search term or switch the file type filter.'
      }
    },
    modal: {
      titleAdd: 'Add New File',
      titleUpdate: 'Update File',
      subtitleAdd: 'Upload an image, video, or PDF that SOVA can share in chats.',
      subtitleUpdate: 'Edit the file details SOVA uses while helping buyers.',
      mediaLabel: 'File Media',
      mediaHelp: 'Click to upload',
      nameLabel: 'File Name',
      namePlaceholder: 'e.g. Summer Catalog 2026',
      descLabel: 'Description',
      descPlaceholder: 'e.g. PDF catalog for summer arrivals and updated pricing.',
      saveBtn: 'Save File',
      updateBtn: 'Update File',
      invalidMediaType: 'Please upload a valid image, video, or PDF file'
    }
  },
  reports: {
    title: 'Sales Reports',
    subtitle: 'Track how SOVA converts WhatsApp conversations into orders, revenue, and faster replies.',
    exportBtn: 'Export report',
    stats: {
      revenue: 'Revenue influenced',
      orderRate: 'Lead-to-order rate',
      resolved: 'Chats resolved'
    },
    chart: {
      title: 'Revenue influenced by SOVA',
      subtitle: 'Daily tracked sales emerging from automated conversations',
      pill: 'This week'
    },
    table: {
      title: 'Weekly performance snapshot',
      subtitle: 'Chat volume, orders, conversion rate, and revenue influenced daily by automation.',
      headers: {
        day: 'Day',
        chats: 'Chats',
        orders: 'Orders',
        conversion: 'Conversion',
        revenue: 'Revenue'
      }
    }
  },
  settings: {
    title: 'Automation Settings',
    subtitle: 'Manage your SOVA voice, alert preferences, and automation rules.',
    sections: {
      business: {
        title: 'Business setup',
        subtitle: 'Need to switch your category or restart the guided setup? Update your business flow here.',
        button: 'Change business',
        current: 'Current business',
        modalTitle: 'Update your business category',
        modalSubtitle: 'Choose the business type SOVA should use for replies, buyer filtering, and product context.',
        save: 'Save changes',
        cancel: 'Cancel',
        close: 'Close'
      },
      voice: {
        title: 'AI Voice & Tone',
        subtitle: 'Controls how SOVA talks to your customers'
      },
      rules: {
        title: 'Automation Rules'
      }
    },
    tones: {
      professional: { label: 'Professional', desc: 'Polished and business-like' },
      friendly: { label: 'Friendly', desc: 'Warm and approachable' },
      direct: { label: 'Direct', desc: 'Concise, no fluff' },
      persuasive: { label: 'Persuasive', desc: 'Convincing and sales-oriented' },
      playful: { label: 'Playful', desc: 'Light, lively, and fun' },
      empathetic: { label: 'Empathetic', desc: 'Calm, understanding, and reassuring' },
      creative: { label: 'Creative', desc: 'Expressive and bold' }
    },
    rows: {
      autoReply: { title: 'Auto-Reply to Buyers', desc: 'Instantly respond to new WhatsApp messages using SOVA.' },
      spamFilter: { title: 'Spam Filter', desc: 'Automatically detect and ignore spam or bot messages.' },
      alerts: { title: 'High-Intent Alerts', desc: 'Get notified when SOVA detects a serious buyer.' },
      tfa: { title: 'Two-Factor Authentication', desc: 'Add an extra layer of security to your workspace.' }
    },
    comingSoon: 'Coming Soon'
  },
  notifications: {
    title: 'Recent activity',
    readAll: 'Mark all as read'
  },
  chat: {
    title: 'WhatsApp Inbox',
    activeStatus: 'Active',
    searchPlaceholder: 'Search conversations...',
    emptyState: 'Select a conversation to view it',
    sovaLabel: 'SOVA AI',
    status: {
      automated: 'Automated',
      captured: 'Lead Captured'
    }
  },
  profile: {
    header: {
      label: 'SOVA Workspace Profile',
      desc: 'Manage your workspace identity, language, and automation readiness from one place.'
    },
    plan: '{{name}} plan',
    activity: {
      products: 'Connected products',
      automations: 'Active automations',
      alerts: 'Unread lead alerts'
    },
    details: {
      title: 'Workspace details',
      language: 'Current language',
      products: {
        label: 'Products in catalog',
        ready: '{{count}} ready for automated replies'
      },
      tones: {
        label: 'Business tone profiles',
        ready: '{{count}} tone setting{{s}} configured'
      }
    },
    summary: {
      title: 'Profile summary',
      desc: 'This workspace is ready to manage WhatsApp conversations, route qualified leads, and automate replies with SOVA.'
    }
  },
  drawer: {
    title: 'Notifications',
    empty: 'No new notifications',
    readAll: 'MARK ALL AS READ'
  },
  celebration: {
    eyebrow: 'SOVA launch',
    title: 'Your workspace is ready',
    checklist: {
      whatsapp: 'WhatsApp automation connected',
      filtering: 'Lead filtering is active',
      followups: 'Follow-ups are ready to run'
    },
    headline: 'Your chats are now <gradient>automated</gradient>',
    desc: 'SOVA is now live in your workspace. It can reply faster, spot serious buyers, and keep your WhatsApp sales moving even when your team is offline.',
    features: {
      replies: 'Instant auto replies are active',
      whatsapp: 'Your WhatsApp chats are now automated',
      buyers: 'Serious buyers will be highlighted first'
    },
    btn: 'Continue to dashboard'
  },
  mockData: {
    broadcasts: {
      campaigns: [
        { name: 'Ramzan Offer', audience: '1,240 contacts', sendAt: 'Today, 7:00 PM' },
        { name: 'New Catalog Drop', audience: '860 contacts', sendAt: 'Waiting for approval' },
        { name: 'VIP Follow-up Blast', audience: '420 contacts', sendAt: 'Yesterday, 5:30 PM' }
      ]
    },
    notifications: [
      { title: 'New High-Intent Lead', desc: 'Faizan Ahmed is asking about bulk pricing for Premium Silk Scarfs.', time: '2m ago' },
      { title: 'Broadcast Completed', desc: "Ramzan Offer' campaign has been sent to 1,240 contacts successfully.", time: '1h ago' },
      { title: 'SOVA Knowledge Update', desc: 'New product "Cotton T-Shirt" added to your catalog and is ready for AI replies.', time: '3h ago' },
      { title: 'Incoming Message', desc: 'Sarah Khan sent a message. SOVA is handling it automatically.', time: '5h ago' }
    ],
    chats: [
      { user: 'Faizan Ahmed', message: 'Hello, what is the price of that jacket?', time: '14:23' },
      { user: 'Sarah Khan', message: 'Do you have size M available in the blue one?', time: '12:05' },
      { user: 'Zubair Shah', message: 'I want to place an order for 3 pieces.', time: '09:44' },
      { user: 'Nadia Malik', message: 'Can you send the catalog please?', time: 'Yesterday' },
      { user: 'Bilal Raza', message: 'What are your delivery charges?', time: 'Yesterday' }
    ],
    reports: {
      stats: {
        revenue: 'Rs. 8.4L',
        orderRate: '37%',
        resolved: '1,284',
        revenueChange: '+18%',
        orderRateChange: '+6%',
        resolvedChange: '+22%'
      },
      revenueLines: ['Rs. 82k', 'Rs. 95k', 'Rs. 1.1L', 'Rs. 1.3L', 'Rs. 1.5L'],
      rows: [
        { revenue: 'Rs. 82k', rate: '16.9%' },
        { revenue: 'Rs. 95k', rate: '17.7%' },
        { revenue: 'Rs. 1.1L', rate: '17.4%' },
        { revenue: 'Rs. 1.3L', rate: '18.8%' },
        { revenue: 'Rs. 1.5L', rate: '20.0%' }
      ]
    },
    drawer: [
      { text: 'New lead "Faizan" captured on WhatsApp!', time: '2m ago' },
      { text: '5 items out of stock in your catalog.', time: '1h ago' },
      { text: 'SOVA automation rate increased by 12% today!', time: '3h ago' },
      { text: 'Sarah Malik is interested in the "Premium Scarf".', time: '5h ago' }
    ],
    profile: {
      automations: '06',
      alerts: '08'
    },
    overview: {
      stats: {
        active: '142',
        activeChange: '+12.5%',
        leads: '89',
        leadsChange: '+5.2%',
        replies: '1,204',
        repliesChange: '+24.1%',
        time: '11s',
        timeChange: '-34%'
      },
      activity: [
        { time: '2 mins ago', meta: 'Electronics - 5 unit bulk request' },
        { time: '9 mins ago', meta: 'Clothing - cart recovery campaign' },
        { time: '14 mins ago', meta: 'Repeated low-value message removed' }
      ]
    },
    threads: {
      3: [
        { from: 'user', text: 'I want to place an order for 3 pieces.' },
        { from: 'sova', text: "Great choice! I've noted your order for 3 pieces. May I ask which product you're referring to?" },
        { from: 'user', text: 'The premium silk scarf.' },
        { from: 'sova', text: "Perfect! I'll prepare an invoice for 3x Premium Silk Scarf. Shall I confirm your order?" }
      ]
    }
  }
}

export { onboarding, admin }

admin.upgrade = {
  navLabel: 'Upgrade Plan',
  cta: 'Upgrade Plan',
  mobileCta: 'Upgrade',
  eyebrow: 'Plan Upgrade',
  title: 'Choose a plan that grows with your WhatsApp sales',
  subtitle: 'Unlock more automation, higher usage limits, and stronger AI support as your business volume increases.',
  currentPlanLabel: 'Current plan',
  currentPlanValue: '{{plan}} plan',
  currentPlanHint: 'Upgrade anytime to unlock more reach and automation.',
  popular: 'Most Popular',
  choosePlan: 'Choose plan',
  currentPlanButton: 'Current plan',
  compareTitle: 'Why teams upgrade',
  compareDesc: 'As your conversations grow, SOVA can handle more replies, more leads, and more sales workflows without slowing your team down.',
  summaryTitle: 'How upgrading helps',
  summaryDesc: 'Move from basic automation to full WhatsApp growth operations with faster support and stronger AI coverage.',
  steps: {
    1: { title: 'Start with your current setup', desc: 'Keep your catalog, files, inbox, and tone settings exactly as they are.' },
    2: { title: 'Unlock more capacity instantly', desc: 'Higher plans open larger reply volume, richer workflows, and better team visibility.' },
    3: { title: 'Scale without extra manual work', desc: 'Use SOVA to manage more buyers, more follow-ups, and more conversion opportunities.' },
  },
  benefits: {
    1: { title: 'More automated conversations', desc: 'Handle a larger number of WhatsApp replies without adding pressure on your team.' },
    2: { title: 'Stronger AI handling', desc: 'Give SOVA more room to qualify leads, guide buyers, and reduce repetitive manual support.' },
    3: { title: 'Better sales visibility', desc: 'Track growth, monitor response performance, and understand where conversions improve.' },
    4: { title: 'Built for scaling businesses', desc: 'Upgrade when your volume grows so the workflow stays smooth and reliable.' },
  },
  plans: {
    starter: {
      badge: 'Starter',
      name: 'Starter',
      price: '$19/mo',
      desc: 'Best for small teams starting WhatsApp automation.',
      features: {
        1: 'Up to 1,000 automated replies each month',
        2: 'Basic product and file sharing support',
        3: 'Lead detection with standard automation rules',
        4: 'Single workspace with essential reporting',
      },
    },
    growth: {
      badge: 'Growth',
      name: 'Growth',
      price: '$49/mo',
      desc: 'Built for growing businesses handling active buyer flow.',
      features: {
        1: 'Up to 5,000 automated replies each month',
        2: 'Advanced catalog, files, and media workflows',
        3: 'Stronger lead scoring and follow-up automation',
        4: 'Priority analytics and faster support response',
      },
    },
    scale: {
      badge: 'Scale',
      name: 'Scale',
      price: '$99/mo',
      desc: 'For larger sales teams managing serious WhatsApp volume.',
      features: {
        1: 'High-volume reply handling and campaign scale',
        2: 'Deep automation logic across products, files, and inbox',
        3: 'More detailed reporting and sales visibility',
        4: 'Priority onboarding help and dedicated success support',
      },
    },
  },
}

admin.nav.catalog = 'Catalog'
admin.overview.quickActions.businessSettings = 'Business settings'
admin.overview.quickActions.products = 'View products'
admin.overview.quickActions.files = 'View files'
admin.chat.previewLabel = 'WhatsApp chat preview'
admin.chat.defaultReply = "Hi! Thanks for reaching out. I'm SOVA, your sales assistant. How can I help you today?"
