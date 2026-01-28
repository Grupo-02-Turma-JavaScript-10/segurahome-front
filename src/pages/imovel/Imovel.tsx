import CardImovel from "../../components/cardimovel/CardImovel"
import type { Imovel } from "../../models/Imovel"


const imoveis: Imovel[] = [
    { 
        id: 1, 
        tipoImovel: "Casa Alvenaria", 
        rua: "Rua das Flores", 
        numero: "123", 
        bairro: "Jardim Botânico", 
        areaConstruida: 150, 
        valor: 1200, 

        plano: { 
            id: 1, 
            nome: "Seguro plano", 
            precoArea: 10, 
            imoveis: [] 
        },
        
        cep: "00000-000",
        complemento: ""
    }
]

export default function ImoveisPage() {
    return (
        <div className="min-h-screen">
            

            <main className="mx-auto w-full max-w-7xl px-6 py-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 justify-items-center">
                    
                    
                    {imoveis.map((imovel) => (
                        <div key={imovel.id} className="w-full transform transition-all hover:translate-y-[-5px]">
                            <CardImovel imovel={imovel} />
                        </div>
                    ))}

                </div>
            </main>
        </div>
    )
}