import axios from 'axios'

import { errorInterceptor, responseInterceptor } from './interceptors';
import { Enviroment } from '../../../environment';


const Api = axios.create({
    baseURL: Enviroment.URL_BASE,
});


Api.interceptors.response.use(
    (response) => responseInterceptor(response), 
    (response) => errorInterceptor(response), 
);

export { Api};