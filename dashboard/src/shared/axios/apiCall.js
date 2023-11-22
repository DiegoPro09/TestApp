import axios from "axios"
import { config } from "../config/config"

export const baseURL = "http://localhost:3001/api"

const apiCall = axios.create({
    baseURL
})

export default apiCall

apiCall.interceptors.request.use(function (configs) {
    return {
        ...configs,
        headers:{
            Authorization: config.secretKey
        }
    }
}, function (error) {
    return Promise.reject(()=>{
        if(error.response.data){
            return error.response.data
        }
        return error
    })
})
