import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
      count: 0,
      detailsData:{},
      listData:[]
    },
    mutations: {
      increment (state) {
        state.count++
      },
      detailsData(state,obj){
        state.detailsData=obj
      },
      listData(state,obj){
        state.listData=obj
      }
    }
  })