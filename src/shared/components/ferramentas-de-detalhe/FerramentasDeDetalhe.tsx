import { Box, Button, Divider, Icon, Paper, Skeleton, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";

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

    mostrarBotãoNovo: mostrarBotaoNovo = true,
    mostrarBotãoVoltar: mostrarBotaoVoltar = true,
    mostrarBotãoApagar: mostrarBotaoApagar = true,
    mostrarBotãoSalvar = true,
    mostrarBotãoSalvarEFechar = false,

    mostrarBotãoNovoCarregando: mostrarBotaoNovoCarregando = false,
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
    const smDown = useMediaQuery((theme:Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme:Theme) => theme.breakpoints.down('md'));
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
                >
                    <Typography  variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' >
                        Salvar
                    </Typography>
                    
                </Button>
            )}

            {mostrarBotãoSalvarCarregando &&
                (<Skeleton width={110} height={60} />
                )}

            {(mostrarBotãoSalvarEFechar && ! mostrarBotãoSalvarEFecharCarregando && !smDown && !mdDown)&&(
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmSalvarEFechar}
                    startIcon={<Icon>save</Icon>}
                >
                   <Typography  variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' >
                        Salvar e fechar
                    </Typography>
                </Button>
            )}

            {(mostrarBotãoSalvarEFecharCarregando && !smDown && !mdDown) &&
                (<Skeleton width={180} height={60} />
                )}

            {(mostrarBotaoApagar && !mostrarBotãoApagarCarregando )&&(
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmApagar}
                    startIcon={<Icon>delete</Icon>}
                >
                   <Typography  variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' >
                       apagar
                    </Typography>
                </Button>
            )}

            {mostrarBotãoApagarCarregando &&
                (<Skeleton width={110} height={60} />
                )}

            {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown)&&( 
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmNovo}
                    startIcon={<Icon>add</Icon>}
                >
                    <Typography  variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' >
                       {textoBotaoNovo}
                    </Typography>
                </Button>
            )}

            {(mostrarBotaoNovoCarregando && !smDown ) &&
                (<Skeleton width={110} height={60} />
                )}
                
                {
        (
          mostrarBotaoVoltar &&
          (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotãoSalvar || mostrarBotãoSalvarEFechar)
        ) && (
          <Divider variant='middle' orientation='vertical' />
        )
      }


            {(mostrarBotaoVoltar && ! mostrarBotãoVoltarCarregando)&&(
                <Button
                    color='primary'
                    disableElevation
                    variant='outlined'
                    onClick={aoClicarEmVoltar}
                    startIcon={<Icon>arrow_back</Icon>}
                >
                  <Typography  variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden' >
                        Voltar
                    </Typography>
                </Button>
            )}

            {mostrarBotãoVoltarCarregando &&
                (<Skeleton width={110} height={60} />
                )}
        </Box>
    );
};