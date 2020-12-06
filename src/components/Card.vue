<template>
<!--
    uses v-for to loop through tv shows, displaying image, name and description
--->
    <div class="card">
     <h3 v-for="show in shows" :key="show.id"> 
         <img v-bind:src="'http://image.tmdb.org/t/p/w500/'+ show.poster_path" >
         <br>
     {{show.name}}
     <br>
    {{show.overview}}
    </h3>
    </div>
</template>

<script>
export default {
    name:"Card",
    props: ['shows']
}
</script>

<style scoped>
.card {
    margin:auto;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    
}
h3{
    text-align: center;
}   

img{
    width: 15rem;
    }



</style>