import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { reviews } from '../../../data'

const MotionDiv = motion.div

export function ReviewsSection() {
  const { t, i18n } = useTranslation()
  const [isPaused, setIsPaused] = useState(false)
  const localizedReviews = i18n.resolvedLanguage?.startsWith('ur')
    ? [
        { name: 'عائشہ خان', businessType: 'کپڑوں کی فروخت', feedback: 'اب جواب بہت تیز جاتے ہیں اور ہماری ٹیم صرف انہی چیٹس پر جاتی ہے جو آرڈر کے قریب ہوں۔' },
        { name: 'محمد سمیع', businessType: 'الیکٹرونکس ریٹیلر', feedback: 'Sova نے شام کے رش میں سنجیدہ خریدار ضائع ہونے سے بچا لیا۔' },
        { name: 'فرحان علی', businessType: 'ڈرائی فروٹس ہول سیل', feedback: 'قیمت اور مقدار کے سوال فوراً حل ہو جاتے ہیں، اس سے ہماری ٹیم کے کئی گھنٹے بچتے ہیں۔' },
        { name: 'ریم المنصوری', businessType: 'ٹوی اور گفٹ اسٹور', feedback: 'اب بلک بائر آسانی سے پہچان میں آتے ہیں اور فالو اپ خود ہو جاتا ہے۔' },
      ]
    : reviews
  const tickerReviews = [...localizedReviews, ...localizedReviews, ...localizedReviews]

  return (
    <section className="w-full overflow-hidden bg-[#F4F8FF] py-20">
      <div className="mx-auto max-w-[1160px] px-5">
        {/* Heading */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#0061FF]">{t('sections.reviewsEyebrow')}</p>
          <h2 className="font-display text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#1D1D1F] sm:text-[2.8rem]">
            {t('sections.reviewsTitle')}
          </h2>
          <p className="mx-auto mt-3 max-w-[380px] text-[0.96rem] leading-[1.75] text-[#6E6E73]">
            {t('sections.reviewsDescription')}
          </p>
        </MotionDiv>
      </div>

      {/* Full-width ticker */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div
          className="flex w-max items-stretch gap-5"
          style={{ animation: 'ticker 38s linear infinite', animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {tickerReviews.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              className="w-[320px] shrink-0 rounded-[24px] border border-[#D6E0FF] bg-white p-6 shadow-[0_4px_24px_rgba(0,97,255,0.07)]"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              {/* Review text */}
              <p className="mt-4 text-[0.88rem] leading-[1.75] text-[#374151]">"{review.feedback}"</p>

              {/* Reviewer */}
              <div className="mt-5 flex items-center gap-3 border-t border-[#EEF3FF] pt-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=0061FF&color=ffffff&rounded=true&size=80`}
                  alt={review.name}
                  className="h-9 w-9 rounded-full object-cover"
                />
                <div>
                  <p className="text-[0.85rem] font-bold text-[#1D1D1F]">{review.name}</p>
                  <p className="text-[0.78rem] font-medium text-[#0061FF]">{review.businessType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
