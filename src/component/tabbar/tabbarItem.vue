<template>
    <div class="tabbarItem" @click="tabClick">
        <div class="img" :style="backPositon">
            
        </div>
        <slot></slot>
    </div>
</template>
<script>

export default {
    props:[
        "backPositon",
        "path"
    ],
    methods:{
        tabClick(){
            // console.log(this.path)
            if(this.$route.path.indexOf(this.path)!==-1||!(this.path)){
                return
            }
            this.$router.push({path:this.path})
        }
    }
}
</script>
<style lang="scss" scoped>
    .tabbarItem{
        font-size: 1.2rem;
        color: #8E8E93;
        flex: 1;
        height: 100%;
        text-align: center;
        div{
            margin: 0 auto;
        }
        .img{
            width: 28px;
            height: 28px;
            background: url(../../assets/img/tabbar_icon.png) no-repeat;
            background-size: 100% auto;
        }
    }
</style>