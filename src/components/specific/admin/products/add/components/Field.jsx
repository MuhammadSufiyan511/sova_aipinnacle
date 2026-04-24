export const Field = ({ label, icon: Icon, children, error, helpText }) => (
  <div className="group space-y-2">
    <div className="flex items-center gap-2">
      {Icon && <Icon className="h-3.5 w-3.5 text-[#10B981]/50 group-focus-within:text-[#10B981] transition-colors" />}
      <label className="block text-[0.68rem] font-bold uppercase tracking-widest text-[#1E293B]/80 group-focus-within:text-[#10B981]/80 transition-colors md:text-[0.7rem]">
        {label}
      </label>
    </div>
    <div className="relative">
      {children}
    </div>
    {error && <p className="text-[0.65rem] font-semibold text-red-500">{error}</p>}
    {helpText && !error && <p className="text-[0.65rem] text-[#1E293B]/50">{helpText}</p>}
  </div>
)
