<template>
  <li>
    <slot></slot>
  </li>
</template>
<script>
export default {
  
};
</script>
<style lang="scss" scoped>
li {
  width: 25%;
  float: left;
  text-align: center;
  span.active::after {
    position: absolute;
    left: 50%;
    bottom: -1px;
    z-index: 3;
    content: "";
    width: 12px;
    height: 6px;
    margin-left: -6px;
    background: url(http://m.800pharm.com/images/wap/item_avtive.png) no-repeat
      center center;
    background-size: contain;
  }
}
</style>