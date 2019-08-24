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
          <b-button v-if="cart.items.length > 0" @click="getCart();$bvModal.show('modal-cart');" variant="success" size="sm">
            <i class="fas fa-shopping-cart mr-1"></i>Finalizar venda
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12" sm="12" class="mb-2">  
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

      <b-table class="table-sm" :responsive="true" :fields="fields" hover striped :items="pageProdutos.content">
            <template slot="precoProduto" slot-scope="data">
                {{data.item.preco | currency}}
            </template>
            <template slot="actions" slot-scope="data">
              <b-button size="sm" @click="selecionaProduto(data.item);$bvModal.show('modal-produto-detail')"  variant="primary" class="mr-2" v-b-tooltip.hover title="Visualizar">
                <i class="fas fa-search-plus"></i>
              </b-button>
              <b-button @click="addProdutoToCart(data.item)"  size="sm" variant="dark" class="mr-2" v-b-tooltip.hover title="Adicionar">
                <i class="fas fa-plus-circle"></i>
              </b-button>
              <b-button @click="navigate(data.item.id)" size="sm" variant="warning" class="mr-2" v-b-tooltip.hover title="Alterar">
                <i class="fas fa-pencil-alt"></i>
              </b-button>
              <b-button size="sm" @click="showMsgBoxTwo(data.item.id)" variant="danger" class="mr-2" v-b-tooltip.hover title="Apagar">
                <i class="fas fa-trash"></i>
              </b-button>
            </template>
          </b-table>
      <b-pagination size="sm" v-model="page" :total-rows="pageProdutos.totalElements" :per-page="pageProdutos.size"></b-pagination>
    </div>
    <ProdutoDetail :produto="produtoSelecionado" />
    <Cart />
  </b-card>
</template>

<script>
import Produto from "../../services/produto";
import Spinner from "../../components/shared/Spinner";
import {addProduto, getCart} from '../../services/cart';
import Cart from './Cart';
import ProdutoDetail from './ProdutoDetail';
import {mapGetters} from 'vuex';
export default {
  name: "Produtos",
  components: { Spinner, Cart, ProdutoDetail },
  computed: mapGetters(['cart']),
  data() {
    return {
      page: 1,
      fields: [
        { key: "codBarras", label: "Cód. Barras", sortable: true },
        { key: "nome", label: "Nome", sortable: true },
        { key: "precoProduto", label: "Preço", sortable: true },
        { key: "qntEstoque", label: "Qtd.", sortable: true },
        { key: "actions", label: "Ações" }
      ],
      pageProdutos: {},
      loader: false,
      produtoSelecionado: {}
    };
  },
  watch:{
        page(){
            this.getProdutos();
        }
  },
  mounted() {
    this.getProdutos();
  },
  methods: {
    async getProdutos() {
      this.loader = true;
      try {
        const res = await Produto.getProdutos(this.page -1);
        this.pageProdutos = res.data;
      } catch (err) {
        console.log(err);
      } finally {
        this.loader = false;
      }
    },
    addProdutoToCart(produto) {
      
      if (produto.qntEstoque >= 1) {
        produto.qntEstoque -= 1;
      }
      addProduto(produto);
      this.$store.dispatch('SET_CART');
      this.$toasted.global.defaultInfo();
    },
    async removeProduto(id){
      try{
        await Produto.removeProduto(id);
        this.getProdutos();
      }catch(err){
        console.log(err);
      }
    },
    navigate(id){
          this.$router.push({name: 'edicao-produto', params: {id}});
    },
    showMsgBoxTwo(id) {
        this.boxTwo = ''
        this.$bvModal.msgBoxConfirm(`Tem certeza que deseja excluir este produto?` , {
            title: 'Confirmação',
            size: 'md',
            buttonSize: 'sm',
            okVariant: 'danger',
            okTitle: 'SIM',
            cancelTitle: 'NÃO',
            footerClass: 'p-2',
            hideHeaderClose: false,
            centered: true
          })
            .then((res) => {
                if(res){
                    this.removeProduto(id);
                }
            })
            .catch(() => {
              
            })
      },
      selecionaProduto(produto){
        this.produtoSelecionado = produto;
      },
      getCart(){
        this.$store.dispatch('SET_CART');
      }
    }
};
</script>

<style>
</style>