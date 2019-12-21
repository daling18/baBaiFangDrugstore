<template>
    <div class="company">
        <company-show></company-show>
        <company-text></company-text>
        <shop-button></shop-button>
       
    </div>

</template>
<script>
import companyShow from './company/companyShow.vue';
import companyText from './company/shop_company_txt.vue';
import shopButton from './company/shopButton.vue';

export default {

    components:{
        companyShow,
        companyText,
        shopButton,

    }
}
</script>
<style lang="scss" scoped>
    .company{
        padding: 0 3%;
        border: 10px solid #f5f5f5;
        border-width: 10px 0;
    }
</style>