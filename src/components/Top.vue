<template>
    <div class="main-container">
        <img src="../assets/top_banner.jpg" />
        <p>トップページへようこそ！</p>
    </div>
</template>

<script>
    export default {
        name: 'Top'  , 
        title () {
            return 'top'
        }
    }
</script>

<style scoped lang="scss">
.main-container {
    img{
        max-width: 100%;
        height: auto;
    }
}
</style>