export default function EdgeHandle({ dir, label, arrow, onClick, mounted, delay }) {
  const gridPos = {
    top:    'col-span-3 row-start-1',
    bottom: 'col-span-3 row-start-3',
    left:   'col-start-1 row-start-2',
    right:  'col-start-3 row-start-2',
  }[dir]

  const isVertical = dir === 'left' || dir === 'right'

  // posição inicial fora da tela por direção
  const initialTransform = {
    top:    'translateY(-100%)',
    bottom: 'translateY(100%)',
    left:   'translateX(-100%)',
    right:  'translateX(100%)',
  }[dir]

  return (
    <button
      onClick={onClick}
      className={`
        ${gridPos} group relative flex items-center justify-center
        border border-[#2a2a2a] bg-transparent
        hover:bg-[#c8a96e]/5 transition-colors duration-300
        cursor-pointer focus:outline-none overflow-hidden
      `}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translate(0,0)' : initialTransform,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s cubic-bezier(0.77,0,0.18,1) ${delay}ms`,
      }}
    >
      <span
        className={`
          font-display text-[#6b6560] tracking-[.2em] uppercase text-base
          group-hover:text-[#c8a96e] transition-colors duration-300
        `}
        style={isVertical ? { writingMode: 'vertical-rl', transform: dir === 'left' ? 'rotate(180deg)' : 'none' } : {}}
      >
        {label}
      </span>

      <span className="absolute opacity-0 group-hover:opacity-100 text-[#c8a96e] text-lg transition-opacity duration-300">
        {arrow}
      </span>
    </button>
  )
}