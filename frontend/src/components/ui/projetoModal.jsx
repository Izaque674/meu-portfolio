import { useState } from 'react'
import { useProjetoDetalhe } from '../../hooks/useProjetoDetalhe'

export default function ProjetoModal({ id, onClose }) {
  const { data: projeto, isLoading } = useProjetoDetalhe(id)
  const [imagemAtual, setImagemAtual] = useState(0)

  const imagens = projeto?.imagens || []
  const temAnterior = imagemAtual > 0
  const temProxima  = imagemAtual < imagens.length - 1

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#141414] border border-[#2a2a2a] w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 z-10
                     border border-[#2a2a2a] text-[#6b6560]
                     hover:text-[#c8a96e] hover:border-[#c8a96e]
                     transition-colors flex items-center justify-center"
        >
          ✕
        </button>

        {isLoading ? (
          <p className="text-[#6b6560] p-8">Carregando...</p>
        ) : (
          <>
            {imagens.length > 0 && (
              <div
                className="relative w-full bg-[#0c0c0c] flex items-center justify-center"
                style={{ height: 'clamp(200px, 50vw, 480px)' }}
              >
                <img
                  src={imagens[imagemAtual]?.url}
                  alt={imagens[imagemAtual]?.alt}
                  className="max-w-full max-h-full object-contain"
                  style={{ maxHeight: 'clamp(200px, 50vw, 480px)' }}
                />

                {temAnterior && (
                  <button
                    onClick={() => setImagemAtual(i => i - 1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2
                               w-9 h-9 bg-black/60 border border-[#2a2a2a]
                               text-white hover:text-[#c8a96e] hover:border-[#c8a96e]
                               transition-colors flex items-center justify-center"
                  >
                    ←
                  </button>
                )}
                {temProxima && (
                  <button
                    onClick={() => setImagemAtual(i => i + 1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2
                               w-9 h-9 bg-black/60 border border-[#2a2a2a]
                               text-white hover:text-[#c8a96e] hover:border-[#c8a96e]
                               transition-colors flex items-center justify-center"
                  >
                    →
                  </button>
                )}

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {imagens.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setImagemAtual(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        i === imagemAtual ? 'bg-[#c8a96e]' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[#c8a96e] text-xs tracking-[.2em] uppercase mb-1">
                    {projeto?.tag}
                  </p>
                  <h2
                    className="font-display text-white leading-none"
                    style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
                  >
                    {projeto?.titulo}
                  </h2>
                </div>
                {projeto?.link && (
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-xs tracking-widest uppercase
                               text-[#c8a96e] border border-[#8a7254] px-4 py-2
                               hover:bg-[#c8a96e] hover:text-black transition-colors"
                  >
                    Ver projeto →
                  </a>
                )}
              </div>

              <div className="w-10 h-px bg-[#c8a96e] opacity-60 mb-4" />

              <p className="text-[#6b6560] text-sm leading-relaxed mb-6">
                {projeto?.descricao_completa || projeto?.descricao}
              </p>

              {projeto?.tecnologias && (
                <div className="flex flex-wrap gap-2">
                  {projeto.tecnologias.split(',').map(tec => (
                    <span
                      key={tec}
                      className="text-[10px] tracking-widest uppercase
                                 text-[#c8a96e] border border-[#2a2a2a] px-3 py-1"
                    >
                      {tec.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}