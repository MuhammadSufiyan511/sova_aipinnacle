import { motion as Motion } from 'framer-motion'
import { Home, ArrowLeft, Ghost } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function NotFoundPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white px-6 py-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-30">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-[#10B981]/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-[#10B981]/10 blur-[120px]" />
      </div>

      <Motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        {/* Animated Icon Container */}
        <Motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-8 flex h-40 w-40 items-center justify-center rounded-[40px] bg-[#F0FDF4] shadow-xl shadow-[#10B981]/10 ring-1 ring-[#10B981]/20"
        >
          <Ghost className="h-20 w-20 text-[#10B981]" />
        </Motion.div>

        <h1 className="mb-2 text-8xl font-black tracking-tighter text-[#1E293B]">
          {t('notFound.title', '404')}
        </h1>
        
        <h2 className="mb-4 text-3xl font-bold text-[#1E293B]">
          {t('notFound.subtitle', 'Lost in Space?')}
        </h2>
        
        <p className="mb-12 max-w-md text-lg leading-relaxed text-[#64748B]">
          {t('notFound.desc', "The page you're looking for doesn't exist or has been moved to another universe.")}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => navigate(-1)}
            className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 text-[0.95rem] font-bold text-[#1E293B] shadow-sm transition hover:bg-slate-50 active:scale-95"
          >
            <ArrowLeft className="h-5 w-5" />
            {t('notFound.backLink', 'Go Back')}
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#10B981] px-8 text-[0.95rem] font-bold text-white shadow-lg shadow-[#10B981]/20 transition hover:bg-[#059669] active:scale-95"
          >
            <Home className="h-5 w-5" />
            {t('notFound.backBtn', 'Take Me Home')}
          </button>
        </div>
      </Motion.div>

      {/* Floating Particles/Shapes for extra wow factor */}
      <Motion.div
        animate={{ 
          y: [0, 40, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[15%] h-4 w-4 rounded-full bg-[#10B981]/20"
      />
      <Motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, -20, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-[15%] h-6 w-6 rounded-full bg-[#10B981]/10"
      />
    </div>
  )
}
