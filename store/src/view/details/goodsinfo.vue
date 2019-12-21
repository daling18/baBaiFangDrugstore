<template>

    <div class="goodInfo">
        <goods-name></goods-name>
        <goods-price></goods-price>
        <p>本商品由广州善邻药业广东省广州市</p>
        
    </div>
    
 
    
</template>
<script>
import goodsName from './info/goodsName.vue';
import goodsPrice from './info/goodsPrice.vue';
export default {
    components:{
        goodsName,
        goodsPrice,
        
    }
}
</script>
<style lang="scss" scoped>
    .goodInfo{
        padding: 10px 3%;
        background: #fff;
        p{
            color: #999;
            font-size: 1.3rem;
        }
    }
</style>