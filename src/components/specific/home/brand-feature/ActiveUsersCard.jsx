import { memo } from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

export const ActiveUsersCard = memo(function ActiveUsersCard({ cardCopy, microCopy }) {
  return (
    <MotionDiv
      whileHover={{ y: -6 }}
      className="feature-card-glass rounded-[28px] border border-white/50 bg-white/50 p-5 shadow-[0_12px_44px_rgba(16,185,129,0.04)] backdrop-blur-xl transition-all sm:p-7"
    >
      <div className="inner-sim-box mb-5 flex h-32 w-full flex-col items-center justify-center gap-2 rounded-2xl bg-[#FFF8F8]/50 backdrop-blur-sm p-4 sm:mb-6">
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
              className="chat-bubble-received flex w-full items-center gap-2 rounded-xl border border-white bg-white/60 p-2 shadow-sm"
              style={{
                zIndex: i,
                willChange: 'transform, opacity'
              }}
            >
              <div className="h-6 w-6 rounded-full bg-emerald-100" />
            <div className="flex-1">
              <p className="text-[9px] font-bold text-[#1E293B]">{user.name}</p>
              <p className="text-[7px] text-[#1E293B]">
                {i === 2 ? (microCopy.company || microCopy.customer) : microCopy.customer}
              </p>
            </div>
          </MotionDiv>
        ))}
      </div>
      <h3 className="font-display text-[1.2rem] font-bold text-[#1E293B] sm:text-[1.4rem]">
        <span className="text-[#10B981]">{cardCopy.value}</span> {cardCopy.title}
      </h3>
      <p className="mt-2 text-[0.85rem] leading-[1.65] text-[#1E293B] sm:mt-3 sm:text-[0.92rem]">{cardCopy.body}</p>
    </MotionDiv>
  )
})
