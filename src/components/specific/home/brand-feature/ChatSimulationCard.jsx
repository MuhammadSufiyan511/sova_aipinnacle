import { motion } from 'framer-motion'

const MotionDiv = motion.div

export function ChatSimulationCard({ cardCopy, microCopy }) {
  return (
    <MotionDiv
      whileHover={{ y: -6 }}
      className="feature-card-glass rounded-[32px] border border-[#E2EFEA] bg-white p-10 shadow-[0_12px_44px_rgba(0,0,0,0.03)]"
    >
      <div className="inner-sim-box mb-8 flex h-48 w-full items-center justify-center rounded-2xl bg-[#F0FDF4] p-5">
        <div className="relative h-full w-full max-w-[270px] overflow-hidden rounded-[24px] border border-[#D1FAE5] bg-[#e5ddd5] shadow-[0_18px_38px_rgba(15,23,42,0.08)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55)_0%,transparent_58%)] opacity-90" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(15,23,42,0.08) 0.8px, transparent 0.8px)', backgroundSize: '14px 14px' }} />

          <div className="relative z-10 flex items-center gap-2.5 px-3 py-2.5 text-left text-white">
            <div className="flex h-7 w-7 items-center justify-center" />
            <div className="flex items-center gap-2.5" />
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
              transition={{ duration: 6, repeat: Infinity, repeatDelay: 1, times: [0, 0.12, 0.45, 0.52], ease: 'easeInOut' }}
              className="chat-bubble-received mr-auto max-w-[78%] rounded-2xl rounded-bl-md px-3 py-2 text-[9px] font-medium leading-[1.45] shadow-sm"
            >
              {microCopy.userOne}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatDelay: 1, times: [0, 0.52, 0.65, 0.76] }}
              className="chat-bubble-sent ml-auto flex items-center gap-1 rounded-full px-3 py-2 shadow-sm"
            >
              {[0, 0.18, 0.36].map((delay, index) => (
                <motion.span
                  key={index}
                  className="block h-1 w-1 rounded-full bg-emerald-500"
                  animate={{ y: [0, -2, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay, ease: 'easeInOut' }}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: [0, 0, 1, 1, 0], x: [10, 10, 0, 0, 6] }}
              transition={{ duration: 6, repeat: Infinity, repeatDelay: 1, times: [0, 0.76, 0.85, 0.95, 1], ease: 'easeInOut' }}
              className="chat-bubble-sent ml-auto max-w-[74%] rounded-2xl rounded-br-md px-3 py-2 text-[9px] font-medium leading-[1.45] shadow-sm"
            >
              {microCopy.faq}
            </motion.div>
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
