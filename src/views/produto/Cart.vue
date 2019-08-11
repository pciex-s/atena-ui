<template>
  <div class="cart-pedidos">
    <b-modal size="lg" id="modal-cart" hide-footer>
      <template slot="modal-title">Finalizar venda</template>
      <div class="d-block">
        <div class="table-responsive">
          <table class="table table-sm table-hover table-striped">
            <thead>
              <tr>
                <th>Cód.</th>
                <th>Nome</th>
                <th>Qtd.</th>
                <th>Preço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.items" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.nome}}</td>
                <td>
                  <b-button variant="primary" size="sm">
                    <i class="fas fa-plus-circle"></i>
                  </b-button>
                  <b-dropdown
                    dropright
                    variant="outline-primary"
                    size="sm"
                    id="dropdown-1"
                    :text="item.qtd"
                    class="m-md-2"
                  >
                    <b-dropdown-form>
                      
                        <b-row>
                          <b-col>
                            <b-form-group label="Qtd.">
                              <b-form-input class="mb-1" size="sm"></b-form-input>
                              
                            </b-form-group>
                          </b-col>
                        </b-row>
                      
                      <b-dropdown-item-button id="btn-form" ><b-button size="sm" variant="success" block>Ok</b-button></b-dropdown-item-button>
                    </b-dropdown-form>
                  </b-dropdown>
                  <b-button variant="primary" size="sm">
                    <i class="fas fa-minus-circle"></i>
                  </b-button>
                </td>
                <td>{{'R$ ' + item.preco}}</td>
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
                      <b-form @submit.stop.prevent="">
                        <b-row>
                          <b-col>
                            <b-form-group label="Ajuste (%)">
                              <b-form-input class="mb-1" size="sm"></b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>
                      </b-form>
                      <b-dropdown-item-button id="btn-form" ><b-button size="sm" variant="success" block>Ok</b-button></b-dropdown-item-button>
                    </b-dropdown-form>
                  </b-dropdown>
                  <b-button size="sm" variant="danger">
                    <i class="fas fa-trash"></i>
                  </b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      cart: {
        items: [
          { id: 1, nome: "Heineken", qtd: 1, preco: 5 },
          { id: 2, nome: "Heineken", qtd: 1, preco: 5 },
          { id: 3, nome: "Heineken", qtd: 1, preco: 5 }
        ]
      },
      fields: [
        { key: "id", label: "Cód.", sortable: true },
        { key: "nome", label: "Nome", sortable: true },
        { key: "qtd", label: "Qtd.", sortable: true },
        { key: "preco", label: "Preço", sortable: true },
        { key: "actions", label: "Ações" }
      ]
    }
  },
  methods: {
      onClick() {
        // Close the menu and (by passing true) return focus to the toggle button
        this.$refs.dropdown.hide();
      }
  }
};
</script>

<style>
#btn-form:active{
    background-color:transparent;
}
</style>
