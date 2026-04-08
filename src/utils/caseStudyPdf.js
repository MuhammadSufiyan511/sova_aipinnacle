import i18n from '../i18n'
import { caseStudyPdfDrafts } from '../data/caseStudyPdfDrafts'

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

function getMetricSummary(study, draft) {
  if (Array.isArray(study?.metrics) && study.metrics.length) {
    return study.metrics.join(' • ')
  }

  if (Array.isArray(draft?.highlights) && draft.highlights.length) {
    return draft.highlights.map((item) => item.value).join(' • ')
  }

  return ''
}

function lowercaseFirst(text) {
  const value = String(text || '')
  return value ? value.charAt(0).toLowerCase() + value.slice(1) : ''
}

function buildCaseStudyParagraphs(language, study, draft) {
  const company = study?.company || draft.title
  const category = study?.category || draft.category
  const businessType = study?.businessType || draft.businessType
  const summary = study?.summary || draft.sections?.[0]?.body || ''
  const problem = study?.problem || draft.sections?.[1]?.body || ''
  const solution = study?.solution || draft.sections?.[2]?.body || ''
  const result = study?.result || draft.sections?.[3]?.body || ''
  const headline = study?.headline || draft.subtitle || ''
  const metrics = getMetricSummary(study, draft)

  const byLanguage = {
    en: [
      joinParagraphs([
        `${company} is a ${businessType.toLowerCase()} operating in the ${category.toLowerCase()} space, and WhatsApp plays a central role in how buyer conversations begin. ${summary}`,
        `For this type of business, the first reply often sets the tone for the entire sale. Buyers want confidence, fast product clarity, and a smooth path toward the next step. That meant ${company} needed a workflow that could support quick responses without depending on the team to manually repeat the same information all day.`,
      ]),
      joinParagraphs([
        `${problem} As message volume increased, routine inquiries started taking attention away from the buyers who were already closer to placing an order.`,
        `The inbox remained active, but sales efficiency suffered. High-intent conversations were mixed with everyday questions, follow-ups slowed down, and the team spent too much time replying to the same basic requests instead of moving promising buyers toward checkout or confirmation.`,
      ]),
      joinParagraphs([
        `${solution} This gave the team a more structured way to protect serious demand, keep conversations moving, and maintain faster replies during busier hours.`,
        `SOVA helped organize first responses, surface buying signals, and support a more deliberate handoff between automation and manual selling. Instead of treating every chat equally, the workflow began prioritizing the conversations most likely to turn into revenue while still keeping routine customer support clear and responsive.`,
      ]),
      joinParagraphs([
        `${result} Overall, the workflow became more organized, the team spent less time repeating the same information, and ${lowercaseFirst(headline)}`,
        metrics
          ? `The improvement was visible not only in day-to-day operations but also in commercial performance. ${metrics} reflected a stronger WhatsApp sales engine, where the team could respond with more consistency, keep serious buyers engaged, and reduce the friction that often causes valuable leads to go cold.`
          : `The improvement was visible not only in daily operations but also in overall sales quality. The WhatsApp workflow became more dependable, buyer conversations stayed active for longer, and the team could focus more of its effort on the chats with the highest likelihood of converting.`,
      ]),
    ],
    ur: [
      joinParagraphs([
        `${company} ایک ${businessType} ہے جو ${category} کے شعبے میں کام کرتا ہے، اور WhatsApp اس کے خریداروں سے ابتدائی رابطے کا اہم ذریعہ ہے۔ ${summary}`,
        `${company} جیسے کاروبار میں اکثر پہلی گفتگو ہی خریداری کے فیصلے کی بنیاد بنتی ہے۔ خریدار فوری جواب، واضح معلومات، اور اگلے مرحلے کی صاف رہنمائی چاہتے ہیں۔ اسی لیے ایسا نظام ضروری تھا جو ٹیم پر ہر وقت manual بوجھ ڈالے بغیر تیز اور قابلِ اعتماد جواب دے سکے۔`,
      ]),
      joinParagraphs([
        `${problem} جیسے جیسے میسجز بڑھے، روزمرہ کے سوالات ٹیم کی توجہ اُن خریداروں سے ہٹانے لگے جو آرڈر کے زیادہ قریب تھے۔`,
        `Inbox بظاہر مصروف رہتا تھا، لیکن سیلز کی کارکردگی کمزور ہو رہی تھی۔ سنجیدہ خریدار عام سوالات کے درمیان دب جاتے تھے، follow-up دیر سے ہوتا تھا، اور ٹیم کا قیمتی وقت ایک ہی معلومات بار بار دینے میں لگ جاتا تھا بجائے اس کے کہ وہ strong buyers کو آرڈر تک پہنچاتی۔`,
      ]),
      joinParagraphs([
        `${solution} اس سے ٹیم کو ایک زیادہ منظم طریقہ ملا جس کے ذریعے وہ سنجیدہ خریداروں کو ترجیح دے سکے، گفتگو کو روانی سے آگے بڑھا سکے، اور مصروف اوقات میں بھی جواب کی رفتار برقرار رکھ سکے۔`,
        `SOVA نے ابتدائی جوابات کو زیادہ ترتیب دی، buying signals کو نمایاں کیا، اور automation اور manual sales کے درمیان ایک واضح handoff بنایا۔ اس طرح ہر chat کو ایک جیسا treat کرنے کے بجائے ٹیم اُن گفتگوؤں پر بہتر فوکس کر سکی جو حقیقت میں revenue بننے کے زیادہ قریب تھیں۔`,
      ]),
      joinParagraphs([
        `${result} مجموعی طور پر workflow زیادہ منظم ہو گیا، ٹیم کا دہرائے جانے والے جوابوں پر وقت کم لگا، اور ${headline}`,
        metrics
          ? `یہ بہتری صرف روزمرہ سہولت تک محدود نہیں رہی۔ ${metrics} نے واضح کیا کہ WhatsApp سیلز کا پورا نظام زیادہ مضبوط ہوا، جہاں سنجیدہ demand بہتر طور پر سنبھلی، جوابات زیادہ مستقل ہوئے، اور وہ friction کم ہوئی جو اکثر اہم leads کو ٹھنڈا کر دیتی ہے۔`
          : `یہ بہتری صرف روزمرہ سہولت تک محدود نہیں رہی۔ WhatsApp سیلز کا نظام زیادہ مضبوط ہوا، سنجیدہ خریدار زیادہ واضح نظر آنے لگے، اور ٹیم اپنی توانائی اُن chats پر لگا سکی جو conversion کے سب سے قریب تھیں۔`,
      ]),
    ],
    ar: [
      joinParagraphs([
        `${company} هو ${businessType} يعمل في مجال ${category}، ويُعد WhatsApp قناة أساسية لبدء محادثات الشراء. ${summary}`,
        `في هذا النوع من الأعمال، كثيراً ما تحدد أول رسالة جودة الفرصة البيعية بالكامل. فالمشتري يريد رداً سريعاً، ومعلومة واضحة، وخطوة تالية مفهومة. لذلك كان من الضروري وجود سير عمل يوفّر هذه السرعة من دون أن يرهق الفريق بتكرار نفس الإجابات يدوياً طوال الوقت.`,
      ]),
      joinParagraphs([
        `${problem} ومع زيادة حجم الرسائل، بدأت الاستفسارات الروتينية تسحب انتباه الفريق بعيداً عن المشترين الأقرب لاتخاذ قرار الشراء.`,
        `ظل صندوق المحادثات نشطاً، لكن كفاءة المبيعات تراجعت. اختلطت المحادثات الجادة بالأسئلة اليومية، وتأخرت المتابعة، وأصبح جزء كبير من وقت الفريق يضيع في إعادة شرح نفس التفاصيل بدلاً من دفع المشترين الجادين نحو الإغلاق أو تأكيد الطلب.`,
      ]),
      joinParagraphs([
        `${solution} وقد منح هذا الفريق أسلوباً أكثر تنظيماً لحماية الطلب الجاد، والحفاظ على سير المحادثات، وتقديم ردود أسرع خلال أوقات الضغط.`,
        `ساعد SOVA على تنظيم الردود الأولى، وإظهار مؤشرات الشراء المهمة، وصناعة انتقال أوضح بين الأتمتة والمتابعة اليدوية من الفريق. وبدلاً من التعامل مع كل محادثة بالطريقة نفسها، أصبح التركيز موجهاً أكثر نحو المحادثات ذات القيمة البيعية الأعلى مع بقاء تجربة العميل سريعة وواضحة.`,
      ]),
      joinParagraphs([
        `${result} وبشكل عام أصبح سير العمل أكثر تنظيماً، وقل الوقت الضائع في تكرار نفس المعلومات، وأصبح ${headline}`,
        metrics
          ? `ولم يقتصر الأثر على الراحة التشغيلية فقط. فقد أظهرت مؤشرات مثل ${metrics} أن مسار البيع عبر WhatsApp أصبح أقوى وأكثر ثباتاً، مع قدرة أفضل على حماية الطلب الجاد وتقليل الاحتكاك الذي يجعل كثيراً من الفرص تفقد زخمها قبل التحول إلى طلب فعلي.`
          : `ولم يقتصر الأثر على الراحة التشغيلية فقط. بل أصبح مسار البيع عبر WhatsApp أكثر استقراراً، وبات المشترون الجادون أوضح أمام الفريق، وأصبح من الأسهل توجيه الجهد نحو المحادثات الأقرب للتحول إلى طلب فعلي.`,
      ]),
    ],
    bn: [
      joinParagraphs([
        `${company} একটি ${businessType}, যা ${category} ক্যাটাগরিতে কাজ করে, এবং ক্রেতাদের সঙ্গে প্রাথমিক যোগাযোগে WhatsApp খুবই গুরুত্বপূর্ণ ভূমিকা রাখে। ${summary}`,
        `এই ধরনের ব্যবসায় প্রথম উত্তরই অনেক সময় বিক্রির দিক ঠিক করে দেয়। ক্রেতারা দ্রুত জবাব, পরিষ্কার তথ্য, এবং পরের ধাপ সম্পর্কে সহজ নির্দেশনা চায়। তাই এমন একটি workflow দরকার ছিল যা manual repetition ছাড়াই দ্রুত ও নির্ভরযোগ্য সাড়া দিতে পারে.`,
      ]),
      joinParagraphs([
        `${problem} মেসেজ বাড়ার সঙ্গে সঙ্গে রুটিন প্রশ্নগুলো টিমের মনোযোগ সরিয়ে নিতে থাকে সেই ক্রেতাদের কাছ থেকে, যারা আসলে অর্ডারের আরও কাছে ছিল।`,
        `ফলে inbox ব্যস্ত থাকলেও sales efficiency কমে যাচ্ছিল। সিরিয়াস buyer-রা সাধারণ প্রশ্নের ভিড়ে চাপা পড়ে যাচ্ছিল, follow-up ধীর হয়ে যাচ্ছিল, আর টিমের অনেক সময় একই তথ্য আবার আবার পাঠাতে নষ্ট হচ্ছিল, যেটা আসলে ready-to-buy গ্রাহকদের এগিয়ে নেওয়ার জন্য ব্যবহার হওয়া উচিত ছিল।`,
      ]),
      joinParagraphs([
        `${solution} এতে টিম একটি বেশি গোছানো উপায় পায়, যার মাধ্যমে সিরিয়াস চাহিদাকে অগ্রাধিকার দেওয়া, কথোপকথন সচল রাখা, এবং ব্যস্ত সময়েও দ্রুত উত্তর দেওয়া সম্ভব হয়।`,
        `SOVA প্রথম দিকের reply-গুলোকে আরও structured করে, buying signals সামনে আনে, এবং automation ও manual sales follow-up-এর মধ্যে একটি পরিষ্কার handoff তৈরি করে। এতে সব chat-এ সমান effort না দিয়ে টিম বেশি attention দিতে পারে সেসব conversation-এ যেগুলো conversion-এর বেশি কাছাকাছি।`,
      ]),
      joinParagraphs([
        `${result} সব মিলিয়ে workflow আরও সংগঠিত হয়েছে, একই তথ্য বারবার দিতে সময় কম লেগেছে, এবং ${headline}`,
        metrics
          ? `এই উন্নতির প্রভাব শুধু সময় বাঁচানোতে সীমাবদ্ধ ছিল না। ${metrics} দেখিয়েছে যে WhatsApp sales process আরও শক্তিশালী হয়েছে, যেখানে serious demand ভালোভাবে সামলানো গেছে, replies আরও consistent হয়েছে, এবং মূল্যবান leads ঠান্ডা হয়ে যাওয়ার আগে তাদের আরও দ্রুত এগিয়ে নেওয়া গেছে।`
          : `এই উন্নতির প্রভাব শুধু সময় বাঁচানোতে সীমাবদ্ধ ছিল না। WhatsApp sales process আরও নির্ভরযোগ্য হয়েছে, serious buyer-রা আরও পরিষ্কারভাবে চিহ্নিত হয়েছে, এবং টিম conversion-এর কাছাকাছি থাকা conversation-গুলোতে বেশি মনোযোগ দিতে পেরেছে।`,
      ]),
    ],
    hi: [
      joinParagraphs([
        `${company} एक ${businessType} है जो ${category} कैटेगरी में काम करता है, और buyers के साथ शुरुआती बातचीत में WhatsApp बहुत अहम भूमिका निभाता है। ${summary}`,
        `इस तरह के business में पहला जवाब ही अक्सर sale की दिशा तय करता है। buyers को तेज़ response, साफ जानकारी, और अगले step की स्पष्ट guidance चाहिए होती है। इसलिए ऐसा workflow ज़रूरी था जो manual repetition के बिना भी fast और reliable जवाब दे सके।`,
      ]),
      joinParagraphs([
        `${problem} जैसे-जैसे messages बढ़े, routine questions team का ध्यान उन buyers से हटाने लगे जो वास्तव में order के अधिक करीब थे।`,
        `Inbox भले ही active दिखता रहा, लेकिन sales efficiency कमजोर होने लगी। serious buyers सामान्य सवालों के बीच दबने लगे, follow-up धीमा हुआ, और team का बहुत समय वही जानकारी बार-बार भेजने में जाने लगा, जबकि यही effort ready-to-buy conversations को आगे बढ़ाने में लगना चाहिए था।`,
      ]),
      joinParagraphs([
        `${solution} इससे team को एक ज़्यादा structured तरीका मिला, जिसमें serious demand को priority देना, conversations को आगे बढ़ाना, और busy hours में भी reply speed बनाए रखना आसान हुआ।`,
        `SOVA ने शुरुआती replies को व्यवस्थित किया, buying signals को सामने लाया, और automation तथा manual sales follow-up के बीच एक साफ handoff तैयार किया। इससे हर chat पर बराबर मेहनत करने के बजाय team उन conversations पर बेहतर focus कर सकी जो conversion के सबसे करीब थीं।`,
      ]),
      joinParagraphs([
        `${result} कुल मिलाकर workflow ज़्यादा organized हुआ, बार-बार वही जानकारी देने में कम समय लगा, और ${headline}`,
        metrics
          ? `इसका असर सिर्फ time saving तक सीमित नहीं रहा। ${metrics} ने दिखाया कि WhatsApp sales process और मजबूत हुआ, जहाँ serious demand को बेहतर संभाला गया, replies ज़्यादा consistent हुए, और valuable leads के ठंडे पड़ने से पहले उन्हें आगे बढ़ाना आसान हुआ।`
          : `इसका असर सिर्फ time saving तक सीमित नहीं रहा। WhatsApp sales process और भरोसेमंद बना, serious buyers अधिक स्पष्ट दिखे, और team conversion के सबसे करीब मौजूद chats पर अपना ध्यान बेहतर ढंग से लगा सकी।`,
      ]),
    ],
    de: [
      joinParagraphs([
        `${company} ist ein ${businessType.toLowerCase()} im Bereich ${category}, und WhatsApp spielt eine zentrale Rolle dabei, wie Kaufgespräche beginnen. ${summary}`,
        `In diesem Geschäftsmodell entscheidet oft schon die erste Antwort darüber, ob Vertrauen entsteht und ein Interessent im Gespräch bleibt. Deshalb brauchte ${company} einen Ablauf, der schnelle und verlässliche Antworten ermöglicht, ohne das Team ständig mit denselben manuellen Wiederholungen zu belasten.`,
      ]),
      joinParagraphs([
        `${problem} Mit zunehmender Nachrichtenmenge nahmen Routineanfragen dem Team immer mehr Aufmerksamkeit von den Käufern, die bereits näher an einer Bestellung waren.`,
        `Der Posteingang wirkte zwar lebendig, doch der Vertriebsprozess wurde weniger effizient. Ernsthafte Gespräche gingen zwischen Standardfragen unter, Nachfassaktionen verzögerten sich und zu viel Zeit floss in wiederholte Basisinformationen statt in die Gespräche mit echtem Abschluss­potenzial.`,
      ]),
      joinParagraphs([
        `${solution} Dadurch erhielt das Team einen strukturierteren Weg, ernsthafte Nachfrage zu schützen, Gespräche in Bewegung zu halten und auch in Stoßzeiten schneller zu antworten.`,
        `SOVA half dabei, erste Antworten besser zu organisieren, Kaufsignale sichtbar zu machen und einen klareren Übergang zwischen Automatisierung und manuellem Vertrieb zu schaffen. So wurde nicht mehr jede Anfrage gleich behandelt, sondern der Fokus rückte stärker auf die Gespräche mit echter Umsatzwahrscheinlichkeit.`,
      ]),
      joinParagraphs([
        `${result} Insgesamt wurde der Ablauf geordneter, das Team verlor weniger Zeit mit wiederholten Informationen, und ${lowercaseFirst(headline)}`,
        metrics
          ? `Die Wirkung ging über reine Zeitersparnis hinaus. ${metrics} machten sichtbar, dass der WhatsApp-Vertriebsprozess stabiler wurde, ernsthafte Nachfrage besser geschützt blieb und wertvolle Gespräche seltener an Reibung oder Verzögerung verloren gingen.`
          : `Die Wirkung ging über reine Zeitersparnis hinaus. Der WhatsApp-Vertriebsprozess wurde stabiler, ernsthafte Käufer blieben besser sichtbar und das Team konnte sich konsequenter auf die Gespräche mit höherer Abschlusswahrscheinlichkeit konzentrieren.`,
      ]),
    ],
  }

  return byLanguage[language] || byLanguage.en
}

