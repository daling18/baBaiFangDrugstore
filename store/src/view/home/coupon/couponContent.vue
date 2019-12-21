<template>
    <div class="content">
        <div class="box">
            <mt-swipe :auto="2000">
                <mt-swipe-item>
                    <div id="slidYuan">
                        <item></item>
                        <item></item>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div id="slidYuan">
                        <item></item>
                        <item></item>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
import item from './couponItem.vue'
export default {
   components:{
       item
   }
}
</script>
<style lang="scss" scoped>
   .content{
        height: 80px;
        padding:1.5rem .5rem 3rem;
        background-color:#fff;
        .box{
            height: 110px
        }
        #slidYuan{
            display: flex;
            margin-bottom: 20px
        }
    }
</style>