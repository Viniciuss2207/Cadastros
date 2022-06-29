
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard, ListagemDeCidade} from '../pages';
import { useDrawerContext } from '../shared/contexts';
export const AppRoutes = () => {
  const {  setDrawerOptions } = useDrawerContext();
  
  useEffect(() => {
    setDrawerOptions ([
      {
        label:'Página inicial',
        icon:'home',
        path:'/pagina-inicial',
      },
      {
       icon:'location_city',
       path:'/cidades',
       label:'Cidades',
      },
     
    ]);
  }, [] );
  
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard/>} />
      <Route path="/cidades" element={<ListagemDeCidade/>} />

{   /*   <Route path="/cidades/detalhe/:id" element={<Dashboard/>} />  */ }

     <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
    </Routes>
  );
};