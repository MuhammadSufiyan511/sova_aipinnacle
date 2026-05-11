export const onboarding = {
  business: {
    title: 'আপনি কোন ধরনের ব্যবসা পরিচালনা করেন?',
    subtitle: 'SOVA আপনার নির্দিষ্ট শিল্পের ভিত্তিতে তার প্রতিক্রিয়া এবং লিড শনাক্তকরণ কাস্টমাইজ করে।',
    searchPlaceholder: 'শিল্প অনুসন্ধান করুন...',
    customCategoryPlaceholder: 'আপনার ব্যবসার বিভাগ লিখুন...',
    nextBtn: 'আমার শিল্প নির্বাচন করুন ←',
    categories: {
      clothing: { label: 'পোশাক', desc: 'পরিধেয় বস্ত্র, জুতা, আনুষাঙ্গিক।' },
      jewellery: { label: 'অলঙ্কার', desc: 'সোনা, রূপা, গহনা।' },
      toys: { label: 'খেলনা', desc: 'শিশুদের খেলনা, পাজল, গেমস।' },
      'books-stationary': { label: 'বই ও স্টেশনারি', desc: 'শিক্ষা, অফিস সামগ্রী।' },
      'dry-fruits': { label: 'শুকনো ফল', desc: 'বাদাম, কাজু, খেজুর।' },
      decoration: { label: 'সজ্জা', desc: 'অনুষ্ঠান, থিম, ঘর সাজানোর সামগ্রী।' },
      electronics: { label: 'ইলেকট্রনিক্স', desc: 'ফোন, গ্যাজেট, আনুষাঙ্গিক সরঞ্জাম।' },
      'medical-instruments': { label: 'চিকিৎসা সরঞ্জাম', desc: 'হাসপাতাল এবং ক্লিনিকের সরঞ্জাম।' },
      'surgical-instruments': { label: 'সার্জিক্যাল সরঞ্জাম', desc: 'সূক্ষ্ম সরঞ্জাম এবং সেট।' },
      hardware: { label: 'হার্ডওয়্যার', desc: 'সরঞ্জাম, সামগ্রী, ফিক্সচার।' },
      fireworks: { label: 'আতশবাজি', desc: 'উদযাপন এবং অনুষ্ঠানমূলক সামগ্রী।' },
      service: { label: 'সেবা ব্যবসা', desc: 'বুকিং, কনসাল্টিং, স্থানীয় সেবা।' },
      agency: { label: 'এজেন্সি ও B2B', desc: 'ক্লায়েন্ট, পিচ, রিটেইনার।' },
      creator: { label: 'কন্টেন্ট ক্রিয়েটর', desc: 'ডিজিটাল পণ্য, দর্শক-কেন্দ্রিক ব্যবসা।' },
      other: { label: 'অন্যান্য', desc: 'আপনার ব্যবসায়ের জন্য বিশেষ কিছু।' }
    }
  },
  products: {
    title: 'আপনার পণ্য যোগ করুন',
    subtitle: 'SOVA স্বয়ংক্রিয়ভাবে ক্রেতার প্রশ্নের উত্তর দিতে আপনার ক্যাটালগ ব্যবহার করে।',
    addBtn: 'পণ্য যোগ করুন',
    nextBtn: 'সংরক্ষণ করুন এবং অগ্রসর হন ←',
    toastError: 'অগ্রসর হতে অন্তত একটি পণ্য যোগ করুন যাতে SOVA আপনার ব্যবসা সম্পর্কে শিখতে পারে।',
    modal: {
      titleAdd: 'নতুন পণ্য যোগ করুন',
      titleUpdate: 'পণ্য আপডেট করুন',
      subtitleAdd: 'আপনার পণ্যের নাম, সংক্ষিপ্ত বিবরণ এবং একটি ঐচ্ছিক ছবি, ভিডিও বা PDF দিন।',
      subtitleUpdate: 'ক্রেতাদের সাথে চ্যাটে SOVA যে পণ্যের বিবরণ ব্যবহার করে তা সম্পাদনা করুন।',
      mediaLabel: 'পণ্য মিডিয়া',
      mediaHelp: 'আপলোড করতে ক্লিক করুন',
      nameLabel: 'পণ্যের নাম',
      namePlaceholder: 'যেমন: প্রিমিয়াম সিল্ক স্কার্ফ',
      descLabel: 'বিবরণ',
      descPlaceholder: 'যেমন: নরম ফিনিশ এবং গিফট প্যাকেজিং সহ প্রিমিয়াম সিল্ক স্কার্ফ।',
      saveBtn: 'পণ্য সংরক্ষণ করুন',
      updateBtn: 'পণ্য আপডেট করুন',
      invalidMediaType: 'অনুগ্রহ করে একটি বৈধ ছবি বা ভিডিও ফাইল আপলোড করুন'
    }
  },
  tone: {
    title: 'SOVA-র কণ্ঠস্বর নির্ধারণ করুন',
    subtitle: 'আপনার গ্রাহকদের সাথে কথা বলার জন্য উপযুক্ত এক বা একাধিক টোন নির্বাচন করুন।',
    profiles: {
      professional: { label: 'পেশাদার', desc: 'স্পষ্ট, বিনয়ী এবং ব্যবসা-কেন্দ্রিক।' },
      friendly: { label: 'বন্ধুসুলভ', desc: 'উষ্ণ, আন্তরিক এবং সহজলভ্য।' },
      persuasive: { label: 'প্ররোচনামূলক', desc: 'বিক্রয়-মুখী এবং সুবিধার ওপর গুরুত্ব প্রদানকারী।' },
      direct: { label: 'সরাসরি', desc: 'সংক্ষিপ্ত, স্পষ্ট এবং বাহুল্যবর্জিত।' },
      playful: { label: 'মজাদার', desc: 'ইমোজি ব্যবহারকারী, প্রাণবন্ত এবং আনন্দময়।' },
      empathetic: { label: 'সহমর্মী', desc: 'বুঝদার, ধৈর্যশীল এবং সহায়ক।' }
    },
    completeBtn: 'ড্যাশবোর্ড চালু করুন →'
  },
  loader: {
    title: 'আপনার AI বিক্রয় সহকারী প্রস্তুত হচ্ছে',
    subtitle: 'আমরা আপনার ব্যবসা, পণ্য এবং পছন্দের ভিত্তিতে SOVA সেট আপ করছি।',
    init: 'অনবোর্ডিং শুরু হচ্ছে',
    wait: 'আপনার সেটআপ প্রস্তুত করার সময় অনুগ্রহ করে অপেক্ষা করুন।',
    finalWait: 'আপনার সেটআপ সম্পন্ন করার সময় অনুগ্রহ করে অপেক্ষা করুন।',
    steps: {
      catalog: 'আপনার ক্যাটালগ তৈরি হচ্ছে...',
      ai: 'AI ব্যক্তিত্ব প্রয়োগ করা হচ্ছে...',
      meta: 'Meta API-এর সাথে একীকরণ করা হচ্ছে...',
      workspace: 'আপনার ওয়ার্কস্পেস প্রস্তুত করা হচ্ছে...'
    }
  }
}

