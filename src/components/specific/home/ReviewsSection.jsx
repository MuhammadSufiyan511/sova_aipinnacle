import { Star } from 'lucide-react'
import { reviews } from '../../../data'
import { SectionHeading } from '../../ui'

export function ReviewsSection() {
  return (
    <section className="mx-auto max-w-[1280px] py-16">
      <SectionHeading eyebrow="Reviews" title="What businesses say after switching to Sova." description="Short feedback from teams using Sova to manage heavy WhatsApp demand." />
      <div className="mt-8 grid gap-5 lg:grid-cols-4">
        {reviews.map((review) => (
          <div key={review.name} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-1 text-amber-500">{[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}</div>
            <p className="mt-4 text-sm leading-7 text-slate-600">"{review.feedback}"</p>
            <p className="mt-5 font-semibold text-slate-900">{review.name}</p>
            <p className="text-sm text-slate-500">{review.businessType}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
