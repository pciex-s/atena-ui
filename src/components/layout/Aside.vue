<template>
  <aside>
    <nav>
      <ul>
        <li>
          <router-link to="/admin/clientes">
            <i class="fas fa-users mr-3"></i>Clientes
          </router-link>
        </li>
        <li>
          <router-link to="/admin/produtos">
            <i class="fas fa-box-open mr-3"></i>Produtos
          </router-link>
        </li>
        <li>
          <router-link to="/admin/clientes">
            <i class="fas fa-chart-line mr-3"></i>Vendas
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "Aside"
};
</script>

<style>
aside {
  grid-area: aside;
  background-color: #2f353a;
}

aside ul {
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}

aside ul li {
  cursor: pointer;
  padding: 8px;
  padding-left: 20px;
}

aside ul li:hover {
  background-color: #20a8d8;
}

aside ul li:hover i {
  color: #fff;
}

aside ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
}

aside ul li a i {
  color: #20a8d8;
}

aside ul li a:hover {
  text-decoration: none;
  color: #fff;
}

.menu-title {
  color: #fff;
  text-align: center;
}
</style>