export const admin = {
  nav: {
    workspace: 'ওয়ার্কস্পেস',
    overview: 'ওভারভিউ',
    broadcasts: 'ব্রডকাস্ট',
    chat: 'WhatsApp চ্যাট',
    products: 'পণ্যসমূহ',
    files: 'ফাইলসমূহ',
    reports: 'রিপোর্টসমূহ',
    settings: 'সেটিংস',
    notifications: 'বিজ্ঞপ্তি',
    profile: 'প্রোফাইল'
  },
  common: {
    currentView: 'বর্তমান ভিউ',
    automationLive: 'অটোমেশন লাইভ',
    live: 'লাইভ',
    previous: 'পূর্ববর্তী',
    next: 'পরবর্তী',
    preview: 'প্রিভিউ',
    open: 'খুলুন',
    edit: 'সম্পাদনা',
    active: 'সক্রিয়',
    inactive: 'নিষ্ক্রিয়',
    currencySymbol: '৳',
    currencyCode: 'BDT',
    starter: 'স্টার্টার',
    growth: 'গ্রোথ',
    scale: 'স্কেল',
    units: 'ইউনিট',
  },
  broadcasts: {
    title: 'ব্রডকাস্ট ক্যাম্পেইন',
    subtitle: 'SOVA-র মাধ্যমে লিড, গ্রাহক এবং সেগমেন্টে WhatsApp বার্তা শিডিউল করুন।',
    newBtn: 'নতুন ব্রডকাস্ট',
    stats: {
      scheduled: 'শিডিউলকৃত',
      sentWeek: 'এই সপ্তাহে পাঠানো হয়েছে',
      avgResponse: 'গড় প্রতিক্রিয়া হার'
    },
    workflow: {
      title: 'অটোমেশন ওয়ার্কফ্লো',
      subtitle: 'সোভা কীভাবে আসা WhatsApp বার্তাগুলোকে যোগ্য লিডে রূপান্তর করে',
      nodes: {
        trigger: { label: 'আগত বার্তা', sub: 'WhatsApp ট্রিগার' },
        filter: { label: 'উদ্দেশ্য ফিল্টার', sub: 'SOVA লিড গুণমান শনাক্ত করে' },
        route: { label: 'রুট ও উত্তর', sub: 'স্বয়ংক্রিয় উত্তর পাঠানো হয়েছে' },
        capture: { label: 'লিড ধরা হয়েছে', sub: 'CRM এন্ট্রি তৈরি হয়েছে' }
      },
      status: {
        active: 'সক্রিয়',
        processing: 'প্রক্রিয়াকরণ',
        delivered: 'ডেলিভার করা হয়েছে',
        captured: 'সংগৃহীত'
      }
    },
    campaigns: {
      title: 'সকল ক্যাম্পেইন',
      status: {
        scheduled: 'শিডিউলকৃত',
        draft: 'খসড়া',
        sent: 'পাঠানো হয়েছে'
      },
      meta: {
        audience: 'শ্রোতা: {{count}}',
        powered: 'SOVA অটোমেশন দ্বারা পরিচালিত',
        stats: 'ওপেন: {{opens}} · উত্তর: {{replies}}'
      }
    }
  },
  products: {
    title: 'পণ্য ক্যাটালগ',
    subtitle: 'ক্রেতাদের চ্যাটে SOVA দ্বারা শেয়ারকৃত {{count}}টি পণ্য',
    newBtn: 'পণ্য যোগ করুন',
    banner: 'SOVA পণ্যের প্রাপ্যতা, মূল্য এবং বৈশিষ্ট্য সম্পর্কে প্রশ্নের স্বয়ংক্রিয় উত্তর দিতে আপনার ক্যাটালগ ব্যবহার করে।',
    empty: {
      title: 'এখনো কোনো পণ্য নেই',
      desc: 'আপনার প্রথম পণ্য যোগ করুন যাতে SOVA WhatsApp-এ সম্ভাব্য ক্রেতাদের সাথে তা শেয়ার করতে পারে।',
      btn: 'আপনার প্রথম পণ্য যোগ করুন'
    },
    item: {
      price: 'Rs. {{price}}',
      priceLabel: 'দাম',
      stockLabel: 'মোট মজুদ পণ্য',
      skuLabel: 'পণ্য আইডি',
      specsTitle: 'মূল বিবরণ',
      editBtn: 'বিবরণ পরিবর্তন করুন',
      mediaLabel: 'মিডিয়ার ধরন',
      view: 'দেখুন',
      active: 'সক্রিয়',
      inactive: 'নিষ্ক্রিয়',
      activate: 'সক্রিয় করুন',
      deactivate: 'নিষ্ক্রিয় করুন',
      modalTitle: 'পণ্যের ওভারভিউ',
      noDescription: 'এখনো কোনো বর্ণনা যোগ করা হয়নি।',
      none: 'কোনোটি নয়',
      deleteConfirmTitle: 'পণ্য মুছে ফেলবেন?',
      deleteConfirmDesc: 'এই কাজটি আর ফিরে পাওয়া যাবে না। এই পণ্যের সাথে সম্পর্কিত সমস্ত তথ্য স্থায়ীভাবে মুছে ফেলা হবে।',
      deleteConfirmBtn: 'হ্যাঁ, পণ্যটি মুছুন',
      deleteCancelBtn: 'এখনই থাক',
      deleteSuccess: 'পণ্যটি সফলভাবে মুছে ফেলা হয়েছে',
    },
    controls: {
      searchPlaceholder: 'পণ্য অনুসন্ধান করুন...',
      show: 'দেখান',
      perPage: 'প্রতি পৃষ্ঠা',
      all: 'সমস্ত',
      pageInfo: '{{total}}টি পণ্যের মধ্যে {{start}}-{{end}}',
      filters: {
        all: 'সমস্ত',
        active: 'সক্রিয়',
        inactive: 'নিষ্ক্রিয়'
      },
      empty: {
        title: 'মিলছে এমন কোনো পণ্য নেই',
        desc: 'অন্য কোনো শব্দ ব্যবহার করে দেখুন অথবা সক্রিয় ফিল্টার পরিবর্তন করুন।'
      }
    }
  },
  addProductOverview: {
    titleAdd: 'নতুন পণ্য যোগ করুন',
    titleEdit: 'পণ্য সম্পাদনা করুন',
    subtitleAdd: 'আপনার ক্যাটালগের জন্য একটি পেশাদার তালিকা তৈরি করুন।',
    subtitleEdit: 'উন্নত AI উত্তরের জন্য আপনার পণ্যের বিবরণ আপডেট করুন।',
    backToCatalog: 'দোকানের ক্যাটালগে ফিরে যান',
    editorInitialising: 'এডিটর খোলা হচ্ছে...',
    steps: {
      basics: 'মৌলিক তথ্য',
      category: 'পণ্যের বিবরণ',
      pricing: 'মজুদ ও মূল্য',
    },
    sections: {
      basics: {
        title: 'সাধারণ তথ্য',
        subtitle: 'আপনার পণ্যের প্রাথমিক বিবরণ দিন।',
        nameLabel: 'পণ্যের নাম',
        namePlaceholder: 'যেমন: সুতির টি-শার্ট',
        descriptionLabel: 'বিবরণ',
        descriptionPlaceholder: 'আপনার গ্রাহকদের এই পণ্যটি সম্পর্কে বলুন...',
        brandLabel: 'ব্র্যান্ডের নাম',
        brandPlaceholder: 'যেমন: লোকাল আর্টিসান',
      },
      category: {
        title: 'শ্রেণীবিভাগ',
        subtitle: 'গ্রাহকদের পণ্য খুঁজে পেতে সাহায্য করুন।',
        industryLabel: 'ব্যবসায়িক বিভাগ',
        desc: 'শ্রেণীবিন্যাস এবং অনুক্রম',
        categoryLabel: 'মূল বিভাগ (Category)',
        categoryPlaceholder: 'বিভাগ নির্বাচন করুন',
        subCategoryLabel: 'পণ্যের ধরন',
        subCategoryPlaceholder: 'ধরন নির্বাচন করুন',
        newSubCategory: 'নতুন ধরন',
        customCategoryLabel: 'আপনার বিভাগের নাম',
        customCategoryPlaceholder: 'বিভাগ লিখুন',
        customSubCategoryLabel: 'আপনার ধরনের নাম',
        customSubCategoryPlaceholder: 'ধরন লিখুন',
        newSubCategory: 'নতুন ধরন',
        customSetupTitle: 'কাস্টম বিভাগ কনফিগারেশন',
        customSetupSubtitle: 'এই পণ্যটি কীভাবে কাজ করবে তা নির্ধারণ করুন',
        productTypeLabel: 'পণ্যের শ্রেণীবিভাগ',
        typePhysical: 'ভৌত পণ্য',
        typeDigital: 'ডিজিটাল পণ্য',
        typeService: 'সেবা',
        typeSubscription: 'সাবস্ক্রিপশন',
        promptNewType: 'নতুন পণ্যের ধরন লিখুন...',
        addNewType: 'নতুন ধরন যোগ করুন',
        trackStock: 'স্টক ট্র্যাক করুন',
        taxable: 'করযোগ্য (Taxable)',
        weightLabel: 'ওজন (কেজি)',
        customFieldsTitle: 'অতিরিক্ত বিবরণ',
        addFieldBtn: 'বিবরণ যোগ করুন',
        fieldLabelPlaceholder: 'যেমন: উপাদান',
        fieldValuePlaceholder: 'যেমন: ১০০% সুতি',
      },
      pricing: {
        title: 'মূল্য ও মজুদ',
        subtitle: 'বিক্রয় মূল্য এবং মজুদের পরিমাণ নির্ধারণ করুন।',
        priceLabel: 'বিক্রয় মূল্য',
        salePriceLabel: 'ছাড়ের পর মূল্য',
        salePricePlaceholder: 'ঐচ্ছিক',
        stockLabel: 'মোট মজুদ',
        stockPlaceholder: 'উপলব্ধ সংখ্যা',
        currentStockLabel: 'বর্তমান স্টক',
        minStockLabel: 'কম স্টক অ্যালার্ট',
        skuLabel: 'পণ্য আইডি / SKU',
        skuPlaceholder: 'যেমন: ITEM-001',
        skuHelp: 'দোকানের অভ্যন্তরীণ কোড',
        minOrderLabel: 'সর্বনিম্ন অর্ডার',
      },
      variants: {
        title: 'পণ্যের বৈচিত্র্য',
        subtitle: 'আকার, রঙ এবং উপাদানের একাধিক সেট নির্ধারণ করুন',
        desc: 'উপলব্ধ আকার এবং রঙের সেট',
        rowLabel: 'বৈচিত্র্য সেট',
        expandAll: 'সব বিস্তৃত করুন',
        collapseAll: 'সব সংকুচিত করুন',
        addGroup: 'বৈচিত্র্য গ্রুপ যোগ করুন',
        saveVariant: 'বৈচিত্র্য সংরক্ষণ করুন',
        newGroupLabel: 'নতুন বৈচিত্র্য গ্রুপ',
        inputPlaceholder: 'টাইপ করুন এবং Enter টিপুন',
        noVariantsFound: 'এই বিভাগের জন্য কোনো পণ্যের বৈচিত্র্য পাওয়া যায়নি',
        noStandardFields: 'এই বিভাগের জন্য কোনো আদর্শ বৈচিত্র্য ক্ষেত্র (সাইজ, রঙ ইত্যাদি) নির্ধারণ করা হয়নি।',
        noVariantFields: 'এই বিভাগের জন্য কোনো আদর্শ বৈচিত্র্য ক্ষেত্র (সাইজ, রঙ ইত্যাদি) নির্ধারণ করা হয়নি।',
        noVariantFieldsSubtitle: 'আপনি নিচে কাস্টম বিবরণ যোগ করতে পারেন।',
        sizeLabel: 'সাইজ',
        colorsLabel: '{{count}} রঙ',
        colorLabel: '{{count}} রঙ',
      },
      media: {
        title: 'পণ্যের ছবি ও ভিডিও',
        noMediaAttached: 'কোনো ছবি আপলোড করা হয়নি',
        upload: 'মিডিয়া আপলোড করুন',
        primary: 'প্রধান ছবি',
        makePrimary: 'প্রধান ছবি হিসেবে সেট করুন',
        dropTitle: 'আপলোড করতে ছেড়ে দিন',
        dropSubtitle: 'ছবি বা ভিডিও যোগ করতে এখানে ছেড়ে দিন',
        editorTitle: 'মিডিয়া সম্পাদক',
        editorSubtitle: 'আপনার পণ্যের ছবি ক্রপ এবং সমন্বয় করুন',
      },
      actions: {
        submitAdd: 'তালিকায় যোগ করুন',
        submitEdit: 'পরিবর্তন সংরক্ষণ করুন',
      },
    },
    validation: {
      nameRequired: 'পণ্যের নাম আবশ্যক',
      descriptionRequired: 'অনুগ্রহ করে পণ্যের বিবরণ যোগ করুন',
      mediaRequired: 'অনুগ্রহ করে কমপক্ষে একটি ছবি বা ভিডিও আপলোড করুন',
      categoryRequired: 'অনুগ্রহ করে একটি প্রধান বিভাগ নির্বাচন করুন',
      subCategoryRequired: 'অনুগ্রহ করে একটি উপ-বিভাগ নির্বাচন করুন',
      priceRequired: 'অনুগ্রহ করে বিক্রয় মূল্য লিখুন',
      stockRequired: 'অনুগ্রহ করে স্টক পরিমাণ লিখুন',
      missingFields: 'সংরক্ষণের আগে সমস্ত প্রয়োজনীয় তথ্য পূরণ করুন',
      createSuccess: 'পণ্য সফলভাবে ক্যাটালগে যোগ করা হয়েছে',
      updateSuccess: 'তথ্য সফলভাবে আপডেট হয়েছে',
      statusActive: 'পণ্যটি সক্রিয় হিসেবে চিহ্নিত করা হয়েছে',
      statusInactive: 'পণ্যটি নিষ্ক্রিয় হিসেবে চিহ্নিত করা হয়েছে',
    },
    fields: {
      selectOption: 'বিকল্প নির্বাচন করুন',
      customValue: 'আপনার ইচ্ছা মতো...',
      customValuePlaceholder: 'বিবরণ লিখুন',
      colorNotFound: 'রঙের নাম সনাক্ত করা যায়নি। এটি একটি কাস্টম লেবেল হিসাবে যোগ করা হবে।',
      size: { label: 'সাইজ', placeholder: 'যেমন: XL বা ৪২' },
      color: { label: 'রং', placeholder: 'যেমন: গাঢ় নীল' },
      fabric: { label: 'উপাদান', placeholder: 'যেমন: রেশম' },
      fit: { label: 'ফিট টাইপ', placeholder: 'যেমন: স্লিম ফিট' },
      pattern: { label: 'ডিজাইন / প্যাটার্ন', placeholder: 'যেমন: ফুলদার' },
      ageRange: { label: 'বয়স সীমা', placeholder: 'যেমন: ৫ থেকে ৮ বছর' },
      gender: { label: 'লিঙ্গ', placeholder: 'নির্বাচন করুন' },
      purity: { label: 'বিশুদ্ধতা', placeholder: 'যেমন: ২২ ক্যারেট' },
      weight: { label: 'ওজন', placeholder: 'যেমন: ১০ গ্রাম' },
      brand: { label: 'ব্র্যান্ড', placeholder: 'যেমন: স্যামসাং' },
      storage: { label: 'স্টোরেজ মেমরি', placeholder: 'যেমন: ১২৮ জিবি' },
      ram: { label: 'র‍্যাম সাইজ', placeholder: 'যেমন: ৮ জিবি' },
      processor: { label: 'প্রসেসর', placeholder: 'যেমন: কোর i7' },
      subject: { label: 'বিষয়', placeholder: 'যেমন: জীববিজ্ঞান' },
      origin: { label: 'উৎপত্তি দেশ', placeholder: 'যেমন: সৌদি আরব' },
    },
    categories: {
      clothing: 'পোশাক ও ফ্যাশন',
      jewellery: 'গহনা ও ঘড়ি',
      electronics: 'ফোন ও গ্যাজেট',
      toys: 'শিশু ও খেলনা',
      dry_fruits: 'শুকনো ফল ও বাদাম',
      decoration: 'ঘর ও অনুষ্ঠান সজ্জা',
      books_stationary: 'বই ও স্টেশনারি',
      medical_instruments: 'চিকিৎসা সরঞ্জাম',
      surgical_instruments: 'সার্জিক্যাল সরঞ্জাম',
      hardware: 'হার্ডওয়্যার ও টুলস',
      fireworks: 'আতশবাজি',
      other: 'অন্যান্য পণ্য',
    },
    subcategories: {
      menswear: 'পুরুষদের পোশাক',
      womenswear: 'মহিলাদের পোশাক',
      'kids-wear': 'শিশুদের পোশাক',
      abayas: 'আবায়া ও পর্দা',
      'traditional-wear': 'ঐতিহ্যবাহী পোশাক',
      sportswear: 'খেলাধুলার পোশাক',
      outerwear: 'জ্যাকেট ও কোট',
      footwear: 'জুতো',
      accessories: 'আনুষঙ্গিক সরঞ্জাম',
      'gold-jewelry': 'সোনার গহনা',
      'silver-jewelry': 'রূপার গহনা',
      'diamond-precious': 'হীরা ও রত্ন',
      watches: 'দামী ঘড়ি',
      rings: 'আংটি',
      necklaces: 'হার ও মালা',
      bracelets: 'বালা ও ব্রেসলেট',
      earrings: 'দুল / কানের গহনা',
      'costume-jewelry': 'ফ্যাশন জুয়েলারি',
      smartphones: 'স্মার্টফোন',
      'laptops-pc': 'ল্যাপটপ ও কম্পিউটার',
      'audio-video': 'অডিও ও ভিডিও',
      photography: 'ক্যামেরা',
      gaming: 'গেমিং গিয়ার',
      'smart-home': 'স্মার্ট হোম',
      wearables: 'স্মার্টওয়াচ',
      educational: 'শিক্ষামূলক খেলনা',
      'board-games': 'বোর্ড গেম',
      'outdoor-toys': 'আউটডোর খেলনা',
      'remote-control': 'রিমোট কন্ট্রোল খেলনা',
      'action-figures': 'অ্যাকশন ফিগার',
      'dolls-plush': 'পুতুল ও প্লাশ',
      crafts: 'শিল্প ও কারুকাজ',
      'roasted-nuts': 'ভাজা বাদাম',
      'raw-nuts': 'কাঁচা বাদাম',
      'dried-berries': 'শুকনো ফল',
      'dates-varieties': 'পছন্দসই খেজুর',
      'seeds-mix': 'বীজ ও মিক্স',
      'home-decor': 'গৃহসজ্জা',
      'wall-art': 'দেয়াল সজ্জা',
      lighting: 'আলোকসজ্জা',
      'event-decor': 'অনুষ্ঠান সজ্জা',
      'academic-books': 'শিক্ষায়তনিক বই',
      'fiction-nonfiction': 'কল্পকাহিনী ও অন্যান্য',
      'stationary-office': 'অফিস স্টেশনারি',
      'art-supplies': 'শিল্প সামগ্রী',
      'writing-instruments': 'কলম ও সেট',
      diagnostics: 'ডায়াগনস্টিক সরঞ্জাম',
      monitoring: 'রোগী পর্যবেক্ষণ',
      'rehab-mobility': 'চলাফেরা সহায়ক',
      respiratory: 'শ্বাস-প্রশ্বাস সহায়ক সরঞ্জাম',
      'general-surgery': 'সাধারণ সার্জারি',
      'dental_instruments': 'দন্ত চিকিৎসা সরঞ্জাম',
      'orthopedic-surgery': 'হাড়ের সার্জারি',
      'ophthalmic-surgery': 'চক্ষু সার্জারি',
      'power-tools': 'পাওয়ার টুলস',
      'hand-tools': 'হ্যান্ড টুলস',
      'plumbing-hardware': 'প্লাম্বিং হার্ডওয়্যার',
      'electrical-hardware': 'ইলেকট্রিক্যাল হার্ডওয়্যার',
      'aerial-rockets': 'আকাশী রকেট',
      'multi-shot-cakes': 'আতশবাজি কেক',
      'fountains-wheels': 'ফোয়ারা ও চাকা',
      'ground-fireworks': 'ভূমি আতশবাজি',
      'general-merchandise': 'সাধারণ পণ্য',
      'gift-items': 'উপহার সামগ্রী',
    },
    nested: {
      formal_shirts: 'ফরমাল শার্ট',
      t_shirts: 'টি-শার্ট',
      polos: 'পোলো শার্ট',
      trousers: 'প্যান্ট / ট্রাউজার',
      jeans: 'জিন্স',
      suits_blazers: 'স্যুট ও ব্লেজার',
      nightwear: 'নাইটওয়্যার',
      dresses: 'পোশাক / ড্রেস',
      tops_blouses: 'টপস ও ব্লাউজ',
      skirts: 'স্কার্ট',
      ethnic_wear: 'এথনিক পোশাক',
      lingerie: 'অন্তরবাস',
      loungewear: 'লাউঞ্জওয়্যার',
      infant_0_2y_: 'শিশু (০-২ বছর)',
      toddler_2_5y_: 'শিশু (২-৫ বছর)',
      boys_fashion: 'ছেলেদের ফ্যাশন',
      girls_fashion: 'মেয়েদের ফ্যাশন',
      school_uniforms: 'স্কুল ইউনিফর্ম',
      casual_abayas: 'সাধারণ আবায়া',
      formal_evening_abayas: 'ফরমাল আবায়া',
      bridal_abayas: 'ব্রাইডাল আবায়া',
      butterfly_abayas: 'বাটারফ্লাই আবায়া',
      bisht_abayas: 'বিশত আবায়া',
      kimonos: 'কিমোনো',
      kaftans: 'কাফতান',
      shalwar_kameez: 'সালোয়ার কামিজ',
      kurta_pajama: 'পাঞ্জাবি পায়জামা',
      sherwani: 'শেরওয়ানি',
      sarees: 'শাড়ি',
      lehengas: 'লেহেঙ্গা',
      gym_training: 'জিম ও ট্রেনিং',
      running_gear: 'রানিং গিয়ার',
      football_kits: 'ফুটবল কিট',
      cricket_gear: 'ক্রিকেট গিয়ার',
      yoga_pilates: 'যোগ ও পাইলেটস',
      leather_jackets: 'লেদার জ্যাকেট',
      puffer_jackets: 'পাফার জ্যাকেট',
      trench_coats: 'ট্রেঞ্চ কোট',
      windbreakers: 'উইন্ডব্রেকার',
      hoodies: 'হুডি',
      formal_shoes: 'ফরমাল জুতো',
      sneakers: 'স্নিকার্স',
      sandals_flip_flops: 'স্যান্ডেল / চটি',
      boots: 'বুট জুতো',
      heels: 'হিল জুতো',
      belts: 'বেল্ট',
      hats_caps: 'টুপি',
      ties_bowties: 'টাই ও বো-টাই',
      scarves: 'স্কার্ফ',
      gloves: 'হাতমোজা',
      engagement_rings: 'বাগদানের আংটি',
      necklaces: 'হার / লকেট',
      bangles: 'চুড়ি / বালা',
      earrings: 'দুল / কানের গহনা',
      gold_coins_bars: 'সোনার মুদ্রা / বার',
      rings: 'আংটি',
      chains: 'চেইন',
      bracelets: 'ব্রেসলেট',
      anklets: 'নুপূর',
      solitaire_rings: 'সলিটায়ার আংটি',
      diamond_sets: 'ডায়মন্ড সেট',
      loose_gemstones: 'আলগা রত্নপাথর',
      birthstones: 'জন্মপাথর',
      almonds: 'বাদাম',
      cashews: 'কাজু বাদাম',
      pistachios: 'পেস্তা বাদাম',
      walnuts: 'আখরোট',
      raisins: 'কিশমিশ',
      ajwa_dates: 'আজওয়া খেজুর',
      mabroom_dates: 'মাবরুম খেজুর',
      sukkari_dates: 'সু্কারি খেজুর',
      medjool_dates: 'মাজদূল খেজুর',
      chia_seeds: 'চিয়া বীজ',
      flax_seeds: 'তিসি বীজ',
      pumpkin_seeds: 'মিষ্টিকুমড়া বীজ',
      trail_mix: 'ট্রেইল মিক্স',
      sunflower_seeds: 'সূর্যমুখী বীজ',
      vases: 'ফুলদানি',
      cushions: 'কুশন',
      candles: 'মোমবাতি',
      statues: 'মূর্তি / শো-পিস',
      canvas_paintings: 'ক্যানভাস পেইন্টিং',
      wall_mirrors: 'দেয়াল আয়না',
      photo_frames: 'ফটো ফ্রেম',
      chandeliers: 'ঝাড়বাতি',
      table_lamps: 'টেবিল ল্যাম্প',
      floor_lamps: 'ফ্লোর ল্যাম্প',
      led_strips: 'এলইডি স্ট্রিপ',
      balloons: 'বেলুন',
      backdrops: 'ব্যাকড্রপ',
      wedding_decor: 'বিয়ের সাজসজ্জা',
      medical: 'মেডিক্যাল',
      engineering: 'ইঞ্জিনিয়ারিং',
      commerce: 'কমার্স',
      school_books: 'স্কুল পাঠ্যবই',
      sci_fi: 'সায়েন্স ফিকশন',
      mystery: 'রহস্য',
      biography: 'জীবনী',
      self_help: 'আত্ম-উন্নয়ন',
      paper: 'কাগজ',
      files: 'ফাইল',
      staplers: 'স্ট্যাপলার',
      calculators: 'ক্যালকুলেটর',
      canvases: 'ক্যানভাস',
      acrylic_paints: 'এক্রাইলিক রঙ',
      brushes: 'তুলি',
      sketchbooks: 'স্কেচবুক',
      fountain_pens: 'ফাউন্টেন পেন',
      ballpoint_pens: 'বলপয়েন্ট পেন',
      gift_sets: 'উপহার সেট',
      blood_pressure_monitors: 'বিপি মনিটর',
      digital_thermometers: 'ডিজিটাল থার্মোমিটার',
      stethoscopes: 'স্টেথোস্কোপ',
      glucometers: 'গ্লুকোমিটার',
      pulse_oximeters: 'পালস অক্সিমিটার',
      ecg_machines: 'ইসিজি মেশিন',
      heart_monitors: 'হার্ট মনিটর',
      wheelchairs: 'হুইলচেয়ার',
      walkers: 'ওয়াকার',
      crutches: 'বগলের লাঠি',
      support_belts: 'সাপোর্ট বেল্ট',
      nebulizers: 'নেবুলাইজার',
      oxygen_concentrators: 'অক্সিজেন কনসেনট্রেটর',
      cpap_machines: 'সিপ্যাপ মেশিন',
      forceps: 'চিমটা',
      scissors: 'কাঁচি',
      scalpels: 'স্ক্যালপেল',
      retractors: 'রিট্র্যাক্টর',
      needle_holders: 'নিডল হোল্ডার',
      extractors: 'এক্সট্রাক্টর',
      probes: 'প্রোব',
      dental_mirrors: 'ডেন্টাল মিরর',
      elevators: 'এলিভেটর',
      bone_drills: 'হাড়ের ড্রিল',
      screws_plates: 'স্ক্রু ও প্লেট',
      bone_saws: 'হাড় কাটার করাত',
      eye_speculums: 'চক্ষু স্পেকুলাম',
      microsurgical_scissors: 'ক্ষুদ্র শল্য কাঁচি',
      drills: 'ড্রিল মেশিন',
      angle_grinders: 'অ্যাঙ্গেল গ্রাইন্ডার',
      electric_saws: 'বৈদ্যুতিক করাত',
      rotary_hammers: 'রোটারি হ্যামার',
      wrenches: 'রঞ্চ / রেঞ্জ',
      screwdrivers: 'স্ক্রু ড্রাইভার',
      pliers: 'প্লায়ার্স',
      hammers: 'হাতুড়ি',
      pipe_fittings: 'পাইপ ফিটিংস',
      faucets: 'কল / ট্যাব',
      valves: 'ভালভ',
      pumps: 'পাম্প',
      circuit_breakers: 'সার্কিট ব্রেকার',
      cables_wires: 'কেবল ও তার',
      switches: 'সুইচ',
      inverters: 'ইনভার্টার',
      big_burst_rockets: 'বড় রকেট',
      double_burst: 'ডবল বার্স্ট',
      signal_rockets: 'সিগন্যাল রকেট',
      _25_shots: '২৫ শট',
      _50_shots: '৫০ শট',
      _100_shots: '১০০ শট',
      fan_cakes: 'ফ্যান কেক',
      glittering_fountains: 'ঝকঝকে ফোয়ারা',
      color_wheels: 'রঙিন চাকা',
      cone_fountains: 'কোণ ফোয়ারা',
      sparklers: 'ফুলঝুরি',
      ground_spinners: 'ভুমি চরকা',
      cracklers: 'মড়মড়ে আতশবাজি',
      stationery: 'স্টেশনারি',
      household_items: 'গৃহস্থালী সামগ্রী',
      groceries: 'মুদি পণ্য',
      gift_cards: 'উপহার কার্ড',
      occasional_gifts: 'বিশেষ অনুষ্ঠানের উপহার',
    },
    summary: {
      untitled: 'শিরোনামহীন পণ্য',
      statusReady: 'স্টক আছে',
      statusOutOfStock: 'স্টক নেই',
      industryLabel: 'ব্যবসায়িক বিভাগ',
      listingHealth: 'লিস্টিং স্ট্যাটাস',
      visibility: 'দৃশ্যমানতা',
      marketLive: 'দোকানে সক্রিয়',
      inventoryState: 'স্টক অবস্থা',
      lowStock: 'স্টক কম!',
      stable: 'স্টক ঠিক আছে',
    },
  },
  overview: {
    stats: {
      activeConversations: 'সক্রিয় কথোপকথন',
      qualifiedLeads: 'যোগ্য লিড',
      automatedReplies: 'স্বয়ংক্রিয় উত্তর',
      avgResponseTime: 'গড় প্রতিক্রিয়া সময়'
    },
    quickActions: {
      products: 'পণ্যসমূহ দেখুন',
      settings: 'অটোমেশন নির্ধারণ করুন',
      businessSettings: 'ব্যবসা সেটিংস',
      files: 'ফাইলসমূহ দেখুন'
    },
    charts: {
      saleTrend: {
        title: 'বিক্রয় প্রবণতা',
        subtitle: 'গত ৭ দিনের কর্মক্ষমতা',
        pill: '+{{count}}% বৃদ্ধি',
        tooltipLabel: 'সম্পূর্ণতা'
      },
      leadMix: {
        title: 'লিড মিশ্রণ',
        subtitle: 'ফলো-আপ বনাম ক্রেতা',
        label: 'ক্রেতা'
      },
      leadsByDay: {
        title: 'দৈনিক লিড',
        subtitle: 'সাপ্তাহিক ভলিউম পর্যালোচনা',
        pill: 'সবচেয়ে ব্যস্ত সময়'
      }
    },
    donuts: {
      buyers: 'গুরুতর ক্রেতা',
      followups: 'ফলো-আপ',
      spam: 'স্প্যাম ফিল্টার করা হয়েছে'
    },
    activity: {
      title: 'সাম্প্রতিক অটোমেশন কার্যকলাপ',
      subtitle: 'SOVA এইমাত্র যা পরিচালনা করেছে',
      feeds: {
        order: 'নতুন অর্ডারের ইচ্ছা শনাক্ত করা হয়েছে',
        followup: 'স্বয়ংক্রিয়ভাবে ফলো-আপ পাঠানো হয়েছে',
        spam: 'স্প্যাম অনুসন্ধান ফিল্টার করা হয়েছে'
      }
    }
  },
  reports: {
    title: 'বিক্রয় রিপোর্টসমূহ',
    subtitle: 'SOVA কীভাবে WhatsApp কথোপকথনকে অর্ডার এবং বিক্রয়ে রূপান্তর করে তা ট্র্যাক করুন।',
    exportBtn: 'রিপোর্ট এক্সপোর্ট করুন',
    stats: {
      revenue: 'প্রভাবিত রাজস্ব',
      orderRate: 'লিড থেকে অর্ডার হার',
      resolved: 'সমাধানকৃত চ্যাট'
    },
    chart: {
      title: 'SOVA দ্বারা প্রভাবিত রাজস্ব',
      subtitle: 'স্বয়ংক্রিয় কথোপকথন থেকে প্রতিদিনের ট্র্যাক করা বিক্রয়',
      pill: 'এই সপ্তাহ'
    },
    table: {
      title: 'সাপ্তাহিক কর্মক্ষমতার সংক্ষিপ্ত রূপ',
      subtitle: 'অটোমেশন দ্বারা প্রতিদিন প্রভাবিত চ্যাট ভলিউম, অর্ডার এবং রাজস্ব।',
      headers: {
        day: 'দিন',
        chats: 'চ্যাট',
        orders: 'অর্ডার',
        conversion: 'রূপান্তর',
        revenue: 'রাজস্ব'
      }
    }
  },
  settings: {
    title: 'অটোমেশন সেটিংস',
    subtitle: 'আপনার SOVA কণ্ঠস্বর এবং অটোমেশন নিয়মগুলি পরিচালনা করুন।',
    sections: {
      business: {
        title: 'ব্যবসা সেটআপ',
        subtitle: 'বিভাগ পরিবর্তন করতে বা সেটআপ পুনরায় শুরু করতে চান? এখান থেকে আপডেট করুন।',
        button: 'ব্যবসা পরিবর্তন করুন',
        current: 'বর্তমান ব্যবসা',
        modalTitle: 'আপনার ব্যবসার বিভাগ আপডেট করুন',
        modalSubtitle: 'SOVA উত্তর প্রদান এবং পণ্য প্রসঙ্গে সঠিক ব্যবসার ধরণ ব্যবহার করতে এটি বেছে নিন।',
        save: 'পরিবর্তন সংরক্ষণ করুন',
        cancel: 'বাতিল',
        close: 'বন্ধ করুন'
      },
      voice: {
        title: 'AI কণ্ঠস্বর এবং টোন',
        subtitle: 'SOVA কীভাবে আপনার গ্রাহকদের সাথে কথা বলে তা নিয়ন্ত্রণ করে',
        current: 'বর্তমান ভয়েস',
        button: 'ভয়েস পরিবর্তন করুন',
        modalTitle: 'ভয়েস সেটআপ'
      },
      rules: {
        title: 'অটোমেশন নিয়মসমূহ'
      }
    },
    tones: {
      professional: { label: 'পেশাদার', desc: 'পরিশীলিত এবং মার্জিত' },
      friendly: { label: 'বন্ধুসুলভ', desc: 'উষ্ণ এবং আন্তরিক' },
      direct: { label: 'সরাসরি', desc: 'সংক্ষিপ্ত এবং স্পষ্ট' },
      persuasive: { label: 'প্ররোচনামূলক', desc: 'দৃঢ় এবং বিক্রয়-মুখী' },
      playful: { label: 'মজাদার', desc: 'হালকা, প্রাণবন্ত এবং আনন্দময়' },
      empathetic: { label: 'সহমর্মী', desc: 'শান্ত, বুঝদার এবং আশ্বস্তকারী' },
      creative: { label: 'সৃজনশীল', desc: 'প্রকাশভঙ্গি এবং সাহসী' }
    },
    rows: {
      autoReply: { title: 'ক্রেতাদের স্বয়ংক্রিয় উত্তর', desc: 'SOVA ব্যবহার করে অবিলম্বে সাড়া দিন।' },
      spamFilter: { title: 'স্প্যাম ফিল্টার', desc: 'স্বয়ংক্রিয়ভাবে স্প্যাম বা বট মেসেজ শনাক্ত করুন।' },
      alerts: { title: 'উচ্চ-আগ্রহের অ্যালার্ট', desc: 'যখন SOVA গুরুতর ক্রেতা শনাক্ত করে তখন বিজ্ঞপ্তি পান।' },
      tfa: { title: 'টু-ফ্যাক্টর অথেন্টিকেশন', desc: 'আপনার ওয়ার্কস্পেসকে আরও নিরাপদ করুন।' }
    },
    comingSoon: 'শীঘ্রই আসছে'
  },
  profile: {
    header: {
      label: 'SOVA ওয়ার্কস্পেস প্রোফাইল',
      desc: 'এক জায়গা থেকে আপনার ওয়ার্কস্পেস পরিচয়, ভাষা এবং অটোমেশন প্রস্তুতি পরিচালনা করুন।'
    },
    plan: '{{name}} প্ল্যান',
    activity: {
      products: 'সংযুক্ত পণ্যসমূহ',
      automations: 'সক্রিয় অটোমেশন',
      alerts: 'অপঠিত লিড অ্যালার্ট'
    },
    details: {
      title: 'ওয়ার্কস্পেস বিবরণ',
      language: 'বর্তমান ভাষা',
      products: {
        label: 'ক্যাটালগে পণ্যসমূহ',
        ready: '{{count}}টি স্বয়ংক্রিয় উত্তরের জন্য প্রস্তুত'
      },
      tones: {
        label: 'বিজনেস টোন প্রোফাইল',
        ready: '{{count}}টি টোন সেটিং সেট করা আছে'
      }
    },
    business: {
      title: 'বিজনেস প্রোফাইল',
      cancel: 'বাতিল',
      save: 'সংরক্ষণ করুন',
      edit: 'সম্পাদনা করুন',
      photoAlt: 'বিজনেস প্রোফাইল',
      noPhoto: 'কোনো বিজনেস ছবি নেই',
      uploadPhoto: 'ছবি আপলোড করুন',
      nameLabel: 'বিজনেসের নাম',
      namePlaceholder: 'উদাহরণ: Noor Abaya House',
      emptyName: 'আপনার বিজনেস নাম যোগ করুন',
      descriptionLabel: 'বিজনেসের বিবরণ',
      descriptionPlaceholder: 'ক্রেতাদের বলুন আপনি কী বিক্রি করেন এবং কেন তারা আপনাকে বেছে নেবে।',
      emptyDescription: 'একটি সংক্ষিপ্ত বিজনেস বিবরণ যোগ করুন',
      locationLabel: 'বিজনেস লোকেশন',
      locationPlaceholder: 'উদাহরণ: ঢাকা, বাংলাদেশ',
      emptyLocation: 'আপনার লোকেশন যোগ করুন'
    },
    summary: {
      title: 'প্রোফাইল সারসংক্ষেপ',
      desc: 'এই ওয়ার্কস্পেস WhatsApp কথোপকথন পরিচালনা এবং SOVA-র মাধ্যমে উত্তর স্বয়ংক্রিয় করতে প্রস্তুত।'
    }
  },
  chat: {
    title: 'WhatsApp ইনবক্স',
    activeStatus: 'সক্রিয়',
    searchPlaceholder: 'কথোপকথন অনুসন্ধান করুন...',
    emptyState: 'দেখার জন্য একটি কথোপকথন নির্বাচন করুন',
    sovaLabel: 'SOVA AI',
    status: {
      automated: 'স্বয়ংক্রিয়',
      captured: 'লিড সংগৃহীত'
    },
    previewLabel: 'WhatsApp চ্যাট প্রিভিউ',
    defaultReply: 'হ্যালো! যোগাযোগ করার জন্য ধন্যবাদ। আমি SOVA, আপনার বিক্রয় সহকারী। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?'
  },
  drawer: {
    title: 'বিজ্ঞপ্তিসমূহ',
    empty: 'কোনো নতুন বিজ্ঞপ্তি নেই',
    readAll: 'সবগুলো পঠিত হিসেবে চিহ্নিত করুন'
  },
  celebration: {
    eyebrow: 'SOVA লঞ্চ',
    title: 'আপনার ওয়ার্কস্পেস প্রস্তুত!',
    checklist: {
      whatsapp: 'WhatsApp অটোমেশন সংযুক্ত',
      filtering: 'লিড ফিল্টারিং সক্রিয়',
      followups: 'ফলো-আপ প্রস্তুত'
    },
    headline: 'আপনার চ্যাট এখন <gradient>স্বয়ংক্রিয়</gradient>',
    desc: 'SOVA এখন আপনার ওয়ার্কস্পেসে লাইভ। এটি দ্রুত উত্তর দিতে এবং আপনার WhatsApp বিক্রয় চলমান রাখতে সক্ষম।',
    features: {
      replies: 'তাৎক্ষণিক স্বয়ংক্রিয় উত্তর সক্রিয়',
      whatsapp: 'আপনার WhatsApp চ্যাট এখন স্বয়ংক্রিয়',
      buyers: 'গুরুতর ক্রেতাদের প্রথমে হাইলাইট করা হবে'
    },
    btn: 'ড্যাশবোর্ডে ফিরে যান'
  },
}

