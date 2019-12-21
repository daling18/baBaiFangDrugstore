<template>
   <div class="classfig">
       <claheader>
           <input type="text" slot="input"  placeholder="搜索药品名/症状" @focus="inputFocus">
       </claheader>
        
       <classf></classf>
   </div>
</template>
<script>

import classf from './classfig/class.vue';
import  claheader from './claLogHeader.vue';
export default {
    data(){
        return {
           
        }
    },
    components:{
        
        classf,
        claheader
    },
    methods:{
        inputFocus(){
            this.$router.push({
                path:'/search'
            })
        }
    },
    mounted(){
        
    }
}   
</script>
<style lang="scss" scoped>
    .classfig{
        height: calc(100% - 50px);
        width: 100%;
        background-color: #F2F2F2;
        
    }
   
</style>