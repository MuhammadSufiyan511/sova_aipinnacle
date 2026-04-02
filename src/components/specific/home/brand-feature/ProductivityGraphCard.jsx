import { motion } from 'framer-motion'

const MotionDiv = motion.div

export function ProductivityGraphCard({ cardCopy }) {
  return (
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
        <span className="text-[#10B981]">{cardCopy.value}</span> {cardCopy.title}
      </h3>
      <p className="mt-3 text-[1rem] leading-[1.7] text-[#1E293B]">{cardCopy.body}</p>
    </MotionDiv>
  )
}
