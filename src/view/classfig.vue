<template>
   <div class="classfig">
       <claheader>
           <input type="text" slot="input"  placeholder="搜索药品名/症状">
       
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
        
    }
}   
</script>
<style lang="scss" scoped>
    .classfig{
        height: calc(100% - 50px);
        width: 100%;
        background-color: #F2F2F2;
        input[type="text"]{
            border: none;
            background-color: #fff;
            color: #666;
            // width: 100%;
            width: 258px;
            height: 34px;
            padding: 0 12px;
            line-height: 24px;
            font-size: 1.4rem;
            border-radius: 2px;
            -ms-box-sizing: border-box;
            // box-sizing: border-box;
            outline: none;
            font-family: 'Microsoft YaHei';
            vertical-align: middle;
            margin-top: 8px;
        }
    }
   
</style>