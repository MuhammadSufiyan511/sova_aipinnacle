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
      subtitleAdd: 'Geben Sie Ihrem Produkt einen Namen, eine Kurzbeschreibung und ein optionales Foto.',
      subtitleUpdate: 'Bearbeiten Sie die Produktdetails, die SOVA in Käufer-Chats verwendet.',
      mediaLabel: 'Produktmedien',
      mediaHelp: 'Klicken zum Hochladen',
      nameLabel: 'Produktname',
      namePlaceholder: 'z.B. Premium-Seidenschal',
      descLabel: 'Beschreibung',
      descPlaceholder: 'z.B. Premium-Seidenschal mit weichem Finish und Geschenkverpackung.',
      saveBtn: 'Produkt speichern',
      updateBtn: 'Aktualisieren',
      invalidMediaType: 'Bitte laden Sie ein gültiges Bild hoch (JPG, PNG oder WebP)'
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
    automationLive: 'Automatisierung ist aktiv'
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
        price: 'Rs. {{price}}',
        priceLabel: 'Preis',
        mediaLabel: 'Medientyp',
        view: 'Ansehen',
        active: 'Aktiv',
        inactive: 'Inaktiv',
        activate: 'Aktivieren',
        deactivate: 'Deaktivieren',
        modalTitle: 'Produktübersicht',
        noDescription: 'Noch keine Beschreibung hinzugefügt.',
        none: 'Keine'
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
  overview: {
    stats: {
      activeConversations: 'Aktive Gespräche',
      qualifiedLeads: 'Qualifizierte Leads',
      automatedReplies: 'Autom. Antworten',
      avgResponseTime: 'Durchschn. Zeit'
    },
    quickActions: {
      products: 'Produkte hinzufügen',
      settings: 'Automatisierung setup',
      businessSettings: 'Business-Einstellungen'
    },
    charts: {
      saleTrend: {
        title: 'Verkaufstrend',
        subtitle: 'Leistung der letzten 7 Tage',
        pill: '+{{count}}% Anstieg'
      },
      leadMix: {
        title: 'Lead-Mix',
        subtitle: 'Follow-ups vs. Käufer',
        label: 'Käufer'
      },
      leadsByDay: {
        title: 'Tägliche Leads',
        subtitle: 'Wöchentliche Volumen-Übersicht',
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
      subtitle: 'Echtzeit-Updates',
      feeds: {
        order: 'Neue Kaufabsicht',
        followup: 'Follow-up geplant',
        spam: 'Unangemessene Nachricht blockiert'
      }
    }
  },
  reports: {
    title: 'Verkaufsanalysen',
    subtitle: 'Verfolgen Sie die Leistung Ihrer automatisierten Verkäufe.',
    exportBtn: 'Bericht exportieren',
    stats: {
      revenue: 'Gesamtumsatz',
      orderRate: 'Bestellrate',
      resolved: 'Gelöste Chats'
    },
    chart: {
      title: 'Umsatzanalyse',
      subtitle: 'Übersicht der wöchentlichen Einnahmen',
      pill: '+12,4% Steigerung'
    },
    table: {
      title: 'Wöchentliche Leistung',
      subtitle: 'Aufschlüsselung täglicher Gespräche und Konversionen',
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
    subtitle: 'Steuern Sie das Verhalten Ihres KI-Agenten.',
    sections: {
      business: {
        title: 'Business-Setup',
        subtitle: 'Wenn Sie Ihre Kategorie ändern oder das geführte Setup neu starten möchten, können Sie das hier aktualisieren.',
        button: 'Business ändern',
        current: 'Aktuelles Business',
        modalTitle: 'Ihre Business-Kategorie aktualisieren',
        modalSubtitle: 'Wählen Sie den Business-Typ, den SOVA für Antworten, Lead-Filterung und Produktkontext verwenden soll.',
        save: 'Änderungen speichern',
        cancel: 'Abbrechen',
        close: 'Schließen'
      },
      voice: {
        title: 'Markenstimme',
        subtitle: 'Wählen Sie, wie SOVA mit Ihren Kunden spricht.'
      },
      rules: {
        title: 'Automatisierungsregeln',
        subtitle: 'Legen Sie Präferenzen für Antworten und Filter fest.'
      }
    },
    tones: {
      professional: { label: 'Professionell', desc: 'Sachlich und formell' },
      friendly: { label: 'Freundlich', desc: 'Hilfsbereit und herzlich' },
      direct: { label: 'Direkt', desc: 'Prägnant und genau' },
      persuasive: { label: 'Überzeugend', desc: 'Verkaufsstark und wirkungsvoll' },
      playful: { label: 'Verspielt', desc: 'Locker, lebendig und freundlich' },
      empathetic: { label: 'Einfühlsam', desc: 'Verständnisvoll, ruhig und hilfreich' },
      creative: { label: 'Kreativ', desc: 'Begeisternd und originell' }
    },
    rows: {
      autoReply: { title: 'Auto-Antwort', desc: 'Erlauben Sie SOVA, häufige Fragen zu beantworten.' },
      spamFilter: { title: 'Spam-Filter', desc: 'Unangemessene Nachrichten automatisch blockieren.' },
      alerts: { title: 'Lead-Benachrichtigungen', desc: 'Erhalten Sie Updates bei neuen Kaufabsichten.' },
      tfa: { title: 'Zwei-Faktor-Authentifizierung', desc: 'Sichern Sie Ihren Workspace zusätzlich ab.' }
    },
    comingSoon: 'Demnächst'
  },
  profile: {
    header: {
      label: 'SOVA Workspace-Profil',
      desc: 'Verwalten Sie Ihre Workspace-Identität, Sprache und Automatisierungsbereitschaft an einem Ort.'
    },
    plan: '{{name}}-Tarif',
    activity: {
      products: 'Verbundene Produkte',
      automations: 'Aktive Automatisierungen',
      alerts: 'Ungelesene Lead-Benachrichtigungen'
    },
    details: {
      title: 'Workspace-Details',
      language: 'Aktuelle Sprache',
      products: {
        label: 'Produkte im Katalog',
        ready: '{{count}} bereit für automatische Antworten'
      },
      tones: {
        label: 'Business-Tonprofile',
        ready: '{{count}} Toneinstellung{{s}} konfiguriert'
      }
    },
    summary: {
      title: 'Profilübersicht',
      desc: 'Dieser Workspace ist bereit, WhatsApp-Gespräche zu verwalten, qualifizierte Leads weiterzuleiten und Antworten mit SOVA zu automatisieren.'
    }
  },
  chat: {
    title: 'WhatsApp-Posteingang',
    activeStatus: 'Aktiv',
    searchPlaceholder: 'Gespräche suchen...',
    emptyState: 'Wählen Sie ein Gespräch aus, um es anzuzeigen',
    sovaLabel: 'SOVA AI',
    status: {
      automated: 'Automatisiert',
      captured: 'Lead erfasst'
    }
  },
  drawer: {
    title: 'Benachrichtigungen',
    empty: 'Keine neuen Benachrichtigungen',
    readAll: 'Alle als gelesen markieren'
  },
  celebration: {
    eyebrow: 'Herzlichen Glückwunsch!',
    title: 'Ihr Workspace ist live!',
    headline: 'Machen Sie sich bereit, Ihr {gradient:KI-Agent} ist fertig',
    desc: 'SOVA ist nun bereit, Ihren Kunden zu antworten, Leads zu filtern und Ihre Verkäufe zu steigern.',
    features: {
      replies: 'Auto-Antworten',
      whatsapp: 'WhatsApp-Integration',
      buyers: 'Käuferidentifikation'
    },
    checklist: {
      whatsapp: 'WhatsApp aktiv',
      filtering: 'Lead-Filterung aktiv',
      followups: 'Follow-ups aktiv'
    },
    btn: 'Zum Dashboard'
  },
  mockData: {
    broadcasts: {
      campaigns: [
        { name: 'Ramadan-Angebot', audience: '1.240 Kontakte', sendAt: 'Heute, 19:00 Uhr' },
        { name: 'Neuer Katalog-Drop', audience: '860 Kontakte', sendAt: 'Wartet auf Genehmigung' },
        { name: 'VIP-Follow-up-Blast', audience: '420 Kontakte', sendAt: 'Gestern, 17:30 Uhr' }
      ]
    },
    notifications: [
      { title: 'Neuer Lead mit hoher Kaufabsicht', desc: 'Faizan Ahmed fragt nach Großhandelspreisen für "Premium-Seidenschal".', time: 'vor 2 Min.' },
      { title: 'Kampagne abgeschlossen', desc: "Die Kampagne 'Ramadan-Angebot' wurde erfolgreich an 1.240 Kontakte gesendet.", time: 'vor 1 Std.' },
      { title: 'SOVA-Wissensupdate', desc: 'Neues Produkt "Baumwoll-T-Shirt" wurde Ihrem Katalog hinzugefügt und ist bereit für KI-Antworten.', time: 'vor 3 Std.' },
      { title: 'Eingehende Nachricht', desc: 'Sarah Khan hat eine Nachricht gesendet. SOVA bearbeitet diese automatisch.', time: 'vor 5 Std.' }
    ],
    chats: [
      { user: 'Faizan Ahmed', message: 'Hallo, was kostet diese Jacke?', time: '14:23' },
      { user: 'Sarah Khan', message: 'Haben Sie Größe M in Blau verfügbar?', time: '12:05' },
      { user: 'Zubair Shah', message: 'Ich möchte 3 Stück bestellen.', time: '09:44' },
      { user: 'Nadia Malik', message: 'Können Sie bitte den Katalog schicken?', time: 'Gestern' },
      { user: 'Bilal Raza', message: 'Wie hoch sind Ihre Liefergebühren?', time: 'Gestern' }
    ],
    reports: {
      stats: {
        revenue: 'Rs. 8.4L',
        orderRate: '37%',
        resolved: '1.284',
        revenueChange: '+18%',
        orderRateChange: '+6%',
        resolvedChange: '+22%'
      },
      revenueLines: ['Rs. 82k', 'Rs. 95k', 'Rs. 1.1L', 'Rs. 1.3L', 'Rs. 1.5L'],
      rows: [
        { revenue: 'Rs. 82k', rate: '16,9%' },
        { revenue: 'Rs. 95k', rate: '17,7%' },
        { revenue: 'Rs. 1,1L', rate: '17,4%' },
        { revenue: 'Rs. 1,3L', rate: '18,8%' },
        { revenue: 'Rs. 1,5L', rate: '20,0%' }
      ]
    },
    drawer: [
      { text: 'Neuer Lead "Faizan" über WhatsApp erfasst!', time: 'vor 2 Min.' },
      { text: '5 Artikel in Ihrem Katalog sind nicht mehr vorrätig.', time: 'vor 1 Std.' },
      { text: 'Die SOVA-Automatisierungsrate ist heute um 12% gestiegen!', time: 'vor 3 Std.' },
      { text: 'Sarah Malik interessiert sich für den "Premium-Schal".', time: 'vor 5 Std.' }
    ],
    profile: {
      automations: '06',
      alerts: '08'
    },
    overview: {
      stats: {
        active: '142',
        activeChange: '+12,5%',
        leads: '89',
        leadsChange: '+5,2%',
        replies: '1.204',
        repliesChange: '+24,1%',
        time: '11s',
        timeChange: '-34%'
      },
      activity: [
        { time: 'vor 2 Min.', meta: 'Elektronik - 5 Einheiten Großhandelsanfrage' },
        { time: 'vor 9 Min.', meta: 'Kleidung - Warenkorb-Wiederherstellungskampagne' },
        { time: 'vor 14 Min.', meta: 'Wiederholte Nachricht mit geringem Wert entfernt' }
      ]
    },
    threads: {
      3: [
        { from: 'user', text: 'Ich möchte 3 Stück bestellen.' },
        { from: 'sova', text: "Gute Wahl! Ich habe Ihre Bestellung über 3 Stück notiert. Darf ich fragen, auf welches Produkt Sie sich beziehen?" },
        { from: 'user', text: 'Der Premium-Seidenschal.' },
        { from: 'sova', text: "Perfekt! Ich werde eine Rechnung für 3x Premium-Seidenschal erstellen. Soll ich Ihre Bestellung bestätigen?" }
      ]
    }
  }
}

admin.nav.files = 'Dateien'
admin.files = {
  title: 'Dateibibliothek',
  subtitle: '{{count}} Datei{{s}} für SOVA-Antworten und Medienfreigabe bereit',
  newBtn: 'Datei hinzufügen',
  banner: 'Bewahren Sie Bilder, Videos, PDFs und wichtige Dateien an einem Ort auf, damit SOVA beim Führen von Käufern auf WhatsApp die richtigen Medien verwenden kann.',
  empty: {
    title: 'Noch keine Dateien',
    desc: 'Fügen Sie Ihre erste Datei hinzu, damit SOVA sie in Käufer-Chats und im Support verwenden kann.',
    btn: 'Erste Datei hinzufügen',
  },
  item: {
    view: 'Ansehen',
    active: 'Aktiv',
    inactive: 'Inaktiv',
    activate: 'Aktivieren',
    deactivate: 'Deaktivieren',
    modalTitle: 'Dateiübersicht',
    noDescription: 'Noch keine Beschreibung hinzugefügt.',
    none: 'Keine',
    mediaLabel: 'Dateityp',
    fileNameLabel: 'Dateiname',
    types: {
      image: 'Bild',
      video: 'Video',
      file: 'Datei',
    },
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
      file: 'Dateien',
    },
    empty: {
      title: 'Keine passenden Dateien',
      desc: 'Versuchen Sie einen anderen Suchbegriff oder ändern Sie den Dateityp-Filter.',
    },
  },
  modal: {
    titleAdd: 'Neue Datei hinzufügen',
    titleUpdate: 'Datei aktualisieren',
    subtitleAdd: 'Laden Sie ein Bild, Video oder Dokument hoch, das SOVA in Chats teilen kann.',
    subtitleUpdate: 'Bearbeiten Sie die Dateidetails, die SOVA beim Helfen von Käufern nutzt.',
    mediaLabel: 'Dateimedien',
    mediaHelp: 'Zum Hochladen klicken',
    nameLabel: 'Dateiname',
    namePlaceholder: 'z. B. Summer Catalog 2026',
    descLabel: 'Beschreibung',
    descPlaceholder: 'z. B. PDF-Katalog für neue Sommerartikel und aktualisierte Preise.',
    saveBtn: 'Datei speichern',
    updateBtn: 'Datei aktualisieren',
    invalidMediaType: 'Bitte laden Sie ein gültiges Bild, Video oder eine Datei hoch',
  },
}

