import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Mail, MessageSquare } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const MotionDiv = motion.div

const floatingIcons = [
  { icon: FaWhatsapp, color: '#25D366', top: '3%', left: '3%', delay: 0, size: 72 },
  { icon: FaInstagram, color: '#E4405F', top: '10%', left: '25%', delay: 0.4, size: 66 },
  { icon: FaTelegramPlane, color: '#0088cc', top: '5%', right: '10%', delay: 0.8, size: 64 },
  { icon: FaFacebookF, color: '#1877F2', top: '32%', left: '0%', delay: 1.2, size: 60 },
  { icon: Mail, color: '#10B981', top: '40%', right: '2%', delay: 1.6, size: 68 },
  { icon: MessageSquare, color: '#34C759', top: '52%', left: '20%', delay: 2, size: 58 },
]

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
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] via-[#ECFDF5] to-[#D1FAE5]" />
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
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
            <motion.div style={{ y: iconsY, willChange: 'transform' }} className="absolute inset-0">
              {floatingIcons.map((item, idx) => (
                <MotionDiv
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
                  className="absolute z-20 hidden items-center justify-center lg:flex"
                  style={{ top: item.top, left: item.left, right: item.right, willChange: 'transform, opacity' }}
                >
                  <div
                    className="relative rounded-2xl border border-white/40 bg-white/90 shadow-sm"
                    style={{
                      width: item.size,
                      height: item.size,
                      boxShadow: `0 8px 30px ${item.color}20, 0 2px 8px rgba(0,0,0,0.05)`,
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-white/80 to-white/60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <item.icon size={item.size * 0.45} style={{ color: item.color }} />
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </motion.div>

            {/* ── ENHANCED PHONE MOCKUP ── */}
            <MotionDiv
              style={{
                y: mockupY,
                opacity: mockupOpacity,
                scale: mockupScale,
                rotateZ: mockupRotate,
                perspective: 1200,
                willChange: 'transform, opacity',
              }}
              className="relative z-10 w-full max-w-[340px] drop-shadow-[0_20px_50px_rgba(16,185,129,0.15)]"
            >
              {/* 3D float + tilt wrapper */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotateX: [0, 1, 0],
                  rotateY: [-2, 2, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
              >
                {/* Phone shell */}
                <div
                  className="relative overflow-hidden rounded-[44px] border-[8px] border-[#1E293B] bg-[#0F172A]"
                  style={{
                    boxShadow: `
                      0 40px 80px rgba(0,0,0,0.25),
                      0 10px 30px rgba(0,0,0,0.15),
                      0 0 0 1px rgba(255,255,255,0.05)
                    `,
                  }}
                >
                  {/* Glare shimmer overlay */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 z-10 rounded-[36px]"
                    style={{
                      background:
                        'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 35%, transparent 60%)',
                    }}
                    animate={{ opacity: [1, 0.55, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Side buttons */}
                  <div
                    className="absolute right-[-9px] top-[80px] h-[36px] w-[5px] rounded-r-[3px]"
                    style={{ background: '#1e2d3d' }}
                  />
                  <div
                    className="absolute left-[-9px] top-[70px] h-[26px] w-[5px] rounded-l-[3px]"
                    style={{ background: '#1e2d3d' }}
                  />
                  <div
                    className="absolute left-[-9px] top-[104px] h-[26px] w-[5px] rounded-l-[3px]"
                    style={{ background: '#1e2d3d' }}
                  />

                  {/* Notch */}
                  <div className="flex justify-center pt-2.5">
                    <div
                      className="flex h-[22px] w-[72px] items-center justify-center gap-1.5 rounded-b-[16px]"
                      style={{ background: '#000' }}
                    >
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{
                          background: '#1a1a2e',
                          border: '1.5px solid rgba(255,255,255,0.1)',
                        }}
                      />
                      <div
                        className="h-1 w-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.25)' }}
                      />
                    </div>
                  </div>

                  {/* Screen content */}
                  <div className="h-[580px] px-4 pb-5 pt-3">
                    {/* Chat header - WhatsApp style */}
                    <div className="flex items-center gap-2.5 border-b border-[#075E54] bg-[#00897B] pb-3 pl-1 pr-3">
                      <div className="relative h-9 w-9 flex-shrink-0 rounded-full bg-white/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-white">{copy.phoneTitle}</p>
                        <p className="text-[10px] text-green-100">● {copy.phoneStatus}</p>
                      </div>
                    </div>

                    {/* Chat background */}
                    <div className="relative h-[calc(100%-50px)] w-full overflow-hidden" style={{ background: 'linear-gradient(to bottom, #E8DED2 0%, #D5BFA6 100%)' }}>
                      {/* Subtle dot pattern */}
                      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)', backgroundSize: '12px 12px' }} />

                      {/* Messages area */}
                      <div className="relative z-10 flex flex-col gap-1.5 px-3 pt-3">
                        {/* Timestamp chip */}
                        <div className="mb-2 flex justify-center">
                          <span className="rounded-lg bg-[#E8DED2]/90 px-3 py-1 text-[9px] font-medium text-[#5b6470] shadow-sm" style={{ background: 'rgba(255,255,255,0.7)' }}>
                            {copy.timestamp || '11:43 PM'}
                          </span>
                        </div>
                        {copy.messages.map((message, index) => (
                          <motion.div
                            key={message}
                            initial={{ opacity: 0, y: 14, scale: 0.92 }}
                            animate={{
                              opacity: [0, 0, 1, 1, 0],
                              y: [14, 14, 0, 0, -4],
                              scale: [0.92, 0.92, 1, 1, 0.98],
                            }}
                            transition={{
                              duration: chatLoopDuration,
                              repeat: Infinity,
                              repeatDelay: 0.4,
                              ease: 'easeInOut',
                              times: [
                                0,
                                Math.max(0, 0.08 + index * 0.16 - 0.04),
                                0.08 + index * 0.16,
                                0.88,
                                1,
                              ],
                            }}
                            className={`${
                              index % 2 === 0
                                ? 'ml-auto rounded-br-lg rounded-tl-lg rounded-tr-sm'
                                : 'mr-auto rounded-bl-lg rounded-br-lg rounded-tl-sm'
                            } ${index % 2 === 0 ? 'bg-[#DCF8C6]' : 'bg-white'} max-w-[80%] px-3 py-2 text-[11px] leading-[1.45] text-[#1E293B] shadow-sm`}
                          >
                            {message}
                          </motion.div>
                        ))}

                        {/* Typing indicator — WhatsApp style */}
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{
                            opacity: [0, 0, 1, 1, 0],
                            y: [10, 10, 0, 0, -2],
                            scale: [0.9, 0.9, 1, 1, 0.96],
                          }}
                          transition={{
                            duration: chatLoopDuration,
                            repeat: Infinity,
                            repeatDelay: 0.4,
                            ease: 'easeInOut',
                            times: [0, 0.72, 0.78, 0.92, 1],
                          }}
                          className="mr-auto flex max-w-[80%] items-center gap-0.5 rounded-[20px] rounded-bl-none bg-white px-4 py-3 shadow-sm"
                        >
                          {[0, 0.18, 0.36].map((delay, i) => (
                            <motion.span
                              key={i}
                              className="block h-2 w-2 rounded-full"
                              style={{ background: '#999', opacity: 0.6, willChange: 'transform, opacity' }}
                              animate={{ y: [0, -3, 0], opacity: [0.6, 1, 0.6] }}
                              transition={{ duration: 1.2, repeat: Infinity, delay, ease: 'easeInOut' }}
                            />
                          ))}
                        </motion.div>
                      </div>

                    {/* Input bar - WhatsApp style */}
                    <div
                      className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-[20px] bg-white px-3 py-2 shadow-sm"
                    >
                      <span className="flex-1 text-[11px]" style={{ color: '#888' }}>
                        {copy.micro.inputPlaceholder}
                      </span>
                      <motion.div
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-[#00BFA5]"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                          <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
                </div>
              </motion.div>

              {/* Dynamic ground shadow — synced to float */}
              <motion.div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-[100%]"
                style={{
                  width: 200,
                  height: 24,
                  background: 'radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%)',
                  willChange: 'transform, opacity',
                }}
                animate={{
                  scaleX: [1, 0.9, 1],
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Ambient glow halo underneath */}
              <motion.div
                className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full blur-[40px]"
                style={{
                  width: 260,
                  height: 60,
                  background: 'rgba(16,185,129,0.2)',
                  willChange: 'opacity',
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
            </MotionDiv>
          </div>
        </div>

        {/* Below fold — auto section */}
        <div className="relative z-10 -mt-[20%]">
          <div className="bg-white pb-10 pt-10">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
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
              {/* Card 1 */}
              <MotionDiv
                whileHover={{ y: -6 }}
                className="rounded-[32px] border border-[#E2EFEA] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]"
              >
                <div className="mb-8 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-[#F8FAFC]">
                  <svg width="100%" height="100%" viewBox="0 0 400 200" className="opacity-80 overflow-visible">
                    <motion.path
                      id="graph-path"
                      d="M0,150 C50,150 100,50 150,120 C200,190 250,80 300,100 C350,120 400,20 400,20"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="6"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: [0, 1, 1, 0] }}
                      style={{ willChange: 'pathLength' }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        repeatDelay: 1,
                        times: [0, 0.4, 0.8, 1],
                        ease: 'easeInOut' 
                      }}
                    />
                    {/* Glowing Dot following the path */}
                    <motion.circle
                      r="6"
                      fill="#10B981"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        offsetDistance: ['0%', '100%'],
                        opacity: [0, 1, 1, 0]
                      }}
                      style={{ 
                        offsetPath: "path('M0,150 C50,150 100,50 150,120 C200,190 250,80 300,100 C350,120 400,20 400,20')",
                        willChange: 'offset-distance, opacity'
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        repeatDelay: 1,
                        times: [0, 0.4, 0.8, 1],
                        ease: 'easeInOut' 
                      }}
                    />
                    <motion.path
                      d="M0,150 C50,150 100,50 150,120 C200,190 250,80 300,100 C350,120 400,20 400,20 V200 H0 Z"
                      fill="url(#grad1)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.1, 0.1, 0] }}
                      style={{ willChange: 'opacity' }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        repeatDelay: 1,
                        times: [0, 0.4, 0.8, 1],
                        delay: 0.5 
                      }}
                    />
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 0 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="font-display text-[1.6rem] font-bold text-[#1E293B]">
                  <span className="text-[#10B981]">{copy.cards[0].value}</span> {copy.cards[0].title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-[#1E293B]">{copy.cards[0].body}</p>
              </MotionDiv>

              {/* Card 2 */}
              <MotionDiv
                whileHover={{ y: -6 }}
                className="rounded-[32px] border border-[#E2EFEA] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]"
              >
                <div className="mb-8 flex h-48 w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[#FFF8F8] p-5">
                  {[
                    { name: 'Lucy Carry', color: '#FEF9C3' },
                    { name: 'Mark Winston', color: '#FEE2E2' },
                    { name: 'Johnny Parker', color: '#FFFFFF' },
                  ].map((user, i) => (
                    <MotionDiv
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ 
                        x: [ -20, 0, 0, -20 ], 
                        opacity: [ 0, 1, 1, 0 ],
                        scale: [ 1, 1.02, 1.02, 1 ]
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        delay: i * 0.4,
                        repeatDelay: 2,
                        times: [0, 0.15, 0.85, 1],
                        ease: 'easeInOut'
                      }}
                      className="flex w-full items-center gap-3 rounded-xl border border-[#E2EFEA] p-3 shadow-sm"
                      style={{
                        backgroundColor: user.color,
                        transform: `translateY(${(2 - i) * 10}px)`,
                        zIndex: i,
                        willChange: 'transform, opacity'
                      }}
                    >
                      <div className="h-8 w-8 rounded-full bg-[#FEF3C7]" />
                      <div className="flex-1">
                        <p className="text-[10px] font-bold text-[#1E293B]">{user.name}</p>
                        <p className="text-[8px] text-[#1E293B]">
                          {i === 2 ? (copy.micro.company || copy.micro.customer) : copy.micro.customer}
                        </p>
                      </div>
                    </MotionDiv>
                  ))}
                </div>
                <h3 className="font-display text-[1.6rem] font-bold text-[#1E293B]">
                  <span className="text-[#10B981]">{copy.cards[1].value}</span> {copy.cards[1].title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-[#1E293B]">{copy.cards[1].body}</p>
              </MotionDiv>

              {/* Card 3 */}
              <MotionDiv
                whileHover={{ y: -6 }}
                className="rounded-[32px] border border-[#E2EFEA] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]"
              >
                <div className="mb-8 flex h-48 w-full items-center justify-center gap-4 rounded-2xl bg-[#F0FDF4] p-5">
                  <div className="flex w-full max-w-[240px] flex-col gap-2">
                    <div className="relative">
                      {/* Typing simulation dots */}
                      <MotionDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        style={{ willChange: 'opacity' }}
                        transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 1], repeatDelay: 4.2, delay: 0 }}
                        className="absolute -top-6 left-0 flex gap-1 px-2 py-1 rounded-full bg-emerald-50"
                      >
                        {[0, 0.2, 0.4].map(d => (
                          <motion.div key={d} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} className="w-1 h-1 rounded-full bg-emerald-400" style={{ willChange: 'transform' }} />
                        ))}
                      </MotionDiv>
                      <MotionDiv
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                          scale: [ 0.8, 1, 1, 0.8 ], 
                          opacity: [ 0, 1, 1, 0 ] 
                        }}
                        style={{ willChange: 'transform, opacity' }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity, 
                          delay: 0.8,
                          repeatDelay: 2,
                          times: [0, 0.1, 0.9, 1],
                          ease: 'easeOut'
                        }}
                        className="mr-auto rounded-xl rounded-bl-none border border-[#E2EFEA] bg-white p-2.5 text-[9px] shadow-sm"
                      >
                        {copy.micro.userOne}
                      </MotionDiv>
                    </div>

                    <div className="relative">
                      <MotionDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        style={{ willChange: 'opacity' }}
                        transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 1], repeatDelay: 4.2, delay: 0.3 }}
                        className="absolute -top-6 left-0 flex gap-1 px-2 py-1 rounded-full bg-emerald-50"
                      >
                        {[0, 0.2, 0.4].map(d => (
                          <motion.div key={d} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} className="w-1 h-1 rounded-full bg-emerald-400" style={{ willChange: 'transform' }} />
                        ))}
                      </MotionDiv>
                      <MotionDiv
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                          scale: [ 0.8, 1, 1, 0.8 ], 
                          opacity: [ 0, 1, 1, 0 ] 
                        }}
                        style={{ willChange: 'transform, opacity' }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity, 
                          delay: 1.1,
                          repeatDelay: 2,
                          times: [0, 0.1, 0.9, 1],
                          ease: 'easeOut'
                        }}
                        className="mr-auto rounded-xl rounded-bl-none border border-[#E2EFEA] bg-white p-2.5 text-[9px] opacity-80 shadow-sm"
                      >
                        {copy.micro.userTwo}
                      </MotionDiv>
                    </div>

                    <div className="relative">
                      <MotionDiv
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        style={{ willChange: 'opacity' }}
                        transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 1], repeatDelay: 4.2, delay: 0.6 }}
                        className="absolute -top-6 left-0 flex gap-1 px-2 py-1 rounded-full bg-emerald-50"
                      >
                        {[0, 0.2, 0.4].map(d => (
                          <motion.div key={d} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} className="w-1 h-1 rounded-full bg-emerald-400" style={{ willChange: 'transform' }} />
                        ))}
                      </MotionDiv>
                      <MotionDiv
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                          scale: [ 0.8, 1, 1, 0.8 ], 
                          opacity: [ 0, 1, 1, 0 ] 
                        }}
                        style={{ willChange: 'transform, opacity' }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity, 
                          delay: 1.4,
                          repeatDelay: 2,
                          times: [0, 0.1, 0.9, 1],
                          ease: 'easeOut'
                        }}
                        className="mr-auto rounded-xl rounded-bl-none border border-[#E2EFEA] bg-white p-2.5 text-[9px] opacity-60 shadow-sm"
                      >
                        {copy.micro.userThree}
                      </MotionDiv>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-[1.6rem] font-bold text-[#1E293B]">
                  <span className="text-[#10B981]">{copy.cards[2].value}</span> {copy.cards[2].title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-[#1E293B]">{copy.cards[2].body}</p>
              </MotionDiv>

              {/* Card 4 */}
              <MotionDiv
                whileHover={{ y: -6 }}
                className="rounded-[32px] border border-[#E2EFEA] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]"
              >
                <div className="mb-8 flex h-48 w-full items-center justify-center rounded-2xl bg-[#F0FDF4] p-5">
                  <div className="relative h-full w-full max-w-[270px] overflow-hidden rounded-[24px] border border-[#D1FAE5] bg-[#e5ddd5] shadow-[0_18px_38px_rgba(15,23,42,0.08)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55)_0%,transparent_58%)] opacity-90" />
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(15,23,42,0.08) 0.8px, transparent 0.8px)', backgroundSize: '14px 14px' }} />

                    <div className="relative z-10 flex items-center gap-2.5  px-3 py-2.5 text-left text-white">
                      <div className="flex h-7 w-7 items-center justify-center ">
                        {/* <FaWhatsapp size={14} /> */}
                      </div>
                      <div className="flex items-center gap-2.5">
                        {/* <div>
                          <p className="text-[9px] font-bold leading-none">SOVA Support</p>
                          <p className="mt-1 text-[8px] text-white/80">online</p>
                        </div> */}
                      </div>
                    </div>

                    <div className="relative z-10 flex h-[calc(100%-46px)] flex-col justify-end gap-2.5 px-3 py-3">
                      <div className="mb-1 flex justify-center">
                        <span className="rounded-full bg-white/80 px-2.5 py-1 text-[8px] font-semibold tracking-[0.16em] text-[#5b6470] shadow-sm">
                          11:43 PM
                        </span>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: [0, 1, 1, 0], x: [-10, 0, 0, -6] }}
                        transition={{ duration: 5.2, repeat: Infinity, repeatDelay: 0.8, times: [0, 0.15, 0.78, 1], ease: 'easeInOut' }}
                        className="mr-auto max-w-[78%] rounded-2xl rounded-bl-md bg-white px-3 py-2 text-[9px] font-medium leading-[1.45] text-[#0F172A] shadow-sm"
                      >
                        {copy.micro.userOne}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: [0, 0, 1, 1, 0], x: [10, 10, 0, 0, 6] }}
                        transition={{ duration: 5.2, repeat: Infinity, repeatDelay: 0.8, times: [0, 0.22, 0.36, 0.82, 1], ease: 'easeInOut' }}
                        className="ml-auto max-w-[74%] rounded-2xl rounded-br-md bg-[#dcf8c6] px-3 py-2 text-[9px] font-medium leading-[1.45] text-[#0F172A] shadow-sm"
                      >
                        {copy.micro.faq}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: [0, 0, 1, 1, 0], x: [-10, -10, 0, 0, -4] }}
                        transition={{ duration: 5.2, repeat: Infinity, repeatDelay: 0.8, times: [0, 0.44, 0.58, 0.9, 1], ease: 'easeInOut' }}
                        className="mr-auto max-w-[82%] rounded-2xl rounded-bl-md bg-white px-3 py-2 text-[9px] font-medium leading-[1.45] text-[#0F172A] shadow-sm"
                      >
                        {copy.micro.userThree}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0, 1, 1, 0] }}
                        transition={{ duration: 5.2, repeat: Infinity, repeatDelay: 0.8, times: [0, 0.64, 0.7, 0.85, 1], ease: 'easeInOut' }}
                        className="ml-auto flex items-center gap-1 rounded-full bg-[#dcf8c6] px-3 py-2 shadow-sm"
                      >
                        {[0, 0.18, 0.36].map((delay, index) => (
                          <motion.span
                            key={index}
                            className="block h-1.5 w-1.5 rounded-full bg-[#0f9f8f]"
                            animate={{ y: [0, -3, 0], opacity: [0.35, 1, 0.35] }}
                            transition={{ duration: 0.95, repeat: Infinity, delay, ease: 'easeInOut' }}
                            style={{ willChange: 'transform, opacity' }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-[1.6rem] font-bold text-[#1E293B]">
                  <span className="text-[#10B981]">{copy.cards[3].value}</span> {copy.cards[3].title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-[#1E293B]">{copy.cards[3].body}</p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
