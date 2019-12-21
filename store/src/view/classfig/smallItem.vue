<template>
    <a href="">
        <slot>检测器械</slot>
    </a>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    a{
        display: block;
        float: left;
        width: 32%;
        height: 65px;
        -webkit-tap-highlight-color: transparent;
        background-color: #fff;
        text-align: center;
        padding-top: 20px;
        box-sizing: border-box;
        margin-left: 0.8%;
        margin-bottom: 5px;
        outline-style: none;
        font-size: 1.3rem;
        color: #444;
    }
</style>