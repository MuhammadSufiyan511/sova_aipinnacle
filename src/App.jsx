import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from './layouts/AppShell'
import {
  AboutContactPage,
  AuthPage,
  CaseStudiesPage,
  HomePage,
  IndustriesPage,
  PrivacyPage,
  TermsPage,
  OnboardingPage,
  DashboardPage,
} from './pages/index.js'

function App() {
  return (
    <BrowserRouter>
      <AppShell>
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
      </AppShell>
    </BrowserRouter>
  )
}

export default App
