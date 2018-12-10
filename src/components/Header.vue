<template>
    <header class="header">
        <nav>
            <ul>
                <li><router-link to="/">Top</router-link></li>
                <li><router-link to="/page1">Page1</router-link></li>
                <li><router-link to="/page2">Page2</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header'
};
</script>

<style scoped lang="scss">
</style>