<template>
    <li class="card">
        <img :src="`http://image.tmdb.org/t/p/w342/${item.poster_path}`" />
        <h3 v-if="item.title">{{ item.title }}</h3>
        <h3 v-else>{{ item.name }}</h3>
        <p v-if="item.original_title">{{ item.original_title }}</p>
        <p v-else>{{ item.original_name }}</p>
        <img v-if="languages[item.original_language]" :src="`/${languages[item.original_language]}`" class="lang-img" alt=""/>
        <div v-else>
            <span>Lingua originale: </span>
            <span class="lang-initials">{{ item.original_language }}</span>
        </div>
        <p>{{ setRating() }}</p>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            languages: {
                'en': 'en.png',
                'it': 'it.png',
                'de': 'de.png',
                'es': 'es.png',
                'fr': 'fr.png'
            }
        }
    },
    methods: {
        setRating() {
            return Math.round(this.item.vote_average / 2);
        }
    },
}
</script>

<style lang="scss" scoped>

.card {
    padding: 20px;
    color: white;
    background-color: darkslateblue;
    border-radius: 10px;
}

.lang-img {
    width: 20px;
    padding-top: 10px;
}

.lang-initials {
    text-transform: uppercase;
}
    
</style>