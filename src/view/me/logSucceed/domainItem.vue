<template>
    <li>
        <a href="">
            <slot name="num"></slot>
            <slot></slot>
        </a>
    </li>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    li{
        font-size: 1.3rem;
        padding: 10px 0;
        
        flex: 1;
        text-align: center;
        a{
            color: #666;
            span{
                display: block;
                color: #f80e60;
                font-weight: 400;
            }
        }
    }
</style>