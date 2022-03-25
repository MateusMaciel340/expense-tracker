import { useState } from "react";
import { categorias } from "../../data/categorias";
import { Item } from "../../types/Item";
import { novaDataAjustada } from "../../helpers/filtro-data";
import * as C from "./style";

type Props = {
    AdicionadoItem: (item: Item) => void,
}

export const InputArea = ({ AdicionadoItem }: Props) => {
    const [dataCampo, setDataCampo] = useState("");
    const [categoriaCampo, setCategoriaCampo] = useState("");
    const [tituloCampo, setTituloCampo] = useState("");
    const [valorCampo, setValorCampo] = useState(0);

    let categoriaChave: string[] = Object.keys(categorias);

    const AdicionandoItem = () => {
        let erros: string[] = [];

        if(isNaN(new Date(dataCampo).getTime())){
            erros.push("Data inválida!");
        }
        if(!categoriaChave.includes(categoriaCampo)){
            erros.push("Categoria inválida!");
        }
        if(tituloCampo === ""){
            erros.push("Título vazio!");
        }
        if(valorCampo <= 0){
            erros.push("Valor inválido!");
        }

        if(erros.length > 0){
            alert(erros.join("\n"));
        }else{
            AdicionadoItem({
                data: novaDataAjustada(dataCampo),
                categoria: categoriaCampo,
                titulo: tituloCampo,
                valor: valorCampo,
            });
            claroCampos();
        }
    }

    const claroCampos = () => {
        setDataCampo("");
        setCategoriaCampo("");
        setTituloCampo("");
        setValorCampo(0);
    }

    return(
        <C.Container>
            <C.LabelInput>
                <C.TituloInput>Data</C.TituloInput>
                <C.Input 
                    type="date" 
                    value={dataCampo} onChange={e => setDataCampo(e.target.value)}
                />
            </C.LabelInput>

            <C.LabelInput>
                <C.TituloInput>Categoria</C.TituloInput>
                <C.Select value={categoriaCampo} onChange={e => setCategoriaCampo(e.target.value)}>
                    <>
                        <option></option>
                        {categoriaChave.map((key, index) => (
                            <option key={index} value={key}>{categorias[key].titulo}</option>
                        ))}
                    </>
                </C.Select>
            </C.LabelInput>

            <C.LabelInput>
                <C.TituloInput>Título</C.TituloInput>
                <C.Input 
                    type="text" 
                    value={tituloCampo} onChange={e => setTituloCampo(e.target.value)}
                    placeholder="Digite o título"
                />
            </C.LabelInput>

            <C.LabelInput>
                <C.TituloInput>Valor</C.TituloInput>
                <C.Input 
                    type="number" 
                    value={valorCampo} 
                    onChange={e => setValorCampo(parseFloat(e.target.value))}
                    placeholder="Digite o valor"
                />
            </C.LabelInput>

            <C.LabelInput>
                <C.TituloInput>&nbsp;</C.TituloInput>
                <C.Botao onClick={AdicionandoItem}>Adicionar</C.Botao>
            </C.LabelInput>
        </C.Container>
    );
}