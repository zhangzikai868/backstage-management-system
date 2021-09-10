// service同一出口
import ZKRequest from "./request/request"
import localCache from "@/utils/catche"
import { API_BASE_URL, TIME_OUT } from "./request/config"

const zkRequest = new ZKRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 请求携带token的拦截
      const token = localCache.getCache("token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (error) => {
      return error
    }
  }
})

export default zkRequest
