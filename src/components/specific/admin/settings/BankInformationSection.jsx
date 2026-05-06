import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Landmark, Pencil } from 'lucide-react'
import { memo, useState } from 'react'
import { useApp } from '../../../../context/AppProvider'
import { BankEditForm } from './BankEditForm'
import { BankViewMode } from './BankViewMode'

const stagger = { show: { transition: { staggerChildren: 0.055 } } }

export const BankInformationSection = memo(function BankInformationSection({
  t, bankDetails, setBankDetails, saveBankDetails,
  isEditing, setIsEditing, onCancel, onDelete,
}) {
  const { homeDarkMode: dm } = useApp()
  const [touched, setTouched] = useState({})
  const [saved,   setSaved]   = useState(false)
  const hasData = !!bankDetails.accountNumber

  const mark = (f) => setTouched(p => ({ ...p, [f]: true }))
  const req  = t('admin.settings.bank.required', 'Required')
  const errors = {
    accountTitle:  touched.accountTitle  && !bankDetails.accountTitle  ? req : null,
    bankName:      touched.bankName      && !bankDetails.bankName      ? req : null,
    accountNumber: touched.accountNumber && !bankDetails.accountNumber ? req : null,
  }

  const handleSave = () => {
    setTouched({ accountTitle: true, bankName: true, accountNumber: true })
    if (!bankDetails.accountTitle || !bankDetails.bankName || !bankDetails.accountNumber) return
    saveBankDetails()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <Motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`overflow-hidden rounded-[26px] border shadow-sm admin-card-shell ${
        dm ? 'bg-[#0A1628] border-blue-900/20' : 'bg-white border-[#DDEFE7]'
      }`}
    >
      {/* ── Header ── */}
      <div className={`relative overflow-hidden px-5 py-4 border-b ${
        dm ? 'bg-gradient-to-r from-blue-950/90 via-indigo-950/60 to-blue-950/90 border-blue-900/20'
           : 'bg-gradient-to-r from-blue-50/90 via-indigo-50/40 to-blue-50/90 border-blue-100'
      }`}>
        {/* decorative glow */}
        <div className={`pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full blur-3xl ${dm ? 'bg-blue-500/8' : 'bg-blue-400/12'}`} />
        <div className={`pointer-events-none absolute -left-4 -bottom-4 h-20 w-20 rounded-full blur-3xl ${dm ? 'bg-indigo-500/8' : 'bg-indigo-400/10'}`} />

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ring-1 ${
              dm ? 'bg-blue-500/12 text-blue-400 ring-blue-500/20' : 'bg-blue-100 text-blue-600 ring-blue-200/60'
            }`}>
              <Landmark className="h-5 w-5" />
            </div>
            <div>
              <h3 className={`text-[0.8rem] font-black uppercase tracking-[0.16em] admin-card-title ${dm ? 'text-blue-400' : 'text-blue-600'}`}>
                {t('admin.settings.sections.bank.title', 'Bank Information')}
              </h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className={`inline-block h-1.5 w-1.5 rounded-full ${hasData ? 'bg-emerald-400' : (dm ? 'bg-slate-600' : 'bg-slate-300')}`} />
                <p className={`text-[0.63rem] font-medium ${dm ? 'text-slate-500' : 'text-slate-400'}`}>
                  {hasData
                    ? t('admin.settings.bank.configured', 'Payment details configured')
                    : t('admin.settings.bank.notConfigured', 'No details added yet')}
                </p>
              </div>
            </div>
          </div>

          {!isEditing && hasData && (
            <Motion.button
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}
              onClick={() => setIsEditing(true)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[0.7rem] font-bold transition ${
                dm ? 'bg-blue-500/15 text-blue-400 hover:bg-blue-500/25 ring-1 ring-blue-500/25'
                   : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-600/20'
              }`}
            >
              <Pencil className="h-3 w-3" />
              {t('common.edit', 'Edit')}
            </Motion.button>
          )}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="p-5">
        <AnimatePresence mode="wait">
          {isEditing ? (
            <Motion.div key="edit" variants={stagger} initial="hidden" animate="show" exit="exit" className="space-y-4">
              <BankEditForm
                t={t} bankDetails={bankDetails} setBankDetails={setBankDetails}
                errors={errors} mark={mark} saved={saved}
                onCancel={onCancel} onSave={handleSave} dm={dm}
              />
            </Motion.div>
          ) : (
            <Motion.div key="view" variants={stagger} initial="hidden" animate="show" exit="exit">
              <BankViewMode t={t} bankDetails={bankDetails} setIsEditing={setIsEditing} onDelete={onDelete} dm={dm} />
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </Motion.section>
  )
})
