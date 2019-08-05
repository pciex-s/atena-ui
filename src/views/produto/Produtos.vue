<template>
  <b-card>
    <template slot="header">
      <i class="fas fa-box-open mr-1"></i>
      <span>Produtos</span>
    </template>
    <Spinner :loader="loader" />
    <div v-if="!loader">
      <b-row>
        <b-col md="12" sm="12" class="mb-3">
          <router-link class="btn btn-dark btn-sm mb-2" to="/admin/produtos/cadastro">
            <i class="fas fa-plus-circle mr-1"></i>Novo Produto
          </router-link>
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
        <CardProduto v-for="produto in list" :key="produto.id" :produto="produto" />
      </b-row>
      <b-pagination size="sm" :total-rows="50" :per-page="10"></b-pagination>
    </div>
  </b-card>
</template>

<script>
import Produto from "../../services/produto";
import Spinner from "../../components/shared/Spinner";
import CardProduto from "./CardProduto";
export default {
  name: "Produtos",
  components: { Spinner, CardProduto },
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
        {id: 1, nome: 'Produto1', preco: '5.00', qtnEstoque: 1},
        {id: 1, nome: 'Produto1', preco: '5.00', qtnEstoque: 1},
        {id: 1, nome: 'Produto1', preco: '5.00', qtnEstoque: 1},
        {id: 1, nome: 'Produto1', preco: '5.00', qtnEstoque: 1},
        {id: 1, nome: 'Produto1', preco: '5.00', qtnEstoque: 1},
        {id: 1, nome: 'Produto1', preco: '5.00', qtnEstoque: 1},
        {id: 1, nome: 'Produto1', preco: '5.00', qtnEstoque: 1},
        {id: 1, nome: 'Produto1', preco: '5.00', qtnEstoque: 1},
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
    }
  }
};
</script>

<style>
</style>