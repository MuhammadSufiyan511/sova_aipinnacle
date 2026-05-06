import { motion as Motion } from 'framer-motion'
import { memo, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useProfileData } from '../../../hooks/useProfileData'

import { ProfileHeader } from './profile/ProfileHeader'
import { BusinessProfileSection } from './profile/BusinessProfileSection'
import { UserProfileSection } from './profile/UserProfileSection'
import { SummarySection } from './profile/SummarySection'

export const ProfileOverview = memo(function ProfileOverview() {
  const { t, user, setUser, businessDetails, setBusinessDetails, activity } = useProfileData()
  
  const [isEditingBusiness, setIsEditingBusiness] = useState(false)
  const [draftBusiness, setDraftBusiness] = useState(businessDetails)

  useEffect(() => {
    setDraftBusiness(businessDetails)
  }, [businessDetails])

  const handleBusinessImageChange = (event) => {
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
        <div className="flex flex-col gap-4">
          <ProfileHeader user={user} businessDetails={businessDetails} t={t} activity={activity} />
          
          <UserProfileSection 
            t={t} 
            user={user} 
            setUser={setUser} 
          />
        </div>

        <BusinessProfileSection
          t={t}
          isEditingBusiness={isEditingBusiness}
          draftBusiness={draftBusiness}
          businessDetails={businessDetails}
          setDraftBusiness={setDraftBusiness}
          closeBusinessEditor={closeBusinessEditor}
          saveBusinessEditor={saveBusinessEditor}
          openBusinessEditor={openBusinessEditor}
          handleBusinessImageChange={handleBusinessImageChange}
        />
      </div>

      <SummarySection t={t} />
    </Motion.div>
  )
})
