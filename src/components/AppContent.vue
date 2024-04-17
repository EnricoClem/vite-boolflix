<template>
    <main class="container">
        <section>
            <div class="container">
                <h2>Risultati ricerca:</h2>
            </div>
            <div class="container">
                <ul>
                    <li>
                        titolo del film
                    </li>
                </ul>
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