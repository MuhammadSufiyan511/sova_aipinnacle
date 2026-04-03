export const onboarding = {
  business: {
    title: 'ما هو {emerald:عملك}؟',
    subtitle: 'تُصمم SOVA ردودها واكتشاف العملاء المحتملين وفقًا لصناعتك.',
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
    title: 'أضف {emerald:منتجاتك}',
    subtitle: 'تستخدم SOVA كتالوجك للإجابة تلقائيًا على أسئلة المشترين.',
    addBtn: 'أضف منتج',
    nextBtn: '← حفظ ومتابعة',
    toastError: 'أضف منتجًا واحدًا على الأقل حتى تتعلم SOVA عن عملك.',
    modal: {
      titleAdd: 'إضافة منتج جديد',
      titleUpdate: 'تحديث المنتج',
      subtitleAdd: 'أعطِ منتجك اسمًا، وصفًا قصيرًا، وصورة اختيارية.',
      subtitleUpdate: 'قم بتعديل تفاصيل المنتج التي تستخدمها SOVA في دردشات المشتري.',
      mediaLabel: 'وسائط المنتج',
      mediaHelp: 'انقر للتحميل',
      nameLabel: 'اسم المنتج',
      namePlaceholder: 'مثال: وشاح حريري فاخر',
      descLabel: 'الوصف',
      descPlaceholder: 'مثال: وشاح حريري فاخر مع لمسة ناعمة وتغليف هدايا.',
      saveBtn: 'حفظ المنتج',
      updateBtn: 'تحديث'
    }
  },
  tone: {
    title: 'اضبط {emerald:صوت} SOVA',
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
    title: 'يتم تحضير {emerald:وكيل مبيعات الذكاء الاصطناعي} الخاص بك',
    subtitle: 'نقوم بتكوين SOVA بمنتجاتك وتفضيلات عملك.'
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
    automationLive: 'الأتمتة مباشرة'
  },
  broadcasts: {
    title: 'حملات البث',
    subtitle: 'جدولة رسائل WhatsApp للعملاء المحتملين والعملاء والشرائح — بواسطة SOVA.',
    newBtn: 'بث جديد',
    stats: {
      scheduled: 'مجدولة',
      sentWeek: 'أُرسل هذا الأسبوع',
      avgResponse: 'متوسط معدل الاستجابة'
    },
    workflow: {
      title: 'سير عمل الأتمتة',
      subtitle: 'كيف تُحول SOVA رسائل WhatsApp الواردة إلى عملاء مؤهلين',
      nodes: {
        trigger: { label: 'رسالة واردة', sub: 'مُشغَّل واتساب' },
        filter: { label: 'فلتر النية', sub: 'تكتشف SOVA جودة العميل' },
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
        powered: 'مدعوم بأتمتة SOVA',
        stats: 'الفتحات: {{opens}} · الردود: {{replies}}'
      }
    }
  },
  products: {
    title: 'كتالوج المنتجات',
    subtitle: 'تشارك SOVA {{count}} عنصراً مع المشترين في المحادثات',
    newBtn: 'إضافة منتج',
    banner: 'تستخدم SOVA كتالوجك للإجابة تلقائيًا على الأسئلة المتعلقة بتوافر المنتجات والأسعار والميزات.',
    empty: {
      title: 'لا توجد منتجات بعد',
      desc: 'أضف منتجك الأول حتى تتمكن SOVA من مشاركته مع المشترين المحتملين عبر WhatsApp.',
      btn: 'أضف أول منتج لك'
    },
    item: {
      price: 'Rs. {{price}}'
    }
  },
  overview: {
    stats: {
      activeConversations: 'المحادثات النشطة',
      qualifiedLeads: 'العملاء المؤهلون',
      automatedReplies: 'الردود الآلية',
      avgResponseTime: 'متوسط وقت الرد'
    },
    quickActions: {
      products: 'أضف منتج',
      settings: 'إعداد الأتمتة',
      notifications: 'عرض الإشعارات'
    },
    charts: {
      saleTrend: {
        title: 'اتجاه المبيعات',
        subtitle: 'الأداء في آخر 7 أيام',
        pill: '+{{count}}% ارتفاع'
      },
      leadMix: {
        title: 'مزيج العملاء',
        subtitle: 'المتابعات مقابل المشترين',
        label: 'المشترون'
      },
      leadsByDay: {
        title: 'العملاء يوميًا',
        subtitle: 'حجم الأداء الأسبوعي',
        pill: 'وقت الذروة'
      }
    },
    donuts: {
      buyers: 'المشترون',
      followups: 'المتابعات',
      spam: 'رسائل غير مرغوبة'
    },
    activity: {
      title: 'النشاط الأخير',
      subtitle: 'تحديثات في الوقت الفعلي',
      feeds: {
        order: 'نية شراء جديدة',
        followup: 'تم جدولة متابعة',
        spam: 'تم حظر رسالة غير ملائمة'
      }
    }
  },
  reports: {
    title: 'تحليلات المبيعات',
    subtitle: 'تتبع أداء مبيعاتك المؤتمتة.',
    exportBtn: 'تصدير التقرير',
    stats: {
      revenue: 'إجمالي الإيرادات',
      orderRate: 'معدل الطلب',
      resolved: 'المحادثات المحلولة'
    },
    chart: {
      title: 'تحليلات الإيرادات',
      subtitle: 'نظرة عامة على الدخل الأسبوعي',
      pill: '+12.4% زيادة'
    },
    table: {
      title: 'الأداء الأسبوعي',
      subtitle: 'تفصيل المحادثات اليومية والتحويلات',
      headers: {
        day: 'اليوم',
        chats: 'المحادثات',
        orders: 'الطلبات',
        conversion: 'التحويل',
        revenue: 'الإيرادات'
      }
    }
  },
  settings: {
    title: 'إعدادات الأتمتة',
    subtitle: 'التحكم في سلوك وكيل الذكاء الاصطناعي الخاص بك.',
    sections: {
      voice: {
        title: 'صوت العلامة التجارية',
        subtitle: 'اختر كيف تتحدث SOVA مع عملائك.'
      },
      rules: {
        title: 'قواعد الأتمتة',
        subtitle: 'تعيين تفضيلات الردود الآلية والتصفيات.'
      }
    },
    tones: {
      professional: { label: 'احترافي', desc: 'تجاري ورسمي' },
      friendly: { label: 'ودود', desc: 'مساعد ودافئ' },
      direct: { label: 'مباشر', desc: 'موجز ودقيق' },
      creative: { label: 'مبدع', desc: 'متحمس ومميز' }
    },
    rows: {
      autoReply: { title: 'الرد التلقائي', desc: 'السماح لـ SOVA بالرد على الأسئلة الشائعة.' },
      spamFilter: { title: 'فلتر الرسائل المزعجة', desc: 'حظر الرسائل غير الملائمة تلقائيًا.' },
      alerts: { title: 'تنبيهات العملاء', desc: 'احصل على إشعار عند العثور على مشترٍ جديد.' },
      tfa: { title: 'المصادقة الثنائية', desc: 'تأمين مساحة عملك بشكل أفضل.' }
    },
    comingSoon: 'قريباً'
  },
  chat: {
    title: 'صندوق الوارد واتساب',
    activeStatus: 'نشط',
    searchPlaceholder: 'البحث في المحادثات...',
    emptyState: 'حدد محادثة لعرضها',
    sovaLabel: 'SOVA AI',
    status: {
      automated: 'آلي',
      captured: 'تم التقاط العميل'
    }
  },
  drawer: {
    title: 'الإشعارات',
    empty: 'لا توجد إشعارات جديدة',
    readAll: 'تحديد الكل كمقروء'
  },
  celebration: {
    eyebrow: 'تهانينا!',
    title: 'مساحة عملك جاهزة ومباشرة!',
    headline: 'استعد، {gradient:وكيل الذكاء الاصطناعي} جاهز',
    desc: 'SOVA جاهزة الآن للرد على عملائك، وتصفية العملاء المحتملين، وزيادة مبيعاتك.',
    features: {
      replies: 'ردود آلية',
      whatsapp: 'تكامل واتساب',
      buyers: 'تحديد المشترين'
    },
    checklist: {
      whatsapp: 'واتساب مباشر',
      filtering: 'تصفية العملاء نشطة',
      followups: 'المتابعات نشطة'
    },
    btn: 'انتقل إلى لوحة التحكم'
  },
  mockData: {
    broadcasts: {
      campaigns: [
        { name: 'عرض رمضان', audience: '١,٢٤٠ جهة اتصال', sendAt: 'اليوم، ٧:٠٠ م' },
        { name: 'إطلاق كتالوج جديد', audience: '٨٦٠ جهة اتصال', sendAt: 'في انتظار الموافقة' },
        { name: 'حملة متابعة VIP', audience: '٤٢٠ جهة اتصال', sendAt: 'أمس، ٥:٣٠ م' }
      ]
    },
    notifications: [
      { title: 'عميل جديد مهتم جداً', desc: 'يسأل فيزان أحمد عن أسعار الجملة لـ "سكارف حرير فاخر".', time: 'منذ دقيقتين' },
      { title: 'اكتمل الإرسال', desc: "تم إرسال حملة 'عرض رمضان' إلى ١,٢٤٠ جهة اتصال بنجاح.", time: 'منذ ساعة' },
      { title: 'تحديث معرفة SOVA', desc: 'تمت إضافة منتج جديد "تي شيرت قطني" إلى الكتالوج وجاهز للردود الآلية.', time: 'منذ ٣ ساعات' },
      { title: 'رسالة واردة', desc: 'أرسلت سارة خان رسالة. SOVA تتعامل معها تلقائيًا.', time: 'منذ ٥ ساعات' }
    ],
    chats: [
      { user: 'فيزان أحمد', message: 'مرحباً، ما هو سعر هذه السترة؟', time: '١٤:٢٣' },
      { user: 'سارة خان', message: 'هل يتوفر مقاس M باللون الأزرق؟', time: '١٢:٠٥' },
      { user: 'زبير شاه', message: 'أريد تقديم طلب لـ ٣ قطع.', time: '٠٩:٤٤' },
      { user: 'نادية مالك', message: 'هل يمكنك إرسال الكتالوج من فضلك؟', time: 'أمس' },
      { user: 'بلال رضا', message: 'ما هي رسوم التوصيل لديكم؟', time: 'أمس' }
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
      { text: 'تم التقاط عميل محتمل جديد "فيزان" على واتساب!', time: 'منذ دقيقتين' },
      { text: 'هناك 5 أصناف نفدت من المخزون في الكتالوج الخاص بك.', time: 'منذ ساعة' },
      { text: 'ارتفع معدل أتمتة SOVA بنسبة 12% اليوم!', time: 'منذ 3 ساعات' },
      { text: 'سارة مالك مهتمة بـ "سكارف فاخر".', time: 'منذ 5 ساعات' }
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
        time: '11 ث',
        timeChange: '-34%'
      },
      activity: [
        { time: 'منذ دقيقتين', meta: 'إلكترونيات - طلب بالجملة لـ 5 وحدات' },
        { time: 'منذ 9 دقائق', meta: 'ملابس - حملة استرداد السلة' },
        { time: 'منذ 14 دقيقة', meta: 'تمت إزالة رسالة مكررة منخفضة القيمة' }
      ]
    },
    threads: {
      3: [
        { from: 'user', text: 'أريد تقديم طلب لـ ٣ قطع.' },
        { from: 'sova', text: "اختيار رائع! لقد سجلت طلبك لـ ٣ قطع. هل يمكنني أن أسأل عن المنتج الذي تقصده؟" },
        { from: 'user', text: 'سكارف حرير فاخر.' },
        { from: 'sova', text: "ممتاز! سأقوم بإعداد فاتورة لـ ٣ قطع من سكارف حرير فاخر. هل أؤكد طلبك؟" }
      ]
    }
  }
}
