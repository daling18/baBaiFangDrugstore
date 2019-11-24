import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/home.vue"
import Classfig from "../view/classfigs.vue"
import Need from "../view/need.vue"
import HasGoods from '../view/need/hasGoods.vue';
import WuGoods from '../view/need/wuGoods.vue';


import Me from "../view/me.vue"
import Search from '../view/search.vue';
import List from '../view/list.vue';
import Details from '../view/details.vue';

import Login from '../view/me/mianLogin.vue';
import Singin from '../view/me/singin.vue';
import logSucceed from '../view/me/logSucceed.vue';
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
                        component:Login,
                        meta:{
                            tite:'登录'
                        }
                    },
                    {
                        path:'singin',
                        component:Singin,
                        meta:{
                            tite:'注册'
                        }
                    },
                    {
                        path:'logSucceed',
                        name:'logSucceed',
                        component:logSucceed,
                        meta:{
                            tite:'我的八百方'
                        }
                    }
                ]
            },
            {
                path:'/need',
                component:Need,
                children:[
                    {
                        path:'hasGoods',
                        component:HasGoods
                    },
                    {
                        path:'wuGoods',
                        component:WuGoods
                    }
                ]
                
            },
            {
                path:'/search',
                component:Search
            },
            {
                path:'/list',
                component:List
            },
            {
                path:'/details',
                component:Details
            }

        ]
    }
)


// {
//     routes:[
//         // {
//         //     path:'/',
//         //     redirect:'/home'
//         // },
//         {
//             path:'/home',
//             component:Home
//         },
//         // {
//         //     path:'/classfig',
//         //     component:Classfig
//         // }
//     ]
// }