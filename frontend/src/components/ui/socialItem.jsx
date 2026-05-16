export default function SocialItem({ rede }) {
  return (
    <li>
      <a
        href={rede.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-6 py-5 border-b border-[#2a2a2a]
                   hover:pl-4 transition-all duration-300 group"
      >
        <div className="w-12 h-12 border border-[#2a2a2a] flex items-center justify-center
                        text-[#c8a96e] group-hover:border-[#c8a96e] transition-colors shrink-0">
          {rede.icone.toUpperCase().slice(0, 2)}
        </div>
        <div>
          <div className="font-display text-xl tracking-widest text-white
                          group-hover:text-[#c8a96e] transition-colors">
            {rede.nome}
          </div>
          <div className="text-[#6b6560] text-xs mt-0.5">{rede.handle}</div>
        </div>
      </a>
    </li>
  )
}