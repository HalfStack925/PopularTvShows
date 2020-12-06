<template>
    <div >
     <h3 v-for="movie in movies" :key="movie.id"> 
     {{movie.name}} <br>
     {{movie.overview}}</h3>
     </div>
</template>

<script>
export default {
    name:"Card",
    props: ['movies']
}
</script>