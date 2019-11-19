<template>
    <div>
        <navs></navs>
        <Roll></Roll>
        <p class="font">Copyright ©2010-2019 广州八百方信息技术有限公司版权所有</p>
    </div>
</template>
<script>
import Navs from './footer/navs.vue'
import Roll from './footer/roll.vue'
export default {
    components:{
        Navs,
        Roll
    }
}
</script>
<style lang="scss" scoped>
    p.font{
        font-size: 1.2rem;
        text-align: center;
    }
</style>