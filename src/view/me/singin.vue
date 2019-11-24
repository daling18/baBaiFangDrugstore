<template>
    <div class="singinInput">
        <singin-input @namepass="namepass"></singin-input>
        <div class="botton" @click="singin"><sing-button>注册</sing-button></div>

    </div>
</template>
<script>
import singinInput from '../../component/input/input.vue';
import singButton from './button.vue';

import { MessageBox } from 'mint-ui';
import axios from '../../network/network';
import createdMixin from '../../mixin/createdMixin';
export default {
    components:{
        singinInput,
        singButton
    },
    mixins:[createdMixin],
    data(){
        return{
            user:{}
        }
    },

    methods:{
        singin(){
            if(!this.user.name||!this.user.pass){
                MessageBox('提示', '请输入用户名或密码');
                return
            }
            axios({
                method:'post',
                url:'/api/singin',
                data:{
                    name:this.user.name,
                    pass:this.user.pass
                }
            }).then((res)=>{
                if(res===1){
                    MessageBox('提示', '注册成功').then(()=>{
                        this.$router.push({
                            path:'/me/login'
                        })
                    });
                }else if(res===0){
                    MessageBox('提示', '注册失败');
                }else{
                    MessageBox('提示', '用户名已存在')
                    
                }
            })
        },
        namepass(user){
            this.user=user
        }
    }
}
</script>
<style lang="scss" scoped>
    div.singinInput{
        margin-top: 14px;
        >div.botton{
            margin: 0 15px;
            margin-top: 40px;
            // width: 100%;
            outline-style: none;
            // box-sizing: border-box;
            line-height: 40px;
            border: 0 none;
            border-radius: 3px;
            background-color: #e61b74;
            color: #fff;
            height: 40px;
            font-weight: 400;
        }
    }
</style>