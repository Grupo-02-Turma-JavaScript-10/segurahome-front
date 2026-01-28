import { useNavigate } from "react-router-dom"
import FormPlano from "../../components/planos/formplano/FormPlano"
import ListaPlanos from "../../components/planos/listaplanos/ListaPlanos"
import { Link } from "phosphor-react"

export function PlanosPage() {

  const navigate = useNavigate()

  return (
    <main className="px-6 py-10 text-white">
      <h1 className="text-3xl font-bold">Planos</h1>
      <p className="mt-2 text-white/80">Aqui ficam os planos do seguro.</p>
    </main>
  )
}
