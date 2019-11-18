<template>
    <div class="tab">
        <tab-header></tab-header>
        <tab-content></tab-content>
    </div>
</template>
<script>
import tabHeader from './tabCut/tabHeader.vue'
import tabContent from './tabCut/tabContent.vue'
export default {
    components:{
        tabHeader,
        tabContent
    }
}
</script>
<style lang="scss" scoped>
    .tab{
        margin-top: 1rem;
        background: #fff;
    }
</style>