const onboarding = {
  business: {
    title: 'آپ کس قسم کا کاروبار چلاتے ہیں؟',
    subtitle: 'سوفا آپ کے کاروبار کے مطابق جوابات، لیڈ فلٹرنگ، اور آٹومیشن کو ترتیب دیتا ہے۔',
    searchPlaceholder: 'انڈسٹری تلاش کریں...',
    customCategoryPlaceholder: 'اپنے کاروبار کی قسم لکھیں...',
    nextBtn: 'میری انڈسٹری منتخب کریں →',
    categories: {
      clothing: { label: 'کپڑے', desc: 'لباس، جوتے، اور فیشن آئٹمز۔' },
      jewellery: { label: 'جیولری', desc: 'سونا، چاندی، اور زیورات۔' },
      toys: { label: 'کھلونے', desc: 'بچوں کے کھلونے، گیمز، اور پزلز۔' },
      'books-stationary': { label: 'کتابیں اور اسٹیشنری', desc: 'تعلیمی اور دفتری سامان۔' },
      'dry-fruits': { label: 'ڈرائی فروٹس', desc: 'بادام، کاجو، کھجور، اور دیگر آئٹمز۔' },
      decoration: { label: 'ڈیکوریشن', desc: 'ایونٹس، ہوم ڈیکور، اور تھیمز۔' },
      electronics: { label: 'الیکٹرانکس', desc: 'فونز، گیجٹس، اور ایکسسریز۔' },
      'medical-instruments': { label: 'میڈیکل انسٹرومنٹس', desc: 'ہسپتال اور کلینک کا سامان۔' },
      'surgical-instruments': { label: 'سرجیکل انسٹرومنٹس', desc: 'پریسیژن ٹولز اور سرجیکل سیٹس۔' },
      hardware: { label: 'ہارڈویئر', desc: 'ٹولز، میٹریل، اور فکسچرز۔' },
      fireworks: { label: 'آتش بازی', desc: 'تقریبات اور موسمی آئٹمز۔' },
      service: { label: 'سروس بزنس', desc: 'بکنگ، کنسلٹنگ، اور مقامی سروسز۔' },
      agency: { label: 'ایجنسی اور B2B', desc: 'کلائنٹس، پچز، اور ریٹینرز۔' },
      creator: { label: 'کانٹینٹ کریئیٹر', desc: 'ڈیجیٹل پراڈکٹس اور آڈینس بزنس۔' },
      other: { label: 'دیگر', desc: 'اگر آپ کا بزنس مختلف ہے تو یہ منتخب کریں۔' },
    },
  },
  products: {
    title: 'اپنی مصنوعات شامل کریں',
    subtitle: 'سوفا آپ کے کیٹلاگ کی مدد سے خریداروں کے سوالات کا خودکار جواب دیتا ہے۔',
    addBtn: 'پروڈکٹ شامل کریں',
    nextBtn: 'محفوظ کریں اور آگے بڑھیں →',
    toastError: 'آگے بڑھنے کے لیے کم از کم ایک پروڈکٹ شامل کریں۔',
    modal: {
      titleAdd: 'نئی پروڈکٹ شامل کریں',
      titleUpdate: 'پروڈکٹ اپ ڈیٹ کریں',
      subtitleAdd: 'پروڈکٹ کا نام، مختصر تفصیل، اور ایک اختیاری تصویر، ویڈیو یا PDF شامل کریں۔',
      subtitleUpdate: 'ان تفصیلات میں ترمیم کریں جو سوفا خریداروں کی چیٹس میں استعمال کرتا ہے۔',
      mediaLabel: 'پروڈکٹ میڈیا',
      mediaHelp: 'اپ لوڈ کرنے کے لیے کلک کریں',
      nameLabel: 'پروڈکٹ کا نام',
      namePlaceholder: 'مثلاً پریمیم سلک اسکارف',
      descLabel: 'تفصیل',
      descPlaceholder: 'مثلاً نرم فنش اور گفٹ پیکنگ کے ساتھ پریمیم سلک اسکارف۔',
      saveBtn: 'پروڈکٹ محفوظ کریں',
      updateBtn: 'پروڈکٹ اپ ڈیٹ کریں',
      invalidMediaType: 'براہ کرم درست تصویر یا ویڈیو اپ لوڈ کریں',
    },
  },
  tone: {
    title: 'سوفا کی گفتگو کا انداز منتخب کریں',
    subtitle: 'وہ ٹون منتخب کریں جو آپ اپنے کسٹمرز کے ساتھ استعمال کرنا چاہتے ہیں۔',
    profiles: {
      professional: { label: 'پیشہ ورانہ', desc: 'واضح، شائستہ، اور کاروباری انداز۔' },
      friendly: { label: 'دوستانہ', desc: 'گرمجوش، خوش اخلاق، اور آسان انداز۔' },
      persuasive: { label: 'قائل کرنے والا', desc: 'سیلز پر فوکس اور فوائد نمایاں کرتا ہے۔' },
      direct: { label: 'براہ راست', desc: 'مختصر، سیدھا، اور واضح انداز۔' },
      playful: { label: 'خوش مزاج', desc: 'ہلکا پھلکا، پُرجوش، اور دلکش انداز۔' },
      empathetic: { label: 'ہمدرد', desc: 'سمجھدار، صبر والا، اور مددگار انداز۔' },
    },
    completeBtn: 'ڈیش بورڈ کھولیں →',
  },
  loader: {
    title: 'آپ کا AI سیلز اسسٹنٹ تیار ہو رہا ہے',
    subtitle: 'ہم آپ کے کاروبار، پروڈکٹس، اور ترجیحات کے مطابق سوفا کو سیٹ اپ کر رہے ہیں۔',
    init: 'آن بورڈنگ شروع کی جا رہی ہے',
    wait: 'براہ کرم انتظار کریں، ہم آپ کی سیٹ اپ تیار کر رہے ہیں۔',
    finalWait: 'براہ کرم انتظار کریں، آخری مرحلہ مکمل کیا جا رہا ہے۔',
    steps: {
      catalog: 'آپ کا کیٹلاگ تیار کیا جا رہا ہے...',
      ai: 'AI پرسنالٹی لاگو کی جا رہی ہے...',
      meta: 'Meta API کے ساتھ کنکشن بنایا جا رہا ہے...',
      workspace: 'آپ کا ورک اسپیس تیار کیا جا رہا ہے...',
    },
  },
}

