import { motion } from 'framer-motion'
import { Bell, Bot, MessageSquare, Shield, Sparkles, ToggleLeft, ToggleRight, Zap } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '../../../context/AppProvider'

const toneOptions = [
  { id: 'Professional', label: 'Professional', desc: 'Polished and business-like', color: 'emerald' },
  { id: 'Friendly', label: 'Friendly', desc: 'Warm and approachable', color: 'blue' },
  { id: 'Direct', label: 'Direct', desc: 'Concise, no fluff', color: 'amber' },
  { id: 'Creative', label: 'Creative', desc: 'Expressive and bold', color: 'violet' },
]

const toneColors = {
  emerald: { active: 'border-emerald-500 bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
  blue: { active: 'border-blue-400 bg-blue-50 text-blue-700', dot: 'bg-blue-400' },
  amber: { active: 'border-amber-400 bg-amber-50 text-amber-700', dot: 'bg-amber-400' },
  violet: { active: 'border-violet-500 bg-violet-50 text-violet-700', dot: 'bg-violet-500' },
}

function Toggle({ enabled, onChange }) {
  return (
    <button onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ${enabled ? 'bg-emerald-500' : 'bg-slate-200'}`}
    >
      <motion.div layout transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`h-4 w-4 rounded-full bg-white shadow-md ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
      />
    </button>
  )
}

function SettingRow({ icon: Icon, iconBg, title, desc, children }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[0.92rem] font-bold text-slate-800">{title}</p>
          <p className="text-[0.74rem] text-slate-400">{desc}</p>
        </div>
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  )
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const rowItem = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }

export function SettingsOverview() {
  const { tones, setTones } = useApp()
  const activeTone = tones[0] || 'Professional'
  const [alerts, setAlerts] = useState(true)
  const [autoReply, setAutoReply] = useState(true)
  const [spamFilter, setSpamFilter] = useState(true)

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="flex max-w-3xl flex-col gap-5">
      <motion.div variants={rowItem}>
        <h2 className="font-display text-[1.45rem] font-bold text-slate-800">Automation Settings</h2>
        <p className="mt-0.5 text-[0.82rem] text-slate-400">Manage your SOVA voice, alert preferences, and automation rules.</p>
      </motion.div>

      {/* AI Tone */}
      <motion.section variants={rowItem} className="rounded-[26px] border border-slate-100 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-bold text-slate-800">AI Voice & Tone</h3>
            <p className="text-[0.74rem] text-slate-400">Controls how SOVA talks to your customers</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {toneOptions.map((tone) => {
            const isActive = activeTone === tone.id
            const style = toneColors[tone.color]
            return (
              <motion.button key={tone.id} whileTap={{ scale: 0.96 }} onClick={() => setTones([tone.id])}
                className={`relative rounded-2xl border-2 p-3.5 text-left transition-all ${isActive ? style.active : 'border-slate-100 bg-slate-50 hover:border-slate-200 hover:bg-slate-50/80'}`}
              >
                {isActive && <motion.div layoutId="tone-dot" className={`absolute right-3 top-3 h-2 w-2 rounded-full ${style.dot}`} />}
                <p className="text-[0.85rem] font-bold">{tone.label}</p>
                <p className={`mt-0.5 text-[0.7rem] ${isActive ? 'opacity-70' : 'text-slate-400'}`}>{tone.desc}</p>
              </motion.button>
            )
          })}
        </div>
      </motion.section>

      {/* Automation Rules */}
      <motion.section variants={rowItem} className="divide-y divide-slate-50 rounded-[26px] border border-slate-100 bg-white shadow-sm">
        <div className="px-6 pt-5 pb-4">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-slate-400" />
            <h3 className="text-[0.88rem] font-bold uppercase tracking-wider text-slate-400">Automation Rules</h3>
          </div>
        </div>
        <div className="px-6 py-4">
          <SettingRow icon={MessageSquare} iconBg="bg-emerald-50 text-emerald-500" title="Auto-Reply to Buyers" desc="Instantly respond to new WhatsApp messages using SOVA.">
            <Toggle enabled={autoReply} onChange={setAutoReply} />
          </SettingRow>
        </div>
        <div className="px-6 py-4">
          <SettingRow icon={Zap} iconBg="bg-violet-50 text-violet-500" title="Spam Filter" desc="Automatically detect and ignore spam or bot messages.">
            <Toggle enabled={spamFilter} onChange={setSpamFilter} />
          </SettingRow>
        </div>
        <div className="px-6 py-4">
          <SettingRow icon={Bell} iconBg="bg-blue-50 text-blue-500" title="High-Intent Alerts" desc="Get notified when SOVA detects a serious buyer.">
            <Toggle enabled={alerts} onChange={setAlerts} />
          </SettingRow>
        </div>
        <div className="px-6 py-4 opacity-50">
          <SettingRow icon={Shield} iconBg="bg-slate-100 text-slate-400" title="Two-Factor Authentication" desc="Add an extra layer of security to your workspace.">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-slate-400">Coming Soon</span>
          </SettingRow>
        </div>
      </motion.section>
    </motion.div>
  )
}
