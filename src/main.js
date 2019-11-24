import Vue from 'vue'
import App from './app.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from "./router/router";
import { store } from './vuex/vuexconf';
import axios from './network/network';
Vue.use(MintUI)
// import 'mint-ui/lib/style.css'
const fun=(to, from, next)=>{
    if (to.path === '/me' || to.path === '/me/login' || to.path === '/me/singin' || to.path === '/me/logSucceed') {
        if (store.state.name && to.path === '/me/logSucceed') {
            next()
            return
        } else {
            
            if (store.state.name) {
                console.log(store.state.name)
                router.replace({
                    name: 'logSucceed',
                })
            } else {
                if(to.path === '/me/singin'||to.path === '/me/logSucceed'||to.path === '/me'){
                    // console.log(99999)
                    router.replace({
                        path: '/me/login'
                    })
                }
                next()

            }

        }
    }else{
        if(to.path==='/need'||to.path==='/need/wuGoods'||to.path==='/need/hasGoods'){
            if(store.state.name&&store.state.car.length){
                if(to.path!=='/need/hasGoods'){
                    router.replace({
                        path:'/need/hasGoods'
                    })
                }
            }else{
                if(to.path!=='/need/wuGoods'){
                    router.replace({
                        path:'/need/wuGoods'
                    })
                }
            }
        }
        next()
    }
}
router.beforeEach((to, from, next) => {
    if ((to.path.indexOf('/me') !== -1 && to.path !== '/me/logSucceed') || to.path.indexOf('/list') !== -1) {
        store.commit('footerShow', false)
    } else {
        store.commit('footerShow', true)
    }
    if (to.path !== '/home') {
        window.onscroll = null
    }
    
    
    axios({
        method: 'post',
        url: '/api/session'
    }).then((res) => {
        if (res === 7 || res === 8) {
            store.commit('name', '')
            fun(to, from, next)
        } else {
            store.commit('name', res)
            axios({
                method:'post',
                url:'/api/carGoodsCount'
            }).then((res)=>{
                store.commit('car',res)
                fun(to, from, next)
            })
            
        }
        
        
    })

       
 


})
new Vue({
    el: '#root',
    store,
    router,
    render(h) {
        return h(App)
    }
})