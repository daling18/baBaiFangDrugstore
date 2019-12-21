<template>
    <div class="management">
        <ul>
            <item v-for="(item,index) in arr" :key="index" :itemObj="item"></item>
        </ul>
    </div>
</template>
<script>
import item from './managementItem.vue';
export default {
    components:{
        item
    },
    data(){
        return{
            arr:[
                {
                    text:'我的收藏',
                    img:'http://m.800pharm.com/images/wap/start_icon.png',
                    size:'15px'
                },
                {
                    text:'地址管理',
                    img:'http://m.800pharm.com/images/wap/map_green_icon.png',
                    size:'15px'
                },
                {
                    text:'账号管理',
                    img:'http://m.800pharm.com/images/wap/account_icon.png',
                    size:'17px 15px;'
                },
                {
                    text:'个人资料',
                    img:'http://m.800pharm.com/images/wap/personal_data_icon.png',
                    size:'18px 15px'
                },
                {
                    text:'关于我们',
                    img:'http://m.800pharm.com/images/wap/aboutme_icon.png',
                    size:'18px'
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    div.management{
        padding: 0 15px;
        background-color: #fff;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
    }
</style>