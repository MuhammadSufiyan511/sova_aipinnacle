import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Save, X, CreditCard, Building2, Hash, FileText, CheckCircle2 } from 'lucide-react'
import { InputField, FieldLabel } from './BankSubComponents'

const fieldItem = {
  hidden: { opacity: 0, y: 8 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
}

export function BankEditForm({ t, bankDetails, setBankDetails, errors, mark, onCancel, onSave, saved, dm }) {
  return (
    <div className="space-y-4">
      {/* Row 1 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Motion.div variants={fieldItem}>
          <InputField
            id="accountTitle"
            label={t('admin.settings.bank.accountTitle', 'Account Holder')}
            icon={<CreditCard className="h-3.5 w-3.5" />}
            value={bankDetails.accountTitle}
            onChange={v => setBankDetails({ ...bankDetails, accountTitle: v })}
            onBlur={() => mark('accountTitle')}
            placeholder={t('admin.settings.bank.accountTitlePlaceholder', 'e.g. John Doe')}
            error={errors.accountTitle}
            hint={t('admin.settings.bank.accountTitleHint', 'As it appears on your bank account')}
            dm={dm}
          />
        </Motion.div>
        <Motion.div variants={fieldItem}>
          <InputField
            id="bankName"
            label={t('admin.settings.bank.bankName', 'Bank Name')}
            icon={<Building2 className="h-3.5 w-3.5" />}
            value={bankDetails.bankName}
            onChange={v => setBankDetails({ ...bankDetails, bankName: v })}
            onBlur={() => mark('bankName')}
            placeholder={t('admin.settings.bank.bankNamePlaceholder', 'e.g. HBL, Alfalah, Meezan')}
            error={errors.bankName}
            dm={dm}
          />
        </Motion.div>
      </div>

      {/* IBAN */}
      <Motion.div variants={fieldItem}>
        <InputField
          id="accountNumber"
          label={t('admin.settings.bank.accountNumber', 'Account Number / IBAN')}
          icon={<Hash className="h-3.5 w-3.5" />}
          value={bankDetails.accountNumber}
          onChange={v => setBankDetails({ ...bankDetails, accountNumber: v })}
          onBlur={() => mark('accountNumber')}
          placeholder={t('admin.settings.bank.accountNumberPlaceholder', 'e.g. PK00 BANK 0000 0000 0000 0000')}
          error={errors.accountNumber}
          hint={t('admin.settings.bank.ibanHint', 'IBAN is typically 24 characters for Pakistani accounts')}
          mono
          dm={dm}
        />
      </Motion.div>

      {/* Description */}
      <Motion.div variants={fieldItem} className="space-y-1.5">
        <FieldLabel icon={<FileText className="h-3.5 w-3.5" />} dm={dm}>
          {t('admin.settings.bank.description', 'Payment Instructions')}
        </FieldLabel>
        <textarea
          value={bankDetails.description}
          onChange={e => setBankDetails({ ...bankDetails, description: e.target.value })}
          placeholder={t('admin.settings.bank.descriptionPlaceholder', 'e.g. Please include order ID in transfer remarks')}
          rows={2}
          className={`w-full resize-none rounded-2xl border px-4 py-3 text-[0.8rem] leading-relaxed outline-none transition-all duration-200 ${
            dm
              ? 'bg-slate-900/60 border-blue-900/25 text-slate-200 placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10'
              : 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10'
          }`}
        />
      </Motion.div>

      {/* Success toast */}
      <AnimatePresence>
        {saved && (
          <Motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-[0.72rem] font-bold ${
              dm ? 'bg-emerald-950/40 text-emerald-400 ring-1 ring-emerald-900/30' : 'bg-emerald-50 text-emerald-600'
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            {t('admin.settings.bank.savedSuccess', 'Bank details saved successfully!')}
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <Motion.div variants={fieldItem} className="flex items-center justify-between gap-3 pt-1">
        <Motion.button
          type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
          onClick={onCancel}
          className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-[0.72rem] font-bold transition ${
            dm ? 'border-slate-700 text-slate-400 hover:bg-slate-800/60' : 'border-slate-200 text-slate-500 hover:bg-slate-50'
          }`}
        >
          <X className="h-3.5 w-3.5" />
          {t('common.cancel', 'Cancel')}
        </Motion.button>
        <Motion.button
          type="button" whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.97 }}
          onClick={onSave}
          className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-[0.72rem] font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 hover:shadow-blue-600/40"
        >
          <Save className="h-3.5 w-3.5" />
          {t('common.save', 'Save Changes')}
        </Motion.button>
      </Motion.div>
    </div>
  )
}
