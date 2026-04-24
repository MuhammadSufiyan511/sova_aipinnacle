import { motion as Motion } from 'framer-motion'
import { Edit3, ImagePlus, MapPin, Save, ShieldCheck, UserRound, X } from 'lucide-react'
import { memo, useEffect, useRef, useState } from 'react'
import { useProfileData } from '../../../hooks/useProfileData'

export const ProfileOverview = memo(function ProfileOverview() {
  const { t, user, businessDetails, setBusinessDetails, activity } = useProfileData()
  const fileInputRef = useRef(null)
  const [isEditingBusiness, setIsEditingBusiness] = useState(false)
  const [draftBusiness, setDraftBusiness] = useState(businessDetails)

  useEffect(() => {
    setDraftBusiness(businessDetails)
  }, [businessDetails])

  const handleBusinessImageChange = (event) => {
    const file = event.target.files?.[0]
    if (!file || !file.type.startsWith('image/')) return

    const reader = new FileReader()
    reader.onload = () => {
      setDraftBusiness((prev) => ({ ...prev, image: reader.result }))
    }
    reader.readAsDataURL(file)
    event.target.value = ''
  }

  const openBusinessEditor = () => {
    setDraftBusiness(businessDetails)
    setIsEditingBusiness(true)
  }

  const closeBusinessEditor = () => {
    setDraftBusiness(businessDetails)
    setIsEditingBusiness(false)
  }

  const saveBusinessEditor = () => {
    setBusinessDetails({
      name: draftBusiness.name?.trim() || '',
      description: draftBusiness.description?.trim() || '',
      location: draftBusiness.location?.trim() || '',
      image: draftBusiness.image || ''
    })
    setIsEditingBusiness(false)
  }

  return (
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto flex w-[94%] flex-col gap-4 sm:w-full admin-profile-shell">
      <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[24px] border border-[#DDEFE7] bg-white p-5 shadow-sm sm:p-5 admin-card-shell">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-emerald-400 to-teal-500 text-base font-bold text-white shadow-[0_16px_34px_rgba(16,185,129,0.22)] sm:h-14 sm:w-14 sm:rounded-[20px] sm:text-lg">
                {(user.name || 'U')[0]}
              </div>
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-emerald-500 sm:text-[0.68rem]">{t('admin.profile.header.label')}</p>
                <h2 className="mt-1 font-display text-[1.2rem] font-bold text-[#173247] sm:mt-2 sm:text-[1.35rem] admin-card-title">{user.name || 'User'}</h2>
                <p className="mt-1 text-[0.78rem] leading-5 text-[#1E293B] sm:text-[0.82rem]">{t('admin.profile.header.desc')}</p>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-emerald-700 admin-pill">
              <ShieldCheck className="h-4 w-4" />
              {t('admin.profile.plan', { name: user.plan || 'Free' })}
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3">
            {activity.map((item) => (
              <div key={item.label} className="rounded-[20px] bg-[#F2FBF7] p-3.5 text-center admin-field-group">
                <span className={`mx-auto flex h-10 w-10 items-center justify-center rounded-2xl ${item.tint} sm:mx-0 shadow-sm admin-item-icon`}>
                  <item.icon className="h-4.5 w-4.5" />
                </span>
                <p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#1E293B]">{item.label}</p>
                <p className="mt-1 font-display text-[1.4rem] font-extrabold text-[#173247]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

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
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#BFE7DA] bg-white px-3 py-2 text-[0.72rem] font-bold text-[#0D8E73] transition hover:bg-[#ECFDF5]"
                  >
                    <ImagePlus className="h-3.5 w-3.5" />
                    {t('admin.profile.business.uploadPhoto', 'Upload photo')}
                  </button>
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
      </div>

      <div className="rounded-[24px] border border-[#DDEFE7] bg-gradient-to-br from-white to-[#F2FBF7] p-5 shadow-sm sm:p-5 admin-card-shell">
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm admin-item-icon">
            <UserRound className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-[0.96rem] font-bold text-[#173247] admin-card-title">{t('admin.profile.summary.title')}</h3>
            <p className="text-[0.78rem] text-[#1E293B]">{t('admin.profile.summary.desc')}</p>
          </div>
        </div>
      </div>
    </Motion.div>
  )
})
