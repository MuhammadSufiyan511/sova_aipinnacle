export const onboarding = {
  business: {
    title: 'ما هو عملك؟',
    subtitle: 'تُصمم سوفا ردودها واكتشاف العملاء المحتملين وفقًا لصناعتك.',
    searchPlaceholder: 'البحث في الصناعات...',
    customCategoryPlaceholder: 'أدخل فئة عملك...',
    nextBtn: '← اختر مجالك',
    categories: {
      clothing: { label: 'الملابس', desc: 'الأزياء، الأحذية، الإكسسوارات.' },
      jewellery: { label: 'المجوهرات', desc: 'الذهب، الفضة، الزينة.' },
      toys: { label: 'الألعاب', desc: 'الأطفال، الألغاز، الألعاب.' },
      'books-stationary': { label: 'الكتب والقرطاسية', desc: 'التعليم، مستلزمات المكتب.' },
      'dry-fruits': { label: 'الفواكه المجففة', desc: 'اللوز، الكاجو، التمر.' },
      decoration: { label: 'الديكور', desc: 'الفعاليات، الثيمات، الديكور.' },
      electronics: { label: 'الإلكترونيات', desc: 'الهواتف، الأجهزة، الملحقات.' },
      'medical-instruments': { label: 'الأدوات الطبية', desc: 'معدات المستشفى والعيادة.' },
      'surgical-instruments': { label: 'الأدوات الجراحية', desc: 'أدوات دقيقة ومجموعات.' },
      hardware: { label: 'الأجهزة', desc: 'أدوات، مواد، تجهيزات.' },
      fireworks: { label: 'الألعاب النارية', desc: 'الاحتفالات والفعاليات.' },
      service: { label: 'الأعمال الخدمية', desc: 'حجوزات، استشارات، محلي.' },
      agency: { label: 'الوكالات وB2B', desc: 'عملاء، عروض، عقود.' },
      creator: { label: 'منشئ محتوى', desc: 'منتجات رقمية، جمهور.' },
      other: { label: 'شيء آخر', desc: 'شيء فريد من نوعه لك.' }
    }
  },
  products: {
    title: 'أضف منتجاتك',
    subtitle: 'تستخدم سوفا كتالوجك للإجابة تلقائيًا على أسئلة المشترين.',
    addBtn: 'أضف منتج',
    nextBtn: '← حفظ ومتابعة',
    toastError: 'أضف منتجًا واحدًا على الأقل حتى تتعلم سوفا عن عملك.',
    modal: {
      titleAdd: 'إضافة منتج جديد',
      titleUpdate: 'تحديث المنتج',
      subtitleAdd: 'أعطِ منتجك اسمًا، وصفًا قصيرًا، وصورة أو فيديو أو ملف PDF اختياري.',
      subtitleUpdate: 'قم بتعديل تفاصيل المنتج التي تستخدمها سوفا في دردشات المشتري.',
      mediaLabel: 'وسائط المنتج',
      mediaHelp: 'انقر للتحميل',
      nameLabel: 'اسم المنتج',
      namePlaceholder: 'مثال: وشاح حريري فاخر',
      descLabel: 'الوصف',
      descPlaceholder: 'مثال: وشاح حريري فاخر مع لمسة ناعمة وتغليف هدايا.',
      saveBtn: 'حفظ المنتج',
      updateBtn: 'تحديث',
      invalidMediaType: 'يرجى رفع صورة أو فيديو أو ملف PDF صالح'
    }
  },
  tone: {
    title: 'اختر شخصية سوفا',
    subtitle: 'اختر لهجة واحدة أو أكثر تتناسب مع طريقة حديثك مع عملائك.',
    profiles: {
      professional: { label: 'احترافي', desc: 'واضح ومؤدب ومُركز على الأعمال' },
      friendly: { label: 'ودود', desc: 'دافئ وترحيبي وسهل التواصل' },
      persuasive: { label: 'مُقنع', desc: 'موجه للمبيعات، يبرز الفوائد' },
      direct: { label: 'مباشر', desc: 'مختصر وواضح وفي صلب الموضوع' },
      playful: { label: 'مرح', desc: 'يستخدم الرموز التعبيرية، نشط وممتع' },
      empathetic: { label: 'متعاطف', desc: 'متفهم وصبور ومتعاون' }
    },
    completeBtn: 'إطلاق لوحة التحكم'
  },
  loader: {
    title: 'يتم تحضير وكيل مبيعات الذكاء الاصطناعي الخاص بك',
    subtitle: 'نقوم بتكوين سوفا بمنتجاتك وتفضيلات عملك.',
    init: 'جاري بدء الإعداد',
    wait: 'يرجى الانتظار بينما نقوم بإعداد حسابك.',
    finalWait: 'يرجى الانتظار بينما نقوم بإنهاء إعداد حسابك.',
    steps: {
      catalog: 'جارٍ بناء الكتالوج الخاص بك...',
      ai: 'جارٍ تطبيق شخصية الذكاء الاصطناعي...',
      meta: 'جارٍ التكامل مع واجهة Meta API...',
      workspace: 'جارٍ إعداد مساحة العمل الخاصة بك...'
    }
  }
}

