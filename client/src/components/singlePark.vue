<template>
<!-- justify-center align-center -->
 <v-layout >
    <v-flex xs12 sm8 offset-sm2 >
      <v-card >
  
        <v-img
          class="white--text"
          height="250px"
          :src="snowpark.image"
        >
          <v-container fill-height fluid  >
            <v-layout fill-height >
              <v-flex xs12 flexbox >
                
                <span class="headline">{{snowpark.name}}</span>
              </v-flex>
            </v-layout>
            
          </v-container>
           
        </v-img>
        <v-toolbar color="white" light >
             <v-btn  color="blue"
              dark
              
              absolute
              top
              right
              fab ><v-icon>thumb_up</v-icon></v-btn>
              <h1>{{snowpark.name}}</h1>
        </v-toolbar>
    
       
        <v-card-title justify-content-center>
          <div class="content">
            
              <p>Mountain: {{snowpark.mountain}}</p>
              <p>Country:{{snowpark.country}} </p>
              <p>City:{{snowpark.name}}</p>
            <span>{{snowpark.description}}</span>
            <br><span class="grey--text">added: {{snowpark.date}}</span>
          </div>
        </v-card-title>

<v-divider></v-divider>
        <v-card-actions >  
          <v-btn color="orange darken-2" dark router to="/"><v-icon dark>arrow_back</v-icon>Back</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="red" dark icon><v-icon >fab fa-facebook</v-icon></v-btn>
          <v-btn color="blue" dark icon><v-icon  >fab fa-twitter</v-icon></v-btn>
          <v-btn color="blue" dark icon><v-icon  >fab fa-instagram</v-icon></v-btn>
        </v-card-actions>
      </v-card>
      
    </v-flex>
  </v-layout>
</template>

<script>
 import ApiHandle from '@/components/ApiHandle.js'
export default {
   
  name: 'SinglePark',
  data () {
    return {
      id: null,   
      snowpark: {},
      
    }
  },
  async mounted() {
      this.id = this.$route.params.id
      const snowpark = await ApiHandle.getSnowparkById(this.id)
      this.snowpark = snowpark.snowpark

      const date =  this.snowpark.date.substring(0, 10);
      this.snowpark.date = date;
  },
  methods: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-card__title {
  justify-content: center;
  text-align:center;
}

  li {
   overflow-wrap: break-word; 
  }
  ul {
    padding: 10em
  }
  .content {
    width: 100%;
    word-wrap: break-word;
  }

</style>
