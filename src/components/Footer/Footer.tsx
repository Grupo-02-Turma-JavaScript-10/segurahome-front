import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer id="contato" className="py-9 pb-14">
      <div className="mx-auto w-full max-w-[1120px] px-5">
        <div
          className={
            'rounded-[18px] border border-white/10 p-5 ' +
            'bg-gradient-to-b from-[#202830]/90 to-[#202830]/55 ' +
            'shadow-[0_12px_40px_rgba(0,0,0,0.55)]'
          }
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div className="min-w-[240px]">
              <div className="font-['Sora'] text-[18px] font-extrabold tracking-[-0.03em]">
                SeguraHome
              </div>
              <p className="mt-2.5 mb-3.5 max-w-[52ch] leading-relaxed text-[#E0E8E8]/80">
                Template inicial de UI: rápido, personalizável e com visual “liquid glass”.
              </p>

              <div aria-label="Redes sociais" className="inline-flex gap-2.5">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-[#202830]/25 transition hover:-translate-y-0.5 hover:border-[#00A050]/35 hover:bg-[#00A050]/10"
                >
                  <InstagramLogo size={18} />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-[#202830]/25 transition hover:-translate-y-0.5 hover:border-[#00A050]/35 hover:bg-[#00A050]/10"
                >
                  <LinkedinLogo size={18} />
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-[#202830]/25 transition hover:-translate-y-0.5 hover:border-[#00A050]/35 hover:bg-[#00A050]/10"
                >
                  <GithubLogo size={18} />
                </a>
              </div>
            </div>

            <div aria-label="Links do rodapé" className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:justify-items-end">
              <div className="grid w-full gap-2 lg:w-[180px]">
                <div className="font-['Sora'] text-sm font-bold text-[#F8F8F8]/90">Produto</div>
                <a className="w-fit border-b border-transparent py-1.5 text-[#E0E8E8]/80 transition hover:border-[#00A050]/40 hover:text-[#F8F8F8]/95" href="#planos">
                  Planos
                </a>
                <a className="w-fit border-b border-transparent py-1.5 text-[#E0E8E8]/80 transition hover:border-[#00A050]/40 hover:text-[#F8F8F8]/95" href="#simular">
                  Simulação
                </a>
                <a className="w-fit border-b border-transparent py-1.5 text-[#E0E8E8]/80 transition hover:border-[#00A050]/40 hover:text-[#F8F8F8]/95" href="#">
                  Coberturas
                </a>
              </div>

              <div className="grid w-full gap-2 lg:w-[180px]">
                <div className="font-['Sora'] text-sm font-bold text-[#F8F8F8]/90">Empresa</div>
                <a className="w-fit border-b border-transparent py-1.5 text-[#E0E8E8]/80 transition hover:border-[#00A050]/40 hover:text-[#F8F8F8]/95" href="#">
                  Sobre
                </a>
                <a className="w-fit border-b border-transparent py-1.5 text-[#E0E8E8]/80 transition hover:border-[#00A050]/40 hover:text-[#F8F8F8]/95" href="#">
                  Privacidade
                </a>
                <a className="w-fit border-b border-transparent py-1.5 text-[#E0E8E8]/80 transition hover:border-[#00A050]/40 hover:text-[#F8F8F8]/95" href="#">
                  Termos
                </a>
              </div>

              <div className="grid w-full gap-2 lg:w-[180px]">
                <div className="font-['Sora'] text-sm font-bold text-[#F8F8F8]/90">Suporte</div>
                <a className="w-fit border-b border-transparent py-1.5 text-[#E0E8E8]/80 transition hover:border-[#00A050]/40 hover:text-[#F8F8F8]/95" href="#">
                  Central de ajuda
                </a>
                <a className="w-fit border-b border-transparent py-1.5 text-[#E0E8E8]/80 transition hover:border-[#00A050]/40 hover:text-[#F8F8F8]/95" href="#">
                  Fale conosco
                </a>
                <a className="w-fit border-b border-transparent py-1.5 text-[#E0E8E8]/80 transition hover:border-[#00A050]/40 hover:text-[#F8F8F8]/95" href="#">
                  Status
                </a>
              </div>
            </div>
          </div>

          <div className="my-4 h-px bg-[linear-gradient(90deg,transparent,rgba(224,232,232,0.18),transparent)]" />

          <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
            <span className="text-[#E0E8E8]/70">© 2026 SeguraHome</span>
            <span className="text-[#E0E8E8]/70">Feito para customização do app</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
