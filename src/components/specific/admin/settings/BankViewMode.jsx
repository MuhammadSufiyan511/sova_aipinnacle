import { motion as Motion, AnimatePresence } from 'framer-motion'
import {
  Landmark, Pencil, CreditCard, Building2, Hash,
  FileText, ShieldCheck, ChevronRight, ChevronDown,
  Copy, Check, Eye, EyeOff, Trash2, RefreshCw
} from 'lucide-react'
import { useState } from 'react'
import { DataCard } from './BankSubComponents'

/* ── helpers ── */
function maskIBAN(v) {
  if (!v || v.length < 8) return v
  const clean = v.replace(/\s/g, '')
  return clean.slice(0, 4) + ' •••• •••• ' + clean.slice(-4)
}

const fi = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0, transition: { duration: 0.18 } } }

/* ── accordion section ── */
function Section({ title, badge, sectionKey, expanded, toggle, dm, children }) {
  const open = expanded[sectionKey]
  return (
    <Motion.div variants={fi} className={`overflow-hidden rounded-2xl border ${dm ? 'border-blue-900/20 bg-slate-900/30' : 'border-slate-100 bg-slate-50/60'
      }`}>
      <button
        type="button"
        onClick={() => toggle(sectionKey)}
        className={`flex w-full items-center justify-between px-4 py-3 text-left transition ${dm ? 'hover:bg-slate-800/40' : 'hover:bg-slate-100/60'
          }`}
      >
        <div className="flex items-center gap-2">
          <span className={`text-[0.65rem] font-black uppercase tracking-[0.14em] ${dm ? 'text-slate-400' : 'text-slate-500'
            }`}>{title}</span>
          {badge && (
            <span className={`rounded-full px-2 py-0.5 text-[0.55rem] font-bold ${dm ? 'bg-emerald-950/50 text-emerald-400' : 'bg-emerald-50 text-emerald-600'
              }`}>{badge}</span>
          )}
        </div>
        <Motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className={`h-3.5 w-3.5 ${dm ? 'text-slate-500' : 'text-slate-400'}`} />
        </Motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <Motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1">{children}</div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  )
}

/* ── main export ── */
export function BankViewMode({ t, bankDetails, setIsEditing, onDelete, dm }) {
  const [copied, setCopied] = useState(false)
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState({ payment: true, account: true, notes: true })
  const hasData = !!bankDetails.accountNumber
  const muted = dm ? 'text-slate-500' : 'text-slate-400'
  const strong = dm ? 'text-slate-100' : 'text-slate-800'
  const inner = dm ? 'bg-slate-900/50 border-blue-900/20' : 'bg-white border-slate-200'

  const toggle = (k) => setExpanded(p => ({ ...p, [k]: !p[k] }))

  const copyIBAN = async () => {
    if (!bankDetails.accountNumber) return
    await navigator.clipboard.writeText(bankDetails.accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  /* ── empty state ── */
  if (!hasData) {
    return (
      <Motion.div
        variants={fi}
        className={`flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed py-10 px-4 text-center ${dm ? 'border-blue-900/25' : 'border-blue-100'
          }`}
      >
        <Motion.div
          whileHover={{ scale: 1.08, y: -2 }}
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${dm ? 'bg-blue-950/50 text-blue-400' : 'bg-blue-50 text-blue-400'
            }`}
        >
          <Landmark className="h-7 w-7" />
        </Motion.div>
        <div className="space-y-1">
          <p className={`text-[0.84rem] font-bold ${dm ? 'text-slate-300' : 'text-slate-700'}`}>
            {t('admin.settings.bank.notConfiguredTitle', 'No Bank Account Added')}
          </p>
          <p className={`text-[0.72rem] font-medium leading-relaxed max-w-[230px] mx-auto ${muted}`}>
            {t('admin.settings.bank.notConfiguredDesc', 'Add your bank details to start receiving payments from customers.')}
          </p>
        </div>
        <Motion.button
          whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-[0.72rem] font-bold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
        >
          <Pencil className="h-3.5 w-3.5" />
          {t('admin.settings.bank.addDetails', 'Add Bank Account')}
          <ChevronRight className="h-3.5 w-3.5 -mr-1" />
        </Motion.button>
      </Motion.div>
    )
  }

  /* ── data view ── */
  return (
    <div className="space-y-3">

      {/* ── 💳 Payment Details ── */}
      <Section title={`💳 ${t('admin.settings.bank.sectionPayment', 'Payment Details')}`}
        sectionKey="payment" expanded={expanded} toggle={toggle} dm={dm}
      >
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <DataCard
            label={t('admin.settings.bank.accountTitle', 'Account Holder')}
            value={bankDetails.accountTitle}
            icon={<CreditCard className="h-4 w-4" />}
            iconCls={dm ? 'bg-blue-950/50 text-blue-400' : 'bg-blue-50 text-blue-500'}
            dm={dm}
          />
          <DataCard
            label={t('admin.settings.bank.bankName', 'Bank Name')}
            value={bankDetails.bankName}
            icon={<Building2 className="h-4 w-4" />}
            iconCls={dm ? 'bg-indigo-950/50 text-indigo-400' : 'bg-indigo-50 text-indigo-500'}
            dm={dm}
          />
        </div>
      </Section>

      {/* ── 🔢 Account Info — hero IBAN row ── */}
      <Section title={`🔢 ${t('admin.settings.bank.sectionAccount', 'Account Info')}`}
        badge={t('admin.settings.bank.verified', 'Saved')}
        sectionKey="account" expanded={expanded} toggle={toggle} dm={dm}
      >
        {/* IBAN hero card */}
        <div className={`relative flex flex-col gap-3 rounded-2xl border p-4 ${dm ? 'bg-gradient-to-br from-slate-900 to-blue-950/30 border-blue-800/30'
          : 'bg-gradient-to-br from-blue-50 to-indigo-50/60 border-blue-200/60'
          }`}>
          {/* label row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hash className={`h-3.5 w-3.5 ${dm ? 'text-blue-400' : 'text-blue-500'}`} />
              <span className={`text-[0.6rem] font-black uppercase tracking-[0.16em] ${muted}`}>
                {t('admin.settings.bank.accountNumber', 'Account Number / IBAN')}
              </span>
            </div>
            <div className={`flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.58rem] font-bold ${dm ? 'bg-emerald-950/50 text-emerald-400 ring-1 ring-emerald-900/30'
              : 'bg-emerald-100 text-emerald-700'
              }`}>
              <ShieldCheck className="h-3 w-3" />
              {t('admin.settings.bank.verified', 'Saved')}
            </div>
          </div>

          {/* IBAN display — primary element */}
          <div className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 ${inner}`}>
            <p className={`flex-1 font-mono text-[1.05rem] font-bold tracking-wider truncate ${strong}`}>
              {visible ? bankDetails.accountNumber : maskIBAN(bankDetails.accountNumber)}
            </p>

            {/* show / hide */}
            <Motion.button
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={() => setVisible(v => !v)}
              title={visible ? t('common.hide', 'Hide') : t('common.show', 'Show')}
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition ${dm ? 'text-slate-500 hover:text-blue-400 hover:bg-blue-950/40'
                : 'text-slate-400 hover:text-blue-500 hover:bg-blue-50'
                }`}
            >
              {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Motion.button>

            {/* copy */}
            <Motion.button
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
              onClick={copyIBAN}
              title={t('admin.settings.bank.copyIBAN', 'Copy')}
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition ${copied
                ? (dm ? 'bg-emerald-950/50 text-emerald-400' : 'bg-emerald-100 text-emerald-600')
                : (dm ? 'text-slate-500 hover:text-blue-400 hover:bg-blue-950/40'
                  : 'text-slate-400 hover:text-blue-500 hover:bg-blue-50')
                }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied
                  ? <Motion.span key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Check className="h-4 w-4" /></Motion.span>
                  : <Motion.span key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}><Copy className="h-4 w-4" /></Motion.span>
                }
              </AnimatePresence>
            </Motion.button>
          </div>

          {/* copy feedback */}
          <AnimatePresence>
            {copied && (
              <Motion.p
                initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className={`text-[0.65rem] font-semibold ${dm ? 'text-emerald-400' : 'text-emerald-600'}`}
              >
                ✓ {t('admin.settings.bank.copied', 'Copied to clipboard!')}
              </Motion.p>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* ── 📝 Additional Info ── */}
      {bankDetails.description && (
        <Section title={`📝 ${t('admin.settings.bank.sectionNotes', 'Additional Info')}`}
          sectionKey="notes" expanded={expanded} toggle={toggle} dm={dm}
        >
          <div className={`flex items-start gap-3 rounded-xl border p-3.5 ${inner}`}>
            <FileText className={`h-4 w-4 mt-0.5 shrink-0 ${dm ? 'text-slate-500' : 'text-slate-400'}`} />
            <p className={`text-[0.8rem] font-medium leading-relaxed ${dm ? 'text-slate-300' : 'text-slate-600'}`}>
              {bankDetails.description}
            </p>
          </div>
        </Section>
      )}

      {/* ── Action bar ── */}
      <Motion.div variants={fi} className="flex flex-col gap-2 pt-1 xs:flex-row">
        {/* <Motion.button
          whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.97 }}
          onClick={() => setIsEditing(true)}
          className={`flex flex-1 items-center justify-center gap-2 rounded-2xl border py-2.5 text-[0.74rem] font-bold transition ${
            dm ? 'border-blue-900/30 bg-blue-950/20 text-blue-400 hover:bg-blue-950/40'
               : 'border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100'
          }`}
        >
          <RefreshCw className="h-3.5 w-3.5" />
          {t('admin.settings.bank.updateBank', 'Update Bank')}
        </Motion.button> */}

        <Motion.button
          whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.97 }}
          onClick={copyIBAN}
          className={`flex flex-1 items-center justify-center gap-2 rounded-2xl border py-2.5 text-[0.74rem] font-bold transition ${copied
            ? (dm ? 'border-emerald-900/30 bg-emerald-950/30 text-emerald-400' : 'border-emerald-200 bg-emerald-50 text-emerald-600')
            : (dm ? 'border-slate-700/40 bg-slate-900/30 text-slate-400 hover:bg-slate-800/50'
              : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100')
            }`}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? t('admin.settings.bank.copied', 'Copied!') : t('admin.settings.bank.copyIBAN', 'Copy IBAN')}
        </Motion.button>

        <Motion.button
          whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.97 }}
          onClick={onDelete}
          className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-2.5 text-[0.74rem] font-bold transition ${dm ? 'border-red-900/30 bg-red-950/20 text-red-400 hover:bg-red-950/40'
            : 'border-red-100 bg-red-50 text-red-500 hover:bg-red-100'
            }`}
        >
          <Trash2 className="h-3.5 w-3.5" />
          <span className="hidden xs:inline">{t('admin.settings.bank.removeAccount', 'Remove')}</span>
        </Motion.button>
      </Motion.div>
    </div>
  )
}
