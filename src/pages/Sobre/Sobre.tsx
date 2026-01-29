import React, { useMemo, useState } from 'react'
import {
  GithubLogo,
  LinkedinLogo,
  UsersThree,
  Target,
  Eye,
  Star,
  ShieldCheck,
} from 'phosphor-react'

import PamelaFoto from '../../assets/team/PamelaFoto.jpg'
import KaliFoto from '../../assets/team/KaliFoto.jpg'
import KarolFoto from '../../assets/team/KarolFoto.jpg'
import LiviaFoto from '../../assets/team/LiviaFoto.jpg'
import EduFoto from '../../assets/team/EduFoto.jpg'
import AlanFoto from '../../assets/team/AlanFoto.jpg'

type Badge = 'P.O' | 'DEV' | 'TESTER'

type Member = {
  id: string
  name: string
  role: string
  bio: string
  github: string
  linkedin: string
  photo?: string
  badge?: Badge
  accent?: string
}

function BadgeTag({ badge, accent = '#00A050' }: { badge?: Badge; accent?: string }) {
  if (!badge) return null

  const label = badge === 'P.O' ? 'Product Owner' : badge === 'DEV' ? 'Developer' : 'Tester'

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-wide text-[#F8F8F8]"
      style={{
        borderColor: `${accent}66`,
        backgroundColor: `${accent}18`,
      }}
      title={label}
    >
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: `${accent}CC` }} />
      {badge}
    </span>
  )
}

/** TEAM CARD MAIS INTERATIVO */
function TeamCard({ member }: { member: Member }) {
  const accent = member.accent ?? '#00A050'
  const [imgOk, setImgOk] = useState(true)

  const initials = useMemo(() => {
    return member.name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]?.toUpperCase())
      .join('')
  }, [member.name])

  return (
    <article
      className={[
        'group relative overflow-hidden rounded-[22px] border border-white/10 bg-[#202830]/45',
        'shadow-[0_18px_60px_rgba(0,0,0,0.45)]',
        'transition-all duration-300 will-change-transform',
        'hover:-translate-y-2 hover:shadow-[0_28px_90px_rgba(0,0,0,0.55)]',
        'hover:[transform:translateY(-8px)_rotateX(2deg)_rotateY(-2deg)]',
      ].join(' ')}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* “shine” passando */}
      <div
        className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}22, transparent)`,
        }}
      />

      {/* borda verde acende */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}55` }}
      />

      {/* Top / Cover */}
      <div
        className="relative h-24 w-full border-b border-white/10"
        style={{
          background: `radial-gradient(520px 220px at 20% 10%, ${accent}33, transparent 55%),
                       linear-gradient(180deg, rgba(32,40,48,0.95), rgba(32,40,48,0.60))`,
        }}
      >
        <div className="absolute left-4 top-4">
          <BadgeTag badge={member.badge} accent={accent} />
        </div>

        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{
            background: `radial-gradient(520px 220px at 30% 15%, ${accent}3A, transparent 60%)`,
          }}
        />
      </div>

      {/* Foto MAIOR e CENTRALIZADA */}
      <div className="relative px-5">
        <div
          className={[
            'absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 overflow-hidden rounded-[26px]',
            'border border-white/15 bg-black/30 shadow-[0_18px_40px_rgba(0,0,0,0.45)]',
            'transition-transform duration-300 will-change-transform',
            'group-hover:scale-[1.07] group-hover:-translate-y-1',
          ].join(' ')}
          aria-label={`Foto de ${member.name}`}
          title={member.name}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {member.photo && imgOk ? (
            <img
              src={member.photo}
              alt={`Foto de ${member.name}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              loading="lazy"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="grid h-full w-full place-items-center text-2xl font-black text-[#F8F8F8]">
              {initials}
            </div>
          )}

          <div
            className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(140px 140px at 25% 20%, ${accent}2A, transparent 60%)`,
            }}
          />
        </div>

        {/* Conteúdo */}
        <div className="pt-20 pb-5 text-center">
          <h3 className="m-0 font-['Sora'] text-[20px] tracking-[-0.02em] text-[#F8F8F8]">
            {member.name}
          </h3>

          <p className="mt-1 mb-0 text-sm text-[#E0E8E8]/75">{member.role}</p>

          <p className="mt-4 mb-0 text-sm leading-relaxed text-[#E0E8E8]/80">{member.bio}</p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <a
              href={member.github}
              target="_blank"
              rel="noreferrer"
              className={[
                'inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#202830]/35',
                'px-3.5 py-2 text-xs text-[#F8F8F8]',
                'transition-all duration-200',
                'hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#202830]/55',
                'hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]',
              ].join(' ')}
              aria-label={`GitHub de ${member.name}`}
            >
              <GithubLogo size={16} weight="bold" />
              GitHub
            </a>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              className={[
                'inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs text-[#F8F8F8]',
                'transition-all duration-200 hover:-translate-y-0.5',
                'hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)]',
              ].join(' ')}
              style={{
                borderColor: `${accent}66`,
                backgroundColor: `${accent}12`,
              }}
              aria-label={`LinkedIn de ${member.name}`}
            >
              <LinkedinLogo size={16} weight="bold" />
              LinkedIn
            </a>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#E0E8E8]/70">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: `${accent}CC` }} />
            Time SeguraHome
          </div>
        </div>
      </div>
    </article>
  )
}

