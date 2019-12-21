<template>
    <div class="table">
        <div>
            <table>
                <tbody>
                    <tritem v-for="(item,index) in arrData" :key="index" :dataobj="item" :show="showFun(index)"></tritem>
                    <tr v-show="noshow">
                        <td  colspan="2" :style="style">药品监管部门提示：如发现本网站有任何直接或变相销售处方药行为，请保留证据，拨打12331举报，举报查实给予奖励。</td>
                    </tr>
                </tbody>
            </table>
            <div class="more" @click="noshow=!noshow" v-show="!noshow">
                点击查看更多
            </div>
        </div>
    </div>
</template>
<script>
import tritem from './tr.vue';
export default {
    data(){
        return{
            arrData:[
                {
                    tit:'药品名称 :',
                    info:'（东泰）华蟾素胶囊'
                },
                {
                    tit:'通用名称 :',
                    info:'华蟾素胶囊'
                },
                {
                    tit:'规格 :',
                    info:'250mg*6粒*3板/盒'
                },
                {
                    tit:'批准文号：',
                    info:'国药准字Z20050846'
                },
                {
                    tit:'药品本位码：',
                    info:'86902364000620'
                },
                {
                    tit:'生产厂商：',
                    info:'陕西东泰制药有限公司 '
                },
                {
                    tit:'生产厂商地址：',
                    info:'陕西 '
                },
                {
                    tit:'品牌：',
                    info:'东泰 '
                },
                {
                    tit:'药品属性：',
                    info:'处方药 '
                },
                {
                    tit:'剂型：',
                    info:'胶囊剂 '
                },
                {
                    tit:'储藏：',
                    info:'密封。 '
                },
                {
                    tit:'商品单位：',
                    info:'盒 '
                },
                {
                    tit:'是否进口：',
                    info:'否 '
                },
                {
                    tit:'有效期：',
                    info:36
                },
                {
                    tit:'主要成份：',
                    info:'干蟾皮。'
                },
                {
                    tit:'功能主治：',
                    info:'解毒，消肿，止痛。临床主要用于中、晚期肿瘤的治疗，亦可用于慢性乙型'
                },
                {
                    tit:'用法用量：',
                    info:'口服，一次2粒，一日3～4次。'
                },
                {
                    tit:'不良反应：',
                    info:'尚不明确。'
                },
                {
                    tit:'注意事项：',
                    info:'过敏体质者或对本品过敏者慎用。'
                },
                {
                    tit:'禁忌：',
                    info:'尚不明确。'
                },
                {
                    tit:'药物相互作用：',
                    info:'如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。'
                },
                {
                    tit:'药物相互作用：',
                    info:'如与其他药物同时使用可能会发生药物相互作用，详情请咨询医师或药师。'
                },
            ],
            style:{
                padding: '.5rem .2rem',
                verticalAlign: 'top',
                borderBottom: '1px dotted #cccccc',
                color: '#999',
                fontSize: '1.2rem'
                },
            show:true,
            noshow:false
        }
    },
    components:{
        tritem
    },
    computed:{
        showFun(){
            return function(index){
                return index>7?this.noshow:this.show
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .table{
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 1.4rem;
        padding: 3%;
        .more{
            color: #999;
            text-align: center;
            padding-top: .8rem;
            letter-spacing: .1rem;
            font-size: 1.4rem;
        }
        table{
            width: 100%;
            tbody{
                display: table-row-group;
                vertical-align: middle;
                border-color: inherit;
            }
        }
    }
</style>