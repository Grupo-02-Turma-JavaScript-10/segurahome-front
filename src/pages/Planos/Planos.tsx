import { Link } from "react-router-dom";
import ListaPlanos from "../../components/planos/listaplanos/ListaPlanos";

export function PlanosPage() {
  return (
    <main className="px-6 py-10 text-white">
      <div className="mb-6">
        <Link
          to="/cadastrarplano"
          className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gray-400/40 px-4 py-2 text-gray-300 font-bold uppercase text-xs tracking-widest transition-all hover:-translate-y-0.5 hover:border-[#00A050] hover:text-[#00A050] hover:bg-[#00A050]/10 hover:shadow-[0_12px_30px_rgba(0,160,80,0.25)] active:scale-95 bg-[#00A050]/20"
        >
          + Cadastrar Plano
        </Link>
      </div>

      <h1 className="text-3xl font-bold">Planos</h1>

     
      <ListaPlanos />
    </main>
  );
}