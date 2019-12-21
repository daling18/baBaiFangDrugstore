<template>
    <div class="inputcom">
        <input-com @namepass="namepass">
            <label slot="name" for="name"> 账号：</label>
            <label slot="pass" for="pass"> 密码：</label>
            <i slot="eye" class="eyes_icon"></i>
        </input-com>
        <div class="forgetPass"><a href="">忘记密码</a></div>
        <div class="button">
            <div class="singin">
                <anniu>
                    <router-link to="/me/singin">
                        快速注册
                    </router-link>
                </anniu>
            </div>
            <div class="login" @click="login">
                <anniu>登录</anniu>
            </div>
        </div>
        <div class="phonLogin"><a href="">手机快捷登录</a></div>
    </div>
</template>
<script>
import inputCom from '../../component/input/input.vue' 
import anniu from './button.vue';

import axios from '../../network/network';
import { MessageBox } from 'mint-ui';
// import createdMixin from '../../mixin/createdMixin';
export default {
    components:{
        inputCom,
        anniu
    },
    // mixins:[createdMixin],
    data(){
        return{
            user:{}
        }
    },
    methods:{
        namepass(user){
            
            this.user=user
        },
        login(){
            if(!this.user.name||!this.user.pass){
                MessageBox('提示', '请输入用户名或密码');
                return
            }
            axios({
                method:'post',
                url:'/api/login',
                data:{
                    name:this.user.name,
                    pass:this.user.pass
                }
            }).then((res)=>{
                console.log(res)
                if(res===2){
                    MessageBox('提示', '你还没有注册');
                }else if(res===5){
                     MessageBox('提示', '密码错误');
                }else{
                    axios({
                        method:'post',
                        url:'/api/session'
                    }).then((res)=>{
                        if(res===7||res===8){
                        this.$store.commit('name','')
                        }else{
                        this.$store.commit('name',res)
                        }
                        this.$router.push({
                        path:'/me/logSucceed'
                        })
                    })
                    
                }
                
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .inputcom{
        margin-top: 20px;
        .forgetPass,.phonLogin{
            margin-top: 10px;
            position: relative;
            height: 20px;
            a{
                position: absolute;
                right: 6%;
                color: #013eae;
                font-size: 1.4rem;
            }
        }
        .phonLogin{
            margin-top: 0;
        }
        .button{
            text-align: center;
            margin: 20px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            div{
                width: 45%;
            }
            .singin{
                color: #333;
                background-color: #fff;
               
            }
            .login{
                color:#fff;
                background-color: #e61b74;
                // border: 1px solid #e61b74;
            }
        }
    }
</style>