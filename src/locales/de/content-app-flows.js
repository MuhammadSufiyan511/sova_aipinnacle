export const onboarding = {
  business: {
    title: 'Welche Art von Unternehmen führen Sie?',
    subtitle: 'Dies hilft SOVA, Ihren Workflow und Ihre technischen Anforderungen zu verstehen.',
    searchPlaceholder: 'Branchen suchen...',
    customCategoryPlaceholder: 'Geben Sie Ihre Unternehmenskategorie ein...',
    nextBtn: 'Meine Branche wählen →',
    categories: {
      clothing: { label: 'Kleidung & Mode', desc: 'Automatische Antworten für Größen, Lagerbestand und Lieferung' },
      jewellery: { label: 'Schmuck & Edelsteine', desc: 'Kataloge anzeigen und Fragen zum Goldpreis beantworten' },
      toys: { label: 'Spielzeug & Wiederverkauf', desc: 'Großhandelskäufer und Suchanfragen filtern' },
      'books-stationary': { label: 'Bücher & Schreibwaren', desc: 'Sofortige Suche nach Titeln und Bestand' },
      'dry-fruits': { label: 'Trockenfrüchte & Nüsse', desc: 'Preis, Gewicht und saisonale Großbestellungen' },
      decoration: { label: 'Veranstaltungsdekoration', desc: 'Themenleitfäden und Paketkosten-Automatisierung' },
      electronics: { label: 'Elektronik & Gadgets', desc: 'Produktspezifikationen und Übergabe an den Vertrieb' },
      'medical-instruments': { label: 'Medizinische Instrumente', desc: 'Klinikbedarf und technische Spezifikationen' },
      'surgical-instruments': { label: 'Chirurgische Instrumente', desc: 'Präzisionswerkzeuge und Mengenrabatte' },
      hardware: { label: 'Werkzeuge & Eisenwaren', desc: 'Anfragen zu Baumaterialien und Handwerkern' },
      fireworks: { label: 'Feuerwerk & Sicherheit', desc: 'Saisonale Kataloge und Sicherheitsrichtlinien' },
      service: { label: 'Dienstleistungsunternehmen', desc: 'Buchung, Beratung und lokale Dienstleistungen' },
      agency: { label: 'Agentur & B2B', desc: 'Professionelle Dienstleistungen und Kundenmanagement' },
      creator: { label: 'Content Creator', desc: 'Digitale Produkte und Community-Aufbau' },
      other: { label: 'Etwas anderes', desc: 'Geben Sie Ihre spezifische Nische an' }
    }
  },
  products: {
    title: 'Fügen Sie Ihre Produkte hinzu',
    subtitle: 'SOVA nutzt diesen Katalog, um Kundenfragen automatisch zu beantworten.',
    addBtn: 'Produkt hinzufügen',
    nextBtn: 'Speichern und fortfahren →',
    toastError: 'Bitte fügen Sie mindestens ein Produkt hinzu, damit SOVA mehr über Ihr Unternehmen erfahren kann.',
    modal: {
      titleAdd: 'Neues Produkt hinzufügen',
      titleUpdate: 'Produkt aktualisieren',
      subtitleAdd: 'Geben Sie Ihrem Produkt einen Namen, eine Kurzbeschreibung und optional ein Bild, Video oder PDF an.',
      subtitleUpdate: 'Bearbeiten Sie die Produktdetails, die SOVA in Käufer-Chats verwendet.',
      mediaLabel: 'Produktmedien',
      mediaHelp: 'Klicken zum Hochladen',
      nameLabel: 'Produktname',
      namePlaceholder: 'z.B. Premium-Seidenschal',
      descLabel: 'Beschreibung',
      descPlaceholder: 'z.B. Premium-Seidenschal mit weichem Finish und Geschenkverpackung.',
      saveBtn: 'Produkt speichern',
      updateBtn: 'Aktualisieren',
      invalidMediaType: 'Bitte laden Sie ein gültiges Bild oder Video hoch'
    }
  },
  tone: {
    title: 'Wählen Sie SOVAs Persönlichkeit',
    subtitle: 'Wie soll SOVA mit Ihren Kunden sprechen? Sie können eine oder mehrere Optionen wählen.',
    profiles: {
      professional: { label: 'Professionell', desc: 'Klar, höflich und geschäftsorientiert' },
      friendly: { label: 'Freundlich', desc: 'Herzlich, einladend und zugänglich' },
      persuasive: { label: 'Überzeugend', desc: 'Vertriebsorientiert, hebt Vorteile hervor' },
      direct: { label: 'Direkt', desc: 'Kurz, prägnant und auf den Punkt' },
      playful: { label: 'Verspielt', desc: 'Verwendet Emojis, energisch und lustig' },
      empathetic: { label: 'Einfühlsam', desc: 'Verständnisvoll, geduldig und hilfsbereit' }
    },
    completeBtn: 'Dashboard starten'
  },
  loader: {
    title: 'Ihr AI-Vertriebsagent wird vorbereitet',
    subtitle: 'Wir konfigurieren SOVA mit Ihren Produkten und Präferenzen.',
    init: 'Onboarding wird gestartet',
    wait: 'Bitte warten Sie, während wir Ihr Setup vorbereiten.',
    finalWait: 'Bitte warten Sie, während wir Ihr Setup abschließen.',
    steps: {
      catalog: 'Ihr Katalog wird erstellt...',
      ai: 'KI-Persönlichkeit wird angewendet...',
      meta: 'Integration mit Meta API...',
      workspace: 'Ihr Arbeitsbereich wird vorbereitet...'
    }
  }
}

