<template>
    <div class="searchShow">
        <ul>
            <search-show-itwm v-for="(item,index) in searchData" :key="index" :dataObj="item"></search-show-itwm>
        </ul>
    </div>
</template>
<script>
import searchShowItwm from './searchShowItwm.vue';
export default {
    props:{
        searchData:{
            type:Array,
            required:true
        }
    },
    components:{
        searchShowItwm
    }
}
</script>
<style lang="scss" scoped>
    .searchShow{
        height: 30rem;
        overflow-y: auto;
        padding: .5rem;
        background: #fff;
    }
</style>