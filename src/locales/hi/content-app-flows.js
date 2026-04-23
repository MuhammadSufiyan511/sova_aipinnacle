export const onboarding = {
  business: {
    title: 'आप किस प्रकार का व्यवसाय चलाते हैं?',
    subtitle: 'यह SOVA को आपके वर्कफ़्लो और तकनीकी आवश्यकताओं को समझने में मदद करता है।',
    searchPlaceholder: 'उद्योग खोजें...',
    customCategoryPlaceholder: 'अपनी व्यावसायिक श्रेणी दर्ज करें...',
    nextBtn: 'मेरा व्यवसाय चुनें ←',
    categories: {
      clothing: { label: 'कपड़े और फैशन', desc: 'साइज, स्टॉक और डिलीवरी के लिए ऑटो रिप्लाई' },
      jewellery: { label: 'आभूषण और रत्न', desc: 'कैटलॉग दिखाएं और सोने की दर के प्रश्नों को हल करें' },
      toys: { label: 'खिलौने और रीसेलिंग', desc: 'थोक खरीदारों और पूछताछ को फ़िल्टर करें' },
      'books-stationary': { label: 'किताबें और स्टेशनरी', desc: 'शीर्षकों और स्टॉक की त्वरित खोज' },
      'dry-fruits': { label: 'सूखे मेवे और नट्स', desc: 'कीमत, वजन और मौसमी थोक ऑर्डर' },
      decoration: { label: 'इवेंट डेकोरेशन', desc: 'थीम गाइड और पैकेज लागत स्वचालन' },
      electronics: { label: 'इलेक्ट्रॉनिक्स और गैजेट्स', desc: 'उत्पाद विनिर्देश और बिक्री हैंडऑफ़' },
      'medical-instruments': { label: 'चिकित्सा उपकरण', desc: 'क्लिनिकल गियर और तकनीकी विनिर्देश' },
      'surgical-instruments': { label: 'सर्जिकल उपकरण', desc: 'सटीक उपकरण और थोक छूट' },
      hardware: { label: 'हार्डवेयर और टूल्स', desc: 'बिल्डर और ठेकेदार सामग्री पूछताछ' },
      fireworks: { label: 'आतिशबाजी और सुरक्षा', desc: 'मौसमी कैटलॉग और सुरक्षा दिशा-निर्देश' },
      service: { label: 'सेवा व्यवसाय', desc: 'बुकिंग, परामर्श और स्थानीय सेवाएं' },
      agency: { label: 'एजेंसी और B2B', desc: 'पेशेवर सेवाएं और क्लाइंट प्रबंधन' },
      creator: { label: 'कंटेंट क्रिएटर', desc: 'डिजिटल उत्पाद और समुदाय निर्माण' },
      other: { label: 'कुछ और', desc: 'अपने अद्वितीय व्यावसायिक क्षेत्र को निर्दिष्ट करें' }
    }
  },
  products: {
    title: 'अपने उत्पाद जोड़ें',
    subtitle: 'SOVA ग्राहकों के सवालों के स्वचालित रूप से जवाब देने के लिए इस कैटलॉग का उपयोग करता है।',
    addBtn: 'उत्पाद जोड़ें',
    nextBtn: 'सहेजें और जारी रखें ←',
    toastError: 'आगे बढ़ने के लिए कृपया कम से कम एक उत्पाद जोड़ें ताकि SOVA आपके व्यवसाय के बारे में सीख सके।',
    modal: {
      titleAdd: 'नया उत्पाद जोड़ें',
      titleUpdate: 'उत्पाद अपडेट करें',
      subtitleAdd: 'अपने उत्पाद को एक नाम, संक्षिप्त विवरण और एक वैकल्पिक इमेज, वीडियो या PDF दें।',
      subtitleUpdate: 'उन उत्पाद विवरणों को संपादित करें जिनका उपयोग SOVA खरीदार चैट में करता है।',
      mediaLabel: 'उत्पाद मीडिया',
      mediaHelp: 'अपलोड करने के लिए क्लिक करें',
      nameLabel: 'उत्पाद का नाम',
      namePlaceholder: 'जैसे: प्रीमियम सिल्क स्कार्फ',
      descLabel: 'विवरण',
      descPlaceholder: 'जैसे: सॉफ्ट फिनिश और गिफ्ट पैकेजिंग के साथ प्रीमियम सिल्क स्कार्फ।',
      saveBtn: 'उत्पाद सुरक्षित करें',
      updateBtn: 'अपडेट करें',
      invalidMediaType: 'कृपया वैध इमेज, वीडियो या PDF फ़ाइल अपलोड करें'
    }
  },
  tone: {
    title: 'SOVA का व्यक्तित्व चुनें',
    subtitle: 'SOVA को आपके ग्राहकों के साथ कैसे बात करनी चाहिए? आप एक या अधिक चुन सकते हैं।',
    profiles: {
      professional: { label: 'पेशेवर', desc: 'स्पष्ट, विनम्र और व्यवसाय-केंद्रित' },
      friendly: { label: 'मिलनसार', desc: 'गर्मजोशी, स्वागतयोग्य और सहज' },
      persuasive: { label: 'प्रभावशाली', desc: 'बिक्री-केंद्रित, फायदों को उजागर करता है' },
      direct: { label: 'सीधा', desc: 'संक्षिप्त, मुद्दे पर ऋजु' },
      playful: { label: 'मजेदार', desc: 'इमोजी इस्तेमाल, उत्साही और मजेदार' },
      empathetic: { label: 'सहानुभूतिपूर्ण', desc: 'समझदार, धैर्यवान और मददगार' }
    },
    completeBtn: 'डैशबोर्ड लॉन्च करें'
  },
  loader: {
    title: 'आपका AI सेल्स एजेंट तैयार हो रहा है',
    subtitle: 'हम आपके उत्पादों और व्यावसायिक प्राथमिकताओं के साथ SOVA को कॉन्फ़िगर कर रहे हैं।',
    init: 'ऑनबोर्डिंग प्रारंभ हो रही है',
    wait: 'कृपया प्रतीक्षा करें जब तक हम आपकी सेटअप तैयार करते हैं।',
    finalWait: 'कृपया प्रतीक्षा करें जब तक आपकी सेटअप पूर्ण हो रही है।',
    steps: {
      catalog: 'आपका कैटलॉग बनाया जा रहा है...',
      ai: 'AI व्यक्तित्व लागू किया जा रहा है...',
      meta: 'Meta API के साथ एकीकृत किया जा रहा है...',
      workspace: 'आपका वर्कस्पेस तैयार किया जा रहा है...'
    }
  }
}