export const admin = {
  nav: {
    workspace: 'Arbeitsbereich',
    overview: 'Übersicht',
    products: 'Produkte',
    chat: 'Posteingang',
    broadcasts: 'Kampagnen',
    reports: 'Berichte',
    settings: 'Einstellungen',
    notifications: 'Benachrichtigungen',
    profile: 'Profil'
  },
  common: {
    currentView: 'Aktuelle Ansicht',
    automationLive: 'Automatisierung ist aktiv',
    active: 'Aktiv',
    inactive: 'Inaktiv',
    currencySymbol: '€',
    currencyCode: 'EUR',
    live: 'Live',
    previous: 'Zurück',
    next: 'Weiter',
    preview: 'Vorschau',
    open: 'Öffnen',
    edit: 'Bearbeiten',
    starter: 'Starter',
    growth: 'Wachstum',
    scale: 'Skalierung',
    units: 'Einheiten',
  },
  broadcasts: {
    title: 'Broadcast-Kampagnen',
    subtitle: 'Planen Sie WhatsApp-Nachrichten an Leads, Kunden und Segmente — powered by SOVA.',
    newBtn: 'Neuer Broadcast',
    stats: {
      scheduled: 'Geplant',
      sentWeek: 'Diese Woche gesendet',
      avgResponse: 'Durchschn. Antwortrate'
    },
    workflow: {
      title: 'Automatisierungs-Workflow',
      subtitle: 'Wie SOVA eingehende WhatsApp-Nachrichten in qualifizierte Leads umwandelt',
      nodes: {
        trigger: { label: 'Eingehende Nachricht', sub: 'WhatsApp-Auslöser' },
        filter: { label: 'Absichtsfilter', sub: 'SOVA erkennt Lead-Qualität' },
        route: { label: 'Weiterleiten & Antworten', sub: 'Automatische Antwort gesendet' },
        capture: { label: 'Lead erfasst', sub: 'CRM-Eintrag erstellt' }
      },
      status: {
        active: 'Aktiv',
        processing: 'In Arbeit',
        delivered: 'Zugestellt',
        captured: 'Erfasst'
      }
    },
    campaigns: {
      title: 'Alle Kampagnen',
      status: {
        scheduled: 'Geplant',
        draft: 'Entwurf',
        sent: 'Gesendet'
      },
      meta: {
        audience: 'Zielgruppe: {{count}}',
        powered: 'Betrieben von SOVA-Automatisierung',
        stats: 'Öffnungen: {{opens}} · Antworten: {{replies}}'
      }
    }
  },
  products: {
    title: 'Produktkatalog',
    subtitle: 'SOVA teilt {{count}} Artikel in Käufer-Chats',
    newBtn: 'Produkt hinzufügen',
    banner: 'SOVA nutzt Ihren Katalog, um Fragen zu Produktverfügbarkeit, Preisen und Funktionen automatisch zu beantworten.',
    empty: {
      title: 'Noch keine Produkte',
      desc: 'Fügen Sie Ihr erstes Produkt hinzu, damit SOVA es auf WhatsApp mit potenziellen Käufern teilen kann.',
      btn: 'Erstes Produkt hinzufügen'
    },
    item: {
      price: '{{price}} €',
      priceLabel: 'Preis',
      stockLabel: 'Bestand',
      skuLabel: 'SKU-Nummer',
      specsTitle: 'Spezifikationen',
      editBtn: 'Bearbeiten',
      mediaLabel: 'Medientyp',
      view: 'Ansehen',
      active: 'Aktiv',
      inactive: 'Inaktiv',
      activate: 'Aktivieren',
      deactivate: 'Deaktivieren',
      modalTitle: 'Produktübersicht',
      noDescription: 'Noch keine Beschreibung hinzugefügt.',
      none: 'Keine',
      deleteConfirmTitle: 'Produkt löschen?',
      deleteConfirmDesc: 'Diese Aktion kann nicht rückgängig gemacht werden. Alle mit diesem Produkt verbundenen Daten werden dauerhaft entfernt.',
      deleteConfirmBtn: 'Ja, Produkt löschen',
      deleteCancelBtn: 'Vorerst behalten',
      deleteSuccess: 'Produkt erfolgreich gelöscht',
    },
    controls: {
      searchPlaceholder: 'Produkte suchen...',
      show: 'Anzeigen',
      perPage: 'pro Seite',
      all: 'Alle',
      pageInfo: '{{start}}-{{end}} von {{total}} Produkten',
      filters: {
        all: 'Alle',
        active: 'Aktiv',
        inactive: 'Inaktiv'
      },
      empty: {
        title: 'Keine passenden Produkte',
        desc: 'Versuchen Sie einen anderen Suchbegriff oder ändern Sie den aktiven Filter.'
      }
    }
  },
  addProductOverview: {
    titleAdd: 'Neuen Artikel hinzufügen',
    titleEdit: 'Artikel bearbeiten',
    subtitleAdd: 'Erstellen Sie einen professionellen Eintrag für Ihren Shop-Katalog.',
    subtitleEdit: 'Aktualisieren Sie die Artikeldetails für bessere KI-Antworten.',
    backToCatalog: 'Zurück zum Shop-Katalog',
    editorInitialising: 'Editor wird geöffnet...',
    steps: {
      basics: 'Basisinformationen',
      category: 'Artikeldetails',
      media: 'Medien & Bilder',
      pricing: 'Preis & Bestand',
    },
    sections: {
      basics: {
        title: 'Allgemeine Informationen',
        subtitle: 'Grundlegende Details zum Artikel.',
        nameLabel: 'Artikelname',
        namePlaceholder: 'z.B. Baumwoll-T-Shirt',
        descriptionLabel: 'Beschreibung',
        descriptionPlaceholder: 'Erzählen Sie Ihren Kunden mehr über diesen Artikel...',
        brandLabel: 'Markenname',
        brandPlaceholder: 'z.B. Lokaler Designer',
      },
      category: {
        title: 'Kategorisierung',
        subtitle: 'Helfen Sie Käufern, den Artikel leichter zu finden.',
        industryLabel: 'Branche',
        desc: 'Klassifizierung und Hierarchie',
        categoryLabel: 'Hauptkategorie',
        categoryPlaceholder: 'Kategorie wählen',
        subCategoryLabel: 'Artikeltyp',
        subCategoryPlaceholder: 'Typ wählen',
        newSubCategory: 'Neuer Typ',
        customCategoryLabel: 'Eigener Kategoriename',
        customCategoryPlaceholder: 'Kategorienamen eingeben',
        customSubCategoryLabel: 'Eigener Typname',
        customSubCategoryPlaceholder: 'Typnamen eingeben',
        newSubCategory: 'Neuer Typ',
        customSetupTitle: 'Eigene Kategorie-Konfiguration',
        customSetupSubtitle: 'Legen Sie fest, wie sich dieser Artikel verhält',
        productTypeLabel: 'Produkt-Klassifizierung',
        typePhysical: 'Physisches Produkt',
        typeDigital: 'Digitales Asset',
        typeService: 'Dienstleistung',
        typeSubscription: 'Abonnement',
        promptNewType: 'Neuen Produkttyp eingeben...',
        addNewType: 'Neuen Typ hinzufügen',
        trackStock: 'Bestand verfolgen',
        taxable: 'Steuerpflichtig',
        weightLabel: 'Gewicht (kg)',
        customFieldsTitle: 'Zusätzliche Details',
        addFieldBtn: 'Detail hinzufügen',
        fieldLabelPlaceholder: 'z.B. Material',
        fieldValuePlaceholder: 'z.B. 100% Baumwolle',
      },
      pricing: {
        title: 'Preis & Bestand',
        subtitle: 'Legen Sie den Verkaufspreis fest und prüfen Sie den Bestand.',
        priceLabel: 'Verkaufspreis',
        salePriceLabel: 'Angebotspreis',
        salePricePlaceholder: 'Optional',
        stockLabel: 'Gesamtbestand',
        stockPlaceholder: 'Verfügbare Menge',
        currentStockLabel: 'Aktueller Bestand',
        minStockLabel: 'Warnung bei geringem Lagerbestand',
        skuLabel: 'Artikelcode / SKU',
        skuPlaceholder: 'z.B. ARTIKEL-001',
        skuHelp: 'Interner Referenzcode des Shops',
        minOrderLabel: 'Mindestbestellmenge',
      },
      variants: {
        title: 'Produktvarianten',
        subtitle: 'Definieren Sie mehrere Sätze von Größen, Farben und Materialien',
        desc: 'Verfügbare Größen- und Farbsätze',
        rowLabel: 'Variationsset',
        expandAll: 'Alle erweitern',
        collapseAll: 'Alle einklappen',
        addGroup: 'Variantengruppe hinzufügen',
        saveVariant: 'Variante speichern',
        newGroupLabel: 'Neue Variantengruppe',
        inputPlaceholder: 'Tippen und Enter drücken',
        noVariantsFound: 'Keine Produktvarianten für diese Kategorie gefunden',
        noStandardFields: 'Keine Standard-Variantenfelder (Größe, Farbe usw.) für diese Kategorie definiert.',
        noVariantFields: 'Keine Standard-Variantenfelder (Größe, Farbe usw.) für diese Kategorie definiert.',
        noVariantFieldsSubtitle: 'Sie können unten weiterhin benutzerdefinierte Spezifikationen hinzufügen.',
        sizeLabel: 'Größe',
        colorsLabel: '{{count}} Farben',
        colorLabel: '{{count}} Farbe',
      },
      media: {
        title: 'Artikelbilder & Medien',
        noMediaAttached: 'Keine Bilder hochgeladen',
        upload: 'Medien hochladen',
        primary: 'Hauptbild',
        makePrimary: 'Als Hauptbild festlegen',
        dropTitle: 'Zum Hochladen ablegen',
        dropSubtitle: 'Legen Sie Dateien hier ab',
        editorTitle: 'Medien-Editor',
        editorSubtitle: 'Bilder zuschneiden und anpassen',
      },
      actions: {
        submitAdd: 'Eintrag erstellen',
        submitEdit: 'Änderungen speichern',
        saveDraft: 'Als Entwurf speichern',
      },
    },
    validation: {
      nameRequired: 'Produktname ist erforderlich',
      descriptionRequired: 'Bitte eine Produktbeschreibung hinzufügen',
      mediaRequired: 'Bitte mindestens ein Foto oder Video hochladen',
      categoryRequired: 'Bitte eine Hauptkategorie auswählen',
      subCategoryRequired: 'Bitte eine Unterkategorie auswählen',
      priceRequired: 'Bitte gib einen Verkaufspreis ein',
      stockRequired: 'Bitte gib eine Lagerbestandsmenge ein',
      maxFilesExceeded: 'Sie können nur bis zu {{max}} Dateien hochladen.',
      imageTooLarge: 'ist zu groß.',
      videoTooLarge: '{{name}} überschreitet das Limit von 15 MB.',
      videoDurationInvalid: '{{name}} muss 15-20 Sekunden lang sein (Aktuell: {{duration}}s).',
      compressLink: 'Hier komprimieren',
      missingFields: 'Bitte fülle alle Pflichtfelder aus, bevor du speicherst',
      createSuccess: 'Artikel erfolgreich hinzugefügt',
      updateSuccess: 'Details erfolgreich aktualisiert',
      statusActive: 'Produkt als aktiv markiert',
      statusInactive: 'Produkt als inaktiv markiert',
    },
    fields: {
      selectOption: 'Option wählen',
      customValue: 'Eigener Wert...',
      customValuePlaceholder: 'Eigenen Wert eingeben',
      colorNotFound: 'Farbname nicht erkannt. Es wird als benutzerdefiniertes Label hinzugefügt.',
      size: { label: 'Größe', placeholder: 'z.B. XL oder 42' },
      color: { label: 'Farbe', placeholder: 'z.B. Königsblau' },
      fabric: { label: 'Material/Stoff', placeholder: 'z.B. Seide' },
      fit: { label: 'Passform (Fit)', placeholder: 'z.B. Slim Fit' },
      pattern: { label: 'Muster', placeholder: 'z.B. Gemustert' },
      ageRange: { label: 'Altersgruppe', placeholder: 'z.B. 5-8 Jahre' },
      gender: { label: 'Geschlecht', placeholder: 'Geschlecht wählen' },
      purity: { label: 'Goldgehalt', placeholder: 'z.B. 22 Karat' },
      weight: { label: 'Gewicht', placeholder: 'z.B. 10 Gramm' },
      brand: { label: 'Marke', placeholder: 'z.B. Samsung' },
      storage: { label: 'Speicherkapazität', placeholder: 'z.B. 128 GB' },
      ram: { label: 'Arbeitsspeicher', placeholder: 'z.B. 8 GB' },
      processor: { label: 'Prozessor', placeholder: 'z.B. Core i7' },
      subject: { label: 'Fachbereich', placeholder: 'z.B. Biologie' },
      origin: { label: 'Herkunftsland', placeholder: 'z.B. Deutschland' },
    },
    categories: {
      clothing: 'Kleidung & Mode',
      jewellery: 'Schmuck & Uhren',
      electronics: 'Telefone & Geräte',
      toys: 'Kinder & Spielzeug',
      dry_fruits: 'Trockenfrüchte & Nüsse',
      decoration: 'Hausdeko & Events',
      books_stationary: 'Bücher & Schreibwaren',
      medical_instruments: 'Medizinische Instrumente',
      surgical_instruments: 'Chirurgische Instrumente',
      hardware: 'Eisenwaren & Werkzeuge',
      fireworks: 'Feuerwerk',
      other: 'Andere Artikel',
    },
    subcategories: {
      menswear: 'Herrenmode',
      womenswear: 'Damenmode',
      'kids-wear': 'Kinder- & Babymode',
      abayas: 'Abayas & Bescheidene Mode',
      'traditional-wear': 'Trachten & Traditionelle Kleidung',
      sportswear: 'Sportbekleidung',
      outerwear: 'Jacken & Mäntel',
      footwear: 'Schuhe',
      accessories: 'Accessoires',
      'gold-jewelry': 'Goldschmuck',
      'silver-jewelry': 'Silberschmuck',
      'diamond-precious': 'Diamanten & Edelsteine',
      watches: 'Luxusuhren',
      rings: 'Ringe',
      necklaces: 'Halsketten',
      bracelets: 'Armbänder',
      earrings: 'Ohrringe',
      'costume-jewelry': 'Modeschmuck',
      smartphones: 'Smartphones',
      'laptops-pc': 'Laptops & PCs',
      'audio-video': 'Audio & Video',
      photography: 'Kameras',
      gaming: 'Gaming-Zubehör',
      'smart-home': 'Smart Home',
      wearables: 'Smartwatches',
      educational: 'Lernspielzeug',
      'board-games': 'Gesellschaftsspiele',
      'outdoor-toys': 'Outdoor-Spielzeug',
      'remote-control': 'Ferngesteuertes Spielzeug',
      'action-figures': 'Actionfiguren',
      'dolls-plush': 'Puppen & Plüschtiere',
      crafts: 'Basteln & Handarbeit',
      'roasted-nuts': 'Geröstete Nüsse',
      'raw-nuts': 'Rohe Nüsse',
      'dried-berries': 'Getrocknete Früchte',
      'dates-varieties': 'Premium-Datteln',
      'seeds-mix': 'Kerne & Mischungen',
      'home-decor': 'Heimdekoration',
      'wall-art': 'Wandbilder',
      lighting: 'Beleuchtung',
      'event-decor': 'Eventdekoration',
      'academic-books': 'Fachbücher',
      'fiction-nonfiction': 'Romane & Sachbücher',
      'stationary-office': 'Bürobedarf',
      'art-supplies': 'Künstlerbedarf',
      'writing-instruments': 'Schreibgeräte',
      diagnostics: 'Diagnostikgeräte',
      monitoring: 'Patientenüberwachung',
      'rehab-mobility': 'Mobilitätshilfen',
      respiratory: 'Beatmungsgeräte',
      'general-surgery': 'Allgemeine Chirurgie',
      'dental-instruments': 'Dentalinstrumente',
      'orthopedic-surgery': 'Orthopädische Chirurgie',
      'ophthalmic-surgery': 'Augenchirurgie',
      'power-tools': 'Elektrowerkzeuge',
      'hand-tools': 'Handwerkzeuge',
      'plumbing-hardware': 'Sanitärbedarf',
      'electrical-hardware': 'Elektrobedarf',
      'aerial-rockets': 'Luftraketen',
      'multi-shot-cakes': 'Feuerwerksbatterien',
      'fountains-wheels': 'Fontänen & Räder',
      'ground-fireworks': 'Bodenfeuerwerk',
      'general-merchandise': 'Allgemeine Waren',
      'gift-items': 'Geschenkartikel',
    },
    nested: {
      formal_shirts: 'Formelle Hemden',
      t_shirts: 'T-Shirts',
      polos: 'Poloshirts',
      trousers: 'Hosen',
      jeans: 'Jeans',
      suits_blazers: 'Anzüge & Sakkos',
      nightwear: 'Nachtwäsche',
      dresses: 'Kleider',
      tops_blouses: 'Tops & Blusen',
      skirts: 'Röcke',
      ethnic_wear: 'Traditionelle Kleidung',
      lingerie: 'Lingerie',
      loungewear: 'Hausbekleidung',
      infant_0_2y_: 'Baby (0-2 Jahre)',
      toddler_2_5y_: 'Kleinkind (2-5 Jahre)',
      boys_fashion: 'Jungenmode',
      girls_fashion: 'Mädchenmode',
      school_uniforms: 'Schuluniformen',
      casual_abayas: 'Freizeit-Abayas',
      formal_evening_abayas: 'Abend-Abayas',
      bridal_abayas: 'Braut-Abayas',
      butterfly_abayas: 'Schmetterlings-Abayas',
      bisht_abayas: 'Bisht-Abayas',
      kimonos: 'Kimonos',
      kaftans: 'Kaftane',
      shalwar_kameez: 'Shalwar Kameez',
      kurta_pajama: 'Kurta Pajama',
      sherwani: 'Sherwani',
      sarees: 'Saris',
      lehengas: 'Lehengas',
      gym_training: 'Gym & Training',
      running_gear: 'Laufausrüstung',
      football_kits: 'Fußballtrikots',
      cricket_gear: 'Cricket-Ausrüstung',
      yoga_pilates: 'Yoga & Pilates',
      leather_jackets: 'Lederjacken',
      puffer_jackets: 'Steppjacken',
      trench_coats: 'Trenchcoats',
      windbreakers: 'Windjacken',
      hoodies: 'Hoodies',
      formal_shoes: 'Formelle Schuhe',
      sneakers: 'Sneaker',
      sandals_flip_flops: 'Sandalen',
      boots: 'Stiefel',
      heels: 'Absatzschuhe',
      belts: 'Gürtel',
      hats_caps: 'Hüte & Kappen',
      ties_bowties: 'Krawatten & Fliegen',
      scarves: 'Schals',
      gloves: 'Handschuhe',
      engagement_rings: 'Verlobungsringe',
      necklaces: 'Halsketten',
      bangles: 'Armreifen',
      earrings: 'Ohrringe',
      gold_coins_bars: 'Goldmünzen & Barren',
      rings: 'Ringe',
      chains: 'Ketten',
      bracelets: 'Armbänder',
      anklets: 'Fußkettchen',
      solitaire_rings: 'Solitärringe',
      diamond_sets: 'Diamant-Sets',
      loose_gemstones: 'Lose Edelsteine',
      birthstones: 'Geburtssteine',
      automatic_watches: 'Automatikuhren',
      quartz_watches: 'Quarzuhren',
      chrono_watches: 'Chronographen',
      smart_luxury_watches: 'Smart Luxury Watches',
      wedding_bands: 'Eheringe',
      fashion_rings: 'Moderinge',
      couple_rings: 'Partnerringe',
      chokers: 'Choker',
      long_chains: 'Lange Ketten',
      lockets: 'Medaillons',
      cuffs: 'Armspangen',
      charm_bracelets: 'Charm-Armbänder',
      tennis_bracelets: 'Tennis-Armbänder',
      studs: 'Ohrstecker',
      hoops: 'Creolen',
      drops: 'Ohrhänger',
      jhumkas: 'Jhumkas',
      bohemian: 'Bohemian',
      antique_style: 'Antik-Stil',
      modern_minimalist: 'Modern & Minimalistisch',
      android_phones: 'Android-Telefone',
      iphones: 'iPhones',
      budget_phones: 'Einsteiger-Telefone',
      tablets: 'Tablets',
      foldables: 'Foldables',
      gaming_laptops: 'Gaming-Laptops',
      ultrabooks: 'Ultrabooks',
      business_laptops: 'Business-Laptops',
      desktops: 'Desktop-PCs',
      workstations: 'Workstations',
      wireless_earbuds: 'In-Ear-Kopfhörer',
      over_ear_headphones: 'Over-Ear-Kopfhörer',
      bluetooth_speakers: 'Bluetooth-Lautsprecher',
      home_theater: 'Heimkino',
      microphones: 'Mikrofone',
      dslrs: 'DSLR-Kameras',
      mirrorless: 'Mirrorless-Kameras',
      action_cameras: 'Action-Cams',
      drones: 'Drohnen',
      lenses: 'Objektive',
      consoles: 'Konsolen',
      pc_components: 'PC-Komponenten',
      gaming_keyboards: 'Gaming-Tastaturen',
      gaming_mice: 'Gaming-Mäuse',
      monitors: 'Monitore',
      smart_lighting: 'Smarte Beleuchtung',
      security_cameras: 'Überwachungskameras',
      smart_locks: 'Smarte Schlösser',
      smart_speakers: 'Smarte Lautsprecher',
      fitness_trackers: 'Fitness-Tracker',
      smartwatches: 'Smartwatches',
      vr_headsets: 'VR-Headsets',
      power_banks: 'Powerbanks',
      usb_cables: 'USB-Kabel',
      laptop_chargers: 'Laptop-Ladegeräte',
      memory_cards: 'Speicherkarten',
      science_kits: 'Baukästen',
      coding_toys: 'Programmierspielzeug',
      math_puzzles: 'Mathe-Rätsel',
      language_learning: 'Sprachen lernen',
      family_games: 'Familienspiele',
      strategy_games: 'Strategiespiele',
      card_games: 'Kartenspiele',
      puzzles: 'Puzzles',
      bicycles: 'Fahrräder',
      scooters: 'Scooter',
      trampolines: 'Trampoline',
      pool_toys: 'Pool-Spielzeug',
      rc_cars: 'RC-Autos',
      rc_boats: 'RC-Boote',
      rc_helicopters: 'RC-Hubschrauber',
      superheroes: 'Superhelden',
      anime_figures: 'Anime-Figuren',
      legacy_collectibles: 'Sammlerstücke',
      teddy_bears: 'Teddybären',
      animated_plush: 'Interaktive Plüschtiere',
      painting: 'Malen',
      slime_kits: 'Slime-Sets',
      pottery: 'Töpferei',
      jewelry_making: 'Schmuckbasteln',
      roasted_almonds: 'Geröstete Mandeln',
      salted_cashews: 'Gesalzene Cashews',
      pistachios: 'Pistazien',
      walnuts: 'Walnüsse',
      raw_almonds: 'Rohe Mandeln',
      pecans: 'Pekannüsse',
      hazelnuts: 'Haselnüsse',
      pine_nuts: 'Pinienkerne',
      cranberries: 'Cranberries',
      blueberries: 'Blaubeeren',
      apricots: 'Aprikosen',
      figs: 'Feigen',
      ajwa: 'Ajwa-Datteln',
      medjool: 'Medjool-Datteln',
      mabroom: 'Mabroom-Datteln',
      amber: 'Amber-Datteln',
      sukkari: 'Sukkari-Datteln',
      pumpkin_seeds: 'Kürbiskerne',
      trail_mix: 'Studentenfutter',
      sunflower_seeds: 'Sonnenblumenkerne',
      vases: 'Vasen',
      cushions: 'Kissen',
      candles: 'Kerzen',
      statues: 'Figuren',
      canvas_paintings: 'Leinwandbilder',
      wall_mirrors: 'Wandspiegel',
      photo_frames: 'Bilderrahmen',
      chandeliers: 'Kronleuchter',
      table_lamps: 'Tischlampen',
      floor_lamps: 'Stehlampen',
      led_strips: 'LED-Streifen',
      balloons: 'Luftballons',
      backdrops: 'Hintergründe',
      wedding_decor: 'Hochzeitsdeko',
      medical: 'Medizinisch',
      engineering: 'Technisch',
      commerce: 'Handel',
      school_books: 'Schulbücher',
      sci_fi: 'Science-Fiction',
      mystery: 'Krimi & Mystery',
      biography: 'Biographien',
      self_help: 'Ratgeber',
      paper: 'Papier',
      staplers: 'Tacker',
      calculators: 'Taschenrechner',
      canvases: 'Keilrahmen',
      acrylic_paints: 'Acrylfarben',
      brushes: 'Pinsel',
      sketchbooks: 'Skizzenbücher',
      fountain_pens: 'Füllhalter',
      ballpoint_pens: 'Kugelschreiber',
      gift_sets: 'Geschenksets',
      blood_pressure_monitors: 'Blutdruckmessgeräte',
      digital_thermometers: 'Digitalthermometer',
      stethoscopes: 'Stethoskope',
      glucometers: 'Blutzuckermessgeräte',
      pulse_oximeters: 'Pulsoximeter',
      ecg_machines: 'EKG-Geräte',
      heart_monitors: 'Herzmonitore',
      wheelchairs: 'Rollstühle',
      walkers: 'Gehhilfen',
      crutches: 'Krücken',
      support_belts: 'Stützgürtel',
      nebulizers: 'Inhalationsgeräte',
      oxygen_concentrators: 'Sauerstoffkonzentratoren',
      cpap_machines: 'CPAP-Geräte',
      forceps: 'Pinzetten',
      scissors: 'Scheren',
      scalpels: 'Skalpelle',
      retractors: 'Wundhaken',
      needle_holders: 'Nadelhalter',
      extractors: 'Extraktoren',
      probes: 'Sonden',
      dental_mirrors: 'Zahnspiegel',
      elevators: 'Heber',
      bone_drills: 'Knochenbohrer',
      screws_plates: 'Schrauben & Platten',
      bone_saws: 'Knochensägen',
      eye_speculums: 'Lidsperrer',
      microsurgical_scissors: 'Mikroscheren',
      drills: 'Bohrmaschinen',
      angle_grinders: 'Winkelschleifer',
      electric_saws: 'Elektrische Sägen',
      rotary_hammers: 'Bohrhämmer',
      wrenches: 'Schraubenschlüssel',
      screwdrivers: 'Schraubendreher',
      pliers: 'Zangen',
      hammers: 'Hämmer',
      pipe_fittings: 'Rohrfittings',
      faucets: 'Armaturen',
      valves: 'Ventile',
      pumps: 'Pumpen',
      circuit_breakers: 'Leistungsschalter',
      cables_wires: 'Kabel & Drähte',
      switches: 'Schalter',
      inverters: 'Wechselrichter',
      big_burst_rockets: 'Großraketen',
      double_burst: 'Doppelschlag-Raketen',
      signal_rockets: 'Signalraketen',
      _25_shots: '25 Schuss',
      _50_shots: '50 Schuss',
      _100_shots: '100 Schuss',
      fan_cakes: 'Fächer-Batterien',
      glittering_fountains: 'Glitzer-Fontänen',
      color_wheels: 'Farbräder',
      cone_fountains: 'Vulkan-Fontänen',
      sparklers: 'Wunderkerzen',
      ground_spinners: 'Bodenwirbel',
      cracklers: 'Knallartikel',
      household_items: 'Haushaltsartikel',
      groceries: 'Lebensmittel',
      gift_cards: 'Geschenkkarten',
      occasional_gifts: 'Gelegenheitsgeschenke',
    },
    summary: {
      untitled: 'Unbenannter Artikel',
      statusReady: 'Auf Lager',
      statusOutOfStock: 'Nicht vorrätig',
      industryLabel: 'Geschäftskategorie',
      listingHealth: 'Status des Eintrags',
      visibility: 'Sichtbarkeit',
      marketLive: 'Aktiv im Shop',
      inventoryState: 'Lagerstatus',
      lowStock: 'Geringer Bestand!',
      stable: 'Bestand stabil',
    },
  },
  overview: {
    stats: {
      activeConversations: 'Aktive Gespräche',
      qualifiedLeads: 'Qualifizierte Leads',
      automatedReplies: 'Autom. Antworten',
      avgResponseTime: 'Durchschn. Zeit'
    },
    quickActions: {
      products: 'Artikel hinzufügen',
      settings: 'Automatisierung setup',
      businessSettings: 'Geschäftseinstellungen',
      files: 'Dateien ansehen'
    },
    charts: {
      saleTrend: {
        title: 'Verkaufstrend',
        subtitle: 'Leistung der letzten 7 Tage',
        pill: '+{{count}}% Anstieg',
        tooltipLabel: 'Abschluss'
      },
      leadMix: {
        title: 'Lead-Verteilung',
        subtitle: 'Follow-ups vs. Käufer',
        label: 'Käufer'
      },
      leadsByDay: {
        title: 'Tägliche Leads',
        subtitle: 'Wöchentliche Aktivität',
        pill: 'Spitzenzeit'
      }
    },
    donuts: {
      buyers: 'Käufer',
      followups: 'Follow-ups',
      spam: 'Spam'
    },
    activity: {
      title: 'Kürzliche Aktivitäten',
      subtitle: 'Echtzeit-Updates von SOVA',
      feeds: {
        order: 'Neue Kaufabsicht erkannt',
        followup: 'Autom. Follow-up geplant',
        spam: 'Unangemessene Nachricht blockiert'
      }
    }
  },
  reports: {
    title: 'Verkaufsberichte',
    subtitle: 'Verfolgen Sie, wie SOVA Gespräche in echte Bestellungen umwandelt.',
    exportBtn: 'Bericht exportieren',
    stats: {
      revenue: 'Beeinflusster Umsatz',
      orderRate: 'Bestellrate',
      resolved: 'Gelöste Gespräche'
    },
    chart: {
      title: 'Durch SOVA beeinflusster Umsatz',
      subtitle: 'Tägliche Verkäufe aus autom. Gesprächen',
      pill: 'Diese Woche'
    },
    table: {
      title: 'Wöchentliche Performance',
      subtitle: 'Aufschlüsselung von Gesprächen, Bestellungen und Umsatz.',
      headers: {
        day: 'Tag',
        chats: 'Chats',
        orders: 'Bestellungen',
        conversion: 'Konversion',
        revenue: 'Umsatz'
      }
    }
  },
  settings: {
    title: 'Automatisierungseinstellungen',
    subtitle: 'Steuern Sie die Stimme Ihres KI-Agenten und die Regeln.',
    sections: {
      business: {
        title: 'Geschäfts-Setup',
        subtitle: 'Kategorie ändern oder Setup neu starten? Hier aktualisieren.',
        button: 'Geschäft ändern',
        current: 'Aktuelles Geschäft',
        modalTitle: 'Business-Kategorie aktualisieren',
        modalSubtitle: 'Wählen Sie den Typ, damit SOVA im richtigen Kontext antwortet.',
        save: 'Änderungen speichern',
        cancel: 'Abbrechen',
        close: 'Schließen'
      },
      voice: {
        title: 'Markenstimme & Persönlichkeit',
        subtitle: 'Wählen Sie, wie SOVA mit Ihren Kunden spricht.',
        current: 'Aktuelle Stimme',
        button: 'Stimme ändern',
        modalTitle: 'Stimmen-Setup'
      },
      rules: {
        title: 'Automatisierungsregeln',
        subtitle: 'Antwortverhalten und Filter festlegen.'
      }
    },
    tones: {
      professional: { label: 'Professionell', desc: 'Sachlich und formell' },
      friendly: { label: 'Freundlich', desc: 'Hilfsbereit und herzlich' },
      direct: { label: 'Direkt', desc: 'Prägnant und genau' },
      persuasive: { label: 'Überzeugend', desc: 'Verkaufsstark und wirkungsvoll' },
      playful: { label: 'Verspielt', desc: 'Locker, lebendig und frech' },
      empathetic: { label: 'Einfühlsam', desc: 'Verständnisvoll, ruhig und hilfreich' },
      creative: { label: 'Kreativ', desc: 'Begeisternd und originell' }
    },
    rows: {
      autoReply: { title: 'Auto-Antworten', desc: 'Lassen Sie SOVA sofort auf Kunden antworten.' },
      spamFilter: { title: 'Spam-Filter', desc: 'Blockiert Unangemessenes automatisch.' },
      alerts: { title: 'Wichtige Benachrichtigungen', desc: 'Update bei echten Kaufabsichten.' },
      tfa: { title: 'Zwei-Faktor-Authentifizierung', desc: 'Erhöhen Sie die Sicherheit Ihres Workspaces.' }
    },
    comingSoon: 'Demnächst'
  },
  profile: {
    header: {
      label: 'Workspace-Profil',
      desc: 'Verwalten Sie Identität, Sprache und Automatisierung an einem Ort.'
    },
    plan: '{{name}}-Tarif',
    activity: {
      products: 'Verbundene Produkte',
      automations: 'Aktive Automatisierungen',
      alerts: 'Ungelesene Benachrichtigungen'
    },
    details: {
      title: 'Workspace-Details',
      language: 'Aktuelle Sprache',
      products: {
        label: 'Produkte im Katalog',
        ready: '{{count}} bereit für KI-Antworten'
      },
      tones: {
        label: 'Business-Tonprofile',
        ready: '{{count}} Profile konfiguriert'
      }
    },
    business: {
      title: 'Unternehmensprofil',
      cancel: 'Abbrechen',
      save: 'Speichern',
      edit: 'Bearbeiten',
      photoAlt: 'Unternehmensprofil',
      noPhoto: 'Kein Unternehmensbild',
      uploadPhoto: 'Bild hochladen',
      nameLabel: 'Unternehmensname',
      namePlaceholder: 'z. B. Noor Abaya House',
      emptyName: 'Unternehmensname hinzufügen',
      descriptionLabel: 'Unternehmensbeschreibung',
      descriptionPlaceholder: 'Beschreiben Sie, was Sie verkaufen und warum Kunden sich für Sie entscheiden.',
      emptyDescription: 'Kurze Unternehmensbeschreibung hinzufügen',
      locationLabel: 'Unternehmensstandort',
      locationPlaceholder: 'z. B. Berlin, Deutschland',
      emptyLocation: 'Standort hinzufügen'
    },
    summary: {
      title: 'Profilzusammenfassung',
      desc: 'Dieser Workspace ist bereit für WhatsApp-Automatisierung mit SOVA.'
    }
  },
  chat: {
    title: 'WhatsApp-Posteingang',
    activeStatus: 'Aktiv',
    searchPlaceholder: 'Gespräche suchen...',
    emptyState: 'Gespräch zum Anzeigen wählen',
    sovaLabel: 'SOVA AI',
    status: {
      automated: 'Automatisiert',
      captured: 'Lead erfasst'
    },
    previewLabel: 'WhatsApp-Chatvorschau',
    defaultReply: 'Hallo! Danke für Ihre Nachricht. Ich bin SOVA, Ihr Vertriebsassistent. Wie kann ich Ihnen heute helfen?'
  },
  drawer: {
    title: 'Benachrichtigungen',
    empty: 'Keine neuen Benachrichtigungen',
    readAll: 'Alle als gelesen markieren'
  },
  celebration: {
    eyebrow: 'SOVA Start',
    title: 'Ihr Workspace ist bereit!',
    checklist: {
      whatsapp: 'WhatsApp-Automatisierung verbunden',
      filtering: 'Lead-Filterung aktiv',
      followups: 'Follow-ups bereit'
    },
    headline: 'Ihre Chats sind jetzt <gradient>automatisiert</gradient>',
    desc: 'SOVA arbeitet nun für Ihren Workspace. Sie antwortet schnell und verwaltet Verkäufe auf WhatsApp.',
    features: {
      replies: 'Sofortige Antworten sind aktiv',
      whatsapp: 'Ihre WhatsApp-Chats sind nun automatisiert',
      buyers: 'Echte Käufer werden zuerst markiert'
    },
    btn: 'Zurück zum Dashboard'
  },
}

