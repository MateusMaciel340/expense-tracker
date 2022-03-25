import * as C from "./style";
import { formatarMesAtual } from "../../helpers/filtro-data";

type Props = {
    mesAtual: string,
}

export const InforArea = ({ mesAtual }: Props) => {
    return(
        <C.Container>
            <C.MesArea>
                <C.MesArrow>⬅️</C.MesArrow>
                <C.MesTitulo>{formatarMesAtual(mesAtual)}</C.MesTitulo>
                <C.MesArrow>➡️</C.MesArrow>
            </C.MesArea>
            <C.AreaResumoGeral>

            </C.AreaResumoGeral>
        </C.Container>
    );
}