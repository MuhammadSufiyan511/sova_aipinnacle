import { motion } from 'framer-motion'
import { Mail, MessageSquare } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'

const MotionDiv = motion.div

const floatingIconsData = [
  { icon: FaWhatsapp, color: '#25D366', top: '3%', left: '3%', delay: 0, size: 72 },
  { icon: FaInstagram, color: '#E4405F', top: '10%', left: '25%', delay: 0.4, size: 66 },
  { icon: FaTelegramPlane, color: '#0088cc', top: '5%', right: '10%', delay: 0.8, size: 64 },
  { icon: FaFacebookF, color: '#1877F2', top: '32%', left: '0%', delay: 1.2, size: 60 },
  { icon: Mail, color: '#10B981', top: '40%', right: '2%', delay: 1.6, size: 68 },
  { icon: MessageSquare, color: '#34C759', top: '52%', left: '20%', delay: 2, size: 58 },
]

export function FloatingIcons({ iconsY }) {
  return (
    <motion.div style={{ y: iconsY, willChange: 'transform' }} className="absolute inset-0">
      {floatingIconsData.map((item, idx) => (
        <MotionDiv
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, delay: item.delay, ease: 'easeInOut' }}
          className="absolute z-20 hidden items-center justify-center lg:flex"
          style={{ top: item.top, left: item.left, right: item.right, willChange: 'transform, opacity' }}
        >
          <div
            className="relative rounded-2xl border border-white/40 bg-white/90 shadow-sm"
            style={{
              width: item.size,
              height: item.size,
              boxShadow: `0 8px 30px ${item.color}20, 0 2px 8px rgba(0,0,0,0.05)`,
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-white/80 to-white/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <item.icon size={item.size * 0.45} style={{ color: item.color }} />
            </div>
          </div>
        </MotionDiv>
      ))}
    </motion.div>
  )
}
