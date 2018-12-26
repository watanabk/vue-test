<template>
    <div class="works">
        <h1>Works!</h1>
        <div class="articles">
            <article class="article" v-for="(item, index) in items" :key=index>
                <div class="header">
                    <img class="image" v-bind:src="'../src/assets/' + item.image_src" />
                    <h2 class="title">{{item.title}}[{{index}}]</h2>
                </div>
                <p class="date">{{item.date}}</p>
                <router-link class="more" v-bind:to="{name: 'article', params: {id: index}}">more</router-link>
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
            .header{
                .title {
                    position: absolute;
                    width: 80%;
                    left: 50%;
                    top: 50%;
                    -ms-transform: translate(-50%,-50%);
                    -webkit-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
                    margin:0;
                    padding:0;
                    color: #FFFFFF;
                    font-size: 2vh;
                }
                .image {
                    width: 100%;
                    height: 200px;
                    filter: brightness(70%);
                    border-top-right-radius: 5px;
                    border-top-left-radius: 5px;
                    object-fit: cover;
                }
            }
            .description {
                text-align: left;
                padding-left: 20px;
                margin: 5px;
            }
            .more {
                position: absolute;
                right: 5px;
                bottom: 5px;
                padding: 3px;
                background-color: #9acd32;
                color: #FFFFFF;
                text-decoration: none;
            }
        }
    }

    /* for smartphone */
    @media (min-width: 768px) {
        .articles {
            article {
                box-shadow: initial;
                margin-bottom: 30px;
                width: 100%;/* 30% でもいいかも？ */
                margin: 5px;
                .date {
                    font-size: 0.5vh;
                    padding-bottom: 10px;
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
                .date {
                    font-size: 0.7vh;
                    padding-bottom: 20px;
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
                width: 18%;
                .date {
                    font-size: 1.0vh;
                    padding-bottom: 20px;
                }
                .more {
                    :hover {
                        opacity: 0.4;
                    }
                }
            }
        }
    }
</style>