import {getHomeDate} from "../../api"
const state = {
    focusList: [],
    policyDescList: [],
    indexCateModule: [],
    kingKongList: [],
    categoryList: {},
    flashSaleItemList: [],
    newItemList: [],
    sceneLightShoppingGuideModule: [],
}
const mutations = {
    RECEIVE_HOMEDATA(state,data){
        const {
            focusList,
            policyDescList,
            indexCateModule,
            kingKongModule,
            categoryHotSellModule,
            flashSaleModule,
            newItemList,
            sceneLightShoppingGuideModule
        } = data
        state.focusList = focusList;
        state.policyDescList = policyDescList;
        state.indexCateModule = indexCateModule;
        state.kingKongList = kingKongModule.kingKongList;
        state.categoryList = categoryHotSellModule.categoryList.splice(2);
        state.flashSaleItemList = flashSaleModule.itemList;
        state.sceneLightShoppingGuideModule = sceneLightShoppingGuideModule.splice(0,2);
        state.newItemList = newItemList.splice(0, 6);
    }
}
const actions = {
    async getHome({commit}){
        const result = await getHomeDate()
        !!(result.code === 0) && commit("RECEIVE_HOMEDATA",result.data)
    }
}
const getters = {

}
export default {
    state,
    mutations,
    actions,
    getters
}



