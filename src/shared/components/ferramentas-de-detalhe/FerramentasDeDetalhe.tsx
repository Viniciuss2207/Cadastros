import { Box, Button, Divider, Icon, Paper, Skeleton, useTheme } from "@mui/material";

interface IFerramentasDeDetalheProps{
textoBotaoNovo?: string;

mostrarBotãoNovo?: boolean;
mostrarBotãoVoltar?:boolean;
mostrarBotãoApagar?:boolean;
mostrarBotãoSalvar?:boolean;
mostrarBotãoSalvarEFechar?:boolean;

mostrarBotãoNovoCarregando?: boolean;
mostrarBotãoVoltarCarregando?:boolean;
mostrarBotãoApagarCarregando?:boolean;
mostrarBotãoSalvarCarregando?:boolean;
mostrarBotãoSalvarEFecharCarregando?:boolean;


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

    mostrarBotãoNovoCarregando = false,
    mostrarBotãoVoltarCarregando = false,
    mostrarBotãoApagarCarregando = false,
    mostrarBotãoSalvarCarregando = false,
    mostrarBotãoSalvarEFecharCarregando = false,

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
            {(mostrarBotãoSalvar && ! mostrarBotãoSalvarCarregando )&&(
                <Button
                    color='primary'
                    disableElevation
                    variant='contained'
                    onClick={aoClicarEmSalvar}
                    startIcon={<Icon>save</Icon>}
                >Salvar</Button>
            )}

            {mostrarBotãoSalvarCarregando &&
                (<Skeleton width={110} height={60} />
                )}

            {(mostrarBotãoSalvarEFechar && ! mostrarBotãoSalvarEFecharCarregando )&&(
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmSalvarEFechar}
                    startIcon={<Icon>save</Icon>}
                >Salvar e voltar</Button>
            )}

            {mostrarBotãoSalvarEFecharCarregando &&
                (<Skeleton width={180} height={60} />
                )}

            {(mostrarBotãoApagar && !mostrarBotãoApagarCarregando )&&(
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmApagar}
                    startIcon={<Icon>delete</Icon>}
                >Apagar</Button>
            )}

            {mostrarBotãoApagarCarregando &&
                (<Skeleton width={110} height={60} />
                )}

            {(mostrarBotãoNovo && !mostrarBotãoNovoCarregando)&&(
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmNovo}
                    startIcon={<Icon>add</Icon>}
                >{textoBotaoNovo}</Button>
            )}

            {mostrarBotãoNovoCarregando &&
                (<Skeleton width={110} height={60} />
                )}
            <Divider variant='middle' orientation='vertical' />

            {(mostrarBotãoVoltar && ! mostrarBotãoVoltarCarregando)&&(
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmVoltar}
                    startIcon={<Icon>arrow_back</Icon>}
                >Voltar</Button>
            )}

            {mostrarBotãoVoltarCarregando &&
                (<Skeleton width={110} height={60} />
                )}
        </Box>
    );
};