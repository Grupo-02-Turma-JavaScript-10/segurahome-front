import type { Imovel } from "./Imovel";

export default interface Plano{
    id: number;
    nome: string;
    precoArea: number;
    imoveis?: Imovel[];
}