admin.nav.files = 'ফাইলসমূহ'
admin.files = {
  title: 'ফাইল লাইব্রেরি',
  subtitle: '{{count}}টি ফাইল SOVA রিপ্লাই এবং মিডিয়া শেয়ারিংয়ের জন্য প্রস্তুত',
  newBtn: 'ফাইল যোগ করুন',
  banner: 'আপনার ছবি, ভিডিও এবং PDF এক জায়গায় রাখুন যাতে SOVA সঠিক মিডিয়া ব্যবহার করতে পারে।',
  empty: {
    title: 'এখনো কোনো ফাইল নেই',
    desc: 'আপনার প্রথম ফাইলটি যোগ করুন যাতে SOVA এটি ক্রেতাদের চ্যাটে ব্যবহার করতে পারে।',
    btn: 'প্রথম ফাইল যোগ করুন'
  },
  item: {
    view: 'দেখুন',
    active: 'সক্রিয়',
    inactive: 'নিষ্ক্রিয়',
    activate: 'সক্রিয় করুন',
    deactivate: 'নিষ্ক্রিয় করুন',
    modalTitle: 'ফাইলের ওভারভিউ',
    noDescription: 'এখনো কোনো বর্ণনা যোগ করা হয়নি।',
    none: 'কোনোটি নয়',
    mediaLabel: 'ফাইলের ধরন',
    fileNameLabel: 'ফাইলের নাম',
    types: {
      image: 'ছবি',
      video: 'ভিডিও',
      file: 'ফাইল'
    }
  },
  controls: {
    searchPlaceholder: 'ফাইল অনুসন্ধান করুন...',
    show: 'দেখান',
    perPage: 'প্রতি পৃষ্ঠা',
    all: 'সমস্ত',
    pageInfo: '{{total}}টি ফাইলের মধ্যে {{start}}-{{end}}',
    filters: {
      all: 'সমস্ত',
      image: 'ছবিসমূহ',
      video: 'ভিডিওসমূহ',
      file: 'ফাইলসমূহ'
    },
    empty: {
      title: 'মিলছে এমন কোনো ফাইল নেই',
      desc: 'অন্য কোনো শব্দ ব্যবহার করে দেখুন অথবা ফাইল টাইপ ফিল্টার পরিবর্তন করুন।'
    }
  },
  modal: {
    titleAdd: 'নতুন ফাইল যোগ করুন',
    titleUpdate: 'ফাইল আপডেট করুন',
    subtitleAdd: 'একটি ছবি, ভিডিও বা PDF আপলোড করুন যা SOVA চ্যাটে শেয়ার করতে পারে।',
    subtitleUpdate: 'ক্রেতাদের সাহায্য করার সময় SOVA যে ফাইল বিবরণ ব্যবহার করে তা সম্পাদনা করুন।',
    mediaLabel: 'ফাইল মিডিয়া',
    mediaHelp: 'আপলোড করতে ক্লিক করুন',
    nameLabel: 'ফাইলের নাম',
    namePlaceholder: 'যেমন: সামার ক্যাটালগ ২০২৬',
    descLabel: 'বর্ণনা',
    descPlaceholder: 'যেমন: সামার কালেকশনের জন্য PDF ক্যাটালগ।',
    saveBtn: 'ফাইল সংরক্ষণ করুন',
    updateBtn: 'ফাইল আপডেট করুন',
    invalidMediaType: 'অনুগ্রহ করে একটি বৈধ ছবি, ভিডিও বা PDF ফাইল আপলোড করুন'
  }
}

