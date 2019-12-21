<template>
  <div>
    <ul>
      <item v-for="(item,index) in arr" :key="index">
        <span :class="{active:index===num}" @click="cut(index)">{{item}}</span>
      </item>
      
    </ul>
  </div>
</template>
<script>
import item from "./tabHeaderItem.vue";
export default {
  components: {
    item
  },
  data(){
    return{
      arr:['热卖爆款','强壮男神','肝爱健康','营养/保健'],
      num:0
    }
  },
  methods:{
    cut(i){
      this.num=i,
      this.$emit('cli',i)
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  overflow: hidden;
  li {
    span {
      position: relative;
      display: block;
      margin: 0 0.2rem;
      height: 3rem;
      line-height: 3rem;
      font-size: 1.4rem;
      color: #fff;
    }
    &:nth-of-type(1) {
        span{
            background-color: #ee2d34;
        }
      
    }
    &:nth-of-type(2) {
        span{
            background-color: #555b99;
        }
      
    }
    &:nth-of-type(3) {
        span{
            background-color: #3b8e97;
        }   
      
    }
    &:nth-of-type(4) {
        span{
            background-color: #e86b19;
        }
    }
  }
}
</style>