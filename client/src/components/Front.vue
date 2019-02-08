<template>
    <v-content >
      <v-container fill-height fluid>
        <!-- xs12 sm8 md4  -->
        <!-- <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 row>
          <v-btn icon>
              <v-icon>add</v-icon>
          </v-btn>
        
         
          <v-form>
            <v-text-field  name="search" label="Country, Town, Snowpark name.." type="text"></v-text-field >
          </v-form>
          

          <v-btn icon>
              <v-icon>search</v-icon>
          </v-btn>
          </v-flex>
        </v-layout> -->


        <v-layout align-center justify-center row>
          <v-flex xs12 sm8 md4 >
          <v-toolbar id="main" color="white">
            <v-btn icon>
              <v-icon>add</v-icon>
            </v-btn>
  
            <v-text-field  name="search" label="Country, Town, Snowpark name.." type="text"></v-text-field>
    
            <v-btn icon v-on:click="search">
              <v-icon>search</v-icon>
            </v-btn>
            </v-toolbar>
          </v-flex>
        </v-layout>

      </v-container>
    </v-content>
</template>

<script>
export default {
  name: 'Front',
  data () {
    return {
      toolbar: null,
      placed: false
    }
  },
  mounted() {
    this.test()
  },
   methods: {
    test() {
      this.toolbar = document.getElementsByClassName('v-toolbar__content')[0]
      
    },
    async search(e) {
      let {toolbar} = this;
      // let toolbar = document.getElementsByClassName('v-toolbar__content')[0]
      const time = '1.5s';

      
      toolbar.style.setProperty("animation", `moveUp ${time}`)

      await setTimeout(() => {
        this.afterAnimation(toolbar)
      }, 1200)
    },
    afterAnimation(toolbar) {
      toolbar.style.setProperty("transform", "translateY(-40vh)");
      this.placed = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.v-toolbar {
  border: none;
  box-shadow:none;
}

@keyframes moveUp {
  0% {
    transform: translateY(0)
  }
  60% {
    transform: translateY(-50vh)
  }
  100% {
    transform: translateY(-40vh)
  }
}


</style>
