import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Plano from "../../../models/Plano";
import { buscar, deletar } from "../../../services/Service";
import { RotateLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function DeletarPlano() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [plano, setPlano] = useState<Plano>({} as Plano);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function retornar() {
    navigate("/planos");
  }

  async function buscarPorId(id: string) {
    try {
      await buscar(`/planos/${id}`, setPlano);
    } catch {
      ToastAlerta("Erro ao buscar Plano","erro");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarPlano() {
    setIsLoading(true);
    try {
      await deletar(`/planos/${id}`);
      ToastAlerta("Plano deletado com sucesso!","sucesso");
      retornar();
    } catch {
      ToastAlerta("Erro ao deletar o Plano","erro");
    }
    setIsLoading(false);
  }

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="max-w-md w-full bg-gradient-to-br from-[#0F2F1F]/90 to-black/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        
      
        <div className="flex justify-center mb-6">
          <div className="bg-red-500/20 p-4 rounded-full ring-8 ring-red-500/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </div>

    
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Excluir Plano?</h2>
          <p className="text-slate-400 text-sm">
            Você está prestes a remover o plano: <br />
            <span className="text-[#00A050] font-semibold italic">"{plano.nome}"</span>
          </p>
          <p className="mt-4 text-xs text-red-400/80 font-medium uppercase tracking-widest">
            Esta ação não pode ser desfeita.
          </p>
        </div>

      
        <div className="bg-black/30 rounded-2xl p-4 mb-8 border border-white/5">
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-xs">Preço do Plano</span>
            <span className="text-white font-bold">R$ {plano.precoArea}</span>
          </div>
        </div>

        
<div className="flex flex-col gap-3">
  <button
    onClick={deletarPlano}
    className="w-full py-3.5 border border-red-400/60 text-red-400 font-bold rounded-full transition-all hover:bg-red-500/15 hover:border-red-500 hover:shadow-[0_8px_20px_rgba(255,0,0,0.25)] active:scale-95"
  >
    {isLoading ? <RotateLoader color="white" size={10} /> : "Confirmar Exclusão"}
  </button>
  <button
    onClick={retornar}
    className="w-full py-3.5 border border-[#00A050]/60 text-[#00A050] font-bold rounded-full transition-all hover:bg-[#00A050]/15 hover:border-[#00A050] hover:shadow-[0_8px_20px_rgba(0,160,80,0.25)] active:scale-95"
  >
    Cancelar e Voltar
  </button>
</div>
      </div>
    </div>
  );
}