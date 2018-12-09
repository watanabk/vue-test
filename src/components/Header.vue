<template>
    <header class="header">
        <ul>
            <li><router-link to="/">Top</router-link></li>
            <li><router-link to="/page1">Page1</router-link></li>
            <li><router-link to="/page2">Page2</router-link></li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'Header'
};
</script>