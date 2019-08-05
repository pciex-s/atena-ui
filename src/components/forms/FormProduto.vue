<template>
  <div class="cadastro-produto">
    <b-form @submit.prevent="submitProduto()">
      <b-row>
        <b-col>
          <b-form-group label="Nome: " label-for="nome">
            <b-form-input v-model="produto.nome" size="sm" id="nome"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Preço (R$): " label-for="preco">
            <b-form-input v-model="produto.preco" size="sm" id="preco" type="number"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Cód. de Barras: " label-for="codBarra">
            <b-form-input v-model="produto.codBarras" size="sm" id="codBarra"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Imagem:">
            <b-form-file size="sm"
              @change="uploadImage"
              accept="image/jpeg, image/png"
              browse-text="Procurar"
              placeholder="Escolha uma imagem..."
            ></b-form-file>
          </b-form-group>
        </b-col>
        <!-- <b-col>
          <b-form-group label="Categoria: " label-for="categoria">
            <b-form-select size="sm" id="categoria">
              <option :value="null" disabled>Selecione a categoria</option>
              <option value="Usado">Cerveja</option>
              <option value="Novo">Refrigerante</option>
            </b-form-select>
          </b-form-group>
        </b-col> -->
      </b-row>
      <b-button size="sm" class="mr-2" type="submit" variant="success">
        <i class="fa fa-save mr-1"></i>Salvar
      </b-button>
      <router-link to="/admin/produtos" tag="button" class="btn btn-secondary btn-sm">
        <i class="fa fa-arrow-left mr-1"></i>Voltar
      </router-link>
    </b-form>
  </div>
</template>

<script>
import Produto from '../../services/produto';
export default {
  name: "FormProduto",
  // props:{
  //     produto: {
  //         type: Object,
  //         required: true
  //     }
  // },
  data(){
    return {
      produto: {},
      imageSrc: null
    }
  },
  methods: {
    async submitProduto(){
      // this.$emit('submit-produto', this.produto);
      this.produto.imagem = this.imageSrc;
      await Produto.saveProduto(this.produto);
      console.log('aa');
    },
    uploadImage: function() {    
      var file = document
        .querySelector('input[type=file]')
        .files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
        this.imageSrc = e.target.result             
      };
      reader.onerror = function(error) {
        alert(error);
      };
      reader.readAsDataURL(file);      
    }
  },

};
</script>

<style>
</style>
