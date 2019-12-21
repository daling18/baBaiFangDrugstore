<template>
    <div class="order">
        <Order-top></Order-top>
        <Order-botton></Order-botton>
    </div>
</template>
<script>
import OrderTop from './order/order_top.vue';
import OrderBotton from './order/order_bottom.vue';
export default {
    components:{
        OrderTop,
        OrderBotton
    }
}
</script>

<style lang="scss" scoped>
    div{
        padding: 0 15px;
        background-color: #fff;
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        margin-bottom: 10px;
    }
</style>