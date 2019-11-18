<template>
  <div>
    <ul>
      <item>
        <span :class="{active:true}">热卖爆款</span>
      </item>
      <item>
        <span :class="{active:true}">热卖爆款</span>
      </item>
      <item>
        <span :class="{active:true}">热卖爆款</span>
      </item>
      <item>
        <span :class="{active:true}">热卖爆款</span>
      </item>
    </ul>
  </div>
</template>
<script>
import item from "./tabHeaderItem.vue";
export default {
  components: {
    item
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