<template>
    <div class="categoryContainer">
        <div class="header" @click="toSearch">
            <i class="iconfont icon-search"></i>
            <input type="text" placeholder="搜索商品,共60000件好物">
        </div>


        <div class="main">
            <div class="left">
                <CategoryLeft></CategoryLeft>
            </div>
            <div class="right">
                <CategoryRight></CategoryRight>
            </div>
        </div>
    </div>
</template>

<script>
    import CategoryLeft from "./CategoryLeft/CategoryLeft";
    import CategoryRight from "./CategoryRight/CategoryRight";

    export default {
        name: "Category",
        components: {
            CategoryLeft,
            CategoryRight
        },
        methods: {
            toSearch() {
                this.$router.push("/search")
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .categoryContainer
        width 100%
        /*height 500px*/
        font-size 14px
        /*padding 0 10px*/
        box-sizing border-box

        .header
            width 100%
            height 44px
            line-height 44px

            padding 0 15px
            box-sizing border-box
            position relative

            input
                width 100%
                height 28px
                outline none
                padding-left 107px
                box-sizing border-box
                font-family: PingFangSC-Light helvetica Heiti SC
                color #666
                background-color #EDEDED
                border-radius 5px

            i
                position absolute
                top 2px
                left 103px
                font-size 16px


        .main
            width 100%
            display flex
            box-sizing border-box
            border-top 1px solid #D9D9D9

            .left
                width 20%

            .right
                width 80%


</style>