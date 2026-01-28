import CardImovel from "../../components/cardimovel/CardImovel"

const exemplo ={id: 1, cep:'123456789', bairro: 'camaqua', rua:'rua', numero:'numero', complemento:'complemento', tipoImovel:'casa', areaConstruida:245, valor:1234}

function Imoveis() {
  return (
    <CardImovel imovel={exemplo}/>
  )
}

export default Imoveis