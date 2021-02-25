import ajax from "./ajax"
export const getHomeDate = ()=>{
    return ajax({
        url:'/api/getIndex',
        method: "GET"
    })
}
export const getCateNav = ()=>{
    return ajax({
        url:'/api/getCateNavData',
        method: "GET"
    })
}

export const getNavRight = ()=>{
    return ajax({
        url:'/api/getCateListData',
        method: "GET",
    })
}

export const getTopNav = ()=>{
    return ajax({
        url:'/myou/topic/v1/know/navWap.json',
        method: "GET"
    })
}

export const getWaterFallData = ()=>{
    return ajax({
        url: '/myou/topic/v1/find/recAuto.json?page=1&size=8',
        method: "GET"
    })
}

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


export const getSearchData = ()=>{
    return ajax({
        url: '/myou/xhr/search/init.json',
        method: 'POST',
    })
}

export const getSearchKeyWords = (keywordPrefix)=>{
    return ajax({
        url: '/myou/xhr/search/searchAutoComplete.json',
        method: 'POST',
        data:{
            keywordPrefix
        }
    })
}