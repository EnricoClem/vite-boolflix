<template>
    <div class="container">
        <input type="text" v-model="query" placeholder="Cerca film e serie tv...">
        <button @click="searchData">Cerca!</button>
    </div>
</template>

<script>
import { Axios } from 'axios';

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
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>