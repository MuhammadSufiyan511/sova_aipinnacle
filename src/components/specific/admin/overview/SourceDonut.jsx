import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { useTranslation } from 'react-i18next'
import { useApp } from '../../../../context/AppProvider'

export function SourceDonut() {
  const { t } = useTranslation()
  const { homeDarkMode } = useApp()

  const sourceData = [
    { name: t('admin.overview.donuts.buyers'), value: 64, color: '#10B981' },
    { name: t('admin.overview.donuts.followups'), value: 24, color: '#A78BFA' },
    { name: t('admin.overview.donuts.spam'), value: 12, color: '#F59E0B' },
  ]

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row w-full mt-2">
      <div className="relative h-40 w-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sourceData}
              cx="50%"
              cy="50%"
              innerRadius={38}
              outerRadius={52}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
              animationBegin={0}
              animationDuration={1500}
            >
              {sourceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: homeDarkMode ? '#0A1B19' : '#FFF',
                border: `1px solid ${homeDarkMode ? '#1C3D3A' : '#E2E8F0'}`,
                borderRadius: '12px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#1E293B] dark:text-slate-400">
            {t('admin.overview.charts.leadMix.label')}
          </p>
          <p className="mt-1 font-display text-xl font-bold text-black">64%</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 w-full">
        {sourceData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-2xl bg-[#F2FBF7] dark:bg-[#142B2A] px-3 py-2.5 border border-transparent dark:border-[#1C3D3A]"
          >
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-[0.84rem] font-medium text-[#476977] dark:text-slate-300">{item.name}</span>
            </div>
            <span className="text-[0.84rem] font-bold text-[#173247] dark:text-white">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
