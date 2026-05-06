import { AlertCircle } from 'lucide-react'

export function FieldLabel({ icon, children, dm }) {
  return (
    <label className={`flex items-center gap-1.5 text-[0.63rem] font-black uppercase tracking-[0.15em] ${dm ? 'text-slate-500' : 'text-slate-400'
      }`}>
      <span className={dm ? 'text-blue-500' : 'text-blue-400'}>{icon}</span>
      {children}
    </label>
  )
}

export function InputField({ id, label, icon, value, onChange, onBlur, placeholder, error, hint, mono, dm }) {
  const base = `w-full rounded-2xl border px-4 py-2.5 text-[0.82rem] outline-none transition-all duration-200 ${mono ? 'font-mono' : ''}`
  const normal = dm
    ? 'bg-slate-900/60 border-blue-900/25 text-slate-200 placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10'
    : 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/10'
  const errCls = dm
    ? 'border-red-800/60 bg-red-950/20 focus:border-red-500/60 focus:ring-red-500/10'
    : 'border-red-300 bg-red-50/50 focus:border-red-400 focus:ring-red-400/10'

  return (
    <div className="space-y-1.5">
      <FieldLabel icon={icon} dm={dm}>{label}</FieldLabel>
      <input
        id={id}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`${base} ${error ? errCls : normal}`}
      />
      {error ? (
        <p className={`flex items-center gap-1 text-[0.63rem] font-semibold ${dm ? 'text-red-400' : 'text-red-500'}`}>
          <AlertCircle className="h-3 w-3" /> {error}
        </p>
      ) : hint ? (
        <p className={`text-[0.63rem] font-medium ${dm ? 'text-slate-600' : 'text-slate-400'}`}>{hint}</p>
      ) : null}
    </div>
  )
}

export function DataCard({ label, value, icon, iconCls, dm }) {
  return (
    <div className={`flex items-center gap-3 rounded-2xl border p-3.5 ${dm ? 'bg-slate-900/50 border-blue-900/20' : 'bg-slate-20/80 border-slate-100'
      }`}>
      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${iconCls}`}>
        {icon}
      </div>
      <div className="min-w-0">
        <p className={`text-[0.57rem] font-black uppercase tracking-[0.16em] mb-0.5 ${dm ? 'text-slate-500' : 'text-slate-700/80'
          }`}>{label}</p>
        <p className={`text-[0.82rem] font-semibold truncate ${dm ? 'text-slate-200' : 'text-slate-800'}`}>
          {value || <span className={`italic font-normal text-[0.78rem] ${dm ? 'text-slate-600' : 'text-slate-300'}`}>—</span>}
        </p>
      </div>
    </div>
  )
}
