import { useEffect, useState } from 'react'

export default function EdgeHandle({ dir, label, arrow, onClick, mounted, delay }) {
  const [pulsing, setPulsing] = useState(false)

  const gridPos = {
    top:    'col-span-3 row-start-1',
    bottom: 'col-span-3 row-start-3',
    left:   'col-start-1 row-start-2',
    right:  'col-start-3 row-start-2',
  }[dir]

  const isVertical = dir === 'left' || dir === 'right'

  const initialTransform = {
    top:    'translateY(-100%)',
    bottom: 'translateY(100%)',
    left:   'translateX(-100%)',
    right:  'translateX(100%)',
  }[dir]

  /
  useEffect(() => {
    if (!mounted) return

   
    const startDelay = delay + 800

    const timeout = setTimeout(() => {
      let count = 0
      const interval = setInterval(() => {
        setPulsing(true)
        setTimeout(() => setPulsing(false), 1500)
        count++
        
        if (count >= 3) clearInterval(interval)
      })
    }, startDelay)

    return () => clearTimeout(timeout)
  }, [mounted, delay])

  return (
    <button
      onClick={onClick}
      className={`
        ${gridPos} group relative flex items-center justify-center
        border border-[#2a2a2a] bg-transparent
        cursor-pointer focus:outline-none overflow-hidden
        transition-all duration-300
        hover:bg-[#c8a96e]/5
      `}
      style={{
        opacity:    mounted ? 1 : 0,
        transform:  mounted ? 'translate(0,0)' : initialTransform,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.77,0,0.18,1) ${delay}ms,
                     border-color 0.3s, background 0.3s`,
        borderColor: pulsing ? '#c8a96e' : undefined,
        boxShadow:   pulsing ? '0 0 12px rgba(200,169,110,0.3)' : undefined,
      }}
    >
      <span
        className="font-display text-[#6b6560] tracking-[.2em] uppercase text-base
                   group-hover:text-[#c8a96e] transition-colors duration-300"
        style={{
          ...(isVertical ? { writingMode: 'vertical-rl' } : {}),
          ...(dir === 'left' ? { transform: 'rotate(180deg)' } : {}),
          color: pulsing ? '#c8a96e' : undefined,
          transition: 'color 0.3s',
        }}
      >
        {label}
      </span>
<span
  className="absolute opacity-0 group-hover:opacity-100
             text-[#c8a96e] text-base transition-all duration-300"
  style={{
    top:    dir === 'top'    ? 'auto'  : undefined,
    bottom: dir === 'bottom' ? 'auto'  : undefined,
    ...(dir === 'top'    && { bottom: '12px', top: 'auto' }),
    ...(dir === 'bottom' && { top: '12px', bottom: 'auto' }),
    ...(dir === 'left'   && { right: '12px', left: 'auto' }),
    ...(dir === 'right'  && { left: '12px', right: 'auto' }),
  }}
>
  {arrow}
</span>
    </button>
  )
}