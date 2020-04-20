<template>
    <div id="app">
        <MainPage />
    </div>
</template>

<script>
import MainPage from './pages/main.vue';

export default {
    name: 'App',
    components: {
        MainPage,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin-left: 50px;
    margin-right: 50px;
}
</style>