function buildLocalizedCaseStudySections(language, study, draft, headings) {
  const bodies = study ? buildCaseStudyParagraphs(language, study, draft) : draft.sections.map((section) => section.body)
  return headings.map((heading, index) => ({
    heading,
    body: bodies[index] || '',
  }))
}

function getLocalizedCaseStudyDocument(slug, fallbackDraft) {
  const language = normalizeLanguage(i18n.resolvedLanguage || i18n.language)
  const localizedStudy = i18n.t(`content.caseStudies.items.${slug}`, { returnObjects: true })
  const study = localizedStudy && typeof localizedStudy === 'object' ? localizedStudy : null
  const draft = fallbackDraft || caseStudyPdfDrafts[slug]

  const headings = [
    translateOr('common.overview', 'Overview'),
    i18n.t('common.problem'),
    translateOr('common.sovaSolution', 'Solution by SOVA'),
    translateOr('common.conclusion', 'Conclusion'),
  ]

  if (!draft) {
    return null
  }

  const title = study?.company || draft.title
  const category = study?.category || draft.category
  const businessType = study?.businessType || draft.businessType
  const subtitle = study?.headline || draft.subtitle
  const highlights = Array.isArray(study?.metrics) && study.metrics.length
    ? study.metrics.slice(0, 2).map((metric) => ({ value: metric, label: '' }))
    : draft.highlights

  return {
    language,
    dir: isRtlLanguage(language) ? 'rtl' : 'ltr',
    document: {
      title,
      eyebrow: 'SOVA CASE STUDY',
      subtitle,
      category,
      businessType,
      highlights,
      sections: buildLocalizedCaseStudySections(language, study, draft, headings),
    },
  }
}