admin.nav.files = 'Dateien'
admin.files = {
  title: 'Dateibibliothek',
  subtitle: '{{count}} Datei{{s}} bereit für SOVA-Antworten',
  newBtn: 'Datei hinzufügen',
  banner: 'Bewahren Sie Bilder, Videos und PDFs an einem Ort auf.',
  empty: {
    title: 'Noch keine Dateien',
    desc: 'Fügen Sie Ihre erste Datei hinzu, damit SOVA sie nutzen kann.',
    btn: 'Erste Datei hinzufügen'
  },
  item: {
    view: 'Ansehen',
    active: 'Aktiv',
    inactive: 'Inaktiv',
    activate: 'Aktivieren',
    deactivate: 'Deaktivieren',
    modalTitle: 'Dateiübersicht',
    noDescription: 'Noch keine Beschreibung.',
    none: 'Keine',
    mediaLabel: 'Dateityp',
    fileNameLabel: 'Dateiname',
    types: {
      image: 'Bild',
      video: 'Video',
      file: 'Datei'
    }
  },
  controls: {
    searchPlaceholder: 'Dateien suchen...',
    show: 'Anzeigen',
    perPage: 'pro Seite',
    all: 'Alle',
    pageInfo: '{{start}}-{{end}} von {{total}} Dateien',
    filters: {
      all: 'Alle',
      image: 'Bilder',
      video: 'Videos',
      file: 'Dateien'
    },
    empty: {
      title: 'Keine Dateien gefunden',
      desc: 'Versuchen Sie einen anderen Begriff.'
    }
  },
  modal: {
    titleAdd: 'Neue Datei hinzufügen',
    titleUpdate: 'Datei aktualisieren',
    subtitleAdd: 'Laden Sie ein Medium hoch, das SOVA teilen kann.',
    subtitleUpdate: 'Bearbeiten Sie Details, die SOVA nutzt.',
    mediaLabel: 'Medien',
    mediaHelp: 'Zum Hochladen klicken',
    nameLabel: 'Dateiname',
    namePlaceholder: 'z.B. Katalog Sommer 2026',
    descLabel: 'Beschreibung',
    descPlaceholder: 'z.B. PDF für die neue Sommerkollektion.',
    saveBtn: 'Datei speichern',
    updateBtn: 'Datei aktualisieren',
    invalidMediaType: 'Gültiges Medium hochladen'
  }
}

