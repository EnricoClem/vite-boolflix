<template>
    <li class="card col-2" :style="{ backgroundImage: `url(http://image.tmdb.org/t/p/w342/${item.poster_path})` }">
        <div class="hide centered">
            <h3 v-if="item.title">{{ item.title }}</h3>
            <h3 v-else>{{ item.name }}</h3>
            <p v-if="item.original_title">{{ item.original_title }}</p>
            <p v-else>{{ item.original_name }}</p>
            <img v-if="languages[item.original_language]" :src="`/${languages[item.original_language]}`" class="lang-img" alt=""/>
            <div v-else>
                <span>Lingua originale: </span>
                <span class="lang-initials">{{ item.original_language }}</span>
            </div>
            <div v-for="star in setRating()">
                <font-awesome-icon :icon="['fas', 'star']" />
            </div>
            <div v-for="star in negativeRatign()">
                <font-awesome-icon :icon="['far', 'star']" />
            </div>
        </div>
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
        },
        negativeRatign() {
            let roundedRate = Math.round(this.item.vote_average / 2)
            return Math.floor(5 - roundedRate);
        }
    },
}
</script>

<style lang="scss" scoped>

.card {
    color: white;
    height: 300px;
    margin-bottom: 20px;
    background-size: cover;
}

.lang-img {
    width: 20px;
    padding-top: 10px;
}

.lang-initials {
    text-transform: uppercase;
}

.hide {
    display: none;
}

.card:hover .hide {
    display: flex;
    flex-direction: column;
    background-color:  rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    padding: 20px;
}
    
</style>