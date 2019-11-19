<template>
    <li>
       <slot></slot>
    </li>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    li{
        width: 100%;
        height: 35px;
        p{
            font-size: 1.2rem;
            line-height: 17px;
            color: #666;
            height: 100%;
            display: inline-block;
            text-align: center;
        }

    }
</style>