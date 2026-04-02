import { motion } from 'framer-motion'
import { ChatScreen } from './ChatScreen'

const MotionDiv = motion.div

export function MockupPhone({ mockupY, mockupOpacity, mockupScale, mockupRotate, copy, chatLoopDuration }) {
  return (
    <MotionDiv
      style={{
        y: mockupY,
        opacity: mockupOpacity,
        scale: mockupScale,
        rotateZ: mockupRotate,
        perspective: 1200,
        willChange: 'transform, opacity',
      }}
      className="relative z-10 w-full max-w-[340px] drop-shadow-[0_20px_50px_rgba(16,185,129,0.15)]"
    >
      {/* 3D float + tilt wrapper */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotateX: [0, 1, 0],
          rotateY: [-2, 2, -2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        {/* Phone shell */}
        <div
          className="relative overflow-hidden rounded-[44px] border-[8px] border-[#1E293B] bg-[#0F172A]"
          style={{
            boxShadow: `
              0 40px 80px rgba(0,0,0,0.25),
              0 10px 30px rgba(0,0,0,0.15),
              0 0 0 1px rgba(255,255,255,0.05)
            `,
          }}
        >
          {/* Glare shimmer overlay */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10 rounded-[36px]"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.05) 35%, transparent 60%)',
            }}
            animate={{ opacity: [1, 0.55, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Side buttons */}
          <div className="absolute right-[-9px] top-[80px] h-[36px] w-[5px] rounded-r-[3px]" style={{ background: '#1e2d3d' }} />
          <div className="absolute left-[-9px] top-[70px] h-[26px] w-[5px] rounded-l-[3px]" style={{ background: '#1e2d3d' }} />
          <div className="absolute left-[-9px] top-[104px] h-[26px] w-[5px] rounded-l-[3px]" style={{ background: '#1e2d3d' }} />

          {/* Notch */}
          <div className="flex justify-center pt-2.5">
            <div className="flex h-[22px] w-[72px] items-center justify-center gap-1.5 rounded-b-[16px]" style={{ background: '#000' }}>
              <div
                className="h-2 w-2 rounded-full"
                style={{ background: '#1a1a2e', border: '1.5px solid rgba(255,255,255,0.1)' }}
              />
              <div className="h-1 w-1 rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
            </div>
          </div>

          <ChatScreen copy={copy} chatLoopDuration={chatLoopDuration} />
        </div>
      </motion.div>

      {/* Dynamic ground shadow — synced to float */}
      <motion.div
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-[100%]"
        style={{
          width: 200,
          height: 24,
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, transparent 70%)',
          willChange: 'transform, opacity',
        }}
        animate={{
          scaleX: [1, 0.9, 1],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Ambient glow halo underneath */}
      <motion.div
        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full blur-[40px]"
        style={{
          width: 260,
          height: 60,
          background: 'rgba(16,185,129,0.2)',
          willChange: 'opacity',
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </MotionDiv>
  )
}
