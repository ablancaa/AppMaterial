<template>
<div class="container">
    <div id="contact-list" class="contact-list">
    <div v-for="asigancion in mix" :key="asigancion.id">
      <Cuadrante :listado="asigancion"/>
    </div> 
    </div>
</div>

</template>

<script>
import Cuadrante from "./CuadranteUbicaciones.vue";
    export default {
        name: "RotacionList",
        props: {
            mix: {
                type: Array,
            }, 
            mix2: {
                type: Array,
            },
    },
    components: { Cuadrante },
    setup(props, context) {
        let listado = props.mix2;
        

        return { listado }
        }
    }
</script>

<style  scoped>
.contact-list {
  display: grid;
  /* width: 100%;*/
 grid-template-columns: 1fr 1fr 1fr;
  margin-top: 10px;
  margin-bottom: 15px;
  
}
</style>