<template>
    <div class="loginContainer">
        <Header text="网易严选"></Header>

        <div class="tp">
            <img  src="../../assets/images/2.png" alt="">
        </div>

        <div class="login">
            <div class="left" @click="toRegister(true)">
                <i class="iconfont icon-shouji"></i>
                <span>手机号快捷登录</span>
            </div>
            <div class="right" @click="toRegister(false)">
                <i class="iconfont icon-youxiang"></i>
                <span>邮箱账号登录</span>
            </div>
        </div>


        <div class="tpt">
            <div class="tpItem">
                <i class="iconfont icon-weixin"></i>
                <span>微信</span>
            </div>
            <div class="tpItem bk">
                <i class="iconfont icon-QQ"></i>
                <span>QQ</span>
            </div>
            <div class="tpItem">
                <i class="iconfont icon-weibo"></i>
                <span>微博</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/Header/Header";
    export default {
        name: "Login",
        components:{
            Header
        },
        methods: {
            toRegister(flag) {
                const redirectAgain = this.$route.query.redirect || "/"
                console.log(redirectAgain);
                if(flag)  this.$router.replace("/logintype/1/?redirectagain=" + redirectAgain)
                else this.$router.replace("/logintype/0/?redirectagain=" + redirectAgain)

            }
        },
    }
</script>

<style lang="stylus" scoped>
.loginContainer
    width 100%
    font-size 14px
    position relative
    .tp
        width 100%
        height 45px
        /*background-color blue*/
        position absolute
        top 180px
        left 0
        img
            width 134px
            height 45px
            display block
            margin auto
            /*background-color sandybrown*/


    .login
        width 100%
        position absolute
        top 280px
        text-align center
        .left
            width 335px
            height 47px
            line-height 47px
            background-color red
            margin auto
            color white
            .iconfont
               font-size  20px
               vertical-align middle
             span
                 vertical-align middle
        .right
            width 335px
            height 47px
            line-height 47px
            border 1px solid red
            box-sizing border-box
            margin auto
            margin-top 10px
            .iconfont
                font-size  20px
                vertical-align middle
            span
                vertical-align middle
    .tpt
        width 100%
        position fixed
        bottom 80px
        display flex
        /*background-color red*/
        justify-content center
        .tpItem
            width 90px
            height 20px
            line-height 20px
            text-align center
            span
                margin-left 3px
        .tpItem.bk
            border-left 1px solid black
            border-right  1px solid black
</style>