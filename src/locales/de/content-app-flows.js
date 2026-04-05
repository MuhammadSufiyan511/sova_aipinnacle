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
      price: 'Rs. {{price}}'
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
      notifications: 'Benachrichtigungen'
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
