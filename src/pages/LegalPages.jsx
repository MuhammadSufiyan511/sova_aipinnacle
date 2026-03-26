import { privacySections, termsSections } from '../data'
import { useTranslation } from 'react-i18next'
import { FinalCta, ListItem, SectionHeading } from '../components'

export function TermsPage() {
  const { t, i18n } = useTranslation()
  const localizedSections = i18n.resolvedLanguage?.startsWith('ur')
    ? [
        { ...termsSections[0], title: '1. شرائط کی قبولیت', items: ['Sova استعمال کر کے آپ ان شرائط و ضوابط کو قبول کرتے ہیں۔', 'اگر آپ متفق نہیں ہیں تو براہ کرم سروس استعمال نہ کریں۔'] },
        { ...termsSections[1], title: '2. سروس کی وضاحت', items: ['Sova ایک AI پاورڈ WhatsApp سیلز آٹومیشن پلیٹ فارم ہے جو کاروباروں کو گفتگو، کیٹلاگ، اور آرڈر پروسیسنگ سنبھالنے میں مدد دیتا ہے۔'] },
        { ...termsSections[2], title: '3. صارف کی ذمہ داریاں', items: ['آپ اپنے اکاؤنٹ کی معلومات کی حفاظت کے ذمہ دار ہیں۔', "آپ کو WhatsApp کی Business Policy اور Commerce Policy پر عمل کرنا ہوگا۔"] },
        { ...termsSections[3], title: '4. دانشورانہ ملکیت', items: ['Sova کا تمام مواد، فیچرز، اور فنکشنلٹی ہماری ملکیت ہیں اور متعلقہ قوانین کے تحت محفوظ ہیں۔'] },
        { ...termsSections[4], title: '5. ذمہ داری کی حد', items: ['Sova ہماری سروس کے استعمال یا عدم استعمال سے ہونے والے بالواسطہ یا خصوصی نقصانات کا ذمہ دار نہیں ہوگا۔'] },
        { ...termsSections[5], title: '6. اکاؤنٹ کی بندش', items: ['اگر آپ ان شرائط کی خلاف ورزی کریں تو ہم آپ کا اکاؤنٹ بند یا معطل کر سکتے ہیں۔', 'بندش کے بعد سروس استعمال کرنے کا حق فوری طور پر ختم ہو جائے گا۔'] },
        { ...termsSections[6], title: '7. نافذ قانون', items: ['یہ شرائط پاکستان کے قوانین کے مطابق نافذ اور تشریح کی جائیں گی۔'] },
      ]
    : termsSections
  return (
    <LegalPage
      eyebrow={t('sections.termsEyebrow')}
      title={t('sections.termsTitle')}
      description={t('sections.termsDescription')}
      sections={localizedSections}
      updatedAt="March 25, 2026"
    />
  )
}

export function PrivacyPage() {
  const { t, i18n } = useTranslation()
  const localizedSections = i18n.resolvedLanguage?.startsWith('ur')
    ? [
        { ...privacySections[0], title: 'تعارف', items: ['یہ پرائیویسی پالیسی بتاتی ہے کہ Sova آپ کے استعمال سے متعلق ڈیٹا کیسے جمع، استعمال، محفوظ، اور پروٹیکٹ کرتا ہے۔', 'یہ کاروباری مالکان، ٹیم ممبرز، اور پلیٹ فارم سے جڑی گفتگوؤں پر لاگو ہوتی ہے۔'] },
        { ...privacySections[1], title: 'ڈیٹا کلیکشن', items: ['ہم بزنس رابطہ معلومات، کنکشن کے لیے اکاؤنٹ معلومات، کسٹمر گفتگو، میٹا ڈیٹا، اور سپورٹ میسجز جمع کر سکتے ہیں۔', 'ہم کارکردگی اور سکیورٹی بہتر کرنے کے لیے ڈیوائس، براؤزر، اور اینالیٹکس معلومات بھی جمع کر سکتے ہیں۔'] },
        { ...privacySections[2], title: 'ڈیٹا کا استعمال', items: ['ڈیٹا گفتگو آٹومیٹ کرنے، انٹینٹ شناخت کرنے، فالو اپ بھیجنے، اور سپورٹ فراہم کرنے کے لیے استعمال ہوتا ہے۔', 'ہم پلیٹ فارم بہتر بنانے کے لیے مجموعی اور غیر شناختی معلومات بھی استعمال کر سکتے ہیں۔'] },
        { ...privacySections[3], title: 'سکیورٹی', items: ['ہم معلومات کی حفاظت کے لیے مناسب تکنیکی اور تنظیمی اقدامات استعمال کرتے ہیں۔', 'آپریشنل ڈیٹا تک رسائی صرف مجاز سسٹمز اور متعلقہ افراد تک محدود ہے۔'] },
        { ...privacySections[4], title: 'صارف کے حقوق', items: ['آپ اپنی معلومات تک رسائی، درستگی، یا حذف کرنے کی درخواست کر سکتے ہیں جہاں قانون اجازت دے۔', 'آپ اپنے پرائیویسی حقوق یا ڈیٹا پروسیسنگ سے متعلق سوالات کے لیے ہم سے رابطہ کر سکتے ہیں۔'] },
      ]
    : privacySections
  return (
    <LegalPage
      eyebrow={t('sections.privacyEyebrow')}
      title={t('sections.privacyTitle')}
      description={t('sections.privacyDescription')}
      sections={localizedSections}
      updatedAt="March 25, 2026"
    />
  )
}

function LegalPage({ eyebrow, title, description, sections, updatedAt }) {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-[1100px] pb-16 pt-30 px-5">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} centered />
      <p className="mt-6 text-center text-[0.85rem] font-bold uppercase tracking-widest text-[#0061FF]">{t('common.lastUpdated')}: {updatedAt}</p>
      <div className="mt-12 grid gap-8">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[36px] border border-[#F0F0F0] bg-white p-8 shadow-[0_12px_44px_rgba(0,0,0,0.03)]"
          >
            <div className="flex items-center gap-5">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EBF5FF] to-[#DBEAFE] text-[#0061FF]">
                <section.icon className="h-6 w-6" />
              </div>
              <h2 className="font-display text-[2.2rem] font-bold tracking-[-0.04em] text-[#111827]">{section.title}</h2>
            </div>
            <div className="mt-8 space-y-5">
              {section.items.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-14">
        <FinalCta />
      </div>
    </section>
  )
}
