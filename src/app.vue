<template>
  <div id="app">
    <!-- <Header></Header> -->
    <down v-show="frg" @downShow="show"></down>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "./view/footer.vue";
import Down from "./view/down.vue";
import router from "./router/router";
export default {
  data() {
    return {
      msg: "77777",
      frg: false,

    };
  },
  methods: {
    downClick() {
      // this.frg = false;
    },
    show(){
      this.frg=false
    }
  },
  mounted(){
    // this.route=this.$route
  },
  computed: {
    side() {}
  },
  
  watch: {
    "$route":{
      handler(){
        if(this.$route.path==='/home'){
          this.frg=true
        }else{
          this.frg=false
        }
      },
      deep:true
    }
  },
  router,
  components: {
    Down,
    Footer
  }
};
</script>
<style lang="scss" scoped>
@import url("./assets/sass/pulic.scss");
#app {
  height: 100%;
  width: 100%;
  font-size: 16px;
}
</style>