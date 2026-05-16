export default function SkillsList({ habilidades }) {
  if (!habilidades?.length) return null

  return (
    <ul className="flex flex-col">
      {habilidades.map(h => (
        <li key={h.id}
            className="flex items-center gap-4 py-3 border-b border-[#2a2a2a]
                       text-[#6b6560] text-sm">
          <span className="w-5 h-px bg-[#c8a96e] shrink-0" />
          {h.nome}
        </li>
      ))}
    </ul>
  )
}