<template>
   <div class="need">
       <claheader>
           <input type="text" slot="input" v-model="value"  placeholder="搜索药品名/症状" @focus="inputFocus">
       </claheader>
       <Car></Car>
       <div class="recently">最近浏览</div>
       <recently-list></recently-list>
   </div>
</template>
<script>
import  claheader from './claLogHeader.vue';
import Car from './need/car.vue';
import recentlyList from './need/recently.vue';
export default {
    data(){
        return {
            value:''
        }
    },
    methods:{
        
        inputFocus(){
            console.log(this.$route)
            this.$router.push({
                path:'/search',
                meta:{
                    value:this.value
                }
            })
        }
    },
    components:{
        claheader,
        Car,
        recentlyList
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