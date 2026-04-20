import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useTranslation } from 'react-i18next'
import { useApp } from '../../../../context/AppProvider'

const data = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 65 },
  { name: 'Thu', value: 45 },
  { name: 'Fri', value: 90 },
  { name: 'Sat', value: 70 },
  { name: 'Sun', value: 85 },
]

export function MainChart() {
  const { t } = useTranslation()
  const { homeDarkMode } = useApp()

  const gridColor = homeDarkMode ? '#1C3D3A' : '#DDEFE7'
  const textColor = homeDarkMode ? '#94A3B8' : '#1E293B'
  const chartBg = homeDarkMode ? '#0A1B19' : '#FFFFFF'
  const chartBorder = homeDarkMode ? '#1C3D3A' : '#DDEFE7'
  const eyebrowColor = homeDarkMode ? '#94A3B8' : '#3d4148'
  const headingColor = homeDarkMode ? '#FFFFFF' : '#173247'
  const pillBg = homeDarkMode ? '#064E3B' : '#ECFDF5'
  const pillText = homeDarkMode ? '#6EE7B7' : '#059669'

  return (
    <div
      className="w-full h-[360px] rounded-[26px] p-5 shadow-sm sm:p-6"
      style={{ backgroundColor: chartBg, border: `1px solid ${chartBorder}` }}
    >
      <div className="flex -mb-3 flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em]" style={{ color: eyebrowColor }}>
            {t('admin.overview.charts.saleTrend.subtitle')}
          </span>
          <h3 className="mt-1 font-display text-[1rem] font-bold" style={{ color: headingColor }}>
            {t('admin.overview.charts.saleTrend.title')}
          </h3>
        </div>
        <div
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.66rem] font-bold"
          style={{ backgroundColor: pillBg, color: pillText }}
        >
          {t('admin.overview.charts.saleTrend.pill', { count: 28 })}
        </div>
      </div>
      <ResponsiveContainer width="100%" height="80%" className="mt-2">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: textColor, fontSize: 12, fontWeight: 500 }}
            dy={10}
          />

          <YAxis axisLine={false} tickLine={false} tick={{ fill: textColor, fontSize: 12 }} />

          <Tooltip cursor={{ stroke: '#10B981', strokeWidth: 1, strokeDasharray: '5 5' }} content={<CustomTooltip />} />

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
  )
}

const CustomTooltip = ({ active, payload }) => {
  const { t } = useTranslation()
  const { homeDarkMode } = useApp()
  if (active && payload && payload.length) {
    return (
      <div className={`${homeDarkMode ? 'bg-[#0A1B19] border-[#1C3D3A]' : 'bg-white border-[#DDEFE7]'} px-3 py-2 rounded-xl shadow-xl border`}>
        <p className={`text-xs font-bold ${homeDarkMode ? 'text-white' : 'text-[#173247]'}`}>{`${payload[0].value}%`}</p>
        <p className={`text-[10px] uppercase tracking-tighter ${homeDarkMode ? 'text-slate-400' : 'text-[#6D8A88]'}`}>{t('admin.overview.charts.saleTrend.tooltipLabel')}</p>
      </div>
    )
  }
  return null
}
