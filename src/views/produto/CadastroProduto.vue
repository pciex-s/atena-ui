<template>
  <div class="cadastro-produto">
    <b-card>
      <template slot="header">
        <i class="fas fa-box-open mr-1"></i>
        <span>Novo Produto</span>
      </template>
      <FormProduto :produto="produto" @submit-produto="saveProduto"  />
    </b-card>
  </div>
</template>

<script>
import FormProduto from '../../components/forms/FormProduto';
import Produto from '../../services/produto';
export default {
  name: "CadastroProduto",
  components: {FormProduto},
  data(){
    return {
      produto: {}
    }
  },
  methods: {
        async saveProduto(produto){
            try{
                await Produto.saveProduto(produto);
                this.$toasted.global.defaultSuccess();
                this.$router.push('/admin/produtos');
            }catch(err){
                // this.$toasted.global.defaultError();
            }
        }
    },
};
</script>

<style>
</style>
