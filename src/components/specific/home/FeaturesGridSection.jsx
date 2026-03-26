import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { features } from '../../../data'

const MotionDiv = motion.div

export function FeaturesGridSection() {
  const { t, i18n } = useTranslation()
  const isUrdu = i18n.resolvedLanguage?.startsWith('ur')
  const gridFeatures = isUrdu
    ? [
        { title: 'سنجیدہ خریدار شناخت', description: 'ان چیٹس کو پہلے دیکھیں جن میں خریدنے کی واضح نیت ہو۔' },
        { title: 'خودکار جوابات', description: 'عام سوالوں کے جواب فوراً دیں، چاہے آپ آف لائن ہی کیوں نہ ہوں۔' },
        { title: 'سمارٹ فالو اپ', description: 'دلچسپی رکھنے والے خریداروں کو صحیح وقت پر واپس لائیں۔' },
        { title: 'اسپام فلٹرنگ', description: 'کم اہم چیٹس خاموش کریں اور اپنی ان باکس کو صاف رکھیں۔' },
        { title: 'براڈکاسٹ', description: 'آفرز اور اپڈیٹس پوری کسٹمر لسٹ کو ایک کلک میں بھیجیں۔' },
        { title: 'بلٹ اِن انٹیگریشنز', description: 'اپنی پسندیدہ ایپس کے ساتھ Sova جوڑ کر فلو آٹومیٹ کریں۔' },
      ]
    : features.slice(0, 6)

  return (
    <section className="w-full overflow-hidden bg-[#F4F8FF] py-24">
      <div className="mx-auto max-w-[1160px] px-5">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-[2.8rem] font-extrabold tracking-[-0.04em] text-[#1D1D1F] sm:text-[3.5rem]">
            {t('sections.featuresTitleA')} <span className="text-[#0061FF]">{t('sections.featuresTitleB')}</span>
          </h2>
        </MotionDiv>

        <div className="grid auto-rows-[300px] grid-cols-1 gap-6 md:grid-cols-3">
          <MotionDiv whileHover={{ y: -5 }} className="md:col-span-2 flex flex-col justify-between rounded-[32px] border border-[#E8ECF4] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
            <div>
              <h3 className="font-display text-[1.6rem] font-bold text-[#1D1D1F]">{gridFeatures[0]?.title}</h3>
              <p className="mt-2 max-w-[320px] text-[1rem] text-[#6E6E73]">{gridFeatures[0]?.description}</p>
            </div>
            <div className="relative mt-4 flex flex-col gap-2">
              <div className="ml-auto rounded-2xl rounded-br-none bg-[#0061FF] px-4 py-2 text-[10px] text-white">
                {isUrdu ? 'ہیلو، مدد چاہیے؟' : 'Hey! Need some help?'}
              </div>
              <div className="mr-auto flex items-center gap-2 rounded-2xl rounded-bl-none border border-black/5 bg-[#F8FAFF] px-4 py-2 text-[10px] text-[#1D1D1F]">
                <div className="h-4 w-4 rounded-full bg-slate-200" />
                {isUrdu ? 'بالکل، میں آپ کی مدد کے لیے حاضر ہوں۔' : 'Of course! I am here to assist you.'}
              </div>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="flex flex-col justify-between rounded-[32px] bg-[#0061FF] p-10 text-white shadow-[0_20px_50px_rgba(0,97,255,0.2)]">
            <div className="relative z-10">
              <h3 className="font-display text-[1.6rem] font-bold">{gridFeatures[1]?.title}</h3>
              <p className="mt-2 text-[0.95rem] opacity-90">{gridFeatures[1]?.description}</p>
            </div>
            <div className="mt-4 flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-[#0061FF] bg-slate-200 shadow-sm" />
              ))}
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="md:row-span-2 flex flex-col rounded-[32px] border border-[#E8ECF4] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
            <h3 className="font-display text-[1.6rem] font-bold text-[#1D1D1F]">{gridFeatures[2]?.title}</h3>
            <p className="mt-2 text-[1rem] text-[#6E6E73]">{gridFeatures[2]?.description}</p>
            <div className="relative mt-12 flex flex-1 items-center justify-center">
              <div className="flex h-40 w-full items-center justify-center rounded-2xl bg-gradient-to-t from-[#F8FAFF] to-transparent">
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="flex h-24 w-40 items-center justify-center rounded-xl border border-purple-200 bg-purple-500/10"
                >
                  {isUrdu ? 'فالو اپ' : 'Follow-up'}
                </motion.div>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="md:col-span-2 flex flex-col items-center gap-8 rounded-[32px] border border-[#E8ECF4] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)] md:flex-row">
            <div className="flex-1">
              <h3 className="font-display text-[1.6rem] font-bold text-[#1D1D1F]">{gridFeatures[3]?.title}</h3>
              <p className="mt-2 text-[1rem] text-[#6E6E73]">{gridFeatures[3]?.description}</p>
            </div>
            <div className="flex h-32 w-48 items-center justify-center rounded-2xl border border-[#D1FAE5] bg-[#F0FDF4] shadow-inner">
              <div className="w-full space-y-2 px-8">
                <div className="h-2 w-full rounded-full bg-green-500/20" />
                <div className="h-2 w-4/5 rounded-full bg-green-500/20" />
                <div className="h-2 w-full rounded-full bg-green-500/20" />
              </div>
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="flex flex-col justify-between rounded-[32px] bg-[#0061FF] p-10 text-white shadow-[0_20px_50px_rgba(0,97,255,0.2)]">
            <div className="flex-1">
              <h3 className="font-display text-[1.6rem] font-bold">{gridFeatures[4]?.title}</h3>
              <p className="mt-2 text-[0.95rem] opacity-90">{gridFeatures[4]?.description}</p>
            </div>
            <div className="mt-4 flex h-32 w-full items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
              {isUrdu ? 'اعلان' : 'Broadcast'}
            </div>
          </MotionDiv>

          <MotionDiv whileHover={{ y: -5 }} className="flex flex-col justify-between rounded-[32px] border border-[#E8ECF4] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
            <div>
              <h3 className="font-display text-[1.6rem] font-bold text-[#1D1D1F]">{gridFeatures[5]?.title}</h3>
              <p className="mt-2 text-[1rem] text-[#6E6E73]">{gridFeatures[5]?.description}</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#25D366]/10"><FaWhatsapp className="text-[#25D366]" /></div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1877F2]/10"><FaFacebookF className="text-[#1877F2]" /></div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E4405F]/10"><FaInstagram className="text-[#E4405F]" /></div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0088cc]/10"><FaTelegramPlane className="text-[#0088cc]" /></div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
