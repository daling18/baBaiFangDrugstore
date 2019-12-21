<template>
    <span @click="tabClick" :class="{active:index===select}">
        <slot ></slot>
    </span>
</template>
<script>
export default {
    props:{
        index:{
            type:Number,
            required:true
        },
        select:{
            type:Number,
            required:true
        }
    },
    methods:{
        tabClick(){
            console.log(999999999)
            this.$emit('clickChan',this.index)
        }
    }
}
</script>
<style lang="scss" scoped>
    span{
        display: block;
        padding: 0 1%;
        height: 4.8rem;
        line-height: 4.8rem;
        flex: 1;
        
        font-size: 1.4rem;
        font-weight: 500;
        text-align: center;
        color: #222222;
        border-bottom: .2rem solid #fff;
    }
    span.active{
        color: #f30a2b;
        border-bottom: .2rem solid #ff0f1f;
    }
</style>