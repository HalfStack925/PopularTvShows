<template>
    <div>
    
     <h3 v-for="movie in movies" :key="movie.id"> 
         <img v-bind:src="'http://image.tmdb.org/t/p/w500/'+ movie.poster_path">
         <br>
     {{movie.name}}
     <br>
     {{movie.overview}}
        <br>   
        <br>
        
    </h3>

   
  
    
     
     </div>
</template>

<script>
export default {
    name:"Card",
    props: ['movies']
}
</script>