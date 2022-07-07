import { useNavigate, useParams } from "react-router-dom";


import { FerramentasDeDetalhe } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";


export const DetalheDePessoas: React.FC = () => {
    const { id ='nova' } = useParams<'id'>();
    const navigate = useNavigate();

    const handleSave = () => {
        console.log('Save')
    };

    const handleDelete = () => {
        console.log('Save')
    };

    return(
        <LayoutBaseDePagina
         titulo='Detalhe de pessoa'
         barraDeFerramentas={
            <FerramentasDeDetalhe
             textoBotaoNovo='Nova'
             mostrarBotãoSalvarEFechar
             mostrarBotãoNovo = {id !== 'nova'}
             mostrarBotãoApagar = {id !== 'nova'}

                 aoClicarEmSalvar={handleSave}
                 aoClicarEmSalvarEFechar={handleSave}
                 aoClicarEmApagar={handleDelete}
                 aoClicarEmVoltar={() => navigate('/pessoas')}
                 aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
           

            />
         }
        >
          <p>DetalheDePessoas {id}</p>  
        </LayoutBaseDePagina>
        
    );
};
