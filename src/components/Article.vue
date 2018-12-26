<template>
    <div class="article">
        <p class="date">{{items[id].date}}</p>
        <h1 class="title">{{items[id].title}}</h1>
        <div class="content" v-html="items[id].description"></div>
    </div>
</template>

<script>
import articles from '../json/articles.json'
    export default {
        name: 'Article', 
        data () {
            return {
                items: articles,
                id: this.$route.params.id
            }
        }
    }
</script>

<style scoped lang="scss">
    .article {
        margin: 5px;
        .title {
            border-radius: 5px;
            background-color: #9acd32;
            text-align: left;
            padding-left: 10px;
        }
    }
</style>