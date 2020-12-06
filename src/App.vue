<template>
  <div id="app">
    
    <!--imports header attribute -->
    <Header headerTitle="Popular TV Shows"/>
    <Card cards="Popular TV Shows" v:bind:cards = "movies"/>
  </div>
</template>

<script>

// imports header file
import Header from './components/Header.vue'
//import card file
import Card from './components/Card.vue'
// import axios
//import axios from 'axios'


//adds header to componets to be exported to app.vue
export default {
  name: 'App',
  components: {
      Header,
      Card
  },
  data()
  {
    return{ 
      movies:[
        {id:1, img:"", title:"", overview:""},
        {id:2, img:"", title:"", overview:""},
        {id:3, img:"", title:"", overview:""},
        {id:4, img:"", title:"", overview:""}
      ]

    }
  },
 // mounted()
  //{
    // imports api from movie database
    // saves object as res
   // axios.get('https://api.themoviedb.org/3/tv/popular?api_key=099fb9a4f570109a23e62c114190f40d&language=en-US&page=1')
    //.then( (res) => {
     // this.movies = res.data.results;
      //this.movies.splice(4)

    //})
  //}

}
</script>

<style>
  * {
    margin:0;
    padding:0;
  }
</style>
