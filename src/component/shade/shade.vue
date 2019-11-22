<template>
    <div class="shade" :style="obj?obj:{}" @click="shade"></div>
</template>
<script>
export default {
    data(){
        return{
            obj:null
        }
    },
    methods:{
        setsObj(){
            // console.log(document.documentElement.clientWidth)
            this.obj={}
            this.obj.width=document.documentElement.clientWidth+'px'
            this.obj.height=document.documentElement.clientHeight+'px'
        },
        shade(){
            this.$emit('shde')
        }

    },
    mounted(){
        this.setsObj()
    }
}
</script>
<style lang="scss" scoped>
    .shade{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
    }
</style>