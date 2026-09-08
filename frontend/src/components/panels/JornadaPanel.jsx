import PanelOverlay from '../layout/PanelOverlay'
import TimelineItem from '../ui/timelineItem'
import { useJornada } from '../../hooks/useJornadas'

export default function JornadaPanel({ onClose }) {
  const { data: jornada, isLoading } = useJornada()

  return (
    <PanelOverlay direction="left" onClose={onClose}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-24 min-h-screen flex flex-col justify-center">
        <p className="text-[#c8a96e] text-xs tracking-[.25em] uppercase mb-5">Trajetória</p>
        <h2 className="font-display text-7xl text-white leading-none mb-2">Minha<br />Jornada</h2>
        <div className="w-14 h-px bg-[#c8a96e] opacity-60 mb-10" />
        {isLoading ? (
          <p className="text-[#6b6560]">Carregando...</p>
        ) : (
          <div className="flex flex-col gap-8">
            {jornada?.map(item => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </PanelOverlay>
  )
}