import { motion } from 'framer-motion'

const MotionDiv = motion.div

export function TypingSimulationCard({ cardCopy, microCopy }) {
  return (
    <MotionDiv
      whileHover={{ y: -6 }}
      className="feature-card-glass rounded-[28px] border border-white/50 bg-white/50 p-5 shadow-[0_12px_44px_rgba(16,185,129,0.04)] backdrop-blur-xl transition-all sm:p-7"
    >
      <div className="inner-sim-box mb-5 flex h-32 w-full items-center justify-center gap-4 rounded-2xl bg-[#F0FDF4]/50 backdrop-blur-sm p-4 sm:mb-6">
        <div className="flex w-full max-w-[200px] flex-col gap-1.5">
          <div className="relative">
            {/* Typing simulation dots */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              style={{ willChange: 'opacity' }}
              transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 1], repeatDelay: 4.2, delay: 0 }}
              className="absolute -top-5 left-0 flex gap-1 rounded-full px-2 py-1"
            >
              {[0, 0.2, 0.4].map((d) => (
                <motion.div key={d} animate={{ y: [0, -2, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} className="h-0.5 w-0.5 rounded-full bg-emerald-500" style={{ opacity: 0.8, willChange: 'transform' }} />
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
              className="chat-bubble-received mr-auto rounded-lg rounded-bl-none border border-white bg-white/60 p-2 text-[8px] shadow-sm"
            >
              {microCopy.userOne}
            </MotionDiv>
          </div>

          <div className="relative">
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              style={{ willChange: 'opacity' }}
              transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 1], repeatDelay: 4.2, delay: 0.3 }}
              className="absolute -top-5 left-0 flex gap-1 rounded-full px-2 py-1"
            >
              {[0, 0.2, 0.4].map((d) => (
                <motion.div key={d} animate={{ y: [0, -2, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} className="h-0.5 w-0.5 rounded-full bg-emerald-500" style={{ opacity: 0.8, willChange: 'transform' }} />
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
              className="chat-bubble-received mr-auto rounded-lg rounded-bl-none border border-white bg-white/60 p-2 text-[8px] opacity-80 shadow-sm"
            >
              {microCopy.userTwo}
            </MotionDiv>
          </div>

          <div className="relative">
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              style={{ willChange: 'opacity' }}
              transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 1], repeatDelay: 4.2, delay: 0.6 }}
              className="absolute -top-5 left-0 flex gap-1 rounded-full px-2 py-1"
            >
              {[0, 0.2, 0.4].map((d) => (
                <motion.div key={d} animate={{ y: [0, -2, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} className="h-0.5 w-0.5 rounded-full bg-emerald-500" style={{ opacity: 0.8, willChange: 'transform' }} />
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
              className="chat-bubble-received mr-auto rounded-lg rounded-bl-none border border-white bg-white/60 p-2 text-[8px] opacity-60 shadow-sm"
            >
              {microCopy.userThree}
            </MotionDiv>
          </div>
        </div>
      </div>
      <h3 className="font-display text-[1.2rem] font-bold text-[#1E293B] sm:text-[1.4rem]">
        <span className="text-[#10B981]">{cardCopy.value}</span> {cardCopy.title}
      </h3>
      <p className="mt-2 text-[0.85rem] leading-[1.65] text-[#1E293B] sm:mt-3 sm:text-[0.92rem]">{cardCopy.body}</p>
    </MotionDiv>
  )
}
