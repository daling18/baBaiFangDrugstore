<template>
    <div class="classnav">
        <item v-for="(item,index) in arrdata" :key="index" :item="item"></item>
        
    </div>
</template>
<script>
import item from './classnavItem.vue';
export default {
    components:{
        item
    },
    data(){
        return{
            arrdata:[
                {
                    mag:'首页',
                    backImg:'http://m.800pharm.com/images/wap/icon_home.png',
                    url:'/home'
                },
                {
                    mag:'分类找药',
                    backImg:'http://m.800pharm.com/images/wap/icon_sort.png',
                    url:'/classfig'
                },
                {
                    mag:'购物车',
                    backImg:'http://m.800pharm.com/images/wap/icon_cart.png',
                    url:'/need'
                },
                {
                    mag:'个人中心',
                    backImg:'http://m.800pharm.com/images/wap/icon_member.png',
                    url:'/me/login'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .classnav{
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        // display: none;
        height: 60px;
        background-color: #fff;
        overflow: hidden;
        box-shadow: 0 2px 3px #dcdcdc;
        

    }
</style>