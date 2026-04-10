import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ActiveUsersCard } from './ActiveUsersCard'
import { ChatSimulationCard } from './ChatSimulationCard'
import { ProductivityGraphCard } from './ProductivityGraphCard'
import { TypingSimulationCard } from './TypingSimulationCard'

export function BrandFeatureSwipeStack({ cards, microCopy, t }) {
  const { i18n } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'
  const [stackOrder, setStackOrder] = useState([0, 1, 2, 3])

  const handleSwipe = (info) => {
    // In RTL, swiping left = prev card, swiping right = next card
    const goNext = isRtl ? info.offset.x > 40 : info.offset.x < -40
    const goPrev = isRtl ? info.offset.x < -40 : info.offset.x > 40
    if (goNext) {
      setStackOrder((prev) => {
        const next = [...prev]
        next.push(next.shift())
        return next
      })
      return
    }
    if (goPrev) {
      setStackOrder((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }
  }

  return (
    <div className="relative mx-auto mt-6 h-[380px] w-full max-w-[320px] sm:hidden" style={{ perspective: '1000px' }}>
      {stackOrder.map((cardIndex, i) => {
        const isFront = i === 0
        return (
          <motion.div
            key={cardIndex}
            drag={isFront ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, info) => handleSwipe(info)}
            animate={{
              x: 0,
              y: i * 20,
              scale: 1 - i * 0.05,
              zIndex: 10 - i,
              opacity: i > 2 ? 0 : 1,
            }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
            className="absolute left-0 top-0 w-full will-change-transform"
            style={{ touchAction: isFront ? 'none' : 'auto' }}
          >
            <div className="pointer-events-none rounded-[24px] border border-[#F1F5F9] bg-white shadow-[0_12px_44px_rgba(0,0,0,0.12)]">
              {cardIndex === 0 && <ProductivityGraphCard cardCopy={cards[0]} />}
              {cardIndex === 1 && <ActiveUsersCard cardCopy={cards[1]} microCopy={microCopy} />}
              {cardIndex === 2 && <TypingSimulationCard cardCopy={cards[2]} microCopy={microCopy} />}
              {cardIndex === 3 && <ChatSimulationCard cardCopy={cards[3]} microCopy={microCopy} />}
            </div>
          </motion.div>
        )
      })}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-1.5">
        {[0, 1, 2, 3].map((dotIndex) => (
          <div key={dotIndex} className={`h-1.5 rounded-full transition-all duration-300 ${stackOrder[0] === dotIndex ? 'w-4 bg-[#10B981]' : 'w-1.5 bg-gray-200'}`} />
        ))}
      </div>
      <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-center gap-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
        <ArrowLeft className="h-3 w-3" /> {t('Swipe') || 'Swipe'} <ArrowRight className="h-3 w-3" />
      </div>
    </div>
  )
}
