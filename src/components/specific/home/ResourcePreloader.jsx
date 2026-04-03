import { useEffect, memo } from 'react'

// Features Grid Assets
import seriousBuyerDetectionImage from '../../../assets/home/serious buyer detection.png'
import autoRepliesImage from '../../../assets/home/auto replies.png'
import builtInIntegrationsImage from '../../../assets/home/Built-in Integrations.png'
import spamDetectionImage from '../../../assets/home/spam detection.png'
import broadcastImage from '../../../assets/home/Broadcast.png'
import smartFollowUpsImage from '../../../assets/home/Smart Follow-ups.png'

const CRITICAL_ASSETS = [
  seriousBuyerDetectionImage,
  autoRepliesImage,
  builtInIntegrationsImage,
  spamDetectionImage,
  broadcastImage,
  smartFollowUpsImage,
]

/**
 * ResourcePreloader
 * Silently pre-fetches critical home page assets to the browser cache
 * as soon as the page mounts, ensuring "pre-rendered" feel on scroll.
 */
export const ResourcePreloader = memo(function ResourcePreloader() {
  useEffect(() => {
    // Preload PNGs
    CRITICAL_ASSETS.forEach((src) => {
      const img = new Image()
      img.src = src
    })

    // Pre-decode high-priority LCP candidate if needed (already done by browser usually with eager)
  }, [])

  return null // Render-less component
})
