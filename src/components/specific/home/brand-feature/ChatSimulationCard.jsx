import { motion } from 'framer-motion'

const MotionDiv = motion.div

export function ChatSimulationCard({ cardCopy, microCopy }) {
  return (
    <MotionDiv
      whileHover={{ y: -6 }}
      className="feature-card-glass rounded-[28px] border border-white/50 bg-white/50 p-5 shadow-[0_12px_44px_rgba(16,185,129,0.04)] backdrop-blur-xl transition-all sm:p-7"
    >
      <div className="inner-sim-box mb-5 flex h-32 w-full items-center justify-center rounded-2xl bg-[#F0FDF4]/50 backdrop-blur-sm p-4 sm:mb-6">
        <div className="relative h-full w-full max-w-[220px] overflow-hidden rounded-[18px] border border-white/40 bg-[#e5ddd5]/60 shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4)_0%,transparent_58%)] opacity-90" />
          
          <div className="relative z-10 flex h-full flex-col justify-end gap-2 px-3 py-2">
            <div className="mb-0.5 flex justify-center">
              <span className="rounded-full bg-white/60 px-2 py-0.5 text-[7px] font-semibold tracking-wide text-[#5b6470] shadow-sm">
                11:43 PM
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: [0, 1, 1, 0], x: [-10, 0, 0, -6] }}
              transition={{ duration: 6, repeat: Infinity, repeatDelay: 1, times: [0, 0.12, 0.45, 0.52], ease: 'easeInOut' }}
              className="chat-bubble-received mr-auto max-w-[85%] rounded-xl rounded-bl-sm px-2.5 py-1.5 text-[8px] font-medium leading-tight shadow-sm"
            >
              {microCopy.userOne}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, repeatDelay: 1, times: [0, 0.52, 0.65, 0.76] }}
              className="chat-bubble-sent ml-auto flex items-center gap-1 rounded-full bg-white/40 px-2 py-1 shadow-sm"
            >
              {[0, 0.18, 0.36].map((delay, index) => (
                <motion.span
                  key={index}
                  className="block h-0.5 w-0.5 rounded-full bg-emerald-500"
                  animate={{ y: [0, -1, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay, ease: 'easeInOut' }}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: [0, 0, 1, 1, 0], x: [10, 10, 0, 0, 6] }}
              transition={{ duration: 6, repeat: Infinity, repeatDelay: 1, times: [0, 0.76, 0.85, 0.95, 1], ease: 'easeInOut' }}
              className="chat-bubble-sent ml-auto max-w-[80%] rounded-xl rounded-br-sm bg-emerald-500/10 px-2.5 py-1.5 text-[8px] font-medium leading-tight shadow-sm"
            >
              {microCopy.faq}
            </motion.div>
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
