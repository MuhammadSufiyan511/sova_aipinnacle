import { Star } from 'lucide-react'
import { reviews } from '../../../data'
import { SectionHeading } from '../../ui'

export function ReviewsSection() {
  const tickerReviews = [...reviews, ...reviews]

  return (
    <section className="mx-auto max-w-[1280px] py-16">
      <SectionHeading eyebrow="Reviews" title="What customers say" description="Quick feedback from teams using Sova every day." centered />
      <div className="group mt-8 overflow-hidden rounded-[32px] border border-[#cfe6e9]/80 bg-white/88 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-6">
        <div className="flex w-max gap-5 animate-[ticker_34s_linear_infinite] group-hover:[animation-play-state:paused]">
          {tickerReviews.map((review, index) => (
            <div
              key={`${review.name}-${index}`}
              className="min-h-[220px] w-[300px] shrink-0 rounded-[30px] border border-[#d7ebe7] bg-[linear-gradient(160deg,#ffffff_0%,#eefbf8_62%,#f8f2ff_100%)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:w-[340px]"
            >
              <div className="flex items-center gap-3">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=0f9f8f&color=ffffff&rounded=true&size=96`}
                  alt={review.name}
                  className="h-12 w-12 rounded-full border border-white/80 object-cover shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
                />
                <div>
                  <p className="font-semibold text-[#173247]">{review.name}</p>
                  <p className="text-sm text-[#0f9f8f]">{review.businessType}</p>
                </div>
              </div>
              <div className="mt-5 flex items-center gap-1 text-amber-500">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-[#305365]">"{review.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