export const admin = {
  nav: {
    workspace: 'مساحة العمل',
    overview: 'نظرة عامة',
    products: 'المنتجات',
    chat: 'صندوق الوارد',
    broadcasts: 'الحملات',
    reports: 'التقارير',
    settings: 'الإعدادات',
    notifications: 'الإشعارات',
    profile: 'الملف الشخصي'
  },
  common: {
    currentView: 'العرض الحالي',
    automationLive: 'الأتمتة مباشرة',
    active: 'نشط',
    inactive: 'غير نشط',
    currencySymbol: 'ر.س',
    currencyCode: 'SAR',
    live: 'مباشر',
    previous: 'السابق',
    next: 'التالي',
    preview: 'معاينة',
    open: 'فتح',
    edit: 'تعديل',
  },
  broadcasts: {
    title: 'حملات البث',
    subtitle: 'جدولة رسائل WhatsApp للعملاء المحتملين والعملاء والشرائح — بواسطة سوفا.',
    newBtn: 'بث جديد',
    stats: {
      scheduled: 'مجدولة',
      sentWeek: 'أُرسل هذا الأسبوع',
      avgResponse: 'متوسط معدل الاستجابة'
    },
    workflow: {
      title: 'سير عمل الأتمتة',
      subtitle: 'كيف تُحول سوفا رسائل WhatsApp الواردة إلى عملاء مؤهلين',
      nodes: {
        trigger: { label: 'رسالة واردة', sub: 'مُشغَّل واتساب' },
        filter: { label: 'فلتر النية', sub: 'تكتشف سوفا جودة العميل' },
        route: { label: 'التوجيه والرد', sub: 'تم إرسال الرد التلقائي' },
        capture: { label: 'تم التقاط العميل', sub: 'تم إنشاء إدخال CRM' }
      },
      status: {
        active: 'نشط',
        processing: 'قيد المعالجة',
        delivered: 'تم التسليم',
        captured: 'مُلتقَط'
      }
    },
    campaigns: {
      title: 'جميع الحملات',
      status: {
        scheduled: 'مجدولة',
        draft: 'مسودة',
        sent: 'أُرسل'
      },
      meta: {
        audience: 'الجمهور: {{count}}',
        powered: 'مدعوم بأتمتة سوفا',
        stats: 'الفتحات: {{opens}} · الردود: {{replies}}'
      }
    }
  },
  products: {
    title: 'كتالوج المنتجات',
    subtitle: 'تشارك سوفا {{count}} عنصراً مع المشترين في المحادثات',
    newBtn: 'إضافة منتج',
    banner: 'تستخدم سوفا كتالوجك للإجابة تلقائيًا على الأسئلة المتعلقة بتوافر المنتجات والأسعار والميزات.',
    empty: {
      title: 'لا توجد منتجات بعد',
      desc: 'أضف منتجك الأول حتى تتمكن سوفا من مشاركته مع المشترين المحتملين عبر WhatsApp.',
      btn: 'أضف أول منتج لك'
    },
    item: {
      price: 'Rs. {{price}}',
      priceLabel: 'السعر',
      stockLabel: 'المخزون',
      skuLabel: 'رمز SKU',
      specsTitle: 'المواصفات',
      editBtn: 'تعديل',
      mediaLabel: 'نوع الوسائط',
      view: 'عرض',
      active: 'نشط',
      inactive: 'غير نشط',
      activate: 'تفعيل',
      deactivate: 'إلغاء التفعيل',
      modalTitle: 'نظرة على المنتج',
      noDescription: 'لا يوجد وصف مضاف حتى الآن.',
      none: 'لا يوجد'
    },
    controls: {
      searchPlaceholder: 'ابحث في المنتجات...',
      show: 'عرض',
      perPage: 'لكل صفحة',
      all: 'الكل',
      pageInfo: '{{start}}-{{end}} من أصل {{total}} منتج',
      filters: {
        all: 'الكل',
        active: 'نشط',
        inactive: 'غير نشط'
      },
      empty: {
        title: 'لا توجد منتجات مطابقة',
        desc: 'جرّب كلمة بحث مختلفة أو غيّر الفلتر الحالي.'
      }
    }
  },
  addProductOverview: {
    titleAdd: 'إضافة قطعة جديدة',
    titleEdit: 'تعديل القطعة',
    subtitleAdd: 'أنشئ قائمة احترافية لكتالوج متجرك.',
    subtitleEdit: 'حدث تفاصيل القطعة لردود ذكاء اصطناعي أفضل.',
    backToCatalog: 'العودة لكتالوج المتجر',
    editorInitialising: 'جاري فتح المحرر...',
    steps: {
      basics: 'المعلومات الأساسية',
      category: 'تفاصيل القطعة',
      media: 'الوسائط والصور',
      pricing: 'السعر والمخزون',
    },
    sections: {
      basics: {
        title: 'معلومات عامة',
        subtitle: 'التفاصيل الأساسية عن القطعة.',
        nameLabel: 'اسم القطعة',
        namePlaceholder: 'مثال: تي شيرت قطني',
        descriptionLabel: 'الوصف',
        descriptionPlaceholder: 'أخبر زبائنك عن هذه القطعة...',
        brandLabel: 'اسم الماركة',
        brandPlaceholder: 'مثال: مصمم محلي',
      },
      category: {
        title: 'التصنيف',
        subtitle: 'ساعد المشترين في العثور على القطعة بسهولة.',
        categoryLabel: 'القسم الرئيسي',
        categoryPlaceholder: 'اختر قسماً',
        subCategoryLabel: 'نوع القطعة',
        subCategoryPlaceholder: 'اختر نوعاً',
        newSubCategory: 'نوع جديد',
        customCategoryLabel: 'اسم القسم المخصص',
        customCategoryPlaceholder: 'أدخل اسم القسم',
        customSubCategoryLabel: 'اسم النوع المخصص',
        customSubCategoryPlaceholder: 'أدخل اسم النوع',
        customFieldsTitle: 'تفاصيل إضافية',
        addFieldBtn: 'إضافة تفصيل',
        fieldLabelPlaceholder: 'مثال: الخامة',
        fieldValuePlaceholder: 'مثال: 100% قطن',
      },
      pricing: {
        title: 'السعر والمخزون',
        subtitle: 'حدد سعر البيع وتأكد من المخزون.',
        priceLabel: 'سعر البيع',
        salePriceLabel: 'السعر بعد الخصم',
        salePricePlaceholder: 'اختياري',
        stockLabel: 'إجمالي المخزون',
        stockPlaceholder: 'الكمية المتوفرة',
        skuLabel: 'كود القطعة / SKU',
        skuPlaceholder: 'مثال: ITEM-001',
        skuHelp: 'كود المرجع الداخلي للمحل',
        minOrderLabel: 'أقل كمية للطلب',
      },
      media: {
        title: 'صور القطعة والوسائط',
        noMediaAttached: 'لم يتم رفع صور',
        upload: 'رفع الوسائط',
        primary: 'الصورة الرئيسية',
        makePrimary: 'تعيين كرئيسية',
      },
      actions: {
        submitAdd: 'إنشاء القائمة',
        submitEdit: 'حفظ التغييرات',
        saveDraft: 'حفظ كمسودة',
      },
      validation: {
        nameRequired: 'اسم القطعة مطلوب',
        createSuccess: 'تمت إضافة القطعة بنجاح',
        updateSuccess: 'تم تحديث التفاصيل بنجاح',
      },
    },
    fields: {
      selectOption: 'اختر خياراً',
      customValue: 'مخصص...',
      customValuePlaceholder: 'أدخل قيمة مخصصة',
      size: { label: 'المقاس', placeholder: 'مثال: XL أو 42' },
      color: { label: 'اللون', placeholder: 'مثال: أزرق ملكي' },
      fabric: { label: 'الخامة/القماش', placeholder: 'مثال: حرير' },
      fit: { label: 'نوع القصة (Fit)', placeholder: 'مثال: سليم فيت' },
      pattern: { label: 'النقشة', placeholder: 'مثال: مشجر' },
      ageRange: { label: 'الفئة العمرية', placeholder: 'مثال: 5-8 سنوات' },
      gender: { label: 'الجنس', placeholder: 'اختر الجنس' },
      purity: { label: 'عيار الذهب', placeholder: 'مثال: 22 قيراط' },
      weight: { label: 'الوزن', placeholder: 'مثال: 10 جرام' },
      brand: { label: 'الماركة', placeholder: 'مثال: سامسونج' },
      storage: { label: 'سعة التخزين', placeholder: 'مثال: 128 جيجا' },
      ram: { label: 'حجم الرام', placeholder: 'مثال: 8 جيجا' },
      processor: { label: 'المعالج', placeholder: 'مثال: كور i7' },
      subject: { label: 'المادة', placeholder: 'مثال: أحياء' },
      origin: { label: 'بلد المنشأ', placeholder: 'مثال: السعودية' },
    },
    categories: {
      clothing: 'الملابس والأزياء',
      jewellery: 'المجوهرات والساعات',
      electronics: 'الهواتف والأجهزة',
      toys: 'الأطفال والألعاب',
      dry_fruits: 'الفواكه المجففة والمكسرات',
      decoration: 'ديكور المنزل والفعاليات',
      books_stationary: 'الكتب والقرطاسية',
      medical_instruments: 'الأدوات الطبية',
      surgical_instruments: 'الأدوات الجراحية',
      hardware: 'الأجهزة والأدوات',
      fireworks: 'الألعاب النارية',
      other: 'قطع أخرى',
    },
    subcategories: {
      menswear: 'ملابس رجالية',
      womenswear: 'ملابس نسائية',
      'kids-wear': 'ملابس أطفال ومواليد',
      abayas: 'عبايات وملابس محتشمة',
      'traditional-wear': 'ملابس تراثية',
      sportswear: 'ملابس رياضية',
      outerwear: 'جاكيتات ومعاطف',
      footwear: 'أحذية',
      accessories: 'إكسسوارات',
      'gold-jewelry': 'مجوهرات ذهب',
      'silver-jewelry': 'مجوهرات فضة',
      'diamond-precious': 'ألماس وأحجار كريمة',
      watches: 'ساعات فاخرة',
      rings: 'خواتم',
      necklaces: 'عقود ومعلقات',
      bracelets: 'أساور',
      earrings: 'أقراط',
      'costume-jewelry': 'مجوهرات عصرية',
      smartphones: 'هواتف ذكية',
      'laptops-pc': 'لابتوبات وكمبيوترات',
      'audio-video': 'صوت وفيديو',
      photography: 'كاميرات',
      gaming: 'أدوات ألعاب',
      'smart-home': 'منزل ذكي',
      wearables: 'ساعات ذكية',
      educational: 'ألعاب تعليمية',
      'board-games': 'ألعاب لوحية',
      'outdoor-toys': 'ألعاب خارجية',
      'remote-control': 'ألعاب تحكم عن بعد',
      'action-figures': 'شخصيات أكشن',
      'dolls-plush': 'دمى ودمى محشوة',
      crafts: 'فنون وأشغال يدوية',
      'roasted-nuts': 'مكسرات محمصة',
      'raw-nuts': 'مكسرات نيئة',
      'dried-berries': 'فواكه مجففة',
      'dates-varieties': 'تمور فاخرة',
      'seeds-mix': 'بذور ومشكل',
      'home-decor': 'ديكور منزلي',
      'wall-art': 'لوحات جدارية',
      lighting: 'إضاءة',
      'event-decor': 'ديكور فعاليات',
      'academic-books': 'كتب أكاديمية',
      'fiction-nonfiction': 'روايات وقصص',
      'stationary-office': 'قرطاسية مكتبية',
      'art-supplies': 'أدوات فنية',
      'writing-instruments': 'أقلام ومجموعات',
      diagnostics: 'أدوات تشخیص',
      monitoring: 'مراقبة مرضى',
      'rehab-mobility': 'مساعدات حركة',
      respiratory: 'أجهزة تنفس',
      'general-surgery': 'جراحة عامة',
      'dental-instruments': 'أدوات أسنان',
      'orthopedic-surgery': 'جراحة عظام',
      'ophthalmic-surgery': 'جراحة عيون',
      'power-tools': 'أدوات كهربائية',
      'hand-tools': 'أدوات يدوية',
      'plumbing-hardware': 'أدوات سباكة',
      'electrical-hardware': 'أدوات كهرباء',
      'aerial-rockets': 'صواريخ هوائية',
      'multi-shot-cakes': 'كيك ألعاب نارية',
      'fountains-wheels': 'نوافير وعجلات',
      'ground-fireworks': 'ألعاب نارية أرضية',
      'general-merchandise': 'بضائع عامة',
      'gift-items': 'هدايا',
    },
    nested: {
      formal_shirts: 'قمصان رسمية',
      t_shirts: 'تي شيرتات',
      polos: 'بولو',
      trousers: 'بناطيل',
      jeans: 'جينز',
      suits_blazers: 'بدل وبليزر',
      nightwear: 'ملابس نوم',
      dresses: 'فساتين',
      tops_blouses: 'توبات وبلوزات',
      skirts: 'تنانير',
      ethnic_wear: 'ملابس شعبية',
      lingerie: 'لانجري',
      loungewear: 'ملابس منزلية',
      infant_0_2y_: 'رضيع (0-2 سنة)',
      toddler_2_5y_: 'دارج (2-5 سنوات)',
      boys_fashion: 'موضة أولاد',
      girls_fashion: 'موضة بنات',
      school_uniforms: 'زي مدرسي',
      casual_abayas: 'عبايات خروج',
      formal_evening_abayas: 'عبايات مناسبات',
      bridal_abayas: 'عبايات عروس',
      butterfly_abayas: 'عبايات فراشة',
      bisht_abayas: 'عبايات بشت',
      kimonos: 'كيمونو',
      kaftans: 'قفاطين',
      shalwar_kameez: 'شلوار كميز',
      kurta_pajama: 'كورتا باجاما',
      sherwani: 'شيرواني',
      sarees: 'ساري',
      lehengas: 'لهنجا',
      gym_training: 'جم وتدريب',
      running_gear: 'أدوات جري',
      football_kits: 'أطقم كرة قدم',
      cricket_gear: 'أدوات كريكت',
      yoga_pilates: 'يوغا وبيلاتس',
      leather_jackets: 'جاكيتات جلد',
      puffer_jackets: 'جاكيتات منفوخة',
      trench_coats: 'تنش كوت',
      windbreakers: 'سترات واقية من الرياح',
      hoodies: 'هوديز',
      formal_shoes: 'أحذية رسمية',
      sneakers: 'سنيكرز',
      sandals_flip_flops: 'صنادل',
      boots: 'بوات',
      heels: 'كعوب',
      belts: 'أحزمة',
      hats_caps: 'قبعات',
      ties_bowties: 'كرافتات وبابيون',
      scarves: 'أوشحة',
      gloves: 'قفازات',
      engagement_rings: 'خواتم خطوبة',
      necklaces: 'عقود',
      bangles: 'بناجر/غوايش',
      earrings: 'أقراط/حلق',
      gold_coins_bars: 'سبائك وعملات ذهب',
      rings: 'خواتم',
      chains: 'سلاسل',
      bracelets: 'أساور',
      anklets: 'خلاخيل',
      solitaire_rings: 'خواتم سوليتير',
      diamond_sets: 'أطقم ألماس',
      loose_gemstones: 'أحجار كريمة فلت',
      birthstones: 'أحجار المواليد',
      automatic_watches: 'ساعات أوتوماتيك',
      quartz_watches: 'ساعات كوارتز',
      chrono_watches: 'ساعات كرونوغراف',
      smart_luxury_watches: 'ساعات ذكية فاخرة',
      wedding_bands: 'دبل خطوبة',
      fashion_rings: 'خواتم عصرية',
      couple_rings: 'خواتم كبلز',
      chokers: 'شوكرز',
      long_chains: 'سلاسل طويلة',
      lockets: 'لقاطات',
      cuffs: 'أساور مفتوحة',
      charm_bracelets: 'أساور تشارم',
      tennis_bracelets: 'أساور تنس',
      studs: 'برغي/ناعم',
      hoops: 'حلقات',
      drops: 'متدلي',
      jhumkas: 'جمكا',
      bohemian: 'بوهيمي',
      antique_style: 'نمط عتيق',
      modern_minimalist: 'مودرن ناعم',
      android_phones: 'هواتف أندرويد',
      iphones: 'آيفون',
      budget_phones: 'هواتف اقتصادية',
      tablets: 'تابلت',
      foldables: 'أجهزة قابلة للطي',
      gaming_laptops: 'لابتوبات ألعاب',
      ultrabooks: 'ألترا بوك',
      business_laptops: 'لابتوبات أعمال',
      desktops: 'كمبيوترات مكتبية',
      workstations: 'محطات عمل',
      wireless_earbuds: 'سماعات لاسلكية',
      over_ear_headphones: 'سماعات فوق الأذن',
      bluetooth_speakers: 'سماعات بلوتوث',
      home_theater: 'مسرح منزلي',
      microphones: 'ميكروفونات',
      dslrs: 'كاميرات DSLR',
      mirrorless: 'كاميرات ميرورليس',
      action_cameras: 'كاميرات أكشن',
      drones: 'درونز',
      lenses: 'عدسات',
      consoles: 'منصات ألعاب',
      pc_components: 'قطع كمبيوتر',
      gaming_keyboards: 'كيبوردات ألعاب',
      gaming_mice: 'ماوسات ألعاب',
      monitors: 'شاشات',
      smart_lighting: 'إضاءة ذكية',
      security_cameras: 'كاميرات مراقبة',
      smart_locks: 'أقفال ذكية',
      smart_speakers: 'سماعات ذكية',
      fitness_trackers: 'متتبعات لياقة',
      smartwatches: 'ساعات ذكية',
      vr_headsets: 'سماعات VR',
      power_banks: 'باور بانك',
      usb_cables: 'كيبلات USB',
      laptop_chargers: 'شواحن لابتوب',
      memory_cards: 'كروت ذاكرة',
      science_kits: 'مجموعات علوم',
      coding_toys: 'ألعاب برمجة',
      math_puzzles: 'ألغاز رياضيات',
      language_learning: 'تعلم لغات',
      family_games: 'ألعاب عائلية',
      strategy_games: 'ألعاب استراتيجية',
      card_games: 'ألعاب ورق',
      puzzles: 'ألغاز',
      bicycles: 'دراجات',
      scooters: 'سكوترات',
      trampolines: 'ترامبولين',
      pool_toys: 'ألعاب مسبح',
      rc_cars: 'سيارات ريموت',
      rc_boats: 'قوارب ريموت',
      rc_helicopters: 'هليكوبتر ريموت',
      superheroes: 'أبطال خارقين',
      anime_figures: 'مجسمات أنمي',
      legacy_collectibles: 'مقتنيات نادرة',
      teddy_bears: 'دببة محشوة',
      animated_plush: 'دمى متحركة',
      painting: 'رسم',
      slime_kits: 'مجموعات سلايم',
      pottery: 'فخار',
      jewelry_making: 'صنع مجوهرات',
      roasted_almonds: 'لوز محمص',
      salted_cashews: 'كاجو مملح',
      pistachios: 'فستق',
      walnuts: 'عين جمل',
      raw_almonds: 'لوز نيء',
      pecans: 'بيكان',
      hazelnuts: 'بندق',
      pine_nuts: 'صنوبر',
      cranberries: 'كرانبيري',
      blueberries: 'توت أزرق',
      apricots: 'مشمش',
      figs: 'تين',
      ajwa: 'تمر عجوة',
      medjool: 'تمر مجدول',
      mabroom: 'تمر مبروم',
      amber: 'تمر عنبرة',
      sukkari: 'تمر سكري',
      pumpkin_seeds: 'بذور قرع',
      trail_mix: 'مكسرات مشكلة',
      sunflower_seeds: 'بذور دوار الشمس',
      vases: 'فازات',
      cushions: 'خداديات',
      candles: 'شموع',
      statues: 'مجسمات',
      canvas_paintings: 'لوحات كانفاس',
      wall_mirrors: 'مرايا جدارية',
      photo_frames: 'إطارات صور',
      chandeliers: 'ثريات',
      table_lamps: 'أباجورات طاولة',
      floor_lamps: 'أباجورات أرضية',
      led_strips: 'شرائط LED',
      balloons: 'بالونات',
      backdrops: 'خلفيات',
      wedding_decor: 'ديكور زفاف',
      medical: 'طبي',
      engineering: 'هندسي',
      commerce: 'تجاري',
      school_books: 'كتب مدرسية',
      sci_fi: 'خيال علمي',
      mystery: 'غموض',
      biography: 'سيرة ذاتية',
      self_help: 'تطوير ذات',
      paper: 'ورق',
      staplers: 'دباسات',
      calculators: 'آلات حاسبة',
      canvases: 'لوحات رسم',
      acrylic_paints: 'ألوان أكريليك',
      brushes: 'فراشي',
      sketchbooks: 'دفاتر رسم',
      fountain_pens: 'أقلام حبر',
      ballpoint_pens: 'أقلام جافة',
      gift_sets: 'أطقم هدايا',
      blood_pressure_monitors: 'أجهزة ضغط',
      digital_thermometers: 'موازين حرارة',
      stethoscopes: 'سماعات طبية',
      glucometers: 'أجهزة سكر',
      pulse_oximeters: 'أجهزة أكسجين',
      ecg_machines: 'أجهزة تخطيط قلب',
      heart_monitors: 'مراقبة قلب',
      wheelchairs: 'كراسي متحركة',
      walkers: 'مشايات',
      crutches: 'عكازات',
      support_belts: 'أحزمة دعم',
      nebulizers: 'أجهزة بخار',
      oxygen_concentrators: 'مكثفات أكسجين',
      cpap_machines: 'أجهزة CPAP',
      forceps: 'ماسك/ملقط',
      scissors: 'مقصات',
      scalpels: 'مشارط',
      retractors: 'مبعدات جراحية',
      needle_holders: 'حوامل إبر',
      extractors: 'مستخرجات',
      probes: 'مسابير',
      dental_mirrors: 'مرايا أسنان',
      elevators: 'رافعات أسنان',
      bone_drills: 'مثاقب عظام',
      screws_plates: 'براغي وصفائح',
      bone_saws: 'مناشير عظام',
      eye_speculums: 'أجنحة عين',
      microsurgical_scissors: 'مقصات مجهرية',
      drills: 'دریلات',
      angle_grinders: 'صواريخ تجليخ',
      electric_saws: 'مناشير كهربائية',
      rotary_hammers: 'دریلات همر',
      wrenches: 'مفاتيح ربط',
      screwdrivers: 'مفكات',
      pliers: 'زراديات',
      hammers: 'مطارق',
      pipe_fittings: 'تجهيزات مواسير',
      faucets: 'صنابير/خلاطات',
      valves: 'صمامات',
      pumps: 'مضخات',
      circuit_breakers: 'قواطع كهرباء',
      cables_wires: 'كيبلات وأسلاك',
      switches: 'مفاتيح كهرباء',
      inverters: 'انفرترات/محولات',
      big_burst_rockets: 'صواريخ انفجار كبير',
      double_burst: 'انفجار مزدوج',
      signal_rockets: 'صواريخ إشارة',
      _25_shots: '25 طلقة',
      _50_shots: '50 طلقة',
      _100_shots: '100 طلقة',
      fan_cakes: 'كيكة مروحة',
      glittering_fountains: 'نوافير لامعة',
      color_wheels: 'عجلات ملونة',
      cone_fountains: 'نوافير مخروطية',
      sparklers: 'شرار (نجوم)',
      ground_spinners: 'دوارات أرضية',
      cracklers: 'فرقعات',
      household_items: 'أدوات منزلية',
      groceries: 'مواد غذائية',
      gift_cards: 'بطاقات هدايا',
      occasional_gifts: 'هدايا مناسبات',
    },
    summary: {
      untitled: 'قطعة بدون اسم',
      statusReady: 'متوفر في المخزون',
      statusOutOfStock: 'نفد من المخزون',
      industryLabel: 'فئة العمل',
      listingHealth: 'حالة القائمة',
      visibility: 'الظهور',
      marketLive: 'نشط على المتجر',
      inventoryState: 'حالة المخزون',
      lowStock: 'المخزون منخفض!',
      stable: 'المخزون جيد',
    },
  },
  overview: {
    stats: {
      activeConversations: 'المحادثات النشطة',
      qualifiedLeads: 'العملاء المؤهلون',
      automatedReplies: 'الردود الآلية',
      avgResponseTime: 'متوسط وقت الرد'
    },
    quickActions: {
      products: 'إضافة منتج',
      settings: 'إعداد الأتمتة',
      businessSettings: 'إعدادات المنشأة',
      files: 'عرض الملفات'
    },
    charts: {
      saleTrend: {
        title: 'اتجاه المبيعات',
        subtitle: 'الأداء في آخر 7 أيام',
        pill: '+{{count}}% ارتفاع',
        tooltipLabel: 'الإنجاز'
      },
      leadMix: {
        title: 'توزيع العملاء',
        subtitle: 'المتابعات مقابل المشترين',
        label: 'المشترون'
      },
      leadsByDay: {
        title: 'العملاء المحتملون يوميًا',
        subtitle: 'توزيع النشاط الأسبوعي',
        pill: 'وقت الذروة'
      }
    },
    donuts: {
      buyers: 'المشترون',
      followups: 'متابعات',
      spam: 'رسائل مزعجة'
    },
    activity: {
      title: 'آخر الأنشطة',
      subtitle: 'تحديثات مباشرة من سوفا',
      feeds: {
        order: 'نية شراء جديدة مكتشفة',
        followup: 'تم جدولة متابعة آلية',
        spam: 'تم حظر رسائل غير مرغوب فيها'
      }
    }
  },
  reports: {
    title: 'تقارير المبيعات',
    subtitle: 'تتبع كيف تُحول سوفا المحادثات إلى طلبات حقيقية.',
    exportBtn: 'تصدير التقرير',
    stats: {
      revenue: 'الإيرادات المتأثرة',
      orderRate: 'معدل الطلبات',
      resolved: 'محادثات تم حلها'
    },
    chart: {
      title: 'الإيرادات المتأثرة بسوفا',
      subtitle: 'المبيعات اليومية من المحادثات الآلية',
      pill: 'هذا الأسبوع'
    },
    table: {
      title: 'ملخص الأداء الأسبوعي',
      subtitle: 'تفصيل محادثات الأتمتة، والطلبات، والإيرادات اليومية.',
      headers: {
        day: 'اليوم',
        chats: 'محادثات',
        orders: 'طلبات',
        conversion: 'تحويل',
        revenue: 'إيرادات'
      }
    }
  },
  settings: {
    title: 'إعدادات الأتمتة',
    subtitle: 'تحكم في نبرة صوت وكيلك الآلي وقواعد العمل.',
    sections: {
      business: {
        title: 'إعداد المنشأة',
        subtitle: 'تغيير الفئة أو إعادة الإعداد؟ حدث ذلك هنا.',
        button: 'تغيير المنشأة',
        current: 'المنشأة الحالية',
        modalTitle: 'تحديث فئة المنشأة',
        modalSubtitle: 'اختر نوع النشاط لضمان دقة ردود سوفا في سياق المنتجات.',
        save: 'حفظ التغييرات',
        cancel: 'إلغاء',
        close: 'إغلاق'
      },
      voice: {
        title: 'نبرة الصوت والشخصية',
        subtitle: 'تحكم في كيفية تحدث سوفا مع عملائك'
      },
      rules: {
        title: 'قواعد الأتمتة'
      }
    },
    tones: {
      professional: { label: 'احترافي', desc: 'رسمي ومؤدب' },
      friendly: { label: 'ودود', desc: 'دافئ ومرحب' },
      direct: { label: 'مباشر', desc: 'مختصر وواضح' },
      persuasive: { label: 'مقنع', desc: 'موجه للمبيعات ومؤثر' },
      playful: { label: 'مرح', desc: 'خفيف، حيوي وممتع' },
      empathetic: { label: 'متفهم', desc: 'هادئ، متعاطف وداعم' },
      creative: { label: 'إبداعي', desc: 'معبر ومميز' }
    },
    rows: {
      autoReply: { title: 'الردود الآلية للعملاء', desc: 'استجب فوراً باستخدام سوفا.' },
      spamFilter: { title: 'فلتر الرسائل المزعجة', desc: 'حظر الرسائل العشوائية تلقائياً.' },
      alerts: { title: 'تنبيهات عالية الأهمية', desc: 'احصل على تنبيه عند اكتشاف مشترين جادين.' },
      tfa: { title: 'المصادقة الثنائية', desc: 'زيادة أمان مساحة عملك.' }
    },
    comingSoon: 'قريباً'
  },
  profile: {
    header: {
      label: 'ملف تعريف مساحة العمل',
      desc: 'أدر هويتك ولغتك وجاهزية الأتمتة في مكان واحد.'
    },
    plan: 'خطة {{name}}',
    activity: {
      products: 'المنتجات المرتبطة',
      automations: 'الأتمتة النشطة',
      alerts: 'تنبيهات غير مقروءة'
    },
    details: {
      title: 'تفاصيل مساحة العمل',
      language: 'اللغة الحالية',
      products: {
        label: 'المنتجات في الكتالوج',
        ready: '{{count}} جاهز للردود الآلية'
      },
      tones: {
        label: 'نبرة صوت المنشأة',
        ready: 'تم ضبط {{count}} من الإعدادات'
      }
    },
    summary: {
      title: 'ملخص الملف الشخصي',
      desc: 'هذه المساحة جاهزة لإدارة محادثات واتساب وأتمتة الردود.'
    }
  },
  chat: {
    title: 'صندوق الوارد WhatsApp',
    activeStatus: 'نشط',
    searchPlaceholder: 'البحث في المحادثات...',
    emptyState: 'اختر محادثة للمشاهدة',
    sovaLabel: 'سوفا AI',
    status: {
      automated: 'آلي',
      captured: 'عميل مكتسب'
    },
    previewLabel: 'معاينة دردشة واتساب',
    defaultReply: 'مرحباً! شكراً لتواصلك. أنا سوفا، مساعد المبيعات الخاص بك. كيف يمكنني مساعدتك اليوم؟'
  },
  drawer: {
    title: 'الإشعارات',
    empty: 'لا توجد إشعارات جديدة',
    readAll: 'تحديد الكل كمقروء'
  },
  celebration: {
    eyebrow: 'إطلاق سوفا',
    title: 'مساحة عملك جاهزة!',
    checklist: {
      whatsapp: 'أتمتة واتساب متصلة',
      filtering: 'فلترة العملاء مفعلة',
      followups: 'المتابعات جاهزة'
    },
    headline: 'محادثاتك الآن <gradient>آلية</gradient>',
    desc: 'سوفا تعمل الآن في مساحة عملك. يمكنها الرد بسرعة وإدارة مبيعاتك على واتساب.',
    features: {
      replies: 'الردود الآلية الفورية مفعلة',
      whatsapp: 'محادثات واتساب الخاصة بك أصبحت آلية الآن',
      buyers: 'سيتم تمييز المشترين الجادين أولاً'
    },
    btn: 'العودة إلى لوحة التحكم'
  },
}

