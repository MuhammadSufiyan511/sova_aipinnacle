import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

const MotionDiv = motion.div

export function FinalCta() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-[1160px] px-5 pb-20 pt-10">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0061FF] via-[#3B82F6] to-[#60A5FA] px-10 py-16 shadow-[0_24px_60px_rgba(0,97,255,0.25)]"
      >
        {/* Subtle background pattern/lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 L100,0 M-20,100 L80,0 M20,100 L120,0" stroke="white" strokeWidth="0.5" fill="none" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row md:text-left">
          <h2 className="font-display text-[2.8rem] font-extrabold tracking-[-0.04em] text-white sm:text-[3.5rem] lg:text-[4rem]">
            {t('sections.finalTitle')}
          </h2>
          
          <Link
            to={ROUTES.auth}
            className="inline-flex h-[72px] items-center justify-center rounded-[20px] bg-white px-10 text-[1.1rem] font-bold text-[#1D1D1F] shadow-xl transition hover:scale-[1.05] active:scale-[0.96]"
          >
            {t('sections.finalButton')} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </MotionDiv>
    </section>
  )
}
