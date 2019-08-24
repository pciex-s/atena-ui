<template>
  <div class="cart-pedidos">
    <b-modal size="lg" id="modal-cart" hide-footer>
      <template slot="modal-title">Finalizar venda</template>
      <div class="d-block">
        <div v-if="existemItens()">
          <b-row>
            <b-col>
              <b-form-group label="Pesquise o cliente">
                <b-form-input size="sm"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <div class="table-responsive">
            <table class="table table-sm table-hover table-striped">
              <thead>
                <tr>
                  <th>Cód. Barras</th>
                  <th>Nome</th>
                  <th>Qtd.</th>
                  <th>Preço</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cart.items" :key="item.id">
                  <td>{{item.produto.codBarras}}</td>
                  <td>{{item.produto.nome}}</td>
                  <td>
                    <b-button @click="aumentaQuantidade(item)" variant="primary" size="sm">
                      <i class="fas fa-plus-circle"></i>
                    </b-button>
                    <b-dropdown
                      dropright
                      variant="outline-primary"
                      size="sm"
                      id="dropdown-1"
                      :text="item.qtd.toString()"
                      class="m-md-2"
                    >
                      <b-dropdown-form>
                        <b-row>
                          <b-col>
                            <b-form-group label="Qtd.">
                              <b-form-input v-model="qtdSelecionada" class="mb-1" size="sm"></b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>

                        <b-dropdown-item-button id="btn-form">
                          <b-button size="sm" @click="ajusteQuantidade(item)" variant="success" block>Ok</b-button>
                        </b-dropdown-item-button>
                      </b-dropdown-form>
                    </b-dropdown>
                    <b-button @click="diminuiQuantidade(item)" variant="primary" size="sm">
                      <i class="fas fa-minus-circle"></i>
                    </b-button>
                  </td>
                  <td>{{item.produto.preco | currency}}</td>
                  <td>
                    <b-dropdown
                      dropright
                      variant="outline-success"
                      size="sm"
                      id="dropdown-1"
                      class="m-md-2"
                    >
                      <template slot="button-content">
                        <i class="fas fa-cogs"></i>
                      </template>
                      <b-dropdown-form>
                        <b-row>
                          <b-col>
                            <b-form-group label="Ajuste (%)">
                              <b-form-input v-model="ajusteSelecionado" class="mb-1" size="sm"></b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>
                        <b-dropdown-item-button id="btn-form">
                          <b-button size="sm" @click="ajustePreco(item)" variant="success" block>Ok</b-button>
                        </b-dropdown-item-button>
                      </b-dropdown-form>
                    </b-dropdown>
                    <b-button @click="removeProduto(item)" size="sm" variant="danger">
                      <i class="fas fa-trash"></i>
                    </b-button>
                  </td>
                </tr>
              </tbody>
            </table>
            <b-badge variant="danger">
              <span id="total">Total: {{total() | currency}}</span>
            </b-badge>
            <b-button class="ml-3" size="sm" variant="success">Finalizar</b-button>
          </div>
        </div>
        <div v-if="!existemItens()">
          <b-badge variant="info">
            <span>Sem itens a venda.</span>
          </b-badge>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {
  getCart,
  removeProduto,
  increaseQuantity,
  decreaseQuantity,
  total,
  setQuantity,
  setPrice
} from "../../services/cart";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      fields: [
        { key: "id", label: "Cód.", sortable: true },
        { key: "nome", label: "Nome", sortable: true },
        { key: "qtd", label: "Qtd.", sortable: true },
        { key: "preco", label: "Preço", sortable: true },
        { key: "actions", label: "Ações" }
      ],
      qtdSelecionada: null,
      ajusteSelecionado: null
    };
  },
  computed: mapGetters(["cart"]),
  methods: {
    diminuiQuantidade(item) {
      decreaseQuantity(item);
      this.$store.dispatch("SET_CART");
    },
    aumentaQuantidade(item) {
      increaseQuantity(item);
      this.$store.dispatch("SET_CART");
    },
    removeProduto(item) {
      removeProduto(item);
      this.$store.dispatch("SET_CART");
    },
    total() {
      return total();
    },
    existemItens() {
      return this.cart.items && this.cart.items.length > 0;
    },
    ajustePreco(item){
      let ajuste =  (item.produto.preco * this.ajusteSelecionado) / 100;
      setPrice(item, item.produto.preco + ajuste);
      this.$store.dispatch("SET_CART");
    },
    ajusteQuantidade(item){
      setQuantity(item, this.qtdSelecionada);
      this.$store.dispatch("SET_CART");
    }
  }
};
</script>

<style>
#btn-form:active {
  background-color: transparent;
}

span {
  font-size: 0.875rem;
}
span#total {
  font-size: 1rem;
}
</style>
