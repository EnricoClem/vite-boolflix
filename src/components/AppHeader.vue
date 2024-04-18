<template>
    <div class="container">
        <input type="text" v-model="query" placeholder="Cerca film e serie tv...">
        <button @click="searchData">Cerca!</button>
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
    
</style>