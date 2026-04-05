import { motion } from 'framer-motion'

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.55, 0.75, 0.55],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute left-1/2 top-[-100px] h-[600px] w-[800px] -translate-x-1/2 rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(16,185,129,0.16) 0%, rgba(167,139,250,0.1) 45%, transparent 75%)',
        }}
      />
      <div className="absolute left-1/2 top-[55%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[80px] md:hidden" />

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.25]">
        <div className="h-[400px] w-[400px] rounded-full border border-[#10B981]" />
        <div className="absolute h-[600px] w-[600px] rounded-full border border-[#F1990A]" />
        <div className="absolute h-[800px] w-[800px] rounded-full border border-[#1E293B]" />
        <div className="absolute h-[1000px] w-[1000px] rounded-full border border-[#10B981]" />
        <div className="absolute h-[1200px] w-[1200px] rounded-full border border-[#F1990A]" />
        <div className="absolute h-[1400px] w-[1400px] rounded-full border border-[#1E293B]" />
      </div>
    </div>
  )
}
