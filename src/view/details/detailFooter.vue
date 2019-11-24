<template>
    <div class="detailFooter">
        <ul>
            <li class="kefu"><a href="">客服</a></li>
            <li class="need" @click="$router.push({path:'/need'})"><a href="javascript:;"><div></div>求单</a></li>
            <li class="add" @click="addNeedClick" :class="{added:frag}"><span>{{frag?mag[1]:mag[0]}}</span></li>
            <li class="post" @click="$router.push({path:'/need'})"><span>提交需求</span></li>
        </ul>
    </div>
</template>
<script>
// import mixin from '../../mixin/mixin';
import axios from '../../network/network';
import { MessageBox } from 'mint-ui';
export default {
    // mixins: [mixin],
    methods:{
       addNeedClick(){

        // MessageBox.confirm('').then(action => {
        if(this.frag){
            MessageBox.alert('已加入购物车')
            return
        }
        // });
        axios({
            method:'post',
            url:'/api/addcar',
            data:{
                id:this.$store.state.detailsData.id,
                sum:1
            }
        }).then((res)=>{
            if(res===9){
                MessageBox.alert('加入成功')
                this.frag=true
            }else{
                MessageBox.alert('加入失败')
                this.frag=false
            }
        })
        console.log(this.$store.state.detailsData)
       } 
    },
    data(){
        return{
            frag:false,
            mag:['加入需求清单','已加入']
        }
    },
    created(){
        console.log(this.$store.state.car)
        this.$store.state.car.some((item)=>{
            if(item.id===this.$route.query.id){
                this.frag=true
                return false
            }
        })
    }
}
</script>
<style lang="scss" scoped>
    div.detailFooter{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #fff;
        z-index: 10;
        border-top: 1px solid #ccc;
        ul{
            overflow: hidden;
            li{
                float: left;
                height: 50px;
                text-align: center;
                position: relative;
                box-sizing: border-box;
                li.added{
                    background-color: #444;
                }
                a{
                    padding-top: 30px;
                    line-height: 20px;
                    color: #444;
                    padding-top: 30px;
                    line-height: 20px;
                }
            }
            .add,.post{
                width: 30%;
                font-size: 1.4rem;
                color: #fff;
                background: #0587f6;
                span{
                    display: block;
                    line-height: 50px;
                    position: relative;
                }
            }
            .post{
                background: #e6186e;
                letter-spacing: .2rem;
            }
            .kefu{
                
                width: 20%;
                background: url(http://m.800pharm.com/images/wap/xiaoneng_icon.png) no-repeat center 5px;
                background-size: auto 50%;
                a{
                    display: block;
                }
                
            }
            .need{
                width: 20%;
                line-height: 20px;
                div{
                    margin: 0 auto;
                    position: relative;
                    background: url(http://m.800pharm.com/images/wap/goods_gwc_icon.png) no-repeat center 7px;
                    background-size: auto 80%;
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
</style>