import { useSobreMim } from '../hooks/useSobreMim'

export default function Center() {
  const { data: sobre } = useSobreMim()
  const nome   = sobre?.nome || 'Izaque Ferreira'
  const partes = nome.split(' ')

  return (
    <div className="w-full h-full flex flex-col items-center justify-center
                    text-center border border-[#2a2a2a] relative overflow-hidden"
         style={{ padding: 'clamp(0.5rem, 3vw, 3rem)' }}>

      <div className="absolute inset-2 md:inset-5 border border-[#2a2a2a] opacity-40 pointer-events-none" />

      <p className="text-[#6b6560] tracking-[.2em] uppercase mb-3 md:mb-6"
         style={{ fontSize: 'clamp(8px, 1.5vw, 12px)' }}>
        Portfólio
      </p>

      <h1 className="font-display leading-none mb-3 w-full"
          style={{ fontSize: 'clamp(2rem, 11vw, 5.5rem)' }}>
        <span className="text-white block">{partes[0]}</span>
        <span className="text-[#c8a96e] block">{partes.slice(1).join(' ')}</span>
      </h1>

      {/* linha decorativa */}
    <div className="flex items-center justify-center gap-3 mb-4 md:mb-6 w-full">
    <div className="flex-1 max-w-16 border-t border-[#c8a96e] opacity-40" />
    <div className="w-1 h-1 rounded-full bg-[#c8a96e] opacity-60" />
    <div className="flex-1 max-w-16 border-t border-[#c8a96e] opacity-40" />
    </div>

      <p className="font-serif italic text-[#9a9490] w-full leading-snug mb-4 md:mb-8"
         style={{ fontSize: 'clamp(14px, 3.5vw, 18px)' }}>
        {sobre?.subtitulo?.split('\\n').map((linha, i) => (
          <span key={i} className="block">{linha}</span>
        ))}
      </p>

    </div>
  )
}