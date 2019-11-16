import Vue from 'vue'
import App from './app.vue'

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
new Vue({
    el:'#root',
    
    render(h){
        return h(App)
    }
})