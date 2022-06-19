<template>
   <div id="nav"> 
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/about">Alberto</router-link> |
    <router-link to="/about">Blanca</router-link> |
  </div> 
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #8fc5fa;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>