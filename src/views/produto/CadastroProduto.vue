<template>
  <div class="cadastro-produto">
    <b-card>
      <template slot="header">
        <i class="fas fa-box-open mr-1"></i>
        <span>Novo Produto</span>
      </template>
      <FormProduto :produto="produto" />
    </b-card>
  </div>
</template>

<script>
import FormProduto from '../../components/forms/FormProduto';
export default {
  name: "CadastroProduto",
  components: {FormProduto},
  data(){
    return {
      produto: {}
    }
  }
};
</script>

<style>
</style>
