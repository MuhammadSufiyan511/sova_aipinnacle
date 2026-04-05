import { motion as Motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
const data = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 65 },
  { name: 'Thu', value: 45 },
  { name: 'Fri', value: 90 },
  { name: 'Sat', value: 70 },
  { name: 'Sun', value: 85 },
];
const leadData = [28, 34, 31, 44, 50, 56, 62]

export function MainChart() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-[320px] p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
      <div className="mb-4 flex flex-col">
        <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
          {t('Performance Metrics')}
        </span>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Weekly Activity</h3>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
            stroke="#F1F5F9" 
          />
          
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 500 }}
            dy={10}
          />
          
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94A3B8', fontSize: 12 }} 
          />

          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ stroke: '#10B981', strokeWidth: 1, strokeDasharray: '5 5' }}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#10B981"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorValue)"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 px-3 py-2 rounded-lg shadow-xl border border-slate-800">
        <p className="text-xs font-bold text-white">{`${payload[0].value}%`}</p>
        <p className="text-[10px] text-slate-400 uppercase tracking-tighter">Completion</p>
      </div>
    );
  }
  return null;
};
export function LeadsBarChart() {
  const { t } = useTranslation()
  const maxValue = Math.max(...leadData)
  const days = [t('common.days.mon'), t('common.days.tue'), t('common.days.wed'), t('common.days.thu'), t('common.days.fri'), t('common.days.sat'), t('common.days.sun')]

  return (
    <div className="flex h-[170px] items-end justify-between gap-2.5 pt-5">
      {leadData.map((value, index) => (
        <div key={`${value}-${index}`} className="flex flex-1 flex-col items-center gap-3">
          <Motion.div
            initial={{ height: 0 }}
            animate={{ height: `${(value / maxValue) * 150}px` }}
            transition={{ duration: 0.7, delay: index * 0.05 }}
            className="w-full rounded-t-[18px] bg-gradient-to-t from-[#10B981] via-[#34D399] to-[#A78BFA] shadow-[0_10px_25px_rgba(16,185,129,0.18)]"
          />
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">
            {days[index]}
          </span>
        </div>
      ))}
    </div>
  )
}

export function SourceDonut() {
  const { t } = useTranslation()
  const sourceData = [
    { label: t('admin.overview.donuts.buyers'), value: 64, color: '#10B981' },
    { label: t('admin.overview.donuts.followups'), value: 24, color: '#A78BFA' },
    { label: t('admin.overview.donuts.spam'), value: 12, color: '#F59E0B' },
  ]
  const total = sourceData.reduce((sum, item) => sum + item.value, 0)
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const segments = sourceData.map((item, index) => {
    const previousValues = sourceData.slice(0, index).reduce((sum, current) => sum + (current.value / total) * circumference + 4, 0)
    const dash = (item.value / total) * circumference

    return {
      ...item,
      dash,
      offset: -previousValues,
    }
  })

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row">
      <div className="relative flex h-40 w-40 items-center justify-center">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="#E6F5EE" strokeWidth="14" />
          {segments.map((item) => (
            <circle
              key={item.label}
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke={item.color}
              strokeWidth="14"
              strokeDasharray={`${item.dash} ${circumference - item.dash}`}
              strokeDashoffset={item.offset}
              strokeLinecap="round"
            />
          ))}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88]">{t('admin.overview.charts.leadMix.label')}</p>
          <p className="mt-1 font-display text-xl font-bold text-[#173247]">64%</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        {sourceData.map((item) => (
          <div key={item.label} className="flex items-center justify-between rounded-2xl bg-[#F2FBF7] px-3 py-2.5">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-[0.84rem] font-medium text-[#476977]">{item.label}</span>
            </div>
            <span className="text-[0.84rem] font-bold text-[#173247]">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