admin.upgrade = {
  navLabel: 'Plan upgraden',
  cta: 'Plan upgraden',
  mobileCta: 'Upgrade',
  eyebrow: 'Plan-Upgrade',
  title: 'Wählen Sie einen Plan, der mit Ihren Verkäufen wächst',
  subtitle: 'Mehr Automatisierung und KI-Power für Ihr Geschäft.',
  currentPlanLabel: 'Aktueller Plan',
  currentPlanValue: '{{plan}}-Tarif',
  currentPlanHint: 'Upgraden Sie jederzeit für mehr Features.',
  popular: 'Beliebt',
  choosePlan: 'Plan wählen',
  currentPlanButton: 'Aktueller Plan',
  compareTitle: 'Warum Teams upgraden?',
  compareDesc: 'Mit mehr Chats kann SOVA deutlich mehr Arbeit übernehmen.',
  benefits: {
    1: { title: 'Mehr automatisierte Chats', desc: 'Größeres Volumen ohne manuellen Aufwand.' },
    2: { title: 'Stärkere KI-Leistung', desc: 'Besseres Lead-Qualifying durch SOVA.' },
    3: { title: 'Verkaufseinblicke', desc: 'Verfolgen Sie Wachstum und Conversion.' },
    4: { title: 'Für Wachstum gebaut', desc: 'Skalieren Sie reibungslos mit.' },
  },
  plans: {
    starter: {
      badge: 'Starter',
      name: 'Starter',
      price: '19 $/Mo',
      desc: 'Für kleine Teams am Anfang.',
      features: {
        1: 'Bis zu 1.000 Antworten pro Monat',
        2: 'Produkt- & Dateifreigabe',
        3: 'Basis-Automation',
        4: 'Ein Workspace',
      },
    },
    growth: {
      badge: 'Growth',
      name: 'Growth',
      price: '49 $/Mo',
      desc: 'Für aktives Verkaufswachstum.',
      features: {
        1: 'Bis zu 5.000 Antworten pro Monat',
        2: 'Erweiterte Workflows',
        3: 'Intelligente Follow-ups',
        4: 'Schneller Support',
      },
    },
    scale: {
      badge: 'Scale',
      name: 'Scale',
      price: '99 $/Mo',
      desc: 'Für hohes Chat-Volumen.',
      features: {
        1: 'Unbegrenzter Fokus auf Skalierung',
        2: 'Tiefe Automatisierungslogik',
        3: 'Detaillierte Berichte',
        4: 'Priorisierter Support',
      },
    },
  },
}

