<template>
    <div>
        <router-view></router-view>
        <NavFooter v-show="$route.meta.isShowNavFooter"></NavFooter>
    </div>
</template>

<script>
    // git 相关的指令
    /*
    和上一次切换的分支进行分支转换 git checkout -
    查看日志相关的,git log/git log --oneline/git log --pretty=oneline/git reflog
    */
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