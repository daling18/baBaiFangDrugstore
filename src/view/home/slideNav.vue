<template>
    <div class="li">
        <Item v-for="num in 8" :key="num"></Item>
    </div>
</template>
<script>
import Item from './navItem.vue'
export default {
    data(){
        return{
            navContent:[['分类找药','领券中心','赚取积分']]
        }
    },
    components:{
        Item
    }
}
</script>
<style lang="scss" scoped>
    .li{
        
        background-color: #fff;

        overflow: hidden;
        width: 33.333%;
        padding: 1.2rem 1rem;
        border-radius: 5px 5px 0 0;
        box-sizing: border-box;
        
    }
</style>