import { useState, memo } from 'react'
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

export const ReviewsSection = memo(function ReviewsSection() {
  const { t, i18n } = useTranslation()
  const [isPaused, setIsPaused] = useState(false)
  const localizedReviews = t('content.reviews.items', { returnObjects: true }) || reviews
  const tickerReviews = [...localizedReviews, ...localizedReviews, ...localizedReviews]
  const reviewDirection = i18n.dir()

  return (
    <section className="home-reviews-section relative w-full overflow-hidden bg-[#F8FAFC] py-10 sm:py-16">
      {/* Background Decorative Element */}
      <div className="reviews-radial-bg absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 opacity-[0.4]" />

      <div className="relative z-10 mx-auto max-w-[1160px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 inline-block rounded-full bg-[#ECFDF5] px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#10B981]">
            {t('sections.reviewsEyebrow')}
          </p>
          <h2 className="font-display text-[2.4rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.8rem]">
            {t('sections.reviewsTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-[420px] text-[1rem] leading-[1.7] text-[#5a9e88]">
            {t('sections.reviewsDescription')}
          </p>
        </MotionDiv>
      </div>

      <div
        className="relative z-10 pb-4"
        dir="ltr"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      >
        <div
          className="flex w-max items-stretch gap-6"
          dir="ltr"
          style={{ animation: 'ticker 45s linear infinite', animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {tickerReviews.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              dir={reviewDirection}
              className="w-[300px] shrink-0 rounded-[32px] border border-white/60 bg-white/70 p-7 shadow-[0_12px_44px_rgba(16,185,129,0.06)] backdrop-blur-xl transition-all hover:border-[#10B981]/30 hover:shadow-[0_16px_56px_rgba(16,185,129,0.1)] sm:w-[340px]"
            >
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>

              <p className="mt-5 text-[0.92rem] font-medium leading-[1.75] text-[#1E293B]">"{review.feedback}"</p>

              <div className="mt-6 flex items-center gap-3.5 border-t border-[#ECFDF5] pt-5">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#10B981_0%,#06B6D4_100%)] text-[0.85rem] font-extrabold text-white shadow-md shadow-emerald-500/20"
                >
                  {initialsFor(review.name)}
                </div>
                <div>
                  <p className="text-[0.9rem] font-bold text-[#1E293B]">{review.name}</p>
                  <p className="text-[0.78rem] font-bold text-[#10B981]">{review.businessType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})
