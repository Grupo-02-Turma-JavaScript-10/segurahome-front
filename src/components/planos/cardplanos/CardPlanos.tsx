import type Plano from "../../../models/Plano";
import { Link } from "react-router-dom"

interface CardPlanosProps{
    plano: Plano
}

export default function CardPlanos({ plano }: CardPlanosProps){
    return(
        <>
            <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-b from-[#202830]/90 to-[#202830]/55 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.55)]">
                <div className="flex items-baseline justify-between gap-3">
                    <h4 className="m-0 font-['Sora'] text-lg">{plano.nome}</h4>
                <div className="mt-2.5 flex items-baseline gap-2">
                    <span className="font-['Sora'] text-[28px] font-black">{plano.precoArea}</span>
                    <span className="text-[#E0E8E8]/70">/mês</span>
                </div>
                </div>
                <div className="flex gap-5">
                    <Link to={`/editarPlano/${plano.id}`}>
                        <button className="w-full text-white bg-teal-400 hover:bg-teal-800 flex items-center justify-center py-2">Editar</button>
                    </Link>
                    <Link to={`/deletarPlano/${plano.id}`}>
                        <button className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center">Deletar</button>
                    </Link>
                </div>
            </div>
        </>
    )
}