<template>
    <v-content >
      <v-container fill-height fluid>
<!-- align-center -->
        <v-layout align-center justify-center>

<!-- SHOW THAT CARD  -->
          <v-slide-y-transition>
            <v-card class="tests" v-show="placed">

                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                    aspect-ratio="2.75"
                  ></v-img>

                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                      <div>Located two hours south of Sydney in the Southern Highlands of New South Wales</div>
                    </div>
                  </v-card-title>

                  <v-card-actions>
                    <v-btn flat color="orange">Explore</v-btn>
                    <v-btn flat >Like</v-btn>
                  </v-card-actions>
            </v-card>

          </v-slide-y-transition>




<!-- FILTER STUFF -->
          <v-flex xs12 sm8 md4 >

          <v-toolbar id="main" color="white">

            <v-btn icon>
              <v-icon>add </v-icon>
            </v-btn>
  
            <v-text-field  name="search" label="Country, Town, Snowpark name.." type="text" v-model="body"></v-text-field>
    
            <v-btn icon flat color="orange" v-on:click="searchFunction(animateSearch,test)">
              <v-icon>search</v-icon>
            </v-btn>
           
            </v-toolbar>
          
          </v-flex>
        </v-layout>
  
      
      </v-container>
     <v-container>
      
           
        
     </v-container>
    </v-content>
</template>

<script>
// import test from './test'
export default {
  name: 'Front',
  // components: {
  //   test: test
  // },
  data () {
    return {
      toolbar: null,
      placed: false,
      item: 'Test item',
      data: [],
      body: null
    }
  },
  mounted() {
    this.setToolbar();
    
    // fetch('http://localhost:5000/')
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err))
  },
   methods: {
    setToolbar() {
      this.toolbar = document.getElementsByClassName('v-toolbar')[0]
    },
    async animateSearch() {
      let {toolbar} = this;
      const time = '1.5s';
      
      toolbar.style.setProperty("animation", `moveUp ${time}`)

      await setTimeout(() => {
        this.afterAnimation(toolbar)
      }, 1050)
    },
    afterAnimation(toolbar) {
      toolbar.style.setProperty("transform", "translateY(-40vh)");
      this.placed = true;
      let vLayout = document.getElementsByClassName('layout')[0]
      console.log(vLayout)
      // TODO: TUTAJ WRZUCIĆ DANE, KTÓRE SIĘ WYŚWIETLĄ PO ANIMACJI
      this.test()
    },
    searchFunction(animate, search) {
      animate()
      search();
    },
    test() {
      console.log('test')
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
.v-card {
  border:none;
  box-shadow: none
}

.tests {
    position: absolute;
    top: 20%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%);
}


@keyframes moveUp {
  0% {
    transform: translateY(0)
  }
  60% {
    transform: translateY(-45vh)
  }
  80%{
    transform: translateY(-38vh);
  }
  100% {
    transform: translateY(-40vh);
  }
}


</style>
