import { motion as Motion } from 'framer-motion'

export const SectionCard = ({ title, subtitle, icon: Icon, children, className = "" }) => (
  <Motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`admin-section-card relative overflow-hidden rounded-[28px] md:rounded-[32px] border border-emerald-100 bg-white p-5 md:p-8 shadow-sm transition-all hover:shadow-xl hover:shadow-emerald-200/40 ${className}`}
  >
    <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-emerald-50/30 blur-3xl opacity-50 md:opacity-100" />
    <div className="relative z-10">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2.5">
            <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-xl md:rounded-2xl bg-emerald-50 text-[#1E293B]/80">
              {Icon && <Icon className="h-4 w-4 md:h-5 md:w-5" />}
            </div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-[#1E293B]">{title}</h2>
          </div>
          {subtitle && <p className="text-[0.82rem] md:text-[0.88rem] leading-relaxed text-[#1E293B]/80">{subtitle}</p>}
        </div>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  </Motion.section>
)
