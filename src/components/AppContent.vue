<template>
    <main class="container">
        <section>
            <div class="container">
                <h2>Risultati ricerca:</h2>
            </div>
            <div class="container">
                <ul class="card-container" v-if="store.movies.length !== 0">
                    <card v-for="movieOrTv in store.moviesAndTvs" :key="movieOrTv.id" :item="movieOrTv" />
                </ul>
                <p v-else>Effettua una ricerca per visualizzare film e serie.</p>
            </div>
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
    display: flex;
    flex-wrap: nowrap;
    gap: 10px;
    margin: 20px;
}
    
</style>