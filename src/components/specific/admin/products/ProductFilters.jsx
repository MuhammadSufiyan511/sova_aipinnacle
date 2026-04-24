import { Search } from 'lucide-react'

export function ProductFilters({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, filterOptions, translateOr, setCurrentPage }) {
  return (
    <div className="rounded-[22px] border border-[#DDEFE7] bg-white p-3.5 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1E293B]" />
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value)
              setCurrentPage(1)
            }}
            placeholder={translateOr('admin.products.controls.searchPlaceholder', 'Search products...')}
            className="h-11 w-full rounded-2xl border border-[#DDEFE7] bg-[#F8FAFC] pl-10 pr-4 text-[0.82rem] text-[#173247] outline-none transition focus:border-[#10B981] focus:bg-white"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => {
            const isActive = statusFilter === option.id
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setStatusFilter(option.id)
                  setCurrentPage(1)
                }}
                className={`rounded-full px-3.5 py-2 text-[0.72rem] font-bold transition ${isActive
                  ? 'bg-[#10B981] text-white shadow-[0_10px_24px_rgba(16,185,129,0.18)]'
                  : 'border border-[#DDEFE7] bg-white text-[#476977] hover:border-[#BFE7DA] hover:bg-[#F8FFFC]'
                  }`}
              >
                {option.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
