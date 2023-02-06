<template>
  <div class="home">
  </div>
  <div class="container">
  <div class="row">
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="container">
        <div class="card" style="width: 20rem;">
          <img src="data:image/jpeg;base64,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" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Inventario de Material</h5>
              <p class="card-text">Gestión de material disponible en la unidad. Prestamos y devoluciones</p>
              <router-link to="/Material" class="btn btn-primary">Material</router-link>
            </div>
        </div><!-- FIN card -->
      </div><!-- FIN container -->
    </div><!-- FIN col -->
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="container">
        <div class="card" style="width: 20rem;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzjIoC8fO4uaJOTmdTzABSCVGE3qRwJsU38w&usqp=CAU" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Actividades TCAE</h5>
              <p class="card-text">Asiganción de actividades para las zonas de la unidad.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div><!-- FIN card -->
      </div><!-- FIN container -->
    </div><!-- FIN col -->
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="container">
        <div class="card" style="width: 20rem;">
          <img src="https://www.akribis.info/web/wp-content/uploads/2019/06/Autoclave.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Esterilización</h5>
              <p class="card-text">Gestión del material para envio y recepción de esterilización.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div><!-- FIN card -->  
      </div><!-- FIN container -->
    </div><!-- FIN col -->
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="container">
        <div class="card" style="width: 20rem;">
          <img src="https://www.akribis.info/web/wp-content/uploads/2019/06/Autoclave.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div><!-- FIN card -->  
      </div><!-- FIN container -->
    </div><!-- FIN col -->
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="container">
        <div class="card" style="width: 20rem;">
          <img src="https://www.akribis.info/web/wp-content/uploads/2019/06/Autoclave.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div><!-- FIN card -->  
      </div><!-- FIN container -->
    </div><!-- FIN col -->
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="container">
        <div class="card" style="width: 20rem;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vLrfsrLjwIbjQ_XhOKCFtygnpC6d8XF3HQ&usqp=CAU" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Rotaciones de habitaciones</h5>
              <p class="card-text">Genera la rotación de DUE y TCAE en los diferentes meses del año en los lugares de la unidad</p>
              <router-link to="/Rotaciones" class="btn btn-primary">Rotaciones</router-link>
            </div>
        </div><!-- FIN card -->
      </div><!-- FIN container -->
    </div><!-- FIN col -->
  </div><!-- FIN Row -->  
</div><!-- FIN Container -->
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped>
.card {
  margin-top: 25px;
  padding: 15px;
}

.card-title{
  text-align: center;
  color:black;
} 

.card-text{
  text-align: left;
  color:black;
}
</style>