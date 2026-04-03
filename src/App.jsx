import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AppShell } from './layouts/AppShell'
import { AppSplashScreen } from './components/shared/AppSplashScreen'
import { useState, useEffect } from 'react'
import {
  AboutContactPage,
  AuthPage,
  CaseStudiesPage,
  HomePage,
  IndustriesPage,
  PrivacyPage,
  TermsPage,
} from './pages/index.js'

// Lazy load large routes for performance
const OnboardingPage = lazy(() => import('./pages/app/OnboardingPage'))
const DashboardPage = lazy(() => import('./pages/app/DashboardPage'))

// Minimal loading fallback
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-white">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#10B981] border-t-transparent" />
  </div>
)

function App() {
  const [isAppInitializing, setIsAppInitializing] = useState(true)

  useEffect(() => {
    // Initial hardware/asset stabilization window
    const timer = setTimeout(() => {
      setIsAppInitializing(false)
    }, 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <AppSplashScreen isVisible={isAppInitializing} />
      <AppShell>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/about" element={<AboutContactPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/admin" element={<DashboardPage />} />
            <Route path="/admin/*" element={<DashboardPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy_policy" element={<PrivacyPage />} />
          </Routes>
        </Suspense>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
