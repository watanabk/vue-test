<template>
    <div class="works">
        <h1>Works!</h1>
        <div class="articles">
            <article v-for="(item, index) in items" :key=index>
                <h2 class="title">{{item.date}} {{item.title}}[{{index}}]</h2>
                <pre class="description">{{item.description}}</pre>
                <p class="location">{{item.location}}</p>
                <a class="more" href="#">more</a>
            </article>
        </div>
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
    .articles {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        article {
            margin: 10px;
            padding: 10px;
            width: 45%;
            position: relative;
            .title {
                /*border-radius: 5px;*/
                /*background-color: #9acd32;*/
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
            .more {
                position: absolute;
                right: 10px;
                bottom: 10px;
            }
        }
    }

    /* for smartphone */
    @media (min-width: 768px) {
        .articles {
            article {
                width: 100%;
            }
        }
    }
    /* for tablet */
    @media (min-width: 992px) {
        .articles {
            article {
                width: 33%;
            }
        }
    }
    /* for PC */
    @media (min-width: 1200px) {
        .articles {
            article {
                width: 25%;
            }
        }
    }
</style>