import { createContext, useContext, useEffect, useState, useMemo } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('sova-products')
    return saved ? JSON.parse(saved) : []
  })

  const [tones, setTones] = useState(() => {
    const saved = localStorage.getItem('sova-tones')
    return saved ? JSON.parse(saved) : []
  })

  const [user, setUser] = useState({ name: 'User', plan: 'Free' })
  const [showCelebration, setShowCelebration] = useState(false)
  const [homeDarkMode, setHomeDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('sova-home-theme') === 'dark'
  })

  useEffect(() => {
    localStorage.setItem('sova-products', JSON.stringify(products))
  }, [products])

  useEffect(() => {
    localStorage.setItem('sova-tones', JSON.stringify(tones))
  }, [tones])

  useEffect(() => {
    localStorage.setItem('sova-home-theme', homeDarkMode ? 'dark' : 'light')
  }, [homeDarkMode])

  const addProduct = (product) => setProducts((prev) => [...prev, product])
  const updateProduct = (updatedProduct) =>
    setProducts((prev) => prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)))
  const removeProduct = (id) => setProducts((prev) => prev.filter((product) => product.id !== id))

  const value = useMemo(() => ({
    products,
    setProducts,
    tones,
    setTones,
    user,
    setUser,
    addProduct,
    updateProduct,
    removeProduct,
    showCelebration,
    setShowCelebration,
    homeDarkMode,
    setHomeDarkMode
  }), [products, tones, user, showCelebration, homeDarkMode])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
