<template>
    <div class="homeContainer">
        <header>
            <img src="../../assets/images/logo.png" alt="网易严选">
            <div @click="toSearch">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜索商品,共60000件好物">
            </div>
            <button @click="toLogin" v-if="!token">登录</button>
        </header>

        <div class="nav">

            <ul>
                <li v-for="(e,i) in indexCateModule" :key="i" @click="changeNav(i)">
                    <span :class="{active:currentIndex === i}">{{e.name}}</span>
                </li>
            </ul>
            <div class="iconfont icon-arrowRight-copy" :class="{rotate}" @click="showBox">
            </div>
        </div>
        <div class="box" ref="box" :class="{show:rotate}">
            <div class="all">全部频道</div>
            <div class="sort">
                <div class="allItem" :class="{xz:currentIndex === i}" v-for="(e,i) in indexCateModule" :key="i"
                     @click="changeNav(i)">
                    <span>{{e.name}}</span>
                </div>
            </div>
        </div>
        <component :is="navName" ref="zh"></component>

    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapState} from "vuex";

    export default {
        name: "Home",
        data() {
            return {
                navName: "Recommend",//动态组件初始化展示的组件
                currentIndex: 0,//导航切换标志
                rotate: false,//箭头旋转标志
                token: "",//用户登录的标志,用来是否显示头部登录按钮
                componentList: ['Recommend', 'Life', 'Shoe', 'Liquor']//首页导航切换用到的所有的组件集合
            }
        },
        components: {
            // 异步注册组件
            Recommend: () => import('../../components/Recommend/Recommend'),
            Life: () => import('../../components/Life/Life'),
            Shoe: () => import('../../components/Shoe/Shoe'),
            Liquor: () => import('../../components/Liquor/Liquor')
        },
        methods: {
            changeNav(i) {
                this.currentIndex = i
            },
            showBox() {
                if (!this.rotate) {
                    this.$refs.box.style.height = 100 + "vh"

                } else {
                    this.$refs.box.style.height = 0 + "px"
                }
                this.rotate = !this.rotate
            },
            toLogin() {
                this.$router.push("/login")
            },
            toSearch() {
                this.$router.push("/search")
            }
        },
        mounted() {
            this.$nextTick(() => {
                new BScroll('.nav', {
                    scrollX: true,
                    probeType: 2,
                    click: true
                });
            })
            this.navName = "Recommend"
            this.token = localStorage.getItem('USER_TOKEN')
        },
        computed: {
            ...mapState({
                indexCateModule: ({home}) => home.indexCateModule,
            }),
        },
        watch: {
            // 索引改变,动态显示对应组件
            currentIndex: {
                handler(newValue, oldValue) {
                    this.navName = this.componentList[newValue]
                }
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .homeContainer
        width 100%
        padding 0 5px
        box-sizing border-box

        header
            display flex
            align-items center
            justify-content space-around
            width 100%
            height 44px
            line-height 44px

            img
                width 69px
                height 20px
                margin-left 10px

            div
                display flex
                justify-content center
                position relative

                i
                    position absolute
                    left 14px
                    top -6px
                    font-size 20px

                input
                    width 221px
                    height 28px
                    background-color #ededed
                    margin 0px 8px
                    outline none
                    border-radius 5px
                    padding-left 28px
                    box-sizing border-box
                input:

                :-webkit-input-placeholder
                    color #aab2bd
                    font-size 14px

            button
                height 20px
                line-height 13px
                border 1px solid #dd1a21
                color #dd1a21
                background-color white
                border-radius 3px
                outline none
                font-size 12px
                font-family: PingFangSC-Light helvetica Heiti SC

        .nav
            width 100%
            height 30px
            line-height 30px
            text-align center
            position relative
            overflow hidden
            font-size 14px

            ul
                width 840px
                display flex
                overflow hidden

                li
                    position relative
                    height 30px
                    padding 0 16px
                    white-space nowrap
                    position relative

                    span
                        position relative

                        &.active
                            height 1px
                            border-bottom 2px solid red


            .icon-arrowRight-copy
                width 50px
                height 30px
                background-color white
                font-size 18px
                font-weight bold
                position absolute
                right 0
                top 0
                z-index 99
                transition: all .3s ease-in

                &.rotate
                    transform rotate(180deg)

        .box
            width 100%
            background-color #fff
            position absolute
            left 0px
            top 46px
            display none
            z-index 88

            .all
                width 100%
                height 30px
                font-size 14px
                position absolute
                padding 5px 0 0 8px
                box-sizing border-box
                background-color white

            .sort
                margin-top 30px
                width 100%
                display flex
                flex-wrap wrap
                padding-left 10px
                box-sizing border-box
                background-color white

                .allItem
                    width 23%
                    height 28px
                    line-height 28px
                    text-align center
                    border 1px solid #CCCCCC
                    box-sizing border-box
                    background-color #FAFAFA
                    margin 0px 5px 15px 0px
                    border-radius 5px
                    font-size 12px

                    &.xz
                        border 1px solid red

        .show
            display block
            transition: all .6s ease-in
            background-color rgba(127, 127, 127, .7)
</style>