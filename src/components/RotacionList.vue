<template>
<div class="container">
     <div id="contact-list" class="contact-list">
    <div v-for="mes in lugares" :key="mes.lloc">
      <Cuadrante :lugares="lugares" @deleteAddress="deleteAddress"/>
    </div>
  </div>
</div>
</template>

<script>
import Cuadrante from "./CuadranteUbicaciones.vue";
    export default {
        name: "RotacionList",
        props: {
            lugares: {
            type: Array,
        }
    },
    components: { Cuadrante },
    }
</script>

<style  scoped>
.contact-list {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 10px;
  margin-bottom: 15px;
}
</style>