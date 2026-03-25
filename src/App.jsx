import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FloatingWhatsApp, SiteFooter, SiteHeader } from './components'
import {
  AboutContactPage,
  AuthPage,
  CaseStudiesPage,
  HomePage,
  IndustriesPage,
  PricingPage,
  PrivacyPage,
  TermsPage,
} from './pages/index.js'

const MotionMain = motion.main

const pageAnimation = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
  transition: { duration: 0.35, ease: 'easeOut' },
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

function AppShell() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.16),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_24%),linear-gradient(180deg,#f8fafc_0%,#ffffff_48%,#eff6ff_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-4 sm:px-6 lg:px-8">
        <SiteHeader />
        <AnimatePresence mode="wait">
          <MotionMain key={location.pathname} {...pageAnimation} className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/about" element={<AboutContactPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy_policy" element={<PrivacyPage />} />
            </Routes>
          </MotionMain>
        </AnimatePresence>
        <SiteFooter />
        <FloatingWhatsApp />
      </div>
    </div>
  )
}

export default App
