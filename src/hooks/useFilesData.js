import { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useApp } from '../context/AppProvider'

export function useFilesData() {
  const { t } = useTranslation()
  const { files, addFile, updateFile, removeFile } = useApp()
  const [modalOpen, setModalOpen] = useState(false)
  const [editingFile, setEditingFile] = useState(null)
  const [viewingFile, setViewingFile] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(24)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const filteredFiles = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return files.filter((file) => {
      const matchesFilter = typeFilter === 'all' || file.mediaType === typeFilter
      if (!matchesFilter) return false
      if (!normalizedSearch) return true

      return [file.name, file.description, file.mediaName]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(normalizedSearch))
    })
  }, [files, searchTerm, typeFilter])

  const normalizedItemsPerPage = itemsPerPage === 'all' ? Math.max(filteredFiles.length, 1) : itemsPerPage
  const totalPages = Math.max(1, Math.ceil(filteredFiles.length / normalizedItemsPerPage))
  const safePage = Math.min(currentPage, totalPages)
  const paginatedFiles = itemsPerPage === 'all'
    ? filteredFiles
    : filteredFiles.slice((safePage - 1) * normalizedItemsPerPage, safePage * normalizedItemsPerPage)
  
  const pageStart = filteredFiles.length === 0 ? 0 : (safePage - 1) * normalizedItemsPerPage + 1
  const pageEnd = Math.min(safePage * normalizedItemsPerPage, filteredFiles.length)

  return {
    files, addFile, updateFile, removeFile,
    modalOpen, setModalOpen,
    editingFile, setEditingFile,
    viewingFile, setViewingFile,
    searchTerm, setSearchTerm,
    typeFilter, setTypeFilter,
    currentPage, setCurrentPage,
    itemsPerPage, setItemsPerPage,
    isMobile,
    filteredFiles,
    totalPages,
    safePage,
    paginatedFiles,
    pageStart,
    pageEnd
  }
}
