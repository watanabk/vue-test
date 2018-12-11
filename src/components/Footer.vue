<template>
    <footer class="footer">
        <nav class="footer-inner">
            <div class="category">
                <p>aaaa</p>
                <ul class="links">
                    <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
                    <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
                    <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
                    <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
                    <li><p>testtestest</p></li>
                </ul>
            </div>
            <div class="category">
                <p>bbbb</p>
                <ul class="links">
                    <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
                    <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
                    <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
                    <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
                    <li><p>testtestest</p></li>
                </ul>
            </div>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
};
</script>

<style scoped lang="scss">
    .footer {
        height: 300px;
        padding: 40px 80px 110px 80px;
        background-color: lightgray;
        .category {
            width: 20%;
            float: left;
            .links {
                list-style: none;
                padding: 0px;
                li {
                    margin-top: 16px;
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