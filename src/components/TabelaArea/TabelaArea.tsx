import * as C from "./style";
import { Item } from "../../types/Item";
import { TabelaItem } from "../TabelaItem/TabelaItem";

type Props = {
    lista: Item[],
}

export const TabelaArea = ({ lista }: Props) => {
    return(
        <C.Tabela>
            <thead>
                <tr>
                    <C.TabelaCabecalhoColuna width={100}>Data</C.TabelaCabecalhoColuna>
                    <C.TabelaCabecalhoColuna width={130}>Categoria</C.TabelaCabecalhoColuna>
                    <C.TabelaCabecalhoColuna>Título</C.TabelaCabecalhoColuna>
                    <C.TabelaCabecalhoColuna width={150}>Valor</C.TabelaCabecalhoColuna>
                </tr>
            </thead>
            <tbody>
                {lista.map((item, index) => (
                        <TabelaItem key={index} item={item}/>
                ))}
            </tbody>
        </C.Tabela>
    );
}