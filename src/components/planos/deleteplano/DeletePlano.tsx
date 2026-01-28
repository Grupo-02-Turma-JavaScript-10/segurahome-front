import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Plano from "../../../models/Plano";
import { buscar, deletar } from "../../../services/Service";
import { RotateLoader } from "react-spinners";

export default function DeletarPlano(){

    const navigate = useNavigate()

    const {id} = useParams<{id: string}>()

    const [plano, setPlano] = useState<Plano>({} as Plano)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    function retornar(){
        navigate("/listarPlanos")
    }

    async function buscarPorId(id: string){
        try{
            await buscar(`/planos/${id}`, setPlano)
        } catch (error: any){
            alert("Erro ao buscar Plano")
        }
    }

    useEffect(() => {
        if(id !== undefined){
            buscarPorId(id)
        }
    }, [id])

    async function deletarPlano(){
        setIsLoading(true)

        try{
            await deletar(`/planos/${id}`)
            alert("Plano deletado com sucesso!")
            retornar()
        } catch (error: any){
            alert("Erro ao deletar o Plano")
        }
        setIsLoading(false)
    }

    return(
        <div className='container w-1/3 mx-auto min-h-[70vh] flex flex-col items-center justify-center'>
            <h1 className='text-4xl text-center my-4 text-teal-800 font-bold'>
                Deletar Plano
            </h1>
            <p className='text-center text-slate-600 font-semibold mb-4'>
                Você tem certeza de que deseja deletar esse Plano?
            </p>
            <div className='border-2 border-slate-200 rounded-2xl overflow-hidden justify-between shadow-lg w-full bg-white'>
                <header className='py-4 px-6 bg-teal-800 text-white font-bold text-2xl uppercase'>
                    {plano.nome}
                </header>
                <div className="p-6 bg-slate-50">
                    <p className='text-xl h-full text-slate-700'>{plano.precoArea}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-teal-500 hover:bg-teal-700 w-full py-4 font-bold transition-colors duration-200 cursor-pointer'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-red-400 hover:bg-red-600 flex items-center justify-center py-4 font-bold transition-colors duration-200 cursor-pointer'
                        onClick={deletarPlano}
                    >
                        {isLoading ?
                            <RotateLoader color="white" size={10} />
                            :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )

}