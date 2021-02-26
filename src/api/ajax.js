import axios from "axios"
import qs from 'querystring';
const service = new axios.create({

})
// 请求拦截器
service.interceptors.request.use((config)=>{
    //axios中默认发送的格式是json,但目前的服务器没有对json格式的请求参数做处理，所以需要转换为urlencoded编码格式
    config.data = qs.stringify(config.data);
    return config;
})
// 响应拦截器
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