import PanelOverlay from '../layout/PanelOverlay'
import ProjectCard  from '../ui/ProjectCard'
import { useProjetos } from '../../hooks/useProjetos'

export default function ProjetosPanel({ onClose }) {
  const { data: projetos, isLoading } = useProjetos()

  return (
    <PanelOverlay direction="top" onClose={onClose}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-24 min-h-screen flex flex-col justify-center">
        <p className="text-[#c8a96e] text-xs tracking-[.25em] uppercase mb-5">
          Portfólio
        </p>
        <h2 className="font-display text-7xl text-white leading-none mb-2">
          Meus<br />Projetos
        </h2>
        <div className="w-14 h-px bg-[#c8a96e] opacity-60 mb-10" />

        {isLoading ? (
          <p className="text-[#6b6560]">Carregando...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projetos?.map(p => (
              <ProjectCard key={p.id} projeto={p} />
            ))}
          </div>
        )}

      </div>
    </PanelOverlay>
  )
}