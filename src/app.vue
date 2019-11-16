<template>
  <div id="app">
    
    <div v-show="side"><Header></Header> </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>

import Footer from "./view/footer.vue";
import Header from './view/header.vue'
import router from "./router/router";
export default {
  data() {
    return {
      msg: "77777",
      frg: true
    };
  },
  methods: {
    downClick() {
      this.frg = false;
    }
  },
  computed:{
      side(){
        //  
             console.log((this.$route.path==='/home'))
          if(this.$route.path==='/home'){
              return false
          }else{
              return true
          }
      }
  },
  router,
  components: {
      Header,
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