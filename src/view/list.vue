<template>
    <div class="list">
        <list-header><input type="text" slot="input"  placeholder="搜索药品名/症状" @focus="$router.push({path:'/search'})"></list-header>
        <listnav></listnav>
        <list-banner></list-banner>
        <list-goods></list-goods>
    </div>
</template>
<script>
import listHeader from './claLogHeader.vue';
import listnav from './list/listNav.vue';
import listBanner from './list/listBanner.vue';
import listGoods from './list/listGoods.vue';

import axios from '../network/network';
export default {
    components:{
        listHeader,
        listnav,
        listBanner,
        listGoods
    },
    activated(){
        
        axios({
        url: "/api/search",
        params: {
          value: this.$route.query.key
        }
      }).then(res => {
        console.log(res);
        this.$store.commit('listData',res)
      });
    }
}
</script>
<style lang="scss" scoped>

</style>