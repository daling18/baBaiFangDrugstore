<template>
    <div class="roll">
        <ul ref="ul">
            <Item v-for="(item,index) in arr" :key="index">
                <p v-html="item"></p>
            </Item>
        </ul>
    </div>
</template>
<script>
import Item from './rollItem.vue'
export default {
    data(){
        return{
            arr:[
                '营业执照：914401056986508560',
                '互联网药品交易服务资格证书：国A20140001',
                '互联网药品信息服务资格证书：(粤)-经营性-2018-0243',
                '网络食品交易第三方平台备案凭证：GDWS10002',
                '医疗器械网络交易服务第三方平台备案凭证：<br>（粤）网械平台备字〔2018〕第00003号'
            ],
            ul:null,
            index:0
        }
    },
    components:{
        Item,
    },
    methods:{
        clone(){
            const last= this.ul.firstElementChild.cloneNode(true)
            this.ul.appendChild(last)
            this.move()
            console.log(this.ul)
        },
        hander(){
            this.index++
            this.ul.style.transition="all 0.3s"
            this.ul.style.top=-(this.index*this.ul.firstElementChild.clientHeight)+'px'
           
            if(this.index>=5){
                setTimeout(()=>{
                    this.index=0
                    this.ul.style.transition="none"
                    this.ul.style.top=0
                },300)
            }
        },
        move(){
            setInterval(()=>{
                this.hander()
            },2000)
        }
    },
    mounted(){
        this.ul=this.$refs.ul
        this.clone()
    }
}
</script>
<style lang="scss" scoped>
    .roll{
        height: 35px;
        position: relative;
        overflow: hidden;
        ul{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            text-align: center;
        }
    }
</style>