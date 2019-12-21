<template>
  <div class="wuGoods">
    <claheader>
          <input type="text" slot="input" v-model="value"  placeholder="搜索药品名/症状" @focus="inputFocus">
      </claheader>
    <Car></Car>
    <div class="recently">最近浏览</div>
    <recently-list></recently-list>
  </div>
</template>
<script>
import Car from './car.vue';
import recentlyList from './recently.vue';
import  claheader from '../claLogHeader.vue';
export default {
    components:{
        Car,
        recentlyList,
        claheader
        },
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
}
</script>
<style lang="scss" scoped>
</style>