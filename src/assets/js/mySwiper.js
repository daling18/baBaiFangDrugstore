class Lunbo {
    constructor(className) {
        this.ele = document.querySelector(className)
        this.ul = this.ele.querySelector('ul')
        this.ol = this.ele.querySelector('ol')
        this.div = this.ele.querySelector('.box>div')
        this.windowWidth=this.ele.clientWidth
        this.index=1
        this.timer=null
        this.frg=true
        this.init()
    }
    //启动器
    init() {
       this.addPoint()
       this.cloneEle()
       this.autoPlay()
       this.addOverOut()
       this.addClick()
       this.addRlEven()
    }
 
    //clone元素
    cloneEle(){
        const first=this.ul.lastElementChild.cloneNode(true)
        const last=this.ul.firstElementChild.cloneNode(true)
        this.ul.appendChild(last)
        this.ul.insertBefore(first,this.ul.firstElementChild)
        // console.log(first,last)
        this.ul.style.width=this.ul.children.length*this.windowWidth+'px'
        this.ul.style.height=-1*this.windowWidth+'px'
    }  
    //让图片动起来
    autoPlay(){
        this.timer=setInterval(()=>{
            if(!this.frg)return
            this.index++
            this.move()
        },1000)
    }
    //添加移入移出事件
    addOverOut(){
        this.ele.addEventListener('mouseover',()=>{clearInterval(this.timer)})
        this.ele.addEventListener('mouseout',()=>{this.autoPlay()})
    }
    //为每个焦点添加事件

    addClick(){
        for(let i = 0; i < this.ol.children.length; i++){
            this.ol.children[i].addEventListener('click',()=>{
                if(!this.frg)return
                this.index=i+1
                this.move()
            })
        }
    }
    //为左右按钮添加事件
    addRlEven(){
        this.div.addEventListener('click',(e)=>{
            e=e||window.event
            const target=e.target||srcElement
            if(target.tagName==='SPAN'){
                if(!this.frg)return
                if(target===this.div.firstElementChild){
                    this.index--
                    this.move()
                }else{
                    this.index++
                    this.move()
                }
            }
        })  
    }
    //移动函数
    move(){
        this.frg=false
        moveFn(this.ul,{left:-this.index*this.windowWidth},()=>{
            if(this.index===this.ul.children.length-1){
                this.index=1
                this.ul.style.left=-this.index*this.windowWidth+'px'
            }
            if(this.index===0){
                this.index=this.ul.children.length-2
                this.ul.style.left=-this.index*this.windowWidth+'px'
            }
            for(let i = 0; i < this.ol.children.length; i++)this.ol.children[i].className=''
            this.ol.children[this.index-1].className='active'
            this.frg=true
        })
    }
}

// document.addEventListener