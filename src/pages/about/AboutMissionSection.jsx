import { CalendarDays, Sparkles, TrendingUp } from 'lucide-react'
import { AeoOverviewSection } from '../../components/specific/home'

export function AboutMissionSection({ focusCards, missionParagraphs, t }) {
  const cardIcons = [Sparkles, TrendingUp, CalendarDays]

  return (
    <>
      <AeoOverviewSection />
      <section className="mx-auto max-w-[1160px] px-5 pt-16 pb-3 lg:pt-20 lg:pb-6 2xl:max-w-[1440px] 3xl:max-w-[1600px] 2xl:pt-32 3xl:pt-40">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <h2 className="font-display text-[2.2rem] font-bold tracking-[-0.03em] text-[#1E293B]">
              {t('common.ourMission')}
            </h2>
            <div className="space-y-6">
              {missionParagraphs.map((paragraph, index) => (
                <p key={index} className="text-[1.1rem] leading-[1.8] text-[#1E293B]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {focusCards.slice(0, 2).map((card, index) => {
              const Icon = cardIcons[index] || Sparkles
              return (
                <div key={index} className="rounded-[32px] border border-[#E2EFEA] bg-white p-8 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#10B981]">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1E293B]">{card.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-[#1E293B]">{card.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}