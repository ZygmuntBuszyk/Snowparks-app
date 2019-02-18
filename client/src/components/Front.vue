<template>
    <v-content >
      <v-container fill-height fluid>
        <v-layout align-center justify-center>

<!-- SHOW THAT CARD  -->

          <!-- <v-slide-y-transition>

            <Snowparks v-show="view" 
            :data="data" :view="view"/>
          

          </v-slide-y-transition> -->


<!-- FILTER STUFF -->
          <v-flex xs12 sm8 md4 >
          
          <v-toolbar id="main" color="white">

            <v-btn icon v-on:click="addAnimation">
              <v-icon>add </v-icon>
            </v-btn>
  
            <v-text-field  name="search" label="Country, Town, Snowpark name.." type="text" v-model="searchInput"></v-text-field>
    
            <v-btn icon flat color="orange" v-on:click="searchFunction(animateSearch,getSnowparks)">
              <v-icon>search</v-icon>
            </v-btn>
           
            </v-toolbar>
            
            <v-slide-y-transition>
          <h3 style="text-align: center; color:green" @click="hideMessage" v-show="messageShown">{{this.message}}</h3>
          </v-slide-y-transition>

          <!-- CARD SHOW: START  -->
            <v-slide-y-transition >
              <!-- class="CenterCard" -->
           
            <Snowparks v-show="view" 
            :data="data" :view="view"/>
          
         
          </v-slide-y-transition>
          <!-- CARD SHOW: END  -->
          </v-flex>





          <!-- FORM FOR ADDING SNOWPARKS -->
<v-slide-y-transition>
  <v-card class="CenterCardAdd" v-show="viewForm">
    <v-card-title> <h1>Add a <span class="snowpark">Snowpark</span></h1></v-card-title>
      <v-form ref="form" v-model="form">
        <v-text-field :rules="[rules.required]" label="name" v-model="inputData.name">
        </v-text-field>
        <v-text-field :rules="[rules.required]" label="country" v-model="inputData.country">
        </v-text-field>
        <v-text-field :rules="[rules.required]" label="city" v-model="inputData.city">
        </v-text-field>
        <v-text-field label="mountain" v-model="inputData.mountain">
        </v-text-field>
        <v-text-field label="website" v-model="inputData.website">
        </v-text-field>
        <v-text-field :rules="[rules.required]" label="Image Url" v-model="inputData.image">
        </v-text-field>
        <v-textarea :rules="[rules.required, rules.length(250)]" label="description" v-model="inputData.description">
        </v-textarea>
      </v-form>
       <!-- <v-divider></v-divider> -->
    <v-card-actions>
      <v-btn
        flat
        @click="$refs.form.reset()"
      >
        Clear
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="addSnowpark" class="white--text" color="orange" :disabled="!form"> Submit </v-btn>
    </v-card-actions>
  </v-card>
</v-slide-y-transition>

 <!-- END FORM FOR ADDING SNOWPARKS -->


        </v-layout>
  
      
      </v-container>
     <v-container>
      
           
        
     </v-container>
    </v-content>
</template>

<script>
import ApiHandle from './ApiHandle.js'
import Snowparks from './SnowParks.vue'
export default {
  name: 'Front',
  components: {
    Snowparks: Snowparks
  },
  data () {
    return {
      data: {},
      form: false,
      toolbar: null,
      view: false,
      item: 'Test item',
      inputData: {},
      body: null,
      message: null,
      searchInput:'',
      viewForm: false,
      messageShown: false,
      rules: {
        length: len => v => (v || '').length < len || `Invalid character length, maximum required: ${len}`,
        required: v => !!v || 'This field is required',
      }
    }
  },
  mounted() {
    this.setToolbar();
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
        this.afterSearchAnimation(toolbar)
      }, 1050)
    },
    afterSearchAnimation(toolbar) {
      toolbar.style.setProperty("transform", "translateY(-40vh)");
      // toolbar.style.setProperty("top", "20px")  
      this.viewForm = false;
      this.view = true;
    },
    searchFunction(animate, search) {
      animate()
      search();
    },
    async getSnowparks() {
      this.messageShown = false;
      const {searchInput} = this
        const data = await ApiHandle.getSnowparks(searchInput)
        this.data = data
        console.log(this.data)

    },
    async addAnimation() {
      this.messageShown = false;
      let {toolbar} = this;
      const time = '1.5s';
      
      toolbar.style.setProperty("animation", `moveUp ${time}`)

      await setTimeout(() => {
        this.afterAddAnimation(toolbar)
      }, 1050)
    },
    afterAddAnimation(toolbar) {
      toolbar.style.setProperty("transform", "translateY(-40vh)");
      // toolbar.style.setProperty("top", "20px")  
      this.view = false;
      this.viewForm = true;
      let vLayout = document.getElementsByClassName('layout')[0]
    },
    async AfterSubmitAnimation(){
      this.view = false;
      this.viewForm = false;
      let {toolbar} = this;
      const time = '1.5s';
      
      toolbar.style.setProperty("animation", `moveDown ${time}`)

      await setTimeout(() => {
        toolbar.style.setProperty("transform", "translateY(0)");
        this.message = 'Snowpark was added, succesfully'
        this.messageShown = true;
      }, 1150)
    },
    async addSnowpark() {
      try {
      await ApiHandle.addSnowpark(this.inputData)
      .then(this.AfterSubmitAnimation())
      }
      catch(err) {
        console.log(err)
      }
    },
    hideMessage() {
      this.messageShown = false
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.v-toolbar {
  border: none;
  box-shadow:none;
  z-index: 99999;
}
.v-card {
  border:none;
  box-shadow: none
}

.CenterCard {
    position: absolute;
    top: 20%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%);
}
.CenterCardAdd {
    position: absolute;
    top: 15%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%);
}

#main {

}
.snowpark {
  color:orange
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
@keyframes moveDown {
  0% {
    transform: translateY(-40vh);
   
  }
  20% {
    transform: translateY(-38vh);
   
  }
  60%{
     transform: translateY(-45vh)
  }
  100% {
     transform: translateY(0)
  }
}

</style>
