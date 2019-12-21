<template>
    <div class="third_party">
        <hint></hint>
        <third></third>
    </div>
</template>
<script>
import hint from './third_party/hint.vue';
import third from './third_party/third.vue';
export default {
    components:{
        hint,
        third
    }
}
</script>
<style lang="scss" scoped>
    .third_party{
        margin-top: 50px;
        padding: 0 15px;
    }
</style>