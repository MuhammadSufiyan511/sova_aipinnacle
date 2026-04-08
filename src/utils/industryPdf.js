import i18n from '../i18n'
import { industryPdfDrafts } from '../data/industryPdfDrafts'

function normalizeLanguage(language) {
  return String(language || 'en').toLowerCase().split('-')[0]
}

function isRtlLanguage(language) {
  return ['ur', 'ar'].includes(normalizeLanguage(language))
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function translateOr(key, fallback) {
  const value = i18n.t(key)
  return value === key ? fallback : value
}

function joinParagraphs(paragraphs) {
  return paragraphs.filter(Boolean).join('\n\n')
}

function renderParagraphs(body) {
  return String(body || '')
    .split(/\n{2,}/)
    .filter(Boolean)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join('')
}

function buildIndustryParagraphs(language, industry, draft) {
  const label = industry?.label || draft.category
  const title = industry?.title || draft.subtitle || ''
  const description = industry?.description || draft.sections?.[0]?.body || ''
  const useCase = industry?.useCase || draft.sections?.[1]?.body || ''
  const examplesFallback = draft.sections?.[2]?.body || ''
  const helpsFallback = draft.sections?.[3]?.body || ''

  const byLanguage = {
    en: [
      joinParagraphs([
        `${label} businesses often rely on WhatsApp for early buyer conversations, product questions, and order-related guidance. ${description}`,
        `In practice, that means the inbox becomes one of the main sales channels for the business. Buyers expect fast replies, clear product information, and confidence before they commit. When these questions are handled slowly or inconsistently, even interested buyers can lose momentum before the team gets a real chance to convert them.`,
      ]),
      joinParagraphs([
        `${useCase} This is especially useful when many customers ask similar questions and the team needs a faster, more consistent response flow.`,
        `The strongest use cases appear when the same operational questions keep repeating throughout the day. Instead of letting the team manually restate availability, pricing logic, variants, or policy details every time, SOVA helps standardize the first layer of replies so conversations can move forward with less delay and less friction.`,
      ]),
      joinParagraphs([
        `Typical conversations in ${label.toLowerCase()} include questions about availability, pricing, variants, delivery timing, and what to do next. ${title}`,
        `${examplesFallback} These examples show why a simple reply system is not enough. Businesses need a way to guide the customer, keep context organized, and make sure high-intent chats do not disappear under routine or low-value questions.`,
      ]),
      joinParagraphs([
        `SOVA helps turn these repeated WhatsApp conversations into a more organized workflow. It supports quicker replies, clearer buyer guidance, and better focus on the customers most likely to convert.`,
        `${helpsFallback} The result is a sales process that feels more responsive to the customer and more manageable for the team, with stronger visibility on serious buyers and less time lost to repetitive inbox work.`,
      ]),
    ],
    ur: [
      joinParagraphs([
        `${label} کے کاروبار اکثر WhatsApp پر ابتدائی خریدار گفتگو، product questions، اور order-related رہنمائی پر انحصار کرتے ہیں۔ ${description}`,
        `عملی طور پر اس کا مطلب یہ ہے کہ inbox صرف ایک رابطہ چینل نہیں رہتا بلکہ خود ایک اہم sales channel بن جاتا ہے۔ خریدار فوری جواب، واضح معلومات، اور خریداری سے پہلے اعتماد چاہتے ہیں۔ اگر یہ سب کچھ سست یا غیر منظم ہو تو دلچسپی رکھنے والے buyers بھی جلدی رفتار کھو دیتے ہیں۔`,
      ]),
      joinParagraphs([
        `${useCase} یہ خاص طور پر اُس وقت زیادہ مفید ہوتا ہے جب بہت سے customers ایک جیسے سوال پوچھ رہے ہوں اور ٹیم کو زیادہ تیز اور یکساں response flow چاہیے ہو۔`,
        `اصل فائدہ وہاں سامنے آتا ہے جہاں ایک ہی operational سوال بار بار آتا ہے۔ SOVA ہر بار manual explanation دینے کے بجائے availability، pricing logic، variants، اور basic policies جیسے سوالات کے پہلے مرحلے کے جواب کو standardize کرتا ہے تاکہ گفتگو کم رکاوٹ کے ساتھ آگے بڑھ سکے۔`,
      ]),
      joinParagraphs([
        `${label} کے شعبے میں عام گفتگو میں availability، pricing، variants، delivery timing، اور next step جیسے سوال شامل ہوتے ہیں۔ ${title}`,
        `${examplesFallback} یہی مثالیں بتاتی ہیں کہ صرف سادہ جواب دینا کافی نہیں ہوتا۔ کاروبار کو ایسا نظام چاہیے جو customer کو بہتر رہنمائی دے، context کو منظم رکھے، اور high-intent chats کو روزمرہ سوالات کے نیچے دبنے نہ دے۔`,
      ]),
      joinParagraphs([
        `SOVA ان بار بار ہونے والی WhatsApp گفتگو کو ایک زیادہ منظم workflow میں بدلنے میں مدد دیتا ہے۔ یہ تیز جواب، واضح buyer guidance، اور اُن customers پر بہتر فوکس دیتا ہے جو conversion کے زیادہ قریب ہوں۔`,
        `${helpsFallback} اس کا نتیجہ ایک ایسا sales process بنتا ہے جو customer کے لیے زیادہ responsive اور ٹیم کے لیے زیادہ manageable ہو، جہاں سنجیدہ buyers زیادہ واضح رہتے ہیں اور repetitive inbox work پر وقت کم ضائع ہوتا ہے۔`,
      ]),
    ],
    ar: [
      joinParagraphs([
        `تعتمد أنشطة ${label} غالباً على WhatsApp في المحادثات الأولى مع المشترين، وأسئلة المنتجات، والإرشاد المرتبط بالطلبات. ${description}`,
        `وفي الواقع يصبح صندوق المحادثات هنا أكثر من مجرد وسيلة تواصل، بل قناة بيع أساسية بحد ذاته. فالمشتري يريد سرعة في الرد، ووضوحاً في المعلومات، وشعوراً بالثقة قبل أن ينتقل إلى خطوة الشراء. وعندما تتأخر هذه العناصر أو تصبح غير متسقة، تفقد المحادثات الجادة جزءاً كبيراً من زخمها.`,
      ]),
      joinParagraphs([
        `${useCase} ويكون هذا مفيداً بشكل خاص عندما يطرح كثير من العملاء الأسئلة نفسها ويحتاج الفريق إلى أسلوب رد أسرع وأكثر ثباتاً.`,
        `وتظهر القيمة الحقيقية عندما تتكرر الأسئلة التشغيلية نفسها طوال اليوم. فبدلاً من أن يعيد الفريق شرح التوفر أو منطق التسعير أو الخيارات أو السياسات الأساسية في كل مرة، يساعد SOVA على توحيد الطبقة الأولى من الردود حتى تتحرك المحادثات بسرعة وباحتكاك أقل.`,
      ]),
      joinParagraphs([
        `تشمل المحادثات الشائعة في مجال ${label} أسئلة حول التوفر، والأسعار، والخيارات المختلفة، وموعد التوصيل، وما الخطوة التالية. ${title}`,
        `${examplesFallback} وهذه الأمثلة توضح أن الرد البسيط وحده لا يكفي. فالأعمال تحتاج إلى أسلوب يوجّه العميل، ويحافظ على تنظيم السياق، ويمنع المحادثات عالية النية من الضياع تحت الأسئلة الروتينية أو منخفضة القيمة.`,
      ]),
      joinParagraphs([
        `يساعد SOVA في تحويل هذه المحادثات المتكررة على WhatsApp إلى سير عمل أكثر تنظيماً. فهو يدعم الردود الأسرع، ويوفر إرشاداً أوضح للمشتري، ويساعد الفريق على التركيز على العملاء الأقرب للتحول إلى طلب فعلي.`,
        `${helpsFallback} والنتيجة هي عملية بيع تبدو أكثر سرعة واستجابة من جهة العميل، وأكثر قابلية للإدارة من جهة الفريق، مع وضوح أفضل حول المشترين الجادين ووقت أقل مهدور في الأعمال المتكررة داخل صندوق المحادثات.`,
      ]),
    ],
    bn: [
      joinParagraphs([
        `${label} ধরনের ব্যবসাগুলো প্রায়ই WhatsApp-এর ওপর নির্ভর করে প্রাথমিক buyer conversation, product question, এবং order-related guidance দেওয়ার জন্য। ${description}`,
        `বাস্তবে এর মানে হলো inbox শুধু যোগাযোগের জায়গা নয়, বরং বিক্রির একটি মূল channel হয়ে যায়। buyer-রা দ্রুত reply, পরিষ্কার তথ্য, এবং কেনার আগে ভরসা চায়। এই জিনিসগুলো ধীর বা অসংগত হলে আগ্রহী conversation-ও দ্রুত গতি হারাতে পারে।`,
      ]),
      joinParagraphs([
        `${useCase} বিশেষ করে তখন এটি বেশি কাজে লাগে, যখন অনেক customer একই ধরনের প্রশ্ন করে এবং team-এর দ্রুত ও একরকম response flow দরকার হয়।`,
        `আসল মূল্য তখনই বোঝা যায় যখন একই operational প্রশ্ন দিনজুড়ে বারবার আসে। SOVA availability, pricing logic, variants, এবং basic policy-র মতো প্রশ্নের প্রথম স্তরের উত্তরকে standardize করে, যাতে team-কে প্রতিবার একই জিনিস নতুন করে লিখতে না হয় এবং conversation কম friction-এ সামনে এগোয়।`,
      ]),
      joinParagraphs([
        `${label} ক্যাটাগরিতে সাধারণত availability, pricing, variants, delivery timing, এবং next step নিয়ে প্রশ্ন বেশি আসে। ${title}`,
        `${examplesFallback} এই উদাহরণগুলো দেখায় যে শুধু ছোট উত্তর যথেষ্ট নয়। business-এর দরকার এমন একটি system যা customer-কে guide করতে পারে, context ধরে রাখতে পারে, এবং high-intent chat-গুলোকে routine inquiry-র ভিড়ে হারিয়ে যেতে না দেয়।`,
      ]),
      joinParagraphs([
        `SOVA এই বারবার হওয়া WhatsApp কথোপকথনকে আরও organised workflow-এ রূপ দেয়। এতে reply দ্রুত হয়, buyer guidance পরিষ্কার হয়, এবং conversion-এর কাছাকাছি থাকা customer-দের ওপর team বেশি focus করতে পারে।`,
        `${helpsFallback} এর ফল হলো এমন একটি sales process, যা customer-এর জন্য বেশি responsive এবং team-এর জন্য বেশি manageable হয়; serious buyer-রা বেশি স্পষ্টভাবে দেখা যায় এবং repetitive inbox work-এ কম সময় নষ্ট হয়।`,
      ]),
    ],
    hi: [
      joinParagraphs([
        `${label} category के businesses अक्सर WhatsApp पर शुरुआती buyer conversations, product questions, और order-related guidance के लिए निर्भर रहते हैं। ${description}`,
        `व्यवहार में इसका मतलब यह है कि inbox सिर्फ बातचीत की जगह नहीं रहता, बल्कि sales का एक मुख्य channel बन जाता है। buyers को तेज़ reply, साफ जानकारी, और खरीद से पहले भरोसा चाहिए होता है। जब ये चीज़ें धीमी या असंगत हों, तो interested conversations भी जल्दी momentum खो देती हैं।`,
      ]),
      joinParagraphs([
        `${useCase} यह खास तौर पर तब ज़्यादा उपयोगी होता है, जब बहुत से customers एक जैसे सवाल पूछ रहे हों और team को तेज़ तथा consistent response flow चाहिए हो।`,
        `सबसे अधिक value वहाँ दिखती है जहाँ वही operational questions बार-बार आते हैं। SOVA availability, pricing logic, variants, और basic policies जैसे सवालों के first-layer replies को standardize करता है, ताकि team को हर बार वही बात manually न लिखनी पड़े और conversations कम friction के साथ आगे बढ़ सकें।`,
      ]),
      joinParagraphs([
        `${label} industry में आम तौर पर availability, pricing, variants, delivery timing, और next step जैसे सवाल आते हैं। ${title}`,
        `${examplesFallback} ये उदाहरण दिखाते हैं कि सिर्फ छोटा जवाब काफी नहीं होता। business को ऐसे system की ज़रूरत होती है जो customer को guide करे, context को organised रखे, और high-intent chats को routine inquiries के नीचे दबने न दे।`,
      ]),
      joinParagraphs([
        `SOVA इन बार-बार होने वाली WhatsApp conversations को एक अधिक organised workflow में बदलने में मदद करता है। इससे replies तेज़ होते हैं, buyer guidance स्पष्ट होती है, और team उन customers पर बेहतर focus कर पाती है जो conversion के ज़्यादा करीब होते हैं।`,
        `${helpsFallback} इसका परिणाम एक ऐसा sales process है जो customer के लिए अधिक responsive और team के लिए अधिक manageable होता है, जहाँ serious buyers स्पष्ट बने रहते हैं और repetitive inbox work पर कम समय खर्च होता है।`,
      ]),
    ],
    de: [
      joinParagraphs([
        `Unternehmen im Bereich ${label} verlassen sich oft auf WhatsApp für erste Käufergespräche, Produktfragen und orderbezogene Orientierung. ${description}`,
        `In der Praxis bedeutet das, dass der Posteingang weit mehr als nur ein Kommunikationskanal ist. Er wird zu einem zentralen Vertriebspunkt. Käufer erwarten schnelle Antworten, klare Informationen und Vertrauen vor dem nächsten Schritt. Werden diese Erwartungen zu langsam oder uneinheitlich erfüllt, verlieren selbst gute Gespräche schnell an Dynamik.`,
      ]),
      joinParagraphs([
        `${useCase} Das ist besonders hilfreich, wenn viele Kunden ähnliche Fragen stellen und das Team einen schnelleren, konsistenteren Antwortfluss braucht.`,
        `Der größte Nutzen zeigt sich dort, wo sich operative Standardfragen über den Tag hinweg wiederholen. Statt Verfügbarkeit, Preislogik, Varianten oder grundlegende Richtlinien jedes Mal neu manuell zu erklären, hilft SOVA dabei, die erste Antwortschicht zu standardisieren und Gespräche mit weniger Reibung voranzubringen.`,
      ]),
      joinParagraphs([
        `Typische Gespräche im Bereich ${label} drehen sich um Verfügbarkeit, Preise, Varianten, Lieferzeiten und den nächsten Schritt. ${title}`,
        `${examplesFallback} Diese Beispiele zeigen, dass einfache Einzelantworten allein nicht ausreichen. Unternehmen brauchen einen Ablauf, der den Käufer aktiv führt, Kontext geordnet hält und verhindert, dass Gespräche mit hoher Abschlusswahrscheinlichkeit unter Routinefragen verschwinden.`,
      ]),
      joinParagraphs([
        `SOVA hilft dabei, diese wiederkehrenden WhatsApp-Gespräche in einen geordneteren Ablauf zu verwandeln. So werden Antworten schneller, die Käuferführung klarer und der Fokus auf Kunden mit höherer Abschlusswahrscheinlichkeit stärker.`,
        `${helpsFallback} Das Ergebnis ist ein Vertriebsprozess, der für Kunden reaktionsstärker wirkt und für das Team besser beherrschbar bleibt, mit mehr Transparenz bei ernsthaften Käufern und weniger Zeitverlust durch wiederholte Inbox-Arbeit.`,
      ]),
    ],
  }

  return byLanguage[language] || byLanguage.en
}

function buildLocalizedIndustrySections(language, industry, draft) {
  const headings = [
    translateOr('common.overview', 'Overview'),
    translateOr('common.useCase', 'Use Case'),
    translateOr('common.examples', 'Examples'),
    translateOr('common.howSovaHelps', 'How SOVA Helps'),
  ]

  const bodies = industry
    ? buildIndustryParagraphs(language, industry, draft)
    : draft.sections.map((section) => section.body)

  return headings.map((heading, index) => ({
    heading,
    body: bodies[index] || '',
  }))
}

function getLocalizedIndustryDocument(id, fallbackDraft) {
  const language = normalizeLanguage(i18n.resolvedLanguage || i18n.language)
  const localizedIndustry = i18n.t(`content.industries.items.${id}`, { returnObjects: true })
  const industry = localizedIndustry && typeof localizedIndustry === 'object' ? localizedIndustry : null
  const draft = fallbackDraft || industryPdfDrafts[id]

  if (!draft) {
    return null
  }

  return {
    language,
    dir: isRtlLanguage(language) ? 'rtl' : 'ltr',
    document: {
      title: industry?.label ? `${industry.label} ${translateOr('common.industryGuide', 'Industry Guide')}` : draft.title,
      eyebrow: translateOr('common.sovaIndustryGuide', draft.eyebrow || 'SOVA INDUSTRY GUIDE'),
      subtitle: industry?.title || draft.subtitle,
      category: industry?.label || draft.category,
      businessType: translateOr('common.whatsappBusinessWorkflow', draft.businessType || 'WhatsApp business workflow'),
      sections: buildLocalizedIndustrySections(language, industry, draft),
    },
  }
}

function buildIndustryHtml({ document, dir, language }) {
  const sections = (document.sections || [])
    .map(
      (section) => `
        <section class="section-card">
          <h2>${escapeHtml(section.heading)}</h2>
          ${renderParagraphs(section.body)}
        </section>
      `
    )
    .join('')

  return `<!doctype html>
<html lang="${escapeHtml(language)}" dir="${escapeHtml(dir)}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(document.title)}</title>
    <style>
      :root {
        color-scheme: light;
        --page-bg: #f7fbfa;
        --card-bg: #ffffff;
        --primary: #10b981;
        --text: #18334a;
        --muted: #5d7483;
        --line: #d8e9e3;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        background:
          radial-gradient(circle at top left, rgba(16, 185, 129, 0.12), transparent 30%),
          radial-gradient(circle at bottom right, rgba(6, 182, 212, 0.08), transparent 28%),
          var(--page-bg);
        color: var(--text);
        font-family: Inter, "Segoe UI", Tahoma, Arial, "Noto Nastaliq Urdu", "Noto Sans Arabic", "Noto Sans Bengali", "Noto Sans Devanagari", sans-serif;
        line-height: 1.7;
      }
      .page {
        max-width: 920px;
        margin: 0 auto;
        padding: 44px 24px 56px;
      }
      .hero {
        border-radius: 28px;
        background: linear-gradient(135deg, #10b981 0%, #0f8f72 100%);
        color: #fff;
        padding: 30px 34px;
        box-shadow: 0 24px 60px rgba(16, 185, 129, 0.16);
      }
      .eyebrow {
        margin: 0 0 10px;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        opacity: 0.92;
      }
      h1 {
        margin: 0;
        font-size: clamp(2.1rem, 4vw, 3.2rem);
        line-height: 1.06;
        letter-spacing: -0.04em;
      }
      .meta {
        margin-top: 16px;
        font-size: 0.98rem;
        color: rgba(255, 255, 255, 0.9);
      }
      .subtitle {
        margin: 16px 0 0;
        max-width: 700px;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.94);
      }
      .content {
        margin-top: 20px;
        border: 1px solid var(--line);
        border-radius: 28px;
        background: var(--card-bg);
        padding: 18px 22px 24px;
        box-shadow: 0 18px 48px rgba(15, 35, 42, 0.08);
      }
      .section-card {
        padding: 18px 0;
        border-bottom: 1px solid var(--line);
      }
      .section-card:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
      h2 {
        margin: 0 0 10px;
        font-size: 1.12rem;
        line-height: 1.35;
        color: var(--primary);
        letter-spacing: -0.02em;
      }
      p {
        margin: 0 0 12px;
        font-size: 1rem;
        color: var(--text);
      }
      p:last-child {
        margin-bottom: 0;
      }
      @media (max-width: 760px) {
        .page {
          padding: 22px 16px 34px;
        }
        .hero {
          padding: 24px 22px;
          border-radius: 22px;
        }
        .content {
          border-radius: 22px;
          padding: 14px 18px 18px;
        }
      }
      @media print {
        body { background: #fff; }
        .page { max-width: none; padding: 0; }
        .hero, .content { box-shadow: none; }
      }
    </style>
  </head>
  <body>
    <main class="page">
      <section class="hero">
        <p class="eyebrow">${escapeHtml(document.eyebrow)}</p>
        <h1>${escapeHtml(document.title)}</h1>
        <div class="meta">${escapeHtml(document.category)} &bull; ${escapeHtml(document.businessType)}</div>
        <p class="subtitle">${escapeHtml(document.subtitle)}</p>
      </section>
      <section class="content">${sections}</section>
    </main>
  </body>
</html>`
}

function openHtmlDocument(html, title) {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const popup = window.open(url, '_blank', 'noopener,noreferrer')

  if (popup) {
    popup.document.title = title
  }

  window.setTimeout(() => URL.revokeObjectURL(url), 60_000)
}

export function openIndustryPdf({ id, ...fallbackDraft }) {
  const localized = getLocalizedIndustryDocument(id, fallbackDraft)
  if (!localized) return
  openHtmlDocument(buildIndustryHtml(localized), localized.document.title)
}
