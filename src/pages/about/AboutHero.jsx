export function AboutHero({ calendlyEmbedUrl, calendlyTitle, t }) {
  return (
    <section className="relative overflow-hidden bg-[#ebf2ff] pb-8 pt-24 lg:pt-16 about-hero-section">
      <div className="absolute inset-0 z-0 about-hero-blur-container">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-emerald-50/50 blur-[120px] about-blur-1" />
        <div className="absolute right-[-5%] bottom-[-5%] h-[400px] w-[400px] rounded-full bg-indigo-50/40 blur-[100px] about-blur-2" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1160px] px-5 2xl:max-w-[1440px] 3xl:max-w-[1600px]">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#10B981] about-eyebrow 2xl:text-base 3xl:text-lg">
              {t('sections.aboutEyebrow')}
            </p>
            <h1 className="font-display text-[2.45rem] font-extrabold leading-[1.08] tracking-[-0.05em] text-[#1E293B] sm:text-[3.15rem] lg:text-[3.35rem] about-title 2xl:text-[4.8rem] 3xl:text-[5.5rem]">
              {t('sections.aboutTitle')}
            </h1>
            <p className="mt-6 max-w-[560px] text-[1rem] leading-[1.75] text-[#5a9e88] lg:text-[1.05rem] about-description 2xl:max-w-[700px] 2xl:text-[1.4rem] 3xl:max-w-[850px] 3xl:text-[1.6rem]">
              {t('sections.aboutDescription')}
            </p>
          </div>
          <div className="rounded-[14px] p-6 sm:p-7">
            <div className="rounded-[30px] border border-[#E2EFEA] bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] lg:mt-16 calendly-container-shell">
              <h2 className="font-display p-6 text-[1.45rem] font-bold leading-tight tracking-[-0.03em] text-[#10B981] sm:text-[1.6rem]">
                {calendlyTitle}
              </h2>
              <div className="overflow-hidden rounded-[24px] border border-[#EEF6F2] bg-white">
                <iframe
                  src={calendlyEmbedUrl}
                  title={calendlyTitle || 'Calendly booking'}
                  className="h-[420px] w-full bg-white"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}