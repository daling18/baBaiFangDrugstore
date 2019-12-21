<template>
    <li>
        <span class="img">
            <slot name="img"></slot>
        </span>
        <slot name="mag"></slot>
    </li>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    li{
        display: inline-block;
        width: 60px;
       
        margin-bottom: 10px;
        flex: 1;
        img{
            width: 100%;
            border: 0;
            vertical-align: middle;
        }
        .mag{
            display: block;
            font-size: 1.4rem;
            color: #999;
        }
        .img{
            display: inline-block;
            width: 60px;
            height: 60px;
            margin-bottom: 10px;
        }
    }
</style>