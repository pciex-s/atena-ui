<template>
  <div class="cadastro-cliente">
    <b-card>
      <template slot="header">
        <i class="fas fa-users mr-1"></i>
        <span>Novo Cliente</span>
      </template>
      <b-form>
        <b-row>
          <b-col>
            <b-form-group label="Nome: " label-for="nome">
              <b-form-input size="sm" id="nome"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="CPF: " label-for="cpf">
              <b-form-input size="sm" id="cpf"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-button size="sm" class="mr-2" type="submit" variant="success"><i class="fa fa-save mr-1"></i>Salvar</b-button>
        <router-link to="/admin/clientes" tag="button" class="btn btn-secondary btn-sm"><i class="fa fa-arrow-left mr-1"></i>Voltar</router-link>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CadastroCliente"
};
</script>

<style>
</style>
