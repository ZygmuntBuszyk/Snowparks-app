<template>
<!-- checking if object is empty Object.entries(obj).length === 0 && obj.constructor === Object -->
<!--  v-if="this.$attrs.data.view"  -->
<div class="wholeIdea">

<div return v-for="(snowpark,index) in this.$attrs.data.snowparks" :key="index">
       <Onepark :snowpark="snowpark"/>
       <!-- <v-divider></v-divider> -->
       <!-- <p>{{snowpark}}</p> -->
       <!-- <h1>{{index}}</h1> -->
</div>
<!-- <button @click="test"> test </button> -->


</div>
</template>

<script>
import Onepark from './Snowpark.vue'
export default {
  
  name: 'ShowSnowparks',
  components: {
    "Onepark": Onepark
  },
  data () {
    return {
      snowparks: null
    }
  },
  methods: {
    test() {
      console.log(this.$attrs.data.snowparks)
      console.log(this.snowparks)
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wholeIdea {
  margin-top: 3em
}
</style>
