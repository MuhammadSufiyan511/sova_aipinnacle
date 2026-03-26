import { ArrowRight } from 'lucide-react'
import { whatsappLink } from '../../data'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#173247] px-6 text-base font-semibold text-white transition hover:bg-[#214257]"
    >
      Chat on WhatsApp
      <ArrowRight className="h-5 w-5" />
    </a>
  )
}
