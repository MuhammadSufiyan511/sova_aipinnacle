import { whatsappLink } from '../../data'
import { useTranslation } from 'react-i18next'
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  const { t } = useTranslation()

  return (
    <a
      href={whatsappLink}
      className="group fixed bottom-6 right-4 z-50 inline-flex h-14 items-center rounded-full bg-[#25D366]  px-3 text-[1rem] font-bold text-white shadow-[0_20px_40px_rgba(16,185,129,0.26)] transition-all hover:scale-[1.05] active:scale-[0.95]"
      target="_blank"
      rel="noreferrer"
      aria-label={t('common.chatOnWhatsApp')}
    >
      <FaWhatsapp className='w-8 h-8' />
      <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 opacity-0 transition-all duration-300 group-hover:max-w-[180px] group-hover:pl-4 group-hover:opacity-100 uppercase tracking-wider text-[0.8rem]">
        {t('common.chatOnWhatsApp')}
      </span>
    </a>
  )
}

