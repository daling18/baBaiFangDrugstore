<template>
    <div class="details">
        <Details-header>
           <input type="text" slot="input"  placeholder="搜索药品名/症状" @focus="inputFocus">
            <Hot-packet slot="detailsHot"></Hot-packet>
        </Details-header>
        <Slide></Slide>
        <goods-info></goods-info>
        <down></down>
        <promotion  @iclick="iclick"></promotion>
        <promotion>
            <span slot="title">更多</span>
            <div class="s_infos" id="select">
                250mg*6粒*3板/盒  ，
                <span>
                    请选择数量
                </span>
            </div>
        </promotion>
        <company></company>
         <goods-show></goods-show>
         <Top-slid :slide="shadeShow" @shde="iclick"></Top-slid>
        <detail-footer></detail-footer>

        <shade v-show="shadeShow" @shde="iclick"></shade>
    </div>
</template>
<script>
import DetailsHeader from './claLogHeader.vue';
import HotPacket from './details/hotPacket.vue';
import Slide from './details/slid.vue';
import goodsInfo from './details/goodsinfo.vue';
import Down from './details/down.vue';
import promotion from './details/promotion.vue';
import company from './details/company.vue';
import goodsShow from './details/goodsShow.vue';
import shade from '../component/shade/shade.vue';
import TopSlid from './details/TopSlid.vue';
import detailFooter from './details/detailFooter.vue';

export default {
    data(){
        return{
            shadeShow:false
        }
    },
    components:{
        DetailsHeader,
        HotPacket,
        Slide,
        goodsInfo,
        Down,
        promotion,
        company,
        goodsShow,
        shade,
        TopSlid,
        detailFooter
    },
    methods:{
        inputFocus(){
            this.$router.push('/search')
        },
        iclick(){
            // console.log(777777)
            this.shadeShow=!this.shadeShow
        },
        
    }

}
</script>
<style lang="scss" scoped>
    .details{
        width: 100%;
       
        padding-bottom: 50px;
       #select{
            font-size: 14px;
       }
    }
</style>