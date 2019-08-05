import axios from 'axios';
import {baseApiUrl} from './config';

export default {
    getProdutos: () => {
        return axios.get(`${baseApiUrl}/produtos`);
    },
    saveProduto(produto){
        return axios.post(`${baseApiUrl}/produtos`, produto);
    },
    removeProduto(idProduto){
        return axios.delete(`${baseApiUrl}/produtos/${idProduto}`);
    }
}