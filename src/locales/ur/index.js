import { common } from './common'
import { nav } from './nav'
import { languages } from './languages'
import { hero } from './hero'
import { sections } from './sections'
import { aeoOverview } from './content-home-aeo'
import { brandFeature, featuresGrid, howItWorks } from './content-home-core'
import { industries, pricing, trustedBusinesses, reviews, faq } from './content-home-growth'
import { about, auth, metaIntegration, metaModal } from './content-pages-basic'
import { caseStudiesA } from './content-caseStudies-a'
import { caseStudiesB } from './content-caseStudies-b'
import { termsSections } from './content-legal-terms'
import { privacySections } from './content-legal-privacy'

const ur = {
  translation: {
    common,
    nav,
    languages,
    hero,
    sections,
    content: {
      aeoOverview,
      brandFeature,
      featuresGrid,
      howItWorks,
      industries,
      pricing,
      trustedBusinesses,
      reviews,
      faq,
      about,
      auth,
      metaIntegration,
      metaModal,
      caseStudies: { items: { ...caseStudiesA, ...caseStudiesB } },
      legal: { termsSections, privacySections },
    },
  },
}

export default ur
