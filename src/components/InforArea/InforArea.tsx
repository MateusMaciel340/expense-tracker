import * as C from "./style";
import { formatarMesAtual } from "../../helpers/filtro-data";
import { ResumoItem } from "../ResumoItem/ResumoItem";

type Props = {
    mesAtual: string,
    LigarMesChange: ( novoMes: string ) => void,
    receita: number,
    despesa: number,
}

export const InforArea = ({ mesAtual, LigarMesChange, receita, despesa }: Props) => {

    const LidarMesAnterior = () => {
        let [ano, mes] = mesAtual.split("-");
        let dataAtual = new Date(parseInt(ano), parseInt(mes) - 1, 1);
        dataAtual.setMonth( dataAtual.getMonth() - 1);
        LigarMesChange(`${dataAtual.getFullYear()}-${dataAtual.getMonth() + 1}`);
    }

    const LidarMesProximo = () => {
        let [ano, mes] = mesAtual.split("-");
        let dataAtual = new Date(parseInt(ano), parseInt(mes) - 1, 1);
        dataAtual.setMonth( dataAtual.getMonth() + 1);
        LigarMesChange(`${dataAtual.getFullYear()}-${dataAtual.getMonth() + 1}`);
    }

    return(
        <C.Container>
            <C.MesArea>
                <C.MesArrow onClick={LidarMesAnterior}>⬅️</C.MesArrow>
                <C.MesTitulo>{formatarMesAtual(mesAtual)}</C.MesTitulo>
                <C.MesArrow onClick={LidarMesProximo}>➡️</C.MesArrow>
            </C.MesArea>
            <C.AreaResumoGeral>
                <ResumoItem titulo="Receita" valor={receita} />
                <ResumoItem titulo="Despesas" valor={despesa} />
                <ResumoItem 
                    titulo="Balanço" 
                    valor={receita - despesa} 
                    cor={(receita - despesa) < 0 ? "red": "green    "}
                />
            </C.AreaResumoGeral>
        </C.Container>
    );
}