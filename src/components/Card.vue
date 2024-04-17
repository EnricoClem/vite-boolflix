<template>
    <li class="card">
        <h3>{{ item.title }}</h3>
        <p>{{ item.original_title }}</p>
        <p>{{ item.original_language }}</p>
        <p>{{ item.vote_average }}</p>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

.card {
    padding: 20px;
    color: white;
    background-color: darkslateblue;
    border-radius: 10px;
}
    
</style>