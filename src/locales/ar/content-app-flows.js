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
      invalidMediaType: 'يرجى رفع صورة أو فيديو صالح'
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
    starter: 'مبتدئ',
    growth: 'نمو',
    scale: 'توسع',
    units: 'وحدات',
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
      none: 'لا يوجد',
      deleteConfirmTitle: 'حذف المنتج؟',
      deleteConfirmDesc: 'لا يمكن التراجع عن هذا الإجراء. سيتم حذف جميع البيانات المرتبطة بهذا المنتج نهائياً.',
      deleteConfirmBtn: 'نعم، احذف المنتج',
      deleteCancelBtn: 'الاحتفاظ به الآن',
      deleteSuccess: 'تم حذف المنتج بنجاح',
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
    fields: {
      selectOption: 'اختر خياراً',
      customValue: 'مخصص...',
      customValuePlaceholder: 'أدخل قيمة مخصصة',
      colorNotFound: 'اسم اللون غير معروف. سيتم إضافته كعلامة مخصصة.',
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
        industryLabel: 'الصناعة',
        desc: 'التصنيف والتسلسل الهرمي',
        categoryLabel: 'القسم الرئيسي',
        categoryPlaceholder: 'اختر قسماً',
        subCategoryLabel: 'نوع القطعة',
        subCategoryPlaceholder: 'اختر نوعاً',
        newSubCategory: 'نوع جديد',
        customCategoryLabel: 'اسم القسم المخصص',
        customCategoryPlaceholder: 'أدخل اسم القسم',
        customSubCategoryLabel: 'اسم النوع المخصص',
        customSubCategoryPlaceholder: 'أدخل اسم النوع',
        newSubCategory: 'نوع جديد',
        customSetupTitle: 'إعدادات التصنيف المخصص',
        customSetupSubtitle: 'حدد كيفية تعامل النظام مع هذه القطعة المخصصة',
        productTypeLabel: 'تصنيف نوع المنتج',
        typePhysical: 'منتج مادي',
        typeDigital: 'أصل رقمي',
        typeService: 'خدمة',
        typeSubscription: 'اشتراك',
        promptNewType: 'أدخل نوع منتج جديد...',
        addNewType: 'إضافة نوع جديد',
        trackStock: 'تتبع المخزون',
        taxable: 'خاضع للضريبة',
        weightLabel: 'الوزن (كجم)',
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
        currentStockLabel: 'المخزون الحالي',
        minStockLabel: 'تنبيه انخفاض المخزون عند',
        skuLabel: 'كود القطعة / SKU',
        skuPlaceholder: 'مثال: ITEM-001',
        skuHelp: 'كود المرجع الداخلي للمحل',
        minOrderLabel: 'أقل كمية للطلب',
      },
      variants: {
        title: 'خيارات المنتج',
        subtitle: 'أضف مجموعات مختلفة من الأحجام والألوان والخامات',
        desc: 'مجموعات الأحجام والألوان المتوفرة',
        rowLabel: 'مجموعة الاختلافات',
        inputPlaceholder: 'اكتب واضغط Enter',
        expandAll: 'توسيع الكل',
        collapseAll: 'طوي الكل',
        newGroupLabel: 'مجموعة اختلافات جديدة',
        addGroupBtn: 'إضافة مجموعة اختلافات جديدة',
        addGroup: 'إضافة مجموعة اختلافات',
        saveVariantBtn: 'حفظ الاختلاف',
        saveVariant: 'حفظ الاختلاف',
        noVariantsFound: 'لم يتم العثور على اختلافات لهذا القسم',
        noStandardFields: 'لا توجد حقول اختلافات قياسية (مقاس، لون، إلخ) محددة لهذا القسم.',
        noVariantFields: 'لا توجد حقول اختلافات قياسية (مقاس، لون، إلخ) محددة لهذا القسم.',
        noVariantFieldsSubtitle: 'يمكنك الاستمرار في إضافة مواصفات مخصصة أدناه.',
        sizeLabel: 'المقاس',
        colorsLabel: '{{count}} ألوان',
        colorLabel: 'لون واحد'
      },
      media: {
        title: 'صور القطعة والوسائط',
        noMediaAttached: 'لم يتم رفع صور',
        upload: 'رفع الوسائط',
        primary: 'الصورة الرئيسية',
        makePrimary: 'تعيين كرئيسية',
        dropTitle: 'أفلت للتحميل',
        dropSubtitle: 'أفلت لإضافة صور أو مقاطع فيديو',
        editorTitle: 'محرر الوسائط',
        editorSubtitle: 'قم بقص وتعديل صور منتجك',
      },
      actions: {
        submitAdd: 'إنشاء القائمة',
        submitEdit: 'حفظ التغييرات',
        saveDraft: 'حفظ كمسودة',
      },
    },
    validation: {
      nameRequired: 'اسم المنتج مطلوب',
      descriptionRequired: 'يرجى إضافة وصف المنتج',
      mediaRequired: 'يرجى رفع صورة أو فيديو واحدة على الأقل',
      categoryRequired: 'يرجى اختيار فئة رئيسية',
      subCategoryRequired: 'يرجى اختيار فئة فرعية',
      priceRequired: 'يرجى إدخال سعر البيع',
      stockRequired: 'يرجى إدخال كمية المخزون',
      missingFields: 'يرجى ملء جميع الحقول المطلوبة قبل الحفظ',
      createSuccess: 'تمت إضافة القطعة بنجاح',
      updateSuccess: 'تم تحديث التفاصيل بنجاح',
      statusActive: 'تم تحديد المنتج كنشط',
      statusInactive: 'تم تحديد المنتج كغير نشط',
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
        subtitle: 'تحكم في كيفية تحدث سوفا مع عملائك',
        current: 'الصوت الحالي',
        button: 'تغيير الصوت',
        modalTitle: 'إعداد الصوت'
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
    business: {
      title: 'ملف المنشأة',
      cancel: 'إلغاء',
      save: 'حفظ',
      edit: 'تعديل',
      photoAlt: 'ملف المنشأة',
      noPhoto: 'لا توجد صورة للمنشأة',
      uploadPhoto: 'رفع صورة',
      nameLabel: 'اسم المنشأة',
      namePlaceholder: 'مثال: Noor Abaya House',
      emptyName: 'أضف اسم منشأتك',
      descriptionLabel: 'وصف المنشأة',
      descriptionPlaceholder: 'أخبر العملاء ماذا تبيع ولماذا يختارون منشأتك.',
      emptyDescription: 'أضف وصفًا مختصرًا للمنشأة',
      locationLabel: 'موقع المنشأة',
      locationPlaceholder: 'مثال: الرياض، السعودية',
      emptyLocation: 'أضف موقعك'
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
        4: 'تحليلاف متقدمة ودعم فني سريع',
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
admin.common = admin.common || {}
admin.common.locked = 'مقفل'
admin.common.unlockToView = 'افتح للعرض'

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

admin.addProductOverview = admin.addProductOverview || {};
admin.addProductOverview.validation = admin.addProductOverview.validation || {};
admin.addProductOverview.validation.imageTooLarge = 'يتجاوز 5 ميجابايت.';
admin.addProductOverview.validation.videoTooLarge = 'يتجاوز حد 15 ميجابايت.';
admin.addProductOverview.validation.videoDurationInvalid = 'يجب أن يكون بين 15-20 ثانية (الحالي: {{duration}} ثانية).';
admin.addProductOverview.validation.compressLink = 'اضغط هنا للتقليص';
admin.addProductOverview.validation.maxFilesExceeded = 'يمكنك فقط تحميل ما يصل إلى {{max}} ملفات وسائط.';

admin.settings = admin.settings || {};
admin.settings.businessUpdateSuccess = 'تم تحديث ملف المنشأة بنجاح';
admin.settings.toneUpdateSuccess = 'تم تحديث إعدادات الصوت بنجاح';
admin.settings.tones = {
  validation: {
    atLeastOne: 'يرجى اختيار نغمة واحدة على الأقل لـ SOVA'
  },
  none: 'لا شيء',
  professional: { label: 'احترافي', desc: 'مهذب وعملي' },
  friendly: { label: 'ودود', desc: 'دافئ وسهل التعامل' },
  direct: { label: 'مباشر', desc: 'موجز وواضح' },
  persuasive: { label: 'مقنع', desc: 'مقنع ومركز على المبيعات' },
  playful: { label: 'مرح', desc: 'خفيف وممتع' },
  empathetic: { label: 'متعاطف', desc: 'هادئ ومتفهم' }
};

admin.profile = admin.profile || {};
admin.profile.user = {
  title: 'الملف الشخصي',
  cancel: 'إلغاء',
  save: 'حفظ',
  edit: 'تعديل',
  photoAlt: 'الملف الشخصي',
  noPhoto: 'لا توجد صورة',
  uploadPhoto: 'رفع صورة',
  removePhoto: 'إزالة الصورة',
  nameLabel: 'الاسم الكامل',
  namePlaceholder: 'مثال: أحمد محمد',
  emptyName: 'أضف اسمك الكامل',
  emailLabel: 'البريد الإلكتروني',
  emailPlaceholder: 'مثال: ahmed@example.com',
  emptyEmail: 'أضف بريدك الإلكتروني',
  phoneLabel: 'رقم الهاتف',
  phonePlaceholder: 'مثال: +966 50 123 4567',
  emptyPhone: 'أضف رقم هاتفك'
};

admin.profile.business = {
  removePhoto: 'إزالة'
};


admin.settings = admin.settings || {};
admin.settings.bankUpdateSuccess = 'تم تحديث تفاصيل البنك بنجاح';
admin.settings.bankDeleteSuccess = 'تم حذف تفاصيل البنك بنجاح';
admin.settings.resetAllSuccess = 'تم إعادة تعيين جميع الإعدادات';
admin.settings.account = {
  title: 'إدارة الحساب',
  deleteTitle: 'حذف بيانات الملف الشخصي',
  deleteDesc: 'سيؤدي هذا إلى مسح معلومات البنك وملف الأعمال وتفضيلات الذكاء الاصطناعي.',
  deleteBtn: 'حذف جميع المعلومات',
  confirmTitle: 'حذف جميع بيانات الملف الشخصي؟',
  confirmDesc: 'هل أنت متأكد؟ سيؤدي هذا إلى إزالة تفاصيل البنك وملف الأعمال وإعدادات الذكاء الاصطناعي بشكل دائم.',
  confirmBtn: 'نعم، احذف كل شيء',
  cancelBtn: 'إلغاء',
};
admin.settings.sections = admin.settings.sections || {};
admin.settings.sections.bank = {
  title: 'معلومات البنك',
  subtitle: 'تكوين بيانات الدفع والبنك الخاصة بك هنا',
  current: 'حالة',
  configured: 'معد',
  notConfigured: 'غير معد',
  button: 'تعديل بيانات البنك'
};
admin.addProductOverview = admin.addProductOverview || {};
admin.addProductOverview.validation = {
  nameRequired: 'اسم المنتج مطلوب',
  descriptionRequired: 'يرجى إضافة وصف المنتج',
  mediaRequired: 'يرجى رفع صورة أو فيديو واحدة على الأقل',
  categoryRequired: 'يرجى اختيار فئة رئيسية',
  subCategoryRequired: 'يرجى اختيار فئة فرعية',
  priceRequired: 'يرجى إدخال سعر البيع',
  stockRequired: 'يرجى إدخال كمية المخزون',
  maxFilesExceeded: 'يمكنك تحميل ما يصل إلى {{max}} ملفات فقط.',
  imageTooLarge: 'كبيرة جداً.',
  videoTooLarge: '{{name}} يتجاوز حد 15 ميجابايت.',
  videoDurationInvalid: 'يجب أن يكون {{name}} بين 15-20 ثانية (الحالي: {{duration}} ثانية).',
  compressLink: 'اضغط هنا',
  createSuccess: 'تمت إضافة القطعة بنجاح',
  updateSuccess: 'تم تحديث التفاصيل بنجاح',
  statusActive: 'تم تحديد المنتج كنشط',
  statusInactive: 'تم تحديد المنتج كغير نشط'
};
admin.settings.sections = admin.settings.sections || {};
admin.settings.sections.bank = {
  title: 'معلومات البنك',
  subtitle: 'تكوين إعدادات الدفع لمتجرك',
  current: 'الحالة',
  configured: 'تم الضبط',
  notConfigured: 'لم يتم الضبط',
  button: 'تعديل بيانات البنك'
};
admin.settings.bank = {
  title: 'معلومات البنك',
  subtitle: 'تكوين بيانات الدفع والبنك الخاصة بك هنا',
  accountTitle: 'صاحب الحساب',
  accountTitlePlaceholder: 'مثال: أحمد محمد',
  accountTitleHint: 'كما يظهر في حسابك البنكي',
  accountNumber: 'رقم الحساب / IBAN',
  accountNumberPlaceholder: 'مثال: PK00 BANK 0000 0000 0000 0000',
  ibanHint: 'يتكون IBAN عادةً من 24 حرفًا للحسابات الباكستانية',
  bankName: 'اسم البنك',
  bankNamePlaceholder: 'مثال: HBL، Alfalah، Meezan',
  description: 'تعليمات الدفع',
  descriptionPlaceholder: 'مثال: يرجى تضمين رقم الطلب في ملاحظات التحويل',
  required: 'مطلوب',
  configured: 'تفاصيل الدفع مُعدَّة',
  notConfigured: 'لم تتم الإضافة بعد',
  verified: 'محفوظ',
  savedSuccess: 'تم حفظ بيانات البنك بنجاح!',
  notConfiguredTitle: 'لا توجد بيانات بنكية',
  addDetails: 'إضافة حساب بنكي',
  sectionPayment: 'تفاصيل الدفع',
  sectionAccount: 'معلومات الحساب',
  sectionNotes: 'معلومات إضافية',
  copyIBAN: 'نسخ IBAN',
  copied: 'تم النسخ!',
  updateBank: 'تحديث البنك',
  removeAccount: 'إزالة',
  warning: 'تأكد من دقة جميع التفاصيل. سيتم استخدام هذه المعلومات لمدفوعات متجرك.',
  errors: {
    accountTitleRequired: 'اسم الحساب مطلوب',
    bankNameRequired: 'اسم البنك مطلوب',
    accountNumberRequired: 'رقم الحساب مطلوب'
  },
  notConfiguredDesc: 'أضف حسابك البنكي حتى يتمكن العملاء من الدفع مباشرةً.',
  deleteConfirmTitle: 'حذف معلومات البنك؟',
  deleteConfirmDesc: 'سيؤدي هذا إلى إزالة تفاصيل البنك الخاصة بك نهائيًا من النظام. ستحتاج إلى إعادة إدخالها لتلقي المدفوعات.',
  deleteConfirmBtn: 'نعم، احذف المعلومات',
  deleteCancelBtn: 'احتفظ بالمعلومات'
};

export const notFound = {
  title: '404',
  subtitle: 'هل ضللت الطريق؟',
  desc: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى كون آخر.",
  backBtn: 'خذني إلى المنزل',
  backLink: 'العودة',
}
