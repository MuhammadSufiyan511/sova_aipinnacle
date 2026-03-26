import { whatsappLink } from '../../data'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="h-5 w-5">
      <path d="M19.11 17.49c-.29-.15-1.69-.83-1.95-.92-.26-.1-.45-.15-.64.14-.18.28-.73.92-.9 1.1-.16.19-.33.21-.62.07-.29-.15-1.2-.44-2.28-1.39-.84-.75-1.41-1.68-1.57-1.97-.17-.28-.02-.43.12-.57.13-.13.29-.33.44-.49.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.46-.48-.64-.49h-.54c-.19 0-.49.07-.75.36-.26.29-.98.96-.98 2.34s1 2.71 1.14 2.9c.14.19 1.95 2.98 4.73 4.18.66.29 1.18.46 1.59.59.67.21 1.29.18 1.78.11.54-.08 1.69-.69 1.92-1.36.24-.67.24-1.25.17-1.36-.07-.12-.26-.19-.55-.33Z" />
      <path d="M16.01 3.2c-7.05 0-12.76 5.66-12.76 12.64 0 2.24.59 4.44 1.71 6.39L3.2 28.8l6.76-1.76a12.82 12.82 0 0 0 6.05 1.53h.01c7.04 0 12.78-5.66 12.78-12.65 0-3.38-1.32-6.56-3.72-8.94a12.77 12.77 0 0 0-9.07-3.78Zm0 23.22h-.01a10.7 10.7 0 0 1-5.46-1.49l-.39-.23-4.01 1.04 1.07-3.89-.25-.4a10.48 10.48 0 0 1-1.63-5.6c0-5.82 4.78-10.55 10.68-10.55 2.85 0 5.53 1.11 7.54 3.11a10.44 10.44 0 0 1 3.12 7.44c0 5.82-4.8 10.57-10.66 10.57Z" />
    </svg>
  )
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink}
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 items-center rounded-full bg-[linear-gradient(135deg,#10b981,#06b6d4)] px-4 text-sm font-semibold text-white shadow-[0_22px_45px_rgba(16,185,129,0.35)] transition hover:translate-y-[-2px]"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Sova on WhatsApp"
    >
      <WhatsAppIcon />
      <span className="max-w-0 overflow-hidden whitespace-nowrap pl-0 opacity-0 transition-all duration-300 group-hover:max-w-[140px] group-hover:pl-3 group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  )
}