const admin = {
  nav: {
    workspace: 'ورک اسپیس',
    overview: 'جائزہ',
    broadcasts: 'براڈکاسٹ',
    chat: 'واٹس ایپ چیٹ',
    products: 'پروڈکٹس',
    catalog: 'کیٹلاگ',
    addProduct: 'پروڈکٹ شامل کریں',
    files: 'فائلیں',
    reports: 'رپورٹس',
    settings: 'سیٹنگز',
    notifications: 'اطلاعات',
    profile: 'پروفائل',
  },
  common: {
    currentView: 'موجودہ ویو',
    automationLive: 'آٹومیشن لائیو ہے',
    live: 'لائیو',
    previous: 'پچھلا',
    next: 'اگلا',
    preview: 'پری ویو',
    open: 'کھولیں',
    edit: 'ترمیم',
    active: 'فعال',
    inactive: 'غیر فعال',
    currencySymbol: 'روپے',
    currencyCode: 'PKR',
    starter: 'اسٹارٹر',
    growth: 'گروتھ',
    scale: 'اسکیل',
    units: 'یونٹ',
  },
  overview: {
    performance: 'ورک اسپیس کی کارکردگی',
    growth: 'پچھلے 7 دنوں سے',
    quickActions: {
      products: 'پروڈکٹس دیکھیں',
      settings: 'بزنس ٹون سیٹنگز',
      businessSettings: 'بزنس سیٹنگز',
      files: 'فائلیں دیکھیں'
    },
    stats: {
      activeConversations: 'فعال گفتگو',
      qualifiedLeads: 'کوالٹی لیڈز',
      automatedReplies: 'خودکار جوابات',
      avgResponseTime: 'اوسط جوابی وقت'
    },
    charts: {
      saleTrend: {
        title: 'گفتگو سے سیل تک کا رجحان',
        subtitle: 'لائیو ہفتہ وار آٹومیشن کی کارکردگی',
        pill: 'اس مہینے {{count}}%',
        tooltipLabel: 'تکمیل'
      },
      leadMix: {
        title: 'لیڈ کوالٹی مکس',
        subtitle: 'سوفا اب ان پر توجہ دے رہا ہے',
        label: 'لیڈ مکس'
      },
      leadsByDay: {
        title: 'روزانہ کی کوالٹی لیڈز',
        subtitle: 'ریئل ٹائم لیڈ کیپچر والیم',
        pill: 'لائیو اپ ڈیٹ'
      }
    },
    activity: {
      title: 'حالیہ آٹومیشن سرگرمی',
      subtitle: 'سوفا نے ابھی کیا ہینڈل کیا',
      feeds: {
        order: 'نئے آرڈر کا ارادہ پایا گیا',
        followup: 'خودکار فالو اپ بھیج دیا گیا',
        spam: 'سپیم انکوائری فلٹر کر دی گئی'
      }
    },
    donuts: {
      buyers: 'سنجیدہ خریدار',
      followups: 'فالو اپس',
      spam: 'سپیم فلٹرڈ'
    }
  },
  broadcasts: {
    title: 'براڈکاسٹ مہمات',
    subtitle: 'لیڈز، کسٹمرز اور مخصوص گروپس کو واٹس ایپ پیغامات بھیجیں — سوفا کے ذریعے مکمل طور پر خودکار۔',
    newBtn: 'نیا براڈکاسٹ',
    stats: {
      scheduled: 'شیڈولڈ',
      sentWeek: 'اس ہفتے بھیجے گئے',
      avgResponse: 'اوسط جوابی شرح'
    },
    workflow: {
      title: 'آٹومیشن ورک فلو',
      subtitle: 'سوفا واٹس ایپ پیغامات کو کس طرح کوالٹی لیڈز میں تبدیل کرتا ہے',
      nodes: {
        trigger: { label: 'آنے والا پیغام', sub: 'واٹس ایپ ٹرگر' },
        filter: { label: 'مقصد کا فلٹر', sub: 'سوفا لیڈ کی کوالٹی پہچانتا ہے' },
        route: { label: 'روٹ اور جواب', sub: 'خودکار جواب بھیج دیا گیا' },
        capture: { label: 'لیڈ کیپچرڈ', sub: 'CRM انٹری بن گئی' }
      },
      status: {
        active: 'فعال',
        processing: 'پروسیسنگ',
        delivered: 'ڈیلیورڈ',
        captured: 'کیپچرڈ'
      }
    },
    campaigns: {
      title: 'تمام مہمات',
      status: {
        scheduled: 'شیڈولڈ',
        draft: 'ڈرافٹ',
        sent: 'بھیج دی گئی'
      },
      meta: {
        audience: 'آڈینس: {{count}}',
        powered: 'سوفا آٹومیشن کے ذریعے',
        stats: 'اوپن: {{opens}} · جوابات: {{replies}}'
      }
    }
  },
  products: {
    title: 'پروڈکٹ کیٹلاگ',
    subtitle: 'سوفا کے ذریعے بائیر چیٹس میں شیئر کی گئی {{count}} آئٹم{{s}}',
    newBtn: 'پروڈکٹ شامل کریں',
    banner: 'سوفا آپ کے کیٹلاگ کو پروڈکٹ کی دستیابی، قیمت اور فیچرز کے سوالات کے خودکار جواب دینے کے لیے استعمال کرتا ہے۔',
    empty: {
      title: 'ابھی تک کوئی پروڈکٹ نہیں ہے',
      desc: 'اپنی پہلی پروڈکٹ شامل کریں تاکہ سوفا اسے واٹس ایپ پر خریداروں کے ساتھ شیئر کر سکے۔',
      btn: 'اپنی پہلی پروڈکٹ شامل کریں'
    },
    item: {
      price: '{{price}} روپے',
      priceLabel: 'قیمت',
      stockLabel: 'کل اسٹاک',
      skuLabel: 'آئٹم آئی ڈی',
      specsTitle: 'اہم تفصیلات',
      editBtn: 'تفصیلات بدلیں',
      mediaLabel: 'میڈیا کی قسم',
      view: 'دیکھیں',
      active: 'فعال',
      inactive: 'غیر فعال',
      activate: 'فعال کریں',
      deactivate: 'غیر فعال کریں',
      modalTitle: 'پروڈکٹ کا جائزہ',
      noDescription: 'ابھی تک کوئی تفصیل شامل نہیں کی گئی۔',
      none: 'کوئی نہیں',
      deleteConfirmTitle: 'پروڈکٹ حذف کریں؟',
      deleteConfirmDesc: 'یہ عمل واپس نہیں لیا جا سکتا۔ اس پروڈکٹ سے وابستہ تمام ڈیٹا مستقل طور پر ہٹا دیا جائے گا۔',
      deleteConfirmBtn: 'جی ہاں، پروڈکٹ حذف کریں',
      deleteCancelBtn: 'ابھی رہنے دیں',
      deleteSuccess: 'پروڈکٹ کامیابی سے حذف کر دی گئی',
    },
    controls: {
      searchPlaceholder: 'پروڈکٹس تلاش کریں...',
      show: 'دکھائیں',
      perPage: 'صفحہ',
      all: 'تمام',
      pageInfo: '{{total}} پروڈکٹس میں سے {{start}}-{{end}}',
      filters: {
        all: 'تمام',
        active: 'فعال',
        inactive: 'غیر فعال'
      },
      empty: {
        title: 'کوئی مماثل پروڈکٹ نہیں ملی',
        desc: 'کوئی اور لفظ تلاش کریں یا فلٹر تبدیل کریں۔'
      }
    }
  },
  files: {
    title: 'فائلز لائبریری',
    subtitle: 'سوفا کے جوابات اور میڈیا شیئرنگ کے لیے {{count}} فائل{{s}} تیار',
    newBtn: 'فائل شامل کریں',
    banner: 'اپنی تصاویر، ویڈیوز، PDFs اور دیگر فائلیں ایک جگہ رکھیں تاکہ سوفا واٹس ایپ پر خریداروں کی رہنمائی کرتے ہوئے صحیح میڈیا استعمال کر سکے۔',
    empty: {
      title: 'ابھی تک کوئی فائل نہیں ہے',
      desc: 'اپنی پہلی فائل شامل کریں تاکہ سوفا اسے بائیر چیٹس اور پروڈکٹ سپورٹ میں استعمال کر سکے۔',
      btn: 'اپنی پہلی فائل شامل کریں'
    },
    item: {
      view: 'دیکھیں',
      active: 'فعال',
      inactive: 'غیر فعال',
      activate: 'فعال کریں',
      deactivate: 'غیر فعال کریں',
      modalTitle: 'فائل کا جائزہ',
      noDescription: 'ابھی تک کوئی تفصیل شامل نہیں کی گئی۔',
      none: 'کوئی نہیں',
      mediaLabel: 'فائل کی قسم',
      fileNameLabel: 'فائل کا نام',
      types: {
        image: 'تصویر',
        video: 'ویڈیو',
        file: 'فائل'
      }
    },
    controls: {
      searchPlaceholder: 'فائلیں تلاش کریں...',
      show: 'دکھائیں',
      perPage: 'صفحہ',
      all: 'تمام',
      pageInfo: '{{total}} فائلوں میں سے {{start}}-{{end}}',
      filters: {
        all: 'تمام',
        image: 'تصاویر',
        video: 'ویڈیوز',
        file: 'فائلیں'
      },
      empty: {
        title: 'کوئی مماثل فائل نہیں ملی',
        desc: 'کوئی اور لفظ تلاش کریں یا فائل کی قسم کا فلٹر تبدیل کریں۔'
      }
    },
    modal: {
      titleAdd: 'نئی فائل شامل کریں',
      titleUpdate: 'فائل اپ ڈیٹ کریں',
      subtitleAdd: 'تصویر، ویڈیو یا PDF اپ لوڈ کریں جسے سوفا چیٹ میں شیئر کر سکے۔',
      subtitleUpdate: 'بائیرز کی مدد کے دوران سوفا جو فائل تفصیلات استعمال کرتا ہے انہیں ایڈٹ کریں۔',
      mediaLabel: 'فائل میڈیا',
      mediaHelp: 'اپ لوڈ کرنے کے لیے کلک کریں',
      nameLabel: 'فائل کا نام',
      namePlaceholder: 'مثلاً سمر کیٹلاگ 2026',
      descLabel: 'تفصیل',
      descPlaceholder: 'مثلاً نئی آمد اور اپ ڈیٹ شدہ قیمتوں کے لیے PDF کیٹلاگ۔',
      saveBtn: 'فائل محفوظ کریں',
      updateBtn: 'فائل اپ ڈیٹ کریں',
      invalidMediaType: 'براہ کرم درست تصویر، ویڈیو یا PDF فائل اپ لوڈ کریں'
    }
  },
  reports: {
    title: 'سیلز رپورٹس',
    subtitle: 'ٹریک کریں کہ سوفا کس طرح واٹس ایپ گفتگو کو آرڈرز، آمدنی اور تیز جوابات میں تبدیل کرتا ہے۔',
    exportBtn: 'رپورٹ ایکسپورٹ کریں',
    stats: {
      revenue: 'حاصل کردہ آمدنی',
      orderRate: 'لیڈ سے آرڈر کی شرح',
      resolved: 'حل شدہ چیٹس'
    },
    chart: {
      title: 'سوفا کے ذریعے حاصل کردہ آمدنی',
      subtitle: 'خودکار گفتگو سے حاصل ہونے والی روزانہ کی ٹریک شدہ سیلز',
      pill: 'اس ہفتے'
    },
    table: {
      title: 'ہفتہ وار کارکردگی کا جائزہ',
      subtitle: 'چیٹ والیم، آرڈرز، کنورژن ریٹ اور آٹومیشن کے ذریعے حاصل ہونے والی روزانہ کی آمدنی۔',
      headers: {
        day: 'دن',
        chats: 'چیٹس',
        orders: 'آرڈرز',
        conversion: 'کنورژن',
        revenue: 'آمدنی'
      }
    }
  },
  settings: {
    title: 'آٹومیشن سیٹنگز',
    subtitle: 'اپنے سوفا کا لہجہ، الرٹ ترجیحات اور آٹومیشن کے اصولوں کو مینیج کریں۔',
    sections: {
        business: {
          title: 'بزنس سیٹ اپ',
          subtitle: 'اپنی کیٹیگری تبدیل کرنا چاہتے ہیں یا گائیڈڈ سیٹ اپ دوبارہ شروع کرنا چاہتے ہیں؟ یہاں سے اپ ڈیٹ کریں۔',
          button: 'بزنس تبدیل کریں',
          current: 'موجودہ بزنس',
          modalTitle: 'اپنے بزنس کی کیٹیگری اپ ڈیٹ کریں',
          modalSubtitle: 'وہ بزنس ٹائپ منتخب کریں جسے سوفا جوابات، بائیر فلٹرنگ اور پروڈکٹ کے سیاق و سباق کے لیے استعمال کرے۔',
          customCategoryLabel: 'اپنی مرضی کی بزنس کیٹیگری',
          save: 'تبدیلیاں محفوظ کریں',
          cancel: 'منسوخ کریں',
          close: 'بند کریں'
        },
      voice: {
        title: 'AI آواز اور لہجہ',
        subtitle: 'کنٹرول کریں کہ سوفا آپ کے کسٹمرز سے کس طرح بات کرتا ہے',
        current: 'موجودہ آواز',
        button: 'آواز تبدیل کریں',
        modalTitle: 'آواز کا سیٹ اپ'
      },
      rules: {
        title: 'آٹومیشن کے اصول'
      }
    },
    tones: {
      noToneSelected: 'کوئی لہجہ منتخب نہیں کیا گیا',
      professional: { label: 'پیشہ ورانہ', desc: 'نکھرا ہوا اور کاروباری انداز' },
      friendly: { label: 'دوستانہ', desc: 'گرمجوش اور خوش اخلاق' },
      direct: { label: 'براہ راست', desc: 'مختصر اور واضح' },
      persuasive: { label: 'قائل کرنے والا', desc: 'سیلز اور فوائد پر فوکس' },
      playful: { label: 'خوش مزاج', desc: 'ہلکا پھلکا اور پُرجوش' },
      empathetic: { label: 'ہمدرد', desc: 'پُرسکون اور سمجھدار' },
      creative: { label: 'تخلیقی', desc: 'جذباتی اور باہمت' }
    },
    rows: {
      autoReply: { title: 'خریداروں کو خودکار جواب', desc: 'سوفا کے ذریعے واٹس ایپ کے نئے پیغامات کا فوراً جواب دیں۔' },
      spamFilter: { title: 'سپیم فلٹر', desc: 'سپیم یا بوٹ پیغامات کو خودکار طور پر پہچانیں اور نظر انداز کریں۔' },
      alerts: { title: 'ہائی-انٹینٹ الرٹس', desc: 'جب سوفا سنجیدہ خریدار کو پہچانے تو اطلاع حاصل کریں۔' },
      tfa: { title: 'ٹو-فیکٹر اتھارٹیکیشن', desc: 'اپنے ورک اسپیس میں سیکیورٹی کی ایک اضافی تہہ شامل کریں۔' }
    },
    comingSoon: 'جلد آ رہا ہے'
  },
  notifications: {
    title: 'حالیہ سرگرمی',
    readAll: 'سب کو پڑھا ہوا قرار دیں'
  },
  chat: {
    title: 'واٹس ایپ ان باکس',
    activeStatus: 'فعال',
    searchPlaceholder: 'گفتگو تلاش کریں...',
    emptyState: 'دیکھنے کے لیے کوئی گفتگو منتخب کریں',
    sovaLabel: 'سوفا AI',
    status: {
      automated: 'خودکار',
      captured: 'لیڈ کیپچرڈ'
    },
    previewLabel: 'واٹس ایپ چیٹ پری ویو',
    defaultReply: 'ہیلو! رابطہ کرنے کا شکریہ۔ میں سوفا ہوں، آپ کا سیلز اسسٹنٹ۔ میں آج آپ کی کیا مدد کر سکتا ہوں؟'
  },
  profile: {
    header: {
      label: 'سوفا ورک اسپیس پروفائل',
      desc: 'اپنی ورک اسپیس شناخت، زبان اور آٹومیشن کی تیاری کو ایک جگہ سے مینیج کریں۔'
    },
    plan: '{{name}} پلان',
    activity: {
      products: 'منسلک پروڈکٹس',
      automations: 'فعال آٹومیشنز',
      alerts: 'بغیر پڑھی ہوئی لیڈ الرٹس'
    },
    details: {
      title: 'ورک اسپیس کی تفصیلات',
      language: 'موجودہ زبان',
      products: {
        label: 'کیٹلاگ میں پروڈکٹس',
        ready: '{{count}} خودکار جوابات کے لیے تیار ہیں'
      },
      tones: {
        label: 'بزنس ٹون پروفائلز',
        ready: '{{count}} ٹون سیٹنگ {{s}} کنفیگر ہو گئی'
      }
    },
    business: {
      title: 'بزنس پروفائل',
      cancel: 'منسوخ کریں',
      save: 'محفوظ کریں',
      edit: 'ترمیم کریں',
      photoAlt: 'بزنس پروفائل',
      noPhoto: 'بزنس کی تصویر موجود نہیں',
      uploadPhoto: 'تصویر اپلوڈ کریں',
      removePhoto: 'ہٹائیں',
      nameLabel: 'بزنس کا نام',
      namePlaceholder: 'مثال: نور عبایا ہاؤس',
      emptyName: 'اپنا بزنس نیم درج کریں',
      descriptionLabel: 'بزنس کی تفصیل',
      descriptionPlaceholder: 'خریداروں کو بتائیں کہ آپ کیا فروخت کرتے ہیں اور لوگ آپ کو کیوں منتخب کرتے ہیں۔',
      emptyDescription: 'بزنس کی مختصر تفصیل شامل کریں',
      locationLabel: 'بزنس لوکیشن',
      locationPlaceholder: 'مثال: کراچی، پاکستان',
      emptyLocation: 'اپنی لوکیشن درج کریں'
    },
    summary: {
      title: 'پروفائل کا خلاصہ',
      desc: 'یہ ورک اسپیس واٹس ایپ گفتگو کو مینیج کرنے، کوالٹی لیڈز کو روٹ کرنے اور سوفا کے ذریعے جوابات کو خودکار بنانے کے لیے تیار ہے۔'
    }
  },
  drawer: {
    title: 'اطلاعات',
    empty: 'کوئی نئی نوٹیفکیشن نہیں ہے',
    readAll: 'سب کو پڑھا ہوا قرار دیں'
  },
  celebration: {
    eyebrow: 'سوفا لانچ',
    title: 'آپ کا ورک اسپیس تیار ہے',
    checklist: {
      whatsapp: 'واٹس ایپ آٹومیشن کنیکٹ ہو گیا',
      filtering: 'لیڈ فلٹرنگ فعال ہے',
      followups: 'فالو اپس چلنے کے لیے تیار ہیں'
    },
    headline: 'آپ کی چیٹس اب <gradient>خودکار</gradient> ہیں',
    desc: 'سوفا اب آپ کے ورک اسپیس میں لائیو ہے۔ یہ تیزی سے جواب دے سکتا ہے، سنجیدہ خریداروں کو پہچان سکتا ہے، اور آپ کی واٹس ایپ سیلز کو جاری رکھ سکتا ہے چاہے آپ کی ٹیم آف لائن ہو۔',
    features: {
      replies: 'فوری خودکار جوابات فعال ہیں',
      whatsapp: 'آپ کی واٹس ایپ چیٹس اب خودکار ہیں',
      buyers: 'سنجیدہ خریداروں کو پہلے نمایاں کیا جائے گا'
    },
    btn: 'ڈیش بورڈ پر جائیں'
  },
  mockData: {
    broadcasts: {
      campaigns: [
        { name: 'رمضان آفر', audience: '1,240 رابطے', sendAt: 'آج، شام 7:00 بجے' },
        { name: 'نیا کیٹلاگ', audience: '860 رابطے', sendAt: 'منظوری کا انتظار ہے' },
        { name: 'وی آئی پی فالو اپ', audience: '420 رابطے', sendAt: 'کل، شام 5:30 بجے' }
      ]
    },
    notifications: [
      { title: 'نئی ہائی-انٹینٹ لیڈ', desc: 'فیضان احمد پریمیم سلک اسکارف کی بڑی قیمت کے بارے میں پوچھ رہے ہیں۔', time: '2 منٹ پہلے' },
      { title: 'براڈکاسٹ مکمل', desc: "'رمضان آفر' مہم 1,240 رابطوں کو کامیابی سے بھیج دی گئی۔", time: '1 گھنٹہ پہلے' },
      { title: 'سوفا نالج اپ ڈیٹ', desc: 'نئی پروڈکٹ "کاٹن ٹی شرٹ" آپ کے کیٹلاگ میں شامل کر دی گئی ہے اور AI جوابات کے لیے تیار ہے۔', time: '3 گھنٹے پہلے' },
      { title: 'آنے والا پیغام', desc: 'سارہ خان نے پیغام بھیجا۔ سوفا اسے خودکار طور پر ہینڈل کر رہا ہے۔', time: '5 گھنٹے پہلے' }
    ],
    chats: [
      { user: 'فیضان احمد', message: 'ہیلو، اس جیکٹ کی قیمت کیا ہے؟', time: '14:23' },
      { user: 'سارہ خان', message: 'کیا آپ کے پاس نیلے رنگ میں سائز M دستیاب ہے؟', time: '12:05' },
      { user: 'زبیر شاہ', message: 'میں 3 پیس کا آرڈر دینا چاہتا ہوں۔', time: '09:44' },
      { user: 'نادیہ ملک', message: 'براہ کرم کیٹلاگ بھیج سکتے ہیں؟', time: 'کل' },
      { user: 'بلال رضا', message: 'آپ کے ڈیلیوری چارجز کیا ہیں؟', time: 'کل' }
    ],
    reports: {
      stats: {
        revenue: '8.4 لاکھ روپے',
        orderRate: '37%',
        resolved: '1,284',
        revenueChange: '+18%',
        orderRateChange: '+6%',
        resolvedChange: '+22%'
      },
      revenueLines: ['82 ہزار روپے', '95 ہزار روپے', '1.1 لاکھ روپے', '1.3 لاکھ روپے', '1.5 لاکھ روپے'],
      rows: [
        { revenue: '82 ہزار روپے', rate: '16.9%' },
        { revenue: '95 ہزار روپے', rate: '17.7%' },
        { revenue: '1.1 لاکھ روپے', rate: '17.4%' },
        { revenue: '1.3 لاکھ روپے', rate: '18.8%' },
        { revenue: '1.5 لاکھ روپے', rate: '20.0%' }
      ]
    },
    drawer: [
      { text: 'واٹس ایپ پر نئی لیڈ "فیضان" کیپچر ہوئی!', time: '2 منٹ پہلے' },
      { text: 'آپ کے کیٹلاگ میں 5 آئٹمز اسٹاک سے باہر ہیں۔', time: '1 گھنٹہ پہلے' },
      { text: 'آج سوفا آٹومیشن کی شرح میں 12% اضافہ ہوا!', time: '3 گھنٹے پہلے' },
      { text: 'سارہ ملک "پریمیم اسکارف" میں دلچسپی رکھتی ہیں۔', time: '5 گھنٹے پہلے' }
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
        time: '11 سیکنڈ',
        timeChange: '-34%'
      },
      activity: [
        { time: '2 منٹ پہلے', meta: 'الیکٹرانکس - 5 یونٹس کا بڑا آرڈر' },
        { time: '9 منٹ پہلے', meta: 'کپڑے - کارٹ ریکوری مہم' },
        { time: '14 منٹ پہلے', meta: 'بار بار آنے والا کم اہمیت والا پیغام ہٹا دیا گیا' }
      ]
    },
    threads: {
      3: [
        { from: 'user', text: 'میں 3 پیس کا آرڈر دینا چاہتا ہوں۔' },
        { from: 'sova', text: "بہترین انتخاب! میں نے آپ کے 3 پیس کا آرڈر نوٹ کر لیا ہے۔ کیا میں پوچھ سکتا ہوں کہ آپ کس پروڈکٹ کا ذکر کر رہے ہیں؟" },
        { from: 'user', text: 'پریمیم سلک اسکارف۔' },
        { from: 'sova', text: "بہترین! میں 3x پریمیم سلک اسکارف کا انوائس تیار کر دوں گا۔ کیا میں آپ کا آرڈر کنفرم کر دوں؟" }
      ]
    }
  }
}
export { onboarding, admin }

