import type Plano from "../../../models/Plano";
import { Link } from "react-router-dom";

interface CardPlanosProps {
  plano: Plano;
}

export default function CardPlanos({ plano }: CardPlanosProps) {
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-b from-[#202830]/90 to-[#202830]/55 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-[#00A050]/40 hover:shadow-[0_20px_50px_rgba(0,160,80,0.15)]">
     
      <div className="flex items-baseline justify-between gap-3">
        <h4 className="m-0 font-['Sora'] text-lg text-white font-bold">{plano.nome}</h4>
        <div className="mt-2.5 flex items-baseline gap-2">
          <span className="font-['Sora'] text-[28px] font-black text-white">{plano.precoArea}</span>
          <span className="text-[#E0E8E8]/70">/mês</span>
        </div>
      </div>

 
      <div className="border-t border-[#00A050]/30 mt-5 pt-5">
       
        <div className="grid grid-cols-2 gap-4">
          <Link
            to={`/editarplano/${plano.id}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gray-400/40 px-4 py-2 text-gray-300 font-bold uppercase text-xs tracking-widest transition-all hover:-translate-y-0.5 hover:border-[#00A050] hover:text-[#00A050] hover:bg-[#00A050]/10 hover:shadow-[0_12px_30px_rgba(0,160,80,0.25)] active:scale-95"
          >
            Editar
          </Link>

          <Link
            to={`/deletarplano/${plano.id}`}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gray-400/40 px-4 py-2 text-gray-300 font-bold uppercase text-xs tracking-widest transition-all hover:-translate-y-0.5 hover:border-red-500 hover:text-red-400 hover:bg-red-500/10 hover:shadow-[0_12px_30px_rgba(255,0,0,0.25)] active:scale-95"
          >
            Deletar
          </Link>
        </div>
      </div>
    </div>
  );
}