import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Eye, File as FileIcon, FileText, Image as ImageIcon, Pencil, PlayCircle, Plus, Search, Trash2, Video, Zap } from 'lucide-react'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { AddFileModal } from '../onboarding/AddFileModal'
import { ViewFileModal } from './files/ViewFileModal'
import { useFilesData } from '../../../hooks/useFilesData'
import { Pagination } from '../../shared/Pagination'
import { RadioToggle } from '../../shared/RadioToggle'

const gradients = [
  'from-cyan-400/20 to-teal-400/20',
  'from-violet-400/20 to-purple-400/20',
  'from-amber-400/20 to-orange-400/20',
  'from-blue-400/20 to-indigo-400/20',
  'from-rose-400/20 to-pink-400/20',
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const cardItem = { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } }
const PER_PAGE_OPTIONS = [12, 24, 48, 96, 'all']

const getTypeIcon = (type) => {
  if (type === 'image') return ImageIcon
  if (type === 'video') return Video
  return FileText
}

export const FilesOverview = memo(function FilesOverview() {
  const { t } = useTranslation()
  const {
    files, addFile, updateFile, removeFile,
    modalOpen, setModalOpen,
    editingFile, setEditingFile,
    viewingFile, setViewingFile,
    searchTerm, setSearchTerm,
    typeFilter, setTypeFilter,
    setCurrentPage,
    itemsPerPage, setItemsPerPage,
    isMobile, filteredFiles,
    totalPages, safePage, paginatedFiles,
    pageStart, pageEnd
  } = useFilesData()

  const translateOr = (key, fallback) => {
    const value = t(key)
    return value === key ? fallback : value
  }

  const filterOptions = [
    { id: 'all', label: translateOr('admin.files.controls.filters.all', 'All') },
    { id: 'image', label: translateOr('admin.files.controls.filters.image', 'Images') },
    { id: 'video', label: translateOr('admin.files.controls.filters.video', 'Videos') },
    { id: 'file', label: translateOr('admin.files.controls.filters.file', 'Files') },
  ]

  const openAddModal = () => {
    setEditingFile(null)
    setModalOpen(true)
  }

  const openEditModal = (file) => {
    setEditingFile(file)
    setModalOpen(true)
  }

  const toggleFileStatus = (file) => {
    updateFile({ ...file, isActive: !(file.isActive !== false) })
  }

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto flex w-[94%] flex-col gap-4 sm:w-full admin-products-shell">
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:items-center sm:text-left">
        <div>
          <h2 className="admin-card-title font-display text-[1.2rem] font-bold text-[#173247] sm:text-[1.4rem]">{t('admin.files.title')}</h2>
          <p className="text-[0.72rem] text-[#1E293B] sm:text-[0.78rem]">
            {t('admin.files.subtitle', { count: files.length, s: files.length !== 1 ? 's' : '' })}
          </p>
        </div>
        <Motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} onClick={openAddModal} className="admin-btn-primary flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-[0.78rem] font-bold text-white shadow-md shadow-cyan-500/20 transition hover:bg-cyan-600 sm:w-auto">
          <Plus className="h-4 w-4" /> {t('admin.files.newBtn')}
        </Motion.button>
      </div>

      <div className="admin-files-banner flex flex-col items-center gap-3 rounded-2xl border border-cyan-100 bg-cyan-50 px-3.5 py-3 text-center sm:flex-row sm:text-left">
        <Zap className="h-3.5 w-3.5 shrink-0 text-cyan-500" />
        <p className="text-[0.74rem] text-cyan-700">{t('admin.files.banner')}</p>
      </div>

      {files.length === 0 ? (
        <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="admin-files-empty flex flex-col items-center justify-center rounded-[22px] border-2 border-dashed border-[#DDEFE7] bg-white px-4 py-10 text-center sm:py-14">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F1FBFF] sm:h-12 sm:w-12">
            <FileIcon className="h-5 w-5 text-[#6B93A0] sm:h-6 sm:w-6" />
          </div>
          <p className="font-bold text-[#295565]">{t('admin.files.empty.title')}</p>
          <p className="mt-1 max-w-xs text-[0.74rem] text-[#1E293B]">{t('admin.files.empty.desc')}</p>
          <Motion.button whileHover={{ scale: 1.03 }} onClick={openAddModal} className="mt-5 flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 text-[0.78rem] font-bold text-white shadow-md shadow-cyan-500/20">
            <Plus className="h-4 w-4" /> {t('admin.files.empty.btn')}
          </Motion.button>
        </Motion.div>
      ) : (
        <>
          <div className="admin-files-controls rounded-[22px] border border-[#DDEFE7] bg-white p-3.5 shadow-sm">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-sm">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1E293B]" />
                <input type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1) }} placeholder={translateOr('admin.files.controls.searchPlaceholder', 'Search files...')} className="admin-files-search h-11 w-full rounded-2xl border border-[#DDEFE7] bg-[#F8FAFC] pl-10 pr-4 text-[0.82rem] text-[#173247] outline-none transition focus:border-cyan-500 focus:bg-white" />
              </div>
              <div className="flex flex-wrap gap-2">
                {filterOptions.map((option) => (
                  <button key={option.id} type="button" onClick={() => { setTypeFilter(option.id); setCurrentPage(1) }} className={`rounded-full px-3.5 py-2 text-[0.72rem] font-bold transition ${typeFilter === option.id ? 'bg-cyan-500 text-white shadow-[0_10px_24px_rgba(6,182,212,0.18)]' : 'border border-[#DDEFE7] bg-white text-[#476977] hover:border-cyan-200 hover:bg-[#F4FCFF]'}`}>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p className="text-[0.72rem] font-medium text-[#62808D]">
                {translateOr('admin.files.controls.pageInfo', '{{start}}-{{end}} of {{total}} files')
                  .replace('{{start}}', String(pageStart)).replace('{{end}}', String(pageEnd)).replace('{{total}}', String(filteredFiles.length))}
              </p>
              <div className="flex items-center justify-center gap-2 sm:justify-end">
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#1E293B]">{translateOr('admin.files.controls.show', 'Show')}</span>
                <select value={String(itemsPerPage)} onChange={(e) => { setItemsPerPage(e.target.value === 'all' ? 'all' : Number(e.target.value)); setCurrentPage(1) }} className="admin-files-select h-9 rounded-full border border-[#DDEFE7] bg-white px-3 text-[0.72rem] font-bold text-[#476977] outline-none transition focus:border-cyan-500">
                  {PER_PAGE_OPTIONS.map((option) => (
                    <option key={String(option)} value={String(option)}>{option === 'all' ? translateOr('admin.files.controls.all', 'All') : option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {paginatedFiles.length === 0 ? (
            <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="admin-files-empty flex flex-col items-center justify-center rounded-[22px] border border-dashed border-[#DDEFE7] bg-white px-4 py-12 text-center">
              <Search className="mb-3 h-9 w-9 text-[#86A29B]" />
              <p className="font-bold text-[#295565]">{translateOr('admin.files.controls.empty.title', 'No matching files')}</p>
              <p className="mt-1 max-w-sm text-[0.74rem] text-[#62808D]">{translateOr('admin.files.controls.empty.desc', 'Try a different search term or switch the file type filter.')}</p>
            </Motion.div>
          ) : (
            <Motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              <AnimatePresence mode="popLayout">
                {paginatedFiles.map((file, i) => {
                  const TypeIcon = getTypeIcon(file.mediaType)
                  return (
                    <Motion.div layout key={file.id} variants={cardItem} exit={{ opacity: 0, scale: 0.92 }} className={`group relative overflow-hidden rounded-[20px] border bg-white shadow-sm transition-all admin-item-row ${file.isActive !== false ? 'border-[#DDEFE7] hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/10' : 'border-[#E5E7EB] bg-[#FCFCFC] opacity-75 saturate-[0.35]'}`}>
                      <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${gradients[i % gradients.length]} admin-item-img-shell ${file.isActive !== false ? '' : 'grayscale'}`}>
                        {file.imagePreview ? (
                          file.mediaType === 'video' ? (
                            <div className="relative h-full w-full">
                              <video src={file.imagePreview} className={`h-full w-full object-cover transition duration-500 ${file.isActive !== false ? 'group-hover:scale-110' : 'blur-[4px] grayscale opacity-45 scale-[1.03]'}`} autoPlay muted loop playsInline />
                              <span className={`absolute inset-0 flex items-center justify-center text-white ${file.isActive !== false ? 'bg-slate-900/20' : 'bg-slate-900/45'}`}><PlayCircle className="h-9 w-9" /></span>
                            </div>
                          ) : file.mediaType === 'file' ? (
                            <div className={`admin-file-preview-card flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center ${file.isActive !== false ? 'bg-[#F1FBFF]' : 'bg-[#F5F5F5] opacity-55 grayscale'}`}>
                              <span className="admin-file-preview-icon flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm"><FileText className="h-6 w-6 text-cyan-600" /></span>
                              <span className="admin-file-preview-name line-clamp-2 text-[0.7rem] font-semibold text-[#295565]">{file.mediaName || file.name}</span>
                            </div>
                          ) : (
                            <img src={file.imagePreview} alt={file.name} className={`h-full w-full object-cover transition duration-500 ${file.isActive !== false ? 'group-hover:scale-110' : 'blur-[4px] grayscale opacity-45 scale-[1.03]'}`} />
                          )
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-black/5 text-black/20"><TypeIcon className="h-10 w-10" /></div>
                        )}
                        <div className="absolute left-2 top-2 flex flex-col gap-1">
                          <span className={`admin-files-status-pill inline-flex items-center rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] shadow-sm ${file.isActive !== false ? 'bg-cyan-500/90 text-white' : 'bg-white/90 text-[#6B7280]'}`}>{file.isActive !== false ? t('admin.files.item.active') : t('admin.files.item.inactive')}</span>
                          <span className="admin-files-type-pill inline-flex items-center gap-1 rounded-full bg-white/85 px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#173247] shadow-sm"><TypeIcon className="h-3 w-3" />{t(`admin.files.item.types.${file.mediaType || 'file'}`)}</span>
                        </div>
                      </div>

                      <div className={`p-3.5 text-center sm:text-left admin-item-content ${file.isActive !== false ? '' : 'text-[#7A8A93]'}`}>
                        <p className={`text-[0.88rem] font-bold admin-item-title ${file.isActive !== false ? 'text-[#173247]' : 'text-[#7A8A93]'}`}>{file.name}</p>
                        {file.description ? <p className="mt-1 line-clamp-2 text-[0.72rem] leading-5 text-[#62808D]">{file.description}</p> : null}
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <button onClick={() => setViewingFile(file)} className="admin-btn-secondary inline-flex items-center justify-center gap-1.5 rounded-full border border-[#DDEFE7] px-3 py-2 text-[0.68rem] font-bold text-[#476977] transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-600"><Eye className="h-3.5 w-3.5" />{t('admin.files.item.view')}</button>
                          <div className="flex items-center"><RadioToggle id={`file-${file.id}`} active={file.isActive !== false} onChange={() => toggleFileStatus(file)} activeColor="bg-cyan-500" /></div>
                          <button onClick={() => openEditModal(file)} className="admin-btn-secondary inline-flex items-center justify-center gap-1.5 rounded-full border border-[#DDEFE7] px-3 py-2 text-[0.68rem] font-bold text-[#476977] transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-600"><Pencil className="h-3.5 w-3.5" />{t('admin.common.edit')}</button>
                          <button onClick={() => removeFile(file.id)} className="admin-btn-danger inline-flex items-center justify-center rounded-full border border-[#DDEFE7] p-2 text-red-500 transition hover:border-red-200 hover:bg-red-50"><Trash2 className="h-3.5 w-3.5" /></button>
                        </div>
                      </div>
                    </Motion.div>
                  )
                })}
              </AnimatePresence>
            </Motion.div>
          )}

          <Pagination totalPages={totalPages} currentPage={safePage} setCurrentPage={setCurrentPage} activeColor="bg-cyan-500" activeShadow="shadow-[0_10px_24px_rgba(6,182,212,0.18)]" />
        </>
      )}

      <AddFileModal key={editingFile?.id || 'new-file'} isOpen={modalOpen} onClose={() => { setModalOpen(false); setEditingFile(null) }} onAdd={addFile} onSave={updateFile} initialFile={editingFile} />
      <ViewFileModal viewingFile={viewingFile} setViewingFile={setViewingFile} isMobile={isMobile} />
    </Motion.div>
  )
})
