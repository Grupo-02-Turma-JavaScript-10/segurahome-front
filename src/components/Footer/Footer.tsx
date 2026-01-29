import { Link } from 'react-router-dom'
import logoIcon from '../../assets/logoIcon.svg'

export function Footer() {
  return (
    <footer className="pt-10 pb-14">
      <div className="mx-auto w-full max-w-[1120px] px-5">
        <div
          className={
            'rounded-[18px] border border-white/10 ' +
            'bg-gradient-to-b from-[#202830]/70 to-[#202830]/35 ' +
            'shadow-[0_18px_60px_rgba(0,0,0,0.55)] ' +
            'backdrop-blur-xl backdrop-saturate-150'
          }
        >
          <div className="px-6 py-6 sm:px-7">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={logoIcon}
                  alt="SeguraHome"
                  className="h-10 w-auto object-contain"
                  draggable={false}
                />

                <div className="leading-tight">
                  <p className="font-['Sora'] text-[15px] font-extrabold tracking-[-0.02em] text-[#F8F8F8]/95">
                    SeguraHome
                  </p>
                  <p className="mt-0.5 text-sm text-[#E0E8E8]/70">
                    Seguros com confiança e clareza.
                  </p>
                </div>
              </div>

              <nav aria-label="Links do rodapé" className="flex flex-wrap gap-2.5">
                <Link
                  to="/sobre"
                  className="rounded-full border border-white/10 bg-[#202830]/25 px-4 py-2 text-sm text-[#E0E8E8]/85 transition hover:-translate-y-0.5 hover:border-[#00A050]/40 hover:bg-[#00A050]/10 hover:text-[#F8F8F8]/95 hover:shadow-[0_12px_30px_rgba(0,160,80,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A050]/45"
                >
                  Sobre
                </Link>

                <Link
                  to="/planos"
                  className="rounded-full border border-white/10 bg-[#202830]/25 px-4 py-2 text-sm text-[#E0E8E8]/85 transition hover:-translate-y-0.5 hover:border-[#00A050]/40 hover:bg-[#00A050]/10 hover:text-[#F8F8F8]/95 hover:shadow-[0_12px_30px_rgba(0,160,80,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A050]/45"
                >
                  Planos
                </Link>

                <Link
                  to="/imoveis"
                  className="rounded-full border border-white/10 bg-[#202830]/25 px-4 py-2 text-sm text-[#E0E8E8]/85 transition hover:-translate-y-0.5 hover:border-[#00A050]/40 hover:bg-[#00A050]/10 hover:text-[#F8F8F8]/95 hover:shadow-[0_12px_30px_rgba(0,160,80,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A050]/45"
                >
                  Imóveis
                </Link>
              </nav>
            </div>

            <div className="my-5 h-px bg-[linear-gradient(90deg,transparent,rgba(224,232,232,0.18),transparent)]" />

            <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[#E0E8E8]/65">© 2026 | SeguraHome</span>
              <span className="text-[#E0E8E8]/65">Todos os direitos reservados.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
