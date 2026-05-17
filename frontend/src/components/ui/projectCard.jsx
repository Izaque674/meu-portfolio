export default function ProjectCard({ projeto, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        border border-[#2a2a2a] p-7
        hover:border-[#8a7254] hover:-translate-y-1
        transition-all duration-200 cursor-pointer group
      "
    >
      <div className="font-display text-3xl text-[#c8a96e] opacity-30 mb-2 leading-none">
        {String(projeto.numero).padStart(2, '0')}
      </div>
      <h3 className="font-medium text-white text-sm tracking-wide mb-2">
        {projeto.titulo}
      </h3>
      <p className="text-[#6b6560] text-xs leading-relaxed mb-4">
        {projeto.descricao}
      </p>
      {projeto.tag && (
        <span className="text-[10px] tracking-widest uppercase text-[#c8a96e] border border-[#8a7254] px-2 py-0.5 opacity-80">
          {projeto.tag}
        </span>
      )}
    </div>
  )
}