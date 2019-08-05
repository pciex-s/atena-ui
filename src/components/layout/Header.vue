<template>
  <header>
    <div class="left">
      <router-link tag="h3" to="/admin/produtos">
        <i class="fab fa-windows mr-2"></i>ATENA
        <span>UI</span>
      </router-link>
      <i class="fas fa-bars ml-5"></i>
      <nav>
        <ul class="menu-topo">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <img class="avatar" src="@/assets/avatar.png" />
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>

header{
  grid-area: header;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.left{
  display: flex;
}

header h3 {
  cursor:pointer;
  font-size: 1.2rem;
}

header h3 span {
  color: #20a8d8;
  margin-left:-5px;
}

.fa-bars {
  font-size: 25px;
  cursor: pointer;
  color: grey;
}

.fa-bars:hover {
  color: #000;
}

.menu-topo {
  display: flex;
  list-style: none;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-left: 30px;
}

.menu-topo li {
  padding-right: 20px;
}

.menu-topo li a {
  text-decoration: none;
  font-size: 0.895rem;
  color: grey;
}

.menu-topo li a:hover {
  color: black;
}

.avatar {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  justify-self: end;
}
</style>