admin.nav.files = 'الملفات'
admin.files = {
  title: 'مكتبة الملفات',
  subtitle: '{{count}} ملف{{s}} جاهزة لردود سوفا ومشاركة الوسائط',
  newBtn: 'إضافة ملف',
  banner: 'احتفظ بصورك وفيديوهاتك وملفات PDF في مكان واحد ليسهل على سوفا استخدامها.',
  empty: {
    title: 'لا توجد ملفات بعد',
    desc: 'أضف أول ملف ليتمكن سوفا من استخدامه في المحادثات.',
    btn: 'أضف الملف الأول'
  },
  item: {
    view: 'عرض',
    active: 'نشط',
    inactive: 'غير نشط',
    activate: 'تفعيل',
    deactivate: 'إلغاء التفعيل',
    modalTitle: 'نظرة عامة على الملف',
    noDescription: 'لا يوجد وصف مضاف حتى الآن.',
    none: 'لا يوجد',
    mediaLabel: 'نوع الملف',
    fileNameLabel: 'اسم الملف',
    types: {
      image: 'صورة',
      video: 'فيديو',
      file: 'ملف'
    }
  },
  controls: {
    searchPlaceholder: 'البحث في الملفات...',
    show: 'إظهار',
    perPage: 'لكل صفحة',
    all: 'الكل',
    pageInfo: '{{start}}-{{end}} من أصل {{total}} ملف',
    filters: {
      all: 'الكل',
      image: 'صور',
      video: 'فيديوهات',
      file: 'ملفات'
    },
    empty: {
      title: 'لا توجد ملفات مطابقة',
      desc: 'جرب كلمة بحث أخرى أو غير الفلتر المستخدم.'
    }
  },
  modal: {
    titleAdd: 'إضافة ملف جديد',
    titleUpdate: 'تحديث الملف',
    subtitleAdd: 'ارفع صورة أو فيديو أو ملف PDF ليتمكن سوفا من مشاركته.',
    subtitleUpdate: 'عدل تفاصيل الملف التي يستخدمها سوفا لمساعدة العملاء.',
    mediaLabel: 'وسائط الملف',
    mediaHelp: 'اضغط للرفع',
    nameLabel: 'اسم الملف',
    namePlaceholder: 'مثال: كتالوج الصيف 2026',
    descLabel: 'الوصف',
    descPlaceholder: 'مثال: ملف PDF لكتالوج تشكيلة الصيف.',
    saveBtn: 'حفظ الملف',
    updateBtn: 'تحديث الملف',
    invalidMediaType: 'يرجى رفع صورة أو فيديو أو ملف PDF صالح'
  }
}

