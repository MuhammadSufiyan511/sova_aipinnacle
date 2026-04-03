import { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { features } from '../../../data'
import { CardOne, CardTwo, CardThree, CardFour, CardFive, CardSix } from './features-grid/FeatureGridCards'

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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const featureImages = [
    seriousBuyerDetectionImage,
    autoRepliesImage,
    smartFollowUpsImage,
    spamDetectionImage,
    broadcastImage,
    builtInIntegrationsImage,
  ]

  const cardProps = [
    { component: CardOne, props: { feature: gridFeatures[0], image: featureImages[0], micro } },
    { component: CardTwo, props: { feature: gridFeatures[1], image: featureImages[1] } },
    { component: CardThree, props: { feature: gridFeatures[2], image: featureImages[2] } },
    { component: CardFour, props: { feature: gridFeatures[3], image: featureImages[3] } },
    { component: CardFive, props: { feature: gridFeatures[4], image: featureImages[4] } },
    { component: CardSix, props: { feature: gridFeatures[5], image: featureImages[5] } },
  ]

  return (
    <section className="home-features-grid-section w-full overflow-hidden bg-[#F4F8FF] pb-10 pt-8 sm:pb-16 sm:pt-12">
      <div className="mx-auto max-w-[1160px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-[1.9rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.6rem] md:text-[3.2rem]">
            {t('sections.featuresTitleA')}{' '}
            <span className="bg-gradient-to-r from-[#10B981] to-[#A78BFA] bg-clip-text text-transparent">
              {t('sections.featuresTitleB')}
            </span>
          </h2>
        </MotionDiv>

        <MotionDiv
          variants={isMobile ? containerVariants : {}}
          initial={isMobile ? "hidden" : undefined}
          whileInView={isMobile ? "visible" : undefined}
          viewport={isMobile ? { once: true } : undefined}
          className="flex w-full flex-col gap-8 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible lg:auto-rows-[258px] lg:grid-cols-3"
        >
          {cardProps.map((item, index) => {
            const Component = item.component
            return isMobile ? (
              <motion.div key={index} variants={itemVariants} transition={{ duration: 0.6 }}>
                <Component {...item.props} disableAnimation />
              </motion.div>
            ) : (
              <Component key={index} {...item.props} />
            )
          })}
        </MotionDiv>
      </div>
    </section>
  )
})
