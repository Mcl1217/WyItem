<template>
    <div class="rightContainer">
        <div class="right">
            <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196"
                 alt="">
            <div class="item" v-if="cateRightObj">
                <div class="itemDetail">
                    <div class="itemDetailNr" v-for="e in cateRightObj.categoryList" :key="e.id">
                        <img class="itemImg" v-lazy="e.wapBannerUrl" alt="">
                        <span>{{e.name}}</span>
                    </div>
                </div>
            </div>

            <div class="item" v-if="cateRightObj.subCateList">
                <div class="itemDetail">
                    <div class="itemDetailNr" v-for="e in cateRightObj.subCateList" :key="e.id">
                        <img class="itemImg" v-lazy="e.wapBannerUrl" alt="">
                        <span>{{e.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from "better-scroll";

    export default {
        name: "CategoryRight",
        data() {
            return {
                cateRightList: [],//分类页右侧所有的数据
                cateRightObj: {},//页面要渲染的某一个数据
                id: 0//左侧导航切换携带的id
            }
        },
        mounted() {
            this.getNavRight()
            this.$nextTick(() => {
                new BScroll('.rightContainer', {
                    scrollY: true,
                    probeType: 2,
                    click: true
                });
            })
            // 接收左侧导航组件切换携带的id,用来从所有的数据中查找对应的数据
            this.$globalEventBus.$on("changeId", (id) => {
                // console.log(id);
                this.cateRightObj = this.cateRightList.find((e) => {
                    return e.id === id
                })
            })
        },
        methods: {
            async getNavRight() {
                const result = await this.$API.getNavRight()
                // console.log(result);
                this.cateRightList = result.data
                this.cateRightObj = result.data[0]
            },
        },
    }
</script>

<style lang="stylus" scoped>
    .rightContainer
        width 100%
        height calc(100vh - 100px)
        overflow hidden

        .right
            width 100%
            /*background-color sandybrown*/
            padding 0 5px
            box-sizing border-box

            img
                width 100%
                height: 96px
                margin-top 3px

            .item
                width 100%

                .itemDetail
                    display flex
                    width 100%
                    flex-wrap wrap
                    /*background-color blue*/

                    .itemDetailNr
                        width 33.33%
                        display flex
                        flex-direction column
                        align-items center
                        /*background-color aquamarine*/

                        .itemImg
                            width 72px
                            height 72px
                            margin 10px 0

                        span
                            font-size 12px
                            text-align center
</style>