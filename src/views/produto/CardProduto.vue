<template>
  <b-col sm="2">
    <div class="card-produto mb-3">
      <div class="img-produto">
        <img src="https://www.paodeacucar.com/img/uploads/1/375/583375.png?type=product" />
      </div>
      <div class="desc-produto">
        <h5>{{produto.nome}}</h5>
        <h4>{{'R$ ' + produto.preco}}</h4>
        <b-button variant="primary" size="sm">
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
  }
};
</script>

<style scoped>
.card-produto {
  padding: 0px;
  border: 1px solid #cac7c7;
  box-shadow: 1px 1px 3px grey;
  cursor: pointer;
  /* max-width: 150px; */
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
  width: 80px;
  height: 80px;
}
.desc-produto {
  display: flex;
  padding: 5px;
  flex-direction: column;
  align-items: center;
}
.card-produto h5 {
  padding: 0;
  margin: 0;
}
.card-produto h5 {
  color: #737b84;
}
</style>