admin.nav.catalog = 'Shop-Katalog'
admin.nav.addProduct = 'Artikel hinzufügen'
admin.common = admin.common || {}
admin.common.locked = 'Gesperrt'
admin.common.unlockToView = 'Zum Entsperren klicken'

admin.overview.quickActions.businessSettings = 'Geschäftseinstellungen'
admin.overview.quickActions.products = 'Artikel ansehen'
admin.overview.quickActions.files = 'Dateien ansehen'
admin.chat.previewLabel = 'WhatsApp-Chatvorschau'
admin.chat.defaultReply = 'Hallo! Danke für Ihre Nachricht. Ich bin SOVA, Ihr Vertriebsassistent. Wie kann ich Ihnen heute helfen?'

admin.mockData = {
  broadcasts: {
    campaigns: [
      { name: 'Ramadan-Angebot', audience: '1.240 Kontakte', sendAt: 'Heute, 19:00 Uhr' },
      { name: 'Neuer Katalog-Drop', audience: '860 Kontakte', sendAt: 'Wartet auf Genehmigung' },
      { name: 'VIP Follow-up Blast', audience: '420 Kontakte', sendAt: 'Gestern, 17:30 Uhr' }
    ]
  },
  notifications: [
    { title: 'Neuer High-Intent Lead', desc: 'Faizan Ahmed fragt nach Großhandelspreisen für Premium-Seidenschals.', time: 'vor 2 Min.' },
    { title: 'Broadcast abgeschlossen', desc: "Kampagne 'Ramadan-Angebot' wurde erfolgreich an 1.240 Kontakte gesendet.", time: 'vor 1 Std.' },
    { title: 'SOVA Wissens-Update', desc: 'Neues Produkt "Baumwoll-T-Shirt" zum Katalog hinzugefügt und bereit für KI-Antworten.', time: 'vor 3 Std.' },
    { title: 'Eingehende Nachricht', desc: 'Sarah Khan hat eine Nachricht gesendet. SOVA bearbeitet diese automatisch.', time: 'vor 5 Std.' }
  ],
  chats: [
    { user: 'Faizan Ahmed', message: 'Hallo, was kostet diese Jacke?', time: '14:23' },
    { user: 'Sarah Khan', message: 'Haben Sie Größe M in Blau verfügbar?', time: '12:05' },
    { user: 'Zubair Shah', message: 'Ich möchte 3 Stück bestellen.', time: '09:44' },
    { user: 'Nadia Malik', message: 'Können Sie mir bitte den Katalog schicken?', time: 'Gestern' },
    { user: 'Bilal Raza', message: 'Wie hoch sind Ihre Versandkosten?', time: 'Gestern' }
  ],
  reports: {
    stats: {
      revenue: '8,4k €',
      orderRate: '37%',
      resolved: '1.284',
      revenueChange: '+18%',
      orderRateChange: '+6%',
      resolvedChange: '+22%'
    },
    revenueLines: ['820 €', '950 €', '1,1k €', '1,3k €', '1,5k €'],
    rows: [
      { revenue: '820 €', rate: '16.9%' },
      { revenue: '950 €', rate: '17.7%' },
      { revenue: '1,1k €', rate: '17.4%' },
      { revenue: '1,3k €', rate: '18.8%' },
      { revenue: '1,5k €', rate: '20.0%' }
    ]
  },
  drawer: [
    { text: 'Neuer Lead "Faizan" auf WhatsApp erfasst!', time: 'vor 2 Min.' },
    { text: '5 Artikel in Ihrem Katalog sind nicht mehr vorrätig.', time: 'vor 1 Std.' },
    { text: 'SOVA-Automatisierungsrate heute um 12 % gestiegen!', time: 'vor 3 Std.' },
    { text: 'Sarah Malik interessiert sich für den "Premium-Schal".', time: 'vor 5 Std.' }
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
      replies: '1.204',
      repliesChange: '+24.1%',
      time: '11s',
      timeChange: '-34%'
    },
    activity: [
      { time: 'vor 2 Min.', meta: 'Elektronik - Großhandelsanfrage 5 Einheiten' },
      { time: 'vor 9 Min.', meta: 'Kleidung - Warenkorb-Wiederherstellung' },
      { time: 'vor 14 Min.', meta: 'Wiederholte Nachricht mit geringem Wert entfernt' }
    ]
  },
  threads: {
    3: [
      { from: 'user', text: 'Ich möchte 3 Stück bestellen.' },
      { from: 'sova', text: 'Gute Wahl! Ich habe Ihre Bestellung über 3 Stück notiert. Darf ich fragen, auf welches Produkt Sie sich beziehen?' },
      { from: 'user', text: 'Der Premium-Seidenschal.' },
    ]
  },
}

