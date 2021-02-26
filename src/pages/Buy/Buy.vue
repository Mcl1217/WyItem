<template>
    <div class="buyContainer">
        <div>
            <Header text="值得买"></Header>

            <div class="top">
                <div>
                    <span>值得买</span>
                    <span class="buy">严选好物,用心生活</span>
                </div>
                <div class="backImg"></div>
            </div>

            <div class="banner">
                <swiper :options="swiperOptions">
                    <swiper-slide>
                        <div class="bj">
                            <div class="swiperItem" v-for="e in navList1" :key="e.id">
                                <img class="swiperImage" v-lazy="e.picUrl" alt="">
                                <span>{{e.mainTitle}}</span>
                                <span class="small">{{viceTitle}}</span>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bj">
                            <div class="swiperItem" v-for="e in navList2" :key="e.id">
                                <img class="swiperImage" v-lazy="e.picUrl" alt="">
                                <span>{{e.mainTitle}}</span>
                                <span class="small">{{viceTitle}}</span>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>


            <div class="container-water-fall">
                <waterfall :col='col' :gutterWidth='gutterWidth' :data="waterFallData" :width="width">
                    <template>
                        <div class="waterFallItem" v-for="(e,i) in waterFallData" :key="i">
                            <img v-lazy="e.look.picUrl" alt="">
                            <p>{{e.look.content}}</p>
                            <div class="bottom">
                                <div>
                                    <img v-lazy="e.topics[0].avatar" alt="">
                                    <span>{{e.topics[0].nickname}}</span>
                                </div>
                                <div>
                                    <i class="iconfont icon-changyongicon-"></i>
                                    <span>{{e.look.readCount}}k</span>
                                </div>
                            </div>
                        </div>
                    </template>
                </waterfall>

            </div>


            <div class="zw"></div>
        </div>
    </div>
</template>

<script>
    import Header from "../../components/Header/Header";
    import BScroll from "better-scroll";

    export default {
        name: "Buy",
        data() {
            return {
                swiperOptions: {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                },

                // waterfall组件所需数据
                col: 2,
                gutterWidth: 10,
                width: 170,
                viceTitle: "",
                waterFallData: [],

                // 上边导航1页数据
                navList1: [],
                // 上边导航2页数据
                navList2: [],


                page: 2,
                size: 8
            }
        },
        components: {
            Header
        },
        mounted() {
            this.getNav()
            this.getWaterFall()
            this.$nextTick(() => {
                new BScroll('.buyContainer', {
                    scrollY: true,
                    probeType: 2,
                    click: true
                });
            })
            window.addEventListener("scroll", this.goScroll)//监视页面滚动事件
        },
        methods: {
            goScroll() {
                this.clientHeight = document.documentElement.clientHeight//浏览器视口高度
                this.scrollTop = document.documentElement.scrollTop//滚动条距离顶部部距离
                this.scrollHeight = document.documentElement.scrollHeight//内容总的高度
                if (this.scrollHeight - this.scrollTop == this.clientHeight) {
                    // console.log("到底了");
                    this.getWaterFallBottom()
                }

            },
            async getNav() {
                const result = await this.$API.getTopNav()
                this.navList1 = result.data.navList.slice(0, 8)
                this.navList2 = result.data.navList.slice(8, 16)
            },
            async getWaterFall() {
                const result = await this.$API.getWaterFallData()
                // console.log(result.data.result);
                this.waterFallData = result.data.result
            },
            async getWaterFallBottom() {
                this.page = this.page + 1
                const result = await this.$API.getWaterFallDataBottom(this.page, this.size)
                this.waterFallData = this.waterFallData.concat(result.data.result)
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .buyContainer
        width 100%
        font-size 14px
        background-color #EEEEEE

        .top
            position relative
            border 1px solid transparent

            div
                /*margin-top 30px*/

                span
                    position relative
                    z-index 99
                    font-size 26px
                    top 30px

                    &.buy
                        font-size 14px
                        font-weight 400
                        margin-left 5px

        .backImg
            width 100%
            height 259px
            position absolute
            top 0
            left 0
            //z-index -1
            background url("../../assets/images/bgj.jpg")

        .banner
            width 100%
            position relative
            padding 0 10px
            top 10px
            box-sizing border-box
            border-radius 10px
            top 38px

        .bj
            width 100%
            display flex
            flex-wrap wrap
            justify-content center
            background-color #fff
            box-sizing border-box

        .swiperItem
            display flex
            flex-direction column
            width 25%
            height 120px
            background-color white
            align-items center

            .swiperImage
                width 60px
                height 60px
                border-radius 50%
                margin-top 5px

            span
                font-weight bold
                margin-top 14px

                &.small
                    font-size 10px
                    color #7e8c8d
                    margin-top 8px

        .container-water-fall
            width 100%
            margin-top 40px
            padding 0 10px
            box-sizing border-box

            .waterFallItem
                margin-top 10px
                background-color white
                border-radius 10px

                > img
                    width 100%
                    border-radius 10px

                > p
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    width 172px
                    line-height 20px
                    margin-top 5px
                    padding 0 8px
                    /*background-color #f48f18*/
                    box-sizing border-box

                .bottom
                    margin-top 8px
                    display flex
                    /*background-color #FC625F*/
                    align-items center
                    justify-content space-between
                    padding-right 5px
                    box-sizing border-box

                    > div
                        display flex
                        align-items center
                        padding-left 5px
                        box-sizing border-box

                        > img
                            width 24px
                            height 24px
                            border-radius 50%

                        > span
                            margin-left 4px
                            white-space nowrap

                    > div:nth-child(2)
                        /*background-color sandybrown*/
                        position relative

                        i
                            position absolute
                            left -4px
                            top 0


        .zw
            width 100%
            height 50px
</style>