import PanelOverlay from '../layout/PanelOverlay'
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'

const contatos = [
  {
    nome:  'LinkedIn',
    sub:   'Vamos nos conectar',
    url:   'https://www.linkedin.com/in/izaque-ferreira',
    icon:  FaLinkedin,
    color: 'text-blue-400',
    bg:    'bg-blue-900/30',
    hover: 'hover:border-blue-500 hover:shadow-blue-500/10',
    hoverIcon: 'group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    nome:  'GitHub',
    sub:   'Veja meus projetos',
    url:   'https://github.com/Izaque674',
    icon:  FaGithub,
    color: 'text-slate-300',
    bg:    'bg-slate-800',
    hover: 'hover:border-slate-400 hover:shadow-slate-400/10',
    hoverIcon: 'group-hover:bg-white group-hover:text-black',
  },
  {
    nome:  'WhatsApp',
    sub:   'Manda uma mensagem',
    url:   'https://wa.me/5542984252941',
    icon:  FaWhatsapp,
    color: 'text-green-400',
    bg:    'bg-green-900/30',
    hover: 'hover:border-green-500 hover:shadow-green-500/10',
    hoverIcon: 'group-hover:bg-green-600 group-hover:text-white',
  },
  {
    nome:  'Instagram',
    sub:   '@izaquefs',
    url:   'https://www.instagram.com/izaquefs/',
    icon:  FaInstagram,
    color: 'text-pink-400',
    bg:    'bg-pink-900/30',
    hover: 'hover:border-pink-500 hover:shadow-pink-500/10',
    hoverIcon: 'group-hover:bg-pink-600 group-hover:text-white',
  },
  
]

export default function RedesPanel({ onClose }) {
  return (
    <PanelOverlay direction="right" onClose={onClose}>
      <div className="max-w-xl mx-auto px-4 md:px-8 py-12 md:py-24 min-h-screen flex flex-col justify-center">

        <p className="text-[#c8a96e] text-xs tracking-[.25em] uppercase mb-5">Fale comigo</p>
        <h2 className="font-display text-white leading-none mb-2"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
          Contato
        </h2>
        <div className="w-14 h-px bg-[#c8a96e] opacity-60 mb-4" />

        <p className="text-[#6b6560] text-sm leading-relaxed mb-10">
          Estou sempre aberto a novos projetos e parcerias. Se você tem uma ideia ou apenas quer dizer um oi, escolha um canal:
        </p>

        <div className="flex flex-col gap-3">
          {contatos.map(c => {
            const Icon = c.icon
            return (
              <a
                key={c.nome}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className={`
                  flex items-center gap-4 p-4
                  bg-[#1a1a1a] rounded-xl
                  border border-[#2a2a2a]
                  hover:shadow-lg transition-all duration-300
                  group ${c.hover}
                `}
              >
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${c.bg} ${c.color}
                  transition-all duration-300 shrink-0
                  ${c.hoverIcon}
                `}>
                  <Icon className="text-lg" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{c.nome}</div>
                  <div className="text-[#6b6560] text-xs">{c.sub}</div>
                </div>
                <span className="ml-auto text-[#6b6560] text-xs tracking-widest uppercase
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Abrir →
                </span>
              </a>
            )
          })}
        </div>

      </div>
    </PanelOverlay>
  )
}