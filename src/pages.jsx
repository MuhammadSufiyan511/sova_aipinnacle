import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BadgeCheck,
  Check,
  CircleHelp,
  Globe,
  MessagesSquare,
  PhoneCall,
  Play,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { faqs, features, industries, pricingPlans, privacySections, termsSections } from './content'
import {
  CTAButton,
  ChatBubble,
  DemoModal,
  FeatureBadge,
  FinalCta,
  HeroEyebrow,
  ListItem,
  SectionHeading,
  TextLink,
  WhatsAppButton,
} from './components'

const MotionDiv = motion.div
const MotionArticle = motion.article

export function HomePage() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id)
  const [showDemo, setShowDemo] = useState(false)

  const selectedIndustry = useMemo(
    () => industries.find((industry) => industry.id === activeIndustry) ?? industries[0],
    [activeIndustry],
  )

  return (
    <>
      <section className="relative mx-auto grid min-h-[52vh] max-w-[1280px] items-center gap-6 overflow-hidden py-4 lg:min-h-[54vh] lg:grid-cols-[1.02fr_0.98fr] lg:py-6">
        <div className="space-y-4">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="space-y-3"
          >
            <HeroEyebrow />
            <div className="space-y-3">
              <h1 className="max-w-xl font-display text-[2.15rem] font-semibold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-[2.6rem] lg:text-[3.1rem]">
                Turn Every <span className="bg-[linear-gradient(135deg,#06b6d4,#10b981)] bg-clip-text text-transparent">WhatsApp Chat</span> Into a{' '}
                <span className="bg-[linear-gradient(135deg,#a78bfa,#06b6d4)] bg-clip-text text-transparent">Sale</span>.
              </h1>
              <p className="max-w-lg text-sm leading-6 text-slate-600 sm:text-[15px]">
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
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="relative max-w-[520px] justify-self-end"
        >
          <div className="absolute -left-8 top-8 hidden h-32 w-32 rounded-full bg-purple-200/40 blur-3xl sm:block" />
          <div className="absolute -right-6 bottom-10 hidden h-36 w-36 rounded-full bg-teal-200/50 blur-3xl sm:block" />
          <div className="relative rounded-[30px] border border-white/80 bg-white/90 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur">
            <div className="rounded-[22px] bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] p-3">
              <div className="space-y-3 rounded-[22px] bg-slate-950 px-4 py-4 text-sm text-white">
                <div className="flex justify-end">
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <BadgeCheck className="h-4 w-4" />
                    Hot Lead
                  </div>
                </div>
                <ChatBubble align="left" sender="Customer" tone="slate">
                  Hi, do you have 20 black abayas in medium and large?
                </ChatBubble>
                <ChatBubble align="right" sender="Sova AI" tone="teal">
                  Yes, both sizes are available. I can share price and delivery now.
                </ChatBubble>
                <ChatBubble align="left" sender="Customer" tone="slate">
                  Send wholesale rate. Need delivery in Dubai tomorrow.
                </ChatBubble>
                <MotionDiv
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="grid gap-2 pt-1 sm:grid-cols-2"
                >
                  <CTAButton to="/auth" label="Connect WhatsApp Free" subtext="No card required" full />
                  <button
                    type="button"
                    onClick={() => setShowDemo(true)}
                    className="inline-flex h-11 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/8 px-5 text-sm font-semibold text-white transition hover:bg-white/12"
                  >
                    <Play className="h-4 w-4" />
                    Watch 2-min Demo
                  </button>
                </MotionDiv>
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>

      <section className="mx-auto max-w-[1280px] py-2">
        <SectionHeading
          eyebrow="Industries"
          title="Built for busy businesses that sell on WhatsApp."
          description="Start with the flows that match your daily customer questions."
        />
        <div className="mt-8 rounded-[32px] border border-slate-200/80 bg-white/80 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-6">
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
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[28px] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_70%,#0f766e_100%)] p-6 text-white">
              <selectedIndustry.icon className="h-10 w-10 text-teal-300" />
              <h3 className="mt-8 font-display text-3xl font-semibold tracking-[-0.04em]">
                {selectedIndustry.label}
              </h3>
              <p className="mt-4 max-w-md text-base leading-8 text-slate-200">{selectedIndustry.title}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {selectedIndustry.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white/90"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">Use case</p>
                <p className="mt-4 max-w-lg text-lg leading-8 text-slate-700">{selectedIndustry.description}</p>
              </div>
              <div className="mt-6">
                <TextLink to="/industries">See all industry examples</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] py-20">
        <SectionHeading
          eyebrow="Core Features"
          title="Simple tools that protect your time and grow your sales."
          description="Only the essentials, kept clean and easy to understand."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
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

      <section className="mx-auto max-w-[1280px] py-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Start simple. Upgrade when your chat volume grows."
          description="Clear plans for businesses of every stage."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[32px] border p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] ${
                plan.highlight
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
                {plan.highlight ? (
                  <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">Popular</span>
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

      <section className="mx-auto grid max-w-[1280px] gap-8 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="How It Works"
            title="Three steps between a busy inbox and better sales."
            description="Keep the setup clear and fast for teams that just want results."
          />
        </div>
        <div className="space-y-5">
          {[
            ['Connect WhatsApp', 'Link your Meta account and choose the business number you want Sova to manage.'],
            ['AI reads messages', 'Sova understands the question, detects buying intent, and responds instantly.'],
            ['You get serious buyers', 'Your team only steps in when a chat is ready for closing or deeper support.'],
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

export function IndustriesPage() {
  return (
    <section className="mx-auto max-w-[1280px] py-14">
      <SectionHeading
        eyebrow="Industries"
        title="Use cases for sellers who live inside WhatsApp."
        description="Each flow is designed to sound simple, feel trustworthy, and move buyers closer to checkout."
      />
      <div className="mt-10 grid gap-6">
        {industries.map((industry, index) => (
          <MotionArticle
            key={industry.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="grid gap-6 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="rounded-[28px] bg-[linear-gradient(135deg,#0f172a_0%,#0f766e_100%)] p-6 text-white">
              <industry.icon className="h-10 w-10 text-teal-300" />
              <h2 className="mt-8 font-display text-4xl font-semibold tracking-[-0.05em]">{industry.label}</h2>
              <p className="mt-4 text-base leading-8 text-slate-200">{industry.title}</p>
            </div>
            <div className="flex flex-col justify-between rounded-[28px] bg-slate-50 p-6">
              <div>
                <p className="text-base leading-8 text-slate-700">{industry.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {industry.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Example</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {industry.id === 'clothing' &&
                    'Auto replies for sizes and colors, delivery updates, and payment questions.'}
                  {industry.id === 'toys' &&
                    'Detect bulk buyers early and move resellers to a faster wholesale sales path.'}
                  {industry.id === 'dry-fruits' &&
                    'Handle weight, pricing, and packaging questions without manual back-and-forth.'}
                  {industry.id === 'electronics' &&
                    'Manage product inquiries, availability, and urgent buyers asking for quick confirmation.'}
                </p>
              </div>
            </div>
          </MotionArticle>
        ))}
      </div>
    </section>
  )
}

export function PricingPage() {
  return (
    <section className="mx-auto max-w-[1280px] py-14">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple pricing for growing WhatsApp sales teams."
        description="Choose the plan that matches your message volume today and upgrade when your business grows."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-[32px] border p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)] ${
              plan.highlight
                ? 'border-teal-300 bg-[linear-gradient(180deg,#ecfeff_0%,#ffffff_60%)]'
                : 'border-slate-200 bg-white'
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                  {plan.name}
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{plan.blurb}</p>
              </div>
              {plan.highlight ? (
                <span className="rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">Popular</span>
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

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Included in every plan</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              'WhatsApp automation',
              'Buyer intent filtering',
              'Auto replies',
              'Follow-up reminders',
              'Spam control',
              'Mobile-friendly setup',
            ].map((item) => (
              <div key={item} className="rounded-[24px] bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_60%,#10b981_120%)] p-7 text-white shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
            <Sparkles className="h-4 w-4" />
            Need help choosing?
          </div>
          <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em]">
            Start with Pro if you get daily buyer messages.
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/80">
            It gives you the best balance of automation, lead filtering, and follow-up support for growing businesses.
          </p>
          <div className="mt-8">
            <CTAButton to="/auth" label="Start Free Trial" subtext="No card required" full dark />
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ['No card required', 'Start free without adding payment details first.'],
            ['Meta-only login', 'Simple access flow for mobile-first business owners.'],
            ['Upgrade anytime', 'Move to a bigger plan as your chat volume grows.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-[24px] bg-slate-50 p-5">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/terms" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">
          View terms and conditions
        </Link>
      </div>

      <FinalCta />
    </section>
  )
}

export function AboutContactPage() {
  return (
    <section className="mx-auto max-w-[1280px] py-14">
      <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="About Sova"
            title="Helping businesses automate WhatsApp communication."
            description="Sova was created for businesses that get plenty of messages but still miss good sales because every chat looks the same."
          />
          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Our mission</p>
            <p className="mt-4 text-base leading-8 text-slate-700">
              We help teams reply faster, find serious buyers sooner, and keep sales conversations moving without
              adding more manual work.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Many growing businesses lose time to repeated questions, spam, and slow follow-ups. Sova keeps things
              calm, simple, and effective so every message has a better chance to become revenue.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[32px] border border-slate-200 bg-[linear-gradient(135deg,#ecfeff_0%,#eef2ff_100%)] p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Contact</p>
            <div className="mt-6 space-y-4 text-slate-700">
              <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4">
                <PhoneCall className="h-5 w-5 text-teal-600" />
                +971 50 123 4567
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4">
                <MessagesSquare className="h-5 w-5 text-purple-500" />
                hello@sovaassist.com
              </div>
            </div>
            <WhatsAppButton />
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">FAQ</p>
            <div className="mt-6 space-y-4">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-start gap-3">
                    <CircleHelp className="mt-1 h-5 w-5 shrink-0 text-slate-500" />
                    <div>
                      <h3 className="font-semibold text-slate-900">{item.question}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AuthPage() {
  return (
    <section className="mx-auto flex max-w-[1280px] items-center justify-center py-16">
      <div className="grid w-full max-w-5xl gap-6 rounded-[40px] border border-slate-200 bg-white p-6 shadow-[0_32px_80px_rgba(15,23,42,0.1)] lg:grid-cols-[0.92fr_1.08fr] lg:p-8">
        <div className="rounded-[32px] bg-[linear-gradient(160deg,#0f172a_0%,#1d4ed8_55%,#10b981_130%)] p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Meta only access</p>
          <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
            Login and signup made simple.
          </h1>
          <p className="mt-5 max-w-md text-base leading-8 text-white/80">
            Connect through Meta, keep setup clean, and start managing your WhatsApp conversations faster.
          </p>
          <div className="mt-8 space-y-4">
            {['Safe Meta connection', 'No email or password needed', 'Start free with no card required'].map(
              (point) => (
                <div key={point} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                    <Check className="h-4 w-4" />
                  </span>
                  {point}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full rounded-[32px] bg-slate-50 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Account access</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">Continue with Meta</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Use your Meta-connected business identity to continue. This page combines login and signup in one smooth flow.
            </p>
            <button
              type="button"
              className="mt-8 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#10b981_0%,#06b6d4_100%)] px-6 text-base font-semibold text-white shadow-[0_22px_45px_rgba(16,185,129,0.28)] transition hover:translate-y-[-1px]"
            >
              <Globe className="h-5 w-5" />
              Continue with Meta
            </button>
            <p className="mt-3 text-center text-sm text-slate-500">No card required</p>
            <button type="button" className="mt-6 text-sm font-semibold text-slate-600 transition hover:text-slate-900">
              Forgot Password
            </button>
            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-900">
                <ShieldCheck className="h-5 w-5 text-teal-600" />
                Meta-first login only
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                We keep the access flow clear and low-friction for business owners who mainly work from mobile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms and Conditions"
      title="Clear rules for using Sova responsibly."
      description="A simple overview of platform usage, privacy expectations, and service limitations."
      sections={termsSections}
    />
  )
}

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Your data should be handled with care and clarity."
      description="This page explains what we collect, how we use it, how we protect it, and what control users keep."
      sections={privacySections}
    />
  )
}

function LegalPage({ eyebrow, title, description, sections }) {
  return (
    <section className="mx-auto max-w-[1100px] py-14">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} centered />
      <div className="mt-10 grid gap-6">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ccfbf1_0%,#ede9fe_100%)] text-slate-900">
                <section.icon className="h-5 w-5" />
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-slate-950">{section.title}</h2>
            </div>
            <div className="mt-6 space-y-4">
              {section.items.map((item) => (
                <ListItem key={item}>{item}</ListItem>
              ))}
            </div>
          </article>
        ))}
      </div>
      <FinalCta />
    </section>
  )
}