admin.upgrade = {
  navLabel: 'প্ল্যান আপগ্রেড',
  cta: 'প্ল্যান আপগ্রেড করুন',
  mobileCta: 'আপগ্রেড',
  eyebrow: 'প্ল্যান আপগ্রেড',
  title: 'এমন একটি প্ল্যান বেছে নিন যা আপনার WhatsApp বিক্রয়ের সাথে বৃদ্ধি পাবে',
  subtitle: 'আপনার ব্যবসার পরিমাণ বাড়ার সাথে সাথে আরও অটোমেশন এবং শক্তিশালী AI সাপোর্ট আনলক করুন।',
  currentPlanLabel: 'বর্তমান প্ল্যান',
  currentPlanValue: '{{plan}} প্ল্যান',
  currentPlanHint: 'আরও প্রচার এবং অটোমেশন আনলক করতে যেকোনো সময় আপগ্রেড করুন।',
  popular: 'সবচেয়ে জনপ্রিয়',
  choosePlan: 'প্ল্যান নির্বাচন করুন',
  currentPlanButton: 'বর্তমান প্ল্যান',
  compareTitle: 'কেন টিমগুলো আপগ্রেড করে',
  compareDesc: 'আপনার কথোপকথন বাড়ার সাথে সাথে SOVA আরও বেশি রিপ্লাই এবং লিড সামলাতে পারে।',
  benefits: {
    1: { title: 'আরও স্বয়ংক্রিয় কথোপকথন', desc: 'আপনার টিমের উপর চাপ না দিয়ে আরও বেশি WhatsApp উত্তর পরিচালনা করুন।' },
    2: { title: 'শক্তিশালী AI পরিচালনা', desc: 'SOVA-কে লিড বাছাই এবং ক্রেতাদের গাইড করার আরও সুযোগ দিন।' },
    3: { title: 'উন্নত বিক্রয় দৃশ্যমানতা', desc: 'প্রবৃদ্ধি ট্র্যাক করুন এবং সাড়া দেওয়ার ক্ষমতা উন্নত করুন।' },
    4: { title: 'স্কেলিং ব্যবসার জন্য নির্মিত', desc: 'আপনার ভলিউম বাড়লে আপগ্রেড করুন যাতে কাজের গতি ঠিক থাকে।' },
  },
  plans: {
    starter: {
      badge: 'স্টার্টার',
      name: 'স্টার্টার',
      price: '$19/mo',
      desc: 'ছোট টিমের জন্য যারা WhatsApp অটোমেশন শুরু করছে।',
      features: {
        1: 'প্রতি মাসে ১,০০০টি পর্যন্ত স্বয়ংক্রিয় উত্তর',
        2: 'বেসিক পণ্য এবং ফাইল শেয়ারিং সাপোর্ট',
        3: 'স্ট্যান্ডার্ড অটোমেশন নিয়মের সাথে লিড শনাক্তকরণ',
        4: 'প্রয়োজনীয় রিপোর্ট সহ একক ওয়ার্কস্পেস',
      },
    },
    growth: {
      badge: 'গ্রোথ',
      name: 'গ্রোথ',
      price: '$49/mo',
      desc: 'সক্রিয় ক্রেতা প্রবাহ পরিচালনা করার জন্য তৈরি।',
      features: {
        1: 'প্রতি মাসে ৫,০০০টি পর্যন্ত স্বয়ংক্রিয় উত্তর',
        2: 'অ্যাডভান্সড ক্যাটালগ, ফাইল এবং মিডিয়া ওয়ার্কফ্লো',
        3: 'উন্নত লিড স্কোরিং এবং ফলো-আপ অটোমেশন',
        4: 'অগ্রাধিকার বিশ্লেষণ এবং দ্রুত সাপোর্ট',
      },
    },
    scale: {
      badge: 'স্কেল',
      name: 'স্কেল',
      price: '$99/mo',
      desc: 'গুরুতর WhatsApp ভলিউম পরিচালনা করা বড় টিমের জন্য।',
      features: {
        1: 'উচ্চ ভলিউম উত্তর ব্যবস্থাপনা এবং ক্যাম্পেইন স্কেল',
        2: 'পণ্য, ফাইল এবং ইনবক্স জুড়ে গভীর অটোমেশন লজিক',
        3: 'আরও বিস্তারিত রিপোর্টিং এবং বিক্রয় দৃশ্যমানতা',
        4: 'অনবোর্ডিং সহায়তা এবং নিবেদিত সাপোর্ট',
      },
    },
  },
}

