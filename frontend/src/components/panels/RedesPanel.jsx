import PanelOverlay from '../layout/PanelOverlay'
import SocialItem from '../ui/SocialItem'
import { useRedes } from '../../hooks/useRedes'

export default function RedesPanel({ onClose }) {
  const { data: redes, isLoading } = useRedes()

  return (
    <PanelOverlay direction="right" onClose={onClose}>
     <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-24 min-h-screen flex flex-col justify-center">
        <p className="text-[#c8a96e] text-xs tracking-[.25em] uppercase mb-5">Contato</p>
        <h2 className="font-display text-7xl text-white leading-none mb-2">Redes<br />Sociais</h2>
        <div className="w-14 h-px bg-[#c8a96e] opacity-60 mb-10" />
        {isLoading ? (
          <p className="text-[#6b6560]">Carregando...</p>
        ) : (
          <ul className="flex flex-col">
            {redes?.map(item => (
              <SocialItem key={item.id} rede={item} />
            ))}
          </ul>
        )}
      </div>
    </PanelOverlay>
  )
}