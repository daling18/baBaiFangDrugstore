<template>
    <a href="">
        <span></span>
        <p>
            <slot></slot>
        </p>
    </a>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    a{
            width: 25%;
    float: left;
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    color: #444;
    span{
        width: 55px;
        height: 55px;
        display: inline-block;
        background: url(http://m.800pharm.com/images/wap/icon_index.png) no-repeat -330px 0;
        background-size: 800%;
    }
    }
</style>