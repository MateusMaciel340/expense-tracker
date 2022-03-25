import styled from "styled-components";

export const TabelaLinha = styled.tr``;
export const TabelaColuna = styled.td`
    padding: 10px 0;
`
export const Categoria = styled.div<{ cor: string }>`
    display: inline-block; padding: 5px 10px; border-radius: 5px;
    color: #FFF; background: ${props => props.cor};
`
export const Valor = styled.div<{ cor: string }>`
    color: ${props => props.cor}
`