admin.upgrade = {
  navLabel: 'اپ گریڈ پلان',
  cta: 'پلان اپ گریڈ کریں',
  mobileCta: 'اپ گریڈ',
  eyebrow: 'پلان اپ گریڈ',
  title: 'ایسا پلان منتخب کریں جو آپ کی واٹس ایپ سیلز کے ساتھ بڑھے',
  subtitle: 'جیسے ہی آپ کے بزنس کا والیم بڑھے، مزید آٹومیشن، زیادہ استعمال کی حد، اور مضبوط AI سپورٹ حاصل کریں۔',
  currentPlanLabel: 'موجودہ پلان',
  currentPlanValue: '{{plan}} پلان',
  currentPlanHint: 'زیادہ رسائی اور آٹومیشن کے لیے کسی بھی وقت اپ گریڈ کریں۔',
  popular: 'سب سے مقبول',
  choosePlan: 'پلان منتخب کریں',
  currentPlanButton: 'موجودہ پلان',
  compareTitle: 'ٹیمیں اپ گریڈ کیوں کرتی ہیں',
  compareDesc: 'جیسے جیسے آپ کی گفتگو بڑھتی ہے، سوفا آپ کی ٹیم کو سست کیے بغیر زیادہ جوابات، زیادہ لیڈز اور زیادہ سیلز ورک فلو کو سنبھال سکتا ہے۔',
  summaryTitle: 'اپ گریڈ کیسے مدد کرتا ہے',
  summaryDesc: 'تیز تر سپورٹ اور مضبوط AI کوریج کے ساتھ بنیادی آٹومیشن سے مکمل واٹس ایپ گروتھ آپریشنز کی طرف بڑھیں۔',
  steps: {
    1: { title: 'اپنے موجودہ سیٹ اپ سے شروع کریں', desc: 'اپنے کیٹلاگ، فائلوں، ان باکس اور ٹون سیٹنگز کو بالکل ویسا ہی رکھیں۔' },
    2: { title: 'فوری طور پر مزید گنجائش حاصل کریں', desc: 'بڑے پلانز پیغامات کا زیادہ والیم، بہتر ورک فلو اور ٹیم کے لیے بہتر ویزیبیلٹی فراہم کرتے ہیں۔' },
    3: { title: 'اضافی دستی کام کے بغیر اسکیل کریں', desc: 'زیادہ خریداروں، زیادہ فالو اپس اور کنورژن کے زیادہ مواقع کو مینیج کرنے کے لیے سوفا کا استعمال کریں۔' },
  },
  benefits: {
    1: { title: 'مزید خودکار گفتگو', desc: 'اپنی ٹیم پر دباؤ ڈالے بغیر واٹس ایپ جوابات کی بڑی تعداد کو سنبھالیں۔' },
    2: { title: 'مضبوط AI ہینڈلنگ', desc: 'سوفا کو لیڈز کو کوالیفائی کرنے، خریداروں کی رہنمائی کرنے اور بار بار ہونے والے دستی کام کو کم کرنے کے لیے مزید گنجائش دیں۔' },
    3: { title: 'سیلز کی بہتر ویزیبیلٹی', desc: 'گروتھ کو ٹریک کریں، رسپانس کی کارکردگی مانیٹر کریں اور سمجھیں کہ کنورژن کہاں بہتر ہو رہی ہے۔' },
    4: { title: 'بڑھتے ہوئے بزنسز کے لیے تیار', desc: 'جب آپ کا والیم بڑھے تو اپ گریڈ کریں تاکہ ورک فلو ہموار اور قابل بھروسہ رہے۔' },
  },
  plans: {
    starter: {
      badge: 'اسٹارٹر',
      name: 'اسٹارٹر',
      price: '$19/مہینہ',
      desc: 'ان چھوٹی ٹیموں کے لیے بہترین جو واٹس ایپ آٹومیشن شروع کر رہی ہیں۔',
      features: {
        1: 'ہر ماہ 1,000 تک خودکار جوابات',
        2: 'بنیادی پروڈکٹ اور فائل شیئرنگ سپورٹ',
        3: 'معیاری آٹومیشن رولز کے ساتھ لیڈ ڈیٹیکشن',
        4: 'ضروری رپورٹنگ کے ساتھ سنگل ورک اسپیس',
      },
    },
    growth: {
      badge: 'گروتھ',
      name: 'گروتھ',
      price: '$49/مہینہ',
      desc: 'بڑھتے ہوئے بزنسز کے لیے جو زیادہ ایکٹو بائیر فلو کو سنبھال رہے ہیں۔',
      features: {
        1: 'ہر ماہ 5,000 تک خودکار جوابات',
        2: 'پراڈکٹ کیٹلاگ، فائلز اور میڈیا کے ایڈوانسڈ ورک فلوز',
        3: 'بہتر لیڈ اسکورنگ اور فالو اپ آٹومیشن',
        4: 'ترجیحی اینالیٹکس اور تیز تر سپورٹ رسپانس',
      },
    },
    scale: {
      badge: 'اسکیل',
      name: 'اسکیل',
      price: '$99/مہینہ',
      desc: 'بڑی سیلز ٹیموں کے لیے جو واٹس ایپ کا بڑا والیم مینیج کر رہی ہیں۔',
      features: {
        1: 'ہائی والیم جوابات اور مہمات کا اسکیل',
        2: 'پروڈکٹس، فائلز اور ان باکس میں گہرا آٹومیشن لاجک',
        3: 'زیادہ تفصیلی رپورٹنگ اور سیلز ویزیبیلٹی',
        4: 'ترجیحی آن بورڈنگ اور مخصوص کامیابی کی سپورٹ',
      },
    },
  },
}

