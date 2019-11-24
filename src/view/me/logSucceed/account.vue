<template>
    <div class="account">
        <a  @click.prevent=";">
            <span class="personal_img">
                <img src="http://m.800pharm.com/images/wap/personal_img.png" alt="">
            </span>
            <div class="personal_info">
                <span class="personal_name">
                    {{$store.state.name}}
                </span>
                <span class="vip">
                    注册会员
                </span>
            </div>
            <i class="right_icon" @click.stop="zhuxiao"></i>
        </a>
    </div>
</template>
<script>
import axios from '../../../network/network';
import { MessageBox } from 'mint-ui';
export default {
    methods:{
        zhuxiao(){
            MessageBox.confirm('决定退出吗').then((action,cancel)=>{
                if(action){
                    axios({
                        method:'post',
                        url:'/api/zhuxiao'
                    }).then((res)=>{
                        if(res===12){
                            MessageBox.alert('退出成功').then(()=>{
                                this.$router.push('/me/login')
                            })
                            
                        }else{
                            MessageBox.alert('退出失败')
                        }
                    })
                }
            })
            
        }
    }
}
</script>
<style lang="scss" scoped>
    div.account{
        position: relative;
        overflow: hidden;
        height: 100px;
        background: url(http://m.800pharm.com/images/wap/personal_bg.png) no-repeat center;
        background-size: cover;
        a{
            display: block;
            overflow: hidden;
            position: relative;
            left: 15px;
            top: 50%;
            margin-top: -30px;
            color: #666;
            span.personal_img{
                float: left;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                img{
                    max-width: 100%;
                    vertical-align: middle;
                }
                
            }
            div{
                float: left;
                max-width: 65%;
                padding-top: 8px;
                padding-left: 10px;
                .personal_name{
                    display: block;
                    margin-bottom: 5px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .vip{
                    color: #fff;
                }
            }
            i{
                display: block;
                width: 8px;
                height: 16px;
                position: absolute;
                right: 34px;
                top: 50%;
                margin-top: -8px;
                background: url(http://m.800pharm.com/images/wap/personal_right_icon.png) no-repeat center;
                background-size: contain;
            }
        }
    }
</style>