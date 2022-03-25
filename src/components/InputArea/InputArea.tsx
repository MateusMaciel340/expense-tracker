import { Item } from "../../types/Item";

import * as C from "./style";

type Props = {
    AdicionadoItem: (item: Item) => void,
}

export const InputArea = ({ AdicionadoItem }: Props) => {

    return(
        <C.Container>
            <C.LabelInput>
                <C.TituloInput>Data</C.TituloInput>
                <C.Input 
                    type="date" 
                    value=""
                />
            </C.LabelInput>

            <C.LabelInput>
                <C.TituloInput>Categoria</C.TituloInput>
                <C.Select>
                    <option>categoria</option>
                </C.Select>
            </C.LabelInput>

            <C.LabelInput>
                <C.TituloInput>Título</C.TituloInput>
                <C.Input 
                    type="text" 
                    value="" 
                    placeholder="Digite o título"
                />
            </C.LabelInput>

            <C.LabelInput>
                <C.TituloInput>Valor</C.TituloInput>
                <C.Input 
                    type="number" 
                    value=""
                    placeholder="Digite o valor"
                />
            </C.LabelInput>

            <C.LabelInput>
                <C.TituloInput>&nbsp;</C.TituloInput>
                <C.Botao>Adicionar</C.Botao>
            </C.LabelInput>
        </C.Container>
    );
}