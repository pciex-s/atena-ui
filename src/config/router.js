import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Produtos from '../views/produto/Produtos';
import CadastroProduto from '../views/produto/CadastroProduto';
import Clientes from '../views/cliente/Clientes';
import CadastroCliente from '../views/cliente/CadastroCliente';
import EdicaoProduto from '../views/produto/EdicaoProduto';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'produtos',
          name: 'produtos',
          component: Produtos,
        },
        {
          path: 'produtos/cadastro',
          name: 'cadastro-produto',
          component: CadastroProduto,
        },
        {
          path: 'produtos/:id',
          name: 'edicao-produto',
          component: EdicaoProduto,
        },
        {
          path: 'clientes',
          name: 'clientes',
          component: Clientes,
        },
        {
          path: 'clientes/cadastro',
          name: 'cadastro-cliente',
          component: CadastroCliente,
        }
      ]
    },
    {
      path: '',
      redirect: '/admin/produtos'
    },
    {
      path: '*',
      redirect: '/admin'
    } 
  ]
})