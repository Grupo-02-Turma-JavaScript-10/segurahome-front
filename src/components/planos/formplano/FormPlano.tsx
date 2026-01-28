import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Plano from "../../../models/Plano";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotateLoader } from "react-spinners";

export default function FormPlano(){

    const navigate = useNavigate()
    const {id} = useParams<{id: string}>()

    const [plano, setPlano] = useState<Plano>({
        id: 0,
        nome: "",
        precoArea: 0,
        imoveis: []
    })

    const [isLoading, setIsLoading] = useState<boolean>(false);

    function retornar(){
        navigate("/listarPlanos")
    }

    async function buscarPorId(id: string){
        try{
            await buscar(`/planos/${id}`, setPlano)
        } catch (error: any) {
            alert("Erro ao buscar plano")
            retornar()
        }
    }

    useEffect(() => {
        if(id !== undefined){
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
        setPlano({
            ...plano,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrarPlano(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        setIsLoading(true)

        const {nome, precoArea} = plano

        const dadosParaEnvio = {
            nome: nome,
            precoArea: Number(precoArea)
        }

        if(id !== undefined){
            try{
                await atualizar(`/planos`, plano, setPlano)
                alert("Plano atualizado com sucesso!")
                retornar()
            } catch (error: any){
                alert("Erro ao atualizar o plano")
            }
        } else{
            try{
                await cadastrar(`/planos`, dadosParaEnvio, setPlano)
                alert("Plano cadastrado com sucesso!")
            } catch (error: any){
                alert("Erro ao cadastrar o plano")
            }
        }
        setIsLoading(false)
    }

    return(
        <div>
            {id === undefined ? "Cadastrar Plano" : "Editar Plano"}
            <form onSubmit={cadastrarPlano}>
                <div>
                    <label htmlFor="nome">Nome do Plano</label>
                    <input 
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        className="border-2"
                        value={plano.nome}
                        onChange={atualizarEstado}
                        required />
                </div>
                <div>
                    <label htmlFor="preco">Preço do Plano</label>
                    <input 
                        type="number"
                        placeholder="Preço"
                        name="precoArea"
                        className="border-2"
                        value={plano.precoArea}
                        onChange={atualizarEstado}
                        required />
                </div>
                <button>
                    {isLoading ? 
                        <RotateLoader color="white" size={10}/> :
                        <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>    
                    }
                </button>
            </form>
        </div>
    )

}