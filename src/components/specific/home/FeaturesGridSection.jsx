import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { features } from '../../../data'

const MotionDiv = motion.div

export function FeaturesGridSection() {
  const { t } = useTranslation()
  const gridFeatures = t('content.featuresGrid.items', { returnObjects: true }) || features.slice(0, 6)
  const micro = t('content.featuresGrid.micro', { returnObjects: true })

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

        <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-3">
          <MotionDiv whileHover={{ y: -5 }} className="md:col-span-2 flex flex-col justify-between rounded-[32px] border border-[#E2EFEA] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_20px_60px_rgba(16,185,129,0.1)]">
            <div>
              <h3 className="font-display text-[1.6rem] font-bold text-[#10B981]">{gridFeatures[0]?.title}</h3>
              <p className="mt-2 max-w-[320px] text-[1rem] text-[#1E293B]">{gridFeatures[0]?.description}</p>
            </div>
            <div className="relative mt-4 flex flex-col gap-2">
              <div className="ml-auto rounded-2xl rounded-br-none bg-gradient-to-r from-[#10B981] to-[#047857] px-4 py-2 text-[10px] text-white shadow-md">{micro.helpPrompt}</div>
              <div className="mr-auto flex items-center gap-2 rounded-2xl rounded-bl-none border border-[#E2EFEA] bg-[#F8FAFC] px-4 py-2 text-[10px] text-[#1E293B] shadow-sm">
                <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#10B981] to-[#FEF3C7]" />
                {micro.helpReply}
              </div>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="flex flex-col justify-between rounded-[32px] bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] p-10 text-white shadow-[0_20px_50px_rgba(167,139,250,0.3)]">
            <div className="relative z-10">
              <h3 className="font-display text-[1.6rem] font-bold">{gridFeatures[1]?.title}</h3>
              <p className="mt-2 text-[0.95rem] opacity-90">{gridFeatures[1]?.description}</p>
            </div>
            <div className="mt-4 flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-[#A78BFA] bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] shadow-sm" />
              ))}
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="md:row-span-2 flex flex-col rounded-[32px] border border-[#E2EFEA] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
            <h3 className="font-display text-[1.6rem] font-bold text-[#F59E0B]">{gridFeatures[2]?.title}</h3>
            <p className="mt-2 text-[1rem] text-[#1E293B]">{gridFeatures[2]?.description}</p>
            <div className="mt-12 grid flex-1 grid-cols-2 gap-3 content-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/10"><FaWhatsapp className="text-xl text-[#25D366]" /></div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1877F2]/10"><FaFacebookF className="text-xl text-[#1877F2]" /></div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E4405F]/10"><FaInstagram className="text-xl text-[#E4405F]" /></div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0088cc]/10"><FaTelegramPlane className="text-xl text-[#0088cc]" /></div>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="md:col-span-2 flex flex-col items-center gap-8 rounded-[32px] border border-[#E2EFEA] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)] md:flex-row">
            <div className="flex-1">
              <h3 className="font-display text-[1.6rem] font-bold text-[#FB7185]">{gridFeatures[3]?.title}</h3>
              <p className="mt-2 text-[1rem] text-[#1E293B]">{gridFeatures[3]?.description}</p>
            </div>
            <div className="flex h-32 w-48 items-center justify-center rounded-2xl border border-[#D1FAE5] bg-[#F0FDF4] shadow-inner">
              <div className="w-full space-y-2 px-8">
                <div className="h-2 w-full rounded-full bg-green-500/20" />
                <div className="h-2 w-4/5 rounded-full bg-green-500/20" />
                <div className="h-2 w-full rounded-full bg-green-500/20" />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="flex flex-col justify-between rounded-[32px] bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-10 text-white shadow-[0_20px_50px_rgba(30,41,59,0.35)]">
            <div className="flex-1">
              <h3 className="font-display text-[1.6rem] font-bold">{gridFeatures[4]?.title}</h3>
              <p className="mt-2 text-[0.95rem] opacity-90">{gridFeatures[4]?.description}</p>
            </div>
            <div className="mt-4 flex h-32 w-full items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-md">
              <span className="bg-gradient-to-r from-[#10B981] to-[#A78BFA] bg-clip-text text-transparent font-bold">
                {micro.broadcast}
              </span>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="flex flex-col justify-between rounded-[32px] border border-[#E2EFEA] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
            <div>
              <h3 className="font-display text-[1.6rem] font-bold text-[#10B981]">{gridFeatures[5]?.title}</h3>
              <p className="mt-2 text-[1rem] text-[#1E293B]">{gridFeatures[5]?.description}</p>
            </div>
            <div className="mt-4 flex h-32 w-full items-center justify-center rounded-2xl bg-gradient-to-t from-[#F8FAFC] to-transparent">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex h-24 w-40 items-center justify-center rounded-xl border border-purple-200 bg-purple-500/10"
              >
                {micro.followUp}
              </motion.div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
