<template>
    <main class="container">
        <section>
            <div class="container">
                <h2>Risultati ricerca:</h2>
            </div>
            <div class="container">
                <ul v-if="store.movies.length !== 0">
                    <li v-for="movie in store.movies" :key="movie.id">
                        
                    </li>
                </ul>
                <p v-else>Effettua una ricerca per visualizzare film e serie.</p>
            </div>
        </section>
    </main>
</template>

<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store: store,
        }
    },
    
}
</script>

<style lang="scss" scoped>
    
</style>