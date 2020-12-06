<template>
    <div >
        <h1>{{movieTitle}}</h1>
        <p v-for="movie in movies" :key="movie.id">{{movie.name}}</p>
    </div>
</template>

<script>
export default {
    name:"Card",
    props: ['movies','movieTitle', 'title']
}
</script>