<template>
    <header class="header">
        <nav>
            <ul>
                <li v-for="(item, index) in items" :key=index>
                    <router-link v-bind:to=item.path>
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header' ,
    data () {
        return {
            items: [
                {title: 'top', path: '/'}, 
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
        top: 0;
        right: 0;
        margin-right: auto;
        position: absolute;
    }
    li:hover {
        opacity: 0.4;
    }
</style>