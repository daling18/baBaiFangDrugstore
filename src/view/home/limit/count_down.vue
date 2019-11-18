<template>
    <div class="count_down">
        还剩
        <span class="hour">{{hour}}</span>:
        <span class="minute">{{minute}}</span>:
        <span class="second">{{second}}</span>
        结束
    </div>
</template> 
<script>
import { homedir } from 'os'
export default {
    data(){
        return{
            hour:'',
            minute:'',
            second:''
        }
    },
    methods:{
        countDown(){
            setInterval(()=>{
                const nowTime=new Date()
                const nowHour= nowTime.getHours()
                const nowMinute=nowTime.getMinutes()
                const nowSeconds=nowTime.getSeconds()
                let hour=0
                let minute=60-(nowMinute+1)
                let seconds=60-nowSeconds
                if(nowHour<10){
                    hour=10-(nowHour+1)
                }else{
                    hour=10+24-(nowHour+1)
                }
                
                if(hour<10){
                    hour='0'+hour
                }
                if(minute<10){
                    minute='0'+minute
                }
                if(seconds<10){
                    seconds='0'+seconds
                }
                this.hour=hour
                this.minute=minute
                this.second=seconds
            },1000)
        }
    },
    mounted(){
        this.countDown()
    }
}
</script>
<style lang="scss" scoped>
    .count_down{
        float: right;
        font-size: 1.3rem;
        color: #222;
        margin-top: 5px;
        span{
            display: inline-block;
            padding: 0 .4rem;
            background: #222;
            color: #fff;
            border-radius: 2px;
            margin-right: .4rem;
            &:last-child{
                margin-right:0;
            }
        }
    }
</style>