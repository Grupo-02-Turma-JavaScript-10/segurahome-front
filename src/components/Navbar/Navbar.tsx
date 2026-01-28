import { Buildings, FileText, House, Phone, ShieldCheck } from 'phosphor-react'
import { Link } from 'react-router-dom'

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
          <a
            href="#"
            aria-label="SeguraHome - Página inicial"
            className="inline-flex items-center gap-2.5 rounded-full border border-transparent px-3 py-2 transition hover:border-white/10 hover:bg-[#202830]/25"
          >
            <span
              aria-hidden="true"
              className="grid h-7 w-7 place-items-center rounded-[10px] border border-[#00A050]/30 bg-[#00A050]/15 shadow-[0_10px_22px_rgba(0,160,80,0.10)]"
            >
              <ShieldCheck size={18} weight="bold" />
            </span>
            <span className="font-['Sora'] font-bold tracking-[-0.02em]">SeguraHome</span>
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center justify-center gap-1.5 md:flex">
            <a
              href="#inicio"
              className="inline-flex items-center gap-2.5 rounded-full border border-transparent px-3 py-2 text-[#F8F8F8]/90 transition hover:-translate-y-0.5 hover:border-white/10 hover:bg-[#202830]/25"
            >
              <House size={18} />
              <span>Início</span>
            </a>
            <a
              href="#planos"
              className="inline-flex items-center gap-2.5 rounded-full border border-transparent px-3 py-2 text-[#F8F8F8]/90 transition hover:-translate-y-0.5 hover:border-white/10 hover:bg-[#202830]/25"
            >
              <FileText size={18} />
              <span>Planos</span>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2.5 rounded-full border border-transparent px-3 py-2 text-[#F8F8F8]/90 transition hover:-translate-y-0.5 hover:border-white/10 hover:bg-[#202830]/25"
            >
              <Phone size={18} />
              <span>Contato</span>
            </a>

            <Link
              to="/imoveis"
              className="inline-flex items-center gap-2.5 rounded-full border border-transparent px-3 py-2 text-[#F8F8F8]/90 transition hover:-translate-y-0.5 hover:border-white/10 hover:bg-[#202830]/25"
            >
              <Buildings size={18} />
              <span>Imóveis</span>
            </Link>
          </nav>

          <div aria-label="Ações" className="inline-flex items-center justify-end gap-2.5">
            <a
              href="#"
              className="inline-flex select-none items-center justify-center gap-2.5 rounded-full border border-white/10 bg-transparent px-3.5 py-2 text-[#F8F8F8] transition hover:-translate-y-0.5 hover:border-white/20"
            >
              Entrar
            </a>
            <a
              href="#simular"
              className="inline-flex select-none items-center justify-center gap-2.5 rounded-full border border-[#00A050]/40 bg-[#00A050]/20 px-3.5 py-2 text-[#F8F8F8] shadow-[0_12px_30px_rgba(0,160,80,0.18)] transition hover:-translate-y-0.5 hover:border-[#00A050]/55 hover:bg-[#00A050]/25"
            >
              Simular
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