admin.addProductOverview = admin.addProductOverview || {};
admin.addProductOverview.validation = admin.addProductOverview.validation || {};
admin.addProductOverview.validation.imageTooLarge = 'überschreitet 5MB.';
admin.addProductOverview.validation.videoTooLarge = 'überschreitet 15MB Limit.';
admin.addProductOverview.validation.videoDurationInvalid = 'muss 15-20 Sekunden lang sein (Aktuell: {{duration}}s).';
admin.addProductOverview.validation.compressLink = 'Hier komprimieren';
admin.addProductOverview.validation.maxFilesExceeded = 'Sie können maximal {{max}} Mediendateien hochladen.';

admin.settings = admin.settings || {};
admin.settings.businessUpdateSuccess = 'Geschäftsprofil erfolgreich aktualisiert';
admin.settings.toneUpdateSuccess = 'Tone-Einstellungen erfolgreich aktualisiert';
admin.settings.tones = {
  validation: {
    atLeastOne: 'Bitte wählen Sie mindestens einen Ton für SOVA aus'
  },
  none: 'Keiner',
  professional: { label: 'Professionell', desc: 'Seriös und geschäftsmäßig' },
  friendly: { label: 'Freundlich', desc: 'Herzlich und nahbar' },
  direct: { label: 'Direkt', desc: 'Prägnant, ohne Umschweife' },
  persuasive: { label: 'Überzeugend', desc: 'Überzeugend und verkaufsorientiert' },
  playful: { label: 'Verspielt', desc: 'Leicht, lebhaft und lustig' },
  empathetic: { label: 'Empathisch', desc: 'Ruhig, verständnisvoll und beruhigend' }
};

