import { useEffect, useState } from 'react'
import EdgeHandle from './EdgeHandle'
import Center from '../Center'

const edges = [
  { dir: 'top',    label: 'Meus Projetos', arrow: '↓' },
  { dir: 'left',   label: 'Jornada',       arrow: '→' },
  { dir: 'right',  label: 'Contato', arrow: '←' },
  { dir: 'bottom', label: 'Sobre Mim',     arrow: '↑' },
]

export default function Stage({ onOpenPanel }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  
  const sideSize = 'clamp(28px, 7vw, 64px)'
  const topSize  = 'clamp(40px, 6vh, 64px)'

  return (
    <div
      className="w-full h-full grid"
      style={{
        gridTemplateRows:    `${topSize} 1fr ${topSize}`,
        gridTemplateColumns: `${sideSize} 1fr ${sideSize}`,
      }}
    >
      {edges.map((e, i) => (
        <EdgeHandle
          key={e.dir}
          {...e}
          mounted={mounted}
          delay={i * 120}
          onClick={() => onOpenPanel(e.dir)}
        />
      ))}

      <div
        style={{
          gridColumn: '2',
          gridRow: '2',
          minWidth: 0,        // impede overflow no grid
          overflow: 'hidden',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'scale(1)' : 'scale(0.97)',
          transition: `opacity 0.6s ease ${4 * 120 + 200}ms, transform 0.6s ease ${4 * 120 + 200}ms`,
        }}
      >
        <Center />
      </div>
    </div>
  )
}