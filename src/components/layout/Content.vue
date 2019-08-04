<template>
    <content>
        <b-card >
          <template slot="header">
              <i class="fas fa-box-open mr-1"></i><span>Produtos</span>
          </template>
            <b-row>
                <b-col md="12" sm="12" class="mb-3">
                    <b-input-group>
                        <b-form-input size="sm"  type="text" placeholder="Pesquise o nome do produto..." />
                        <b-input-group-append>
                            <b-button size="sm"   variant="primary"><i class="fa fa-search"></i></b-button>
                        </b-input-group-append> 
                    </b-input-group>
                </b-col>
            </b-row>

          
            <b-table class="table-sm" :responsive="true" :fields="fields" hover striped :items="list" >
                    <template slot="actions" slot-scope="data">
                        <b-button size="sm" variant="warning" class="mr-2"
                        v-b-tooltip.hover title="Alterar">
                            <i class="fas fa-pencil-alt"></i>
                        </b-button>
                    
                    </template>
              </b-table>
        </b-card>
    </content>
</template>

<script>
export default {
    name: 'Content',
    data(){
      return {
        fields: [
                {key: 'id', label: 'Cód.', sortable: true},
                {key: 'nome', label: 'Nome', sortable: true},
                {key: 'preco', label: 'Preço', sortable: true},
                {key: 'qtd', label: 'Qtd.', sortable: true},
                {key: 'actions', label: 'Ações'}
        ],
        list: [
          {id: 1, nome: 'Refrigerante', preco: 'R$ 8.00', qtd: 5},
          {id: 2, nome: 'Cerveja', preco: 'R$ 6.00', qtd: 2},
          {id: 3, nome: 'Suco', preco: 'R$ 4.00', qtd: 1},
        ]
      }
    }
}
</script>

<style>
  content{
    padding: 20px;
    grid-area:content;
    background-color: #e4e5e6;
  }
</style>
