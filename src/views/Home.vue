<template>
  <div class="home">
    <Header />
    <Aside />
    <Content />
    <Footer />
  </div>
</template>
<script>
import Header from '../components/layout/Header'
import Aside from '../components/layout/Aside'
import Content from '../components/layout/Content'
import Footer from '../components/layout/Footer'
export default {
  name: 'Home',
  components: {Header, Aside, Content, Footer}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .home{
    display: grid;
    height: 100vh;
    grid-template-rows: 55px 1fr 30px;
    grid-template-columns: 200px 1fr;
    grid-template-areas: 
    "header header"
    "aside content"
    "aside footer";
  }
</style>
