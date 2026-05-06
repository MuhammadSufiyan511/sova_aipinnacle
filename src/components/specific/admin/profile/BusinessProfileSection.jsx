import { Edit3, ImagePlus, MapPin, Save, X, Trash } from 'lucide-react'
import { memo, useRef } from 'react'

export const BusinessProfileSection = memo(function BusinessProfileSection({
  t,
  isEditingBusiness,
  draftBusiness,
  businessDetails,
  setDraftBusiness,
  closeBusinessEditor,
  saveBusinessEditor,
  openBusinessEditor,
  handleBusinessImageChange
}) {
  const fileInputRef = useRef(null)

  return (
    <div className="rounded-[24px] border border-[#DDEFE7] bg-white p-5 shadow-sm sm:p-5 admin-card-shell">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-start">
        <h3 className="font-display text-[1rem] font-bold text-[#173247] text-center sm:text-left admin-card-title">
          {t('admin.profile.business.title', 'Business Profile')}
        </h3>
        {isEditingBusiness ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={closeBusinessEditor}
              className="inline-flex items-center gap-1 rounded-full border border-[#DDEFE7] px-3 py-1.5 text-[0.68rem] font-bold text-[#476172] transition hover:bg-[#F8FAFC]"
            >
              <X className="h-3.5 w-3.5" />
              {t('admin.profile.business.cancel', 'Cancel')}
            </button>
            <button
              type="button"
              onClick={saveBusinessEditor}
              className="inline-flex items-center gap-1 rounded-full bg-[#10B981] px-3 py-1.5 text-[0.68rem] font-bold text-white transition hover:scale-[1.02]"
            >
              <Save className="h-3.5 w-3.5" />
              {t('admin.profile.business.save', 'Save')}
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={openBusinessEditor}
            className="inline-flex items-center gap-1 rounded-full border border-[#DDEFE7] px-3 py-1.5 text-[0.68rem] font-bold text-[#476172] transition hover:bg-[#F8FAFC]"
          >
            <Edit3 className="h-3.5 w-3.5" />
            {t('admin.profile.business.edit', 'Edit')}
          </button>
        )}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 text-center sm:text-left admin-field-group">
          <div className="relative mx-auto h-36 w-full max-w-[220px] overflow-hidden rounded-2xl border border-[#DDEFE7] bg-white sm:mx-0">
            {draftBusiness.image ? (
              <img src={draftBusiness.image} alt={t('admin.profile.business.photoAlt', 'Business profile')} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[#6D8A88]">
                <ImagePlus className="h-6 w-6 text-emerald-500" />
                <span className="text-[0.72rem] font-semibold">
                  {t('admin.profile.business.noPhoto', 'No business photo')}
                </span>
              </div>
            )}
          </div>

          {isEditingBusiness ? (
            <>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleBusinessImageChange}
              />
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 rounded-full border border-[#BFE7DA] bg-white px-3 py-2 text-[0.72rem] font-bold text-[#0D8E73] transition hover:bg-[#ECFDF5]"
                >
                  <ImagePlus className="h-3.5 w-3.5" />
                  {t('admin.profile.business.uploadPhoto', 'Upload photo')}
                </button>
                {draftBusiness.image && (
                  <button
                    type="button"
                    onClick={() => setDraftBusiness((prev) => ({ ...prev, image: '' }))}
                    className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white px-3 py-2 text-[0.72rem] font-bold text-rose-500 transition hover:bg-rose-50"
                  >
                    <Trash className="h-3.5 w-3.5" />
                    {t('admin.profile.business.removePhoto', 'Remove')}
                  </button>
                )}
              </div>
            </>
          ) : null}
        </div>

        <div className="space-y-3">
          <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 text-left admin-field-group">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#1E293B]">
              {t('admin.profile.business.nameLabel', 'Business name')}
            </p>
            {isEditingBusiness ? (
              <input
                type="text"
                value={draftBusiness.name || ''}
                onChange={(e) => setDraftBusiness((prev) => ({ ...prev, name: e.target.value }))}
                placeholder={t('admin.profile.business.namePlaceholder', 'e.g. My Business')}
                className="mt-2 w-full rounded-xl border border-[#CDE7DD] bg-white px-3 py-2 text-[0.84rem] font-semibold text-[#295565] outline-none transition focus:border-[#10B981]"
              />
            ) : (
              <p className="mt-2 text-[0.84rem] font-semibold text-[#295565]">
                {businessDetails.name || t('admin.profile.business.emptyName', 'Add your business name')}
              </p>
            )}
          </div>

          <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 text-left admin-field-group">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#1E293B]">
              {t('admin.profile.business.descriptionLabel', 'Business description')}
            </p>
            {isEditingBusiness ? (
              <textarea
                value={draftBusiness.description || ''}
                onChange={(e) => setDraftBusiness((prev) => ({ ...prev, description: e.target.value }))}
                placeholder={t('admin.profile.business.descriptionPlaceholder', 'Tell buyers what you sell and why they choose you.')}
                rows={3}
                className="mt-2 w-full resize-none rounded-xl border border-[#CDE7DD] bg-white px-3 py-2 text-[0.84rem] font-medium text-[#295565] outline-none transition focus:border-[#10B981]"
              />
            ) : (
              <p className="mt-2 text-[0.84rem] font-semibold text-[#295565]">
                {businessDetails.description || t('admin.profile.business.emptyDescription', 'Add a short business description')}
              </p>
            )}
          </div>

          <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 text-left admin-field-group">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#1E293B]">
              {t('admin.profile.business.locationLabel', 'Business location')}
            </p>
            {isEditingBusiness ? (
              <input
                type="text"
                value={draftBusiness.location || ''}
                onChange={(e) => setDraftBusiness((prev) => ({ ...prev, location: e.target.value }))}
                placeholder={t('admin.profile.business.locationPlaceholder', 'e.g. Karachi, Pakistan')}
                className="mt-2 w-full rounded-xl border border-[#CDE7DD] bg-white px-3 py-2 text-[0.84rem] font-semibold text-[#295565] outline-none transition focus:border-[#10B981]"
              />
            ) : (
              <div className="mt-2 flex items-center gap-2 text-[#295565]">
                <MapPin className="h-4 w-4 text-emerald-500" />
                <span className="text-[0.84rem] font-semibold">
                  {businessDetails.location || t('admin.profile.business.emptyLocation', 'Add your location')}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
})
