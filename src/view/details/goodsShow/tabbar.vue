<template>
    <div class="tabber">
        <item v-for="(item,index) in arr" :key="index" :index="index" @clickChan="clickChan" :select="select">{{item}} </item>
    </div>
</template>
<script>
import item from './tabItem.vue';
export default {
    data(){
        return{
            arr:['药品说明书','图文详情','相关问答','相关资讯'],
            select:0
        }
    },
    components:{
        item
    },
    methods:{
        clickChan(index){
            this.select=index
        }
    }
}
</script>
<style lang="scss" scoped>
    .tabber{
        display: flex;
        width: 100%;
    }
</style>