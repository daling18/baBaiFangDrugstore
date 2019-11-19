import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/home.vue"
import Classfig from "../view/classfig.vue"
import Need from "../view/need.vue"
import Me from "../view/me.vue"
Vue.use(Router)
export default new Router(
    {
        mode:"history",
        routes:[
            {
                path:'/',
                redirect:'/home'
            },
            {
                path:'/home',
                component:Home,
                
            },
            {
                path:'/classfig',
                component:Classfig
            },
            {
                path:'/me',
                component:Me
            },
            {
                path:'/need',
                component:Need
            }
        ]
    }
)


{
    routes:[
        // {
        //     path:'/',
        //     redirect:'/home'
        // },
        {
            path:'/home',
            component:Home
        },
        // {
        //     path:'/classfig',
        //     component:Classfig
        // }
    ]
}