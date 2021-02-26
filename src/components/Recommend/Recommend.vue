<template>
    <div class="recommendContainer">
        <div class="top">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="e in focusList" :key="e.id">
                    <img class="swiperImage" v-lazy="e.picUrl" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>


        <div class="tpContainer">
            <div class="tpItem" v-for="e in policyDescList" :key="e.icon">
                <img v-lazy="e.icon" alt="">
                <span>{{e.desc}}</span>
            </div>
        </div>


        <div class="shopContainer">
            <div class="shopItem" v-for="(e,i) in kingKongList" :key="i">
                <img v-lazy="e.picUrl" alt="">
                <span>{{e.text}}</span>
            </div>
        </div>


        <div class="newBuy">
            <img src="http://yanxuan.nosdn.127.net/b2b424826a63b41dc28610c4dee2747e.gif?imageView&quality=75&type=jpg"
                 alt="">
        </div>


        <div class="hotShop">
            <div class="hotShopItem">
                <img src="https://yanxuan.nosdn.127.net/0b6c22498319430246951621af2702fa.png?quality=75&type=webp&imageView&thumbnail=375x0"
                     alt="">
                <img src="https://yanxuan.nosdn.127.net/80b019045308752c82991e534b8d5f83.png?quality=75&type=webp&imageView&thumbnail=375x0"
                     alt="">
            </div>
        </div>

        <div class="newGift">
            <div class="top">
                <span>新人专享礼</span>
            </div>
            <div class="bottom">
                <div class="left">
                    <span>新人专享礼包</span>
                    <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
                </div>
                <div class="right">
                    <div class="one">
                        <div>福利社</div>
                        <div>今日特价</div>
                        <img src="https://yanxuan-item.nosdn.127.net/54bc2e711823f1325fe77d0b82a62419.png?quality=75&type=webp&imageView&thumbnail=200x200"
                             alt="">
                        <div class="price">
                            <span>$764</span>
                            <span>$999</span>
                        </div>
                    </div>
                    <div class="two">
                        <div>新人拼团</div>
                        <div>1元包邮</div>
                        <img src="https://yanxuan-item.nosdn.127.net/9fc2db8aa4c64636ba7aaab108fe040d.png?quality=75&type=webp&imageView&thumbnail=200x200"
                             alt="">
                        <div class="price">
                            <span>$764</span>
                            <span>$999</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="hot">
            <div class="text">类目热销榜</div>
            <div class="top">
                <div class="topItem">
                    <div class="left">
                        <span>热销榜</span>
                        <i></i>
                    </div>
                    <img src="https://yanxuan-item.nosdn.127.net/db4a9cbd2bdfed303e2536db8b40fe33.png?quality=75&type=webp&imageView&thumbnail=200x200"
                         alt="">
                </div>
                <div class="topItem">
                    <div class="left">
                        <span>好评榜</span>
                        <i></i>
                    </div>
                    <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?quality=75&type=webp&imageView&thumbnail=200x200"
                         alt="">
                </div>
            </div>
            <div class="bottom">
                <div class="bottomItem" v-for="(e,i) in categoryList" :key="i">
                    <span>{{e.categoryName}}</span>
                    <img v-lazy="e.picUrl" alt="">
                </div>
            </div>
        </div>

        <div class="newFirst">
            <div class="top">
                <span>新品首发</span>
                <div class="more">
                    <span>更多</span>
                    <i class="iconfont icon-jiantou"></i>
                </div>
            </div>
            <div class="bottom">
                <div class="bottomItem" v-for="e in newItemList" :key="e.id">
                    <img v-lazy="e.primaryPicUrl" alt="">
                    <div class="hide">{{e.name}}</div>
                    <div class="jg">￥{{e.retailPrice}}</div>
                </div>
            </div>
        </div>


        <div class="special">
            <div class="specialItem" v-for="e in sceneLightShoppingGuideModule" :key="e.styleItem.targetUrl">
                <div class="top">
                    <div class="topItem">
                        <div>{{e.styleItem.title}}</div>
                        <div>{{e.styleItem.desc}}</div>
                    </div>
                </div>
                <div class="bottom">
                    <img v-lazy="e.styleItem.picUrlList[0]"
                         alt="">
                    <img v-lazy="e.styleItem.picUrlList[1]"
                         alt="">
                </div>
            </div>
        </div>

        <div class="app">
            <div class="appItem">
                <button>下载APP</button>
                <button>电脑版</button>
            </div>
            <div class="wy">
                <span>网易公司版权所有 © 1997-2021</span>
            </div>
        </div>

        <div class="goTop" v-if="goTopFlag" @click="toTop">
            <i class="iconfont icon-jiantoushang"></i>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "Recommend",
        data() {
            return {
                swiperOptions: {
                    // direction: 'horizontal', // 水平切换选项
                    loop: true, // 循环模式选项
                    autoplay: { // 自动轮播
                        delay: 4000,
                        disableOnInteraction: false, // 用户操作后是否停止自动轮播
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                        // clickable: true,
                    },
                },
                goTopFlag: false//显示回到顶部的容器的标志
            }
        },
        mounted() {
            this.$store.dispatch("getHome")
            window.addEventListener("scroll", this.showToTop)
        },
        methods: {
            toTop() {
                if (!this.timer) {
                    let timer = setInterval(() => {
                        document.documentElement.scrollTop -= 20
                        if (document.documentElement.scrollTop === 0) {
                            clearInterval(timer)
                        }
                    }, 3)
                }
                this.timer = null
                this.goTopFlag = false
            },
            showToTop() {
                this.scrollTop = document.documentElement.scrollTop
                this.clientHeight = document.documentElement.clientHeight
                if (this.scrollTop >= this.clientHeight) {
                    this.goTopFlag = true
                } else this.goTopFlag = false
            }
        },
        computed: {
            ...mapState({
                focusList: ({home}) => home.focusList,
                policyDescList: ({home}) => home.policyDescList,
                kingKongList: ({home}) => home.kingKongList,
                categoryList: ({home}) => home.categoryList,
                newItemList: ({home}) => home.newItemList,
                sceneLightShoppingGuideModule: ({home}) => home.sceneLightShoppingGuideModule,
            })
        },
    }
