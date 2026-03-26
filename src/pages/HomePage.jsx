import { useState } from 'react'
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
import { FinalCta } from '../components'
import { industries } from '../data'

export function HomePage() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0].id)
  const [showDemo, setShowDemo] = useState(false)

  return (
    <>
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
    </>
  )
}
