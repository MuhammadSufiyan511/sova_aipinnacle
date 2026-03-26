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
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy_policy" element={<PrivacyPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  )
}

export default App
