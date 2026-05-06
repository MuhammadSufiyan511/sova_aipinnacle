import { memo, useState, useCallback } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { rtlLanguages } from '../../../i18n'


// ─── Per-card accent colours and icons ────────────────────────────────────────
const CARD_META = [
  { bg: 'from-[#10B981] to-[#06B6D4]' },
  { bg: 'from-[#A78BFA] to-[#10B981]' },
  { bg: 'from-[#F59E0B] to-[#10B981]' },
  { bg: 'from-[#06B6D4] to-[#A78BFA]' },
]

const defaultCards = [
  {
    question: 'What is SOVA?',
    answer:
      'SOVA is a WhatsApp automation tool for businesses. It replies to customers, filters buyer intent, follows up with leads, and helps teams handle sales chats faster.',
  },
  {
    question: 'Who is SOVA for?',
    answer:
      'SOVA is for small, medium, and growing businesses that get many WhatsApp messages every day, especially sellers, retailers, wholesalers, and service teams.',
  },
  {
    question: 'What does SOVA automate?',
    answer:
      'SOVA automates first replies, product questions, buyer qualification, lead follow-ups, and spam filtering so teams can focus on serious customers.',
  },
  {
    question: 'Why do businesses use SOVA?',
    answer:
      'Businesses use SOVA to save reply time, stop missing buyers, keep WhatsApp organised, and turn more conversations into real orders.',
  },
]

// ─── Thin animated progress bar that resets when `active` changes ─────────────
function ProgressScanLine({ active, onComplete }) {
  return (
    <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-[#10B981]/12">
      <Motion.div
        key={active}
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 4, ease: 'linear' }}
        onAnimationComplete={onComplete}
        className="h-full rounded-full bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#A78BFA]"
      />
    </div>
  )
}

