import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FloatingIcons } from './brand-feature/FloatingIcons'
import { MockupPhone } from './brand-feature/MockupPhone'
import { ProductivityGraphCard } from './brand-feature/ProductivityGraphCard'
import { ActiveUsersCard } from './brand-feature/ActiveUsersCard'
import { TypingSimulationCard } from './brand-feature/TypingSimulationCard'
import { ChatSimulationCard } from './brand-feature/ChatSimulationCard'

const MotionDiv = motion.div
const chatLoopDuration = 10

export function BrandFeatureSection() {
  const { t } = useTranslation()
  const copy = t('content.brandFeature', { returnObjects: true })

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

  const mockupY = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [300, 0, 0, -300])
  const mockupOpacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const mockupScale = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0.9, 1, 1.05, 1, 0.95])
  const mockupRotate = useTransform(smoothProgress, [0, 0.5, 1], [-2, 0, 2])
  const iconsY = useTransform(smoothProgress, [0, 1], [50, -50])

  return (
    <section className="home-brand-feature-section relative w-full overflow-hidden">
      {/* Background */}
      <div className="brand-feature-bg absolute inset-0" />
      <div className="absolute inset-0 overflow-hidden">
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

      <div className="relative z-10 mx-auto max-w-[1160px] px-5 py-16">
        <div className="text-center">
          {/* Heading */}
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-[2.8rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[3.5rem]">
              {copy.heading[0]}{' '}
              <span className="bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#A78BFA] bg-clip-text text-transparent">
                {copy.heading[1]}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[1.1rem] leading-[1.6] text-[#5a9e88]">
              {copy.subheading}
            </p>
          </MotionDiv>

          {/* Mockup area */}
          <div ref={containerRef} className="relative mt-14 flex justify-center">
            {/* Floating Icons with parallax */}
            <FloatingIcons iconsY={iconsY} />

            {/* ENHANCED PHONE MOCKUP */}
            <MockupPhone
              mockupY={mockupY}
              mockupOpacity={mockupOpacity}
              mockupScale={mockupScale}
              mockupRotate={mockupRotate}
              copy={copy}
              chatLoopDuration={chatLoopDuration}
            />
          </div>
        </div>

        {/* Below fold — auto section */}
        <div className="relative z-10 -mt-[20%]">
          <div className="bg-white pb-10 pt-10">
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
              <h2 className="font-display text-[2.6rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[3.2rem]">
                {copy.autoTitle[0]}{' '}
                <span className="bg-gradient-to-r from-[#10B981] to-[#A78BFA] bg-clip-text text-transparent">
                  {copy.autoTitle[1]}
                </span>{' '}
                {copy.autoTitle[2]}
              </h2>
            </MotionDiv>
          </div>

          <div className="-mt-8 rounded-2xl bg-white px-4 pb-10 sm:px-8">
            <div className="mx-auto mt-4 grid max-w-[1000px] gap-6 sm:grid-cols-2 lg:grid-cols-2">
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
}
