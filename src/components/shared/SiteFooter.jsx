import { FaEnvelope, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import sovaLogo from '../../assets/logos/sova.png'
import { ROUTES } from '../../utils/routes'

const socialLinks = [
  { icon: FaYoutube, href: 'https://youtube.com', color: '#FF0000', bg: 'rgba(255,0,0,0.08)' },
  { icon: FaInstagram, href: 'https://instagram.com', color: '#E4405F', bg: 'rgba(228,64,95,0.08)' },
  { icon: FaLinkedin, href: 'https://linkedin.com', color: '#0A66C2', bg: 'rgba(10,102,194,0.08)' },
  { icon: FaEnvelope, href: 'mailto:hello@sova.ai', color: '#10B981', bg: 'rgba(16,185,129,0.08)' },
]

export function SiteFooter() {
  const { t } = useTranslation()

  return (
    <footer className="w-full bg-white border-t border-[#E2E8F0] pt-12 pb-12 text-[#1E293B]">
      <div className="mx-auto max-w-[1160px] px-5">
        <div className="flex flex-col items-center justify-between gap-8 pb-12 md:flex-row">
          <div className="flex items-center gap-3">
            <Link to={ROUTES.home} className="flex shrink-0 items-center gap-2.5">
              <img src={sovaLogo} alt={`${t('common.brand')} logo`} decoding="async" className="h-8 w-14 rounded-xl" />
              <span className="font-display text-2xl font-extrabold tracking-tight text-[#1E293B]">{t('common.brand')}</span>
            </Link>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${item.href.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E8F2EE] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(30,41,59,0.08)]"
                style={{ color: item.color, backgroundColor: item.bg }}
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-[#F1F5F9] pt-8 text-[0.875rem] font-medium text-[#5a9e88] md:flex-row">
          <p>© {new Date().getFullYear()} {t('common.brand')} {t('common.allRightsReserved')}</p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-semibold text-[#1E293B]">
            <Link to={ROUTES.privacyPolicy} className="transition hover:text-[#10B981]">
              {t('nav.privacy')}
            </Link>
            <Link to={ROUTES.terms} className="transition hover:text-[#10B981]">
              {t('common.termsAndPolicies')}
            </Link>
            <Link to={ROUTES.about} className="transition hover:text-[#10B981]">
              {t('common.support')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