export const admin = {
  nav: {
    workspace: 'वर्कस्पेस',
    overview: 'अवलोकन',
    products: 'उत्पाद',
    chat: 'इनबॉक्स',
    broadcasts: 'अभियान',
    reports: 'रिपोर्ट',
    settings: 'सेटिंग्स',
    notifications: 'सूचनाएं',
    profile: 'प्रोफ़ाइल'
  },
  common: {
    currentView: 'वर्तमान दृश्य',
    automationLive: 'स्वचालन लाइव है',
    live: 'लाइव',
    previous: 'पिछला',
    next: 'अगला',
    preview: 'प्रीव्यू',
    open: 'खोलें',
    edit: 'संपादन',
    active: 'सक्रिय',
    inactive: 'निष्क्रिय',
    currencySymbol: '₹',
    currencyCode: 'INR',
    starter: 'स्टार्टर',
    growth: 'ग्रोथ',
    scale: 'स्केल',
  },
  broadcasts: {
    title: 'ब्रॉडकास्ट अभियान',
    subtitle: 'SOVA द्वारा लीड्स, ग्राहकों और सेगमेंट को WhatsApp संदेश शेड्यूल करें।',
    newBtn: 'नया ब्रॉडकास्ट',
    stats: {
      scheduled: 'शेड्यूल',
      sentWeek: 'इस हफ्ते भेजे',
      avgResponse: 'औसत प्रतिक्रिया दर'
    },
    workflow: {
      title: 'स्वचालन वर्कफ़्लो',
      subtitle: 'SOVA WhatsApp संदेशों को योग्य लीड्स में कैसे बदलता है',
      nodes: {
        trigger: { label: 'आने वाला संदेश', sub: 'WhatsApp ट्रिगर' },
        filter: { label: 'इरादा फिल्टर', sub: 'SOVA लीड गुणवत्ता जांचता है' },
        route: { label: 'रूट और उत्तर', sub: 'स्वचालित उत्तर भेजा गया' },
        capture: { label: 'लीड कैप्चर हुई', sub: 'CRM प्रविष्टि बनाई गई' }
      },
      status: {
        active: 'सक्रिय',
        processing: 'प्रसंस्करण',
        delivered: 'डिलीवर',
        captured: 'प्राप्त'
      }
    },
    campaigns: {
      title: 'सभी अभियान',
      status: {
        scheduled: 'शेड्यूल',
        draft: 'ड्राफ्ट',
        sent: 'भेजा गया'
      },
      meta: {
        audience: 'दर्शक: {{count}}',
        powered: 'SOVA स्वचालन द्वारा संचालित',
        stats: 'ओपन: {{opens}} · उत्तर: {{replies}}'
      }
    }
  },
  products: {
    title: 'उत्पाद कैटलॉग',
    subtitle: 'SOVA खरीदार चैट में {{count}} आइटम साझा करता है',
    newBtn: 'उत्पाद जोड़ें',
    banner: 'SOVA आपके कैटलॉग का उपयोग उत्पाद उपलब्धता, मूल्य और विशेषताओं के बारे में प्रश्नों का स्वचालित रूप से उत्तर देने के लिए करता है।',
    empty: {
      title: 'अभी तक कोई उत्पाद नहीं',
      desc: 'अपना पहला उत्पाद जोड़ें ताकि SOVA इसे WhatsApp पर संभावित खरीदारों के साथ साझा कर सके।',
      btn: 'अपना पहला उत्पाद जोड़ें'
    },
    item: {
      price: 'Rs. {{price}}',
      priceLabel: 'कीमत',
      stockLabel: 'दुकान में सामान',
      skuLabel: 'आइटम आईडी',
      specsTitle: 'खास जानकारी',
      editBtn: 'बदलाव करें',
      mediaLabel: 'मीडिया प्रकार',
      view: 'देखें',
      active: 'सक्रिय',
      inactive: 'निष्क्रिय',
      activate: 'सक्रिय करें',
      deactivate: 'निष्क्रिय करें',
      modalTitle: 'प्रोडक्ट ओवरव्यू',
      noDescription: 'अभी कोई विवरण जोड़ा नहीं गया है।',
      none: 'कोई नहीं'
    },
    controls: {
      searchPlaceholder: 'प्रोडक्ट खोजें...',
      show: 'दिखाएँ',
      perPage: 'प्रति पेज',
      all: 'सभी',
      pageInfo: 'कुल {{total}} में से {{start}}-{{end}}',
      filters: {
        all: 'सभी',
        active: 'सक्रिय',
        inactive: 'निष्क्रिय'
      },
      empty: {
        title: 'मिलते हुए प्रोडक्ट नहीं मिले',
        desc: 'कोई दूसरा शब्द लिखकर देखें या फिल्टर बदलें।'
      }
    }
  },
  addProductOverview: {
    titleAdd: 'नया आइटम जोड़ें',
    titleEdit: 'आइटम बदलें',
    subtitleAdd: 'अपनी दुकान के लिए एक प्रोफेशनल लिस्ट बनाएं।',
    subtitleEdit: 'बेहतर जवाबों के लिए आइटम की जानकारी अपडेट करें।',
    backToCatalog: 'दुकान की लिस्ट पर वापस जाएं',
    editorInitialising: 'एडिटर खुल रहा है...',
    steps: {
      basics: 'बुनियादी जानकारी',
      category: 'आइटम का विवरण',
      pricing: 'स्टॉक और कीमत',
    },
    sections: {
      basics: {
        title: 'सामान्य जानकारी',
        subtitle: 'अपने आइटम की बुनियादी जानकारी यहाँ लिखें।',
        nameLabel: 'आइटम का नाम',
        namePlaceholder: 'जैसे: कॉटन टी-शर्ट',
        descriptionLabel: 'विवरण',
        descriptionPlaceholder: 'अपने ग्राहकों को इस आइटम के बारे में बताएं...',
        brandLabel: 'ब्रांड का नाम',
        brandPlaceholder: 'जैसे: लोकल आर्टिसन',
      },
      category: {
        title: 'आइटम का प्रकार (Classification)',
        subtitle: 'ग्राहकों को सामान ढूंढने में मदद करें।',
        categoryLabel: 'मुख्य श्रेणी (Category)',
        categoryPlaceholder: 'श्रेणी चुनें',
        subCategoryLabel: 'आइटम का प्रकार',
        subCategoryPlaceholder: 'प्रकार चुनें',
        newSubCategory: 'नया प्रकार',
        customCategoryLabel: 'अपनी श्रेणी का नाम',
        customCategoryPlaceholder: 'श्रेणी लिखें',
        customSubCategoryLabel: 'अपने प्रकार का नाम',
        customSubCategoryPlaceholder: 'प्रकार लिखें',
        customFieldsTitle: 'अतिरिक्त विवरण',
        addFieldBtn: 'विवरण जोड़ें',
        fieldLabelPlaceholder: 'जैसे: कपड़ा',
        fieldValuePlaceholder: 'जैसे: 100% कॉटन',
      },
      pricing: {
        title: 'कीमत और स्टॉक',
        subtitle: 'विक्रय मूल्य और स्टॉक की स्थिति सेट करें।',
        priceLabel: 'विक्रय मूल्य',
        salePriceLabel: 'छूट के बाद कीमत',
        salePricePlaceholder: 'वैकल्पिक',
        stockLabel: 'कुल स्टॉक',
        stockPlaceholder: 'मौजूद मात्रा (Quantity)',
        skuLabel: 'आइटम आईडी / SKU',
        skuPlaceholder: 'जैसे: ITEM-001',
        skuHelp: 'दुकान का आंतरिक कोड',
        minOrderLabel: 'न्यूनतम ऑर्डर',
      },
      media: {
        title: 'आइटम की तस्वीरें',
        noMediaAttached: 'कोई फोटो अपलोड नहीं की गई',
        upload: 'फोटो अपलोड करें',
        primary: 'मुख्य फोटो',
        makePrimary: 'मुख्य फोटो बनाएं',
      },
      actions: {
        submitAdd: 'लिस्ट में जोड़ें',
        submitEdit: 'बदलाव सहेजें',
      },
    },
    validation: {
      nameRequired: 'उत्पाद का नाम आवश्यक है',
      descriptionRequired: 'कृपया उत्पाद का विवरण दर्ज करें',
      mediaRequired: 'कृपया कम से कम एक फ़ोटो या वीडियो अपलोड करें',
      categoryRequired: 'कृपया कोई मुख्य श्रेणी चुनें',
      subCategoryRequired: 'कृपया एक उप-श्रेणी चुनें',
      priceRequired: 'कृपया विक्रय मूल्य दर्ज करें',
      stockRequired: 'कृपया स्टॉक मात्रा दर्ज करें',
      missingFields: 'कृपया सहेजने से पहले सभी आवश्यक फ़ील्ड भरें',
      createSuccess: 'आइटम सफलतापूर्वक जोड़ा गया',
      updateSuccess: 'विवरण सफलतापूर्वक अपडेट हो गया',
      statusActive: 'उत्पाद को सक्रिय के रूप में चिह्नित किया गया',
      statusInactive: 'उत्पाद को निष्क्रिय के रूप में चिह्नित किया गया',
    },
    fields: {
      selectOption: 'विकल्प चुनें',
      customValue: 'अपनी पसंद का...',
      customValuePlaceholder: 'विवरण लिखें',
      colorNotFound: 'रंग का नाम पहचाना नहीं गया। इसे कस्टम लेबल के रूप में जोड़ा जाएगा।',
      size: { label: 'साइज', placeholder: 'जैसे: XL या 42' },
      color: { label: 'रंग', placeholder: 'जैसे: गहरा नीला' },
      fabric: { label: 'कपड़ा / मटेरियल', placeholder: 'जैसे: रेशम' },
      fit: { label: 'फिट टाइप', placeholder: 'जैसे: स्लिम फिट' },
      pattern: { label: 'डिज़ाइन / पैटर्न', placeholder: 'जैसे: फूलदार' },
      ageRange: { label: 'उम्र का समूह', placeholder: 'जैसे: 5 से 8 साल' },
      gender: { label: 'लिंग', placeholder: 'चुनें' },
      purity: { label: 'सोने की शुद्धता', placeholder: 'जैसे: 22K' },
      weight: { label: 'वजन', placeholder: 'जैसे: 10 ग्राम' },
      brand: { label: 'ब्रांड', placeholder: 'जैसे: सैमसंग' },
      storage: { label: 'स्टोरेज मेमोरी', placeholder: 'जैसे: 128GB' },
      ram: { label: 'रैम साइज', placeholder: 'जैसे: 8GB' },
      processor: { label: 'प्रोसेसर', placeholder: 'जैसे: कोर i7' },
      subject: { label: 'विषय', placeholder: 'जैसे: बायोलॉजी' },
      origin: { label: 'उत्पत्ति का देश', placeholder: 'जैसे: सऊदी अरब' },
    },
    categories: {
      clothing: 'कपड़े और फैशन',
      jewellery: 'आभूषण और घड़ियाँ',
      electronics: 'फ़ोन और गैजेट्स',
      toys: 'बच्चे और खिलौने',
      dry_fruits: 'सूखे मेवे और नट्स',
      decoration: 'घर और इवेंट डेकोरेशन',
      books_stationary: 'किताबें और स्टेशनरी',
      medical_instruments: 'चिकित्सा उपकरण',
      surgical_instruments: 'सर्जिकल उपकरण',
      hardware: 'हार्डवेयर और टूल्स',
      fireworks: 'आतिशबाजी',
      other: 'अन्य सामान',
    },
    subcategories: {
      menswear: 'पुरुषों के कपड़े',
      womenswear: 'महिलाओं के कपड़े',
      'kids-wear': 'बच्चों के कपड़े',
      abayas: 'अबाया और पर्दा',
      'traditional-wear': 'पारंपरिक पहनावा',
      sportswear: 'खेलकूद के कपड़े',
      outerwear: 'जैकेट और कोट',
      footwear: 'जूते',
      accessories: 'एक्सेसरीज',
      'gold-jewelry': 'सोने के गहने',
      'silver-jewelry': 'चांदी के गहने',
      'diamond-precious': 'हीरे और जवाहरात',
      watches: 'कीमती घड़ियाँ',
      rings: 'अंगूठियां',
      necklaces: 'हार और माला',
      bracelets: 'कड़े और ब्रेसलेट',
      earrings: 'झुमके / बालियां',
      'costume-jewelry': 'फैशन ज्वेलरी',
      smartphones: 'स्मार्टफोन',
      'laptops-pc': 'लैपटॉप और कंप्यूटर',
      'audio-video': 'ऑडियो और वीडियो',
      photography: 'कैमरे',
      gaming: 'गेमिंग गियर',
      'smart-home': 'स्मार्ट होम',
      wearables: 'स्मार्टवॉच',
      educational: 'शैक्षिक खिलौने',
      'board-games': 'बोर्ड गेम',
      'outdoor-toys': 'आउटडोर खिलौने',
      'remote-control': 'आरसी खिलौने',
      'action-figures': 'एक्शन आंकड़े',
      'dolls-plush': 'गुड़िया और आलीशान',
      crafts: 'कला और शिल्प',
      'roasted-nuts': 'भुने हुए मेवे',
      'raw-nuts': 'कच्चे मेवे',
      'dried-berries': 'सूखे फल',
      'dates-varieties': 'प्रीमियम खजूर',
      'seeds-mix': 'बीज और मिक्स',
      'home-decor': 'घर की सजावट',
      'wall-art': 'दीवार कला',
      lighting: 'लाइटिंग',
      'event-decor': 'इवेंट डेकोर',
      'academic-books': 'शैक्षिक पुस्तकें',
      'fiction-nonfiction': 'फिक्शन और कहानियां',
      'stationary-office': 'दफ्तर की स्टेशनरी',
      'art-supplies': 'कला सामग्री',
      'writing-instruments': 'कलम और सेट',
      diagnostics: 'डायग्नोस्टिक उपकरण',
      monitoring: 'रोगी की निगरानी',
      'rehab-mobility': 'मोबिलिटी एड्स',
      respiratory: 'श्वसन उपकरण',
      'general-surgery': 'सामान्य सर्जरी',
      'dental-instruments': 'दंत चिकित्सा उपकरण',
      'orthopedic-surgery': 'हड्डी की सर्जरी',
      'ophthalmic-surgery': 'आंखों की सर्जरी',
      'power-tools': 'पावर टूल्स',
      'hand-tools': 'हाथ के औजार',
      'plumbing-hardware': 'प्लंबिंग हार्डवेयर',
      'electrical-hardware': 'इलेक्ट्रिकल हार्डवेयर',
      'aerial-rockets': 'हवाई रॉकेट',
      'multi-shot-cakes': 'आतिशबाजी केक',
      'fountains-wheels': 'फव्वारे और पहिए',
      'ground-fireworks': 'जमीनी आतिशबाजी',
      'general-merchandise': 'सामान्य सामान',
      'gift-items': 'उपहार',
    },
    nested: {
      formal_shirts: 'फॉर्मल शर्ट',
      t_shirts: 'टी-शर्ट',
      polos: 'पोलो शर्ट',
      trousers: 'पतलून',
      jeans: 'जींस',
      suits_blazers: 'सूट और ब्लेज़र',
      nightwear: 'नाइटवियर',
      dresses: 'ड्रेस',
      tops_blouses: 'टॉप और ब्लाउज',
      skirts: 'स्कर्ट',
      ethnic_wear: 'एथनिक वियर',
      lingerie: 'अंतःवस्त्र',
      loungewear: 'लाउंजवियर',
      infant_0_2y_: 'शिशु (0-2 साल)',
      toddler_2_5y_: 'टॉडलर (2-5 साल)',
      boys_fashion: 'लड़कों का फैशन',
      girls_fashion: 'लड़कियों का फैशन',
      school_uniforms: 'स्कूल ड्रेस',
      casual_abayas: 'साधारण अबाया',
      formal_evening_abayas: 'फॉर्मल अबाया',
      bridal_abayas: 'दुल्हन अबाया',
      butterfly_abayas: 'तিতली अबाया',
      bisht_abayas: 'बिष्ट अबाया',
      kimonos: 'किमोनो',
      kaftans: 'कफ्तान',
      shalwar_kameez: 'सलवार कमीज',
      kurta_pajama: 'कुर्ता पाजामा',
      sherwani: 'शेरवानी',
      sarees: 'साड़ी',
      lehengas: 'लहंगा',
      gym_training: 'जिम और ट्रेनिंग',
      running_gear: 'रनिंग गियर',
      football_kits: 'फुटबॉल किट',
      cricket_gear: 'क्रिकेट गियर',
      yoga_pilates: 'योग और पाइलेट्स',
      leather_jackets: 'लेदर जैकेट',
      puffer_jackets: 'पफर जैकेट',
      trench_coats: 'ट्रेंच कोट',
      windbreakers: 'विंडब्रेकर',
      hoodies: 'हुडी',
      formal_shoes: 'फॉर्मल जूते',
      sneakers: 'स्नीकर्स',
      sandals_flip_flops: 'सैंडल / स्लीपर',
      boots: 'बूट्स',
      heels: 'हील्स',
      belts: 'बेल्ट',
      hats_caps: 'टोपियां',
      ties_bowties: 'टाई और बो टाई',
      scarves: 'स्कार्फ',
      gloves: 'दस्ताने',
      engagement_rings: 'सगाई की अंगूठियां',
      necklaces: 'हार',
      bangles: 'चूड़ियाँ',
      earrings: 'झुमके / बालियां',
      gold_coins_bars: 'सोने के सिक्के / बिस्कुट',
      rings: 'अंगूठियां',
      chains: 'चैन',
      bracelets: 'ब्रेसलेट',
      anklets: 'पायल',
      solitaire_rings: 'सॉलिटेयर अंगूठियां',
      diamond_sets: 'डायमंड सेट',
      loose_gemstones: 'कीमती पत्थर',
      birthstones: 'बर्थस्टोन',
      almonds: 'बादाम',
      cashews: 'काजू',
      pistachios: 'पिस्ता',
      walnuts: 'अखरोट',
      raisins: 'किशमिश',
      ajwa_dates: 'अजवा खजूर',
      mabroom_dates: 'मबरूम खजूर',
      sukkari_dates: 'सुक्करी खजूर',
      medjool_dates: 'मेजदूल खजूर',
      chia_seeds: 'चिया बीज',
      flax_seeds: 'अलसी के बीज',
      pumpkin_seeds: 'कद्दू के बीज',
      trail_mix: 'ट्रेल मिक्स',
      sunflower_seeds: 'सूरजमुखी के बीज',
      vases: 'गुलदस्ते',
      cushions: 'कुशन',
      candles: 'मोमबत्तियाँ',
      statues: 'मूर्तियाँ',
      canvas_paintings: 'कैनवास पेंटिंग',
      wall_mirrors: 'आईने',
      photo_frames: 'फोटो फ्रेम',
      chandeliers: 'झूमर',
      table_lamps: 'टेबल लैंप',
      floor_lamps: 'फ्लोर लैंप',
      led_strips: 'एलईडी स्ट्रिप्स',
      balloons: 'गुब्बारे',
      backdrops: 'बैकड्रॉप्स',
      wedding_decor: 'शादी की सजावट',
      medical: 'मेडिकल',
      engineering: 'इंजीनियरिंग',
      commerce: 'कॉमर्स',
      school_books: 'स्कूल की किताबें',
      sci_fi: 'साइंस फिक्शन',
      mystery: 'रहस्य',
      biography: 'जीवनी',
      self_help: 'आत्म-सहायता',
      paper: 'कागज',
      files: 'फाइलें',
      staplers: 'स्टेपलर',
      calculators: 'कैलकुलेटर',
      canvases: 'कैनवास',
      acrylic_paints: 'एक्रिलिक पेंट',
      brushes: 'ब्रश',
      sketchbooks: 'स्केचबुक',
      fountain_pens: 'फाउंटेन पेन',
      ballpoint_pens: 'बॉलपॉइंट पेन',
      gift_sets: 'उपहार सेट',
      blood_pressure_monitors: 'बीपी मॉनिटर',
      digital_thermometers: 'डिजिटल थर्मामीटर',
      stethoscopes: 'स्टेथोस्कोप',
      glucometers: 'ग्लूकोमीटर',
      pulse_oximeters: 'पल्स ऑक्सीमीटर',
      ecg_machines: 'ईसीजी मशीनें',
      heart_monitors: 'हृदय मॉनिटर',
      wheelchairs: 'व्हीलचेयर',
      walkers: 'वाकर',
      crutches: 'बैसाखी',
      support_belts: 'सपोर्ट बेल्ट',
      nebulizers: 'नेबुलाइज़र',
      oxygen_concentrators: 'ऑक्सीजन हब्स',
      cpap_machines: 'CPAP मशीनें',
      forceps: 'चिमटी',
      scissors: 'कैंची',
      scalpels: 'लैंसेट',
      retractors: 'रिट्रैक्टर्स',
      needle_holders: 'नीडल होल्डर',
      extractors: 'एक्सट्रैक्टर्स',
      probes: 'प्रोब',
      dental_mirrors: 'डेंटल मिरर',
      elevators: 'एलिवेटर्स',
      bone_drills: 'हड्डी की ड्रिल',
      screws_plates: 'पेंच और प्लेट',
      bone_saws: 'हड्डी वाली आरी',
      eye_speculums: 'आंख के उपकरण',
      microsurgical_scissors: 'माइक्रो कैंची',
      drills: 'ड्रिल मशीनें',
      angle_grinders: 'एंगल ग्राइंडर',
      electric_saws: 'बिजली वाली आरी',
      rotary_hammers: 'रोटरी हैमर',
      wrenches: 'रिंच',
      screwdrivers: 'पेचकश',
      pliers: 'प्लास',
      hammers: 'हथौड़े',
      pipe_fittings: 'पाइप फिटिंग',
      faucets: 'नल',
      valves: 'वाल्व',
      pumps: 'पंप',
      circuit_breakers: 'सर्किट ब्रेकर',
      cables_wires: 'केबल और तार',
      switches: 'स्विच',
      inverters: 'इनवर्टर',
      big_burst_rockets: 'बड़े रॉकेट',
      double_burst: 'डबल बर्स्ट',
      signal_rockets: 'सिग्नल रॉकेट',
      _25_shots: '25 शॉट्स',
      _50_shots: '50 शॉट्स',
      _100_shots: '100 शॉट्स',
      fan_cakes: 'फैन केक',
      glittering_fountains: 'चमकदार फव्वारे',
      color_wheels: 'रंगीन पहिए',
      cone_fountains: 'शंकु फव्वारे',
      sparklers: 'फुलझड़ी',
      ground_spinners: 'जमीनी चरखी',
      cracklers: 'कर्कश',
      stationery: 'स्टेशनरी',
      household_items: 'घरेलू सामान',
      groceries: 'किराना',
      gift_cards: 'उपहार कार्ड',
      occasional_gifts: 'त्योहारों के उपहार',
    },
    summary: {
      untitled: 'बिना नाम का आइटम',
      statusReady: 'स्टॉक में है',
      statusOutOfStock: 'स्टॉक खत्म',
      industryLabel: 'व्यवसाय की श्रेणी',
      listingHealth: 'लिस्टिंग की स्थिति',
      visibility: 'दृश्यতা',
      marketLive: 'दुकान पर सक्रिय',
      inventoryState: 'स्टॉक की स्थिति',
      lowStock: 'स्टॉक कम है!',
      stable: 'स्टॉक ठीक है',
    },
  },
  overview: {
    stats: {
      activeConversations: 'सक्रिय बातचीत',
      qualifiedLeads: 'योग्य लीड्स',
      automatedReplies: 'स्वचालित उत्तर',
      avgResponseTime: 'औसत समय'
    },
    quickActions: {
      products: 'प्रोडक्ट देखें',
      settings: 'स्वचालन सेट करें',
      businessSettings: 'बिज़नेस सेटिंग्स',
      files: 'फाइलें देखें'
    },
    charts: {
      saleTrend: {
        title: 'बिक्री का रुझान',
        subtitle: 'पिछले 7 दिनों का प्रदर्शन',
        pill: '+{{count}}% ऊपर',
        tooltipLabel: 'पूर्णता'
      },
      leadMix: {
        title: 'लीड मिश्रण',
        subtitle: 'फॉलो-अप बनाम खरीदार',
        label: 'खरीदार'
      },
      leadsByDay: {
        title: 'दैनिक लीड्स',
        subtitle: 'साप्ताहिक वॉल्यूम समीक्षा',
        pill: 'पीक समय'
      }
    },
    donuts: {
      buyers: 'खरीदार',
      followups: 'फॉलो-अप',
      spam: 'स्पैम'
    },
    activity: {
      title: 'हाल की गतिविधि',
      subtitle: 'वास्तविक समय अपडेट',
      feeds: {
        order: 'नया ऑर्डर इरादा',
        followup: 'फॉलो-अप शेड्यूल किया गया',
        spam: 'अनुपयुक्त संदेश ब्लॉक किया गया'
      }
    }
  },
  reports: {
    title: 'बिक्री विश्लेषण',
    subtitle: 'अपनी स्वचालित बिक्री के प्रदर्शन को ट्रैक करें।',
    exportBtn: 'रिपोर्ट निर्यात करें',
    stats: {
      revenue: 'कुल आय',
      orderRate: 'ऑर्डर दर',
      resolved: 'समाधानित चैट'
    },
    chart: {
      title: 'राजस्व विश्लेषण',
      subtitle: 'साप्ताहिक आय अवलोकन',
      pill: '+12.4% वृद्धि'
    },
    table: {
      title: 'साप्ताहिक प्रदर्शन',
      subtitle: 'दैनिक बातचीत और रूपांतरण का विवरण',
      headers: {
        day: 'दिन',
        chats: 'चैट',
        orders: 'ऑर्डर',
        conversion: 'रूপাंतरण',
        revenue: 'राजस्व'
      }
    }
  },
  settings: {
    title: 'स्वचालन सेटिंग्स',
    subtitle: 'अपने AI एजेंट के व्यवहार को नियंत्रित करें।',
    sections: {
      business: {
        title: 'बिज़नेस सेटअप',
        subtitle: 'अगर आप अपनी कैटेगरी बदलना चाहते हैं या सेटअप फिर से शुरू करना चाहते हैं, तो इसे यहाँ से अपडेट करें।',
        button: 'बिज़नेस बदलें',
        current: 'मौजूदा बिज़नेस',
        modalTitle: 'अपनी बिज़नेस कैटेगरी अपडेट करें',
        modalSubtitle: 'वह बिज़नेस टाइप चुनें जिसे SOVA जवाबों, लीड फ़िल्टरिंग और प्रोडक्ट संदर्भ के लिए इस्तेमाल करे।',
        save: 'बदलाव सुरक्षित करें',
        cancel: 'रद्द करें',
        close: 'बंद करें'
      },
      voice: {
        title: 'ब्रैंड की आवाज',
        subtitle: 'चुनें कि SOVA आपके ग्राहकों से कैसे बात करता है।',
        current: 'वर्तमान आवाज़',
        button: 'आवाज़ बदलें',
        modalTitle: 'आवाज़ सेटअप'
      },
      rules: {
        title: 'स्वचालन नियम',
        subtitle: 'स्वचालित उत्तर और फ़िल्टरिंग प्राथमिकताएं सेट करें।'
      }
    },
    tones: {
      professional: { label: 'पेशेवर', desc: 'व्यावसायिक और औपचारिक' },
      friendly: { label: 'मिलनसार', desc: 'मददगार और मैत्रीपूर्ण' },
      direct: { label: 'सीधा', desc: 'संक्षिप्त और सटीक' },
      persuasive: { label: 'प्रभावशाली', desc: 'बिक्री को आगे बढ़ाने वाला' },
      playful: { label: 'मज़ेदार', desc: 'हल्का, ज़िंदादिल और मज़ेदार' },
      empathetic: { label: 'सहानुभूतिपूर्ण', desc: 'समझदार, शांत और मददगार' },
      creative: { label: 'रचनात्मक', desc: 'उत्साही और विशिष्ट' }
    },
    rows: {
      autoReply: { title: 'स्वचालित उत्तर', desc: 'SOVA को सामान्य प्रश्नों के उत्तर देने दें।' },
      spamFilter: { title: 'स्पैम फ़िल्टर', desc: 'अनुपयुक्त संदेशों को स्वचालित रूप से ब्लॉक करें।' },
      alerts: { title: 'लीड अलर्ट', desc: 'नया खरीदार मिलने पर सूचना प्राप्त करें।' },
      tfa: { title: 'टू-फैक्टर ऑथेंटिकेशन', desc: 'अपने वर्कस्पेस को और सुरक्षित बनाएं।' }
    },
    comingSoon: 'जल्द आ रहा है'
  },
  profile: {
    header: {
      label: 'SOVA वर्कस्पेस प्रोफ़ाइल',
      desc: 'अपनी वर्कस्पेस पहचान, भाषा और ऑटोमेशन तैयारी को एक ही जगह से संभालें।'
    },
    plan: '{{name}} प्लान',
    activity: {
      products: 'जुड़े हुए उत्पाद',
      automations: 'सक्रिय ऑटोमेशन',
      alerts: 'अनपढ़े लीड अलर्ट'
    },
    details: {
      title: 'वर्कस्पेस विवरण',
      language: 'वर्तमान भाषा',
      products: {
        label: 'कैटलॉग में उत्पाद',
        ready: '{{count}} ऑटोमेटेड रिप्लाई के लिए तैयार'
      },
      tones: {
        label: 'बिज़नेस टोन प्रोफाइल',
        ready: '{{count}} टोन सेटिंग{{s}} कॉन्फ़िगर की गई'
      }
    },
    summary: {
      title: 'प्रोफ़ाइल सारांश',
      desc: 'यह वर्कस्पेस WhatsApp बातचीत संभालने, योग्य लीड्स को रूट करने और SOVA के साथ जवाब ऑटोमेट करने के लिए तैयार है।'
    }
  },
  chat: {
    title: 'व्हाट्सएप इनबॉक्स',
    activeStatus: 'सक्रिय',
    searchPlaceholder: 'बातचीत खोजें...',
    emptyState: 'देखने के लिए बातचीत चुनें',
    sovaLabel: 'SOVA AI',
    status: {
      automated: 'स्वचालित',
      captured: 'लीड कैप्चर हुई'
    },
    previewLabel: 'व्हाट्सऐप चैट प्रीव्यू',
    defaultReply: 'नमस्ते! संपर्क करने के लिए धन्यवाद। मैं SOVA हूँ, आपका सेल्स असिस्टेंट। आज मैं आपकी कैसे मदद कर सकता हूँ?'
  },
  drawer: {
    title: 'सूचनाएं',
    empty: 'कोई नई सूचना नहीं',
    readAll: 'सभी को पढ़ा हुआ चिह्नित करें'
  },
  celebration: {
    eyebrow: 'बधाई हो!',
    title: 'आपका वर्कस्पेस लाइव है!',
    headline: 'तैयार हो जाइए, आपका {gradient:AI एजेंट} तैयार है',
    desc: 'SOVA अब आपके ग्राहकों को जवाब देने, लीड्स को फ़िल्टर करने और आपकी बिक्री बढ़ाने के लिए तैयार है।',
    features: {
      replies: 'स्वचालित उत्तर',
      whatsapp: 'व्हाट्सएप एकीकरण',
      buyers: 'खरीदारों की पहचान'
    },
    checklist: {
      whatsapp: 'व्हाट्सएप लाइव',
      filtering: 'लीड फ़िल्टरिंग सक्रिय',
      followups: 'फॉलो-अप सक्रिय'
    },
    btn: 'डैशबोर्ड पर जाएं'
  },
}

