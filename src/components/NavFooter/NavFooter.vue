<template>
    <div class="nav">
        <div class="navItem">
            <router-link to="/">
                <div class="iconItem">
                    <i class="iconfont icon-rhome"></i>
                    <span>首页</span>
                </div>
            </router-link>
        </div>
        <div class="navItem">
            <router-link to="/category">
                <div class="iconItem">
                    <i class="iconfont icon-fenlei"></i>
                    <span>分类</span>
                </div>
            </router-link>
        </div>
        <div class="navItem">
            <router-link to="/buy">
                <div class="iconItem">
                    <i class="iconfont icon-tupian"></i>
                    <span>值得买</span>
                </div>
            </router-link>
        </div>
        <div class="navItem">
            <router-link to="/cart">
                <div class="iconItem">
                    <i class="iconfont icon-gouwuche"></i>
                    <span>购物车</span>
                </div>
            </router-link>
        </div>
        <div class="navItem">
            <router-link to="/personal">
                <div class="iconItem">
                    <i class="iconfont icon-geren"></i>
                    <span>个人</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavFooter"
    }
</script>

<style lang="stylus" scoped>
    .nav
        position fixed
        bottom 0
        display flex
        width 100%
        height 50px
        line-height 50px
        text-align center
        background-color #fff
        .navItem
            width 20%
            height 50px
            border-top 1px solid #333
            .router-link-exact-active
                color #dd1a21
            .iconItem
                display flex
                flex-direction column
                width 100%
                height 50px
                .iconfont
                    height 50%
                    line-height 36px
                    font-size 22px
                span
                    height 50%
                    font-size 12px
                    line-height 20px
</style>