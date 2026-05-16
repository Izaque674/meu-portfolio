import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const variants = {
  top:    { initial: { y: '-100%' }, animate: { y: 0 }, exit: { y: '-100%' } },
  bottom: { initial: { y: '100%'  }, animate: { y: 0 }, exit: { y: '100%'  } },
  left:   { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
  right:  { initial: { x: '100%'  }, animate: { x: 0 }, exit: { x: '100%'  } },
}

export default function PanelOverlay({ direction, onClose, children }) {
  const v = variants[direction]

  useEffect(() => {
    const fn = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', fn)
    // trava o scroll do body enquanto painel está aberto
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', fn)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-[#111111] overflow-y-auto"
        initial={v.initial}
        animate={v.animate}
        exit={v.exit}
        transition={{ duration: 0.55, ease: [0.77, 0, 0.18, 1] }}
      >
        {/* botão fechar — maior no mobile para toque fácil */}
        <button
          onClick={onClose}
          className="
            fixed top-4 right-4 md:top-8 md:right-8
            w-10 h-10 md:w-11 md:h-11 z-50
            border border-[#2a2a2a] text-[#6b6560] text-lg
            hover:text-[#c8a96e] hover:border-[#c8a96e]
            transition-colors duration-200 flex items-center justify-center
            active:scale-95
          "
        >
          ✕
        </button>

        {/* conteúdo com padding menor no mobile */}
        <div className="pt-16 md:pt-0">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}