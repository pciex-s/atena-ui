<template>
  <div class="cadastro-produto">
    <b-card>
      <template slot="header">
        <i class="fas fa-box-open mr-1"></i>
        <span>Edição Produto</span>
      </template>
      <Spinner :loader="loader"/>
      <FormProduto v-if="!loader" :produto="produto"  />
    </b-card>
  </div>
</template>

<script>
import FormProduto from '../../components/forms/FormProduto';
import Produto from '../../services/produto';
import Spinner from "../../components/shared/Spinner";
export default {
  name: "EdicaoProduto",
  components: {FormProduto, Spinner},
  data(){
    return {
      produto: {},
      loader: false
    }
  },
  mounted(){
    this.getProduto(this.$route.params.id);
  },
  methods: {
    async getProduto(id){
      this.loader = true;
      try{
        const res = await Produto.getProdutoById(id);
        console.log(res.data)
        this.produto = res.data;
      }catch(err){
        console.log(err);
      }finally{
        this.loader = false;
      }
    }
  }
};
</script>

<style>
</style>
