export const industries = {
  items: {
    clothing: { label: 'Mode', title: 'Schnell zu Größen, Farben und verfügbarem Bestand antworten.', description: 'Hilf Modekäufern, sofort Antworten zu bekommen und ohne Warten zu bestellen.', useCase: 'Automatische Antworten zu Größentabellen, Farbvarianten, Nachnahme und Lieferung.' },
    jewellery: { label: 'Schmuck', title: 'Zeige hochwertige Kataloge und beantworte Fragen zu Reinheit oder Gewicht.', description: 'Automatisiere Antworten zu Goldpreisen, Zertifikaten und Design-Verfügbarkeit.', useCase: 'Sofortiger Katalogversand und Goldpreis-Updates.' },
    toys: { label: 'Spielwaren', title: 'Erkenne Großkäufer und wiederkehrendes Händlerinteresse frühzeitig.', description: 'Trenne lockere Anfragen von ernsthaften Großhandelskäufern mit Bedarf an Kartons und Nachschub.', useCase: 'Filterung von Großanfragen, Katalogantworten und schnellere Weiterleitung an Händler-Leads.' },
    'books-stationary': { label: 'Bücher & Schreibwaren', title: 'Hilf Schülern und Lesern, Titel und Bestand sofort zu finden.', description: 'Bearbeite Fragen zu Buchverfügbarkeit, Schulbedarf und Büroartikeln automatisch.', useCase: 'Automatische Bestandsprüfungen und Preislisten für Schreibwaren.' },
    'dry-fruits': { label: 'Trockenfrüchte', title: 'Beantworte Preis-, Gewichts- und Verpackungsfragen automatisch.', description: 'Bleib in saisonalen Spitzenzeiten schnell, ohne dieselben Infos ständig zu wiederholen.', useCase: 'Kilopreise, Verpackungsgrößen, Lieferzonen und Unterstützung für Großmengen.' },
    decoration: { label: 'Dekoration', title: 'Teile Event-Themen und Paketpreise für Zuhause oder Feiern.', description: 'Verwalte Anfragen zu Geburtstags-, Hochzeits- und Innenraum-Deko automatisch.', useCase: 'Themenauswahl und automatisierte Paketpreise.' },
    electronics: { label: 'Elektronik', title: 'Bearbeite Produktanfragen mit sauberer Übergabe an dein Sales-Team.', description: 'Halte Verfügbarkeits-, Technik- und Preis-Chats am Laufen, während dein Team sich auf kaufbereite Interessenten konzentriert.', useCase: 'Produktinfos, dringende Lead-Markierung und Follow-ups bei hohem Kaufinteresse.' },
    'medical-instruments': { label: 'Medizintechnik', title: 'Liefere Spezifikationen und Verfügbarkeit für Klinik- und Krankenhausgeräte.', description: 'Beschleunige Anfragen zu Geräten, Diagnose-Tools und klinischer Ausstattung.', useCase: 'Technische Antworten und Status zur Lagerverfügbarkeit.' },
    'surgical-instruments': { label: 'Chirurgische Instrumente', title: 'Verwalte Anfragen zu Präzisionswerkzeugen für Kliniken und Händler.', description: 'Automatisiere Antworten zu Sets, Stahlqualität und Rabatten bei Großbestellungen.', useCase: 'Anpassung von Sets und Teilen von Qualitätszertifikaten.' },
    hardware: { label: 'Baubedarf', title: 'Bearbeite Anfragen von Bauunternehmen und Handwerkern zu Werkzeugen und Material.', description: 'Automatisiere Antworten zu Elektrowerkzeugen, Sanitärteilen und Bauzubehör.', useCase: 'Großpreislisten und Werkzeugspezifikationen.' },
    fireworks: { label: 'Feuerwerk', title: 'Verwalte saisonale Nachfrage für Feiern und Events sicher.', description: 'Bearbeite Fragen zu Feuerwerkspaketen, Sicherheitsinfos und Event-Angeboten.', useCase: 'Saisonale Kataloge und Sicherheitsrichtlinien.' },
  },
}

export const pricing = {
  plans: [
    { name: 'Kostenlose Testphase', price: '30 Tage kostenlos', blurb: 'Erlebe die volle Stärke der SOVA-Automatisierung 30 Tage lang. Keine Kreditkarte erforderlich.', points: ['Alle Funktionen', 'Hohe Nutzungslimits', 'Smarte Auto-Antworten', 'Unterstützung für mehrere Geräte'], badge: 'Loslegen' },
    { name: 'Pro', price: '$49', blurb: 'Für wachsende Teams, die täglich Verkäufe und Lead-Follow-ups verwalten.', points: ['Erweiterte Automatisierung', 'Smarte Lead-Filterung', 'Follow-up-Abläufe', 'Priorisierter Support'], badge: 'Beliebt' },
    { name: 'Individuell', price: 'Kontakt', blurb: 'Skaliere deine Automatisierung mit individuellen Lösungen für dein Unternehmen.', points: ['Sprich mit uns über deinen Bedarf und wir erstellen das passende Setup.'], badge: 'Enterprise', cta: 'Kontakt aufnehmen' },
  ],
}

