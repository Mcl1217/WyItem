<template>
    <div id="login-mode-wrap">
        <div class="logo-wrap">
            <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
        </div>
        <div class="user-box">
            <form>
                <!-- 手机号登录 -->
                <div class="phone-mode" v-if="type">
                    <input name="phone" v-model="phone"  type="tel"  placeholder="请输入手机号" />
                    <span style="color: red;"></span>
                    <input v-model="captcha" name="captcha"  type="text"  placeholder="请输入短信验证码" />
                    <div class="sms-code">获取验证码</div>
                    <div class="problem-pwd-wrap">
                        <span class="problem">遇到问题？</span>
                        <span class="pwd">使用密码验证登录</span>
                    </div>
                    <button class="login-btn" @click.prevent="toLogin">登录</button>
                    <div class="is-agree">
                        <input type="checkbox">
                        <span>我同意</span>
                        <span class="link">《服务条款》</span>
                        <span>和</span>
                        <span class="link">《网易隐私政策》</span>
                    </div>
                    <div class="foot" @click="changeType">
                        <span>其他登录方式<i class="iconfont icon-jiankuohaoyou"></i></span>
                    </div>
                </div>
                <!-- 邮箱账号登录 -->
                <div class="email-mode" v-else>
                    <input name="email" v-model="email"  type="email"  placeholder="邮箱账号" />
                    <input v-model="pwd" name="pwd"  type="password"  placeholder="密码" />
                    <div class="problem-pwd-wrap">
                        <span class="problem">注册账号</span>
                        <span class="pwd">忘记密码</span>
                    </div>
                    <button class="login-btn" @click.prevent="toLogin">登录</button>
                    <div class="foot" @click="changeType">
                        <span>其他登录方式<i class="iconfont icon-jiankuohaoyou"></i></span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginType",
        data(){
            return {
                email: '',
                pwd: '',
                captcha: '',
                phone: '',
                type:'1'
            }
        },
        methods: {
            changeType() {
                this.$router.push("/login")
            },
            toLogin(){
                const redirect = this.$route.query.redirectagain
                console.log(redirect);
                localStorage.setItem("USER_TOKEN","18004814063")
                this.$router.replace(redirect)
            }
        },
        mounted() {
            this.type = this.$route.params.flag * 1
        }
    }
</script>

<style lang="stylus" scoped>
    #login-mode-wrap
        width 100%
        .logo-wrap
            width 134px
            height 45px
            margin 28px auto
            >img
                width 100%
                height 100%
        //用户登录方式
        .user-box
            width 100%
            padding 0 20px
            box-sizing border-box
            //手机号登录方式
            .phone-mode
                position relative
                >input
                    width 100%
                    outline none
                    vertical-align text-bottom
                    font-size 14px
                    color #666
                    border-bottom 1px solid #eee
                    height 60px
                .sms-code
                    position absolute
                    right 0
                    top 74px
                    width 82px
                    height 27px
                    line-height 27px
                    text-align center
                    font-size 14px
                    color #333
                    border 1px solid #7f7f7f
                    padding 2px
                .problem-pwd-wrap
                    display flex
                    justify-content space-between
                    padding 21px 0
                    color #666
                    font-size 14px
                    .pwd
                        color #333
                .login-btn
                    width 100%
                    height 46px
                    line-height 46px
                    text-align center
                    color #fff
                    background-color #DD1A21
                    font-size 14px
                    border none
                    border-radius 5px
                .is-agree
                    width 100%
                    margin-top 15px
                    >input
                        width 14px
                        height 14px
                        border 1px solid #eee
                        outline none
                        vertical-align middle
                        margin-right 6px
                    >span
                        color #7f7f7f
                        font-size 12px
                        vertical-align middle
                    .link
                        color #007AFF
                .foot
                    width 100%
                    text-align center
                    margin-top 40px
                    font-size 14px
                    vertical-align middle
                    span
                        position relative
                        color #333
                        >i
                            position absolute
                            right -17px
                            top 50%
                            transform translateY(-50%)
                            color #999
                            font-size 14px
            //邮箱账号登录方式
            .email-mode
                margin-top 65px
                >input
                    width 100%
                    outline none
                    vertical-align text-bottom
                    font-size 14px
                    color #666
                    border-bottom 1px solid #eee
                    height 50px
                .problem-pwd-wrap
                    display flex
                    justify-content space-between
                    padding 21px 0
                    color #7f7f7f
                    font-size 14px

                .login-btn
                    width 100%
                    height 46px
                    line-height 46px
                    text-align center
                    color #fff
                    background-color #DD1A21
                    font-size 14px
                    border none
                    border-radius 5px
                .is-agree
                    width 100%
                    margin-top 15px
                    >input
                        width 14px
                        height 14px
                        border 1px solid #eee
                        outline none
                        vertical-align middle
                        margin-right 6px
                    >span
                        color #7f7f7f
                        font-size 12px
                        vertical-align middle
                    .link
                        color #007AFF
                .foot
                    width 100%
                    text-align center
                    margin-top 40px
                    font-size 14px
                    vertical-align middle
                    span
                        position relative
                        color #333
                        >i
                            position absolute
                            right -17px
                            top 50%
                            transform translateY(-50%)
                            color #999
                            font-size 14px

</style>