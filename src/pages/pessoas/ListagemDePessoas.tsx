import { LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom"

import { FerramentasDalistagem } from "../../shared/components"
import { useDebounce } from "../../shared/hooks";
import { LayoutBaseDePagina } from "../../shared/layouts"
import { PessoasService, IListagemPessoa } from "../../shared/services/api/pessoas/PessoasService";

export const ListagemDePessoas: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [rows, setRows] = useState<IListagemPessoa[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    
    
    const { debounce } = useDebounce();
    
    const busca = useMemo(() => {
        return searchParams.get('busca') || '';
    }, [searchParams]  )

    useEffect(() => {
      setIsLoading(true);

        debounce(() => {
          PessoasService.getAll(1, busca)
            .then((result) => {
              setIsLoading(false);
              if (result instanceof Error) {
                alert(result.message);
              } else {
                console.log(result);

                setTotalCount(result.totalCount);
                setRows(result.data);
              }
            });
        });
      }, [busca]);

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
        <TableContainer  component={Paper} variant="outlined" sx={{m: 1, width:"auto"}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ações</TableCell>
                <TableCell>NomeCompleto</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
             {rows.map(row => (
               <TableRow key={row.id}>
               <TableCell>Ações</TableCell>
               <TableCell>{row.nomeCompleto}</TableCell>
               <TableCell>{row.email}</TableCell>
             </TableRow>
             ))}
            </TableBody>
              <TableFooter>
                {isLoading && (
              <TableRow>
                <TableCell  colSpan={3} >
                   
                  <LinearProgress variant='indeterminate' />
                
                </TableCell>
              </TableRow>
              )}
              </TableFooter>
            </Table>
          </TableContainer>
        </LayoutBaseDePagina>
    )
}