admin.upgrade = {
  navLabel: 'ترقية الخطة',
  cta: 'ترقية الخطة',
  mobileCta: 'ترقية',
  eyebrow: 'ترقية الخطة',
  title: 'اختر خطة تنمو مع حجم مبيعاتك على WhatsApp',
  subtitle: 'افتح المزيد من الأتمتة وقدرات الذكاء الاصطناعي مع نمو نشاطك التجاري.',
  currentPlanLabel: 'الخطة الحالية',
  currentPlanValue: 'خطة {{plan}}',
  currentPlanHint: 'يمكنك الترقية في أي وقت للحصول على ميزات أتمتة أكبر.',
  popular: 'الأكثر شعبية',
  choosePlan: 'اختيار الخطة',
  currentPlanButton: 'الخطة الحالية',
  compareTitle: 'لماذا تقوم الشركات بالترقية؟',
  compareDesc: 'مع زيادة عدد المحادثات، تستطيع سوفا التعامل مع ردود وعملاء أكثر بكثير.',
  benefits: {
    1: { title: 'محادثات آلية أكثر', desc: 'إدارة المزيد من ردود الواتساب دون عناء يدوي إضافي.' },
    2: { title: 'إدارة ذكاء اصطناعي أقوى', desc: 'زيادة قدرة سوفا على تأهيل العملاء وتوجيه المشترين.' },
    3: { title: 'رؤية مبيعات متقدمة', desc: 'تتبع معدلات النمو وتحسين استجابة الأتمتة.' },
    4: { title: 'مصمم للأعمال المتنامية', desc: 'حافظ على سلاسة العمل مع زيادة حجم الطلبات.' },
  },
  plans: {
    starter: {
      badge: 'ستارتر',
      name: 'ستارتر',
      price: '$19/mo',
      desc: 'للشركات الصغيرة التي تبدأ رحلة الأتمتة.',
      features: {
        1: 'حتى 1,000 رد آلي شهرياً',
        2: 'دعم أساسي لمشاركة المنتجات والملفات',
        3: 'اكتشاف العملاء بالقواعد القياسية',
        4: 'مساحة عمل واحدة مع تقارير أساسية',
      },
    },
    growth: {
      badge: 'جروث',
      name: 'جروث',
      price: '$49/mo',
      desc: 'مصممة للتعامل مع تدفق مبيعات نشط.',
      features: {
        1: 'حتى 5,000 رد آلي شهرياً',
        2: 'سير عمل متقدم للكتالوج والوسائط',
        3: 'تقييم عملاء ومتابعات آلية ذكية',
        4: 'تحليلات متقدمة ودعم فني سريع',
      },
    },
    scale: {
      badge: 'سكيل',
      name: 'سكيل',
      price: '$99/mo',
      desc: 'للشركات الكبيرة التي تدير حجماً عالياً جداً.',
      features: {
        1: 'إدارة شاملة للردود والحملات الضخمة',
        2: 'منطق أتمتة عميق عبر جميع أقسام التطبيق',
        3: 'تقارير تفصيلية ورؤية بيعية شاملة',
        4: 'دعم مخصص ومساعدة كاملة في الإعداد',
      },
    },
  },
}

