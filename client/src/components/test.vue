<template>

   <v-card class="tests">
    <h1>TEST COMPONENT</h1>
    </v-card>

</template>

<script>

export default {
  name: 'test',
  data () {
    return {
    }
  }
}
</script>

<style>
.tests {
    position: absolute;
    top: 20%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%);
}
</style>