admin.nav.catalog = 'کیٹلاگ'
admin.nav.addProduct = 'پروڈکٹ شامل کریں'
admin.common = admin.common || {}
admin.common.locked = 'مقفل'
admin.common.unlockToView = 'دیکھنے کے لیے ان لاک کریں'

admin.overview.quickActions.businessSettings = 'بزنس سیٹنگز'
admin.overview.quickActions.products = 'پروڈکٹس دیکھیں'
admin.overview.quickActions.files = 'فائلیں دیکھیں'
admin.chat.previewLabel = 'واٹس ایپ چیٹ پری ویو'
admin.chat.defaultReply = "ہیلو! رابطہ کرنے کا شکریہ۔ میں سوفا ہوں، آپ کا سیلز اسسٹنٹ۔ میں آج آپ کی کیا مدد کر سکتا ہوں؟"

admin.addProductOverview = {
  breadcrumbs: {
    home: 'ہوم',
    catalog: 'شاپ لسٹ',
    add: 'آئٹم شامل کریں',
    edit: 'آئٹم سیٹنگز'
  },
  titleAdd: 'شاپ میں نئی آئٹم شامل کریں',
  titleEdit: 'آئٹم سیٹنگز',
  subtitleAdd: 'اپنی شاپ لسٹ میں نئی آئٹم شامل کریں تاکہ خریدار اسے واٹس ایپ پر دیکھ سکیں۔',
  subtitleEdit: 'اس آئٹم کی تفصیل، قیمت یا اسٹاک تبدیل کریں۔',
  backToCatalog: 'شاپ کیٹلاگ پر واپس جائیں',
  steps: {
    category: 'کیٹیگری منتخب کریں',
    dynamic: 'اضافی تفصیلات',
    basics: 'بنیادی معلومات',
    media: 'تصاویر',
    variants: 'آپشنز',
    pricing: 'قیمت اور اسٹاک'
  },
  sections: {
    basics: {
      title: '1. عمومی تفصیلات',
      subtitle: 'آئٹم کا نام اور تفصیل درج کریں۔',
      nameLabel: 'آئٹم کا نام',
      namePlaceholder: 'مثلاً کاٹن کرتا',
      descriptionLabel: 'اس آئٹم کے بارے میں',
      descriptionPlaceholder: 'بتائیں کہ یہ آئٹم کیا ہے اور لوگ اسے کیوں پسند کرتے ہیں۔',
      brandLabel: 'برانڈ کا نام',
      brandPlaceholder: 'مثلاً سوفا موڈسٹ'
    },
    category: {
      title: 'کیٹیگری اور قسم',
      subtitle: 'منتخب کریں کہ یہ آئٹم آپ کی شاپ میں کہاں آتی ہے۔',
      industryLabel: 'صنعت',
      desc: 'اقسام اور معیار',
      categoryLabel: 'کیٹیگری',
      subCategoryLabel: 'قسم',
      categoryPlaceholder: 'کیٹیگری منتخب کریں',
      subCategoryPlaceholder: 'قسم منتخب کریں',
      customCategoryLabel: 'کسٹم کیٹیگری کا نام',
      customCategoryPlaceholder: 'مثلاً ہینڈ میڈ کرافٹس',
      customSubCategoryLabel: 'کسٹم قسم کا نام',
      customSubCategoryPlaceholder: 'مثلاً کروشیا',
      newSubCategory: 'نئی قسم شامل کریں',
      customSetupTitle: 'کسٹم کیٹیگری کنفیگریشن',
      customSetupSubtitle: 'طے کریں کہ یہ کسٹم آئٹم کیسے کام کرے گی',
      productTypeLabel: 'پروڈکٹ کی درجہ بندی',
      typePhysical: 'طبعی پروڈکٹ',
      typeDigital: 'ڈیجیٹل اثاثہ',
      typeService: 'سروس',
      typeSubscription: 'سبسکرپشن',
      promptNewType: 'نئی پروڈکٹ کی قسم درج کریں:',
      addNewType: 'نئی قسم شامل کریں',
      trackStock: 'اسٹاک ٹریک کریں',
      taxable: 'ٹیکس کے قابل',
      weightLabel: 'وزن (کلو)',
      customFieldsTitle: 'مزید تفصیلات',
      addFieldBtn: 'نئی تفصیل شامل کریں',
      fieldLabelPlaceholder: 'مثلاً میٹریل',
      fieldValuePlaceholder: 'مثلاً 100% کاٹن',
      noCustomFields: 'ابھی تک کوئی اضافی تفصیل شامل نہیں کی گئی۔'
    },
    brandIdentity: {
      title: '2. برانڈ اور انڈسٹری',
      subtitle: 'سیٹ کریں کہ یہ آئٹم کس برانڈ اور انڈسٹری سے تعلق رکھتی ہے۔'
    },
    dynamic: {
      title: 'آئٹم کی خصوصیات',
      subtitle: 'آپ کی منتخب کردہ کیٹیگری کی بنیاد پر اضافی سوالات۔'
    },
    media: {
      title: 'پروڈکٹ میڈیا',
      subtitle: 'اپنے آئٹم کی تصاویر یا ویڈیوز شامل کریں۔',
      upload: 'میڈیا شامل کریں',
      primary: 'بنیادی تصویر',
      makePrimary: 'بنیادی بنائیں',
      dropTitle: 'اپلوڈ کرنے کے لیے چھوڑیں',
      dropSubtitle: 'تصاویر یا ویڈیوز شامل کرنے کے لیے یہاں چھوڑیں',
      editorTitle: 'میڈیا ایڈیٹر',
      editorSubtitle: 'اپنی پروڈکٹ کی تصاویر کو کراپ اور ایڈجسٹ کریں',
    },
      variants: {
        title: 'پروڈکٹ کی اقسام',
        subtitle: 'سائز، رنگ اور میٹریل کے مختلف سیٹ متعین کریں۔',
        desc: 'دستیاب سائز اور رنگوں کے سیٹ',
        rowLabel: 'اقسام کا سیٹ',
        inputPlaceholder: 'لکھ کر Enter دبائیں',
        expandAll: 'سب کھولیں',
        collapseAll: 'سب بند کریں',
        newGroupLabel: 'نیا ویرینٹ گروپ',
        addGroup: 'ویرینٹ گروپ شامل کریں',
        saveVariant: 'ویرینٹ محفوظ کریں',
        sizeLabel: 'سائز',
        colorsLabel: '{{count}} رنگ',
        colorLabel: '{{count}} رنگ',
        noVariantsFound: 'اس زمرے کے لیے کوئی پروڈکٹ کی مختلف قسمیں نہیں ملییں',
        noStandardFields: 'اس زمرے کے لیے کوئی معیاری مختلف فیلڈز (سائز، رنگ وغیرہ) متعین نہیں ہیں۔',
        noVariantFields: 'اس زمرے کے لیے کوئی معیاری مختلف فیلڈز (سائز، رنگ وغیرہ) متعین نہیں ہیں۔',
        noVariantFieldsSubtitle: 'آپ اب بھی نیچے حسب ضرورت تفصیلات شامل کر سکتے ہیں۔',
      },
    pricing: {
      title: 'قیمت اور اسٹاک',
      subtitle: 'اپنی شاپ میں قیمت اور کل اسٹاک کی تعداد سیٹ کریں۔',
      priceLabel: 'بیچنے کی قیمت',
      salePriceLabel: 'رعایتی قیمت (اختیاری)',
      discountLabel: 'ڈسکاؤنٹ',
      stockLabel: 'کل اسٹاک',
      stockPlaceholder: 'تعداد درج کریں',
      currentStockLabel: 'موجودہ اسٹاک',
      minStockLabel: 'کم اسٹاک الرٹ',
      skuLabel: 'آئٹم آئی ڈی (اختیاری)',
      skuPlaceholder: 'مثلاً SKU-1234',
      skuHelp: 'عالمی آئٹم شناختی کوڈ',
      minOrderLabel: 'کم از کم آرڈر'
    },
    summary: {
      title: 'شاپ پری ویو',
      subtitle: 'خریدار اسے واٹس ایپ پر اس طرح دیکھیں گے۔',
      untitled: 'بغیر نام کا آئٹم',
      mediaCount: '{{count}} تصویر',
      mediaCount_other: '{{count}} تصاویر',
      pathLabel: 'آئٹم پاتھ',
      industryLabel: 'بزنس کیٹیگری',
      listingHealth: 'لسٹ کی حالت',
      visibility: 'نمایاں ہونا',
      marketLive: 'دکان پر فعال ہے',
      inventoryState: 'اسٹاک کی حالت',
      statusReady: 'اسٹاک میں موجود',
      statusOutOfStock: 'اسٹاک ختم ہو گیا',
      lowStock: 'اسٹاک کم ہے!',
      stable: 'اسٹاک ٹھیک ہے'
    },
    actions: {
      saveDraft: 'بعد کے لیے محفوظ کریں',
      schedule: 'تاریخ سیٹ کریں',
      submitAdd: 'شاپ میں شامل کریں',
      submitEdit: 'تبدیلیاں محفوظ کریں'
    },
    fields: {
      selectOption: 'آپشن منتخب کریں',
      customValue: 'اپنی مرضی کی قیمت',
      customValuePlaceholder: 'اپنی قیمت درج کریں...',
      colorNotFound: 'رنگ کا نام نہیں پہچانا گیا۔ اسے لیبل کے طور پر شامل کیا جائے گا۔'
    }
  },
  categories: {
    electronics: 'الیکٹرانکس',
    clothing: 'کپڑے',
    surgical_instruments: 'سرجیکل اوزار',
    medical_instruments: 'طبی سامان',
    dry_fruits: 'ڈرائی فروٹس',
    decoration: 'ڈیکوریشن',
    toys: 'کھلونے',
    jewellery: 'زیورات',
    books_stationary: 'کتب اور اسٹیشنری',
    hardware: 'ہارڈویئر',
    fireworks: 'آتش بازی'
  },
  subcategories: {
    mobile: 'موبائل',
    laptops: 'لیپ ٹاپ',
    accessories: 'ایکسسریز',
    abayas: 'عبایا',
    scarves: 'اسکارف',
    casualwear: 'کیژول ویئر',
    formalwear: 'فارمل ویئر',
    diagnostic: 'تشخیصی',
    clinical: 'کلینیکل',
    equipment: 'سامان',
    ophthalmic: 'آنکھوں کا',
    dental: 'دانتوں کا',
    orthopedic: 'ہڈیوں کا',
    generalSurgical: 'عام سرجیکل',
    nuts: 'گری دار میوے',
    dates: 'کھجوریں',
    giftBoxes: 'گفٹ باکسز',
    eventDecor: 'ایونٹ ڈیکور',
    homeDecor: 'ہوم ڈیکور',
    partyKits: 'پارٹی کٹس',
    educational: 'تعلیمی',
    dolls: 'گڑیا',
    actionFigures: 'ایکشن فگرز',
    rcToys: 'آر سی کھلونے',
    rings: 'انگوٹھیاں',
    necklaces: 'ہار',
    bracelets: 'بریسلٹس',
    earrings: 'بالیاں',
    books: 'کتابیں',
    stationary: 'اسٹیشنری',
    artSupplies: 'آرٹ کا سامان',
    powerTools: 'پاور ٹولز',
    handTools: 'دستی اوزار',
    construction: 'تعمیراتی',
    rockets: 'راکٹ',
    sparklers: 'پھلجڑیاں',
    fountains: 'فوارے'
  },
  variantNames: {
    size: 'سائز',
    color: 'رنگ',
    storage: 'اسٹوریج',
    model: 'ماڈل',
    pack: 'پیک کا سائز',
    material: 'مٹیریل',
    purity: 'خالصیت',
    metal: 'دھات',
    ageGroup: 'عمر کا گروپ',
    format: 'فارمیٹ',
    language: 'زبان',
    warranty: 'وارنٹی',
    steelGrade: 'اسٹیل گریڈ',
    sterility: 'جراثیم کشی',
    category: 'کیٹیگری'
  },
  fields: {
    ram: { label: 'ریم', placeholder: 'مثلاً 8 جی بی' },
    storage: { label: 'اسٹوریج', placeholder: 'مثلاً 256 جی بی' },
    battery: { label: 'بیٹری', placeholder: 'مثلاً 5000 mAh' },
    size: { label: 'سائز', placeholder: 'مثلاً S, M, L' },
    color: { label: 'رنگ', placeholder: 'مثلاً کالا، سفید' },
    material: { label: 'مٹیریل', placeholder: 'مثلاً کاٹن مکس' },
    purity: { label: 'خالصیت', placeholder: 'مثلاً 21K, 22K' },
    metal: { label: 'دھات', placeholder: 'مثلاً سونا، چاندی' },
    weight: { label: 'وزن', placeholder: 'مثلاً 10 گرام' },
    ageGroup: { label: 'عمر کا گروپ', placeholder: 'مثلاً 3-6 سال' },
    batteryReq: { label: 'بیٹری کی ضرورت', placeholder: 'ہاں/نہیں' },
    grade: { label: 'گریڈ', placeholder: 'مثلاً پریمیم' },
    origin: { label: 'تیاری کا مقام', placeholder: 'مثلاً ہنزہ ویلی' },
    packSize: { label: 'پیک سائز', placeholder: 'مثلاً 500 گرام' },
    theme: { label: 'تھیم', placeholder: 'مثلاً منیمل گولڈ' },
    deliveryWindow: { label: 'ڈیلیوری کا وقت', placeholder: 'مثلاً 2-3 دن' },
    author: { label: 'مصنف', placeholder: 'مثلاً جے کے رولنگ' },
    format: { label: 'فارمیٹ', placeholder: 'مثلاً ہارڈ کور' },
    language: { label: 'زبان', placeholder: 'مثلاً اردو' },
    techSpecs: { label: 'ٹیکنیکل تفصیلات', placeholder: 'تفصیل یہاں درج کریں' },
    certification: { label: 'سرٹیفیکیشن', placeholder: 'مثلاً ISO 9001' },
    modelNumber: { label: 'ماڈل نمبر', placeholder: 'مثلاً MH-101' },
    warranty: { label: 'وارنٹی', placeholder: 'مثلاً 1 سال' },
    steelGrade: { label: 'اسٹیل گریڈ', placeholder: 'مثلاً J2/SS 316' },
    sterility: { label: 'جراثیم کشی', placeholder: 'مثلاً اسٹیریل' },
    weightCap: { label: 'وزن کی گنجائش', placeholder: 'مثلاً 100 کلو' },
    category: { label: 'کیٹیگری', placeholder: 'مثلاً چھوٹا راکٹ' },
    safetyRating: { label: 'سیفٹی ریٹنگ', placeholder: 'صرف بڑوں کے لیے' },
    condition: { label: 'حالت', placeholder: 'بلکل نیا' },
    customValue: 'اپنی مرضی کا...'
  },
  validation: {
    nameRequired: 'پروڈکٹ کا نام ضروری ہے',
    descriptionRequired: 'براہ کرم پروڈکٹ کی تفصیل شامل کریں',
    mediaRequired: 'براہ کرم کم از کم ایک تصویر یا ویڈیو اپلوڈ کریں',
    categoryRequired: 'براہ کرم ایک مرکزی زمرہ منتخب کریں',
    subCategoryRequired: 'براہ کرم ایک ذیلی زمرہ منتخب کریں',
    priceRequired: 'براہ کرم فروخت کی قیمت درج کریں',
    stockRequired: 'براہ کرم اسٹاک کی مقدار درج کریں',
    missingFields: 'محفوظ کرنے سے پہلے تمام ضروری فیلڈز پُر کریں',
    createSuccess: 'پروڈکٹ کامیابی سے شامل ہو گئی',
    updateSuccess: 'پروڈکٹ کامیابی سے اپ ڈیٹ ہو گئی',
    statusActive: 'پروڈکٹ کو فعال کے طور پر نشان زد کیا گیا',
    statusInactive: 'پروڈکٹ کو غیر فعال کے طور پر نشان زد کیا گیا',
    imageTooLarge: '5MB سے زیادہ ہے۔',
    videoTooLarge: '15MB کی حد سے زیادہ ہے۔',
    videoDurationInvalid: '15-20 سیکنڈ کے درمیان ہونی چاہیے (موجودہ: {{duration}} سیکنڈ)۔',
    compressLink: 'یہاں کمپریس کریں',
    maxFilesExceeded: 'آپ زیادہ سے زیادہ {{max}} میڈیا فائلیں اپ لوڈ کر سکتے ہیں۔'
  },
  summary: {
    untitled: 'بغیر نام کا آئٹم',
    statusReady: 'اسٹاک میں موجود ہے',
    statusOutOfStock: 'اسٹاک ختم ہو گیا',
    industryLabel: 'کاروبار کی کیٹیگری',
    listingHealth: 'لسٹنگ کی حالت',
    visibility: 'نمائش',
    marketLive: 'شاپ پر فعال',
    inventoryState: 'اسٹاک کی صورتحال',
    lowStock: 'اسٹاک کم ہے!',
    stable: 'اسٹاک ٹھیک ہے'
  },
  categoryRequired: 'براہ کرم ایک مرکزی زمرہ منتخب کریں',
  subCategoryRequired: 'براہ کرم ایک ذیلی زمرہ منتخب کریں',
  priceRequired: 'براہ کرم فروخت کی قیمت درج کریں',
  stockRequired: 'براہ کرم اسٹاک کی مقدار درج کریں',
  missingFields: 'محفوظ کرنے سے پہلے تمام ضروری فیلڈز پُر کریں',
  createSuccess: 'پروڈکٹ کامیابی سے شامل ہو گئی',
  updateSuccess: 'پروڈکٹ کامیابی سے اپ ڈیٹ ہو گئی',
  statusActive: 'پروڈکٹ کو فعال کے طور پر نشان زد کیا گیا',
  statusInactive: 'پروڈکٹ کو غیر فعال کے طور پر نشان زد کیا گیا'
}

