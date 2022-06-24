import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";


export const Dashboard = () => {

return(
  <LayoutBaseDePagina titulo='Pagina inicial' 
  barraDeFerramentas=
  {(
    <BarraDeFerramentas
    mostrarInputBusca
    textoDaBotaoNovo='Novo'
    />
  )}> 
  Testando 
  </LayoutBaseDePagina>
   
  
 );
};