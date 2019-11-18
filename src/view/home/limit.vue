<template>
    <div class="limit">
        <p class="buy_title">
            <i></i>
            限时抢购
        </p>
        <count-down></count-down>
    </div>
</template>
<script>
import countDown from './limit/count_down.vue'
export default {
    props:{
      
    },
    components:{
        countDown
    }
}
</script>
<style lang="scss" scoped>
   .limit{
       width: 100%;
        box-sizing: border-box;
        padding: .8rem 3%;
        background: url(http://m.800pharm.com/images/wap/item_bg.png) no-repeat left top;
        background-size: contain;
        overflow: hidden;
        border-bottom: 1px solid #e9e9e9;
        .buy_title{
            float: left;
            color: #ff0024;
            font-size: 1.7rem;
            font-weight: 600;
            i{
                width: 20px;
                height: 20px;
                display: inline-block;
                background: url(http://m.800pharm.com/images/wap/i_time.png) no-repeat;
                background-size: contain;
                vertical-align: middle;
            }
        }
   }
</style>