</script>

<style lang="stylus" scoped>
    .recommendContainer
        width 100%
        font-size 14px
        padding 0 10px
        box-sizing border-box

        .top
            width 100%

            .swiperImage
                width 100%
                height 140px

        .tpContainer
            width 100%
            height 36px
            line-height 36px
            display flex

            .tpItem
                width 33.33%
                display flex
                justify-content center
                align-items center

                img
                    width 16px
                    height 16px

                span
                    white-space nowrap

        .shopContainer
            width 100%
            height 175px
            display flex
            flex-wrap wrap
            align-items center

            .shopItem
                width 20%
                height 78px
                padding 0 3px
                box-sizing border-box
                display flex
                flex-direction column
                /*background-color aqua*/
                text-align center

                img
                    width 100%
                    height 80%
                    border-radius 10px

                span
                    margin-top 2px
                    font-size 12px


        .hot
            width 100%
            margin-top 15px

            .text
                font-size 16px
                margin 5px 0

            .top
                width 100%
                display flex

                .topItem
                    width 50%
                    height 100px
                    display flex
                    justify-content space-between
                    /*background-color darksalmon*/

                    img
                        width 50%
                        height 100%

                    .left
                        display flex
                        flex-direction column
                        margin auto

                        i
                            width 24px
                            height: 2px
                            background-color black
                            position relative
                            top 5px

            .bottom
                width 100%
                height 210px
                display flex
                flex-wrap wrap
                /*background-color blueviolet*/
                justify-content space-around
                font-size 12px
                margin-top 5px

                .bottomItem
                    width 23%
                    display flex
                    flex-direction column
                    /*background-color blue*/
                    align-items center
                    /*border 0.01px solid red*/
                    box-sizing border-box
                    background-color #f5f5f5
                    margin-bottom 4px
                    justify-content center


                    img
                        width 60px
                        height 60px

                    span
                        margin 5px 0

        .newBuy
            width 100%
            height 160px
            margin-top 10px

            img
                width 100%
                height 100%

        .hotShop
            width 100%
            height 93px
            background-color #EEEEEE

            .hotShopItem
                width 100%
                height 100%
                padding 10px
                box-sizing border-box
                justify-content space-between
                display flex

                img
                    width 48%
                    height 100%

        .newGift
            width 100%

            .top
                width 80%
                height 45px
                margin 0 auto
                line-height 45px
                text-align center

                span
                    font-size 16px
                    color #333
                    position relative

                    &::before
                        content ""
                        position absolute
                        left -26px
                        top 50%
                        width 12px
                        height 2px
                        background-color black

                    &::after
                        content ""
                        position absolute
                        right -26px
                        top 50%
                        width 12px
                        height 2px
                        background-color black

            .bottom
                width 100%
                height 217px
                display flex
                justify-content space-around

                .left
                    width 48%
                    height 100%
                    background-color #F9E9CF
                    display flex
                    flex-direction column
                    justify-content space-evenly
                    align-items center

                    img
                        width 129px
                        height 128px

                    span
                        font-size 16px
                        color #333

                .right
                    width 48%
                    height 100%
                    /*background-color tomato*/
                    display flex
                    flex-direction column
                    justify-content space-around

                    .one, .two
                        width 100%
                        height 48%
                        background-color #FBE2D3
                        padding 10px 0 0 10px
                        box-sizing border-box
                        position relative

                        img
                            width 100px
                            height 100px
                            position absolute
                            right 0
                            top 8px

                        .price
                            width 45px
                            height 45px
                            border-radius 50%
                            background-color #F6A447
                            display flex
                            flex-direction column
                            justify-content center
                            align-items center
                            position absolute
                            right 0
                            top 0
                            color white

                            & span:nth-child(2)
                                text-decoration line-through

                    .two
                        background-color #FFECC2

        .newFirst
            width 100%

            .top
                width 100%
                height 50px
                display flex
                justify-content space-between
                align-items center

                & span:first-child
                    font-size 16px

                .more
                    span
                        font-size 14px

            .bottom
                width 100%
                display flex
                flex-wrap wrap
                justify-content space-between

                .bottomItem
                    width 33%
                    font-size 12px

                    .hide
                        overflow hidden
                        text-overflow ellipsis
                        display -webkit-box
                        -webkit-line-clamp 2
                        -webkit-box-orient vertical
                        line-height 18px

                    img
                        width 108px
                        height: 108px

                    .jg
                        font-size 16px
                        color red

        .special
            width 100%
            height 120px
            display flex
            justify-content space-around
            margin-top 16px

            .specialItem
                width 48%
                height 100%
                background-color #F5F5F5

                .top
                    height 50%

                    .topItem
                        padding 20px 0 0 8px
                        box-sizing border-box

                        & div:nth-child(1)
                            font-size 16px

                        & div:nth-child(2)
                            font-size 12px
                            margin-top 8px

                .bottom
                    img
                        width 75px
                        height 75px

        .app
            width 100%
            height 180px
            background-color #414141
            display flex
            flex-direction column
            margin-top 10px

            .appItem
                margin auto
                position relative
                top -22px

                button
                    background-color #414141
                    color #fff
                    outline none
                    font-size 14px
                    width 86px
                    height 31px
                    border-radius 5px
                    border 1px solid #fff
                    margin-right 10px

            .wy
                position relative
                top -78px
                left -3px
                text-align center
                color #999


        .goTop
            width 40px
            height 40px
            background-color rgba(235, 235, 235, .8)
            position fixed
            right 14px
            bottom 90px
            border-radius 50%
            display flex
            justify-content center
            align-items center
            /*transition: all .6s ease-in*/

            i
                font-size 30px
</style>