admin.nav.catalog = 'পণ্যের ক্যাটালগ'
admin.nav.addProduct = 'পণ্য যোগ করুন'
admin.common = admin.common || {}
admin.common.locked = 'লক করা আছে'
admin.common.unlockToView = 'দেখতে আনলক করুন'

admin.overview.quickActions.businessSettings = 'বিজনেস সেটিংস'
admin.overview.quickActions.products = 'পণ্য দেখুন'
admin.overview.quickActions.files = 'ফাইল দেখুন'
admin.chat.previewLabel = 'WhatsApp চ্যাট প্রিভিউ'
admin.chat.defaultReply = 'হ্যালো! যোগাযোগ করার জন্য ধন্যবাদ। আমি SOVA, আপনার বিক্রয় সহকারী। আজ আমি আপনাকে কীভাবে সাহায্য করতে পারি?'

admin.mockData = {
  broadcasts: {
    campaigns: [
      { name: 'রমজান অফার', audience: '১,২৪০ জন যোগাযোগ', sendAt: 'আজ, সন্ধ্যা ৭:০০' },
      { name: 'নতুন ক্যাটালগ লঞ্চ', audience: '৮৬০ জন যোগাযোগ', sendAt: 'অনুমোদনের অপেক্ষায়' },
      { name: 'VIP ফলো-আপ ব্লাস্ট', audience: '৪২০ জন যোগাযোগ', sendAt: 'গতকাল, বিকাল ৫:৩০' }
    ]
  },
  notifications: [
    { title: 'নতুন হাই-इंटেন্ট লিড', desc: 'ফয়সাল আহমেদ প্রিমিয়াম সিল্ক স্কার্ফের পাইকারি মূল্য সম্পর্কে জিজ্ঞাসা করছেন।', time: '২ মিনিট আগে' },
    { title: 'ব্রডকাস্ট সম্পন্ন', desc: "'রমজান অফার' ক্যাম্পেইনটি সফলভাবে ১,২৪০ জন গ্রাহককে পাঠানো হয়েছে।", time: '১ ঘণ্টা আগে' },
    { title: 'SOVA জ্ঞান আপডেট', desc: 'নতুন পণ্য "সুতি টি-শার্ট" আপনার ক্যাটালগে যোগ করা হয়েছে এবং AI উত্তরের জন্য প্রস্তুত।', time: '৩ ঘণ্টা আগে' },
    { title: 'আগত বার্তা', desc: 'সারা খান একটি বার্তা পাঠিয়েছেন। SOVA এটি স্বয়ংক্রিয়ভাবে পরিচালনা করছে।', time: '৫ ঘণ্টা আগে' }
  ],
  chats: [
    { user: 'ফয়সাল আহমেদ', message: 'হ্যালো, এই জ্যাকেটটির দাম কত?', time: '১৪:২৩' },
    { user: 'সারা খান', message: 'আপনার কাছে কি নীল রঙের মধ্যে M সাইজ পাওয়া যাবে?', time: '১২:০৫' },
    { user: 'জুবায়ের শাহ', message: 'আমি ৩টি পিস অর্ডার করতে চাই।', time: '০৯:৪৪' },
    { user: 'নাদিয়া মালিক', message: 'দয়া করে কি ক্যাটালগটা পাঠাতে পারবেন?', time: 'গতকাল' },
    { user: 'বিলাল রাজা', message: 'আপনাদের ডেলিভারি চার্জ কত?', time: 'গতকাল' }
  ],
  reports: {
    stats: {
      revenue: '৳ ৮.৪L',
      orderRate: '৩৭%',
      resolved: '১,২৮৪',
      revenueChange: '+১৮%',
      orderRateChange: '+৬%',
      resolvedChange: '+২২%'
    },
    revenueLines: ['৳ ৮২k', '৳ ৯৫k', '৳ ১.১L', '৳ ১.৩L', '৳ ১.৫L'],
    rows: [
      { revenue: '৳ ৮২k', rate: '১৬.৯%' },
      { revenue: '৳ ৯৫k', rate: '১৭.৭%' },
      { revenue: '৳ ১.১L', rate: '১৭.৪%' },
      { revenue: '৳ ১.৩L', rate: '১৮.৮%' },
      { revenue: '৳ ১.৫L', rate: '২০.০%' }
    ]
  },
  drawer: [
    { text: 'WhatsApp-এ নতুন লিড "ফয়সাল" ক্যাপচার করা হয়েছে!', time: '২ মিনিট আগে' },
    { text: 'আপনার ক্যাটালগের ৫টি আইটেম স্টকের বাইরে আছে।', time: '১ ঘণ্টা আগে' },
    { text: 'আজ SOVA অটোমেশন হার ১২% বৃদ্ধি পেয়েছে!', time: '৩ ঘণ্টা আগে' },
    { text: 'সারা মালিক "প্রিমিয়াম স্কার্ফ"-এ আগ্রহী।', time: '৫ ঘণ্টা আগে' }
  ],
  profile: {
    automations: '০৬',
    alerts: '০৮'
  },
  overview: {
    stats: {
      active: '১৪২',
      activeChange: '+১২.৫%',
      leads: '৮৯',
      leadsChange: '+৫.২%',
      replies: '১,২০৪',
      repliesChange: '+২৪.১%',
      time: '১১ সে.',
      timeChange: '-৩৪%'
    },
    activity: [
      { time: '২ মিনিট আগে', meta: 'ইলেকট্রনিক্স - ৫ ইউনিট পাইকারি অনুরোধ' },
      { time: '৯ মিনিট আগে', meta: 'পোশাক - কার্ট রিকভারি ক্যাম্পেইন' },
      { time: '১৪ মিনিট আগে', meta: 'বারবার আসা কম মূল্যের বার্তা সরানো হয়েছে' }
    ]
  },
  threads: {
    3: [
      { from: 'user', text: 'আমি ৩টি পিস অর্ডার করতে চাই।' },
      { from: 'sova', text: 'দুর্দান্ত পছন্দ! আমি আপনার ৩টি পিসের অর্ডার নোট করে নিয়েছি। আমি কি জানতে পারি আপনি কোন পণ্যটির কথা বলছেন?' },
      { from: 'user', text: 'প্রিমিয়াম সিল্ক স্কার্ফ।' },
      { from: 'sova', text: 'চমৎকার! আমি ৩টি প্রিমিয়াম সিল্ক স্কার্ফের ইনভয়েস প্রস্তুত করছি। আমি কি আপনার অর্ডারটি নিশ্চিত করব?' }
    ]
  },
}

