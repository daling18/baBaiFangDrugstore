<template>
    <div class="inform">
        <div>
            <div class="if">
                
            </div>
            <div class="topSwiper">
                <ul style="top:0px;left:0px" ref="ul">
                    <li ref="li1">
                        <p>肺癌晚期会出现哪些状况，肺癌晚期临终前有哪些症状</p>
                        <p>肺癌晚期病人临死前会有哪些症状及表现</p>
                    </li>
                    <li ref="li2">
                        <p>瑞人堂金戈长期吃的副作用吗</p>
                        <p>瑞人堂金戈的效果怎么样,吃了感觉怎么样</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ul:null,
            li1:null,
            li2:null,
            index:0
        }
    },
    methods:{
        swipwer(){
            this.clon()

            setInterval(()=>{
                this.hander()
            },1500)
        },
        hander(){
            if(this.index===3){
                this.index=0
                this.ul.style.transition="all 0s linear"
                this.ul.style.top=-(this.index*this.li1.clientHeight)+'px'
                
            }
            this.ul.style.transition="all 0.3s linear"
            this.index++
            this.ul.style.top=-(this.index*this.li1.clientHeight)+'px'
        },
        clon(){
            const li3=this.li1.cloneNode(true)
            // const li0=this.li2.cloneNode(true)
            this.ul.appendChild(li3)
            // this.ul.insertBefore(li0,this.li1)
            this.ul.style.top=-this.li1.clientHeight+'px'
        }
    },
    mounted(){
        this.li1=this.$refs.li1
        this.ul=this.$refs.ul
        this.li2=this.$refs.li2
        // console.log(this.$refs)
        this.swipwer()
    }
}
</script>
<style lang="scss" scoped>
    .inform{
        padding: 1rem 1.5rem;
        background: #fff;
        >div{
            position: relative;
            overflow: hidden;
            padding-left: 3.5rem;
            height: 3rem;
            >.if{
                position: absolute;
                top: 0;
                left: 0;
                width: 3rem;
                height: 3rem;
                background: url(http://m.800pharm.com/images/wap/i_jkzx.png) no-repeat top left;
                background-size: contain;
            }
            >.topSwiper{
                position: relative;
                overflow: hidden;
                height: 100%;
                ul{
                    position: absolute;
                    // transition: all 0.3s linear;
                }
                li{
                    // position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background: #fff;
                    p{
                        position: relative;
                        padding-left: 1rem;
                        font-size: 1.4rem;
                        overflow: hidden;
                        line-height: 1.5rem;
                        height: 1.5rem;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        &::before{
                            position: absolute;
                            left: .1rem;
                            top: .5rem;
                            content: " ";
                            width: .4rem;
                            height: .4rem;
                            display: block;
                            border-radius: 50%;
                            background: #777;
                        }
                    }
                }
            }
        }
        
    }
</style>