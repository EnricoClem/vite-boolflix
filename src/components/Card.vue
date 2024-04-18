<template>
    <li class="card">
        <h3 v-if="item.title">{{ item.title }}</h3>
        <h3 v-else>{{ item.name }}</h3>
        <p v-if="item.original_title">{{ item.original_title }}</p>
        <p v-else>{{ item.original_name }}</p>
        <img v-if="languages[item.original_language]" :src="`/${languages[item.original_language]}`" class="lang-img" alt=""/>
        <p v-else class="lang-initials">{{ item.original_language }}</p>
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

.lang-img {
    width: 20px;
    padding-top: 10px;
}

.lang-initials {
    text-transform: uppercase;
}
    
</style>