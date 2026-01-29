import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { Imovel } from "../../models/Imovel"
import { buscar, deletar } from "../../services/Service"
import { ClipLoader } from "react-spinners"

export default function DeletarImovel() {
  
  const navigate = useNavigate()

  const [isLoading, setIisLoading] = useState<boolean>(false)
  const [imovel, setImovel] = useState<Imovel>({} as Imovel)

  const {id} = useParams<{id: string}>()

  async function buscarPorId(id: string) {
    try {
      await buscar(`/imovel/${id}`, setImovel)
    } catch (error: any) {
      alert(`Erro ao encontrar imóvel: ${error}`)
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id)
    }
  }, [id])

  async function deletarImovel() {
    setIisLoading(true)

    try {
      await deletar(`/imovel/${id}`)
    }
    catch(error: any) {
      alert(`Erro ao deletar imovel: ${error}`)
    }
    setIisLoading(false)
    retornar()
  }

  function retornar() {
    navigate('/imoveis')
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="max-w-md w-full bg-gradient-to-br from-[#202A8B]/90 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="bg-red-500/20 p-4 rounded-full ring-8 ring-red-500/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Excluir Seguro?</h2>
          <p className="text-slate-400 text-sm">
            Você está prestes a remover o seguro do imóvel: <br />
            <span className="text-blue-400 font-semibold italic">"{imovel.tipoImovel} em {imovel.bairro}"</span>
          </p>
          <p className="mt-4 text-xs text-red-400/80 font-medium uppercase tracking-widest">
            Esta ação não pode ser desfeita.
          </p>
        </div>
        <div className="bg-black/30 rounded-2xl p-4 mb-8 border border-white/5">
          <div className="flex justify-between items-center">
             <span className="text-slate-400 text-xs">Valor do Seguro</span>
             <span className="text-white font-bold">R$ {imovel.valor}</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-900/20 active:scale-95" onClick={deletarImovel}>
            Confirmar Exclusão
          </button>
          <button className="w-full py-3.5 bg-white/5 hover:bg-white/10 text-slate-300 font-bold rounded-xl transition-all border border-white/10" onClick={retornar}>
            {
              isLoading ?
              <ClipLoader 
                color="#ffffff" 
                size={24}
              /> :
              <span>Cancelar e Voltar</span>
            }
          </button>
        </div>

      </div>
    </div>
  )
}