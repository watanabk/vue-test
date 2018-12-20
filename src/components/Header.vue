<template>
    <header class="header">
        <div class="header-inner">
            <router-link class="logo" to="/">XXXXXX XXXXXXXX Officail Web Site</router-link>
            <ul class="links">
                <li v-for="(header, index) in headers" :key=index>
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
        /*-webkit-box-shadow: 0 0 3px 3px rgba(0,0,0,.08);
        box-shadow: 0 0 3px 3px rgba(0,0,0,.08);*/
        position: relative;
        .header-inner {
            position: relative;
            text-align: right;
            .logo {
                margin-left: 10px;
                float: left;
                color: #006400;
                text-decoration: none;
                :visited {
                    color: #006400;
                }
            }
            .links {
                position: absolute;
                right: 0;
                margin-left: 95px;
                margin-top: 0px;
                margin-bottom: 0px;
                list-style: none;
                font-weight: bold;
                display: block;
                li {
                    float: left;
                    margin: 0 10px;
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
    }
    /* for tablet */
    @media (min-width: 992px) {
    }
    /* for PC */
    @media (min-width: 1200px) {
    }
</style>