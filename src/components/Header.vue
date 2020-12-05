<!--
    component template that holds whatever will be displayed as header
-->
<template>
    <div class="header">
        <h1>{{headerTitle}}</h1>
    </div>
</template>

<script>

//gives parent attribute of headerTitle
//is imported as H1
export default {
    name: "Header",
    props: ['headerTitle']
}
</script>

<!--style that is specfic to this file -->
<style scoped>
.header
{
    background: #333;
    color:white;
    text-align: center;
    padding: 10px;
    margin: 0px;
}
</style>