<template>
    <div class="classf">
        <div class="main">
            <ul>
                <main-item v-for="(item,index) in classData" :key="index" :index="index" @cli="clic" :clicnum="clicnum">
                    {{item.main}}
                </main-item>
            </ul>
        </div>
        <div class="small">
            <weixin></weixin>
            <div>
                <small-item v-for="(item,index) in classData?classData[clicnum].small:0" :key="index">
                    {{item}}
                </small-item>
                
            </div>
        </div>
    </div>
</template>
<script>
import mainItem from './mainitem.vue';
import weixin from './weixin.vue';
import smallItem from './smallItem.vue';

import axios from '../../network/network';
export default {
    components:{
        mainItem,
        weixin,
        smallItem
    },
    methods:{
        clic(index){
            this.clicnum=index
        }
    },
    data(){
        return{
            classData:null,
            clicnum:0
        }
    },
    created(){
        axios({
            url:'/api/classfig'
        }).then((data)=>{
            // console.log(data)
            this.classData=data
            // console.log(this.clicnum)
            // console.log(this.classData[this.clicnum].small)
        }).catch((error)=>{
            throw error
            
        })
    }
}
</script>
<style lang="scss" scoped>
    .classf{
        display: flex;
        justify-content: space-between;
        .small{
            flex: 1;
            padding-left: 6px;
            div{
                overflow: hidden;
                margin-top: 8px;
            }
        }
        .main{
            background-color: #fff;
            width: 85px;
            height: 384px;
        }
    }
</style>