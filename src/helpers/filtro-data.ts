export const pegarMesAtual = () => {
    let agora = new Date();
    return `${agora.getFullYear()}-${agora.getMonth()+1}`;
}