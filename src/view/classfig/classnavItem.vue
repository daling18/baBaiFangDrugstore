<template>
    <router-link class="a"  :to="item.url" :style="{backgroundImage:`url(${item.backImg})`}">{{item.mag}}</router-link>
</template>
<script>
export default {
    props:{
        item:{
            type:Object,
            required:true
        }
    }
}
</script>
<style lang="scss" scoped>
    .a{
            display: block;
            width: 25%;
            height: 100%;
            float: left;
            text-align: center;
            line-height: 90px;
            background-size: auto 40%;
            background-position: center 10px;
            background-repeat: no-repeat;
            color: #999;
        }
</style>