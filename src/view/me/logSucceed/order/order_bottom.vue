<template>
    <ul>
        <item v-for="(item,index) in arr" :key="index" :backimg="item"></item>
    </ul> 
</template>
<script>
import item from './order_bottom_item.vue';
export default {
    components:{
        item
    },
    data(){
        return{
            arr:[
                {
                    backgroundImage:'http://m.800pharm.com/images/wap/pending_payment_icon.png',
                    text:'待付款'
                },
                {
                    backgroundImage:'http://m.800pharm.com/images/wap/receiptofgoods_icon.png',
                    text:'待收货'
                },
                {
                    backgroundImage:'http://m.800pharm.com/images/wap/evaluated_icon.png',
                    text:'待评价'
                },
                {
                    backgroundImage:'http://m.800pharm.com/images/wap/myorder_icon.png',
                    text:'退款订单'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    ul{
        display: flex;
    }
</style>