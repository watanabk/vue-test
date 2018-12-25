<template>
    <div class="works">
        <h1>Works!</h1>
        <div class="articles">
            <article v-for="(item, index) in items" :key=index>
                <div class="header">
                    <p class="date">{{item.date}}</p>
                    <h2 class="title">{{item.title}}[{{index}}]</h2>
                </div>
                <div class="description" v-html="item.description"></div>
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
            background: #fff;
            border-radius: 0px;
            padding: 0;
            box-shadow: initial;
            margin-bottom: 30px;
            width: 100%;
            position: relative;
            .header {
                background-color: #9acd32;
                color: #FFFFFF;
                padding: 10px;
                .date {
                    text-align: left;
                    margin: 0;
                }
                .title {
                    text-align: left;
                    margin: 0;
                }
            }
            .description {
                text-align: left;
                padding-left: 20px;
                margin: 5px;
            }
        }
    }

    /* for smartphone */
    @media (min-width: 768px) {
        .articles {
            article {
                box-shadow: initial;
                margin-bottom: 30px;
                width: 100%;
                .header{
                    .date {
                        font-size: 0.5vh;
                    }
                }
            }
        }
    }
    /* for tablet */
    @media (min-width: 992px) {
        .articles {
            article {
                box-shadow: 0 2px 5px #ccc;
                margin: 10px;
                width: 45%;
                .header{
                    .date {
                        font-size: 0.7vh;
                    }
                }
            }
        }
    }
    /* for PC */
    @media (min-width: 1200px) {
        .articles {
            article {
                box-shadow: 0 2px 5px #ccc;
                margin: 10px;
                width: 25%;
                .header{
                    .date {
                        font-size: 1.0vh;
                    }
                }
            }
        }
    }
</style>