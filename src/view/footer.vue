<template>
   <div class="footer">

       <tabbar></tabbar>
   </div>
   
</template>
<script>
import Tabbar from '../component/tabbar/tabbar.vue'
export default {
    data(){
        return {
            
        }
    },
    components:{
        Tabbar
    }
}   
</script>
<style lang="scss" scoped>
    .footer{
        height: 49px;
        width: 100%;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }
   
</style>