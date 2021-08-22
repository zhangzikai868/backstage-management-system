// service同一出口
import ZKRequest from "./request/request"
import { BASE_URL, TIME_OUT } from "./request/config"

const zkRequest = new ZKRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 请求携带token的拦截
      const token = ""
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log("请求的拦截")
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log("请求失败的拦截")
      return error
    },
    responseInterceptor: (res) => {
      console.log("响应的拦截")
      return res
    },
    responseInterceptorCatch: (error) => {
      console.log("响应失败的拦截")
      return error
    }
  }
})

export default zkRequest
