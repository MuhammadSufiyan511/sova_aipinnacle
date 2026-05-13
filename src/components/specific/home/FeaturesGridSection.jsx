import { useState, useEffect, useRef, memo, lazy, Suspense, cloneElement } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { features } from '../../../data'
import { FeatureGridSkeleton } from './features-grid/FeatureGridSkeleton'

// Lazy load feature cards to optimize initial bundle size and page load speed
const CardOne = lazy(() => import('./features-grid/FeatureGridCards').then(m => ({ default: m.CardOne })))
const CardTwo = lazy(() => import('./features-grid/FeatureGridCards').then(m => ({ default: m.CardTwo })))
const CardThree = lazy(() => import('./features-grid/FeatureGridCards').then(m => ({ default: m.CardThree })))
const CardFour = lazy(() => import('./features-grid/FeatureGridCards').then(m => ({ default: m.CardFour })))
const CardFive = lazy(() => import('./features-grid/FeatureGridCards').then(m => ({ default: m.CardFive })))
const CardSix = lazy(() => import('./features-grid/FeatureGridCards').then(m => ({ default: m.CardSix })))

import seriousBuyerDetectionImage from '../../../assets/home/serious buyer detection.png'
import autoRepliesImage from '../../../assets/home/auto replies.png'
import builtInIntegrationsImage from '../../../assets/home/Built-in Integrations.png'
import spamDetectionImage from '../../../assets/home/spam detection.png'
import broadcastImage from '../../../assets/home/Broadcast.png'
import smartFollowUpsImage from '../../../assets/home/Smart Follow-ups.png'

const MotionDiv = motion.div

