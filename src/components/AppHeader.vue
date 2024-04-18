<template>
    <div class="container head">
        <div class="flex between centered">
            <h1>BOOLFLIX</h1>
            <div class="flex centered">
                <input class="search-bar" type="text" v-model="query" placeholder="Cerca film e serie tv...">
                <button @click="searchData" class="search-button">
                    <font-awesome-icon class="search-icon" :icon="['fas', 'magnifying-glass']" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    data() {
        return {
            query:''
        }
    },
    methods: {
        searchData() {
            axios.get('https://api.themoviedb.org/3/search/movie',{
                params: {
                    api_key: '8be08f5c8e1957ec16193b9e110877d2',
                    query: this.query
                }
            }).then((res) => {
                store.movies = res.data.results
                store.moviesAndTvs = res.data.results
            })
            axios.get('https://api.themoviedb.org/3/search/tv',{
                params: {
                    api_key: '8be08f5c8e1957ec16193b9e110877d2',
                    query: this.query
                }
            }).then((res) => {
                store.series = res.data.results
                store.moviesAndTvs = res.data.results
            })
        }
    }
}
</script>

<style lang="scss" scoped>

.container.head {
    background-color: black;
    color: red;
}

.search-button {
    background: none;
    padding: 10px;
    border: none;
    pointer-events: visible;
}

.search-icon {
    color: white;
    font-size: 25px;
}

.search-bar {
    padding: 10px;
    border-radius: 9999px;
    border: none;
}
    
</style>