admin.upgrade = {
  navLabel: 'Plan upgraden',
  cta: 'Plan upgraden',
  mobileCta: 'Upgrade',
  eyebrow: 'Plan-Upgrade',
  title: 'Wählen Sie einen Plan, der mit Ihren WhatsApp-Verkäufen wächst',
  subtitle: 'Schalten Sie mehr Automatisierung, höhere Nutzungslimits und stärkeren KI-Support frei, wenn Ihr Geschäft wächst.',
  currentPlanLabel: 'Aktueller Plan',
  currentPlanValue: '{{plan}}-Plan',
  currentPlanHint: 'Upgraden Sie jederzeit für mehr Reichweite und mehr Automatisierung.',
  popular: 'Am beliebtesten',
  choosePlan: 'Plan wählen',
  currentPlanButton: 'Aktueller Plan',
  compareTitle: 'Warum Teams upgraden',
  compareDesc: 'Wenn Ihre Chats wachsen, kann SOVA mehr Antworten, mehr Leads und größere Verkaufsabläufe übernehmen, ohne Ihr Team zu bremsen.',
  summaryTitle: 'Was ein Upgrade bringt',
  summaryDesc: 'Wechseln Sie von einfacher Automatisierung zu vollständigen WhatsApp-Wachstumsprozessen mit besserem Support und stärkerer KI-Abdeckung.',
  steps: {
    1: { title: 'Behalten Sie Ihr aktuelles Setup', desc: 'Ihr Katalog, Ihre Dateien, Ihr Posteingang und Ihre Toneinstellungen bleiben unverändert erhalten.' },
    2: { title: 'Sofort mehr Kapazität freischalten', desc: 'Höhere Pläne geben Ihnen mehr Antwortvolumen, bessere Workflows und mehr Sichtbarkeit für Ihr Team.' },
    3: { title: 'Ohne zusätzliche Handarbeit skalieren', desc: 'Nutzen Sie SOVA, um mehr Käufer, mehr Follow-ups und mehr Conversion-Chancen zu verwalten.' },
  },
  benefits: {
    1: { title: 'Mehr automatisierte Gespräche', desc: 'Bearbeiten Sie mehr WhatsApp-Antworten, ohne Ihr Team zusätzlich zu belasten.' },
    2: { title: 'Stärkere KI-Unterstützung', desc: 'Geben Sie SOVA mehr Spielraum, um Leads zu qualifizieren, Käufer zu führen und wiederholten manuellen Support zu reduzieren.' },
    3: { title: 'Bessere Vertriebsübersicht', desc: 'Verfolgen Sie Wachstum, prüfen Sie die Performance und erkennen Sie, wo sich Conversions verbessern.' },
    4: { title: 'Für wachsende Unternehmen gebaut', desc: 'Upgraden Sie, wenn Ihr Volumen steigt, damit Ihr Workflow reibungslos und zuverlässig bleibt.' },
  },
  plans: {
    starter: {
      badge: 'Starter',
      name: 'Starter',
      price: '$19/mo',
      desc: 'Ideal für kleine Teams, die mit WhatsApp-Automatisierung starten.',
      features: {
        1: 'Bis zu 1.000 automatisierte Antworten pro Monat',
        2: 'Basis-Support für Produkt- und Dateifreigabe',
        3: 'Lead-Erkennung mit Standard-Automatisierungsregeln',
        4: 'Ein Workspace mit grundlegenden Berichten',
      },
    },
    growth: {
      badge: 'Growth',
      name: 'Growth',
      price: '$49/mo',
      desc: 'Für wachsende Unternehmen mit aktivem Käuferaufkommen.',
      features: {
        1: 'Bis zu 5.000 automatisierte Antworten pro Monat',
        2: 'Erweiterte Katalog-, Datei- und Medien-Workflows',
        3: 'Stärkere Lead-Bewertung und Follow-up-Automatisierung',
        4: 'Priorisierte Analysen und schnellere Unterstützung',
      },
    },
    scale: {
      badge: 'Scale',
      name: 'Scale',
      price: '$99/mo',
      desc: 'Für größere Vertriebsteams mit hohem WhatsApp-Volumen.',
      features: {
        1: 'Hohe Antwortmengen und größere Kampagnen-Skalierung',
        2: 'Tiefere Automatisierungslogik über Produkte, Dateien und Inbox hinweg',
        3: 'Detailliertere Berichte und mehr Vertriebsübersicht',
        4: 'Priorisierte Einführung und dedizierter Support',
      },
    },
  },
}

admin.nav.catalog = 'Katalog'
admin.overview.quickActions.businessSettings = 'Geschäftseinstellungen'
admin.overview.quickActions.products = 'Produkte ansehen'
admin.overview.quickActions.files = 'Dateien ansehen'
admin.chat.previewLabel = 'WhatsApp-Chatvorschau'
admin.chat.defaultReply = 'Hallo! Danke für Ihre Nachricht. Ich bin SOVA, Ihr Vertriebsassistent. Wie kann ich Ihnen heute helfen?'
