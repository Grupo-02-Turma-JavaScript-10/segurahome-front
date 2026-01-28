import React, { useRef, useState } from 'react'
import {
  ArrowRight,
  HouseLine,
  Lightning,
  ShieldCheck,
  Flame,
  Plug,
  LockKey,
  UsersThree,
  Baby,
  Key,
  Buildings,
} from 'phosphor-react'

import heroImg from '../../assets/hero-segurahome.png'

type TiltCardProps = {
  icon: React.ReactNode
  title: string
  description: string
  tag: string
  accent?: string
}

function TiltCard({ icon, title, description, tag, accent = '#00A050' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const cx = rect.width / 2
    const cy = rect.height / 2
    const dx = x - cx
    const dy = y - cy

    const rotateY = (dx / cx) * 8
    const rotateX = -(dy / cy) * 8

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`,
      transition: 'transform 40ms linear',
    })
  }

  function handleLeave() {
    setStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      transition: 'transform 180ms ease',
    })
    window.setTimeout(() => setStyle({}), 180)
  }

  return (
    <article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-[#202830]/60 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.45)]"
      style={style}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: `radial-gradient(520px 260px at 30% 10%, rgba(0,160,80,0.18), transparent 60%)`,
        }}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            {icon}
          </div>

          <div
            className="h-10 w-14 rounded-2xl border border-white/10"
            style={{ backgroundColor: `${accent}14`, borderColor: `${accent}55` }}
          />
        </div>

        <h3 className="mt-4 mb-2 font-['Sora'] text-lg text-[#F8F8F8]">{title}</h3>

        <p className="m-0 text-sm leading-relaxed text-[#E0E8E8]/80">{description}</p>

        <div className="mt-auto pt-4 inline-flex items-center gap-2 text-xs text-[#E0E8E8]/70">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: `${accent}CC` }} />
          {tag}
        </div>
      </div>
    </article>
  )
}

function HeroIllustration() {
  return (
    <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#202830]/55 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
      <div className="grid gap-4 p-6 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00A050]/30 bg-[#00A050]/10 px-3 py-2 text-xs text-[#F8F8F8]/90">
            <ShieldCheck size={16} weight="bold" />
            Proteção residencial
          </div>

          <h3 className="mt-4 mb-2 font-['Sora'] text-[22px] text-[#F8F8F8]">
            Seu lar, mais protegido
          </h3>

          <p className="m-0 text-sm leading-relaxed text-[#E0E8E8]/80">
            Aqui você consegue ver imóveis, coberturas e planos com clareza. Sem enrolação.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#E0E8E8]/80">
              Simples
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#E0E8E8]/80">
              Claro
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-[#E0E8E8]/80">
              Confiável
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-black/20">
          <img
            src={heroImg}
            alt="Casa protegida por um escudo (SeguraHome)"
            className="h-[260px] w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_260px_at_20%_10%,rgba(0,160,80,0.22),transparent_60%)]" />
        </div>
      </div>
    </div>
  )
}

export function HomePage() {
  return (
    <div id="inicio">
      <section className="pt-6 pb-12">
        <div className="mx-auto w-full max-w-[1120px] px-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-6">
          <div className="py-2">
            <h1 className="mt-3.5 mb-2.5 font-['Sora'] text-[42px] leading-[1.06] lg:text-[52px]">
              Proteção para seu lar com tecnologia, agilidade e tranquilidade.
            </h1>

            <p className="m-0 max-w-[70ch] leading-relaxed text-[#E0E8E8]/80">
              A SeguraHome ajuda você a organizar imóveis e planos de seguro residencial em um só lugar,
              com um fluxo claro e fácil de usar. Com processos digitais e soluções modernas, garantimos mais 
              segurança para o seu patrimônio, com praticidade e confiança do início ao fim.
            </p>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href="/planos"
                className="inline-flex select-none items-center justify-center gap-2.5 rounded-full border border-[#00A050]/40 bg-[#00A050]/20 px-3.5 py-2 text-[#F8F8F8] shadow-[0_12px_30px_rgba(0,160,80,0.18)] transition hover:-translate-y-0.5 hover:border-[#00A050]/55 hover:bg-[#00A050]/25"
              >
                Ver planos <ArrowRight size={18} />
              </a>

              <a
                href="/imoveis"
                className="inline-flex select-none items-center justify-center gap-2.5 rounded-full border border-white/10 bg-[#202830]/35 px-3.5 py-2 text-[#F8F8F8] transition hover:-translate-y-0.5 hover:border-white/20"
              >
                Ver imóveis
              </a>
            </div>

            <div className="mt-5 grid gap-2.5">
              <div className="inline-flex items-center gap-2.5 text-[#F8F8F8]/90">
                <ShieldCheck size={18} weight="bold" />
                <span>Cadastro e consulta sem perder tempo.</span>
              </div>
              <div className="inline-flex items-center gap-2.5 text-[#F8F8F8]/90">
                <Lightning size={18} weight="bold" />
                <span>Fluxo direto, fácil de entender.</span>
              </div>
              <div className="inline-flex items-center gap-2.5 text-[#F8F8F8]/90">
                <HouseLine size={18} weight="bold" />
                <span>Imóveis, planos e coberturas no mesmo lugar.</span>
              </div>
            </div>
          </div>

          <HeroIllustration />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-[1120px] px-5">
          <h2 className="m-0 font-['Sora'] text-[28px] tracking-[-0.02em]">
            Por que escolher a SeguraHome?
          </h2>

          <p className="mt-2 mb-0 max-w-[80ch] text-[#E0E8E8]/80">
            A ideia é tirar a complicação do seguro residencial. Você vê tudo com clareza e consegue
            acompanhar seus imóveis e planos sem dor de cabeça.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <TiltCard
              icon={<HouseLine size={20} weight="bold" className="text-[#F8F8F8]" />}
              title="Proteção completa para o seu lar"
              description="Coberturas essenciais e adicionais para proteger estrutura, conteúdos e imprevistos do dia a dia."
              tag="Coberturas sob medida • Assistência"
              accent="#00A050"
            />

            <TiltCard
              icon={<ShieldCheck size={20} weight="bold" className="text-[#F8F8F8]" />}
              title="Assistência residencial 24h"
              description="Chaveiro, elétrica e hidráulica para emergências - quando você precisar."
              tag="Agilidade • Tranquilidade"
              accent="#00A050"
            />

            <TiltCard
              icon={<Lightning size={20} weight="bold" className="text-[#F8F8F8]" />}
              title="Coberturas inteligentes"
              description="Planos flexíveis: do essencial ao completo, com opções como danos elétricos e roubo."
              tag="Flexibilidade • Proteção real"
              accent="#00A050"
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-[1120px] px-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="m-0 font-['Sora'] text-[28px] tracking-[-0.02em]">
                Coberturas mais procuradas
              </h2>
              <p className="mt-2 mb-0 max-w-[78ch] text-[#E0E8E8]/80">
                Um preview do que você encontra em nossos planos:
              </p>
            </div>

            <a
              href="/planos"
              className="mt-4 inline-flex select-none items-center justify-center gap-2.5 rounded-full border border-white/10 bg-[#202830]/35 px-3.5 py-2 text-[#F8F8F8] transition hover:-translate-y-0.5 hover:border-white/20 md:mt-0"
            >
              Ver todos os planos <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-[18px] border border-white/10 bg-[#202830]/55 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Flame size={18} weight="bold" className="text-[#F8F8F8]" />
              </div>
              <h3 className="mt-4 mb-1 font-['Sora'] text-lg">Incêndio e explosão</h3>
              <p className="m-0 text-sm text-[#E0E8E8]/80">Proteção para danos estruturais.</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#E0E8E8]/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00A050]/80" />
                Estrutura
              </div>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#202830]/55 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Plug size={18} weight="bold" className="text-[#F8F8F8]" />
              </div>
              <h3 className="mt-4 mb-1 font-['Sora'] text-lg">Danos elétricos</h3>
              <p className="m-0 text-sm text-[#E0E8E8]/80">Cobertura para rede elétrica e aparelhos.</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#E0E8E8]/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00A050]/80" />
                Equipamentos
              </div>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#202830]/55 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <LockKey size={18} weight="bold" className="text-[#F8F8F8]" />
              </div>
              <h3 className="mt-4 mb-1 font-['Sora'] text-lg">Roubo e furto qualificado</h3>
              <p className="m-0 text-sm text-[#E0E8E8]/80">Cobertura para perdas e danos.</p>
              <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#E0E8E8]/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00A050]/80" />
                Conteúdos
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-[1120px] px-5">
          <h2 className="m-0 font-['Sora'] text-[28px] tracking-[-0.02em]">Para quem é a SeguraHome?</h2>
          <p className="mt-2 mb-0 max-w-[78ch] text-[#E0E8E8]/80">
            Para quem quer proteger o lar com mais tranquilidade em qualquer fase.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[18px] border border-white/10 bg-[#202830]/55 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <UsersThree size={18} weight="bold" />
              </div>
              <h3 className="mt-4 mb-1 font-['Sora'] text-lg">Famílias</h3>
              <p className="m-0 text-sm text-[#E0E8E8]/80">Mais segurança para a rotina e imprevistos.</p>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#202830]/55 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Baby size={18} weight="bold" />
              </div>
              <h3 className="mt-4 mb-1 font-['Sora'] text-lg">Quem mora sozinho</h3>
              <p className="m-0 text-sm text-[#E0E8E8]/80">Assistência para resolver emergências.</p>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#202830]/55 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Key size={18} weight="bold" />
              </div>
              <h3 className="mt-4 mb-1 font-['Sora'] text-lg">Quem aluga</h3>
              <p className="m-0 text-sm text-[#E0E8E8]/80">Protege seus bens e dá mais tranquilidade.</p>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#202830]/55 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Buildings size={18} weight="bold" />
              </div>
              <h3 className="mt-4 mb-1 font-['Sora'] text-lg">Investidores</h3>
              <p className="m-0 text-sm text-[#E0E8E8]/80">Acompanhar imóveis e coberturas com organização.</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href="/imoveis"
              className="inline-flex select-none items-center justify-center gap-2.5 rounded-full border border-white/10 bg-[#202830]/35 px-3.5 py-2 text-[#F8F8F8] transition hover:-translate-y-0.5 hover:border-white/20"
            >
              Ver página de Imóveis <ArrowRight size={18} />
            </a>

            <a
              href="/planos"
              className="inline-flex select-none items-center justify-center gap-2.5 rounded-full border border-white/10 bg-[#202830]/35 px-3.5 py-2 text-[#F8F8F8] transition hover:-translate-y-0.5 hover:border-white/20"
            >
              Ver página de Planos <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
