import { MessageCircleMore } from 'lucide-react'

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/971501234567"
      className="fixed bottom-5 right-5 z-50 inline-flex h-15 items-center gap-3 rounded-full bg-[linear-gradient(135deg,#10b981,#06b6d4)] px-5 text-sm font-semibold text-white shadow-[0_22px_45px_rgba(16,185,129,0.35)] transition hover:translate-y-[-2px]"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Sova on WhatsApp"
    >
      <MessageCircleMore className="h-5 w-5" />
      Chat on WhatsApp
    </a>
  )
}
