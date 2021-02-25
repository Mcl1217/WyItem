<template>
   <div class="head">
       <div class="topNav">
           <i class="iconfont icon-rhome" @click="goHome"></i>
           <span>{{text}}</span>
           <div class="topRight">
               <i class="iconfont icon-search" @click="toSearch"></i>
               <i class="iconfont icon-gouwuche" @click="goCart"></i>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "Header",
        props:["text"],
        methods: {
            goHome() {
                this.$router.push("/")
            },
            goCart(){
                this.$router.push("/cart")
            },
            toSearch(){
                this.$router.push("/search")
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .head
         width 100%
         font-size 14px
        .topNav
            width 100%
            height 50px
            background-color white
            display flex
            justify-content space-between
            align-items center
            padding 0 10px
            box-sizing border-box

            span
                font-size 20px

            i
                font-size 28px

            .topRight
                display flex
                justify-content space-around

                .iconfont
                    font-size 22px

                    &.icon-search
                        position relative
                        left -10px

</style>