import { useEffect, useState } from "react";
import type Plano from "../../../models/Plano";
import { buscar } from "../../../services/Service";
import CardPlanos from "../cardplanos/CardPlanos";

export default function ListaPlanos(){

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [planos, setPlanos] = useState<Plano[]>([])

    async function buscarPlanos(){
        setIsLoading(true)
        try{
            await buscar("/planos", setPlanos)
        } catch (error: any){
            alert("Erro ao buscar categorias")
        } finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        buscarPlanos()
    }, [planos.length])
    
    return(
        <>
            {(!isLoading && planos.length === 0) && (
                <div>
                    <span>
                        Nenhuma categoria foi encontrada
                    </span>
                </div>
            )}

            <div>
                <div>
                    {planos.map((plano) => (
                        <CardPlanos key={plano.id} plano={plano}/>
                    ))}
                </div>
            </div>
        </>
    )

}
