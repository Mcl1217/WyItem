<template>
    <div class="leftContainer">
        <div class="left">
            <div class="leftItem" v-for="(e,i) in navList" :key="e.id">
                <div class="text" :class="{ active:currentIndex === i}" @click="changeNav(i,e.id)">{{e.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "CategoryLeft",
        data() {
            return {
                navList: [],
                currentIndex: 0
            }
        },
        mounted() {
            this.getNavList()
            this.$nextTick(() => {
                new BScroll('.leftContainer', {
                    scrollY: true,
                    probeType: 2,
                    click: true
                });
            })
        },
        methods: {
            async getNavList() {
                const result = await this.$API.getCateNav()
                this.navList = result.data.categoryL1List
            },
            changeNav(i, id) {
                this.currentIndex = i
                this.$globalEventBus.$emit("changeId", id)
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .leftContainer
        width 100%
        height calc(100vh - 55px)
        overflow: hidden
        border-right 1px solid #D9D9D9
        box-sizing border-box

        .left
            width 100%
            height calc(100vh)
            box-sizing border-box

            .leftItem
                text-align center
                margin-top 30px
                box-sizing border-box

                .text
                    height 20px
                    line-height 20px
                    box-sizing border-box

                    &.active
                        border-left 2px solid red

</style>