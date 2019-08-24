<template>
  <div class="produto-detail">
    <b-modal size="md" id="modal-produto-detail" hide-footer>
      <template slot="modal-title">{{produto.nome}} - Cód. {{produto.codBarras}}</template>
      <div class="d-block">
        <img id="img-produto2" src="https://superprix.vteximg.com.br/arquivos/ids/178451-292-292/bud-550ml-front.png?v=636790100295230000">
        <hr>
        <div class="desc-produto">
          <span><strong>Cód. Barras: </strong>{{produto.codBarras}}</span>
          <span><strong>Nome: </strong>{{produto.nome}}</span>
          <span><strong>Preço: </strong>{{produto.preco | currency}}</span>
          <span><strong>Qtd. estoque: </strong>{{produto.qntEstoque}}</span>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "ProdutoDetail",
  props: {
      produto: {
          type: Object,
          required: false
      }
  }
  
};
</script>

<style>
#img-produto2{
  padding:5px;
  display: block;
  margin: 0 auto;
  width: 140px;
  height: 160px;
}

.desc-produto{
  display: flex;
  flex-direction: column;
}
</style>
