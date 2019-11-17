<template>
    <a href="javascript:;">
        <span style="background-position: 0px 0"></span>
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
        background-image: url(http://m.800pharm.com/images/wap/icon_index.png);
        background-repeat: no-repeat;
        background-size: 800%;
    }
    }
</style>