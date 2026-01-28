import type { Plano } from "./Plano";

export interface Imovel {
    id: number;
    cep: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string;
    tipoImovel: string
    areaConstruida: number;
    valor: number;
    plano: Plano;
}