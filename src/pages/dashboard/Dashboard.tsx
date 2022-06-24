import { FerramentasDalistagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";


export const Dashboard = () => {

return(
  <LayoutBaseDePagina titulo='Pagina inicial' 
  barraDeFerramentas=
{(
    <FerramentasDalistagem
    mostrarInputBusca
    textoDaBotaoNovo='Novo'
    />
)}> 
  Testando 
  </LayoutBaseDePagina>
   
  
 );
};