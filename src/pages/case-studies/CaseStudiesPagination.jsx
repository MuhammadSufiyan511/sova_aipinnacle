import { ChevronLeft, ChevronRight } from 'lucide-react'

export function CaseStudiesPagination({ isRtl, page, totalPages, onPageChange, t }) {
  if (totalPages <= 1) return null

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="inline-flex items-center gap-1 rounded-full border border-[#D1FAE5] bg-white px-4 py-2 text-sm font-semibold text-[#10B981] transition hover:bg-[#ECFDF5] disabled:cursor-not-allowed disabled:opacity-45"
      >
        {isRtl ? (
          <>
            {t('common.previous')} <ChevronRight className="h-4 w-4" />
          </>
        ) : (
          <>
            <ChevronLeft className="h-4 w-4" /> {t('common.previous')}
          </>
        )}
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          type="button"
          onClick={() => onPageChange(index + 1)}
          className={`h-10 min-w-10 rounded-full px-3 text-sm font-semibold transition ${
            page === index + 1 ? 'bg-[#10B981] text-white' : 'border border-[#D1FAE5] bg-white text-[#10B981] hover:bg-[#ECFDF5]'
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="inline-flex items-center gap-1 rounded-full border border-[#D1FAE5] bg-white px-4 py-2 text-sm font-semibold text-[#10B981] transition hover:bg-[#ECFDF5] disabled:cursor-not-allowed disabled:opacity-45"
      >
        {isRtl ? (
          <>
            <ChevronLeft className="h-4 w-4" /> {t('common.next')}
          </>
        ) : (
          <>
            {t('common.next')} <ChevronRight className="h-4 w-4" />
          </>
        )}
      </button>
    </div>
  )
}