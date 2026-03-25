import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Play, Star } from 'lucide-react'
import {
  caseStudies,
  features,
  heroVideoUrl,
  industries,
  pricingPlans,
  reviews,
  trustedBusinesses,
} from '../content'
import {
  CTAButton,
  DemoModal,
  FeatureBadge,
  FinalCta,
  HeroEyebrow,
  SectionHeading,
  TextLink,
} from '../components'

const MotionDiv = motion.div

export function HomePage() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id)
  const [showDemo, setShowDemo] = useState(false)

  const selectedIndustry = useMemo(
    () => industries.find((industry) => industry.id === activeIndustry) ?? industries[0],
    [activeIndustry],
  )

  return (
    <>
      <section className="relative mx-auto grid min-h-[66vh] max-w-[1280px] items-center gap-8 overflow-hidden py-6 lg:grid-cols-[0.92fr_1.08fr] lg:py-8">
        <div className="space-y-4">
          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-4"
          >
            {/* <HeroEyebrow /> */}
            <div className="space-y-3">
              <h1 className="max-w-lg font-display text-[1.5rem] font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-[2.6rem] lg:text-[3.1rem]">
                Turn Every <span className="bg-[linear-gradient(135deg,#06b6d4,#10b981)] bg-clip-text text-transparent">WhatsApp Chat</span> Into a{' '}
                <span className="bg-[linear-gradient(135deg,#f59e0b,#fb7185)] bg-clip-text text-transparent">Sale</span>.
              </h1>
              <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-[15px]">
                Meet Sova, your <span className="font-semibold text-teal-600">24/7 virtual assistant</span>.
                It answers questions, finds real buyers, and takes orders for you automatically.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Too many messages?', 'No serious buyers?', 'Wasting time replying?'].map((item) => (
                <FeatureBadge key={item}>{item}</FeatureBadge>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
              <CTAButton to="/auth" label="Start Free Trial" subtext="No card required" full />
              <button
                type="button"
                onClick={() => setShowDemo(true)}
                className="inline-flex h-11 items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-800 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition hover:border-slate-400 hover:bg-slate-50"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
          className="w-full max-w-[530px] justify-self-end"
        >
          <div className="overflow-hidden rounded-[32px] border border-white/70 bg-white/90 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur">
            <div className="aspect-video overflow-hidden rounded-[26px] bg-slate-950">
              <iframe
                className="h-full w-full"
                src={heroVideoUrl}
                title="Sova business automation demo"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </MotionDiv>
      </section>

      <section className="mx-auto max-w-[1280px] py-2">
        <SectionHeading
          eyebrow="Industries"
          title="Built for busy businesses that sell on WhatsApp."
          description="Start with the use case that matches your daily customer questions."
        />
                  {/* <div className="mb-5 w-full sm:w-auto">
                    <CTAButton to="/auth" label="Start Free Trial" subtext="No card required" full />
                  </div> */}
        <div className="mt-8 rounded-[32px] border border-slate-200/80 bg-white/85 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-6">
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <button
                key={industry.id}
                type="button"
                onClick={() => setActiveIndustry(industry.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeIndustry === industry.id
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {industry.label}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <MotionDiv
              key={selectedIndustry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              className="mt-6 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]"
            >
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50">
                <img
                  src={selectedIndustry.image}
                  alt={selectedIndustry.label}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </div>
              <div className="flex flex-col justify-between rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                <div>
                 
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Use case</p>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                    {selectedIndustry.label}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-8 text-slate-700">{selectedIndustry.title}</p>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600">{selectedIndustry.useCase}</p>
                </div>
                <div className="mt-6">
                  <TextLink to="/industries">See all industry examples</TextLink>
                </div>
              </div>
            </MotionDiv>
          </AnimatePresence>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] py-16">
        <SectionHeading
          eyebrow="Trusted"
          title="Businesses Already Using Sova"
          description="Simple setup for sellers, retailers, and wholesalers who want cleaner WhatsApp sales."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          {trustedBusinesses.map((business) => (
            <div
              key={business}
              className="rounded-[24px] border border-slate-200 bg-white px-5 py-6 text-center text-sm font-semibold text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
            >
              {business}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] py-8">
        <SectionHeading
          eyebrow="Core Features"
          title="Simple tools that protect your time and grow your sales."
          description="Only the essentials, kept clear and easy for non-technical teams."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ccfbf1_0%,#e0e7ff_100%)] text-slate-900">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] py-16">
        <SectionHeading
          eyebrow="Pricing"
          title="Clear plans for every growth stage."
          description="Start free, prove the value, and upgrade when your message volume grows."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`rounded-[32px] border p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] ${
                index === 0
                  ? 'border-teal-300 bg-[linear-gradient(180deg,#ecfeff_0%,#ffffff_60%)]'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{plan.blurb}</p>
                </div>
                {plan.badge ? (
                  <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <div className="mt-8 flex items-end gap-2">
                <span className="font-display text-5xl font-semibold tracking-[-0.05em] text-slate-950">{plan.price}</span>
                <span className="pb-2 text-sm text-slate-500">/ month</span>
              </div>
              <div className="mt-8 space-y-4">
                {plan.points.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="h-4 w-4" />
                    </span>
                    {point}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton to="/auth" label="Start Free Trial" subtext="No card required" full />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] py-16">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real businesses, real WhatsApp results."
          description="A quick look at how sellers are saving time and improving lead quality with Sova."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <div
              key={study.slug}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{study.businessType}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                {study.company}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-900">Problem:</span> {study.problem}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-900">Result:</span> {study.result}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <TextLink to="/case-studies">See all case studies</TextLink>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] py-16">
        <SectionHeading
          eyebrow="Reviews"
          title="What businesses say after switching to Sova."
          description="Short feedback from teams using Sova to manage heavy WhatsApp demand."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">“{review.feedback}”</p>
              <p className="mt-5 font-semibold text-slate-900">{review.name}</p>
              <p className="text-sm text-slate-500">{review.businessType}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] gap-8 py-16 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="How It Works"
            title="Three steps between a busy inbox and better sales."
            description="Setup stays simple, even for mobile-first businesses."
          />
        </div>
        <div className="space-y-5">
          {[
            ['Connect WhatsApp', 'Link your Meta account and choose the business number you want Sova to manage.'],
            ['AI reads messages', 'Sova understands the question, detects buying intent, and responds instantly.'],
            ['You get serious buyers', 'Your team steps in when a chat is ready for closing or deeper support.'],
          ].map(([title, description], index) => (
            <div key={title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCta />
      <AnimatePresence>{showDemo ? <DemoModal onClose={() => setShowDemo(false)} /> : null}</AnimatePresence>
    </>
  )
}
