<template>
  <div class="cadastro-produto">
    <b-card>
      <template slot="header">
        <i class="fas fa-box-open mr-1"></i>
        <span>Novo Produto</span>
      </template>
      <b-form>
        <b-row>
          <b-col>
            <b-form-group label="Nome: " label-for="nome">
              <b-form-input size="sm" id="nome"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Preço (R$): " label-for="preco">
              <b-form-input size="sm" id="preco" type="number"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group label="Cód. de Barras: " label-for="codBarra">
              <b-form-input size="sm" id="codBarra"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col>
            <b-form-group label="Categoria: " label-for="categoria">
              <b-form-select size="sm" id="categoria">
                <option :value="null" disabled>Selecione a categoria</option>
                <option value="Usado">Cerveja</option>
                <option value="Novo">Refrigerante</option>
              </b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
        <b-button size="sm" class="mr-2" type="submit" variant="success"><i class="fa fa-save mr-1"></i>Salvar</b-button>
        <router-link to="/admin/produtos" tag="button" class="btn btn-secondary btn-sm"><i class="fa fa-arrow-left mr-1"></i>Voltar</router-link>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "CadastroProduto"
};
</script>

<style>
</style>
