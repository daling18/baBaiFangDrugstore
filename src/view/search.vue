<template>
  <div class="search">
    <div class="header">
      <search-header>
        <a href slot="left" @click.prevent="back"></a>
        <form slot="center" >
          <input
            type="text"
            placeholder="搜索药品名/症状"
            ref="input"
            v-model="value"
            @keydown.stop.13.prevent="search"
          />
          <input type="button" />
        </form>
      </search-header>
    </div>
    <div v-show="!frag">
      <hot-search></hot-search>
      <History></History>
    </div>
    <search-show v-show="frag" :searchData="searchData"></search-show>
  </div>
</template>
<script>
import searchHeader from "./header.vue";
import hotSearch from "./search/hotSearch.vue";
import History from "./search/history.vue";
import searchShow from './search/searchShow.vue';

import axios from "../network/network.js";
export default {
  components: {
    searchHeader,
    hotSearch,
    History,
    searchShow
  },
  data() {
    return {
      value: "",
      frag:false,
      searchData:[]
    };
  },
  watch: {
    value() {
      if(!this.value){
        this.searchData=[]
        return
      }
      axios({
        url: "/api/search",
        params: {
          value: this.value
        }
      }).then(res => {
        console.log(res);
        this.searchData=res
      });
    },
    searchData(){
      if(this.searchData.length){
        this.frag=true
      }else{
        this.frag=false
      }
    }
  },
  methods: {
    back() {
      
      this.$router.back();

    },
    search() {
      if(!this.value){
        alert('请输入搜索关键字')
        return
      }
      // this.$store.commit('listData',this.searchData)
      this.$router.push({
        path: "/list",
        query:{
          key:this.value
        }
      });
    }
  },
  mounted() {
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