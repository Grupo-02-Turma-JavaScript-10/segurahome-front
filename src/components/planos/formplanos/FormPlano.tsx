import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Plano from "../../../models/Plano";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { RotateLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function FormPlano() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [plano, setPlano] = useState<Plano>({
    id: 0,
    nome: "",
    precoArea: 0,
    imoveis: [],
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  function retornar() {
    navigate("/planos"); 
  }

  async function buscarPorId(id: string) {
    try {
      await buscar(`/planos/${id}`, setPlano);
    } catch {
      ToastAlerta("Erro ao buscar plano","erro");
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setPlano({
      ...plano,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarPlano(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const { nome, precoArea } = plano;
    const dadosParaEnvio = { nome, precoArea: Number(precoArea) };

    if (id !== undefined) {
      try {
        await atualizar(`/planos`, plano, setPlano);
        ToastAlerta("Plano atualizado com sucesso!","sucesso");
        retornar();
      } catch {
        ToastAlerta("Erro ao atualizar o plano","erro");
      }
    } else {
      try {
        await cadastrar(`/planos`, dadosParaEnvio, setPlano);
        ToastAlerta("Plano cadastrado com sucesso!","sucesso");
        retornar();
      } catch {
        ToastAlerta("Erro ao cadastrar o plano","erro");
      }
    }
    setIsLoading(false);
  }

  return (
    <section className="max-w-3xl p-8 mx-auto bg-[#202830]/70 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
      <h2 className="text-2xl font-bold text-white text-center mb-8 uppercase tracking-tighter">
        {id === undefined ? "Cadastrar" : "Editar"}{" "}
        <span className="text-[#00A050]">Plano</span>
      </h2>

      <form onSubmit={cadastrarPlano} className="space-y-6">
      
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-sm font-bold text-gray-300 ml-1">
            Nome do Plano
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Digite o nome do plano"
            name="nome"
            className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 focus:ring-1 focus:ring-[#00A050]/50 outline-none transition-all placeholder:text-gray-600"
            value={plano.nome}
            onChange={atualizarEstado}
            required
          />
        </div>

     
        <div className="flex flex-col gap-2">
          <label
            htmlFor="precoArea"
            className="text-sm font-bold text-gray-300 ml-1"
          >
            Preço do Plano (R$)
          </label>
          <input
            id="precoArea"
            type="number"
            placeholder="Digite o preço"
            name="precoArea"
            className="block w-full px-4 py-3 mt-2 text-white bg-black/30 border border-white/10 rounded-xl focus:border-[#00A050]/50 focus:ring-1 focus:ring-[#00A050]/50 outline-none transition-all placeholder:text-gray-600"
            value={plano.precoArea}
            onChange={atualizarEstado}
            required
          />
        </div>

      
        <div className="flex justify-end gap-4 mt-10">
          <button
            type="button"
            onClick={retornar}
            className="px-8 py-3 text-sm font-bold text-white transition-all border border-white/10 rounded-full hover:bg-white/5"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-10 py-3 text-sm font-bold text-white bg-[#00A050] rounded-full shadow-[0_10px_22px_rgba(0,160,80,0.2)] hover:bg-[#00A050] transition-all transform hover:-translate-y-1"
          >
            {isLoading ? (
              <RotateLoader color="white" size={10} />
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}