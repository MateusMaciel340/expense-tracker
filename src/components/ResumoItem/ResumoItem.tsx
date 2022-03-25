import * as C from "./style";

type Props = {
    titulo: string,
    valor: number,
    cor?: string,
}

export const ResumoItem = ({ titulo, valor, cor }: Props) => {
    return(
        <C.Container>
            <C.Titulo>{titulo}</C.Titulo>
            <C.Infor cor={cor}>R$ {valor}</C.Infor>
        </C.Container>
    );
}