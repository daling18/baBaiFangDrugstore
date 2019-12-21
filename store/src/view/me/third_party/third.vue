<template>
    <ul>
        <item>
            <img slot="img" src="http://m.800pharm.com/images/wap/qq.png" alt="">
            <span slot="mag" class="mag">QQ</span>
        </item>
        <item>
            <img slot="img" src="http://m.800pharm.com/images/wap/sina.png" alt="">
            <span slot="mag" class="mag">新浪微博</span>
        </item>
        <item>
            <img slot="img" src="http://m.800pharm.com/images/wap/zhifubao.png" alt="">
            <span slot="mag" class="mag">支付宝</span>
        </item>
    </ul>
</template>
<script>
import item from './thirdItem.vue';
export default {
    components:{
        item
    }
}
</script>
<style lang="scss" scoped>
    ul{
        display: flex;
        // justify-content: space-between;
        align-items: center;
        text-align: center;
    }
</style>