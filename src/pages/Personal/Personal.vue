<template>
    <div class="personalContainer">
        <div class="header">
            <img src="../../assets/images/1.jpg" alt="">
            <div class="info">
                <span>用户49411847</span>
                <span>普通用户</span>
            </div>
            <div class="code"></div>
            <div class="vip">
                <div class="circle">
                    <i></i>
                    <div class="text">
                        <div>Pro会员</div>
                        <div>立即试用</div>
                    </div>
                </div>
            </div>
        </div>


        <div class="myMoney">
            <div class="top"><span>我的资产</span></div>
            <div class="bottom">
                <div class="moneyItem">
                    <div>$0</div>
                    <div>余额</div>
                </div>
                <div class="moneyItem">
                    <div>0</div>
                    <div>红包</div>
                </div>
                <div class="moneyItem">
                    <div>0</div>
                    <div>优惠券</div>
                </div>
                <div class="moneyItem">
                    <div>0</div>
                    <div>津贴</div>
                </div>
                <div class="moneyItem">
                    <div>0</div>
                    <div>礼品卡</div>
                </div>
            </div>
        </div>


        <div class="icon">
            <div class="iconItem">
                <i class="iconfont icon-dingdan"></i>
                <span>我的订单</span>
            </div>
            <div class="iconItem">
                <i class="iconfont icon-zhanghao"></i>
                <span>账号管理</span>
            </div>
            <div class="iconItem">
                <i class="iconfont icon-shouji1"></i>
                <span>我的手机号</span>
            </div>
            <div class="iconItem">
                <i class="iconfont icon-rili"></i>
                <span>周六一起拼</span>
            </div>
            <div class="iconItem">
                <i class="iconfont icon-shouhou"></i>
                <span>售后服务</span>
            </div>
            <div class="iconItem">
                <i class="iconfont icon-icon"></i>
                <span>邀请返利</span>
            </div>
            <div class="iconItem">
                <i class="iconfont icon-gouwu"></i>
                <span>优先购</span>
            </div>
            <div class="iconItem">
                <i class="iconfont icon-jifen"></i>
                <span>积分中心</span>
            </div>
            <div class="iconItem">
                <i class="iconfont icon-weibiaoti--"></i>
                <span>会员俱乐部</span>
            </div>
            <div class="iconItem">
                <i class="iconfont icon-dizhi"></i>
                <span>地址管理</span>
            </div>
            <div class="iconItem">
                <i class="iconfont icon-zhifu"></i>
                <span>支付安全</span>
            </div>
            <div class="iconItem">
                <i class="iconfont icon-kefu"></i>
                <span>帮助与客服</span>
            </div>
            <div class="iconItem">
                <i class="iconfont icon-yijian"></i>
                <span>意见反馈</span>
            </div>
        </div>


        <div class="logout">
            <div @click="logout">退出登录</div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Personal",
        methods: {
            logout() {
                localStorage.removeItem("USER_TOKEN")
                this.$router.push("/login")
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .personalContainer
        width 100%
        background-color #F4F4F4
        .header
            width 100%
            height 135px
            background-color #F7D189
            position relative

            img
                width 72px
                height 72px
                position absolute
                left 20px
                top 50%
                margin-top -36px
                border-radius 50%

            .info
                display flex
                flex-direction column
                justify-content center
                height 72px
                position absolute
                left 110px
                top 50%
                margin-top -36px
                /*background-color blue*/
                color white

                span
                    font-size 18px

                & span:nth-child(2)
                    margin-top 5px
                    font-size 14px

            .code
                width 32px
                height: 32px
                background url("../../assets/images/item.png") no-repeat 0 -69px
                background-size cover
                position absolute
                right 0
                top 20%

            .vip
                width 70px
                height 50px
                background-color #413B34
                position absolute
                right 0
                top 50%
                .circle
                    width 50px
                    height 100%
                    border-radius 50%
                    background-color #44403C
                    margin-left -25px
                    display flex
                    justify-content center
                    align-items center
                    i
                        width 28px
                        height 28px
                        border-radius 50%
                        background url("../../assets/images/3.png")
                        background-size cover
                    .text
                        height 100%
                        position absolute
                        right 0
                        font-size 12px
                        color white
                        display flex
                        flex-direction column
                        justify-content space-evenly
        .myMoney
            width 100%
            background-color white
            .top
                height 53px
                line-height 53px
                font-size 14px
                margin-left 10px
                box-sizing border-box
                /*background-color blue*/
                border-bottom 1px solid #333
            .bottom
                width 100%
                display flex
                .moneyItem
                    width 20%
                    height 60px
                    font-size 14px
                    text-align center
                    /*background-color tomato*/

                    div
                        height 35px
                        line-height 35px

                        &:nth-of-type(2)
                            margin-top -14px


        .icon
            background-color white
            width 100%
            display flex
            flex-wrap wrap
            margin-top 10px
            .iconItem
                width 33.33%
                height 90px
                display flex
                flex-wrap wrap
                flex-direction column
                justify-content center
                align-items center
                border-bottom 1px solid #D9D9D9
                border-right 1px solid #D9D9D9
                box-sizing border-box
                &:last-of-type
                    border-bottom none
                i
                    width 25px
                    height 25px
                    font-size 22px
                span
                    margin-top 5px
        .logout
            width 100%
            height 100px
            background-color white
            margin-top 10px
            div
                width 80%
                height 48px
                line-height 48px
                text-align center
                margin auto
</style>