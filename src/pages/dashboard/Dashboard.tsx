import { FerramentasDalistagem, FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";


export const Dashboard = () => {

return(
  <LayoutBaseDePagina titulo='Pagina inicial' 
  barraDeFerramentas=
{(
    <FerramentasDeDetalhe 
    mostrarBotãoSalvarEFechar  
    mostrarBotãoSalvarEFecharCarregando
    mostrarBotãoNovo
    mostrarBotãoVoltar={false}
    />
)}> 
  Testando 
  </LayoutBaseDePagina>
   
  
 );
};