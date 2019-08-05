<template>
  <div class="cadastro-cliente">
    <b-card>
      <template slot="header">
        <i class="fas fa-users mr-1"></i>
        <span>Novo Cliente</span>
      </template>
      <FormCliente :cliente="cliente" />
    </b-card>
  </div>
</template>

<script>
import FormCliente from '../../components/forms/FormCliente';
export default {
  name: "CadastroCliente",
  components: {FormCliente},
  data(){
    return {
      cliente: {}
    }
  }
};
</script>

<style>
</style>
