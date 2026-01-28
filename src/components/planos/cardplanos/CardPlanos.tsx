import type Plano from "../../../models/Plano";
import { Link } from "react-router-dom"

interface CardPlanosProps{
    plano: Plano
}

export default function CardPlanos({ plano }: CardPlanosProps){
    return(
        <>
            <div className="my-5 border-slate-900 border flex flex-col rounded overflow-hidden justify-between w-100">
                <div className="p-4 text-center">
                    <h4 className="text-lg font-semibold">{plano.nome}</h4>
                    <p>{plano.precoArea}</p>
                </div>
                <div>
                    {/* Depois tem que adicionar os Links do react router nos botões */}
                    <button className="w-full text-white bg-teal-400 hover:bg-teal-800 flex items-center justify-center py-2">Editar</button>
                    <button className="text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center">Deletar</button>
                </div>
            </div>
        </>
    )
}