<template>
    <div class="goodsshow">
        <tab-bar></tab-bar>
        <Table></Table>
    </div>
</template>
<script>
import tabBar from './goodsShow/tabbar.vue'
import Table from './goodsShow/table.vue';
export default {
    components:{
        tabBar,
        Table
    }
}
</script>
<style lang="scss" scoped>
    .goodsshow{
        overflow: hidden;
        margin-bottom: 1rem;
        border-top: 1px solid #ccc;
        background: #fff;
        border-bottom: 1px solid #ddd;
    }
</style>