<template>
 <v-card>
                  
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    aspect-ratio="2.75"
                    
                  ></v-img>
                  
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">{{snowpark.name}}</h3>
                      <p>{{snowpark.country}}, {{snowpark.city}}</p>
                      <!-- <div>{{data}}</div> -->
                      <div><p>{{snowpark.description}}</p></div>
                      
                    </div>
                  </v-card-title>

                  <v-card-actions>
                    <v-btn flat color="orange darken-4" :to="{name: 'snowpark', params:{id: snowpark._id}}">View</v-btn>
                    <v-btn flat color="orange" @click="test">Site</v-btn>
                    <!--   <v-btn flat color="orange darken-4" :to='park'>View</v-btn> -->
                  </v-card-actions>
            </v-card>
            
</template>

<script>
export default {
  name: 'Onepark',
  data () {
    return {
      snowpark: this.$attrs.snowpark
    }
  },
  mounted() {
    // this.snowpark.description 
    const desc =  this.snowpark.description.substring(0, 50);
    console.log(desc)
    this.snowpark.description = desc.concat(' [...]');
  },
  methods: {
    test(){
      console.log(this.$attrs.snowpark)
      console.log(this.snowpark._id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CenterCard {
 padding-top: 1em
}
</style>
