import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { reviews } from '../../../data'

const MotionDiv = motion.div

function initialsFor(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function ReviewsSection() {
  const { t, i18n } = useTranslation()
  const [isPaused, setIsPaused] = useState(false)
  const localizedReviews = t('content.reviews.items', { returnObjects: true }) || reviews
  const tickerReviews = [...localizedReviews, ...localizedReviews, ...localizedReviews]
  const reviewDirection = i18n.dir()

  return (
    <section className="w-full overflow-hidden bg-[#F4F8FF] py-14">
      <div className="mx-auto max-w-[1160px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#10B981]">{t('sections.reviewsEyebrow')}</p>
          <h2 className="font-display text-[2.2rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.8rem]">
            {t('sections.reviewsTitle')}
          </h2>
          <p className="mx-auto mt-3 max-w-[380px] text-[0.96rem] leading-[1.75] text-[#5a9e88]">
            {t('sections.reviewsDescription')}
          </p>
        </MotionDiv>
      </div>

      <div
        className="relative"
        dir="ltr"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        <div
          className="flex w-max items-stretch gap-5"
          dir="ltr"
          style={{ animation: 'ticker 38s linear infinite', animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {tickerReviews.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              dir={reviewDirection}
              className="w-[320px] shrink-0 rounded-[24px] border border-[#D1FAE5] bg-white p-6 shadow-[0_4px_24px_rgba(16,185,129,0.08)]"
            >
              <div className="flex items-center gap-0.5">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              <p className="mt-4 text-[0.88rem] leading-[1.75] text-[#1E293B]">"{review.feedback}"</p>

              <div className="mt-5 flex items-center gap-3 border-t border-[#ECFDF5] pt-4">
                <div
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#10B981_0%,#06B6D4_100%)] text-[0.76rem] font-bold text-white shadow-sm"
                >
                  {initialsFor(review.name)}
                </div>
                <div>
                  <p className="text-[0.85rem] font-bold text-[#1E293B]">{review.name}</p>
                  <p className="text-[0.78rem] font-medium text-[#10B981]">{review.businessType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
