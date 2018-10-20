import axios from 'axios'
import { resolve } from 'url';

const instance = axios.create({
    baseURL: 'http://211.67.177.56:8080/hhdj',
    timeout: 15000,
})


const xhr = {
    get(url,data,config){
        return new Promise((resolve,reject)=>{
            const token = localStorage.getItem('token')
            let computedConfig = {
                ...config
            }
            if(token){
                computedConfig = {
                    headers: {
                        'token': token
                    }
                }
            }
            instance.get(url,{params:data,...computedConfig}).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    fetch(methods,url,data,config){
        return new Promise((resolve,reject)=>{
            const token = localStorage.getItem('token')
            let computedConfig = {
                ...config
            }
            if(token){
                computedConfig = {
                    headers: {
                        'token': token
                    }
                }
            }
            instance[methods](url,data,computedConfig).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}
export default xhr