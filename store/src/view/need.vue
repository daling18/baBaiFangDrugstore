<template>
   <div class="need">
       
       <router-view></router-view>
   </div>
</template>
<script>
import  claheader from './claLogHeader.vue';

export default {
    
    components:{
        
    }
}   
</script>
<style lang="scss" scoped>
    .need{
     
        .recently{
            padding: 10px 0;
            background: #f2f2f2;
            text-align: center;
            font-size: 14px;
        }
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
            // -ms-box-sizing: border-box;
            // box-sizing: border-box;
            outline: none;
            font-family: 'Microsoft YaHei';
            vertical-align: middle;
            margin-top: 8px;
        }
    }
   
</style>