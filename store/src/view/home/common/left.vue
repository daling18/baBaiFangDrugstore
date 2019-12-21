<template>
    <div class="santu">
        <div class="ep_left">
            <slot name="left"></slot>
        </div>
        <div class="ep_right">
            <slot name="rightTop"></slot>
            <slot name="rightBottom"></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .santu{
        overflow: hidden;
        .ep_left{
            
            width: 40.9%;
            float: left;
        }
        .ep_right{
            width: 59.1%;
            float: left;
        }
        img{
            width: 100%;
        }
        
    }
</style>