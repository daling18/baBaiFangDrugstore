<template>
    <div class="li">
        <Item v-for="(item,i) in navContent[index]" :key="i">{{item}}</Item>
    </div>
</template>
<script>
import Item from './navItem.vue'
export default {
    data(){
        return{
            navContent:[['分类找药','领券中心','赚取积分','购物车','心脑血管科','肝胆科','肿瘤科','男科'],
            ['抗癌新药','丙肝新药','母婴科','儿科','妇科','两性健康','消化科','神经科'],
            ['泌尿科','内分泌科','五官科','皮肤科','呼吸科','风湿骨科','精神科','滋补调养科']]
        }
    },
    props:{
        index:{
            type:Number,
            required:true
        }
    },
    computed:{
        // bacPostion(){
        //     if(this,index===0){
        //         return
        //     }
        // }
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