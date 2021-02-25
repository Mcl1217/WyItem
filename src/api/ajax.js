import axios from "axios"
import qs from 'querystring';
const service = new axios.create({

})

service.interceptors.request.use((config)=>{
    config.data = qs.stringify(config.data);
    return config;
})
service.interceptors.response.use(
    (response)=>{
        return response.data
    },
    (err)=>{
        alert(err.message || "未知请求错误")
        return Promise.reject(err)
    }
)

export default service