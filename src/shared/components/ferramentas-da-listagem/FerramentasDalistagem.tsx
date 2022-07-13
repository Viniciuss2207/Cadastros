import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";
import { Environment } from "../../environment";



interface IFerramentasDalistagemProps{
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
    
};

export const FerramentasDalistagem: React.FC<IFerramentasDalistagemProps> = ({
  textoDaBusca = '',
  aoMudarTextoDeBusca,
  mostrarInputBusca = false,
  aoClicarEmNovo,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
}) => {
    const theme = useTheme();
    return(
        <Box 
            height={theme.spacing(5)}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            gap={1}
            alignItems="center"
            component={Paper}
        >
        {mostrarInputBusca && (
        <TextField
          size="small"
          value={textoDaBusca}
          placeholder={Environment.INPUT_DE_BUSCA}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}
        />
       )}

            
            <Box flex={1} display="flex" justifyContent="end" >
           { mostrarBotaoNovo &&(
             <Button
             color='primary'
             disableElevation
             variant='contained'
             onClick={aoClicarEmNovo}
             endIcon={<Icon>add</Icon>}
             >{textoBotaoNovo}</Button>  
              
           )}

                
            </Box>
        
        </Box>
 );
};
