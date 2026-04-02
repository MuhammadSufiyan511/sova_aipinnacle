import { motion as Motion } from 'framer-motion'
import { Bell, Bot, MessageSquare, Shield, Sparkles, Zap } from 'lucide-react'
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
    <button onClick={() => onChange(!enabled)} className={`relative inline-flex h-5.5 w-10 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ${enabled ? 'bg-emerald-500' : 'bg-[#DDEFE7]'}`}>
      <Motion.div layout transition={{ type: 'spring', stiffness: 500, damping: 30 }} className={`h-3.5 w-3.5 rounded-full bg-white shadow-md ${enabled ? 'translate-x-5.5' : 'translate-x-1'}`} />
    </button>
  )
}

function SettingRow({ icon, iconBg, title, desc, children }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3.5">
        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
          {icon}
        </span>
        <div>
          <p className="text-[0.82rem] font-bold text-[#173247]">{title}</p>
          <p className="text-[0.7rem] text-[#62808D]">{desc}</p>
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
    <Motion.div variants={container} initial="hidden" animate="show" className="flex max-w-3xl flex-col gap-4">
      <Motion.div variants={rowItem}>
        <h2 className="font-display text-[1.2rem] font-bold text-[#173247]">Automation Settings</h2>
        <p className="mt-0.5 text-[0.74rem] text-[#62808D]">Manage your SOVA voice, alert preferences, and automation rules.</p>
      </Motion.div>

      <Motion.section variants={rowItem} className="rounded-[22px] border border-[#DDEFE7] bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500">
            <Sparkles className="h-4.5 w-4.5" />
          </span>
          <div>
            <h3 className="text-[0.86rem] font-bold text-[#173247]">AI Voice & Tone</h3>
            <p className="text-[0.7rem] text-[#62808D]">Controls how SOVA talks to your customers</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {toneOptions.map((tone) => {
            const isActive = activeTone === tone.id
            const style = toneColors[tone.color]
            return (
              <Motion.button
                key={tone.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => setTones([tone.id])}
                className={`relative rounded-2xl border-2 p-3 text-left transition-all ${isActive ? style.active : 'border-[#DDEFE7] bg-[#F2FBF7] hover:border-[#CFE6DC] hover:bg-[#EEF8F3]'}`}
              >
                {isActive ? <Motion.div layoutId="tone-dot" className={`absolute right-3 top-3 h-2 w-2 rounded-full ${style.dot}`} /> : null}
                <p className="text-[0.8rem] font-bold">{tone.label}</p>
                <p className={`mt-0.5 text-[0.66rem] ${isActive ? 'opacity-70' : 'text-[#62808D]'}`}>{tone.desc}</p>
              </Motion.button>
            )
          })}
        </div>
      </Motion.section>

      <Motion.section variants={rowItem} className="divide-y divide-[#ECF8F3] rounded-[22px] border border-[#DDEFE7] bg-white shadow-sm">
        <div className="px-4 pb-3 pt-4">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-[#62808D]" />
            <h3 className="text-[0.78rem] font-bold uppercase tracking-[0.14em] text-[#62808D]">Automation Rules</h3>
          </div>
        </div>
        <div className="px-4 py-3.5">
          <SettingRow icon={<MessageSquare className="h-4.5 w-4.5" />} iconBg="bg-emerald-50 text-emerald-500" title="Auto-Reply to Buyers" desc="Instantly respond to new WhatsApp messages using SOVA.">
            <Toggle enabled={autoReply} onChange={setAutoReply} />
          </SettingRow>
        </div>
        <div className="px-4 py-3.5">
          <SettingRow icon={<Zap className="h-4.5 w-4.5" />} iconBg="bg-violet-50 text-violet-500" title="Spam Filter" desc="Automatically detect and ignore spam or bot messages.">
            <Toggle enabled={spamFilter} onChange={setSpamFilter} />
          </SettingRow>
        </div>
        <div className="px-4 py-3.5">
          <SettingRow icon={<Bell className="h-4.5 w-4.5" />} iconBg="bg-blue-50 text-blue-500" title="High-Intent Alerts" desc="Get notified when SOVA detects a serious buyer.">
            <Toggle enabled={alerts} onChange={setAlerts} />
          </SettingRow>
        </div>
        <div className="px-4 py-3.5 opacity-60">
          <SettingRow icon={<Shield className="h-4.5 w-4.5" />} iconBg="bg-[#F2FBF7] text-[#86A29B]" title="Two-Factor Authentication" desc="Add an extra layer of security to your workspace.">
            <span className="rounded-full bg-[#F2FBF7] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#6D8A88]">Coming Soon</span>
          </SettingRow>
        </div>
      </Motion.section>
    </Motion.div>
  )
}