admin.addProductOverview = admin.addProductOverview || {};
admin.addProductOverview.validation = admin.addProductOverview.validation || {};
admin.addProductOverview.validation.imageTooLarge = '৫ এমবির বেশি।';
admin.addProductOverview.validation.videoTooLarge = '১৫ এমবির বেশি।';
admin.addProductOverview.validation.videoDurationInvalid = '১৫-২০ সেকেন্ডের মধ্যে হতে হবে (বর্তমান: {{duration}} সেকেন্ড)।';
admin.addProductOverview.validation.compressLink = 'এখানে কম্প্রেস করুন';
admin.addProductOverview.validation.maxFilesExceeded = 'আপনি সর্বাধিক {{max}} টি মিডিয়া ফাইল আপলোড করতে পারবেন।';

admin.settings = admin.settings || {};
admin.settings.businessUpdateSuccess = 'ব্যবসার প্রোফাইল সফলভাবে আপডেট করা হয়েছে';
admin.settings.toneUpdateSuccess = 'টোন সেটিংস সফলভাবে আপডেট করা হয়েছে';
admin.settings.tones = {
  validation: {
    atLeastOne: 'দয়া করে SOVA-এর জন্য অন্তত একটি টোন নির্বাচন করুন'
  },
  none: 'কিছুই না',
  professional: { label: 'পেশাদার (Professional)', desc: 'মার্জিত এবং ব্যবসায়িক' },
  friendly: { label: 'বন্ধুত্বপূর্ণ (Friendly)', desc: 'উষ্ণ এবং সহজবোধ্য' },
  direct: { label: 'সরাসরি (Direct)', desc: 'সংক্ষিপ্ত এবং স্পষ্ট' },
  persuasive: { label: 'প্ররোচনামূলক (Persuasive)', desc: 'বিশ্বাসযোগ্য এবং বিক্রয়-ভিত্তিক' },
  playful: { label: 'চঞ্চল (Playful)', desc: 'হালকা এবং মজাদার' },
  empathetic: { label: 'সহানুভূতিশীল (Empathetic)', desc: 'শান্ত এবং সহানুভূতিশীল' }
};

