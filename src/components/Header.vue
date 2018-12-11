<template>
    <header class="header">
        <div class="header-inner">
            <router-link class="logo" to="/">aaaa</router-link>
            <ul class="links">
                <li v-for="(item, index) in items" :key=index>
                    <router-link v-bind:to=item.path>
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            items: [
                {title: 'page1', path: '/page1'}, 
                {title: 'page2', path: '/page2'}, 
                {title: 'page3', path: '/page3'}
            ]
        }
    }
};
</script>

<style scoped lang="scss">
    .header {
        padding-top: 16px;
        padding-bottom: 16px;
        -webkit-box-shadow: 0 0 3px 3px rgba(0,0,0,.08);
        box-shadow: 0 0 3px 3px rgba(0,0,0,.08);
        position: relative;
    }
    .header-inner {
        position: relative;
        text-align: left;
        .logo {
            margin-left: 10px;
            float: left;
        }
        .links {
            margin-left: 95px;
            margin-top: 0px;
            margin-bottom: 0px;
            display: block;
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