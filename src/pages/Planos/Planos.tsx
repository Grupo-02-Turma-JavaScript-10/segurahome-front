import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardPlanos from "../../components/planos/cardplanos/CardPlanos";
import { buscar } from "../../services/Service";

interface Plano {
  id: number;
  nome: string;
  precoArea: number;
}

export function PlanosPage() {
  const [planos, setPlanos] = useState<Plano[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    buscarPlanos();    
  }, [planos.length]);

  async function buscarPlanos() {
    buscar('/planos', setPlanos);
  }

  return (
    <main className="px-10 m-10 text-white">
     
      <div className="mb-6 fixed z-999 bottom-2 right-2">
        <Link
          to="/cadastrarplano"
          className="inline-flex items-center justify-center gap-2.5 rounded-full border border-transparent px-4 py-2 text-[#F8F8F8]/90 transition hover:-translate-y-0.5 hover:border-[#00A050]/45 hover:bg-[#00A050]/15 hover:shadow-[0_12px_30px_rgba(0,160,80,0.22)] bg-[#00A050]"
        >
          + Cadastrar Plano
        </Link>
      </div>

      <h1 className="text-3xl font-bold">Planos</h1>
      

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {planos.map((plano) => (
          <CardPlanos key={plano.id} plano={plano} />
        ))}
      </div>
    </main>
  );
}