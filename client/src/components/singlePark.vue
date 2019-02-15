<template>
<div>
<ul>
    <li>image:{{snowpark.image}}</li>
    <li>mountain: {{snowpark.mountain}}</li>
    <li>country:{{snowpark.country}} </li>
    <li>city:{{snowpark.name}}</li>
    <li>description:{{snowpark.description}}</li>
    <li>name: {{snowpark.name}}</li>
    <li>website:{{snowpark.website}}</li>
    <li>date:{{snowpark.date}}</li>
</ul>
    <p>  </p>
</div>     
</template>

<script>
 import ApiHandle from '@/components/ApiHandle.js'
export default {
   
  name: 'SinglePark',
  data () {
    return {
      id: null,   
      snowpark: {}
    }
  },
  async mounted() {
      this.id = this.$route.params.id
      const snowpark = await ApiHandle.getSnowparks(this.id)
      this.snowpark = snowpark.snowparks[0]
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