admin.nav.catalog = 'كتالوج القطع'
admin.nav.addProduct = 'إضافة قطعة'
admin.overview.quickActions.businessSettings = 'إعدادات المنشأة'
admin.overview.quickActions.products = 'عرض القطع'
admin.overview.quickActions.files = 'عرض الملفات'
admin.chat.previewLabel = 'معاينة دردشة واتساب'
admin.chat.defaultReply = 'مرحباً! شكراً لتواصلك. أنا سوفا، مساعد المبيعات الخاص بك. كيف يمكنني مساعدتك اليوم؟'

admin.mockData = {
  broadcasts: {
    campaigns: [
      { name: 'عرض رمضان', audience: '1,240 جهة اتصال', sendAt: 'اليوم، 7:00 م' },
      { name: 'إطلاق الكتالوج الجديد', audience: '860 جهة اتصال', sendAt: 'بانتظار الموافقة' },
      { name: 'حملة متابعة VIP', audience: '420 جهة اتصال', sendAt: 'أمس، 5:30 م' }
    ]
  },
  notifications: [
    { title: 'عميل محتمل جديد', desc: 'فيصل أحمد يستفسر عن أسعار الجملة لأوشحة الحرير الفاخرة.', time: 'منذ دقيقتين' },
    { title: 'اكتمال الحملة', desc: "تم إرسال حملة 'عرض رمضان' إلى 1,240 جهة اتصال بنجاح.", time: 'منذ ساعة' },
    { title: 'تحديث معرفة سوفا', desc: 'تم إضافة منتج "تيشيرت قطن" جديد للكتالوج وهو جاهز للردود الآلية.', time: 'منذ 3 ساعات' },
    { title: 'رسالة واردة', desc: 'أرسلت سارة خان رسالة. تقوم سوفا بالتعامل معها تلقائياً.', time: 'منذ 5 ساعات' }
  ],
  chats: [
    { user: 'فيصل أحمد', message: 'مرحباً، ما هو سعر هذه السترة؟', time: '14:23' },
    { user: 'سارة خان', message: 'هل يتوفر مقاس M باللون الأزرق؟', time: '12:05' },
    { user: 'زبير شاه', message: 'أريد طلب 3 قطع من فضلك.', time: '09:44' },
    { user: 'ناديا مالك', message: 'هل يمكنك إرسال الكتالوج؟', time: 'أمس' },
    { user: 'بلال رضا', message: 'ما هي رسوم التوصيل لديكم؟', time: 'أمس' }
  ],
  reports: {
    stats: {
      revenue: '840k ر.س',
      orderRate: '37%',
      resolved: '1,284',
      revenueChange: '+18%',
      orderRateChange: '+6%',
      resolvedChange: '+22%'
    },
    revenueLines: ['82k', '95k', '110k', '130k', '150k'],
    rows: [
      { revenue: '82k ر.س', rate: '16.9%' },
      { revenue: '95k ر.س', rate: '17.7%' },
      { revenue: '110k ر.س', rate: '17.4%' },
      { revenue: '130k ر.س', rate: '18.8%' },
      { revenue: '150k ر.س', rate: '20.0%' }
    ]
  },
  drawer: [
    { text: 'تم تسجيل عميل جديد "فيصل" عبر واتساب!', time: 'منذ دقيقتين' },
    { text: '5 قطع غير متوفرة في المخزون حالياً.', time: 'منذ ساعة' },
    { text: 'ارتفع معدل أتمتة سوفا بنسبة 12% اليوم!', time: 'منذ 3 ساعات' },
    { text: 'سارة مالك مهتمة بمنتج "وشاح فاخر".', time: 'منذ 5 ساعات' }
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
      time: '11ث',
      timeChange: '-34%'
    },
    activity: [
      { time: 'منذ دقيقتين', meta: 'إلكترونيات - طلب جملة 5 وحدات' },
      { time: 'منذ 9 دقائق', meta: 'ملابس - حملة استعادة سلة التسوق' },
      { time: 'منذ 14 دقيقة', meta: 'تمت إزالة رسالة مكررة غير مهمة' }
    ]
  },
  threads: {
    3: [
      { from: 'user', text: 'أريد طلب 3 قطع من فضلك.' },
      { from: 'sova', text: 'خيار رائع! تم تسجيل طلبك لـ 3 قطع. هل يمكنني معرفة أي منتج تقصد؟' },
      { from: 'user', text: 'وشاح الحرير الفاخر.' },
      { from: 'sova', text: 'ممتاز! سأقوم بتجهيز الفاتورة لـ 3 وشاح حرير فاخر. هل أؤكد طلبك؟' }
    ]
  }
}