admin.nav.files = 'फाइलें'
admin.files = {
  title: 'फाइल लाइब्रेरी',
  subtitle: '{{count}} फाइल{{s}} SOVA रिप्लाई और मीडिया शेयरिंग के लिए तैयार है',
  newBtn: 'फाइल जोड़ें',
  banner: 'अपनी इमेज, वीडियो, PDF और जरूरी फाइलें एक जगह रखें, ताकि SOVA WhatsApp पर खरीदारों को गाइड करते समय सही मीडिया इस्तेमाल कर सके।',
  empty: {
    title: 'अभी कोई फाइल नहीं',
    desc: 'अपनी पहली फाइल जोड़ें ताकि SOVA इसे खरीदार चैट और सपोर्ट में इस्तेमाल कर सके।',
    btn: 'पहली फाइल जोड़ें',
  },
  item: {
    view: 'देखें',
    active: 'सक्रिय',
    inactive: 'निष्क्रिय',
    activate: 'सक्रिय करें',
    deactivate: 'निष्क्रिय करें',
    modalTitle: 'फाइल ओवरव्यू',
    noDescription: 'अभी कोई विवरण जोड़ा नहीं गया है।',
    none: 'कोई नहीं',
    mediaLabel: 'फाइल टाइप',
    fileNameLabel: 'फाइल का नाम',
    types: {
      image: 'इमेज',
      video: 'वीडियो',
      file: 'फाइल',
    },
  },
  controls: {
    searchPlaceholder: 'फाइल खोजें...',
    show: 'दिखाएँ',
    perPage: 'प्रति पेज',
    all: 'सभी',
    pageInfo: 'कुल {{total}} में से {{start}}-{{end}}',
    filters: {
      all: 'सभी',
      image: 'इमेज',
      video: 'वीडियो',
      file: 'फाइलें',
    },
    empty: {
      title: 'मिलती हुए कोई फाइल नहीं मिली',
      desc: 'कोई दूसरा शब्द लिखकर देखें या फाइल टाइप फिल्टर बदलें।',
    },
  },
  modal: {
    titleAdd: 'नई फाइल जोड़ें',
    titleUpdate: 'फाइल अपडेट करें',
    subtitleAdd: 'एक इमेज, वीडियो या PDF अपलोड करें जिसे SOVA चैट में शेयर कर सके।',
    subtitleUpdate: 'उन फाइल विवरणों को एडिट करें जिन्हें SOVA खरीदारों की मदद करते समय इस्तेमाल करता है।',
    mediaLabel: 'फाइल मीडिया',
    mediaHelp: 'अपलोड करने के लिए क्लिक करें',
    nameLabel: 'फाइल का नाम',
    namePlaceholder: 'जैसे: Summer Catalog 2026',
    descLabel: 'विवरण',
    descPlaceholder: 'जैसे: नए समर अराइवल और अपडेटेड प्राइसिंग वाला PDF कैटलॉग।',
    saveBtn: 'फाइल सेव करें',
    updateBtn: 'फाइल अपडेट करें',
    invalidMediaType: 'कृपया वैध इमेज, वीडियो या PDF फ़ाइल अपलोड करें',
  },
}

