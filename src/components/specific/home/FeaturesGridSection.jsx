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

export function FeaturesGridSection() {
  const { t } = useTranslation()
  const gridFeatures = t('content.featuresGrid.items', { returnObjects: true }) || features.slice(0, 6)
  const micro = t('content.featuresGrid.micro', { returnObjects: true })
  
  const featureImages = [
    seriousBuyerDetectionImage,
    autoRepliesImage,
    smartFollowUpsImage,
    spamDetectionImage,
    broadcastImage,
    builtInIntegrationsImage,
  ]

  return (
    <section className="home-features-grid-section w-full overflow-hidden bg-[#F4F8FF] pb-16 pt-8">
      <div className="mx-auto max-w-[1160px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-[2.8rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[3.5rem]">
            {t('sections.featuresTitleA')}{' '}
            <span className="bg-gradient-to-r from-[#10B981] to-[#A78BFA] bg-clip-text text-transparent">
              {t('sections.featuresTitleB')}
            </span>
          </h2>
        </MotionDiv>

        <div className="grid auto-rows-[258px] grid-cols-1 gap-5 md:grid-cols-3">
          <CardOne feature={gridFeatures[0]} image={featureImages[0]} micro={micro} />
          <CardTwo feature={gridFeatures[1]} image={featureImages[1]} />
          <CardThree feature={gridFeatures[2]} image={featureImages[2]} />
          <CardFour feature={gridFeatures[3]} image={featureImages[3]} />
          <CardFive feature={gridFeatures[4]} image={featureImages[4]} />
          <CardSix feature={gridFeatures[5]} image={featureImages[5]} />
        </div>
      </div>
    </section>
  )
}
