import ajax from "./ajax"
// 请求首页数据
export const getHomeDate = ()=>{
    return ajax({
        url:'/api/getIndex',
        method: "GET"
    })
}
// 请求分类页导航数据
export const getCateNav = ()=>{
    return ajax({
        url:'/api/getCateNavData',
        method: "GET"
    })
}
// 请求分类页右侧数据
export const getNavRight = ()=>{
    return ajax({
        url:'/api/getCateListData',
        method: "GET",
    })
}
// 值得买页面上边分类
export const getTopNav = ()=>{
    return ajax({
        url:'/myou/topic/v1/know/navWap.json',
        method: "GET"
    })
}
// 值得买页面下边瀑布流数据
export const getWaterFallData = ()=>{
    return ajax({
        url: '/myou/topic/v1/find/recAuto.json?page=1&size=8',
        method: "GET"
    })
}
// 值得买页面下边瀑布流数据触底请求
export const getWaterFallDataBottom = (page,size)=>{
    return ajax({
        url: '/myou/topic/v1/find/recAuto.json',
        method: "GET",
        params:{
            page,
            size
        }
    })
}

//搜索页初始化数据
export const getSearchData = ()=>{
    return ajax({
        url: '/myou/xhr/search/init.json',
        method: 'POST',
    })
}
//关键词搜索数据
export const getSearchKeyWords = (keywordPrefix)=>{
    return ajax({
        url: '/myou/xhr/search/searchAutoComplete.json',
        method: 'POST',
        data:{
            keywordPrefix
        }
    })
}