admin.upgrade = {
  navLabel: 'प्लान अपग्रेड',
  cta: 'प्लान अपग्रेड करें',
  mobileCta: 'अपग्रेड',
  eyebrow: 'प्लान अपग्रेड',
  title: 'ऐसा प्लान चुनें जो आपकी WhatsApp सेल्स के साथ बढ़े',
  subtitle: 'जैसे-जैसे आपका बिज़नेस बढ़े, ज़्यादा ऑटोमेशन, ज़्यादा उपयोग सीमा, और बेहतर AI सपोर्ट अनलॉक करें।',
  currentPlanLabel: 'मौजूदा प्लान',
  currentPlanValue: '{{plan}} प्लान',
  currentPlanHint: 'ज़्यादा पहुँच और ज़्यादा ऑटोमेशन के लिए कभी भी अपग्रेड करें।',
  popular: 'सबसे लोकप्रिय',
  choosePlan: 'प्लान चुनें',
  currentPlanButton: 'मौजूदा प्लान',
  compareTitle: 'टीमें अपग्रेड क्यों करती हैं',
  compareDesc: 'जैसे-जैसे आपकी चैट बढ़ती है, SOVA और ज़्यादा जवाब, और ज़्यादा लीड, और बड़ा सेल्स वर्कफ़्लो संभाल सकता है, बिना आपकी टीम को धीमा किए।',
  summaryTitle: 'अपग्रेड से क्या बेहतर होगा',
  summaryDesc: 'बेसिक ऑटोमेशन से निकलकर पूरे WhatsApp GROWTH ऑपरेशन तक जाएँ, बेहतर सपोर्ट और मज़बूत AI कवरेज के साथ।',
  steps: {
    1: { title: 'अपना मौजूदा सेटअप बनाए रखें', desc: 'आपका कैटलॉग, फाइलें, इनबॉक्स और टोन सेटिंग्स वैसी ही रहेंगी।' },
    2: { title: 'तुरंत ज़्यादा क्षमता पाएँ', desc: 'ऊँचे प्लान ज़्यादा रिप्लाई वॉल्यूम, बेहतर वर्कफ़्लो और टीम के लिए ज़्यादा विज़िबिलिटी देते हैं।' },
    3: { title: 'बिना अतिरिक्त मैनुअल काम के स्केल करें', desc: 'ज़्यादा खरीदार, ज़्यादा फॉलो-अप और ज़्यादा कन्वर्ज़न मौके संभालने के लिए SOVA का उपयोग करें।' },
  },
  benefits: {
    1: { title: 'ज़्यादा ऑटोमेटेड बातचीत', desc: 'अपनी टीम पर अतिरिक्त दबाव डाले बिना ज़्यादा WhatsApp जवाब संभालें।' },
    2: { title: 'और मज़बूत AI हैंडलिंग', desc: 'SOVA को बेहतर तरीके से लीड फ़िल्टर करने, खरीदारों को गाइड करने और बार-बार की मैनुअल सपोर्ट कम करने दें।' },
    3: { title: 'बेहतर सेल्स विज़िबिलिटी', desc: 'ग्रोथ ट्रैक करें, परफ़ॉर्मेंस देखें और समझें कि कन्वर्ज़न कहाँ बेहतर हो रही है।' },
    4: { title: 'बढ़ते बिज़नेस के लिए तैयार', desc: 'वॉल्यूम बढ़ने पर अपग्रेड करें ताकि वर्कफ़्लो स्मूथ और भरोसेमंद बना रहे।' },
  },
  plans: {
    starter: {
      badge: 'स्टार्टर',
      name: 'स्टार्टर',
      price: '/mo',
      desc: 'छोटी टीमों के लिए जो WhatsApp ऑटोमेशन शुरू कर रही हैं।',
      features: {
        1: 'हर महीने 1,000 तक ऑटोमेटेड रिप्लाई',
        2: 'बेसिक उत्पाद और फाइल शेयरिंग सपोर्ट',
        3: 'स्टैंडर्ड ऑटोमेशन रूल्स के साथ लीड डिटेक्शन',
        4: 'एक वर्कस्पेस और बेसिक रिपोर्टिंग',
      },
    },
    growth: {
      badge: 'ग्रोथ',
      name: 'ग्रोथ',
      price: '/mo',
      desc: 'बढ़ते बिज़नेस के लिए जो एक्टिव खरीदार फ्लो संभालते हैं।',
      features: {
        1: 'हर महीने 5,000 तक ऑटोमेटेड रिप्लाई',
        2: 'एडवांस्ड कैटलॉग, फाइल और मीडिया वर्कफ़्लो',
        3: 'बेहतर लीड स्कोरिंग और फॉलो-अप ऑटोमेशन',
        4: 'प्रायोरिटी एनालिटिक्स और तेज़ सपोर्ट रिस्पॉन्स',
      },
    },
    scale: {
      badge: 'स्केल',
      name: 'स्केल',
      price: '/mo',
      desc: 'बड़ी सेल्स टीमों के लिए जो ज़्यादा WhatsApp वॉल्यूम संभालती हैं।',
      features: {
        1: 'हाई-वॉल्यूम रिप्लाई और कैंपेन स्केलिंग',
        2: 'उत्पाद, फाइल और इनबॉक्स पर गहरी ऑटोमेशन लॉजिक',
        3: 'और विस्तृत रिपोर्टिंग और सेल्स विज़िबिलिटी',
        4: 'प्रायोरिटी ऑनबोर्डिंग और डेडिकेटेड सपोर्ट',
      },
    },
  },
}

