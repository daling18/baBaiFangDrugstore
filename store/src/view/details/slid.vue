<template>
    <div class="slide">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="i in 4" :key="i">
                <img src="http://img.800pharm.com/images/20151027/20151027094615_562.png" alt="">
            </mt-swipe-item>
            
        </mt-swipe>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .slide{
        position: relative;
        overflow: hidden;
        padding: 10px 0;
        background: #fff;
        height: 350px;
        clear: both;
        margin-top: 27px;
        img{
            display: block;
            width: 100%;
        }
        // width: 100%;
    }
</style>