import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

const footerLinks = [
  { label: 'Industries', to: ROUTES.industries },
  { label: 'Pricing', to: ROUTES.pricing },
  { label: 'Case Studies', to: ROUTES.caseStudies },
  { label: 'About', to: ROUTES.about },
  { label: 'Terms', to: ROUTES.terms },
  { label: 'Privacy Policy', to: ROUTES.privacyPolicy },
]

export function SiteFooter() {
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
            Turn high WhatsApp message volume into real business opportunities with cleaner replies, smarter follow-ups, and better sales focus.
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
