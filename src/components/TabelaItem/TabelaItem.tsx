import * as C from "./style";
import { Item } from "../../types/Item";
import { formatarData } from "../../helpers/filtro-data";
import { categorias } from "../../data/categorias";

type Props = {
    item: Item,
}

export const TabelaItem = ({ item }: Props) => {
    return(
        <C.TabelaLinha>
            <C.TabelaColuna>{formatarData(item.data)}</C.TabelaColuna>
            <C.TabelaColuna>
                <C.Categoria cor={categorias[item.categoria].cor}>
                    {categorias[item.categoria].titulo}
                </C.Categoria>
            </C.TabelaColuna>
            <C.TabelaColuna>{item.titulo}</C.TabelaColuna>
            <C.TabelaColuna>
                <C.Valor cor={categorias[item.categoria].despesa ? "red" : "green"}>
                    R$ {item.valor}
                </C.Valor>
            </C.TabelaColuna>
        </C.TabelaLinha>
    );
}