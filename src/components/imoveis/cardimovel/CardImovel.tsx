import { HouseLine } from 'phosphor-react'

export default function CardImovel() {
  return (
    <article className="relative overflow-hidden rounded-[18px] border border-white/10 bg-linear-to-b from-[#202830]/90 to-[#202830]/55 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
      <header className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#00A050]/30 bg-[#00A050]/12">
              <HouseLine size={18} weight="bold" />
            </span>
            <div className="min-w-0">
              <h3 className="m-0 truncate font-['Sora'] text-lg tracking-[-0.01em]">Apartamento</h3>
              <p className="m-0 text-xs text-[#E0E8E8]/70">ID #101</p>
            </div>
          </div>

          <div className="mt-3 grid gap-1 text-sm text-[#E0E8E8]/80">
            <div className="truncate">Praça da Sé, 100 • Apto 12</div>
            <div className="truncate">Sé • CEP 01001-000</div>
          </div>
        </div>

        <div className="shrink-0 text-right">
          <div className="text-xs text-[#E0E8E8]/70">Valor estimado</div>
          <div className="font-['Sora'] text-[22px] font-extrabold">R$ 350.000</div>
        </div>
      </header>

      <section className="mt-4">
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-[#E0E8E8]/80">
            Área:
            <span className="ml-1 font-semibold text-[#F8F8F8]">72m²</span>
          </span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-[#E0E8E8]/80">
            Plano:
            <span className="ml-1 font-semibold text-[#F8F8F8]">Plano Essencial</span>
          </span>
          <span className="inline-flex items-center rounded-full border border-white/10 bg-black/15 px-3 py-1 text-xs text-[#E0E8E8]/80">
            Preço área:
            <span className="ml-1 font-semibold text-[#F8F8F8]">R$ 89,90/mês</span>
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="inline-flex w-full select-none items-center justify-center gap-2.5 rounded-full border border-[#00A050]/40 bg-[#00A050]/18 px-3.5 py-2 text-[#F8F8F8] shadow-[0_12px_30px_rgba(0,160,80,0.14)] transition hover:-translate-y-0.5 hover:border-[#00A050]/55 hover:bg-[#00A050]/22"
          >
            Editar
          </button>
          <button
            type="button"
            className="inline-flex w-full select-none items-center justify-center gap-2.5 rounded-full border border-red-400/35 bg-red-500/15 px-3.5 py-2 text-[#F8F8F8] transition hover:-translate-y-0.5 hover:border-red-400/55 hover:bg-red-500/20"
          >
            Deletar
          </button>
        </div>
      </section>
    </article>
  )
}