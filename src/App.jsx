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
import NotFoundPage from './pages/NotFoundPage'

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
    const MIN_DISPLAY_MS = 600 // prevents flash-of-loader jank
    const startedAt = Date.now()

    const dismiss = () => {
      const elapsed = Date.now() - startedAt
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed)
      setTimeout(() => setIsAppInitializing(false), remaining)
    }

    // Wait for the document to be fully loaded
    const waitForReady = () => {
      Promise.all([
        // 1. All images in the current view decoded
        Promise.allSettled(
          Array.from(document.images).map((img) =>
            img.complete ? Promise.resolve() : new Promise((res) => { img.onload = res; img.onerror = res })
          )
        ),
        // 2. All fonts loaded
        document.fonts?.ready ?? Promise.resolve(),
      ]).then(dismiss)
    }

    if (document.readyState === 'complete') {
      waitForReady()
    } else {
      window.addEventListener('load', waitForReady, { once: true })
    }

    // Safety net: dismiss after 4s no matter what
    const safeguard = setTimeout(() => setIsAppInitializing(false), 4000)
    return () => clearTimeout(safeguard)
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
