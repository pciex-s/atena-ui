<template>
  <b-card>
    <template slot="header">
      <i class="fas fa-users mr-1"></i>
      <span>Clientes</span>
    </template>
    <b-row>
      <b-col md="12" sm="12" class="mb-3">
        <router-link class="btn btn-dark btn-sm mb-2" to="/admin/clientes/cadastro">
          <i class="fas fa-plus-circle mr-1"></i>Novo Cliente
        </router-link>
        <b-input-group>
          <b-form-input size="sm" type="text" placeholder="Pesquise o nome do cliente..." />
          <b-input-group-append>
            <b-button size="sm" variant="primary">
              <i class="fa fa-search"></i>
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>

    <b-table class="table-sm" :responsive="true" :fields="fields" hover striped :items="list">
      <template slot="actions" slot-scope="data">
        <b-button size="sm" variant="warning" class="mr-2" v-b-tooltip.hover title="Alterar">
          <i class="fas fa-pencil-alt"></i>
        </b-button>
        <b-button size="sm" variant="danger" class="mr-2" v-b-tooltip.hover title="Apagar">
          <i class="fas fa-trash"></i>
        </b-button>
      </template>
    </b-table>
    <b-pagination size="sm" :total-rows="40" :per-page="10"></b-pagination>
  </b-card>
</template>

<script>
export default {
  name: "Clientes",
  data() {
    return {
      fields: [
        { key: "id", label: "Cód.", sortable: true },
        { key: "nome", label: "Nome", sortable: true },
        { key: "cpf", label: "CPF", sortable: true },
        { key: "actions", label: "Ações" }
      ],
      list: [
        { id: 1, nome: "Rafael", cpf: "111.111.111-00" },
        { id: 2, nome: "Henrique", cpf: "111.111.111-00" },
        { id: 3, nome: "João", cpf: "111.111.111-00" },
        { id: 4, nome: "Rafael", cpf: "111.111.111-00" },
        { id: 5, nome: "Henrique", cpf: "111.111.111-00" },
        { id: 6, nome: "João", cpf: "111.111.111-00" }
      ]
    };
  }
};
</script>

<style>
</style>
