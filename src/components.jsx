import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Check, ChevronRight, MessageCircleMore, Play, Sparkles, X } from 'lucide-react'
import { heroVideoUrl } from './content'

export function SiteHeader() {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Industries', to: '/industries' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Terms', to: '/terms' },
    { label: 'Privacy', to: '/privacy_policy' },
    { label: 'About', to: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 -mx-4 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl sm:-mx-6 lg:-mx-8">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3 text-slate-900">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#10b981_0%,#06b6d4_48%,#a78bfa_100%)] text-sm font-semibold text-white shadow-[0_10px_24px_rgba(16,185,129,0.22)]">
            S
          </div>
          <div>
            <p className="font-display text-lg font-semibold tracking-[-0.03em]">Sova</p>
            <p className="text-[11px] text-slate-500">Virtual sales assistant</p>
          </div>
        </Link>

        <nav className="hidden items-center md:flex">
          {navItems.map((item, index) => (
            <div key={item.to} className="flex items-center">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-1 text-sm font-medium transition ${
                    isActive ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
              {index < navItems.length - 1 ? (
                <span className="px-1 text-sm text-slate-300">|</span>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/auth"
            className="hidden rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 sm:inline-flex"
          >
            Login
          </Link>
          <CTAButton to="/auth" label="Start Free Trial" subtext="No card required" />
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  const footerLinks = [
    { label: 'Industries', to: '/industries' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'About', to: '/about' },
    { label: 'Terms', to: '/terms' },
    { label: 'Privacy Policy', to: '/privacy_policy' },
  ]

  return (
    <footer className="mt-20 -mx-4 rounded-t-[40px] bg-[linear-gradient(135deg,#0f172a_0%,#134e4a_55%,#0f766e_100%)] pb-10 pt-12 text-white sm:-mx-6 lg:-mx-8">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#06b6d4_0%,#10b981_100%)] text-lg font-semibold text-white">
              S
            </div>
            <div>
              <p className="font-display text-xl font-semibold tracking-[-0.03em]">Sova</p>
              <p className="text-sm text-slate-200/80">Your smooth, omnipresent virtual sales assistant</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-200/85">
            Turn high WhatsApp message volume into real business opportunities with cleaner replies,
            smarter follow-ups, and better sales focus.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Pages</p>
          <div className="space-y-3">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="block text-slate-200/85 transition hover:text-amber-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Contact</p>
          <div className="space-y-3 text-slate-200/85">
            <p>WhatsApp: +971 50 123 4567</p>
            <p>Email: hello@sovaassist.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971501234567"
      className="fixed bottom-5 right-5 z-50 inline-flex h-15 items-center gap-3 rounded-full bg-[linear-gradient(135deg,#10b981,#06b6d4)] px-5 text-sm font-semibold text-white shadow-[0_22px_45px_rgba(16,185,129,0.35)] transition hover:translate-y-[-2px]"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Sova on WhatsApp"
    >
      <MessageCircleMore className="h-5 w-5" />
      Chat on WhatsApp
    </a>
  )
}

export function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">{eyebrow}</p>
      <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-slate-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{description}</p>
    </div>
  )
}

export function CTAButton({ to, label, subtext, full = false, dark = false }) {
  return (
    <div className={full ? 'w-full sm:w-auto' : 'hidden sm:block'}>
      <Link
        to={to}
        className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition ${
          dark
            ? 'bg-white text-slate-950 hover:bg-slate-100'
            : 'bg-[linear-gradient(135deg,#10b981_0%,#06b6d4_100%)] text-white shadow-[0_14px_32px_rgba(16,185,129,0.22)] hover:translate-y-[-1px]'
        }`}
      >
        {label}
      </Link>
      <p className={`mt-1 text-center text-[11px] ${dark ? 'text-white/70' : 'text-slate-500'}`}>{subtext}</p>
    </div>
  )
}

export function ChatBubble({ align, sender, children, tone }) {
  const bubbleClass =
    tone === 'teal'
      ? 'ml-auto bg-[linear-gradient(135deg,#10b981,#06b6d4)] text-white'
      : 'bg-white/8 text-slate-100'

  return (
    <div className={`max-w-[85%] ${align === 'right' ? 'ml-auto' : ''}`}>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{sender}</p>
      <div className={`rounded-[22px] px-4 py-3 leading-7 ${bubbleClass}`}>{children}</div>
    </div>
  )
}

export function DemoModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-[36px] border border-white/10 bg-slate-950 p-5 text-white shadow-[0_32px_80px_rgba(15,23,42,0.45)] sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">2-minute demo</p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em]">See Sova in action</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5"
            aria-label="Close demo modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 rounded-[28px] bg-[linear-gradient(135deg,#111827_0%,#0f766e_100%)] p-4">
          <div className="aspect-video overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/30">
            <iframe
              className="h-full w-full"
              src={heroVideoUrl}
              title="Sova product demo"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function FinalCta() {
  return (
    <section className="mx-auto max-w-[1280px] pb-8">
      <div className="rounded-[40px] bg-[linear-gradient(135deg,#0f172a_0%,#1d4ed8_55%,#10b981_120%)] px-6 py-10 text-white shadow-[0_32px_80px_rgba(15,23,42,0.22)] sm:px-10 sm:py-14">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">Final CTA</p>
        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              Stop losing customers on WhatsApp
            </h2>
            <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">
              Give every buyer a fast reply, keep your team focused, and turn more conversations into orders.
            </p>
          </div>
          <div className="min-w-[240px]">
            <CTAButton to="/auth" label="Start Free Trial" subtext="No card required" full dark />
          </div>
        </div>
      </div>
    </section>
  )
}

export function FeatureBadge({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm">
      {children}
    </span>
  )
}

export function HeroEyebrow() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700">
      <Sparkles className="h-4 w-4" />
      Sales + omni-channel + virtual assistant
    </div>
  )
}

export function TextLink({ to, children }) {
  return (
    <Link to={to} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
      {children}
      <ChevronRight className="h-4 w-4" />
    </Link>
  )
}

export function ListItem({ children }) {
  return (
    <div className="flex items-start gap-3 rounded-[24px] bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-600">
      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-slate-900">
        <Check className="h-4 w-4" />
      </span>
      <span>{children}</span>
    </div>
  )
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971501234567"
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-slate-900 px-6 text-base font-semibold text-white transition hover:bg-slate-800"
    >
      Chat on WhatsApp
      <ArrowRight className="h-5 w-5" />
    </a>
  )
}
