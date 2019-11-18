<template>
    <li>
        <span :class="{active:bool}">
            <slot>热卖爆款</slot>
        </span>
    </li>
</template>
<script>
export default {
    props:{
        bool:{
            type:Boolean,
            required:true
        }
    }
}
</script>
<style lang="scss" scoped>
    li{
        width: 25%;
        float: left;
        text-align: center;
        
        
    }
    span.active::after{
        position: absolute;
        left: 50%;
        bottom: -1px;
        z-index: 3;
        content: '';
        width: 12px;
        height: 6px;
        margin-left: -6px;
        background: url(http://m.800pharm.com/images/wap/item_avtive.png) no-repeat center center;
        background-size: contain;
    }
    span{   
        position: relative;
        display: block;
        margin: 0 .2rem;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.4rem;
        color: #fff;
        &:nth-of-type(1){
            background-color: #ee2d34;
        }
        &:nth-of-type(2){
            background-color: #555b99;
        }
        &:nth-of-type(3){
            background-color: #3b8e97;
        }
        &:nth-of-type(4){
            background-color: #e86b19;
        }
    }
</style>