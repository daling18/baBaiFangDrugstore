<template>
    <div class="focus">
        <span v-for="num in 3" :key="num" :class="{cut:(num-1)===index}"></span>
    </div>
</template>
<script>
export default {
    props:{
        index:{
            type:Number,
            required:true
        }
    }
}
</script>
<style lang="scss" scoped>
    .focus{
        position: absolute;
        left: 50%;
        bottom: 16px;
        z-index: 5;
        font-size: 0;
        margin-left: -36px;
        span{
            display: inline-block;
            width: 18px;
            height: 3px;
            margin-left: 7px;
            background-color: #ababab;
        }
        span.cut{
            background-color: #222;
        }
    }
</style>