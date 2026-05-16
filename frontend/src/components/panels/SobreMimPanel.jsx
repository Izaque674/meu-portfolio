import PanelOverlay from '../layout/PanelOverlay'
import SkillsList from '../ui/SkillsList'
import { useSobreMim } from '../../hooks/useSobreMim'

export default function SobreMimPanel({ onClose }) {
  const { data: sobre, isLoading } = useSobreMim()
  const nome = sobre?.nome || 'Izaque Ferreira'

  return (
    <PanelOverlay direction="bottom" onClose={onClose}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-24 min-h-screen flex flex-col justify-center">
        <p className="text-[#c8a96e] text-xs tracking-[.25em] uppercase mb-5">Quem sou</p>
        <h2 className="font-display text-7xl text-white leading-none mb-2">Sobre<br />Mim</h2>
        <div className="w-14 h-px bg-[#c8a96e] opacity-60 mb-10" />
        {isLoading ? (
          <p className="text-[#6b6560]">Carregando...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-[#6b6560] text-sm leading-relaxed">
                Olá! Sou <strong className="text-white font-medium">{nome}</strong>,{' '}
                {sobre?.bio}
              </p>
            </div>
            <SkillsList habilidades={sobre?.habilidades} />
          </div>
        )}
      </div>
    </PanelOverlay>
  )
}