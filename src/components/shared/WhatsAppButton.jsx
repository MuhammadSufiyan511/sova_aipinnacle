import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { whatsappLink } from '../../data'

export function WhatsAppButton() {
  const { t } = useTranslation()

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="mt-8 inline-flex h-16 items-center justify-center gap-4 rounded-[22px] bg-[#0061FF] px-8 text-[1.1rem] font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] shadow-lg shadow-blue-500/20"
    >
      {t('common.chatOnWhatsApp')}
      <ArrowRight className="h-6 w-6" />
    </a>
  )
}
