import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom"
import { FerramentasDalistagem } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"
import { PessoasService } from "../../shared/services/api/pessoas/PessoasService";

export const ListagemDePessoas: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]  )

    useEffect(() =>{
        
        PessoasService.getAll(1, busca)
        .then((result) =>{
            if(result instanceof Error){
                alert(result.message)
            } else{
             console.log(result);   
            }      
        });
    },[busca]);

    return(
        <LayoutBaseDePagina 
        titulo='Listagem de pessoas'
        barraDeFerramentas={
            <FerramentasDalistagem 
              textoDaBotaoNovo='Nova'
              mostrarInputBusca
              textoDaBusca={busca}
              aoMudarTextoDeBusca={texto =>setSearchParams({busca: texto},{ replace:true })}

            />
        }
        
        >

        </LayoutBaseDePagina>
    )
}