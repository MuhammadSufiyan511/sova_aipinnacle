import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import sovaLogo from '../../assets/logos/sova.png'

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
            <img src={sovaLogo} alt="Sova logo" className="h-12 w-12 rounded-2xl object-cover shadow-[0_14px_30px_rgba(6,182,212,0.18)]" />
            <div>
              <p className="font-display text-xl font-semibold tracking-[-0.03em]">Sova</p>
              <p className="text-sm text-[#dff2ef]/80">Your smooth, omnipresent virtual sales assistant</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#e8f6f3]/85">
            Turn high WhatsApp message volume into real business opportunities with cleaner replies, smarter follow-ups, and better sales focus.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Pages</p>
          <div className="space-y-3">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="block text-[#e8f6f3]/85 transition hover:text-amber-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Contact</p>
          <div className="space-y-3 text-[#e8f6f3]/85">
            <p>WhatsApp: +971 50 123 4567</p>
            <p>Email: hello@sovaassist.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
