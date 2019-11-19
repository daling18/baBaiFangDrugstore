<template>
    <div class="tab">
        <tab-header @cli="cli"></tab-header>
        <tab-content :cli="index"></tab-content>
    </div>
</template>
<script>
import tabHeader from './tabCut/tabHeader.vue'
import tabContent from './tabCut/tabContent.vue'
export default {
    components:{
        tabHeader,
        tabContent
    },
    data(){
        return{
            index:0
        }
    },
    methods:{
        cli(i){
            this.index=i
        }
    }
}
</script>
<style lang="scss" scoped>
    .tab{
        margin-top: 1rem;
        background: #fff;
    }
</style>