admin.profile = admin.profile || {};
admin.profile.user = {
  title: 'Benutzerprofil',
  cancel: 'Abbrechen',
  save: 'Speichern',
  edit: 'Bearbeiten',
  photoAlt: 'Benutzerprofil',
  noPhoto: 'Kein Foto',
  uploadPhoto: 'Foto hochladen',
  removePhoto: 'Foto entfernen',
  nameLabel: 'Vollständiger Name',
  namePlaceholder: 'z.B. Max Mustermann',
  emptyName: 'Fügen Sie Ihren Namen hinzu',
  emailLabel: 'E-Mail-Adresse',
  emailPlaceholder: 'z.B. max@example.com',
  emptyEmail: 'Fügen Sie Ihre E-Mail hinzu',
  phoneLabel: 'Telefonnummer',
  phonePlaceholder: 'z.B. +49 151 1234567',
  emptyPhone: 'Fügen Sie Ihre Telefonnummer hinzu'
};

admin.profile.business = {
  removePhoto: 'Entfernen'
};


admin.settings = admin.settings || {};
admin.settings.bankUpdateSuccess = 'Bankdaten erfolgreich aktualisiert';
admin.settings.sections = admin.settings.sections || {};
admin.settings.sections.bank = {
  title: 'Bankinformationen',
  subtitle: 'Konfigurieren Sie die Auszahlungs- und Zahlungseinstellungen für Ihren Shop',
  current: 'Status',
  configured: 'Konfiguriert',
  notConfigured: 'Nicht festgelegt',
  button: 'Bankdaten bearbeiten'
};
admin.settings = admin.settings || {};
admin.settings.bankUpdateSuccess = 'Bankverbindung erfolgreich aktualisiert';
admin.settings.bankDeleteSuccess = 'Bankverbindung erfolgreich gelöscht';
admin.settings.resetAllSuccess = 'Alle Einstellungen wurden zurückgesetzt';
admin.settings.account = {
  title: 'Kontoverwaltung',
  deleteTitle: 'Profildaten löschen',
  deleteDesc: 'Dies löscht Ihre Bankdaten, Ihr Geschäftsprofil und Ihre KI-Einstellungen.',
  deleteBtn: 'Alle Informationen löschen',
  confirmTitle: 'Alle Profildaten löschen?',
  confirmDesc: 'Sind Sie sicher? Dies wird Ihre Bankdaten, Ihr Geschäftsprofil und Ihre KI-Einstellungen dauerhaft entfernen.',
  confirmBtn: 'Ja, alles löschen',
  cancelBtn: 'Abbrechen',
};
admin.settings.bank = {
  title: 'Bankinformationen',
  subtitle: 'Konfigurieren Sie hier Ihre Auszahlungs- und Bankdaten',
  accountTitle: 'Kontoinhaber',
  accountTitlePlaceholder: 'z.B. Max Mustermann',
  accountTitleHint: 'Wie auf Ihrem Bankkonto angegeben',
  accountNumber: 'Kontonummer / IBAN',
  accountNumberPlaceholder: 'z.B. PK00 BANK 0000 0000 0000 0000',
  ibanHint: 'Eine IBAN hat für pakistanische Konten in der Regel 24 Zeichen',
  bankName: 'Bankname',
  bankNamePlaceholder: 'z.B. HBL, Alfalah, Meezan',
  description: 'Zahlungshinweise',
  descriptionPlaceholder: 'z.B. Bitte Bestellnummer im Verwendungszweck angeben',
  required: 'Pflichtfeld',
  configured: 'Zahlungsdaten konfiguriert',
  notConfigured: 'Noch keine Daten',
  verified: 'Gespeichert',
  savedSuccess: 'Bankdaten erfolgreich gespeichert!',
  notConfiguredTitle: 'Keine Bankdaten vorhanden',
  addDetails: 'Bankkonto hinzufügen',
  sectionPayment: 'Zahlungsdetails',
  sectionAccount: 'Kontoinformationen',
  sectionNotes: 'Zusätzliche Informationen',
  copyIBAN: 'IBAN kopieren',
  copied: 'Kopiert!',
  updateBank: 'Bank aktualisieren',
  removeAccount: 'Entfernen',
  warning: 'Stellen Sie sicher, dass alle Angaben korrekt sind.',
  errors: {
    accountTitleRequired: 'Kontoinhaber ist erforderlich',
    bankNameRequired: 'Bankname ist erforderlich',
    accountNumberRequired: 'Kontonummer ist erforderlich'
  },
  notConfiguredDesc: 'Fügen Sie Ihr Bankkonto hinzu, damit Kunden direkt bezahlen können.',
  deleteConfirmTitle: 'Bankverbindung löschen?',
  deleteConfirmDesc: 'Dies wird Ihre Bankverbindung dauerhaft aus dem System entfernen.',
  deleteConfirmBtn: 'Ja, Info löschen',
  deleteCancelBtn: 'Abbrechen'
};

export const notFound = {
  title: '404',
  subtitle: 'Verirrt?',
  desc: "Die Seite, die Sie suchen, existiert nicht oder wurde in ein anderes Universum verschoben.",
  backBtn: 'Bring mich nach Hause',
  backLink: 'Zurück',
}
