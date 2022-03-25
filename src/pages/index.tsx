import * as C from "../styles/GlobalStyle";
import { useState, useEffect } from "react";
import { Item } from "../types/Item";
import { Categoria } from "../types/Categoria";
import { itens } from "../data/itens";
import { categorias } from "../data/categorias";
import { pegarMesAtual, filtreListaPeloMes } from "../helpers/filtro-data";
import { TabelaArea } from "../components/TabelaArea/TabelaArea";
import { InforArea } from "../components/InforArea/InforArea";

export const Home = () => {

    const [lista, setLista] = useState(itens);
    const [filtroLista, setFiltroLista] = useState<Item[]>([]);
    const [mesAtual, setMesAtual] = useState(pegarMesAtual());

    useEffect(() => {
        setFiltroLista( filtreListaPeloMes(lista, mesAtual));
    }, [lista, mesAtual])

    console.log(filtroLista);
    console.log(lista);

    return(
        <C.Container>
            <C.Header>
                <C.HeaderText>Sistema Financeiro</C.HeaderText>
            </C.Header>
            <C.Body>
                <InforArea mesAtual={mesAtual} />

                {/* Área de inserção */}

                <TabelaArea lista={filtroLista} />
                
            </C.Body>
        </C.Container>
    )
}