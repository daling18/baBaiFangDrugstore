<template>
  <div id="app">
    <!-- <Header></Header> -->
    <down v-show="frg" @downShow="show"></down>
   

      <router-view></router-view>
   
    <Footer v-if="footerfrg"></Footer>
  </div>
</template>
<script>
import Footer from "./view/footer.vue";
import Down from "./view/down.vue";


export default {
  data() {
    return {
      frg:true,
      msg: "77777",
    };
  },
  methods: {
    downClick() {
    },
    show(){
      this.frg=false
    }
  },
  computed: {
    footerfrg(){
      return this.$store.state.footfrag
    }
  },
  watch:{
    frg(){
      this.$store.commit('downfrag',this.frg)
    }
  },
  components: {
    Down,
    Footer
  }
};
</script>
<style lang="scss" scoped>
@import url("./assets/sass/pulic.scss");
html{
  background-color: beige;
}
#app {
  height: 100%;
  width: 100%;
  font-size: 16px;
}
</style>