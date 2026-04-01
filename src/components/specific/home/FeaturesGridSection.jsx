import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { features } from '../../../data'
import seriousBuyerDetectionImage from '../../../assets/home/serious buyer detection.png'
import autoRepliesImage from '../../../assets/home/auto replies.png'
import builtInIntegrationsImage from '../../../assets/home/Built-in Integrations.png'
import spamDetectionImage from '../../../assets/home/spam detection.png'
import broadcastImage from '../../../assets/home/Broadcast.png'
import smartFollowUpsImage from '../../../assets/home/Smart Follow-ups.png'

const MotionDiv = motion.div
const featureImageAnimations = [
  { y: [0, -8, 0], rotate: [0, -1.2, 0], scale: [1, 1.02, 1] },
  { y: [0, -10, 0], rotate: [0, 1.6, 0], scale: [1, 1.03, 1] },
  { y: [0, -9, 0], rotate: [0, -1, 0], scale: [1, 1.015, 1] },
  { y: [0, -7, 0], rotate: [0, 1.2, 0], scale: [1, 1.02, 1] },
  { y: [0, -8, 0], rotate: [0, -1.5, 0], scale: [1, 1.025, 1] },
  { y: [0, -9, 0], rotate: [0, 1.4, 0], scale: [1, 1.025, 1] },
]

const featureImageTransition = (duration, delay = 0) => ({
  duration,
  delay,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
})

