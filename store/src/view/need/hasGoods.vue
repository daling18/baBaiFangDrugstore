<template>
    <div class="hasGoods">
        <has-goods-header><span slot="input" class="car">购物车</span></has-goods-header>
        <All></All>
        <good-list></good-list>
        <zong-price></zong-price>
    </div>
</template>
<script>
import hasGoodsHeader from '../claLogHeader.vue';
import All from './hasGoods/all.vue';
import goodList from './hasGoods/goodList.vue';
import zongPrice from './hasGoods/zongPrice.vue';
export default {
    components:{
        hasGoodsHeader,
        All,
        goodList,
        zongPrice
    }
}
</script>
<style lang="scss" scoped>
    
    span.car{
            font-size: 1.6rem;
            color: #fff;
            display: block;
            height: 50px;
            width: 80px;
            line-height: 50px;
        }
</style>