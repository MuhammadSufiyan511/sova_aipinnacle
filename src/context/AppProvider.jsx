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

  const [businessDetails, setBusinessDetails] = useState(() => {
    const saved = localStorage.getItem('sova-business-details')
    return saved
      ? JSON.parse(saved)
      : {
          name: '',
          description: '',
          location: '',
          image: ''
        }
  })

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('sova-user')
    return saved ? JSON.parse(saved) : { name: 'User', plan: 'Free', email: '', phone: '', avatar: '' }
  })

  const [bankDetails, setBankDetails] = useState(() => {
    const saved = localStorage.getItem('sova-bank-details')
    return saved ? JSON.parse(saved) : { accountTitle: '', accountNumber: '', bankName: '', description: '' }
  })

  const [showCelebration, setShowCelebration] = useState(false)
  const [homeDarkMode, setHomeDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    const saved = localStorage.getItem('sova-home-theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
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
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      if (!localStorage.getItem('sova-home-theme')) {
        setHomeDarkMode(e.matches)
      }
    }
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    localStorage.setItem('sova-business-profile', JSON.stringify(businessProfile))
  }, [businessProfile])

  useEffect(() => {
    try {
      localStorage.setItem('sova-business-details', JSON.stringify(businessDetails))
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        console.error('Storage quota exceeded. Please use smaller images.')
      }
    }
  }, [businessDetails])

  useEffect(() => {
    try {
      localStorage.setItem('sova-user', JSON.stringify(user))
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        console.error('Storage quota exceeded. Please use a smaller avatar.')
      }
    }
  }, [user])

  useEffect(() => {
    localStorage.setItem('sova-bank-details', JSON.stringify(bankDetails))
  }, [bankDetails])

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

  const toggleHomeDarkMode = () => {
    const newMode = !homeDarkMode
    setHomeDarkMode(newMode)
    localStorage.setItem('sova-home-theme', newMode ? 'dark' : 'light')
  }

  const value = useMemo(() => ({
    businessProfile,
    setBusinessProfile,
    products,
    setProducts,
    files,
    setFiles,
    tones,
    setTones,
    businessDetails,
    setBusinessDetails,
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
    setHomeDarkMode,
    toggleHomeDarkMode,
    bankDetails,
    setBankDetails
  }), [businessProfile, products, files, tones, businessDetails, user, showCelebration, homeDarkMode, bankDetails])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error('useApp must be used within AppProvider')
  return context
}
