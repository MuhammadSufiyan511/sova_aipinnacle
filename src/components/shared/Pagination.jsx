import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

export const Pagination = memo(function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
  activeColor = 'bg-cyan-500',
  activeShadow = 'shadow-[0_10px_24px_rgba(6,182,212,0.18)]'
}) {
  const { t } = useTranslation()

  if (totalPages <= 1) return null

  return (
    <div className="admin-pagination flex flex-col items-center justify-center gap-3 rounded-[20px] border border-[#DDEFE7] bg-white px-4 py-4 shadow-sm md:flex-row md:justify-between">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            onClick={() => setCurrentPage(pageNumber)}
            className={`inline-flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-[0.72rem] font-bold transition ${
              currentPage === pageNumber
                ? `${activeColor} text-white ${activeShadow}`
                : 'border border-[#DDEFE7] bg-white text-[#476977] hover:bg-[#F8FFFC]'
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
          disabled={currentPage === 1}
          className="inline-flex items-center gap-2 rounded-full border border-[#DDEFE7] px-4 py-2 text-[0.74rem] font-bold text-[#476977] transition hover:bg-[#F8FFFC] disabled:cursor-not-allowed disabled:opacity-45"
        >
          <ChevronLeft className="h-4 w-4" />
          {t('common.previous')}
        </button>
        <button
          type="button"
          onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
          disabled={currentPage === totalPages}
          className="inline-flex items-center gap-2 rounded-full border border-[#DDEFE7] px-4 py-2 text-[0.74rem] font-bold text-[#476977] transition hover:bg-[#F8FFFC] disabled:cursor-not-allowed disabled:opacity-45"
        >
          {t('common.next')}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
})
