<template>
  <b-col sm="3">
    <div class="card-produto mb-3">
      <div class="img-produto">
        <img :src="produto.imagem ? produto.imagem : 'https://superprix.vteximg.com.br/arquivos/ids/178064-600-600/Sprite_2litros.png?v=636721934000000000'" />
      </div>
      <div class="desc-produto">
        <h5 class="produto-nome">{{produto.nome}}</h5>
        <h4>{{'R$ ' + produto.preco}}</h4>
        <h5>Qtd. {{produto.qtd}}</h5>
        <b-button :disabled="produto.qtd < 1" @click="addProduto(produto)" block variant="primary" size="sm">
          <i class="fas fa-plus-circle mr-2"></i>
          <span>Adicionar</span>
        </b-button>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "CardProduto",
  props: {
    produto: {
      type: Object,
      required: true
    }
  },
  methods: {
    addProduto(produto){
      this.$emit('add-produto', produto);
    }
  }
};
</script>

<style scoped>
.card-produto {
  padding: 0px;
  border: 1px solid #cac7c7;
  box-shadow: 1px 1px 3px grey;
  cursor: pointer;
}
.card-produto:hover {
  box-shadow: 3px 3px 3px grey;
}
.img-produto {
  display: flex;
  justify-content: center;
  padding: 10px 0 5px 0;
  background-color: #fff;
  border-bottom: 1px solid #cac7c7;
}
.card-produto img {
  width: 90px;
  height: 90px;
}
.desc-produto {
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: center;
}
.card-produto h4 {
  padding: 5px;
  margin: 0;
  font-size: 1.5rem;
}
.card-produto h5.produto-nome {
  padding: 5px;
  margin: 0;
  color: #737b84;
  font-size: 1.1rem;
}
</style>