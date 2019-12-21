<template>
    <ul class="navs">
        <item v-for="num in 11" :bool="num%4===0?true:false" :key="num">
            <span>{{dataArr[num-1]}}</span>
        </item>
    </ul>
</template>
<script>
import Item from './navItem.vue'
export default {
    data(){
        return{
            dataArr:['健康资讯','健康问答','产品库','品牌库','通用名库','搜索词库','症状库','疾病库','下架商品','关于八百方','招商入驻']
        }
    },
    components:{
        Item
    }
}
</script>
<style lang="scss" scoped>
    .navs{
        font-size: 62.5%;
        overflow: hidden;
        padding: 1rem 2rem;
        overflow: hidden;
    }
</style>