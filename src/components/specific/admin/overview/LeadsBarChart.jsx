import { BarChart, Bar, Cell, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { useTranslation } from 'react-i18next'
import { useApp } from '../../../../context/AppProvider'

const leadData = [28, 34, 31, 44, 50, 56, 62]

export function LeadsBarChart() {
  const { t } = useTranslation()
  const { homeDarkMode } = useApp()

  const barChartData = leadData.map((value, index) => ({
    name: [t('common.days.mon'), t('common.days.tue'), t('common.days.wed'), t('common.days.thu'), t('common.days.fri'), t('common.days.sat'), t('common.days.sun')][index],
    value
  }))

  const textColor = homeDarkMode ? '#94A3B8' : '#5F7C89'
  const gridColor = homeDarkMode ? '#1C3D3A' : '#E2EFEA'
  const tooltipBg = homeDarkMode ? '#0A1B19' : '#FFFFFF'
  const tooltipBorder = homeDarkMode ? '#1C3D3A' : '#DDEFE7'
  const tooltipText = homeDarkMode ? '#FFFFFF' : '#173247'

  return (
    <div className="w-full h-[180px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barChartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="50%" stopColor="#34D399" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: textColor, fontSize: 10, fontWeight: 700 }}
            interval={0}
          />
          <Tooltip
            cursor={{ fill: homeDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(16,185,129,0.08)' }}
            contentStyle={{
              backgroundColor: tooltipBg,
              border: `1px solid ${tooltipBorder}`,
              borderRadius: '12px',
              fontSize: '12px',
              color: tooltipText,
              boxShadow: homeDarkMode
                ? '0 14px 30px rgba(4, 13, 12, 0.45)'
                : '0 14px 30px rgba(23, 50, 71, 0.12)'
            }}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]} animationDuration={1500}>
            {barChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="url(#barGradient)" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
