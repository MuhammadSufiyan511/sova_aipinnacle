import { Edit3, ImagePlus, Mail, Phone, Save, X, Trash } from 'lucide-react'
import { memo, useRef, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

export const UserProfileSection = memo(function UserProfileSection({
  t,
  user,
  setUser
}) {
  const [isEditingUser, setIsEditingUser] = useState(false)
  const [draftUser, setDraftUser] = useState(user)
  const fileInputRef = useRef(null)

  useEffect(() => {
    setDraftUser(user)
  }, [user])

  const openUserEditor = () => {
    setDraftUser(user)
    setIsEditingUser(true)
  }

  const closeUserEditor = () => {
    setDraftUser(user)
    setIsEditingUser(false)
  }

  const saveUserEditor = () => {
    setUser({
      ...user,
      name: draftUser.name?.trim() || '',
      email: draftUser.email?.trim() || '',
      phone: draftUser.phone?.trim() || '',
      avatar: draftUser.avatar || ''
    })
    setIsEditingUser(false)
  }

  const handleUserImageChange = (event) => {
    const file = event.target.files?.[0]
    if (!file || !file.type.startsWith('image/')) return

    const MAX_IMAGE_SIZE = 5 * 1024 * 1024 // 5MB
    if (file.size > MAX_IMAGE_SIZE) {
      toast.error(
        (toastObj) => (
          <span>
            <b>{file.name}</b> {t('admin.addProductOverview.validation.imageTooLarge', 'exceeds 5MB.')}
            <br />
            <a href="https://tinypng.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 underline font-bold ml-1">
              {t('admin.addProductOverview.validation.compressLink', 'Compress here')}
            </a>
          </span>
        ),
        { duration: 6000 }
      )
      event.target.value = ''
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      setDraftUser((prev) => ({ ...prev, avatar: reader.result }))
    }
    reader.readAsDataURL(file)
    event.target.value = ''
  }

  return (
    <div className="rounded-[24px] border border-[#DDEFE7] bg-white p-5 shadow-sm sm:p-5 admin-card-shell">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-start">
        <h3 className="font-display text-[1rem] font-bold text-[#173247] text-center sm:text-left admin-card-title">
          {t('admin.profile.user.title', 'User Profile')}
        </h3>
        {isEditingUser ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={closeUserEditor}
              className="inline-flex items-center gap-1 rounded-full border border-[#DDEFE7] px-3 py-1.5 text-[0.68rem] font-bold text-[#476172] transition hover:bg-[#F8FAFC]"
            >
              <X className="h-3.5 w-3.5" />
              {t('admin.profile.user.cancel', 'Cancel')}
            </button>
            <button
              type="button"
              onClick={saveUserEditor}
              className="inline-flex items-center gap-1 rounded-full bg-[#10B981] px-3 py-1.5 text-[0.68rem] font-bold text-white transition hover:scale-[1.02]"
            >
              <Save className="h-3.5 w-3.5" />
              {t('admin.profile.user.save', 'Save')}
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={openUserEditor}
            className="inline-flex items-center gap-1 rounded-full border border-[#DDEFE7] px-3 py-1.5 text-[0.68rem] font-bold text-[#476172] transition hover:bg-[#F8FAFC]"
          >
            <Edit3 className="h-3.5 w-3.5" />
            {t('admin.profile.user.edit', 'Edit')}
          </button>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="flex shrink-0 flex-col items-center sm:items-start">
          <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-[#F2FBF7] shadow-sm bg-white">
            {draftUser.avatar ? (
              <img src={draftUser.avatar} alt={t('admin.profile.user.photoAlt', 'User profile')} className="h-full w-full object-cover" />
            ) : (
              <span className="text-3xl font-bold text-emerald-500">{(draftUser.name || 'U')[0]}</span>
            )}
          </div>

          {isEditingUser ? (
            <div className="mt-3 flex flex-col items-center sm:items-start">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleUserImageChange}
              />
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#BFE7DA] bg-[#F2FBF7] px-3 py-1.5 text-[0.68rem] font-bold text-[#0D8E73] transition hover:bg-[#ECFDF5]"
                >
                  <ImagePlus className="h-3.5 w-3.5" />
                  {t('admin.profile.user.uploadPhoto', 'Upload photo')}
                </button>
                {draftUser.avatar && (
                  <button
                    type="button"
                    onClick={() => setDraftUser((prev) => ({ ...prev, avatar: '' }))}
                    className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-[#F2FBF7] px-3 py-1.5 text-[0.68rem] font-bold text-rose-500 transition hover:bg-rose-50"
                  >
                    <Trash className="h-3.5 w-3.5" />
                    {t('admin.profile.user.removePhoto', 'Remove')}
                  </button>
                )}
              </div>
            </div>
          ) : null}
        </div>

        <div className="w-full space-y-3">
          <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 text-left admin-field-group">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#1E293B]">
              {t('admin.profile.user.nameLabel', 'Full Name')}
            </p>
            {isEditingUser ? (
              <input
                type="text"
                value={draftUser.name || ''}
                onChange={(e) => setDraftUser((prev) => ({ ...prev, name: e.target.value }))}
                placeholder={t('admin.profile.user.namePlaceholder', 'e.g. John Doe')}
                className="mt-2 w-full rounded-xl border border-[#CDE7DD] bg-white px-3 py-2 text-[0.84rem] font-semibold text-[#295565] outline-none transition focus:border-[#10B981]"
              />
            ) : (
              <p className="mt-2 text-[0.84rem] font-semibold text-[#295565]">
                {user.name || t('admin.profile.user.emptyName', 'Add your full name')}
              </p>
            )}
          </div>

          <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 text-left admin-field-group">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#1E293B]">
              {t('admin.profile.user.emailLabel', 'Email Address')}
            </p>
            {isEditingUser ? (
              <input
                type="email"
                value={draftUser.email || ''}
                onChange={(e) => setDraftUser((prev) => ({ ...prev, email: e.target.value }))}
                placeholder={t('admin.profile.user.emailPlaceholder', 'e.g. john@example.com')}
                className="mt-2 w-full rounded-xl border border-[#CDE7DD] bg-white px-3 py-2 text-[0.84rem] font-medium text-[#295565] outline-none transition focus:border-[#10B981]"
              />
            ) : (
              <div className="mt-2 flex items-center gap-2 text-[#295565]">
                <Mail className="h-4 w-4 text-emerald-500" />
                <span className="text-[0.84rem] font-semibold">
                  {user.email || t('admin.profile.user.emptyEmail', 'Add your email')}
                </span>
              </div>
            )}
          </div>

          <div className="rounded-[20px] bg-[#F2FBF7] p-3.5 text-left admin-field-group">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#1E293B]">
              {t('admin.profile.user.phoneLabel', 'Phone Number')}
            </p>
            {isEditingUser ? (
              <input
                type="tel"
                value={draftUser.phone || ''}
                onChange={(e) => setDraftUser((prev) => ({ ...prev, phone: e.target.value }))}
                placeholder={t('admin.profile.user.phonePlaceholder', 'e.g. +92 300 1234567')}
                className="mt-2 w-full rounded-xl border border-[#CDE7DD] bg-white px-3 py-2 text-[0.84rem] font-semibold text-[#295565] outline-none transition focus:border-[#10B981]"
              />
            ) : (
              <div className="mt-2 flex items-center gap-2 text-[#295565]">
                <Phone className="h-4 w-4 text-emerald-500" />
                <span className="text-[0.84rem] font-semibold">
                  {user.phone || t('admin.profile.user.emptyPhone', 'Add your phone number')}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
})
