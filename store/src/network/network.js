import axios from 'axios'
export default function (config){
     
    const instance= axios.create()
    instance.interceptors.response.use((data)=>{
        return data.data
    })
    return instance(config)
}