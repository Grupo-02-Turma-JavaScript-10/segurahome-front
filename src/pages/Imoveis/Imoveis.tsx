import { useEffect, useState } from "react"
import CardImovel from "../../components/cardimovel/CardImovel"
import type { Imovel } from "../../models/Imovel"
import { ClipLoader } from "react-spinners"
import { buscar } from "../../services/Service"



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