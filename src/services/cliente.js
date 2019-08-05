import axios from 'axios';
import {baseApiUrl} from './config';

export default {
    getClientes: () => {
        return axios.get(`${baseApiUrl}/clientes`);
    },
    saveCliente(cliente){
        return axios.post(`${baseApiUrl}/clientes`, cliente);
    },
    removeCliente(idCliente){
        return axios.delete(`${baseApiUrl}/clientes/${idCliente}`);
    }
}