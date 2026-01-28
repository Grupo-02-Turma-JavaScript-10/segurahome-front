import { useEffect, useState } from "react";
import type Plano from "../../../models/Plano";
import { buscar } from "../../../services/Service";
import CardPlanos from "../cardplanos/CardPlanos";

export default function ListaPlanos() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [planos, setPlanos] = useState<Plano[]>([]);

  async function buscarPlanos() {
    setIsLoading(true);
    try {
      await buscar("/planos", setPlanos);
    } catch (error: any) {
      alert("Erro ao buscar planos");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarPlanos();
  }, []); 

  return (
    <>
      
      {!isLoading && planos.length === 0 && (
        <div className="mt-10 text-center">
          <div className="inline-block px-6 py-4 rounded-2xl border border-gray-400/30 bg-gradient-to-br from-[#202830]/70 to-black/60 shadow-[0_8px_25px_rgba(0,0,0,0.45)]">
            <span className="text-slate-300 font-semibold">
              Nenhum plano foi encontrado
            </span>
          </div>
        </div>
      )}

     
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {planos.map((plano) => (
          <CardPlanos key={plano.id} plano={plano} />
        ))}
      </div>
    </>
  );
}