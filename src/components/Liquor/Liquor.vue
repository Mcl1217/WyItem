<template>
    <div class="lifeContainer">

        <div id="waterFallContainer">
            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/朴信惠.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/金多美.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/全汝彬.jpg" alt="">
                </div>
            </div>


            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/文佳瑛.jpg" alt="">
                </div>
            </div>


            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/徐玄振.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/金裕贞.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/秦基周.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/李圣经.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/蔡秀彬.jpg" alt="">
                </div>
            </div>
            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/徐玄振.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/金裕贞.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/秦基周.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/李圣经.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/蔡秀彬.jpg" alt="">
                </div>
            </div>
            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/徐玄振.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/金裕贞.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/秦基周.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/李圣经.jpg" alt="">
                </div>
            </div>

            <div class="waterFallItem">
                <div class="waterFallItemBG">
                    <img src="../../assets/waterFall/蔡秀彬.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Liquor",
        data() {
            return {
                waterFallData: [],
            }
        },
        mounted() {
            setTimeout(()=>{
                waterFall('waterFallContainer', 'waterFallItem')

                function waterFall(parentNodeName, childNodeName) {
                    //获取waterFall容器标签
                    let parent = document.getElementById(parentNodeName) || document.getElementsByClassName(parentNodeName)
                    //获取waterFall容器标签里的每一项
                    let childrenList = getSelectChildren(parent, childNodeName)
                    //获取每一项的宽度
                    // console.log(childrenList);
                    let singleChildrenWidth =  childrenList[0].offsetWidth
                    // 计算列数
                    // let cols = Math.floor(document.documentElement.clientWidth / singleChildrenWidth)
                    let cols = 3
                    // console.log(cols);
                    //给waterFall容器标签添加宽度和居中
                    parent.style.cssText = 'width:' + singleChildrenWidth * cols + 'px;margin: 0 auto'
                    //存放每一列高度的数组
                    let heightArr = []
                    for(let i = 0 ; i < childrenList.length; i++){
                        if(i < cols){
                            // 取出第一行的标签的高度
                            heightArr.push(childrenList[i].offsetHeight)
                        }else{
                            // 获取最小的高度
                            let minHeight = Math.min.apply(null,heightArr)
                            //最小的高度对应的下标
                            let index = getMinHeightIndex(heightArr,minHeight)
                            childrenList[i].style.position = "absolute"
                            childrenList[i].style.top = minHeight + 'px'
                            childrenList[i].style.left = singleChildrenWidth * index + "px"
                            //更新最小高度的值
                            heightArr[index] += childrenList[i].offsetHeight
                        }
                    }
                }

                function getSelectChildren(parent, claName) {
                    let boxArr = []
                    let allChildrenElement = parent.getElementsByTagName('*')
                    for(let i = 0;i < allChildrenElement.length; i++){
                        if(allChildrenElement[i].className === claName){
                            boxArr.push(allChildrenElement[i])
                        }
                    }
                    return boxArr
                }
                function getMinHeightIndex(arr,val) {
                    for(let i = 0 ; i < arr.length ; i++){
                        if( arr[i] === val) return i
                    }
                }
            },60)
        },
        methods: {
            async getWaterFall() {
                const result = await this.$API.getWaterFallData()
                // console.log(result.data.result);
                this.waterFallData = result.data.result
            },
        },
    }
</script>

<style lang="stylus" scoped>
    .lifeContainer
        #waterFallContainer
            position relative
            .waterFallItem
                padding 15px 0 0 15px
                float left
                .waterFallItemBG
                    padding 10px
                    border 1px solid #ccc
                    border-radius 5px
                    box-shadow 0 0 5px
                    img
                        width 60px
                        height auto
</style>