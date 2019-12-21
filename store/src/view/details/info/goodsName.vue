<template>
    <div class="goodsname">
        <i>RX</i>
        <h1>{{dataobj.name}}</h1>
        <div>本品属于处方药，需凭处方购买</div>
    </div>

</template>
<script>
export default {
    computed:{
        dataobj(){
            return this.$store.state.detailsData
        }
    }
}
</script>
<style lang="scss" scoped>
    .goodsname{
        position: relative;
        padding-left: 42px;
        color: #333;
        margin-bottom: 10px;
        i{
            background-color: #004fac;
            display: block;
            font-size: 1.2rem;
            width: 34px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            position: absolute;
            left: 0;
            top: 3px;
            color: #fff;
            border-radius: 60%;
        }
        h1{
            font-weight: normal;
            font-size: 1.4rem;
            max-height: 3.6rem;
            line-height: 1.8rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            margin-bottom: 7px;
        }
        div{
            font-size: 1.2rem;
            color: #999;
        }
    }
</style>