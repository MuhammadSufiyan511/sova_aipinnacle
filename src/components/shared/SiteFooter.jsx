import { MapPinned } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import { contactPhone, mapEmbedUrl } from '../../data'
import sovaLogo from '../../assets/logos/sova.png'

const footerLinks = [
  { label: 'Industries', to: ROUTES.industries },
  { label: 'Pricing', to: ROUTES.pricing },
  { label: 'Case Studies', to: ROUTES.caseStudies },
  { label: 'About', to: ROUTES.about },
  { label: 'Terms and Policies', to: ROUTES.terms },
  { label: 'Privacy Policy', to: ROUTES.privacyPolicy },
]

const socialLinks = [
  { label: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
  { label: 'Facebook', icon: FaFacebookF, href: 'https://facebook.com' },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: 'https://linkedin.com' },
  { label: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/923440555915' },
]

export function SiteFooter() {
  return (
    <footer className="mt-20 -mx-4 rounded-t-[40px] bg-[linear-gradient(135deg,#0f172a_0%,#134e4a_55%,#0f766e_100%)] pb-10 pt-12 text-white sm:-mx-6 lg:-mx-8">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.75fr_1fr] lg:px-10">
        <div className="space-y-5">
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
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:border-amber-300 hover:text-amber-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
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
            <p>WhatsApp: {contactPhone}</p>
            <p>Email: hello@sovaassist.com</p>
          </div>
          <div className="mt-5 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2">
            <div className="mb-2 flex items-center gap-2 px-2 text-sm font-medium text-[#dff2ef]">
              <MapPinned className="h-4 w-4 text-amber-300" />
              Pakistan
            </div>
            <iframe
              title="Sova location map"
              src={mapEmbedUrl}
              className="h-44 w-full rounded-[18px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
