import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

const MotionDiv = motion.div

export function FinalCta() {
  const { t } = useTranslation()

  return (
    <section className="home-final-cta-section mx-auto max-w-[1160px] px-5 pb-20 pt-10">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[32px] border border-[#2A8479] bg-[#115A54] px-10 py-12 shadow-[0_24px_60px_rgba(17,90,84,0.28)]"
      >
        <div className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-[#34D399]/14 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-[#0B3F3A]/40 blur-3xl" />

        {/* Subtle background pattern/lines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.14]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 L100,0 M-20,100 L80,0 M20,100 L120,0" stroke="#EAFBF7" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row md:text-left">
          <div className="max-w-[620px] text-center md:text-left">
            <h2 className="font-display text-[2.4rem] font-extrabold tracking-[-0.04em] text-white sm:text-[3rem] lg:text-[3.4rem]">
              {t('sections.finalTitle')}
            </h2>
            <p className="mt-3 text-[0.98rem] leading-[1.75] text-white/84">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Link
              to={ROUTES.auth}
              className="inline-flex h-[64px] items-center justify-center gap-2 rounded-[20px] bg-[#10B981] px-9 text-[1rem] font-bold text-white shadow-[0_18px_38px_rgba(16,185,129,0.28)] transition hover:scale-[1.04]"
            >
              {t('common.startFreeTrial')} <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 text-[0.72rem] font-medium text-[#FCD34D]">{t('common.noCardRequired')}</p>
          </div>
        </div>
      </MotionDiv>
    </section>
  )
}
