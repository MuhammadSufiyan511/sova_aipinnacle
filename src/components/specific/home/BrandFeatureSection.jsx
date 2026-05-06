import { useRef, useState, useEffect, memo, lazy, Suspense } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FloatingIcons } from './brand-feature/FloatingIcons'


// Lazy load the heavy phone mockup for better initial page load and mobile performance
const MockupPhone = lazy(() => import('./brand-feature/MockupPhone').then(m => ({ default: m.MockupPhone })))
import { MockupPhoneSkeleton } from './brand-feature/MockupPhoneSkeleton'

import { ProductivityGraphCard } from './brand-feature/ProductivityGraphCard'
import { ActiveUsersCard } from './brand-feature/ActiveUsersCard'
import { TypingSimulationCard } from './brand-feature/TypingSimulationCard'
import { ChatSimulationCard } from './brand-feature/ChatSimulationCard'
import { BrandFeatureSwipeStack } from './brand-feature/BrandFeatureSwipeStack'

const MotionDiv = motion.div
const chatLoopDuration = 10

export const BrandFeatureSection = memo(function BrandFeatureSection() {
  const { t } = useTranslation()
  const copy = t('content.brandFeature', { returnObjects: true })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    restDelta: 0.001,
  })

  // ON MOBILE: Bypass spring smoothing to reduce physics calculation overhead
  const activeProgress = isMobile ? scrollYProgress : smoothProgress

  const mockupY = useTransform(activeProgress, [0, 0.15, 0.85, 1], [300, 0, 0, -300])
  const mockupOpacity = useTransform(activeProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  // ON MOBILE: Limit transforms to y/opacity only for smoother 60fps scrolling
  const mockupScale = useTransform(activeProgress, [0, 0.2, 0.5, 0.8, 1], isMobile ? [1, 1, 1, 1, 1] : [0.9, 1, 1.05, 1, 0.95])
  const mockupRotate = useTransform(activeProgress, [0, 0.5, 1], isMobile ? [0, 0, 0] : [5, 0, -5])
  const iconsY = useTransform(activeProgress, [0, 1], [100, -100])

  return (
    <section className="home-brand-feature-section relative w-full overflow-hidden">
      {/* Background - Hidden on mobile for performance */}
      <div className="brand-feature-bg absolute inset-0 hidden sm:block" />
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-emerald-400/20 to-purple-400/20 blur-[80px]"
          style={{ willChange: 'transform, opacity' }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: 2 }}
          className="absolute -right-32 top-40 h-[350px] w-[350px] rounded-full bg-gradient-to-l from-emerald-500/15 to-cyan-400/15 blur-[80px]"
          style={{ willChange: 'transform, opacity' }}
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-1/3 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-indigo-400/10 to-emerald-400/10 blur-[60px]"
          style={{ willChange: 'transform, opacity' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1160px] px-5 py-10 sm:py-16 2xl:max-w-[1440px] 3xl:max-w-[1600px] 2xl:py-24 3xl:py-32">
        <div className="text-center">
          {/* Heading */}
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 2xl:mb-20">
            <h2 className="font-display text-[2.8rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[3.5rem] 2xl:text-[4.5rem] 3xl:text-[5.2rem]">
              {copy.heading[0]}{' '}
              <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#A78BFA] bg-clip-text text-transparent">
                {copy.heading[1]}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[1.1rem] leading-[1.6] text-[#5a9e88] 2xl:mt-6 2xl:max-w-[800px] 2xl:text-[1.4rem] 3xl:text-[1.6rem]">
              {copy.subheading}
            </p>
          </MotionDiv>

          {/* Mockup area */}
          <div ref={containerRef} className="relative mt-14 flex justify-center">
            {/* Floating Icons with parallax */}
            <FloatingIcons iconsY={iconsY} />

            {/* ENHANCED PHONE MOCKUP WITH SUSPENSE */}
            <Suspense fallback={<MockupPhoneSkeleton isMobile={isMobile} />}>
              <MockupPhone
                mockupY={mockupY}
                mockupOpacity={mockupOpacity}
                mockupScale={mockupScale}
                mockupRotate={mockupRotate}
                copy={copy}
                chatLoopDuration={chatLoopDuration}
                isMobile={isMobile}
              />
            </Suspense>
          </div>
        </div>

        {/* Below fold — auto section */}
        <div className="relative z-10 -mt-[20%] will-change-transform rounded-3xl">
          {/* <div className="brand-feature-heading bg-white pb-10 pt-10 2xl:pb-20 2xl:pt-20 rounded-3xl">
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "150px" }} transition={{ duration: 0.6 }} className="text-center">
              <h2 className="font-display text-[2.6rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[3.2rem] 2xl:text-[4rem] 3xl:text-[4.6rem]">
                {copy.autoTitle[0]}{' '}
                <span className="bg-gradient-to-r from-[#10B981] to-[#A78BFA] bg-clip-text text-transparent">
                  {copy.autoTitle[1]}
                </span>{' '}
                {copy.autoTitle[2]}
              </h2>
            </MotionDiv>
          </div> */}

          <div className="rounded-2xl py-12 bg-white px-4 sm:px-8 sm:w-full">
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "150px" }} transition={{ duration: 0.6 }} className="text-center">
              <h2 className="font-display text-[2.6rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[3.2rem] 2xl:text-[4rem] 3xl:text-[4.6rem]">
                {copy.autoTitle[0]}{' '}
                <span className="bg-gradient-to-r from-[#10B981] to-[#A78BFA] bg-clip-text text-transparent">
                  {copy.autoTitle[1]}
                </span>{' '}
                {copy.autoTitle[2]}
              </h2>
            </MotionDiv>
            {/* MOBILE ONLY: 3D Swipe Stack */}
            <BrandFeatureSwipeStack cards={copy.cards} microCopy={copy.micro} t={t} />

            {/* TABLET / DESKTOP ONLY: Grid */}
            <div className="hidden mx-auto mt-4 max-w-[1000px] gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-2 2xl:max-w-[1240px] 2xl:gap-8 3xl:max-w-[1440px] 3xl:gap-12">
              <ProductivityGraphCard cardCopy={copy.cards[0]} />
              <ActiveUsersCard cardCopy={copy.cards[1]} microCopy={copy.micro} />
              <TypingSimulationCard cardCopy={copy.cards[2]} microCopy={copy.micro} />
              <ChatSimulationCard cardCopy={copy.cards[3]} microCopy={copy.micro} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
