import { useEffect, useState } from "react"
import CardImovel from "../../components/imovel/cardimovel/CardImovel"
import type { Imovel } from "../../models/Imovel"
import { ClipLoader } from "react-spinners"
import { buscar } from "../../services/Service"
import { Link } from "react-router-dom"



function Imoveis() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [imoveis, setImoveis] = useState<Imovel[]>([])

  useEffect(()=> {
    buscarImoveis()
  }, [imoveis.length])

  async function buscarImoveis() {
    try {
      
      setIsLoading(true)
      await buscar('/imovel', setImoveis)

    } catch (error: any) {
      
      alert(`erro ao buscar postagens: ${error}`)
    
    }
    finally {
    
      setIsLoading(false)
    
    }
  }

  return (
    <>
        <div className="mb-6 fixed z-999 bottom-2 right-2">
        <Link
          to="/cadastrarimovel"
          className="inline-flex items-center justify-center gap-2.5 rounded-full border border-transparent px-4 py-2 text-[#F8F8F8]/90 transition hover:-translate-y-0.5 hover:border-[#00A050]/45 hover:bg-[#00A050]/15 hover:shadow-[0_12px_30px_rgba(0,160,80,0.22)] bg-[#00A050]"
        >
          + Cadastrar Imóvel
        </Link>
      </div>
      {
        isLoading && (
          <div className="flex justify-center w-full my-8">
            <ClipLoader 
              color="#00A050"
              size={32}
            />
          </div>
        )
      }
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {(!isLoading && imoveis.length === 0) && (
            <span className="text-3xl text-center my-8">
              Nenhum Imóvel Encontrado!
            </span>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mx-8">
            {
              imoveis.map((imovel) => (
                <CardImovel key={imovel.id} imovel={imovel}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Imoveis