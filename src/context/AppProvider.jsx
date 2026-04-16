/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, useMemo } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [businessProfile, setBusinessProfile] = useState(() => {
    const saved = localStorage.getItem('sova-business-profile')
    return saved ? JSON.parse(saved) : { type: 'clothing', customCategory: '' }
  })

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('sova-products')
    return saved ? JSON.parse(saved) : []
  })

  const [files, setFiles] = useState(() => {
    const saved = localStorage.getItem('sova-files')
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
    localStorage.setItem('sova-files', JSON.stringify(files))
  }, [files])

  useEffect(() => {
    localStorage.setItem('sova-tones', JSON.stringify(tones))
  }, [tones])

  useEffect(() => {
    localStorage.setItem('sova-home-theme', homeDarkMode ? 'dark' : 'light')
  }, [homeDarkMode])

  useEffect(() => {
    localStorage.setItem('sova-business-profile', JSON.stringify(businessProfile))
  }, [businessProfile])

  const addProduct = (product) => {
    if (product?.mediaType === 'file') {
      setFiles((prev) => [...prev, product])
      return
    }

    setProducts((prev) => [...prev, product])
  }

  const updateProduct = (updatedProduct) => {
    if (updatedProduct?.mediaType === 'file') {
      setProducts((prev) => prev.filter((product) => product.id !== updatedProduct.id))
      setFiles((prev) => {
        const hasExisting = prev.some((file) => file.id === updatedProduct.id)
        return hasExisting
          ? prev.map((file) => (file.id === updatedProduct.id ? updatedProduct : file))
          : [...prev, updatedProduct]
      })
      return
    }

    setFiles((prev) => prev.filter((file) => file.id !== updatedProduct.id))
    setProducts((prev) => {
      const hasExisting = prev.some((product) => String(product.id) === String(updatedProduct.id))
      return hasExisting
        ? prev.map((product) => (String(product.id) === String(updatedProduct.id) ? updatedProduct : product))
        : [...prev, updatedProduct]
    })
  }
  const removeProduct = (id) => setProducts((prev) => prev.filter((product) => String(product.id) !== String(id)))
  const addFile = (file) => setFiles((prev) => [...prev, file])
  const updateFile = (updatedFile) =>
    setFiles((prev) => prev.map((file) => (file.id === updatedFile.id ? updatedFile : file)))
  const removeFile = (id) => setFiles((prev) => prev.filter((file) => file.id !== id))

  const value = useMemo(() => ({
    businessProfile,
    setBusinessProfile,
    products,
    setProducts,
    files,
    setFiles,
    tones,
    setTones,
    user,
    setUser,
    addProduct,
    updateProduct,
    removeProduct,
    addFile,
    updateFile,
    removeFile,
    showCelebration,
    setShowCelebration,
    homeDarkMode,
    setHomeDarkMode
  }), [businessProfile, products, files, tones, user, showCelebration, homeDarkMode])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
