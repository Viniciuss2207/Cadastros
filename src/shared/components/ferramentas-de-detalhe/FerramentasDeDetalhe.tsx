import { Box, Button, Divider, Icon, Paper, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps{
textoBotaoNovo?: string;

mostrarBotãoNovo?: boolean;
mostrarBotãoVoltar?:boolean;
mostrarBotãoApagar?:boolean;
mostrarBotãoSalvar?:boolean;
mostrarBotãoSalvarEFechar?:boolean;


aoClicarEmNovo?:() => void;
aoClicarEmVoltar?:() => void;
aoClicarEmApagar?: () => void;
aoClicarEmSalvar?: () => void;
aoClicarEmSalvarEFechar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps>= ({
    textoBotaoNovo = 'Novo',

    mostrarBotãoNovo = true,
    mostrarBotãoVoltar = true,
    mostrarBotãoApagar = true,
    mostrarBotãoSalvar = true,
    mostrarBotãoSalvarEFechar = false,

    aoClicarEmNovo,
    aoClicarEmVoltar,
    aoClicarEmApagar,
    aoClicarEmSalvar,
    aoClicarEmSalvarEFechar,

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
            {mostrarBotãoSalvar && (
                <Button
                    color='primary'
                    disableElevation
                    variant='contained'
                    onClick={aoClicarEmSalvar}
                    startIcon={<Icon>save</Icon>}
                >Salvar</Button>)}

            {mostrarBotãoSalvarEFechar && (
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmSalvarEFechar}
                    startIcon={<Icon>save</Icon>}
                >Salvar e voltar</Button>)}

            {mostrarBotãoApagar && (
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmApagar}
                    startIcon={<Icon>delete</Icon>}
                >Apagar</Button>)}

            {mostrarBotãoNovo && (
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmNovo}
                    startIcon={<Icon>add</Icon>}
                >{textoBotaoNovo}</Button>)}
            <Divider variant='middle' orientation='vertical' />

            {mostrarBotãoVoltar && (
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmVoltar}
                    startIcon={<Icon>arrow_back</Icon>}
                >Voltar</Button>)} 
        </Box>
    );
};