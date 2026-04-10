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
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from 'recharts';
import { useApp } from '../../../../context/AppProvider';
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
  const { homeDarkMode } = useApp();

  const gridColor = homeDarkMode ? '#1C3D3A' : '#DDEFE7';
  const textColor = homeDarkMode ? '#94A3B8' : '#5F7C89';
  const chartBg = homeDarkMode ? '#0A1B19' : '#FFFFFF';
  const chartBorder = homeDarkMode ? '#1C3D3A' : '#DDEFE7';
  const eyebrowColor = homeDarkMode ? '#94A3B8' : '#6D8A88';
  const headingColor = homeDarkMode ? '#FFFFFF' : '#173247';
  const pillBg = homeDarkMode ? '#064E3B' : '#ECFDF5';
  const pillText = homeDarkMode ? '#6EE7B7' : '#059669';

  return (
    <div
      className="w-full h-[360px] rounded-[26px] p-5 shadow-sm sm:p-6"
      style={{ backgroundColor: chartBg, border: `1px solid ${chartBorder}` }}
    >
      <div className="flex -mb-3  flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <span className="text-[0.62rem]  font-bold uppercase tracking-[0.16em]" style={{ color: eyebrowColor }}>
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
          {/* <TrendingUp className="h-3.5 w-3.5" /> */}
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

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={gridColor}
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: textColor, fontSize: 12, fontWeight: 500 }}
            dy={10}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: textColor, fontSize: 12 }}
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
  const { t } = useTranslation()
  const { homeDarkMode } = useApp();
  if (active && payload && payload.length) {
    return (
      <div className={`${homeDarkMode ? 'bg-[#0A1B19] border-[#1C3D3A]' : 'bg-white border-[#DDEFE7]'} px-3 py-2 rounded-xl shadow-xl border`}>
        <p className={`text-xs font-bold ${homeDarkMode ? 'text-white' : 'text-[#173247]'}`}>{`${payload[0].value}%`}</p>
        <p className={`text-[10px] uppercase tracking-tighter ${homeDarkMode ? 'text-slate-400' : 'text-[#6D8A88]'}`}>{t('admin.overview.charts.saleTrend.tooltipLabel')}</p>
      </div>
    );
  }
  return null;
};
export function LeadsBarChart() {
  const { t } = useTranslation()
  const { homeDarkMode } = useApp()

  const barChartData = leadData.map((value, index) => ({
    name: [t('common.days.mon'), t('common.days.tue'), t('common.days.wed'), t('common.days.thu'), t('common.days.fri'), t('common.days.sat'), t('common.days.sun')][index],
    value
  }))

  const textColor = homeDarkMode ? '#94A3B8' : '#5F7C89';
  const gridColor = homeDarkMode ? '#1C3D3A' : '#E2EFEA';
  const tooltipBg = homeDarkMode ? '#0A1B19' : '#FFFFFF';
  const tooltipBorder = homeDarkMode ? '#1C3D3A' : '#DDEFE7';
  const tooltipText = homeDarkMode ? '#FFFFFF' : '#173247';

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
          <CartesianGrid
            vertical={false}
            strokeDasharray="3 3"
            stroke={gridColor}
          />
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
          <Bar
            dataKey="value"
            radius={[6, 6, 0, 0]}
            animationDuration={1500}
          >
            {barChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="url(#barGradient)" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

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
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#6D8A88] dark:text-slate-400">
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