admin.nav.catalog = 'दुकान की लिस्ट'
admin.nav.addProduct = 'सामान जोड़ें'
admin.common = admin.common || {}
admin.common.locked = 'लॉक्ड'
admin.common.unlockToView = 'देखने के लिए अनलॉक करें'

admin.overview.quickActions.businessSettings = 'बिज़नेस सेटिंग्स'
admin.overview.quickActions.products = 'प्रोडक्ट देखें'
admin.overview.quickActions.files = 'फाइलें देखें'
admin.chat.previewLabel = 'व्हाट्सएप चैट प्रीव्यू'
admin.chat.defaultReply = 'नमस्ते! संपर्क करने के लिए धन्यवाद। मैं SOVA हूँ, आपका सेल्स असिस्टेंट। आज मैं आपकी कैसे मदद कर सकता हूँ?'

admin.mockData = {
  broadcasts: {
    campaigns: [
      { name: 'रमजान ऑफर', audience: '1,240 संपर्क', sendAt: 'आज, 7:00 PM' },
      { name: 'नया कैटलॉग लॉन्च', audience: '860 संपर्क', sendAt: 'अनुमोदन की प्रतीक्षा' },
      { name: 'VIP फॉलो-अप ब्लास्ट', audience: '420 संपर्क', sendAt: 'कल, 5:30 PM' }
    ]
  },
  notifications: [
    { title: 'नया हाई-इंटेंट लीड', desc: 'फैजान अहमद प्रीमियम सिल्क स्कार्फ के लिए थोक मूल्य निर्धारण के बारे में पूछ रहा है।', time: '2 मिनट पहले' },
    { title: 'ब्रॉडकास्ट पूरा हुआ', desc: "'रमजान ऑफर' अभियान सफलतापूर्वक 1,240 संपर्कों को भेज दिया गया है।", time: '1 घंटा पहले' },
    { title: 'SOVA नॉलेज अपडेट', desc: 'नया उत्पाद "कॉटन टी-शर्ट" आपके कैटलॉग में जोड़ा गया है और AI उत्तरों के लिए तैयार है।', time: '3 घंटे पहले' },
    { title: 'इनकमिंग मैसेज', desc: 'सारा खान ने एक संदेश भेजा है। SOVA इसे स्वचालित रूप से संभाल रहा है।', time: '5 घंटे पहले' }
  ],
  chats: [
    { user: 'फैजान अहमद', message: 'नमस्ते, उस जैकेट की कीमत क्या है?', time: '14:23' },
    { user: 'सारा खान', message: 'क्या आपके पास नीले वाले में M साइज उपलब्ध है?', time: '12:05' },
    { user: 'जुबैर शाह', message: 'मैं 3 पीस का ऑर्डर देना चाहता हूं।', time: '09:44' },
    { user: 'नादिया मलिक', message: 'क्या आप कृपया कैटलॉग भेज सकते हैं?', time: 'कल' },
    { user: 'बिलाल रज़ा', message: 'आपके डिलीवरी शुल्क क्या हैं?', time: 'कल' }
  ],
  reports: {
    stats: {
      revenue: '₹ 8.4L',
      orderRate: '37%',
      resolved: '1,284',
      revenueChange: '+18%',
      orderRateChange: '+6%',
      resolvedChange: '+22%'
    },
    revenueLines: ['₹ 82k', '₹ 95k', '₹ 1.1L', '₹ 1.3L', '₹ 1.5L'],
    rows: [
      { revenue: '₹ 82k', rate: '16.9%' },
      { revenue: '₹ 95k', rate: '17.7%' },
      { revenue: '₹ 1.1L', rate: '17.4%' },
      { revenue: '₹ 1.3L', rate: '18.8%' },
      { revenue: '₹ 1.5L', rate: '20.0%' }
    ]
  },
  drawer: [
    { text: 'व्हाट्सएप पर नई लीड "फैजान" कैप्चर की गई!', time: '2 मिनट पहले' },
    { text: 'आपके कैटलॉग में 5 आइटम स्टॉक से बाहर हैं।', time: '1 घंटा पहले' },
    { text: 'आज SOVA ऑटोमेशन दर में 12% की वृद्धि हुई!', time: '3 घंटे पहले' },
    { text: 'सारा मलिक "प्रीमियम स्कार्फ" में रुचि रखती हैं।', time: '5 घंटे पहले' }
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
      { time: '2 मिनट पहले', meta: 'इलेक्ट्रॉनिक्स - 5 यूनिट थोक अनुरोध' },
      { time: '9 मिनट पहले', meta: 'कपड़े - कार्ट रिकवरी अभियान' },
      { time: '14 मिनट पहले', meta: 'बार-बार आने वाले कम मूल्य के संदेश हटा दिए गए' }
    ]
  },
  threads: {
    3: [
      { from: 'user', text: 'मैं 3 पीस का ऑर्डर देना चाहता हूं।' },
      { from: 'sova', text: 'बढ़िया चुनाव! मैंने आपके 3 पीस के ऑर्डर को नोट कर लिया है। क्या मैं पूछ सकता हूं कि आप किस उत्पाद का जिक्र कर रहे हैं?' },
      { from: 'user', text: 'प्रीमियम सिल्क स्कार्फ।' },
      { from: 'sova', text: 'बेहतरीन! मैं 3x प्रीमियम सिल्क स्كارफ के लिए चालान (Invoice) तैयार कर दूंगा। क्या मैं आपका ऑर्डर कन्फर्म कर दूं?' }
    ]
  },
}
