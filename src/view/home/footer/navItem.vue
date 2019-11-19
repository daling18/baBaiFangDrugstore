<template>
    <li :class="{bian:bool}">
        <slot></slot>
    </li>
</template>
<script>
export default {
    props:{
        bool:{
            type:Boolean,
            default:false
        }
    }
}
</script>
<style lang="scss" scoped>
    li{
        text-align: center;
        width: 25%;
        float: left;
        border-right: 1px solid #b9b9b9;
        box-sizing: border-box;
        margin: 5px 0 11px;
        color: #222;
    }
    li.bian{
        margin-right: 0;
        border-right: 0;
    }
</style>