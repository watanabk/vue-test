<template>
    <div>
        <h1>何かの情報をここに列挙します！
        </h1>
        <article v-for="(item, index) in items" :key=index>
            <h2 class="title">{{item.date}} {{item.title}}[{{index}}]</h2>
            <pre class="description">{{item.description}}</pre>
            <p class="location">{{item.location}}</p>
        </article>
    </div>
</template>

<script>
import articles from '../json/articles.json'
    export default {
        name: 'Works', 
        data () {
            return {
                items: articles
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