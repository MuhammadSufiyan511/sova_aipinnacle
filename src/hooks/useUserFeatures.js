import { useState, useMemo } from 'react'

export class FeatureAccessManager {
  constructor(features = {}, overrides = {}) {
    this.features = features
    this.overrides = overrides
  }

  /**
   * Evaluates if a feature should be locked.
   * If role is 'admin', everything is unlocked.
   * Otherwise, locks if the feature is explicitly disabled/missing from backend features list.
   * 
   * @param {string} key - The feature key mapping directly to backend payload
   * @returns {boolean} - true if locked, false if accessible
   */
  isFeatureLocked(key) {
    if (this.overrides.role === 'admin') return false
    return !this.features[key]
  }
}

export function useUserFeatures() {
  // Mock backend response dictating feature access
  const [features] = useState({
    mainChart: true,   // Set to true to unlock for 'user' role
    donutChart: true,
    barChart: true,
    stats: true        // Set to true to unlock for 'user' role
  })

  // Set to 'admin' to bypass all locks automatically
  const [role] = useState('user')

  const manager = useMemo(() => {
    return new FeatureAccessManager(features, { role })
  }, [features, role])

  return { features, role, manager }
}
