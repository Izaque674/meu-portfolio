export default function TimelineItem({ item }) {
  return (
    <div className="relative pl-8 border-l border-[#2a2a2a]">
      <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#c8a96e] -translate-x-[5px]" />
      <div className="text-[#c8a96e] font-display tracking-widest text-sm mb-1">
        {item.ano_inicio} — {item.ano_fim ?? 'Presente'}
      </div>
      <h3 className="text-white font-medium text-sm mb-1">{item.cargo}</h3>
      <p className="text-[#6b6560] text-xs mb-1">{item.empresa}</p>
      <p className="text-[#6b6560] text-xs leading-relaxed">{item.descricao}</p>
    </div>
  )
}