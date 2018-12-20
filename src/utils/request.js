import axios from 'axios'
import {
  Loading
} from 'element-ui'
import {
  getToken
} from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: '', // api 的 base_url
  timeout: 5000 // request timeout
})

let loadingInstance

// request拦截器
service.interceptors.request.use(config => {
  loadingInstance = Loading.service({
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.5)',
  })
  config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
  return config
}, error => {

  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    loadingInstance.close()
    return response.data
  },
  error => {
    loadingInstance.close()
    return Promise.reject(error)
  }
)

export default service