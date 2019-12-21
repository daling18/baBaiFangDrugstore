<template>
  <div class="list">
    <list-header>
      <input
        type="text"
        slot="input"
        placeholder="搜索药品名/症状"
        @focus="$router.push({path:'/search'})"
      />
    </list-header>
    <listnav></listnav>
    <div class="srcollBox" ref="srcollBox">
      <div class="content">
        <list-banner></list-banner>
        <list-goods></list-goods>
      </div>
    </div>
  </div>
</template>
<script>
import listHeader from "./claLogHeader.vue";
import listnav from "./list/listNav.vue";
import listBanner from "./list/listBanner.vue";
import listGoods from "./list/listGoods.vue";

import axios from "../network/network";
import bscroll from "../scroll/bscroll";
export default {
  components: {
    listHeader,
    listnav,
    listBanner,
    listGoods
  },
  data() {
    return {
      pageNum: 1,
      bscroll: null,
      lastData:[1]
    };
  },
  methods: {
    download() {
      const windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      this.$store.state.downfrag
        ? (this.$refs.srcollBox.style.height =
            windowHeight - 50 - 52 - 55 + "px")
        : (this.$refs.srcollBox.style.height = windowHeight - 50 - 52 + "px");
      
     
    },
    requset() {
      if(!this.lastData.length){
        return
      }
      console.log(this.$route.query.key)
      axios({
        url: "/api/list",
        params: {
          value: this.$route.query.key,
          pageNum: this.pageNum,
          pageDataNum: 10
        }
      }).then(res => {
        console.log(res)
        this.$store.commit("listData", res);
        this.pageNum++;
        this.lastData=res
        this.$nextTick(() => {
          if (!this.bscroll) {
            this.bscroll = bscroll(this.$refs.srcollBox, {
              click: true,
              scrollY: true,
              pullUpLoad: {
                threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
              }
            });
            this.bscroll.on("pullingUp", () => {
              this.requset()
              this.bscroll.finishPullUp()
            });
          } else {
            this.bscroll.refresh();
          }
        });
      });
    }
  },
  mounted(){
    this.$store.commit("listDataEmpty");
    this.download()
    this.requset()
    
  }
};
</script>
<style lang="scss" scoped>
.srcollBox {
  overflow: hidden;

  .content {
    border-top: 10px solid #f5f5f5;
  }
}
</style>