export function FeaturesGridSection() {
  const { t } = useTranslation()
  const gridFeatures = t('content.featuresGrid.items', { returnObjects: true }) || features.slice(0, 6)
  const micro = t('content.featuresGrid.micro', { returnObjects: true })
  const featureImages = [
    seriousBuyerDetectionImage,
    autoRepliesImage,
    builtInIntegrationsImage,
    spamDetectionImage,
    broadcastImage,
    smartFollowUpsImage,
  ]

  return (
    <section className="w-full overflow-hidden bg-[#F4F8FF] pb-16 pt-8">
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
          <MotionDiv whileHover={{ y: -5 }} className="md:col-span-2 flex flex-col justify-between rounded-[32px] border border-[#E2EFEA] bg-white p-7 shadow-[0_12px_44px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_20px_60px_rgba(16,185,129,0.1)]">
            <div>
              <h3 className="font-display text-[1.42rem] font-bold text-[#10B981]">{gridFeatures[0]?.title}</h3>
              <p className="mt-2 max-w-[320px] text-[0.94rem] text-[#1E293B]">{gridFeatures[0]?.description}</p>
            </div>
            <div className="mt-3 flex items-end justify-between gap-4">
              <motion.div
                animate={featureImageAnimations[0]}
                transition={featureImageTransition(4.8)}
                whileHover={{ scale: 1.04, y: -6 }}
                className="relative w-full max-w-[220px]"
              >
                <div className="pointer-events-none absolute -inset-2 rounded-[24px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18)_0%,rgba(255,255,255,0)_72%)] blur-md" />
                <img
                  src={featureImages[0]}
                  alt={gridFeatures[0]?.title}
                  loading="lazy"
                  decoding="async"
                  className="relative h-24 w-full rounded-2xl object-cover shadow-[0_14px_30px_rgba(16,185,129,0.12)]"
                />
              </motion.div>
              <div className="relative flex min-w-[170px] flex-col gap-2">
              <div className="ml-auto rounded-2xl rounded-br-none bg-gradient-to-r from-[#10B981] to-[#047857] px-4 py-2 text-[10px] text-white shadow-md">{micro.helpPrompt}</div>
              <div className="mr-auto flex items-center gap-2 rounded-2xl rounded-bl-none border border-[#E2EFEA] bg-[#F8FAFC] px-4 py-2 text-[10px] text-[#1E293B] shadow-sm">
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#10B981] to-[#FEF3C7]" />
                {micro.helpReply}
              </div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="flex flex-col justify-between rounded-[32px] bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] p-7 text-white shadow-[0_20px_50px_rgba(167,139,250,0.3)]">
            <div className="relative z-10">
              <h3 className="font-display text-[1.42rem] font-bold">{gridFeatures[1]?.title}</h3>
              <p className="mt-2 text-[0.9rem] opacity-90">{gridFeatures[1]?.description}</p>
            </div>
            <div className="mt-3 flex justify-end">
              <motion.div
                animate={featureImageAnimations[1]}
                transition={featureImageTransition(4.4, 0.15)}
                whileHover={{ scale: 1.05, y: -6 }}
                className="relative w-full max-w-[120px]"
              >
                <div className="pointer-events-none absolute -inset-2 rounded-[24px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_72%)] blur-md" />
                <img
                  src={featureImages[1]}
                  alt={gridFeatures[1]?.title}
                  loading="lazy"
                  decoding="async"
                  className="relative h-24 w-full rounded-2xl object-cover shadow-[0_16px_32px_rgba(76,29,149,0.2)]"
                />
              </motion.div>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="md:row-span-2 flex flex-col rounded-[32px] border border-[#E2EFEA] bg-white p-7 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
            <h3 className="font-display text-[1.42rem] font-bold text-[#F59E0B]">{gridFeatures[2]?.title}</h3>
            <p className="mt-2 text-[0.94rem] text-[#1E293B]">{gridFeatures[2]?.description}</p>
            <div className="mt-8 flex flex-1 items-center justify-center">
              <motion.div
                animate={featureImageAnimations[2]}
                transition={featureImageTransition(5)}
                whileHover={{ scale: 1.02, y: -8 }}
                className="relative h-full w-full"
              >
                <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.16)_0%,rgba(255,255,255,0)_72%)] blur-lg" />
                <img
                  src={featureImages[2]}
                  alt={gridFeatures[2]?.title}
                  loading="lazy"
                  decoding="async"
                  className="relative h-full max-h-[280px] w-full rounded-[24px] object-cover shadow-[0_20px_38px_rgba(245,158,11,0.14)]"
                />
              </motion.div>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="md:col-span-2 flex flex-col items-center gap-6 rounded-[32px] border border-[#E2EFEA] bg-white p-7 shadow-[0_12px_44px_rgba(0,0,0,0.03)] md:flex-row">
            <div className="flex-1">
              <h3 className="font-display text-[1.42rem] font-bold text-[#FB7185]">{gridFeatures[3]?.title}</h3>
              <p className="mt-2 text-[0.94rem] text-[#1E293B]">{gridFeatures[3]?.description}</p>
            </div>
            <div className="flex h-26 w-44 items-center justify-center rounded-2xl border border-[#D1FAE5] bg-[#F0FDF4] shadow-inner">
              <motion.div
                animate={featureImageAnimations[3]}
                transition={featureImageTransition(4.6, 0.2)}
                whileHover={{ scale: 1.04, y: -5 }}
                className="relative h-full w-full"
              >
                <div className="pointer-events-none absolute -inset-2 rounded-[22px] bg-[radial-gradient(circle_at_center,rgba(251,113,133,0.18)_0%,rgba(255,255,255,0)_72%)] blur-md" />
                <img
                  src={featureImages[3]}
                  alt={gridFeatures[3]?.title}
                  loading="lazy"
                  decoding="async"
                  className="relative h-full w-full rounded-2xl object-cover shadow-[0_14px_28px_rgba(251,113,133,0.12)]"
                />
              </motion.div>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="flex flex-col justify-between rounded-[32px] bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-7 text-white shadow-[0_20px_50px_rgba(30,41,59,0.35)]">
            <div className="flex-1">
              <h3 className="font-display text-[1.42rem] font-bold">{gridFeatures[4]?.title}</h3>
              <p className="mt-2 text-[0.9rem] opacity-90">{gridFeatures[4]?.description}</p>
            </div>
            <div className="mt-3 flex h-26 w-full items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-md">
              <motion.div
                animate={featureImageAnimations[4]}
                transition={featureImageTransition(4.7)}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative h-full w-full"
              >
                <div className="pointer-events-none absolute -inset-2 rounded-[22px] bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.16)_0%,rgba(255,255,255,0)_70%)] blur-md" />
                <img
                  src={featureImages[4]}
                  alt={gridFeatures[4]?.title}
                  loading="lazy"
                  decoding="async"
                  className="relative h-full w-full rounded-2xl object-cover opacity-95 shadow-[0_16px_28px_rgba(15,23,42,0.25)]"
                />
              </motion.div>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="flex flex-col justify-between rounded-[32px] border border-[#E2EFEA] bg-white p-7 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
            <div>
              <h3 className="font-display text-[1.42rem] font-bold text-[#10B981]">{gridFeatures[5]?.title}</h3>
              <p className="mt-2 text-[0.94rem] text-[#1E293B]">{gridFeatures[5]?.description}</p>
            </div>
            <div className="mt-3 flex h-26 w-full items-center justify-center rounded-2xl bg-gradient-to-t from-[#F8FAFC] to-transparent">
              <motion.div
                animate={featureImageAnimations[5]}
                transition={featureImageTransition(4.3, 0.12)}
                className="flex h-20 w-36 items-center justify-center overflow-hidden rounded-xl border border-purple-200 bg-purple-500/10"
                whileHover={{ scale: 1.05, y: -6 }}
              >
                <img
                  src={featureImages[5]}
                  alt={gridFeatures[5]?.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover shadow-[0_14px_28px_rgba(167,139,250,0.16)]"
                />
              </motion.div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