export const FeaturesGridSection = memo(function FeaturesGridSection() {
  const { t } = useTranslation()
  const gridFeatures = t('content.featuresGrid.items', { returnObjects: true }) || features.slice(0, 6)
  const micro = t('content.featuresGrid.micro', { returnObjects: true })

  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)
  const stripRef = useRef(null)
  const progressRef = useRef(null)
  const counterRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Sticky Horizontal Scroll Engine
  useEffect(() => {
    if (isMobile) return

    const section = sectionRef.current
    const strip = stripRef.current
    const progress = progressRef.current
    const counter = counterRef.current
    if (!section || !strip) return

    const NUM_CARDS = 6
    const CARD_SIZES = [
      { w: 680, h: 280 }, // 1
      { w: 340, h: 280 }, // 2
      { w: 340, h: 280 }, // 3
      { w: 680, h: 280 }, // 4
      { w: 340, h: 280 }, // 5
      { w: 340, h: 280 }, // 6
    ]

    // Cached geometry — updated once on load and on resize
    let sectionH = 0
    let maxTx = 0
    let rafId = null

    const cacheGeometry = () => {
      maxTx = Math.max(0, strip.scrollWidth - window.innerWidth)
      // Trim section height: multiply maxTx by 0.5 to make scrolling twice as fast horizontally
      const scrollDist = maxTx * 0.5
      section.style.height = `calc(100vh + ${scrollDist + 80}px)`
      sectionH = section.offsetHeight
    }

    // rAF callback: dynamically check viewport top (safe from layout thrashing because we only write transforms)
    const update = () => {
      rafId = null
      const rectTop = section.getBoundingClientRect().top
      const scrollable = Math.max(sectionH - window.innerHeight, 1)
      const prog = Math.max(0, Math.min(1, -rectTop / scrollable))

      const isRtl = document.documentElement.dir === 'rtl'
      const direction = isRtl ? 1 : -1
      strip.style.transform = `translateX(${Math.round(direction * maxTx * prog)}px)`

      if (progress) {
        progress.style.transformOrigin = isRtl ? 'right center' : 'left center'
        progress.style.transform = `scaleX(${prog})`
      }

      if (counter) {
        const currentCard = Math.min(Math.floor(prog * NUM_CARDS), NUM_CARDS - 1) + 1
        counter.textContent = `${String(currentCard).padStart(2, '0')} / ${String(NUM_CARDS).padStart(2, '0')}`
      }
    }

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    cacheGeometry()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', cacheGeometry)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', cacheGeometry)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isMobile])

  const featureImages = [
    seriousBuyerDetectionImage,
    autoRepliesImage,
    smartFollowUpsImage,
    spamDetectionImage,
    broadcastImage,
    builtInIntegrationsImage,
  ]

  const cardProps = [
    { component: CardOne, props: { feature: gridFeatures[0], image: featureImages[0], micro }, skeleton: <FeatureGridSkeleton colSpan2 /> },
    { component: CardTwo, props: { feature: gridFeatures[1], image: featureImages[1] }, skeleton: <FeatureGridSkeleton variant="purple" /> },
    { component: CardThree, props: { feature: gridFeatures[2], image: featureImages[2] }, skeleton: <FeatureGridSkeleton rowSpan2 /> },
    { component: CardFour, props: { feature: gridFeatures[3], image: featureImages[3] }, skeleton: <FeatureGridSkeleton colSpan2 /> },
    { component: CardFive, props: { feature: gridFeatures[4], image: featureImages[4] }, skeleton: <FeatureGridSkeleton variant="dark" /> },
    { component: CardSix, props: { feature: gridFeatures[5], image: featureImages[5] }, skeleton: <FeatureGridSkeleton /> },
  ]

  // Animation variants for mobile grid
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  }

  const STRIP_GAP = 20
  const STRIP_PAD = 80
  const CARD_SIZES = [
    { w: 680, h: 280 }, // 1
    { w: 340, h: 280 }, // 2
    { w: 340, h: 280 }, // 3
    { w: 680, h: 280 }, // 4
    { w: 340, h: 280 }, // 5
    { w: 340, h: 280 }, // 6
  ]

  return (
    <section className="home-features-grid-section w-full bg-[#F4F8FF]">

      {/* ════════════════════════════════════════════════════════════════════
          DESKTOP — Sticky Horizontal Scroll  (lg+)
          ════════════════════════════════════════════════════════════════════ */}
      <div
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{ height: '200vh' }}
      >
        {/* Sticky viewport — overflow-x:hidden hides off-screen cards only */}
        <div
          className="sticky top-0 h-screen flex flex-col bg-[#F4F8FF]"
          style={{ overflowX: 'hidden' }}
        >
          {/* Header Bar */}
          <div className="mx-auto flex w-full max-w-[1160px] flex-col px-5 pt-12 2xl:max-w-[1440px] 2xl:pt-16 3xl:max-w-[1600px] 3xl:pt-20">


            <h2 className="mt-16 font-display text-[2rem] font-extrabold tracking-[-0.04em] text-[#1E293B] 2xl:text-[2.7rem]">
              {t('sections.featuresTitleA')}{' '}
              <span className="bg-gradient-to-r from-[#10B981] to-[#A78BFA] bg-clip-text text-transparent">
                {t('sections.featuresTitleB')}
              </span>
            </h2>

            {/* Progress track */}
            <div className="features-progress-bg mt-5 h-[3px] w-full overflow-hidden rounded-full bg-[#E2EFE9] transition-colors duration-300">
              <div
                ref={progressRef}
                className="features-progress-bar h-full w-full rounded-full bg-gradient-to-r from-[#10B981] to-[#A78BFA]"
                style={{ transformOrigin: 'left center', transform: 'scaleX(0)', willChange: 'transform' }}
              />
            </div>
          </div>

          {/* Cards strip area */}
          <div className="relative flex flex-1 items-center min-w-0">
            {/* Translating strip */}
            <div
              ref={stripRef}
              className="flex items-center shrink-0"
              style={{
                gap: STRIP_GAP,
                paddingLeft: STRIP_PAD,
                paddingRight: STRIP_PAD,
                willChange: 'transform',
              }}
            >
              {cardProps.map((item, index) => {
                const { w, h } = CARD_SIZES[index]
                const Component = item.component
                return (
                  <div key={index} style={{ width: w, minWidth: w, height: h, flexShrink: 0 }}>
                    <Suspense fallback={cloneElement(item.skeleton, { className: '!min-h-0 !h-full overflow-hidden' })}>
                      <Component {...item.props} extraClass="w-full h-full" />
                    </Suspense>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          MOBILE/TABLET — Standard Grid  (xs..md)
          ════════════════════════════════════════════════════════════════════ */}
      <div className="mx-auto block max-w-[1160px] px-5 py-12 lg:hidden 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >

          <h2 className="mt-1 font-display text-[2rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.6rem] md:text-[3.2rem]">
            {t('sections.featuresTitleA')}{' '}
            <span className="bg-gradient-to-r from-[#10B981] to-[#A78BFA] bg-clip-text text-transparent">
              {t('sections.featuresTitleB')}
            </span>
          </h2>
        </MotionDiv>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px 100px 0px" }}
          className="flex w-full flex-col gap-8 md:grid md:grid-cols-2 md:gap-5"
        >
          {cardProps.map((item, index) => {
            const Component = item.component
            return (
              <motion.div key={index} variants={itemVariants}>
                <Suspense fallback={item.skeleton}>
                  <Component {...item.props} />
                </Suspense>
              </motion.div>
            )
          })}
        </MotionDiv>
      </div>
    </section>
  )
})
