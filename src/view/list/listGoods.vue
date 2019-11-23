<template>
    <div class="listGoods">
        <goods-item v-for="(item,index) in listdData" :key="index" :itemData="item"></goods-item>
    </div>
</template>
<script>
import goodsItem from './goodsItem.vue';
export default {
    components:{
        goodsItem
    },
    computed:{
        listdData(){
            return this.$store.state.listData
        }
    }
}
</script>
<style lang="scss" scoped>

</style>