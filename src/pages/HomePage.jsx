import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DemoModal } from '../components/shared'
import {
  FeaturesGridSection,
  HeroSection,
  HowItWorksSection,
  IndustriesPreviewSection,
  PricingPreviewSection,
  ReviewsSection,
  BrandFeatureSection,
  FaqSection,
} from '../components/specific/home'
import { FinalCta, SeoHead } from '../components'
import { faqs, industries } from '../data'
import { createFaqSchema, createOrganizationSchema, createSoftwareApplicationSchema, createWebsiteSchema } from '../seo/schemas'

export function HomePage() {
  const { t } = useTranslation()
  const localizedFaqs = t('content.faq.items', { returnObjects: true }) || faqs
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id)
  const [showDemo, setShowDemo] = useState(false)

  return (
    <div className="home-page-shell">
      <SeoHead
        title="SOVA | WhatsApp Automation for Sales and Support"
        description="Turn WhatsApp chats into sales with SOVA. Automate replies, find serious buyers, follow up faster, and handle customer conversations without the manual load."
        schema={[
          createOrganizationSchema(),
          createWebsiteSchema(),
          createSoftwareApplicationSchema(),
          createFaqSchema(localizedFaqs.slice(0, 5)),
        ]}
      />
      <HeroSection onWatchDemo={() => setShowDemo(true)} />
      <BrandFeatureSection />
      <IndustriesPreviewSection activeIndustry={activeIndustry} onSelectIndustry={setActiveIndustry} />
      <HowItWorksSection />
      <FeaturesGridSection />
      <PricingPreviewSection />
      <ReviewsSection />
      <FaqSection />
      <FinalCta />
      {showDemo ? <DemoModal onClose={() => setShowDemo(false)} /> : null}
    </div>
  )
}
