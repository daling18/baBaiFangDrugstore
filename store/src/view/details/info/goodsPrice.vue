<template>
  <div class="goodsPrice">
    <goods-name-item>
      <dt slot="dt">价格 :</dt>
    </goods-name-item>
    <goods-name-item>
      <dt slot="dt">编码 :</dt>
      <dd slot="dd">1574665</dd>
    </goods-name-item>
    <goods-name-item>
      <dt slot="dt">批号 :</dt>
      <dd slot="dd">国药准字Z20050846</dd>
    </goods-name-item>
    <goods-name-item>
      <dt slot="dt">保障 :</dt>
      <dd class="prices" slot="dd">
        <span class="bao">
          <i>正</i>正品
        </span>
        <span class="bao">
          <i>包</i>保障隐私
        </span>
      </dd>
    </goods-name-item>
    <goods-name-item>
      <dt slot="dt" class="dt">最低配送费 :</dt>
      <dd class="prices" slot="dd">
          <span class="emil"> 10元</span>
      </dd>
    </goods-name-item>
    <goods-name-item>
      <dt slot="dt" class="dt">最低配送费 :</dt>
      <dd class="prices" slot="dd">
          <span class="emil"> 10元</span>
      </dd>
    </goods-name-item>
  </div>
</template>
<script>
import goodsNameItem from "./goodsNameItem.vue";
export default {
  components: {
    goodsNameItem
  }
};
</script>
<style lang="scss" scoped>
.dt{
    width: 80px;
}
.prices {
    .emil{
        float: left;
        padding-right: 25px;
        background: url(http://m.800pharm.com/images/wap/goods_express_icon.png) no-repeat right center;
        background-size: 1.6rem;
        line-height: 1.6rem;
        font-size: 1.4rem;
    }
  span.bao {
    color: #666666;
    margin-right: 6px;

    i {
      display: inline-block;
      font-size: 1.2rem;
      margin-right: 2px;
      text-align: center;
      color: #4270ba;
      border: 1px solid #4270ba;
      width: 18px;
      height: 18px;
      border-radius: 50%;
    }
  }
}
</style>