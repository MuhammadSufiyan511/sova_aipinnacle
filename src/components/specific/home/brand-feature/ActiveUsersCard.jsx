import { motion } from 'framer-motion'

const MotionDiv = motion.div

export function ActiveUsersCard({ cardCopy, microCopy }) {
  return (
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
                {i === 2 ? (microCopy.company || microCopy.customer) : microCopy.customer}
              </p>
            </div>
          </MotionDiv>
        ))}
      </div>
      <h3 className="font-display text-[1.6rem] font-bold text-[#1E293B]">
        <span className="text-[#10B981]">{cardCopy.value}</span> {cardCopy.title}
      </h3>
      <p className="mt-3 text-[1rem] leading-[1.7] text-[#1E293B]">{cardCopy.body}</p>
    </MotionDiv>
  )
}
