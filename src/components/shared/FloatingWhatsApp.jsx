import { whatsappLink } from '../../data'
import { useTranslation } from 'react-i18next'
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  const { t } = useTranslation()

  return (
    <a
      href={whatsappLink}
      className="group fixed bottom-[5.8rem] right-3 z-50 inline-flex h-11 items-center rounded-full bg-[#25D366] px-2.5 text-[0.92rem] font-bold text-white shadow-[0_20px_40px_rgba(16,185,129,0.26)] transition-all hover:scale-[1.05] active:scale-[0.95] sm:bottom-[5.3rem] sm:right-4 sm:h-12 sm:px-3 md:bottom-6 md:h-14"
      target="_blank"
      rel="noreferrer"
      aria-label={t('common.chatOnWhatsApp')}
    >
      <FaWhatsapp className='h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8' />
      <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 text-[0.72rem] uppercase tracking-wider opacity-0 transition-all duration-300 group-hover:max-w-[180px] group-hover:pl-4 group-hover:opacity-100 sm:text-[0.78rem]">
        {t('common.chatOnWhatsApp')}
      </span>
    </a>
  )
}