type FlipItem = {
  id: string
  title: string
  text: string
  icon: React.ReactNode
}

function FlipCard({
  item,
  accent = '#00A050',
  back = '#0B1220',
}: {
  item: FlipItem
  accent?: string
  back?: string
}) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      className="group relative h-[420px] w-full text-left [perspective:1200px] focus:outline-none"
      aria-label={`${item.title} - clique para ver detalhes`}
    >
      <div
        className={[
          'relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d]',
          'group-hover:[transform:rotateY(180deg)]',
          flipped ? '[transform:rotateY(180deg)]' : '',
        ].join(' ')}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[26px] shadow-[0_18px_60px_rgba(0,0,0,0.35)] [backface-visibility:hidden]"
          style={{
            background: `radial-gradient(800px 320px at 30% 20%, ${accent}40, transparent 60%),
                         linear-gradient(180deg, ${accent}, #007A3D)`,
          }}
        >
          <div className="flex h-full flex-col items-center justify-center gap-6 p-10 text-center">
            <div className="grid h-20 w-20 place-items-center rounded-3xl border border-white/20 bg-white/10">
              <div className="text-white">{item.icon}</div>
            </div>

            <h3 className="m-0 max-w-[18ch] font-['Sora'] text-[34px] font-extrabold leading-tight tracking-[-0.02em] text-white">
              {item.title}
            </h3>

            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs text-white/90">
              Passe o mouse (ou toque) para ler
            </div>
          </div>

          <div className="pointer-events-none absolute -left-14 top-0 h-40 w-40 rotate-45 bg-white/10" />

          <div
            className="pointer-events-none absolute inset-0 rounded-[26px]"
            style={{ boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.12)` }}
          />
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[26px] shadow-[0_18px_60px_rgba(0,0,0,0.35)] [transform:rotateY(180deg)] [backface-visibility:hidden]"
          style={{ backgroundColor: back }}
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-2xl"
            style={{ backgroundColor: `${accent}20` }}
          />
          <div
            className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full blur-2xl"
            style={{ backgroundColor: `${accent}12` }}
          />

          <div className="flex h-full items-center justify-center p-10 text-center">
            <p className="m-0 max-w-[45ch] text-[18px] leading-relaxed text-white/90">
              {item.text}
            </p>
          </div>

          <div
            className="pointer-events-none absolute inset-0 rounded-[26px]"
            style={{ boxShadow: `inset 0 0 0 1px ${accent}33` }}
          />
        </div>
      </div>
    </button>
  )
}

export function SobrePage() {
  const NAV_OFFSET = 0

  const team: Member[] = [
    {
      id: 'edu-po',
      name: 'Edu',
      role: 'Product Owner, Back-end Developer',
      badge: 'P.O',
      bio: 'Organiza prioridades, alinha o time e garante clareza no que vai para produção.',
      github: 'https://github.com/eduardo-olvreis',
      linkedin: 'https://www.linkedin.com/in/eduardo-olvreis/',
      photo: EduFoto,
      accent: '#00A050',
    },
    {
      id: 'pamela-dev',
      name: 'Pâmela Desirée',
      role: 'Front-end Developer',
      badge: 'DEV',
      bio: 'UI moderna, responsiva e acessível. Gosto de produto com cara de “pronto pra produção”.',
      github: 'https://github.com/pam-desi',
      linkedin: 'https://www.linkedin.com/in/p%C3%A2mela-dos-reis/',
      photo: PamelaFoto,
      accent: '#00A050',
    },
    {
      id: 'kali-dev',
      name: 'Kali',
      role: 'Back-end Developer',
      badge: 'DEV',
      bio: 'API, regras de negócio e integrações. Organização e performance em primeiro lugar.',
      github: 'https://github.com/lf-kali',
      linkedin: 'https://www.linkedin.com/in/kalifrancadev/',
      photo: KaliFoto,
      accent: '#00A050',
    },
    {
      id: 'karol-dev',
      name: 'Karol',
      role: 'Front-end Developer',
      badge: 'DEV',
      bio: 'Fluxos claros e consistência visual. Deixa a experiência mais simples e confiável.',
      github: 'https://github.com/karolsfassel',
      linkedin: 'https://www.linkedin.com/in/karolinesfdev/',
      photo: KarolFoto,
      accent: '#00A050',
    },
    {
      id: 'livia-dev',
      name: 'Lívia',
      role: 'Back-end Developer',
      badge: 'DEV',
      bio: 'Fluxos claros e consistência visual. Deixa a experiência mais simples e confiável.',
      github: 'https://github.com/liviadiaxx',
      linkedin: 'https://www.linkedin.com/in/l%C3%ADvia-dias-xavier-07b203203/',
      photo: LiviaFoto,
      accent: '#00A050',
    },
    {
      id: 'alan-dev',
      name: 'Alan',
      role: 'Dev / Tester',
      badge: 'TESTER',
      bio: 'Testes e detalhes. Ajuda a manter a entrega consistente e sem surpresas.',
      github: 'https://github.com/Alan-DiasS',
      linkedin: 'https://www.linkedin.com/in/alandiasdossantos?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      photo: AlanFoto,
      accent: '#00A050',
    },
  ]

  const identity: FlipItem[] = [
    {
      id: 'missao',
      title: 'Nossa Missão',
      icon: <Target size={44} weight="bold" />,
      text: 'Oferecer soluções de segurança residencial e monitoramento com excelência, utilizando tecnologia e atendimento especializado para proteger lares, patrimônios e proporcionar tranquilidade às famílias.',
    },
    {
      id: 'visao',
      title: 'Nossa Visão',
      icon: <Eye size={44} weight="bold" />,
      text: 'Ser referência em segurança residencial, reconhecida pela inovação, qualidade e confiança, tornando a SeguraHome a primeira escolha de quem busca proteção completa para o seu lar.',
    },
    {
      id: 'valores',
      title: 'Nossos Valores',
      icon: <Star size={44} weight="bold" />,
      text: 'Valorizamos a segurança, confiança e transparência em cada serviço prestado. Atuamos com responsabilidade, tecnologia de qualidade e compromisso real com o bem-estar das pessoas, garantindo um atendimento humano, ágil e eficiente.',
    },
  ]

  return (
    <div className="pb-12 pt-0" style={{ paddingTop: NAV_OFFSET }}>
      <div className="mx-auto w-full max-w-[1120px] px-5">
        <div id="topo-sobre" className="h-0 scroll-mt-[96px]" />

        <header className="mt-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00A050]/30 bg-[#00A050]/10 px-3 py-2 text-xs text-[#F8F8F8]/90">
            <UsersThree size={16} weight="bold" />
            Sobre nós
          </div>

          <h1 className="mt-3 mb-2 font-['Sora'] text-[34px] tracking-[-0.02em] text-[#F8F8F8] md:text-[40px]">
            Quem está por trás da SeguraHome
          </h1>

          <p className="m-0 max-w-[80ch] text-[#E0E8E8]/80">
            Um time que quer deixar o seguro residencial mais simples de entender e mais fácil de acompanhar.
          </p>
        </header>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <TeamCard key={m.id} member={m} />
          ))}
        </div>

        <section className="mt-10">
          <h2 className="font-['Sora'] text-[24px] tracking-[-0.02em] text-[#F8F8F8]">
            Nosso propósito
          </h2>

          <p className="mt-2 max-w-[95ch] text-sm text-[#E0E8E8]/80">
            Missão, visão e valores: os pilares que guiam nosso trabalho todos os dias.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {identity.map((item) => (
              <FlipCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
