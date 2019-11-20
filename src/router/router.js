import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/home.vue"
import Classfig from "../view/classfigs.vue"
import Need from "../view/need.vue"
import Me from "../view/me.vue"
import Search from '../view/search.vue';
import List from '../view/list.vue';

import Login from '../view/me/mianLogin.vue';
import Singin from '../view/me/singin.vue';
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
                component:Me,
                // redirect:'/me/login',
                children:[
                    {
                        path:'login',
                        component:Login
                    },
                    {
                        path:'singin',
                        component:Singin
                    }
                ]
            },
            {
                path:'/need',
                component:Need,
                
            },
            {
                path:'/search',
                component:Search
            },
            {
                path:'/list',
                component:List
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