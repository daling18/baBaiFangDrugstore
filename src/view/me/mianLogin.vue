<template>
    <div>
       
        <login></login>
        <third></third>
        <div><logweixin></logweixin></div>
    </div>
</template>
<script>

import login from './login.vue';
import third from './third_party.vue';
import logweixin from '../../component/logwinxin/logweixin.vue';
import createdMixin from '../../mixin/createdMixin';
export default {
    components:{
        login,
        third,
        logweixin
    },
    mixins:[createdMixin]
}
</script>
<style lang="scss" scoped>
    
</style>