<template>
    <div class="searchContainer">
        <div class="header" >
           <div>
               <i class="iconfont icon-search"></i>
               <input type="search"
                      placeholder="请输入商品名称"
                      v-model="keyWord"
                      @keyup.enter="submit"
                      @focus="showBox"
                      @input="submit"
               >
               <i class="iconfont icon-cuowu" v-if="flag" @click="clear"></i>
           </div>
            <div>
                <router-link to="/">取消</router-link>
            </div>
        </div>

        <div class="zz"  v-if="flag">
            <div class="zzItem" v-for="(e,i) in searchData" :key="i">
                <span>{{e}}</span>
                <i class="iconfont icon-jiantou"></i>
            </div>
        </div>


        <div class="hotSearch"  v-if="!flag">
            <span v-if="initDate.length">热门搜索</span>
            <div v-if="initDate.length">
                <span :class="{active:currentIndex === i}"
                      v-for="(e,i) in initDate"
                      :key="i" @click="currentIndex = i"
                >{{e.keyword}}</span>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                keyWord: "",
                initDate:[],
                currentIndex:0,
                flag:false,
                searchData:[]
            }
        },
        methods: {
            clear(){
                this.flag = false
                this.searchData = []
                this.keyWord = ''
            },
            showBox(){
                this.flag = true
            },
            submit() {
                const {keyWord} = this
                if(keyWord){
                    this.getKeyWord(keyWord)
                }
            },
            async getInitData(){
                const result = await this.$API.getSearchData()
                // console.log(result);
                this.initDate = result.data.hotKeywordVOList
            },
            async getKeyWord(keyWord){
                const result = await this.$API.getSearchKeyWords(keyWord)
                // console.log(result);
                this.searchData = result.data
            }
        },
        mounted() {
           this.getInitData()
        }
    }
</script>

<style lang="stylus" scoped>
    .searchContainer
        width 100%
        height 100vh
        font-size 14px
        /*padding 0 10px*/
        box-sizing border-box
        background-color #EEEEEE
        .header
            display flex
            height 44px
            justify-content space-between
            align-items center
            background-color white
            & div:first-child
                position relative
                left 10px
                i
                    position absolute
                    top 8px
                    left 10px
                    &.icon-cuowu
                        left auto
                        right 0px
                input
                    width 280px
                    height 30px
                    border-radius 5px
                    box-sizing border-box
                    padding-left 30px
                    outline none
                    background-color #F4F4F4
            & div:nth-child(2)
                width 60px
                text-align center
                font-size 15px
                color black
        .zz
            width 100%
            /*height 300px*/
            background-color white
            .zzItem
                width 100%
                height 50px
                padding 0 10px
                box-sizing border-box

                font-size 14px
                font-family: PingFangSC-Light,helvetica,Heiti SC
                display flex
                justify-content space-between
                align-items center
                position relative
                &::after
                    content ""
                    position absolute
                    width 94%
                    height 1px
                    border-bottom 1px solid #D9D9D9
                    box-sizing border-box
                    left 0
                    bottom 8px
                    right 0
                    margin auto


        .hotSearch
            background-color white
            margin-top 20px
            padding-left 10px
            overflow hidden
            span
                color #999999
                display block
                margin-top 5px
            div
                display flex
                flex-wrap wrap
                justify-content flex-start

                span
                    margin 10px 0 14px 7px
                    border 1px solid #333
                    border-radius 5px
                    padding 5px 8px
                    color black

                    &.active
                        border 1px solid red
                        color red
</style>