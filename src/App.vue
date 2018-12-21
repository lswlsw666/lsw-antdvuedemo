<template>
  <div id="app">
    <!--<Index/>-->
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
// import Index from './components/Index.vue';
import Header from './components/common/Header.vue';
import Content from './components/common/Content.vue';
import Footer from './components/common/Footer.vue';
// import LayoutContent from './components/common/LayoutContent.vue';

export default {
  name: 'app',
  components: {
      // Index
      Header, Content, Footer
  }
}
</script>
<!--<style>-->
<!--#app {-->
  <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
  <!-- -webkit-font-smoothing: antialiased;-->
  <!-- -moz-osx-font-smoothing: grayscale;-->
  <!--text-align: center;-->
  <!--color: #2c3e50;-->
  <!--margin-top: 60px;-->
<!--}-->
<!--</style>-->
