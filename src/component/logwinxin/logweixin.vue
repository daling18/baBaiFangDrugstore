<template>
    <div class="certifications_box">
        <p>
            互联网交易服务资格证书：国A20140001
        </p>
        <Weixin></Weixin>
    </div>
</template>
<script>
import Weixin from './winxin.vue';
export default {
    components:{
        Weixin
    }
}
</script>
<style lang="scss" scoped>
    .certifications_box{
        width: 100%;
        font-size: 1.2rem;
        position: relative;
        bottom: 0;
        padding: 2rem 0;
        color: #999;
        text-align: center;
        line-height: 2rem;
    }
</style>