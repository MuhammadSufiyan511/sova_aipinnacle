export const WizardNavigation = ({ steps, currentStep, setCurrentStep, t }) => {
  return (
    <nav className="flex items-center gap-2 overflow-x-auto pb-2 scroll-smooth no-scrollbar md:pb-0">
      {steps.map((step, idx) => (
        <button
          key={step.id}
          onClick={() => setCurrentStep(step.id)}
          className={`admin-wizard-step flex shrink-0 items-center gap-2 rounded-xl md:rounded-2xl px-4 py-2.5 md:px-5 md:py-3 text-[0.75rem] md:text-[0.82rem] font-bold transition-all ${currentStep === step.id
            ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 is-active'
            : 'bg-white text-[#1E293B]/75 hover:text-[#1E293B]/90 ring-1 ring-emerald-100/80 shadow-sm'
            }`}
        >
          <span className={`flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-lg ${currentStep === step.id ? 'bg-white/20' : 'bg-emerald-50'}`}>
            {idx + 1}
          </span>
          {t(step.title)}
        </button>
      ))}
    </nav>
  )
}
