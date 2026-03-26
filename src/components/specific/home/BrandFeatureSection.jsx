import { motion } from 'framer-motion'
import { Mail, MessageSquare, Bell, Calendar } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const MotionDiv = motion.div

const floatingIcons = [
  { icon: FaWhatsapp, color: '#25D366', top: '3%', left: '3%', delay: 0, size: 72 },
  { icon: FaInstagram, color: '#E4405F', top: '10%', left: '25%', delay: 0.4, size: 66 },
  { icon: FaTelegramPlane, color: '#0088cc', top: '5%', right: '10%', delay: 0.8, size: 64 },
  { icon: FaFacebookF, color: '#1877F2', top: '32%', left: '0%', delay: 1.2, size: 60 },
  { icon: Mail, color: '#0061FF', top: '40%', right: '2%', delay: 1.6, size: 68 },
  { icon: MessageSquare, color: '#34C759', top: '52%', left: '20%', delay: 2, size: 58 },
]

export function BrandFeatureSection() {
  const { i18n } = useTranslation()
  const isUrdu = i18n.resolvedLanguage?.startsWith('ur')

  const copy = isUrdu
    ? {
        heading: ['منظم کریں، آٹومیٹ کریں،', 'فروخت بڑھائیں'],
        subheading: 'سادہ ٹیمپلیٹس کے ساتھ شروع کریں اور بغیر مشکل سیٹ اپ کے اپنا سیلز فلو چلا دیں۔',
        phoneTitle: 'سووا اسسٹنٹ',
        phoneStatus: 'آن لائن',
        messages: [
          'پہلے آرڈر پر 15% ڈسکاؤنٹ چاہیے',
          'ضرور، براہ کرم اپنا ای میل ایڈریس کنفرم کریں۔',
          'johndoe@gmail.com',
          'چیک آؤٹ پر SHOP15 کوڈ استعمال کریں۔',
        ],
        autoTitle: ['فوری جواب،', 'بغیر تاخیر', 'ہمیشہ'],
        cards: [
          {
            value: '60%',
            title: 'زیادہ پروڈکٹیوٹی',
            body: 'Sova ابتدائی پیغامات خود سنبھالتا ہے تاکہ آپ کی ٹیم گھنٹوں کا دستی کام بچا سکے۔',
          },
          {
            value: '3x',
            title: 'تیز جواب',
            body: 'اپنے گاہکوں تک فوراً پہنچیں اور مصروف اوقات میں بھی جواب دینا نہ چھوڑیں۔',
          },
          {
            value: '90%',
            title: 'بہتر کنورژن',
            body: 'جہاں خریدار زیادہ متحرک ہیں وہیں گفتگو جاری رکھیں اور لیڈز کو جلدی آرڈر میں بدلیں۔',
          },
          {
            value: '24/7',
            title: 'ہمیشہ آن لائن',
            body: 'WhatsApp پر AI سیلز اسسٹنٹ کے ساتھ سنجیدہ خریدار کبھی ہاتھ سے نہ نکلیں۔',
          },
        ],
        micro: {
          userOne: 'ہیلو، میں نے آپ کے کاروبار کے بارے میں سنا ہے...',
          userTwo: 'کیا آپ Sova کے بارے میں جانتے ہیں؟',
          userThree: 'کیا آپ قیمت بھیج سکتے ہیں؟',
          customer: 'کسٹمر',
          faq: 'FAQ جواب',
          support: 'سپورٹ',
        },
      }
    : {
        heading: ['Define, Automate,', 'Engage'],
        subheading: 'Start Like No-Code With Templates. Tweak And Integrate With Any Service Effortlessly.',
        phoneTitle: 'Sova Assistant',
        phoneStatus: 'Online',
        messages: [
          'Get 15% Discount on my first order',
          'Sure! Please confirm your email address.',
          'johndoe@gmail.com',
          'Use Code SHOP15 at checkout!',
        ],
        autoTitle: ['Auto Responses, And No', 'Delays', '. Ever'],
        cards: [
          {
            value: '60%',
            title: 'Rise In Productivity',
            body: 'Deploy Sova to filter the first level of inbound conversations automatically and save hours of manual work.',
          },
          {
            value: '3x',
            title: 'Faster Response Time',
            body: 'Reach out to your customers on their favorite messaging app instantly and stay ahead of competitors.',
          },
          {
            value: '90%',
            title: 'Higher Conversion Rate',
            body: 'Messaging channels perform significantly better than emails. Convert leads where they are most active.',
          },
          {
            value: '24/7',
            title: 'Always Online',
            body: 'Everything you need for a complete AI sales assistant on WhatsApp. Never miss a buyer, even while you sleep.',
          },
        ],
        micro: {
          userOne: 'Hey, I saw your company is...',
          userTwo: 'You know about Sova...',
          userThree: 'Will you please send me pricing?',
          customer: 'Customer',
          faq: 'Answer FAQs',
          support: 'Contact Support',
        },
      }

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-[#EEF5FF] to-[#E0EBFF]" />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -right-32 top-40 h-[350px] w-[350px] rounded-full bg-gradient-to-l from-blue-500/15 to-cyan-400/15 blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute bottom-20 left-1/3 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-indigo-400/10 to-blue-400/10 blur-[60px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1160px] px-5 py-24">
        <div className="text-center">
          <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-[2.8rem] font-extrabold tracking-[-0.04em] text-[#1D1D1F] sm:text-[3.5rem]">
              {copy.heading[0]} <span className="text-[#0061FF]">{copy.heading[1]}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[1.1rem] leading-[1.6] text-[#6E6E73]">{copy.subheading}</p>
          </MotionDiv>

          <div className="relative mt-20 flex justify-center">
            {floatingIcons.map((item, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 3, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
                className="absolute z-20 hidden items-center justify-center lg:flex"
                style={{ top: item.top, left: item.left, right: item.right }}
              >
                <div
                  className="relative rounded-2xl border border-white/40 bg-white/90 backdrop-blur-sm shadow-lg"
                  style={{
                    width: item.size,
                    height: item.size,
                    boxShadow: `0 12px 40px ${item.color}30, 0 4px 12px rgba(0,0,0,0.1)`,
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-white/80 to-white/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <item.icon size={item.size * 0.45} style={{ color: item.color }} />
                  </div>
                  <div className="absolute -inset-2 rounded-2xl opacity-40 blur-md" style={{ background: `radial-gradient(circle at center, ${item.color}50 0%, transparent 70%)` }} />
                </div>
              </MotionDiv>
            ))}

            <div className="absolute bottom-[-40px] h-20 w-[300px] rounded-[100%] bg-black/5 blur-[40px]" />

            <MotionDiv
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full max-w-[340px] overflow-hidden rounded-[44px] border-[8px] border-[#1D1D1F] bg-[#090E1A] shadow-2xl shadow-blue-500/20"
            >
              <div className="h-[600px] p-5">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#0061FF] to-[#00C6FF]" />
                  <div>
                    <p className="text-xs font-bold text-white">{copy.phoneTitle}</p>
                    <p className="text-[10px] text-green-400">• {copy.phoneStatus}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <div className="ml-auto max-w-[85%] rounded-[18px] rounded-br-none bg-[#0061FF] p-3 text-[11px] text-white">{copy.messages[0]}</div>
                  <div className="mr-auto max-w-[85%] rounded-[18px] rounded-bl-none bg-white p-3 text-[11px] text-[#1D1D1F]">{copy.messages[1]}</div>
                  <div className="ml-auto max-w-[85%] rounded-[18px] rounded-br-none bg-[#0061FF] p-3 text-[11px] text-white">{copy.messages[2]}</div>
                  <div className="mr-auto max-w-[85%] rounded-[18px] rounded-bl-none bg-white p-3 text-[11px] text-[#1D1D1F]">{copy.messages[3]}</div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>

        <div className="relative z-10 -mt-[20%]">
          <div className="bg-white pb-16 pt-14">
            <MotionDiv initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
              <h2 className="font-display text-[2.6rem] font-extrabold tracking-[-0.04em] text-[#1D1D1F] sm:text-[3.2rem]">
                {copy.autoTitle[0]} <span className="text-[#0061FF]">{copy.autoTitle[1]}</span> {copy.autoTitle[2]}
              </h2>
            </MotionDiv>
          </div>

          <div className="-mt-8 rounded-2xl bg-white px-4 pb-10 sm:px-8">
            <div className="mx-auto mt-4 grid max-w-[1000px] gap-6 sm:grid-cols-2 lg:grid-cols-2">
              <MotionDiv whileHover={{ y: -6 }} className="rounded-[32px] border border-[#E8ECF4] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
                <div className="mb-8 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F8FAFF]">
                  <svg width="100%" height="100%" viewBox="0 0 400 200" className="opacity-80">
                    <path d="M0,150 C50,150 100,50 150,120 C200,190 250,80 300,100 C350,120 400,20 400,20" fill="none" stroke="#0061FF" strokeWidth="6" strokeLinecap="round" />
                    <path d="M0,150 C50,150 100,50 150,120 C200,190 250,80 300,100 C350,120 400,20 400,20 V200 H0 Z" fill="url(#grad1)" opacity="0.1" />
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#0061FF', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#0061FF', stopOpacity: 0 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="font-display text-[1.6rem] font-bold text-[#1D1D1F]">
                  <span className="text-[#0061FF]">{copy.cards[0].value}</span> {copy.cards[0].title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-[#6E6E73]">{copy.cards[0].body}</p>
              </MotionDiv>

              <MotionDiv whileHover={{ y: -6 }} className="rounded-[32px] border border-[#E8ECF4] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
                <div className="mb-8 flex h-48 w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[#FFF8F8] p-5">
                  {[
                    { name: 'Lucy Carry', color: '#FEF9C3' },
                    { name: 'Mark Winston', color: '#FEE2E2' },
                    { name: 'Johnny Parker', color: '#FFFFFF' },
                  ].map((user, i) => (
                    <div key={i} className="flex w-full items-center gap-3 rounded-xl border border-black/5 p-3 shadow-sm" style={{ backgroundColor: user.color, transform: `translateY(${(2 - i) * 10}px)`, zIndex: i }}>
                      <div className="h-8 w-8 rounded-full bg-slate-200" />
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-[#1D1D1F]">{user.name}</p>
                        <p className="text-[8px] text-[#6E6E73]">{i === 2 ? 'Apple Inc.' : copy.micro.customer}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="font-display text-[1.6rem] font-bold text-[#1D1D1F]">
                  <span className="text-[#0061FF]">{copy.cards[1].value}</span> {copy.cards[1].title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-[#6E6E73]">{copy.cards[1].body}</p>
              </MotionDiv>

              <MotionDiv whileHover={{ y: -6 }} className="rounded-[32px] border border-[#E8ECF4] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
                <div className="mb-8 flex h-48 w-full items-center justify-center gap-4 rounded-2xl bg-[#F0FDF4] p-5">
                  <div className="flex w-full max-w-[240px] flex-col gap-2">
                    <div className="mr-auto rounded-xl rounded-bl-none border border-black/5 bg-white p-2.5 text-[9px] shadow-sm">{copy.micro.userOne}</div>
                    <div className="mr-auto rounded-xl rounded-bl-none border border-black/5 bg-white p-2.5 text-[9px] opacity-80 shadow-sm">{copy.micro.userTwo}</div>
                    <div className="mr-auto rounded-xl rounded-bl-none border border-black/5 bg-white p-2.5 text-[9px] opacity-60 shadow-sm">{copy.micro.userThree}</div>
                  </div>
                </div>
                <h3 className="font-display text-[1.6rem] font-bold text-[#1D1D1F]">
                  <span className="text-[#0061FF]">{copy.cards[2].value}</span> {copy.cards[2].title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-[#6E6E73]">{copy.cards[2].body}</p>
              </MotionDiv>

              <MotionDiv whileHover={{ y: -6 }} className="rounded-[32px] border border-[#E8ECF4] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]">
                <div className="mb-8 flex h-48 w-full items-center justify-center rounded-2xl bg-[#F5F3FF] p-5">
                  <div className="relative h-24 w-32 rounded-2xl border border-black/5 bg-white p-4 shadow-xl">
                    <Calendar className="mb-2 text-[#8B5CF6]" size={20} />
                    <div className="mb-2 h-2 w-full rounded-full bg-slate-100" />
                    <div className="h-2 w-2/3 rounded-full bg-slate-100" />
                    <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#0061FF] text-white shadow-lg">
                      <Bell size={14} />
                    </div>
                    <div className="mt-4 flex flex-col gap-1.5">
                      <div className="center rounded-full bg-[#EEF3FF] px-2 py-1 text-center text-[8px] font-bold text-[#0061FF]">{copy.micro.faq}</div>
                      <div className="center rounded-full bg-slate-50 px-2 py-1 text-center text-[8px] font-bold text-slate-400">{copy.micro.support}</div>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-[1.6rem] font-bold text-[#1D1D1F]">
                  <span className="text-[#0061FF]">{copy.cards[3].value}</span> {copy.cards[3].title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-[#6E6E73]">{copy.cards[3].body}</p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
