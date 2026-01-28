import {
  ArrowRight,
  CheckCircle,
  HouseLine,
  Lightning,
  ShieldCheck,
  Sparkle,
} from 'phosphor-react'

export function HomePage() {
  return (
    <div id="inicio">
      <section className="pt-6 pb-12">
        <div className="mx-auto w-full max-w-[1120px] px-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-6">
          <div className="py-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00A050]/30 bg-[#00A050]/12 px-3 py-2 text-[#F8F8F8]/90">
              <Sparkle size={16} weight="fill" />
              UI Template • Liquid Glass
            </span>

            <h1 className="mt-3.5 mb-2.5 font-['Sora'] text-[42px] leading-[1.06] tracking-[-0.02em] lg:text-[52px]">
              Seguro residencial com visual moderno e base pronta para evoluir
            </h1>
            <p className="m-0 max-w-[70ch] leading-relaxed text-[#E0E8E8]/80">
              Um modelo inicial de interface para o SeguraHome: navbar com efeito glass, cards,
              seções e componentes estáticos para você personalizar.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href="#simular"
                className="inline-flex select-none items-center justify-center gap-2.5 rounded-full border border-[#00A050]/40 bg-[#00A050]/20 px-3.5 py-2 text-[#F8F8F8] shadow-[0_12px_30px_rgba(0,160,80,0.18)] transition hover:-translate-y-0.5 hover:border-[#00A050]/55 hover:bg-[#00A050]/25"
              >
                Começar simulação <ArrowRight size={18} />
              </a>
              <a
                href="#planos"
                className="inline-flex select-none items-center justify-center gap-2.5 rounded-full border border-white/10 bg-[#202830]/35 px-3.5 py-2 text-[#F8F8F8] transition hover:-translate-y-0.5 hover:border-white/20"
              >
                Ver planos
              </a>
            </div>

            <div className="mt-5 grid gap-2.5">
              <div className="inline-flex items-center gap-2.5 text-[#F8F8F8]/90">
                <ShieldCheck size={18} weight="bold" />
                <span>Componentes prontos para customização</span>
              </div>
              <div className="inline-flex items-center gap-2.5 text-[#F8F8F8]/90">
                <Lightning size={18} weight="bold" />
                <span>Layout consistente com tokens de tema</span>
              </div>
              <div className="inline-flex items-center gap-2.5 text-[#F8F8F8]/90">
                <HouseLine size={18} weight="bold" />
                <span>Home com seções e cards (placeholders)</span>
              </div>
            </div>
          </div>

          <div
            id="simular"
            aria-label="Painel de simulação"
            className={
              'relative overflow-hidden rounded-[22px] border border-white/10 ' +
              'bg-gradient-to-b from-[#202830]/70 to-[#202830]/30 ' +
              'shadow-[0_18px_60px_rgba(0,0,0,0.55)] ' +
              'backdrop-blur-xl backdrop-saturate-150'
            }
          >
            <div className="relative p-5">
              <h2 className="m-0 font-['Sora'] text-lg font-semibold tracking-[-0.02em]">
                Simulação rápida
              </h2>
              <p className="mt-1.5 mb-3.5 text-[#E0E8E8]/80">
                Campos estáticos para layout. Sem validação/submit.
              </p>

              <div className="grid gap-3">
                <label className="grid gap-2">
                  <span className="text-xs text-[#E0E8E8]/80">CEP</span>
                  <input
                    className="w-full rounded-[14px] border border-white/15 bg-black/25 px-3 py-3 text-[#F8F8F8]/90 outline-none transition placeholder:text-[#E0E8E8]/45 focus:border-[#00A050]/55 focus:shadow-[0_0_0_4px_rgba(0,160,80,0.14)]"
                    placeholder="00000-000"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs text-[#E0E8E8]/80">Tipo de imóvel</span>
                  <input
                    className="w-full rounded-[14px] border border-white/15 bg-black/25 px-3 py-3 text-[#F8F8F8]/90 outline-none transition placeholder:text-[#E0E8E8]/45 focus:border-[#00A050]/55 focus:shadow-[0_0_0_4px_rgba(0,160,80,0.14)]"
                    placeholder="Casa / Apartamento"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs text-[#E0E8E8]/80">Valor estimado (R$)</span>
                  <input
                    className="w-full rounded-[14px] border border-white/15 bg-black/25 px-3 py-3 text-[#F8F8F8]/90 outline-none transition placeholder:text-[#E0E8E8]/45 focus:border-[#00A050]/55 focus:shadow-[0_0_0_4px_rgba(0,160,80,0.14)]"
                    placeholder="Ex: 350.000"
                  />
                </label>

                <button
                  type="button"
                  className="inline-flex w-full select-none items-center justify-center gap-2.5 rounded-full border border-[#00A050]/40 bg-[#00A050]/20 px-3.5 py-3 text-[#F8F8F8] shadow-[0_12px_30px_rgba(0,160,80,0.18)] transition hover:-translate-y-0.5 hover:border-[#00A050]/55 hover:bg-[#00A050]/25"
                >
                  Continuar
                  <ArrowRight size={18} />
                </button>

                <div className="text-xs text-[#E0E8E8]/70">
                  Dica: personalize cores diretamente nas classes Tailwind.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-[1120px] px-5 grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="rounded-[18px] border border-white/10 bg-gradient-to-b from-[#202830]/90 to-[#202830]/55 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
            <div className="font-['Sora'] text-[22px] font-extrabold">+12</div>
            <div className="text-[#E0E8E8]/70">blocos prontos (home)</div>
          </div>
          <div className="rounded-[18px] border border-white/10 bg-gradient-to-b from-[#202830]/90 to-[#202830]/55 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
            <div className="font-['Sora'] text-[22px] font-extrabold">3</div>
            <div className="text-[#E0E8E8]/70">planos (placeholder)</div>
          </div>
          <div className="rounded-[18px] border border-white/10 bg-gradient-to-b from-[#202830]/90 to-[#202830]/55 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
            <div className="font-['Sora'] text-[22px] font-extrabold">1</div>
            <div className="text-[#E0E8E8]/70">tema consistente</div>
          </div>
        </div>
      </section>

      <section id="planos" className="py-12">
        <div className="mx-auto w-full max-w-[1120px] px-5">
          <h2 className="m-0 font-['Sora'] text-[28px] tracking-[-0.02em]">Planos</h2>
          <p className="mt-2 mb-0 max-w-[70ch] text-[#E0E8E8]/80">
            Cards estáticos para você conectar com sua API depois.
          </p>

          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            <article className="relative overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-b from-[#202830]/90 to-[#202830]/55 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="m-0 font-['Sora'] text-lg">Essencial</h3>
                <span className="text-[#E0E8E8]/70">para começar</span>
              </div>
              <div className="mt-2.5 flex items-baseline gap-2">
                <span className="font-['Sora'] text-[28px] font-black">R$ 29</span>
                <span className="text-[#E0E8E8]/70">/mês</span>
              </div>
              <div className="mt-3.5 grid gap-2.5 text-[#F8F8F8]/90">
                <div className="inline-flex items-center gap-2.5">
                  <CheckCircle size={18} /> Incêndio + explosão
                </div>
                <div className="inline-flex items-center gap-2.5">
                  <CheckCircle size={18} /> Danos elétricos básicos
                </div>
                <div className="inline-flex items-center gap-2.5">
                  <CheckCircle size={18} /> Assistência 24h
                </div>
              </div>
              <a
                href="#"
                className="mt-4 inline-flex w-full select-none items-center justify-center gap-2.5 rounded-full border border-white/10 bg-transparent px-3.5 py-2 text-[#F8F8F8] transition hover:-translate-y-0.5 hover:border-white/20"
              >
                Selecionar
              </a>
            </article>

            <article className="relative overflow-hidden rounded-[18px] border border-[#00A050]/45 bg-gradient-to-b from-[#202830]/92 to-[#202830]/60 p-5 shadow-[0_18px_60px_rgba(0,160,80,0.10)]">
              <div className="absolute right-3.5 top-3.5 rounded-full border border-[#00A050]/45 bg-[#00A050]/14 px-2.5 py-2 text-xs text-[#F8F8F8]/90">
                Recomendado
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="m-0 font-['Sora'] text-lg">Completo</h3>
                <span className="text-[#E0E8E8]/70">custo-benefício</span>
              </div>
              <div className="mt-2.5 flex items-baseline gap-2">
                <span className="font-['Sora'] text-[28px] font-black">R$ 49</span>
                <span className="text-[#E0E8E8]/70">/mês</span>
              </div>
              <div className="mt-3.5 grid gap-2.5 text-[#F8F8F8]/90">
                <div className="inline-flex items-center gap-2.5">
                  <CheckCircle size={18} /> Roubo + danos
                </div>
                <div className="inline-flex items-center gap-2.5">
                  <CheckCircle size={18} /> Danos elétricos ampliados
                </div>
                <div className="inline-flex items-center gap-2.5">
                  <CheckCircle size={18} /> Assistência premium
                </div>
              </div>
              <a
                href="#"
                className="mt-4 inline-flex w-full select-none items-center justify-center gap-2.5 rounded-full border border-[#00A050]/40 bg-[#00A050]/20 px-3.5 py-2 text-[#F8F8F8] shadow-[0_12px_30px_rgba(0,160,80,0.18)] transition hover:-translate-y-0.5 hover:border-[#00A050]/55 hover:bg-[#00A050]/25"
              >
                Selecionar
              </a>
            </article>

            <article className="relative overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-b from-[#202830]/90 to-[#202830]/55 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="m-0 font-['Sora'] text-lg">Total</h3>
                <span className="text-[#E0E8E8]/70">máxima proteção</span>
              </div>
              <div className="mt-2.5 flex items-baseline gap-2">
                <span className="font-['Sora'] text-[28px] font-black">R$ 79</span>
                <span className="text-[#E0E8E8]/70">/mês</span>
              </div>
              <div className="mt-3.5 grid gap-2.5 text-[#F8F8F8]/90">
                <div className="inline-flex items-center gap-2.5">
                  <CheckCircle size={18} /> Coberturas estendidas
                </div>
                <div className="inline-flex items-center gap-2.5">
                  <CheckCircle size={18} /> Serviços emergenciais
                </div>
                <div className="inline-flex items-center gap-2.5">
                  <CheckCircle size={18} /> Suporte prioritário
                </div>
              </div>
              <a
                href="#"
                className="mt-4 inline-flex w-full select-none items-center justify-center gap-2.5 rounded-full border border-white/10 bg-transparent px-3.5 py-2 text-[#F8F8F8] transition hover:-translate-y-0.5 hover:border-white/20"
              >
                Selecionar
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-[1120px] px-5">
          <div className="flex flex-col gap-3.5 rounded-[18px] border border-white/10 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.55)] bg-[radial-gradient(520px_280px_at_0%_0%,rgba(0,160,80,0.14),transparent_60%),linear-gradient(180deg,rgba(32,40,48,0.92),rgba(32,40,48,0.60))] lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="m-0 font-['Sora'] text-[22px] tracking-[-0.02em]">
                Pronto para personalizar?
              </h2>
              <p className="mt-2 mb-0 max-w-[75ch] text-[#E0E8E8]/80">
                Ajuste classes, sombras e bordas para chegar mais perto das referências do
                Dribbble/Behance.
              </p>
            </div>
            <a
              href="#simular"
              className="inline-flex select-none items-center justify-center gap-2.5 rounded-full border border-[#00A050]/40 bg-[#00A050]/20 px-3.5 py-2 text-[#F8F8F8] shadow-[0_12px_30px_rgba(0,160,80,0.18)] transition hover:-translate-y-0.5 hover:border-[#00A050]/55 hover:bg-[#00A050]/25"
            >
              Abrir simulação <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
