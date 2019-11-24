<template>
    <a class="a" @click.prevent="clickD(item.url)" :style="{backgroundImage:`url(${item.backImg})`}">{{item.mag}}</a>
</template>
<script>
export default {
    props:{
        item:{
            type:Object,
            required:true
        }
    },
    methods:{
        clickD(url){
        this.$router.push({
            path:url
        })
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