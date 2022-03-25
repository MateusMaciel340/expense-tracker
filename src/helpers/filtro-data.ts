import { Item } from "../types/Item";

export const pegarMesAtual = () => {
    let agora = new Date();
    return `${agora.getFullYear()}-${agora.getMonth()+1}`;
}

export const filtreListaPeloMes = (lista: Item[], data: string): Item[] => {
    let novaLista: Item[] = [];
    let [ano, mes] = data.split("-");

    for(let contador in lista){
        if(
            lista[contador].data.getFullYear() === parseInt(ano) &&
            (lista[contador].data.getMonth() + 1) === parseInt(mes)
        ) {
            novaLista.push(lista[contador]);
        }
    }

    return novaLista;
}

export const formatarData = (data: Date): string => {
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();

    return `${adicionarZeroData(dia)}/${adicionarZeroData(mes)}/${ano}`;
}

const adicionarZeroData = (n: number): string => n < 10 ?  `0${n}` : `${n}`;

export const formatarMesAtual = (mesAtual: string): string => {
    let [ano, mes] = mesAtual.split("-");
    let meses = ["Janeiro", "Fevereiro", "Março", "Junho", "Julho", "Agosto", "Setembro", "Novembro", "Dezembro"];
    return `${meses[parseInt(mes) - 1]} de ${ano}`;
}