import { FaEnvelope, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import sovaLogo from '../../assets/logos/sova.png'
import { ROUTES } from '../../utils/routes'

const socialLinks = [
  { icon: FaYoutube, href: 'https://youtube.com' },
  { icon: FaInstagram, href: 'https://instagram.com' },
  { icon: FaLinkedin, href: 'https://linkedin.com' },
  { icon: FaEnvelope, href: 'mailto:hello@sova.ai' },
]

export function SiteFooter() {
  const { t } = useTranslation()

  return (
    <footer className="w-full bg-white pb-12 pt-16 text-[#1D1D1F]">
      <div className="mx-auto max-w-[1160px] px-5">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-[#F0F0F0] pb-10 md:flex-row">
          <div className="flex items-center gap-2">
            <Link to={ROUTES.home} className="flex shrink-0 items-center gap-2.5">
              <img src={sovaLogo} alt={`${t('common.brand')} logo`} className="h-8 w-8 rounded-xl object-cover" />
            </Link>
            <span className="font-display text-2xl font-extrabold tracking-tight">{t('common.brand')}</span>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-[#0061FF] transition hover:opacity-70"
              >
                <item.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-10 text-[0.85rem] font-medium text-[#6E6E73] md:flex-row">
          <p>© 2025 {t('common.brand')}. All Rights Reserved.</p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            <Link to={ROUTES.privacyPolicy} className="transition hover:text-[#0061FF]">
              {t('nav.privacy')}
            </Link>
            <Link to={ROUTES.terms} className="transition hover:text-[#0061FF]">
              {t('common.termsAndPolicies')}
            </Link>
            <Link to={ROUTES.about} className="transition hover:text-[#0061FF]">
              {t('common.support')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
