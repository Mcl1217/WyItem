<template>
    <div>
        <router-view></router-view>
        <NavFooter v-show="$route.meta.isShowNavFooter"></NavFooter>
    </div>
</template>

<script>
    // git 相关的指令
    /*
    1.本地有分支，远端仓库没有对应的分支时，push时会失败，创建远端对应的分支，使用 git push --set-upstream origin <branch>即可。
    2.和上一次切换的分支进行分支转换 git checkout -
    3.查看日志相关的,git log/git log --oneline/git log --pretty=oneline/git reflog
    4.版本的回退,git reset --hard <哈希值>/git reset --hard HEAD^(只能后退,几个^后退几个版本)/git reset --hard HEAD~n(只能后退,n为数字)
    5.HEAD 为一个指针,指向当前分支
    6.git merge --about 回到冲突前的状态
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