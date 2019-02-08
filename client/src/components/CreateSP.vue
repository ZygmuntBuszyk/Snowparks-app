<template>
    <v-container>
      <p>weroweriwerhowerewrwerwerwer</p>
      <form>
      <img :src="imageUrl" height="150" v-if="imageUrl"/>
				<v-text-field label="Select Image" @click='pickAfile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
      <input
						type="file"
						style="display:none"
						ref="image"
						accept="image/*"
						@change="onFilePicked"
					>
      </form>
    </v-container>
</template>

<script>
export default {
  name: 'Create',
  data () {
    return {
      imageName: '',
      imageUrl: '',
      imageFile: ''
    }
  },
  methods: {
    pickAfile() {
      this.$refs.image.click()
    },
    onFilePicked (e) {
			const files = e.target.files
			if(files[0] !== undefined) {
				this.imageName = files[0].name
				if(this.imageName.lastIndexOf('.') <= 0) {
					return
				}
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
					this.imageUrl = fr.result
					this.imageFile = files[0] // this is an image file that can be sent to server...
				})
			} else {
				this.imageName = ''
				this.imageFile = ''
				this.imageUrl = ''
			}
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
