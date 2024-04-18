<template>
    <main class="container">
        <section>
            <ul class="card-container row" v-if="store.movies.length !== 0">
                <card v-for="movieOrTv in store.moviesAndTvs" :key="movieOrTv.id" :item="movieOrTv" />
            </ul>
            <p v-else>Effettua una ricerca per visualizzare film e serie.</p>
        </section>
    </main>
</template>

<script>
import { store } from '../store.js'
import card from './Card.vue'

export default {
    components: {
        card
    },
    data() {
        return {
            store: store,
        }
    },
    
}
</script>

<style lang="scss" scoped>

.card-container {
    gap: 10px;
    width: 100%;
}

main {
    background-color: rgb(54, 54, 54);
}
    
</style>