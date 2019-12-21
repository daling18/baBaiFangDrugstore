<template>
  <div class="down">
    <span @click="show"></span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
		show(){
			this.$emit('downShow')
		}
	}
};
</script>
<style lang="scss" scoped>
.down {
  height: 55px;
  width: 100%;
  // background-color: #00479c;
  background: url(../assets/img/homeDownTU.png) no-repeat top left;
  background-size: cover;
  position: relative;
  span {
    position: absolute;
    top: 16px;
    left: 10px;
    width: 22px;
    height: 22px;
    border: 1px solid #fff;
    border-radius: 50%;
    &::before,
    &::after {
      position: absolute;
      top: 6px;
      left: 10px;
      content: "";
      height: 10px;
      width: 2px;
      background: #fff;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
}
</style>