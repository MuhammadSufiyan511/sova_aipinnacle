import { Moon, Sun } from 'lucide-react'

export function OnboardingThemeToggle({ homeDarkMode, onToggle, t }) {
  return (
    <div className="fixed right-6 top-6 z-[60]">
      <button
        type="button"
        onClick={onToggle}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-500 shadow-lg backdrop-blur-md transition hover:border-emerald-500 hover:text-emerald-500 onboarding-theme-toggle"
        aria-label={homeDarkMode ? t('common.lightMode') : t('common.darkMode')}
      >
        {homeDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>
    </div>
  )
}