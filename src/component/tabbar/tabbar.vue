<template>
    <div class="tabbar">
        <tabbar-item :backPositon="{'backgroundPosition':'0 -35px'}" path="/home">
            <div>首页</div>
        </tabbar-item>
        <tabbar-item :backPositon="{'backgroundPosition':'0 -133px'}" path='/classfig'>
            <div>分类找药</div>
        </tabbar-item>
        <tabbar-item :backPositon="{'backgroundPosition':'0 -65px'}">
            <div>药师咨询</div>
        </tabbar-item>
        <tabbar-item :backPositon="{'backgroundPosition':'0 0px'}" path='/need'>
            <div>需求清单</div>
        </tabbar-item>
        <tabbar-item :backPositon="{'backgroundPosition':'0 -165px'}" path='/me'>
            <div>我的</div>
        </tabbar-item>
    </div>
</template>
<script>
import TabbarItem from './tabbarItem.vue'
export default {
    components:{
        TabbarItem
        
        }
}
</script>
<style lang="scss" scoped>
    .tabbar{
        width: 100%;
        height: 49px;
        display: flex
    }
</style>