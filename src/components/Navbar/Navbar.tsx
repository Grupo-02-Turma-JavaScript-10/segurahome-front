import { Link } from 'react-router-dom'
import { FileText, House, Phone, Buildings } from 'phosphor-react'

import logoText from '../../assets/segura-home.svg'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 pt-2 pb-0 md:pt-3">
      <div className="mx-auto w-full max-w-[1120px] px-5">
        <div
          className={
            'grid items-center gap-4 px-3 ' +
            'h-16 ' + 
            'grid-cols-[1fr_auto_1fr] ' +
            'rounded-[18px] border border-white/10 ' +
            'bg-gradient-to-b from-[#202830]/70 to-[#202830]/30 ' +
            'shadow-[0_18px_60px_rgba(0,0,0,0.55)] ' +
            'backdrop-blur-xl backdrop-saturate-150'
          }
        >
          <Link
            to="/home"
            aria-label="SeguraHome - Página inicial"
            className="inline-flex h-12 items-center gap-3 rounded-full px-3 overflow-visible"
          >
            <img
              src={logoText}
              alt="SeguraHome"
              className="
                h-12 md:h-14
                w-auto object-contain
                -translate-y-[1px]
                drop-shadow-[0_10px_22px_rgba(0,0,0,0.45)]
              "
              draggable={false}
            />
          </Link>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center justify-center gap-1.5 md:flex"
          >
            <Link
              to="/home"
              className="inline-flex items-center gap-2.5 rounded-full border border-transparent px-3 py-2 text-[#F8F8F8]/90 transition hover:-translate-y-0.5 hover:border-[#00A050]/45 hover:bg-[#00A050]/15 hover:shadow-[0_12px_30px_rgba(0,160,80,0.22)]"
            >
              <House size={18} />
              <span>Home</span>
            </Link>

            <Link
              to="/planos"
              className="inline-flex items-center gap-2.5 rounded-full border border-transparent px-3 py-2 text-[#F8F8F8]/90 transition hover:-translate-y-0.5 hover:border-[#00A050]/45 hover:bg-[#00A050]/15 hover:shadow-[0_12px_30px_rgba(0,160,80,0.22)]"
            >
              <FileText size={18} />
              <span>Planos</span>
            </Link>

            <Link
              to="/imoveis"
              className="inline-flex items-center gap-2.5 rounded-full border border-transparent px-3 py-2 text-[#F8F8F8]/90 transition hover:-translate-y-0.5 hover:border-[#00A050]/45 hover:bg-[#00A050]/15 hover:shadow-[0_12px_30px_rgba(0,160,80,0.22)]"
            >
              <Buildings size={18} />
              <span>Imóveis</span>
            </Link>

            <Link
              to="/sobre"
              className="inline-flex items-center gap-2.5 rounded-full border border-transparent px-3 py-2 text-[#F8F8F8]/90 transition hover:-translate-y-0.5 hover:border-[#00A050]/45 hover:bg-[#00A050]/15 hover:shadow-[0_12px_30px_rgba(0,160,80,0.22)]"
            >
              <Phone size={18} />
              <span>Sobre nós</span>
            </Link>
          </nav>

          <div className="hidden md:block" />
        </div>
      </div>
    </header>
  )
}
