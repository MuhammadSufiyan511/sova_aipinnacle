import { motion } from 'framer-motion'

const MotionDiv = motion.div

export function TypingSimulationCard({ cardCopy, microCopy }) {
  return (
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
              className="absolute -top-6 left-0 flex gap-1 rounded-full bg-emerald-50 px-2 py-1"
            >
              {[0, 0.2, 0.4].map((d) => (
                <motion.div key={d} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} className="h-1 w-1 rounded-full bg-emerald-400" style={{ willChange: 'transform' }} />
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
              {microCopy.userOne}
            </MotionDiv>
          </div>

          <div className="relative">
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              style={{ willChange: 'opacity' }}
              transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 1], repeatDelay: 4.2, delay: 0.3 }}
              className="absolute -top-6 left-0 flex gap-1 rounded-full bg-emerald-50 px-2 py-1"
            >
              {[0, 0.2, 0.4].map((d) => (
                <motion.div key={d} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} className="h-1 w-1 rounded-full bg-emerald-400" style={{ willChange: 'transform' }} />
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
              {microCopy.userTwo}
            </MotionDiv>
          </div>

          <div className="relative">
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              style={{ willChange: 'opacity' }}
              transition={{ duration: 0.8, repeat: Infinity, times: [0, 0.5, 1], repeatDelay: 4.2, delay: 0.6 }}
              className="absolute -top-6 left-0 flex gap-1 rounded-full bg-emerald-50 px-2 py-1"
            >
              {[0, 0.2, 0.4].map((d) => (
                <motion.div key={d} animate={{ y: [0, -3, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: d }} className="h-1 w-1 rounded-full bg-emerald-400" style={{ willChange: 'transform' }} />
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
              {microCopy.userThree}
            </MotionDiv>
          </div>
        </div>
      </div>
      <h3 className="font-display text-[1.6rem] font-bold text-[#1E293B]">
        <span className="text-[#10B981]">{cardCopy.value}</span> {cardCopy.title}
      </h3>
      <p className="mt-3 text-[1rem] leading-[1.7] text-[#1E293B]">{cardCopy.body}</p>
    </MotionDiv>
  )
}
