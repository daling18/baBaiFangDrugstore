<template>
  <div class="search">
    <div class="header">
      <search-header>
        <a href slot="left" @click.prevent="back"></a>
        <form action slot="center">
          <input
            type="text"
            placeholder="搜索药品名/症状"
            ref="input"
            v-model="value"
            @keydown.enter="search"
          />
          <input type="button" />
        </form>
      </search-header>
    </div>
    <hot-search></hot-search>
    <History></History>
  </div>
</template>
<script>
import searchHeader from "./header.vue";
import hotSearch from "./search/hotSearch.vue";
import History from "./search/history.vue";

import axios from "../network/network.js";
export default {
  components: {
    searchHeader,
    hotSearch,
    History
  },
  data() {
    return {
      value: ""
    };
  },
  watch: {
    value() {
      axios({
        url: "/api/search",
        params: {
          value: this.value
        }
      }).then(res => {
        console.log(res);
      });
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
    search() {
      this.$router.push({
        path: "/list"
      });
    }
  },
  activated() {
    this.$refs.input.focus();
  }
};
</script>
<style lang="scss" scoped>
.search {
  background-color: #f5f3f1;
  height: calc(100% - 50px);
  width: 100%;
  .header {
    background-color: #00479c;
    a {
      position: absolute;
      z-index: 2;
      width: 25px;
      height: 25px;
      background: url(http://m.800pharm.com/images/wap/icon_w_close.png)
        no-repeat;
      background-size: 15px;
      background-position: center;
      top: 13px;
      left: 0;
      margin: 0 8px;
    }
    form {
      box-sizing: border-box;
      position: relative;
      z-index: 10;
      padding: 0;
      width: 361;
      margin-right: -41px;
      margin-top: 8px;
      > input[type="text"] {
        width: 100%;
        height: 34px;
        border: none;
        background-color: #fff;
        color: #666;
        padding: 0 12px;
        line-height: 24px;
        font-size: 1.4rem;
        border-radius: 2px;
        box-sizing: border-box;
        outline: none;
        margin-top: 0px;
      }
      input[type="button"] {
        background: url(http://m.800pharm.com/images/wap/header.png) no-repeat;
        background-size: 150px 25px;
        background-position: 4px 4px;
        height: 34px;
        width: 34px;
        position: absolute;
        right: 5px;
        top: 0;
        border: none;
        z-index: 2;
      }
    }
  }
}
</style>