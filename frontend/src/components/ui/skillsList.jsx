import { useState } from 'react'

export default function SkillsList({ habilidades }) {
  const [aberto, setAberto] = useState(null)

  if (!habilidades?.length) return null

  return (
    <div className="flex flex-col gap-2">
      {habilidades.map(h => (
        <div key={h.id} className="border border-[#2a2a2a] overflow-hidden">
          
          {/* cabeçalho clicável */}
          <button
            onClick={() => setAberto(aberto === h.id ? null : h.id)}
            className="w-full flex items-center justify-between px-4 py-3
                       hover:bg-[#c8a96e]/5 transition-colors duration-200 group"
          >
            <div className="flex items-center gap-3">
              <span className="w-4 h-px bg-[#c8a96e] opacity-60 shrink-0" />
              <span className="text-[#e8e4dc] text-sm font-medium">{h.nome}</span>
            </div>
            <span className={`text-[#c8a96e] text-xs transition-transform duration-300 ${
              aberto === h.id ? 'rotate-180' : ''
            }`}>
              ▾
            </span>
          </button>

          {/* conteúdo expandido */}
          <div className={`overflow-hidden transition-all duration-300 ${
            aberto === h.id ? 'max-h-48' : 'max-h-0'
          }`}>
            <div className="px-4 pb-4 pt-1 border-t border-[#2a2a2a]">
              {h.descricao && (
                <p className="text-[#6b6560] text-xs leading-relaxed mb-2">
                  {h.descricao}
                </p>
              )}
              {h.projetos && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {h.projetos.split(',').map(p => (
                    <span key={p}
                      className="text-[9px] tracking-widest uppercase
                                 text-[#c8a96e] border border-[#2a2a2a] px-2 py-0.5">
                      {p.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}