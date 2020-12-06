<template>
  <div id="app">
    
    <!--imports header attribute -->
    <Header headerTitle="Popular TV Shows"/>
    <Card v-bind:shows="shows"/>
    
  </div>
</template>

<script>

// imports header file
import Header from './components/Header.vue'
//import card file
import Card from './components/Card.vue'
// import axios
import axios from 'axios'


//adds componets to be exported to app.vue
export default {
  name: 'App',
  components: {
      Header,
      Card
  },
  data()
  {
    return{ 
     shows:[]
    }
  },
 mounted()
  {
    // imports api from movie database
    // saves object as res
    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=099fb9a4f570109a23e62c114190f40d&language=en-US&page=1')
    .then( (res) => {
      this.shows = res.data.results;
      this.shows.splice(4)

    })
  }

}
</script>

<style>
  * {
    margin:0;
    padding:0;
  }
</style>
