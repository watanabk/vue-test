<template>
    <div>
        <h1>何かの情報をここに列挙します！
        </h1>
        {{items[id].title}}
    </div>
</template>

<script>
import articles from '../json/articles.json'
    export default {
        name: 'page1', 
        data () {
            return {
                items: articles, 
                id: this.$route.query.id
            }
        }
    }
</script>

<style scoped lang="scss">
    article {
        margin: 5px;
        .title {
            border-radius: 5px;
            background-color: #9acd32;
            text-align: left;
            padding-left: 10px;
        }
        .location {
            text-align: left;
            padding-left: 20px;
            margin: 5px;
        }
        .description {
            text-align: left;
            padding-left: 20px;
            margin: 5px;
        }
    }
</style>