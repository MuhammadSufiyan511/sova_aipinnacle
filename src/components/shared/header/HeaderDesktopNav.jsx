import { Link } from 'react-router-dom'

export function HeaderDesktopNav({ navItems, isItemActive }) {
  return (
    <nav className="flex items-center gap-1">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`rounded-full px-3.5 py-1.5 text-[0.86rem] font-medium transition-all ${
            isItemActive(item)
              ? 'bg-[#ECFDF5] text-[#1E293B]'
              : 'text-[#1E293B] hover:bg-[#ECFDF5] hover:text-[#1E293B]'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
