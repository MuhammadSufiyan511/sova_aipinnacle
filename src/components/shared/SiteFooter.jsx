import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, SiThreads } from './icons/BrandIcons'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import sovaLogo from '../../assets/logos/sova.webp'
import { useApp } from '../../context/AppProvider'
import { ROUTES } from '../../utils/routes'

const socialLinks = [
  { icon: FaYoutube, href: 'https://www.youtube.com/@SOVAMY', color: '#FF0000', bg: 'rgba(255,0,0,0.06)' },
  { icon: FaInstagram, href: 'https://www.instagram.com/socialsovamy/?hl=en', color: '#E4405F', bg: 'rgba(228,64,95,0.06)' },
  { icon: SiThreads, href: 'https://www.threads.com/@socialsovamy?hl=en', color: '#000000', bg: 'rgba(0,0,0,0.06)' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@sovamy2', color: '#000000', bg: 'rgba(0,0,0,0.06)' },
  { icon: FaFacebook, href: 'https://www.facebook.com/sova.my.social/', color: '#1877F2', bg: 'rgba(24,119,242,0.06)' },
]

export function SiteFooter() {
  const { t } = useTranslation()
  const { homeDarkMode } = useApp()

  return (
    <footer className="site-footer-shell w-full border-t border-[#E2E8F0] bg-white pt-8 pb-20 text-[#1E293B] md:pt-12 md:pb-12">
      <div className="mx-auto max-w-[1160px] px-5">
        <div className="flex flex-col items-center justify-between gap-5 pb-6 md:flex-row md:gap-8 md:pb-12">
          <div className="flex items-center gap-3">
            <Link to={ROUTES.home} className="flex shrink-0 items-center gap-2.5">
              <img src={sovaLogo} alt={`${t('common.brand')} logo`} width="56" height="32" loading="lazy" decoding="async" className="h-8 w-14 rounded-xl" />
              <span className="font-display text-2xl font-extrabold tracking-tight text-[#1E293B]">{t('common.brand')}</span>
            </Link>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${item.href.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}`}
                className={`social-icon-box inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E8F2EE] transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(30,41,59,0.08)] ${homeDarkMode ? 'icon-bg-force-light' : ''}`}
                style={{
                  color: item.color,
                  backgroundColor: homeDarkMode ? '' : item.bg
                }}
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#F1F5F9] pt-6 text-[0.875rem] font-medium text-[#5a9e88] md:flex-row md:gap-6 md:pt-8">
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
