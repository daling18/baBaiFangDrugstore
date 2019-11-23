import Vue from 'vue'
import App from './app.vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {store} from './vuex/vuexconf';
Vue.use(MintUI)
// import 'mint-ui/lib/style.css'
new Vue({
    el:'#root',
    store,
    render(h){
        return h(App)
    }
})