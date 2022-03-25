import * as C from "../styles/GlobalStyle";
import { useState, useEffect } from "react";
import { Item } from "../types/Item";
import { Categoria } from "../types/Categoria";
import { itens } from "../data/itens";
import { categorias } from "../data/categorias";
import { pegarMesAtual, filtreListaPeloMes } from "../helpers/filtro-data";
import { TabelaArea } from "../components/TabelaArea/TabelaArea";
import { InforArea } from "../components/InforArea/InforArea";
import { InputArea } from "../components/InputArea/InputArea";

export const Home = () => {

    const [lista, setLista] = useState(itens);
    const [filtroLista, setFiltroLista] = useState<Item[]>([]);
    const [mesAtual, setMesAtual] = useState(pegarMesAtual());
    const [receita, setReceita] = useState(0);
    const [despesa, setDespesa] = useState(0)

    useEffect(() => {
        setFiltroLista( filtreListaPeloMes(lista, mesAtual));
    }, [lista, mesAtual]);

    useEffect(() => {
        let receitaContador = 0; let despesaContador = 0;

        for(let contador in filtroLista){
            if(categorias[filtroLista[contador].categoria].despesa){
                despesaContador += filtroLista[contador].valor;
            }else{
                receitaContador += filtroLista[contador].valor;
            }
        }

        setReceita(receitaContador);
        setDespesa(despesaContador);

    },[filtroLista])

    const LidarMesChange = (novoMes: string) => {
        setMesAtual(novoMes);
    }

    const LidarItemAdicionado = (item: Item) => {
        let novaLista = [...lista];
        novaLista.push(item);
        setLista(novaLista);
    }

    return(
        <C.Container>
            <C.Header>
                <C.HeaderText>Sistema Financeiro</C.HeaderText>
            </C.Header>
            <C.Body>
                <InforArea
                    mesAtual={mesAtual}
                    LigarMesChange={LidarMesChange}
                    receita={receita}
                    despesa={despesa}
                />

                <InputArea AdicionadoItem={LidarItemAdicionado} />

                <TabelaArea lista={filtroLista} />
                
            </C.Body>
        </C.Container>
    )
}