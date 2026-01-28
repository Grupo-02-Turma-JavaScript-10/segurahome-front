// Dentro do seu componente de visualização/Home
import CardImovel from '../cardimovel/CardImovel'

export default function ListaImovel() {

  const imovelTeste = {
    id: 1,
    tipoImovel: "Apartamento Luxo",
    rua: "Av. Paulista",
    numero: "1000",
    bairro: "Bela Vista",
    areaConstruida: 120,
    valor: 1500,
    plano: { nome: "Plano plano" }
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen flex justify-center">
      {/* Aqui você visualiza o card */}
      <CardImovel imovel={imovelTeste as any} />
    </div>
  )
}