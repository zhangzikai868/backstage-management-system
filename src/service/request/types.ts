import type { AxiosRequestConfig, AxiosResponse } from "axios"

// 定义拦截器的接口
interface ZKRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterceptorCatch?: (error: any) => any
}
// 中转接口将拦截器接口继承AxiosRequestConfig - 两个中的配置进行合并
interface ZKRequestConfig extends AxiosRequestConfig {
  interceptors?: ZKRequestInterceptors
  showLoading?: boolean
}

export { ZKRequestInterceptors, ZKRequestConfig }