function buildCaseStudyHtml({ document, dir, language }) {
  const highlightCards = (document.highlights || [])
    .slice(0, 2)
    .map(
      (item, index) => `
        <div class="metric-card ${index === 1 ? 'alt' : ''}">
          <div class="metric-value">${escapeHtml(item.value)}</div>
          ${item.label ? `<div class="metric-label">${escapeHtml(item.label)}</div>` : ''}
        </div>
      `
    )
    .join('')

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
        --soft: #eefaf4;
        --soft-alt: #f1f3ff;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        background:
          radial-gradient(circle at top left, rgba(16, 185, 129, 0.12), transparent 30%),
          radial-gradient(circle at bottom right, rgba(167, 139, 250, 0.08), transparent 28%),
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
      .metrics {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
        margin-top: 22px;
      }
      .metric-card {
        border: 1px solid var(--line);
        border-radius: 20px;
        background: var(--soft);
        padding: 16px 18px;
      }
      .metric-card.alt {
        background: var(--soft-alt);
      }
      .metric-value {
        color: var(--primary);
        font-size: 1.2rem;
        font-weight: 800;
        line-height: 1.3;
      }
      .metric-label {
        margin-top: 6px;
        color: var(--muted);
        font-size: 0.9rem;
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
        .metrics {
          grid-template-columns: 1fr;
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
      ${highlightCards ? `<section class="metrics">${highlightCards}</section>` : ''}
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

export function openCaseStudyPdf({ slug, ...fallbackDraft }) {
  const localized = getLocalizedCaseStudyDocument(slug, fallbackDraft)
  if (!localized) return
  openHtmlDocument(buildCaseStudyHtml(localized), localized.document.title)
}
