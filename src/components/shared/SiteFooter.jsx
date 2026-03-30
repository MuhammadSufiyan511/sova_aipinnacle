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
    <footer className="w-full bg-white border-t border-[#E2E8F0] pt-12 pb-24 text-[#1E293B]">
      <div className="mx-auto max-w-[1160px] px-5">
        <div className="flex flex-col items-center justify-between gap-8 pb-12 md:flex-row">
          <div className="flex items-center gap-3">
            <Link to={ROUTES.home} className="flex shrink-0 items-center gap-2.5">
              <img src={sovaLogo} alt={`${t('common.brand')} logo`} className="h-9 w-9 rounded-xl object-cover shadow-sm" />
              <span className="font-display text-2xl font-extrabold tracking-tight text-[#1E293B]">{t('common.brand')}</span>
            </Link>
          </div>

          <div className="flex gap-5">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-[#64748B] transition hover:text-[#10B981]"
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-[#F1F5F9] pt-8 text-[0.875rem] font-medium text-[#475569] md:flex-row">
          <p>© {new Date().getFullYear()} {t('common.brand')} All Rights Reserved.</p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-semibold text-[#1E293B]">
            <Link to={ROUTES.privacyPolicy} className="transition hover:text-[#10B981]">
              {t('nav.privacy')}
            </Link>
            <Link to={ROUTES.terms} className="transition hover:text-[#10B981]">
              {t('common.termsAndPolicies')}
            </Link>
            <button type="button" className="transition hover:text-[#10B981]">
              Cookies Settings
            </button>
            <Link to={ROUTES.about} className="transition hover:text-[#10B981]">
              {t('common.support')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

