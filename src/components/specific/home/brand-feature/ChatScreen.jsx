import { motion } from 'framer-motion'

export function ChatScreen({ copy, chatLoopDuration = 10 }) {
  return (
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
      <div className="chat-simulation-bg relative h-[calc(100%-50px)] w-full overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.15) 1px, transparent 1px)', backgroundSize: '12px 12px' }} />

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
                  ? 'chat-bubble-sent ml-auto rounded-br-lg rounded-tl-lg rounded-tr-sm'
                  : 'chat-bubble-received mr-auto rounded-bl-lg rounded-br-lg rounded-tl-sm'
              } max-w-[80%] px-3 py-2 text-[11px] leading-[1.45] text-[#1E293B] shadow-sm`}
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
            className="chat-bubble-received mr-auto flex max-w-[80%] items-center gap-0.5 rounded-[20px] rounded-bl-none px-4 py-3 shadow-sm"
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
        <div className="chat-input-bar absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-[20px] px-3 py-2 shadow-sm">
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
  )
}