admin.settings = admin.settings || {};
admin.settings.businessUpdateSuccess = 'کاروباری پروفائل کامیابی سے اپ ڈیٹ ہو گئی';
admin.settings.toneUpdateSuccess = 'ٹون سیٹنگز کامیابی سے اپ ڈیٹ ہو گئیں';
admin.settings.tones = {
  validation: {
    atLeastOne: 'براہ کرم سوفا کے لیے کم از کم ایک لہجہ منتخب کریں'
  },
  none: 'کوئی نہیں',
  professional: { label: 'پیشہ ورانہ (Professional)', desc: 'مہذب اور کاروباری انداز' },
  friendly: { label: 'دوستانہ (Friendly)', desc: 'گرمجوش اور خوش اخلاق' },
  direct: { label: 'براہ راست (Direct)', desc: 'مختصر اور واضح' },
  persuasive: { label: 'قائل کرنے والا (Persuasive)', desc: 'مؤثر اور سیلز پر مبنی' },
  playful: { label: 'خوش مزاج (Playful)', desc: 'ہلکا پھلکا اور دلچسپ' },
  empathetic: { label: 'ہمدرد (Empathetic)', desc: 'پُرسکون اور ہمدردانہ' }
};

admin.profile = admin.profile || {};
admin.profile.user = {
  title: 'صارف کی پروفائل',
  cancel: 'منسوخ کریں',
  save: 'محفوظ کریں',
  edit: 'ترمیم کریں',
  photoAlt: 'صارف کی پروفائل',
  noPhoto: 'کوئی تصویر نہیں',
  uploadPhoto: 'تصویر اپ لوڈ کریں',
  removePhoto: 'تصویر ہٹائیں',
  nameLabel: 'پورا نام',
  namePlaceholder: 'جیسے: علی احمد',
  emptyName: 'اپنا پورا نام شامل کریں',
  emailLabel: 'ای میل ایڈریس',
  emailPlaceholder: 'جیسے: ali@example.com',
  emptyEmail: 'اپنی ای میل شامل کریں',
  phoneLabel: 'فون نمبر',
  phonePlaceholder: 'جیسے: +92 300 1234567',
  emptyPhone: 'اپنا فون نمبر شامل کریں'
};



