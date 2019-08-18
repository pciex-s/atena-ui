import axios from 'axios';
import {baseApiUrl} from './config';

export default {
    getProdutos: (page = 0) => {
        return axios.get(`${baseApiUrl}/produtos?page=${page}`);
    },
    getProdutoById(idProduto){
        return axios.get(`${baseApiUrl}/produtos/${idProduto}`);
    },
    saveProduto(produto){
        return axios.post(`${baseApiUrl}/produtos`, produto);
    },
    removeProduto(idProduto){
        return axios.delete(`${baseApiUrl}/produtos/${idProduto}`);
    },
    uploadImage(image, idProduto){
        return axios.post(`${baseApiUrl}/produtos/picture/${idProduto}`, image, {});
    }
}