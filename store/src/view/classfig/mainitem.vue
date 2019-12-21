<template>
    <li :class="{active:clicnum===index}" @click="clickhander(index)">
        <slot></slot>
    </li>
</template>
<script>
export default {
    props:{
        index:{
            type:Number,
            required:true
        },
        clicnum:{
            type:Number
        }
    },
    methods:{
        clickhander(index){
            this.$emit('cli',index)
        }
    }
}
</script>
<style lang="scss" scoped>
    li{
        text-align: center;
        font-size: 1.4rem;
        display: list-item;
        color: #333;
        height: 46px;
        line-height: 46px;
        border-bottom: 2px solid #f2f2f2;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }
    li.active{
        background-color: #f2f2f2;
        border-left: 2px solid #ea063c;
    }
</style>