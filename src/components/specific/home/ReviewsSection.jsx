import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { reviews } from '../../../data'
import { SectionHeading } from '../../ui'

const MotionDiv = motion.div

export function ReviewsSection() {
  const tickerReviews = [...reviews, ...reviews]

  return (
    <section className="mx-auto max-w-[1280px] py-16">
      <SectionHeading eyebrow="Reviews" title="What customers say" description="Quick feedback from teams using Sova every day." centered />
      <div className="mt-8 overflow-hidden rounded-[32px] border border-[#cfe6e9]/80 bg-white/88 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-6">
        <MotionDiv
          className="flex w-max gap-5"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 34, ease: 'linear', repeat: Number.POSITIVE_INFINITY }}
        >
          {tickerReviews.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              className="min-h-[220px] w-[280px] shrink-0 rounded-[28px] border border-[#cfe6e9] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:w-[320px]"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-[#4e6b79]">"{review.feedback}"</p>
              <p className="mt-5 font-semibold text-[#0f9f8f]">{review.name}</p>
              <p className="text-sm text-[#f59e0b]">{review.businessType}</p>
            </div>
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}