// ─── The mobile-only 3D-stacked swipe carousel ────────────────────────────────
function AeoMobileCarousel({ cards, isRtl }) {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const total = cards.length

  const go = useCallback(
    (delta) => {
      setDirection(delta)
      setActive((prev) => (prev + delta + total) % total)
    },
    [total],
  )

  const handleComplete = useCallback(() => {
    // We always want to go forward in the array (0 -> 1 -> 2)
    if (!paused) go(1)
  }, [go, paused])

  const handleDragEnd = (_, info) => {
    const flung = Math.abs(info.velocity.x) > 350
    const dragged = Math.abs(info.offset.x) > 48
    if (flung || dragged) {
      // Swiping in the "forward" direction:
      // LTR: Swipe left (offset.x < 0)
      // RTL: Swipe right (offset.x > 0)
      const isForward = isRtl ? info.offset.x > 0 : info.offset.x < 0
      go(isForward ? 1 : -1)
    }
    setPaused(false)
  }

  const { bg } = CARD_META[active % CARD_META.length]

  const slideVariants = {
    enter: (dir) => {
      const isForward = dir > 0
      // In LTR: forward enters from right (80), backward from left (-80)
      // In RTL: forward enters from left (-80), backward from right (80)
      const xOffset = isRtl ? (isForward ? -80 : 80) : (isForward ? 80 : -80)
      const rotateY = isRtl ? (isForward ? -6 : 6) : (isForward ? 6 : -6)
      return { opacity: 0, x: xOffset, scale: 0.94, rotateY }
    },
    center: { opacity: 1, x: 0, scale: 1, rotateY: 0 },
    exit: (dir) => {
      const isForward = dir > 0
      // Opposite of enter for exit
      const xOffset = isRtl ? (isForward ? 80 : -80) : (isForward ? -80 : 80)
      const rotateY = isRtl ? (isForward ? 6 : -6) : (isForward ? -6 : 6)
      return { opacity: 0, x: xOffset, scale: 0.94, rotateY }
    },
  }

  return (
    <div className="mt-8 md:hidden" onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)} onPointerCancel={() => setPaused(false)}>
      {/* Stack depth layers */}
      <div className="relative" style={{ perspective: '900px', minHeight: 280 }}>
        {/* Ghost card 2 — deepest */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-6 rounded-[26px] border border-[#D1FAE5] bg-white"
          style={{ top: 16, bottom: 0, opacity: 0.28, transform: 'scaleX(0.84) scaleY(0.86) translateY(-8px)', transformOrigin: 'top center', zIndex: 1 }}
        />
        {/* Ghost card 1 — mid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-3 rounded-[28px] border border-[#D1FAE5] bg-white"
          style={{ top: 8, bottom: 0, opacity: 0.55, transform: 'scaleX(0.93) scaleY(0.94) translateY(-4px)', transformOrigin: 'top center', zIndex: 2 }}
        />

        {/* Active card */}
        <div className="relative" style={{ zIndex: 10 }}>
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <Motion.div
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={handleDragEnd}
              className="aeo-overview-card cursor-grab select-none rounded-[28px] border border-[#D1FAE5] bg-white p-6 shadow-[0_16px_48px_rgba(16,185,129,0.13)] active:cursor-grabbing will-change-transform"
              style={{ touchAction: 'pan-y' }}
            >
              {/* Top row: counter */}
              <div className="flex items-start justify-end">
                <div className="text-right">
                  <span className="block text-[1.4rem] font-black leading-none tabular-nums text-[#E2F5EE]">
                    {String(active + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#10B981]/40">
                    of {String(total).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Accent rule */}
              <div className={`mt-4 mb-3 h-[2px] w-10 rounded-full bg-gradient-to-r ${bg}`} />

              <h3 className="text-[1.08rem] font-bold leading-snug text-[#1E293B]">
                {cards[active].question}
              </h3>
              <p className="mt-3 text-[0.9rem] leading-[1.8] text-[#48617A]">
                {cards[active].answer}
              </p>
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Auto-advance progress scan line */}
      <ProgressScanLine active={active} onComplete={handleComplete} />

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > active ? 1 : -1)
              setActive(i)
            }}
            aria-label={`Card ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              active === i
                ? 'h-[5px] w-7 bg-gradient-to-r from-[#10B981] to-[#06B6D4]'
                : 'h-[5px] w-[5px] bg-[#10B981]/20 hover:bg-[#10B981]/45'
            }`}
          />
        ))}
      </div>

      {/* Drag hint — vanishes after first interaction */}
      <p className="mt-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#10B981]/35">
        ← swipe →
      </p>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export const AeoOverviewSection = memo(function AeoOverviewSection() {
  const { t, i18n } = useTranslation()
  const cards = t('content.aeoOverview.cards', { returnObjects: true }) || defaultCards
  const isRtl = rtlLanguages.includes(i18n.language) || i18n.dir() === 'rtl'

  return (
    <section className="aeo-overview-section w-full bg-[#ebf2ff] py-8">
      <div className="mx-auto max-w-[1160px] px-5">
        {/* Heading */}
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="aeo-eyebrow mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#10B981]">
            {t('content.aeoOverview.eyebrow')}
          </p>
          <h2 className="aeo-title font-display text-[2rem] font-extrabold tracking-[-0.04em] text-[#1E293B] sm:text-[2.5rem]">
            {t('content.aeoOverview.title')}
          </h2>
          <p className="aeo-description mx-auto mt-3 max-w-[720px] text-[0.98rem] leading-[1.75] text-[#48617A]">
            {t('content.aeoOverview.description')}
          </p>
        </Motion.div>

        {/* Mobile carousel */}
        <AeoMobileCarousel cards={cards} isRtl={isRtl} />

        {/* Tablet / Desktop grid */}
        <div className="mt-8 hidden gap-5 md:grid md:grid-cols-2">
          {cards.map((item, index) => {
            const { bg } = CARD_META[index % CARD_META.length]
            return (
              <Motion.div
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="aeo-overview-card group rounded-[28px] border border-[#D1FAE5] bg-white p-6 shadow-[0_10px_28px_rgba(16,185,129,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(16,185,129,0.14)]"
              >
                <div className={`mb-3 h-[2px] w-10 rounded-full bg-gradient-to-r ${bg}`} />
                <h3 className="text-[1.1rem] font-bold text-[#1E293B]">
                  {isRtl ? (
                    <>
                      {item.question.replace('?', '')}
                      <span className="rtl-punctuation-flip inline-block">?</span>
                    </>
                  ) : (
                    item.question
                  )}
                </h3>
                <p className="mt-3 text-[0.96rem] leading-[1.8] text-[#48617A]">{item.answer}</p>
              </Motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
})