admin.settings = admin.settings || {};
admin.settings.bankUpdateSuccess = 'بینک کی تفصیلات کامیابی سے اپ ڈیٹ ہو گئیں';
admin.settings.bankDeleteSuccess = 'بینک کی تفصیلات کامیابی سے حذف کر دی گئیں';
admin.settings.resetAllSuccess = 'تمام ترتیبات ری سیٹ کر دی گئیں';
admin.settings.account = {
  title: 'اکاؤنٹ کی ترتیبات',
  deleteTitle: 'پروفائل ڈیٹا حذف کریں',
  deleteDesc: 'بینک کی معلومات، کاروباری پروفائل اور AI ترجیحات صاف کریں۔',
  deleteBtn: 'تمام معلومات حذف کریں',
  confirmTitle: 'تمام پروفائل ڈیٹا حذف کریں؟',
  confirmDesc: 'کیا آپ کو یقین ہے؟ اس سے آپ کی بینک معلومات، کاروباری پروفائل اور AI ترتیبات مستقل طور پر ختم ہو جائیں گی۔',
  confirmBtn: 'جی ہاں، سب کچھ حذف کریں',
  cancelBtn: 'منسوخ کریں',
};
admin.settings.sections = admin.settings.sections || {};
admin.settings.sections.bank = {
  title: 'بینک کی معلومات',
  subtitle: 'اپنی شاپ کے لیے ادائیگی کی سیٹنگز سیٹ کریں',
  current: 'حالت',
  configured: 'سیٹ ہے',
  notConfigured: 'سیٹ نہیں ہے',
  button: 'بینک کی تفصیلات تبدیل کریں'
};
admin.settings = admin.settings || {};
admin.settings.bankUpdateSuccess = 'بینک کی تفصیلات کامیابی سے اپ ڈیٹ ہو گئیں';
admin.settings.bankDeleteSuccess = 'بینک کی تفصیلات کامیابی سے حذف کر دی گئیں';
admin.addProductOverview = admin.addProductOverview || {};
admin.addProductOverview.validation = {
  nameRequired: 'پروڈکٹ کا نام ضروری ہے',
  descriptionRequired: 'براہ کرم پروڈکٹ کی تفصیل شامل کریں',
  mediaRequired: 'براہ کرم کم از کم ایک تصویر یا ویڈیو اپ لوڈ کریں',
  categoryRequired: 'براہ کرم ایک زمرہ منتخب کریں',
  subCategoryRequired: 'براہ کرم ایک ذیلی زمرہ منتخب کریں',
  priceRequired: 'براہ کرم درست قیمت درج کریں',
  stockRequired: 'براہ کرم اسٹاک کی مقدار درج کریں',
  maxFilesExceeded: 'آپ صرف {{max}} فائلیں اپ لوڈ کر سکتے ہیں۔',
  imageTooLarge: 'بہت بڑی ہے۔',
  videoTooLarge: '{{name}} 15MB کی حد سے زیادہ ہے۔',
  videoDurationInvalid: '{{name}} کی لمبائی 15-20 سیکنڈ ہونی چاہیے (موجودہ: {{duration}} سیکنڈ)۔',
  compressLink: 'یہاں سائز کم کریں',
  createSuccess: 'پروڈکٹ کامیابی سے شامل کر دی گئی',
  updateSuccess: 'تفصیلات کامیابی سے اپ ڈیٹ ہو گئیں',
  statusActive: 'پروڈکٹ کو فعال کر دیا گیا ہے',
  statusInactive: 'پروڈکٹ کو غیر فعال کر دیا گیا ہے'
};
admin.settings.bank = {
  title: 'بینک کی معلومات',
  subtitle: 'اپنی ادائیگی اور بینک کی تفصیلات یہاں درج کریں',
  accountTitle: 'اکاؤنٹ ہولڈر',
  accountTitlePlaceholder: 'مثلاً: محمد احمد',
  accountTitleHint: 'جیسا کہ آپ کے بینک اکاؤنٹ پر درج ہے',
  accountNumber: 'اکاؤنٹ نمبر / IBAN',
  accountNumberPlaceholder: 'مثلاً: PK00 BANK 0000 0000 0000 0000',
  ibanHint: 'پاکستانی اکاؤنٹس کے لیے IBAN عام طور پر 24 حروف کا ہوتا ہے',
  bankName: 'بینک کا نام',
  bankNamePlaceholder: 'مثلاً: ایچ بی ایل، الفلاح، میزان',
  description: 'ادائیگی کی ہدایات',
  descriptionPlaceholder: 'مثلاً: برائے کرم ٹرانسفر میں آرڈر آئی ڈی شامل کریں',
  required: 'ضروری ہے',
  configured: 'ادائیگی کی تفصیلات موجود ہیں',
  notConfigured: 'ابھی تک کوئی تفصیل نہیں',
  verified: 'محفوظ',
  savedSuccess: 'بینک کی تفصیلات کامیابی سے محفوظ ہو گئیں!',
  notConfiguredTitle: 'کوئی بینک تفصیل نہیں',
  addDetails: 'بینک اکاؤنٹ شامل کریں',
  sectionPayment: 'ادائیگی کی تفصیلات',
  sectionAccount: 'اکاؤنٹ کی معلومات',
  sectionNotes: 'اضافی معلومات',
  copyIBAN: 'IBAN کاپی کریں',
  copied: 'کاپی ہو گیا!',
  updateBank: 'بینک اپ ڈیٹ کریں',
  removeAccount: 'ہٹائیں',
  warning: 'براہ کرم یقینی بنائیں کہ تمام تفصیلات درست ہیں۔ یہ معلومات آپ کی شاپ کی ادائیگیوں کے لیے استعمال ہوں گی۔',
  errors: {
    accountTitleRequired: 'اکاؤنٹ کا نام درج کرنا ضروری ہے',
    bankNameRequired: 'بینک کا نام درج کرنا ضروری ہے',
    accountNumberRequired: 'اکاؤنٹ نمبر درج کرنا ضروری ہے'
  },
  notConfiguredDesc: 'اپنا بینک اکاؤنٹ شامل کریں تاکہ گاہک آپ کو براہ راست ادائیگی کر سکیں۔',
  deleteConfirmTitle: 'بینک کی معلومات حذف کریں؟',
  deleteConfirmDesc: 'اس سے آپ کے بینک کی تفصیلات سسٹم سے مستقل طور پر ختم ہو جائیں گی۔ ادائیگی حاصل کرنے کے لیے آپ کو انہیں دوبارہ درج کرنا ہوگا۔',
  deleteConfirmBtn: 'جی ہاں، معلومات حذف کریں',
  deleteCancelBtn: 'معلومات محفوظ رکھیں'
};

export const notFound = {
  title: '404',
  subtitle: 'راستہ بھٹک گئے؟',
  desc: "جس صفحے کو آپ تلاش کر رہے ہیں وہ موجود نہیں ہے یا اسے کسی دوسری کائنات میں منتقل کر دیا گیا ہے۔",
  backBtn: 'مجھے گھر لے جائیں',
  backLink: 'واپس جائیں',
}
