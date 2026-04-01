import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { whatsappLink } from '../../data'

export function WhatsAppButton() {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.dir() === 'rtl'

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="mt-8 inline-flex h-16 items-center justify-center gap-4 rounded-[22px] bg-[#10B981] px-8 text-[1.1rem] font-bold text-white transition-all hover:bg-[#0F8F72] active:scale-[0.98] shadow-lg shadow-emerald-500/20"
    >
      {t('common.chatOnWhatsApp')}
      <ArrowRight className={`h-6 w-6 ${isRtl ? 'rotate-180' : ''}`} />
    </a>
  )
}
