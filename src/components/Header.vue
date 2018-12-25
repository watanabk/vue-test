<template>
    <header class="header">
        <div class="header-inner">
            <router-link class="logo" to="/">XXXXXX XXXXXXXX Officail Web Site</router-link>
            <ul class="links">
                <li class="link" v-for="(header, index) in headers" :key=index>
                    <router-link v-bind:to=header.path>
                        {{header.title}}
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import headers from '../json/headers.json'
export default {
    name: 'Header',
    data () {
        return {
            headers: headers
        }
    }
};
</script>

<style scoped lang="scss">
    .header {
        height: 32px;
        padding-top: 16px;
        padding-bottom: 16px;
        position: relative;
        .header-inner {
            .logo {
                margin-left: 10px;
                color: #006400;
                text-decoration: none;
                :visited {
                    color: #006400;
                }
            }
            .links {
                list-style: none;
                font-weight: bold;
                display: block;
                li {
                    float: left;
                    a{
                        color: #006400;
                        text-decoration: none;
                        :visited {
                            color: #006400;
                        }
                    }
                }
            }
        }
    }
    li:hover {
        opacity: 0.4;
    }
    /* for smartphone */
    @media (min-width: 768px) {
        .header {
            width: 100%;
            display: table;
            .header-inner {
                width: 100%;
                .logo {
                    font-size: 1.2vh;
                    clear: both;
                }                
                .links {
                    padding: 0;
                    font-size: 1.8vh;
                    .link{
                        width: 20%;
                    }
                }
            }
        }
    }
    /* for tablet */
    @media (min-width: 992px) {
        .header {
            .header-inner {
                .logo {
                    font-size: 1.5vh;
                    float: left;
                }
                .links {
                    position: absolute;
                    right: 0;
                    margin-left: 95px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    .link{
                        font-size: 1.5vh;
                        width: initial;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
    /* for PC */
    @media (min-width: 1200px) {
        .header {
            .header-inner {
                .logo {
                    font-size: 3vh;
                    float: left;
                }
                .links {
                    position: absolute;
                    right: 0;
                    margin-left: 95px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                    .link{
                        font-size: 3vh;
                        width: initial;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>