admin.profile = admin.profile || {};
admin.profile.user = {
  title: 'ব্যবহারকারীর প্রোফাইল',
  cancel: 'বাতিল করুন',
  save: 'সংরক্ষণ করুন',
  edit: 'সম্পাদনা করুন',
  photoAlt: 'ব্যবহারকারীর প্রোফাইল',
  noPhoto: 'কোনো ছবি নেই',
  uploadPhoto: 'ছবি আপলোড করুন',
  removePhoto: 'ছবি মুছে ফেলুন',
  nameLabel: 'পুরো নাম',
  namePlaceholder: 'যেমন: রহিম মিয়া',
  emptyName: 'আপনার পুরো নাম যোগ করুন',
  emailLabel: 'ইমেইল ঠিকানা',
  emailPlaceholder: 'যেমন: rahim@example.com',
  emptyEmail: 'আপনার ইমেইল যোগ করুন',
  phoneLabel: 'ফোন নম্বর',
  phonePlaceholder: 'যেমন: +880 171 234 5678',
  emptyPhone: 'আপনার ফোন নম্বর যোগ করুন'
};

admin.profile.business = {
  removePhoto: 'মুছে ফেলুন'
};

admin.addProductOverview = admin.addProductOverview || {};
admin.addProductOverview.validation = {
  nameRequired: 'পণ্যের নাম আবশ্যক',
  descriptionRequired: 'দয়া করে পণ্যের বিবরণ যোগ করুন',
  mediaRequired: 'দয়া করে অন্তত একটি ফটো বা ভিডিও আপলোড করুন',
  categoryRequired: 'দয়া করে একটি বিভাগ নির্বাচন করুন',
  subCategoryRequired: 'দয়া করে একটি উপ-বিভাগ নির্বাচন করুন',
  priceRequired: 'দয়া করে সঠিক মূল্য লিখুন',
  stockRequired: 'দয়া করে স্টকের পরিমাণ লিখুন',
  maxFilesExceeded: 'আপনি কেবল {{max}} টি ফাইল আপলোড করতে পারেন।',
  imageTooLarge: '5MB সীমা ছাড়িয়ে গেছে।',
  videoTooLarge: '{{name}} ১৫ মেগাবাইট সীমা ছাড়িয়ে গেছে।',
  videoDurationInvalid: '{{name}} অবশ্যই ১৫-২০ সেকেন্ড হতে হবে (বর্তমান: {{duration}} সেকেন্ড)।',
  compressLink: 'এখানে কম্প্রেস করুন',
  statusActive: 'পণ্যটি সক্রিয় হিসেবে চিহ্নিত করা হয়েছে',
  statusInactive: 'পণ্যটি নিষ্ক্রিয় হিসেবে চিহ্নিত করা হয়েছে',
  createSuccess: 'পণ্যটি সফলভাবে যোগ করা হয়েছে',
  updateSuccess: 'পণ্যটি সফলভাবে আপডেট করা হয়েছে'
};

