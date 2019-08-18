<template>
  <div class="cadastro-produto">
    <b-form @submit.prevent="submitProduto()">
      <img v-if="url" id="img-produto" :src="url">
      <b-row>
        <b-col>
          <b-form-group label="Imagem:">
            <input type="file"
              @change="onFileChange"
              accept="image/jpeg, image/png"
              enctype="multipart/form-data"
              placeholder="Escolha uma imagem..."
            >
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group label="Nome: " label-for="nome">
            <b-form-input v-model="produto.nome" size="sm" id="nome"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Preço (R$): " label-for="preco">
            <b-form-input v-model="produto.preco" size="sm" id="preco"></b-form-input>
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
          <b-form-group label="Qtd. Estoque">
            <b-form-input v-model="produto.qntEstoque" size="sm" id="qtdEstoque"></b-form-input>
          </b-form-group>
        </b-col>
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
  props:{
      produto: {
          type: Object,
          required: true
      }
  },
  data(){
    return {
      image: null,
      url: null,
      image: null
    }
  },
  methods: {
    async submitProduto(){
      this.$emit('submit-produto', this.produto);
      // const res = await Produto.saveProduto(this.produto);
      // if (this.image) {
      //   const fd = new FormData();
      //   fd.append('file', this.image);
      //   try {
      //     // console.log(res.data.id);
      //     // console.log(this.image)
      //     await Produto.uploadImage(this.image, res.data.id);
      //   } catch (err) {
      //     console.log(err.response);
      //     // showError(err);
      //   } finally {
      //     // loader.hide();
      //   }
      // }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.image = file;
      this.url = URL.createObjectURL(file);
    }
  },

};
</script>

<style>
#img-produto{
  padding:5px;
  display: block;
  margin: 0 auto;
  width: 140px;
  height: 160px;
  border: 2px solid #c2c2c2;
  border-radius: 5px;
}
</style>
