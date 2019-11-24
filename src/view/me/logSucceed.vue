<template>
    <div class="logSucceed">
        <Account></Account>
        <Domain></Domain>
        <Order></Order>
        <Banner></Banner>
        <Management></Management>
        <div class="winxin"><Winxin></Winxin></div>
    </div>
</template>
<script>
import Account from './logSucceed/account.vue';
import Domain from './logSucceed/domain.vue';
import Order from './logSucceed/all_order.vue';
import Banner from './logSucceed/banner.vue';
import Management from './logSucceed/management.vue';

import Winxin from '../../component/logwinxin/logweixin.vue';
export default {
    components:{
        Account,
        Domain,
        Order,
        Banner,
        Management,
        Winxin
    },
    created(){
        console.log(this.$route)
    }
    
}
</script>
<style lang="scss" scoped>
    .logSucceed{
        margin-bottom: 50px;
    }
    .winxin{
        background-color: #F5F5F5;
    }
</style>