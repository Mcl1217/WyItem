<template>
    <div>
        <router-view></router-view>
        <NavFooter v-show="$route.meta.isShowNavFooter"></NavFooter>
    </div>
</template>

<script>
    import NavFooter from "./components/NavFooter/NavFooter";
    export default {
        name: "App",
        components:{
            NavFooter
        }
    }
</script>

<style scoped>

</style>