export const trustedBusinesses = {
  label: 'Vertraut von wachsenden Unternehmen',
  items: ['Noor Abaya House', 'Rafiq Toys Wholesale', 'Sultan Dry Fruits', 'ElectroHub Traders', 'Bazaar Cart PK', 'GCC Style Mart'],
  stats: [
    { stat: '60%', label: 'mehr Produktivität' },
    { stat: '3x', label: 'schnellere Antwortzeit' },
    { stat: '90%', label: 'höhere Conversion' },
    { stat: '24/7', label: 'immer online' },
  ],
}

export const reviews = {
  items: [
    { name: 'Ayesha Khan', businessType: 'Modehändlerin', feedback: 'Wir antworten jetzt schneller und unser Team springt nur noch in Chats, die wirklich kurz vor einer Bestellung stehen.' },
    { name: 'Mohammed Sami', businessType: 'Elektronikhändler', feedback: 'SOVA hat uns geholfen, ernsthafte Käufer in den abendlichen WhatsApp-Stoßzeiten nicht mehr zu verpassen.' },
    { name: 'Farhan Ali', businessType: 'Großhändler für Trockenfrüchte', feedback: 'Fragen zu Preis und Menge werden schnell erledigt, dadurch spart unser Vertrieb jede Woche viele Stunden.' },
    { name: 'Reem Al Mansoori', businessType: 'Geschenk- und Spielwarenladen', feedback: 'Großkäufer lassen sich jetzt viel leichter erkennen, und Follow-ups laufen ohne meine Erinnerungen.' },
  ],
}

export const faq = {
  items: [
    { question: 'Funktioniert SOVA nur mit WhatsApp?', answer: 'SOVA ist heute auf WhatsApp fokussiert, während die Marke langfristig auch eine breitere Omnichannel-Richtung unterstützt.' },
    { question: 'Brauche ich technische Kenntnisse für die Einrichtung?', answer: 'Nein. Die Einrichtung ist für Geschäftsinhaber und Vertriebsteams gemacht. Verbinde dein Meta-Konto und lege fest, wie Antworten laufen sollen.' },
    { question: 'Kann SOVA im Ton meiner Marke antworten?', answer: 'Ja. Du kannst die Antworten einfach, formell, freundlich oder verkaufsorientiert an deine Marke anpassen.' },
    { question: 'Brauche ich eine Kreditkarte für die Testphase?', answer: 'Nein. Jedes Haupt-CTA hält dasselbe Versprechen: kein Kartenbedarf zum Start.' },
    { question: 'Wie verbinde ich meine WhatsApp-Nummer?', answer: 'Verbinde dein Meta-Business-Konto in drei einfachen Schritten über unseren klaren Onboarding-Ablauf mit SOVA.' },
    { question: 'Kann ich eine private WhatsApp-Nummer nutzen?', answer: 'Nein, SOVA benötigt eine WhatsApp-Business-API-Verbindung über Meta für stabile Automatisierung bei hohem Volumen.' },
    { question: 'Unterstützt SOVA mehrere Sprachen?', answer: 'Ja, SOVA ist für mehrere Sprachen optimiert und damit für lokale wie internationale Märkte geeignet.' },
    { question: 'Ist die 30-Tage-Testphase voll ausgestattet?', answer: 'Ja. Du erhältst Zugriff auf alle Kernfunktionen, um den echten Effekt auf dein Vertriebsteam zu sehen, bevor du dich entscheidest.' },
    { question: 'Kann ich mein Abo jederzeit kündigen?', answer: 'Ja, unsere Pläne sind flexibel. Du kannst dein Abo jederzeit in deinem Dashboard verwalten oder kündigen.' },
    { question: 'Kann ich Broadcast-Nachrichten senden?', answer: 'Ja. SOVA unterstützt Meta-konforme Broadcasts, damit du deine Kundenliste mit Angeboten und Updates erreichst.' },
    { question: 'Gibt es versteckte Kosten?', answer: 'Nein. Wir glauben an einfache Preise. Dein gewählter Plan deckt die SOVA-Plattformkosten klar ab.' },
    { question: 'Sind meine Kundendaten sicher?', answer: 'Ja. Wir verarbeiten Daten nach den Sicherheitsstandards von Meta und priorisieren die Privatsphäre deiner Geschäftsgespräche.' },
  ],
}
