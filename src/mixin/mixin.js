export default {
    methods:{
        setlocalStorage(key,value){
            let str=localStorage.getItem(key)
            if(!str){
                str='[]'
            }
            const arr= JSON.parse(str)
            if(arr.indexOf(value)!==-1){
                return
            }
            arr.push(value)
            localStorage.setItem(key,JSON.stringify(arr))
        },
        getlocalStorage(key){
            const str=localStorage.getItem(key)
            if(!str){
                return str
            }
            return JSON.parse(str)
        }
    }
}