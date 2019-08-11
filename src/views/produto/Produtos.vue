<template>
  <b-card>
    <template slot="header">
      <i class="fas fa-box-open mr-1"></i>
      <span>Produtos</span>
    </template>
    <Spinner :loader="loader" />
    <div v-if="!loader">
      <b-row class="mb-2">
        <b-col>
          <router-link class="btn btn-dark btn-sm mr-2" to="/admin/produtos/cadastro">
            <i class="fas fa-plus-circle mr-1"></i>Novo Produto
          </router-link>
          <b-button @click="$bvModal.show('modal-cart')" variant="success" size="sm">
            <i class="fas fa-shopping-cart mr-1"></i>Finalizar venda
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12" sm="12" class="mb-3">
          
          <b-input-group>
            <b-form-input size="sm" type="text" placeholder="Pesquise o nome do produto..." />
            <b-input-group-append>
              <b-button size="sm" variant="primary">
                <i class="fa fa-search"></i>
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-col>
      </b-row>

      <b-row>
        <CardProduto
          @add-produto="addProdutoToCart"
          v-for="produto in list"
          :key="produto.id"
          :produto="produto"
        />
      </b-row>
      <b-pagination size="sm" :total-rows="50" :per-page="10"></b-pagination>
    </div>
    <Cart />
  </b-card>
</template>

<script>
import Produto from "../../services/produto";
import Spinner from "../../components/shared/Spinner";
import CardProduto from "./CardProduto";
import {addProduto} from '../../services/cart';
import Cart from './Cart';
export default {
  name: "Produtos",
  components: { Spinner, CardProduto, Cart },
  data() {
    return {
      fields: [
        { key: "id", label: "Cód.", sortable: true },
        { key: "nome", label: "Nome", sortable: true },
        { key: "preco", label: "Preço", sortable: true },
        { key: "qntEstoque", label: "Qtd.", sortable: true },
        { key: "actions", label: "Ações" }
      ],
      list: [
        { id: 1, nome: "Eisenberg", preco: "8.00", qtd: 1, imagem: "https://cdn.cervejaexpress.com.br/media/catalog/product/cache/2/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/i/m/img_0380.png" },
        { id: 2, nome: "Heineken", preco: "6.00", qtd: 2, imagem: "https://superprix.vteximg.com.br/arquivos/ids/172990-600-600/Cerveja-Heineken-330ml.png?v=636125749063400000" },
        { id: 3, nome: "Produto1", preco: "5.00", qtd: 3 },
        { id: 4, nome: "Produto1", preco: "5.00", qtd: 1 },
        { id: 5, nome: "Produto1", preco: "5.00", qtd: 21 },
        { id: 6, nome: "Produto1", preco: "5.00", qtd: 12 },
        { id: 7, nome: "Produto1", preco: "5.00", qtd: 10 },
        { id: 8, nome: "Produto1", preco: "5.00", qtd: 5 }
      ],
      pageProdutos: {},
      loader: false
    };
  },
  mounted() {
    // this.getProdutos();
  },
  methods: {
    async getProdutos() {
      this.loader = true;
      try {
        const res = await Produto.getProdutos();
        this.pageProdutos = res.data;
        console.log(this.pageProdutos.content[0]);
      } catch (err) {
        console.log(err);
      } finally {
        this.loader = false;
      }
    },
    addProdutoToCart(produto) {
      if (produto.qtd >= 1) {
        produto.qtd -= 1;
      }
      addProduto(produto);
      this.$toasted.global.defaultInfo();
    }
  }
};
</script>

<style>
</style>