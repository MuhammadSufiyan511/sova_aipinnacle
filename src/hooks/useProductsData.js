import { useMemo, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useApp } from '../context/AppProvider'

export function useProductsData() {
  const { t } = useTranslation()
  const { products, toggleProductStatus, removeProduct } = useApp()
  
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all') // all, active, inactive
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(24)

  const stats = useMemo(() => {
    return {
      total: products.length,
      active: products.filter(p => p.isActive !== false).length,
      inactive: products.filter(p => p.isActive === false).length,
    }
  }, [products])

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()
    return products.filter((product) => {
      // 1. Status Filter
      if (statusFilter === 'active' && product.isActive === false) return false
      if (statusFilter === 'inactive' && product.isActive !== false) return false

      // 2. Search Filter
      if (!normalizedSearch) return true
      return [
        product.name,
        product.sku,
        product.description,
        product.category,
        product.subcategory,
      ]
        .filter(Boolean)
        .some((val) => String(val).toLowerCase().includes(normalizedSearch))
    })
  }, [products, searchTerm, statusFilter])

  const normalizedItemsPerPage = itemsPerPage === 'all' ? Math.max(filteredProducts.length, 1) : itemsPerPage
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / normalizedItemsPerPage))
  const safePage = Math.min(currentPage, totalPages)
  
  const paginatedProducts = itemsPerPage === 'all' 
    ? filteredProducts 
    : filteredProducts.slice((safePage - 1) * normalizedItemsPerPage, safePage * normalizedItemsPerPage)
    
  const pageStart = filteredProducts.length === 0 ? 0 : (safePage - 1) * normalizedItemsPerPage + 1
  const pageEnd = Math.min(safePage * normalizedItemsPerPage, filteredProducts.length)

  return {
    t,
    products, toggleProductStatus, removeProduct,
    searchTerm, setSearchTerm,
    statusFilter, setStatusFilter,
    currentPage, setCurrentPage,
    itemsPerPage, setItemsPerPage,
    stats,
    filteredProducts,
    paginatedProducts,
    totalPages,
    safePage,
    pageStart,
    pageEnd
  }
}
