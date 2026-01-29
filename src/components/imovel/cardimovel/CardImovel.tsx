import { Link } from 'react-router-dom'
import type { Imovel } from '../../../models/Imovel'
import { HouseLine, MapPin, Ruler, ShieldCheck, Pencil, Trash } from 'phosphor-react'

interface CardImovelProps {
  imovel: Imovel
}

export default function CardImovel({ imovel }: CardImovelProps) {
  return (
    <div className='relative flex flex-col w-full max-w-[540px] rounded-[24px] border border-white/10 bg-gradient-to-br from-[#00A050]/20 to-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-[#00A050]/40 hover:shadow-[0_20px_50px_rgba(0,160,80,0.15)] group'>
      
      
      <div className="flex w-full bg-gradient-to-r from-[#00A050]/30 to-transparent py-4 px-6 items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#00A050]/20 rounded-lg text-[#00A050]">
            <HouseLine size={24} weight="duotone" />
          </div>
          <h3 className='text-xl font-black text-white uppercase tracking-tight'>{imovel.tipoImovel}</h3>
        </div>
        <span className="px-3 py-1 rounded-full bg-[#00A050]/10 border border-[#00A050]/20 text-[10px] font-bold text-[#00A050] uppercase tracking-widest">
          {imovel.plano?.nome}
        </span>
      </div>

      
      <div className='p-6 space-y-4'>
        <div className="flex items-start gap-3 text-slate-300">
          <MapPin size={20} className="text-[#00A050] mt-1 flex-shrink-0" />
          <p className="text-sm leading-relaxed">
            <span className="text-white font-medium">Endereço:</span><br />
            {imovel.rua}, {imovel.numero} — {imovel.bairro}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Ruler size={18} />
            <span className="text-xs uppercase font-bold tracking-tighter">Área: {imovel.areaConstruida}m²</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck size={18} />
            <span className="text-xs uppercase font-bold tracking-tighter text-[#00A050]/80">Seguro Ativo</span>
          </div>
        </div>

        
        <div className="mt-6 p-4 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-between">
           <span className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em]">Custo Mensal</span>
           <p className='text-2xl font-black text-white'>
             <span className="text-[#00A050] text-sm mr-1">R$</span>{imovel.valor}
           </p>
        </div>
      </div>

      <div className="flex border-t border-white/5">
        <Link 
          to={`/editarimovel/${imovel.id}`} 
          className='flex-1 flex items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-widest text-slate-300 hover:bg-[#00A050]/20 hover:text-white transition-all'
        >
          <Pencil size={16} />
          Editar
        </Link>
        <div className="w-[1px] bg-white/5" />
        <Link 
          to={`/deletarimovel/${imovel.id}`} 
          className='flex-1 flex items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-widest text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition-all'
        >
          <Trash size={16} />
          Remover
        </Link>
      </div>
    </div>
  )
}