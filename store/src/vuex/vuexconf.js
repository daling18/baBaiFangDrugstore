import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
      footfrag: true,
      detailsData:{},
      listData:[],
      downfrag:false,
      name:'',
      car:[]
    },
    mutations: {
      detailsData(state,obj){
        state.detailsData=obj
      },
      listData(state,arr){
        state.listData.push(...arr)
      },
      listDataEmpty(state){
        state.listData=[]
      },
      footerShow(state,bool){
        state.footfrag=bool
      },
      downfrag(state,bool){
        state.downfrag=bool
      },
      name(state,name){
        state.name=name
      },
      car(state,arr){
        state.car=arr
      },
      deteCar(state,id){
        // const arr=[]

        state.car.some((item,index)=>{
          if(item.id===id){
            state.car.splice(index,1)
            return true
          }
        })
        // state.car=arr
      }

    }
  })