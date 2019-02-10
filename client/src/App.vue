<template>

  <div id="app"> 
    <v-app>
        <router-view/>
     </v-app>
        
  </div>

</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  /* display: flex;
  justify-content: center;
  align-items: center;
   text-align: center;
  height: 100vh; */
  overflow: hidden;
}

.links a{
  color:red;  
  text-decoration: none;
}


</style>