admin.settings = admin.settings || {};
admin.settings.bankUpdateSuccess = 'ব্যাংক বিবরণ সফলভাবে আপডেট করা হয়েছে';
admin.settings.bankDeleteSuccess = 'ব্যাংক বিবরণ সফলভাবে মুছে ফেলা হয়েছে';
admin.settings.resetAllSuccess = 'সমস্ত সেটিংস রিসেট করা হয়েছে';
admin.settings.account = {
  title: 'অ্যাকাউন্ট ব্যবস্থাপনা',
  deleteTitle: 'প্রোফাইল ডেটা মুছুন',
  deleteDesc: 'এটি আপনার ব্যাংক তথ্য, ব্যবসায়িক প্রোফাইল এবং AI পছন্দগুলি মুছে ফেলবে।',
  deleteBtn: 'সব তথ্য মুছুন',
  confirmTitle: 'সব প্রোফাইল ডেটা মুছবেন?',
  confirmDesc: 'আপনি কি নিশ্চিত? এটি আপনার ব্যাংক বিবরণ, ব্যবসায়িক প্রোফাইল এবং AI সেটিংস স্থায়ীভাবে সরিয়ে দেবে।',
  confirmBtn: 'হ্যাঁ, সব মুছুন',
  cancelBtn: 'বাতিল করুন',
};
admin.settings.sections = admin.settings.sections || {};
admin.settings.sections.bank = {
  title: 'ব্যাংক তথ্য',
  subtitle: 'আপনার দোকানের জন্য পেমেন্ট সেটিংস কনফিগার করুন',
  current: 'অবস্থা',
  configured: 'সেট করা আছে',
  notConfigured: 'সেট করা নেই',
  button: 'ব্যাংক বিবরণ সম্পাদনা করুন'
};
admin.settings.bank = {
  title: 'ব্যাংক তথ্য',
  subtitle: 'আপনার পেমেন্ট এবং ব্যাংক বিবরণ এখানে কনফিগার করুন',
  accountTitle: 'অ্যাকাউন্ট হোল্ডার',
  accountTitlePlaceholder: 'যেমন: রহিম মিয়া',
  accountTitleHint: 'আপনার ব্যাংক অ্যাকাউন্টে যেভাবে আছে',
  accountNumber: 'অ্যাকাউন্ট নম্বর / IBAN',
  accountNumberPlaceholder: 'যেমন: PK00 BANK 0000 0000 0000 0000',
  ibanHint: 'পাকিস্তানি অ্যাকাউন্টের জন্য IBAN সাধারণত ২৪টি অক্ষরের হয়',
  bankName: 'ব্যাংকের নাম',
  bankNamePlaceholder: 'যেমন: HBL, Alfalah, Meezan',
  description: 'পেমেন্ট নির্দেশাবলী',
  descriptionPlaceholder: 'যেমন: ট্রান্সফারে অর্ডার আইডি অন্তর্ভুক্ত করুন',
  required: 'আবশ্যক',
  configured: 'পেমেন্ট বিবরণ কনফিগার করা হয়েছে',
  notConfigured: 'এখনো কোনো তথ্য নেই',
  verified: 'সংরক্ষিত',
  savedSuccess: 'ব্যাংক বিবরণ সফলভাবে সংরক্ষিত হয়েছে!',
  notConfiguredTitle: 'কোনো ব্যাংক বিবরণ নেই',
  addDetails: 'ব্যাংক অ্যাকাউন্ট যোগ করুন',
  sectionPayment: 'পেমেন্ট বিবরণ',
  sectionAccount: 'অ্যাকাউন্ট তথ্য',
  sectionNotes: 'অতিরিক্ত তথ্য',
  copyIBAN: 'IBAN কপি করুন',
  copied: 'কপি হয়েছে!',
  updateBank: 'ব্যাংক আপডেট করুন',
  removeAccount: 'সরান',
  warning: 'নিশ্চিত করুন যে সমস্ত বিবরণ সঠিক। এই তথ্য আপনার দোকানের পেমেন্টের জন্য ব্যবহার করা হবে।',
  errors: {
    accountTitleRequired: 'অ্যাকাউন্টের নাম আবশ্যক',
    bankNameRequired: 'ব্যাংকের নাম আবশ্যক',
    accountNumberRequired: 'অ্যাকাউন্ট নম্বর আবশ্যক'
  },
  notConfiguredDesc: 'আপনার ব্যাংক অ্যাকাউন্ট যোগ করুন যাতে গ্রাহকরা সরাসরি পেমেন্ট করতে পারে।',
  deleteConfirmTitle: 'ব্যাংক তথ্য মুছে ফেলবেন?',
  deleteConfirmDesc: 'এটি আপনার ব্যাংক বিবরণ সিস্টেম থেকে স্থায়ীভাবে সরিয়ে দেবে। পেমেন্ট পেতে আপনাকে সেগুলি আবার প্রবেশ করতে হবে।',
  deleteConfirmBtn: 'হ্যাঁ, তথ্য মুছুন',
  deleteCancelBtn: 'তথ্য রাখুন'
};

export const notFound = {
  title: '404',
  subtitle: 'রাস্তা হারিয়েছেন?',
  desc: "আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই বা অন্য কোনো মহাবিশ্বে সরিয়ে নেওয়া হয়েছে।",
  backBtn: 'আমাকে বাড়িতে নিয়ে যান',
  backLink: 'পিছনে যান',
}
