<template>
  <div id="app">
    <Cabecera/>
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>

</template>
<script>
import Cabecera from '@/components/Cabecera.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    Cabecera,
    NavBar,
    Footer,
  }
}
</script>
<style>
body{
  margin: auto;
  background-image: url("./assets/fondoPantalla.png");
  background-repeat: no-repeat;
  background-image: fixed;
  background-image: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  height: auto;
  width: 100%;
  height: 100%;
  }
</style>
