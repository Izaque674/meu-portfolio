import { useEffect } from 'react'

const slideIn = {
  top:    'animate-slide-top',
  bottom: 'animate-slide-bottom',
  left:   'animate-slide-left',
  right:  'animate-slide-right',
}

export default function PanelOverlay({ direction, onClose, children }) {
  useEffect(() => {
    const fn = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', fn)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-[#111111] overflow-y-auto"
      style={{
        animation: 'none',
        transform: 'none',
      }}
    >
      <button
        onClick={onClose}
        className="fixed top-4 right-4 md:top-8 md:right-8
                   w-10 h-10 md:w-11 md:h-11 z-50
                   border border-[#2a2a2a] text-[#6b6560] text-lg
                   hover:text-[#c8a96e] hover:border-[#c8a96e]
                   transition-colors duration-200 flex items-center justify-center"
      >
        ✕
      </button>
      <div className="pt-16 md:pt-0">
        {children}
      </div>
    </div>
  )
}