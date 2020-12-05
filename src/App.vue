<template>
  <div id="app">
    
    <!--imports header attribute -->
    <Header headerTitle="Popular TV Shows"/>
  </div>
</template>

<script>

// imports header file
import Header from './components/Header.vue'

//adds header to componets to be exported to app.vue
export default {
  name: 'App',
  components: {
      Header
  }
}
</script>

<style>
  * {
    margin:0;
    padding:0;
  }
</style>
