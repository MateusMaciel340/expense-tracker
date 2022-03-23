import * as C from "../styles/GlobalStyle";
import { useState } from "react";
import { Item } from "../types/Item";
import { Categoria } from "../types/Categoria";
import { itens } from "../data/itens";
import { categorias } from "../data/categorias";
import { pegarMesAtual } from "../helpers/filtro-data";

export const Home = () => {

    const [lista, setLista] = useState(itens);
    const [mesAtual, setMesAtual] = useState(pegarMesAtual());

    return(
        <C.Container>
            <C.Header>
                <C.HeaderText>Sistema Financeiro</C.HeaderText>
            </C.Header>
            <C.Body>
                {/* Área de informações */}

                {/* Área de inserção */}

                {/* Tabela de item */}
                
            </C.Body>
        </C.Container>
    )
}