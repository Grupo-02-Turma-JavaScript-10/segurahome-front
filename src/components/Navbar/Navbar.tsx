import { Link } from 'react-router-dom'
import { FileText, House, Phone, Buildings } from 'phosphor-react'
import logo from '../../../public/favicon.svg'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 py-3">
      <div className="mx-auto w-full max-w-[1120px] px-5">
        <div
          className={
            'grid items-center gap-4 px-3 py-3 ' +
            'grid-cols-[1fr_auto_1fr] ' +
            'rounded-[18px] border border-white/10 ' +
            'bg-gradient-to-b from-[#202830]/70 to-[#202830]/30 ' +
            'shadow-[0_18px_60px_rgba(0,0,0,0.55)] ' +
            'backdrop-blur-xl backdrop-saturate-150'
          }
        >
          <Link
            to="/HomePage"
            aria-label="SeguraHome - Página inicial"
            className="inline-flex items-center gap-2.5 rounded-full border border-transparent px-3 py-2 transition hover:border-[#00A050]/45 hover:bg-[#00A050]/10 hover:shadow-[0_12px_30px_rgba(0,160,80,0.18)]"
          >
            <img
              src={logo}
              alt="Logo SeguraHome"
              className="h-10 w-10 object-contain"
            />

            <span className="font-['Sora'] text-xl md:text-2xl font-extrabold tracking-[-0.03em] text-white">
              SeguraHome
            </span>
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center justify-center gap-1.5 md:flex">
            <Link
              to="/"
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
        </div>
      </div>
    </header>
  )
}
