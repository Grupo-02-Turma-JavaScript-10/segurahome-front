import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom"
import type { Imovel } from "../../../models/Imovel";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import type Plano from "../../../models/Plano";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function FormImovel() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [planos, setPlanos] = useState<Plano[]>([]);

  const [plano, setPlano] = useState<Plano>({id: 0, nome: '', precoArea: 0, imoveis: []})
  const [imovel, setImovel] = useState<Imovel>({} as Imovel)

  const {id} = useParams<{id:string}>()

  async function buscarImovelPorId(id:string) {
    try {
      await buscar(`/imovel/${id}`, setImovel)
    } catch (error:any) {
      alert(`Erro ao buscar Imóvel: ${error}`)
    }
  }

  async function buscarPlanoPorId(id: string) {
    await buscar(`/planos/${id}`, setPlano)
  }

  async function buscarPlanos() {
    await buscar(`/planos`, setPlanos)
  }

  useEffect(() => {
    buscarPlanos()
    if(id !== undefined) {
      buscarImovelPorId(id)
    }
  }, [id])

  useEffect(()=> {
    setImovel({
      ...imovel,
      plano: plano,
    })
  }, [plano])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setImovel({
      ...imovel,
      [e.target.name]: e.target.value,
      plano: plano
    })
  }

  function retornar() {
    navigate('/imoveis')
  }

  async function gerarNovoImovel(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/imovel`, imovel, setImovel)
        
        ToastAlerta(`Imóvel atualizado com sucesso!`, 'sucesso')
      }
      catch (error: any) {
        ToastAlerta(`Erro ao atualizar imóvel: ${error}`, 'erro')
      }
    }
    else {
      try {
        await cadastrar(`/imovel`, imovel, setImovel)
        ToastAlerta(`Imóvel cadastrado com sucesso!`, 'sucesso')
      } catch (error: any) {
        ToastAlerta(`Erro ao cadastrar Imóvel: ${error}`, 'erro')
      }
    }
    
    setIsLoading(false)
    retornar()
  }

  const carregandoPlano = plano.nome === ''

  return (
    <section className="max-w-4xl p-8 mx-auto bg-[#202830]/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
      <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase tracking-tighter">
        {id !== undefined ? 'Editar' : 'Cadastrar'} <span className="text-[#00A050]">Imóvel</span>
      </h2>

      <form className="space-y-6" onSubmit={gerarNovoImovel}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          
          {/* Tipo do Imóvel - Ocupa 2 colunas no desktop */}
          <div className="sm:col-span-2">
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="tipo">Tipo do Imóvel</label>
            <input 
              id="tipo" 
              name="tipoImovel"
              type="text" 
              placeholder="Ex: Casa Alvenaria, Apartamento..."
              className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 focus:ring-1 focus:ring-[#00A050]/50 outline-none transition-all placeholder:text-gray-600"
              value={imovel.tipoImovel}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e) }
           />
          </div>

          {/* Rua */}
          <div>
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="rua">Rua</label>
            <input 
              id="rua" 
              name="rua"
              type="text" 
              className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 outline-none transition-all" 
              value={imovel.rua}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e) }
            />
          </div>

          {/* Número */}
          <div>
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="numero">Número</label>
            <input 
              id="numero" 
              name="numero"
              type="text" 
              className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 outline-none transition-all" 
              value={imovel.numero}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e) }
            />
          </div>

          {/* Bairro */}
          <div>
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="bairro">Bairro</label>
            <input 
              id="bairro" 
              name="bairro"
              type="text" 
              className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 outline-none transition-all" 
              value={imovel.bairro}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e) }
            />
          </div>
          
          {/* Cep */}
          <div>
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="cep">Cep</label>
            <input 
              id="cep" 
              name="cep"
              type="text" 
              className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 outline-none transition-all" 
              value={imovel.cep}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e) }
            />
          </div>

          {/* Área */}
          <div>
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="area">Área Construída (m²)</label>
            <input 
              id="area" 
              name="areaConstruida"
              type="number" 
              className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 outline-none transition-all" 
              value={imovel.areaConstruida}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e) }
            />
          </div>

          {/* Seleção do Plano */}
          <div>
            <label className="text-sm font-bold text-gray-300 ml-1" htmlFor="plano">Plano de Seguro</label>
            <select 
              id="plano" 
              className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 outline-none transition-all"
              
              onChange={(e) => buscarPlanoPorId(e.currentTarget.value)}
            >
              <option value="" selected disabled className="bg-[#202830]">Selecione um Plano</option>
              {planos.map((plano) => (
                <>
                  <option value={plano.id} className="bg-[#202830]">{plano.nome}</option>
                </>
              ))}
            </select>
          </div>
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-4 mt-10">
          <button type="button" className="px-8 py-3 text-sm font-bold text-white transition-all border border-white/10 rounded-full hover:bg-white/5" onClick={retornar}>
            Cancelar
          </button>
          <button 
            type="submit" 
            className="px-10 py-3 text-sm font-bold text-white bg-[#00A050] rounded-full shadow-[0_10px_22px_rgba(0,160,80,0.2)] hover:bg-[#00A050] transition-all transform hover:-translate-y-1"
            disabled={carregandoPlano}
          >
            {
              isLoading ?
              <ClipLoader
                color="#ffffff"
                size={24}
              /> :
              <span>{id === undefined? 'Cadastrar' : 'Atualizar'}</span>
            }
          </button>
        </div>
      </form>
    </section>
  )
}