import * as C from "./style";
import { Item } from "../../types/Item";
import { formatarData } from "../../helpers/filtro-data";

type Props = {
    item: Item,
}

export const TabelaItem = ({ item }: Props) => {
    return(
        <C.TabelaLinha>
            <C.TabelaColuna>{formatarData(item.data)}</C.TabelaColuna>
            <C.TabelaColuna>{item.categoria}</C.TabelaColuna>
            <C.TabelaColuna>{item.titulo}</C.TabelaColuna>
            <C.TabelaColuna>R$ {item.valor}</C.TabelaColuna>
        </C.TabelaLinha>
    );
}