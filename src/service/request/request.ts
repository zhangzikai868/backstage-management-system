import axios from "axios"
import { ElLoading } from "element-plus"
import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type"
import type { AxiosInstance } from "axios"
import type { ZKRequestInterceptors, ZKRequestConfig } from "./types"

const DEAFULT_LOADING = true

class ZKRequest {
  // 实例
  instance: AxiosInstance
  // 拦截器
  interceptors?: ZKRequestInterceptors
  // element-plus中的类型
  loading?: ILoadingInstance
  showLoading?: boolean
  // 在new的时候传入的-公共的congig比如BASE_URL/TIME_OUT
  // 类型: 拦截器和AxiosRequestConfig合并之后的接口
  constructor(config: ZKRequestConfig) {
    // 一、创建axios实例
    // 每new一个对象就会创建一个axios实例保存到instance中
    this.instance = axios.create(config)

    // 二、保存基本信息
    // 将new时传入的interceptors(里面是拦截器)进行保存
    this.interceptors = config.interceptors
    // 判断是否传入showLoading
    this.showLoading = config.showLoading ?? DEAFULT_LOADING

    // 三、使用拦截器
    // 1.实例的拦截器 - 使用实例调用拦截器方法传入函数
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 2.全局的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 请求数据时有loading效果 - element-plus中ElLoading组件 判断是否加载loading
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在登录中~",
            background: "rgba(0, 0, 0, .5)"
          })
        }
        return config
      },
      (error) => {
        return error
      }
    )
    this.instance.interceptors.response.use(
      // 对错误进行处理
      (res) => {
        // 将loading移除
        setTimeout(() => {
          this.loading?.close()
        }, 200)
        // 虽然请求成功但是没有返回数据
        if (res.data.returnCode === "-1001") {
          console.log("请求失败~,错误信息")
        } else {
          return res.data
        }
      },
      (error) => {
        // 将loading移除
        this.loading?.close()
        // 推荐switch判断
        // 请求失败
        if (error.response.status === 404) {
          console.log("404错误")
        }
        return error
      }
    )
  }

  // 四、封装各种方法
  // 自己封装request请求调用上面实例的request方法
  // 使用的时候传入的config-会和constructor中的config合并
  request<T = any>(config: ZKRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 3.某个方法的拦截器
      // 判断config中interceptors里有没有requestInterceptor
      if (config.interceptors?.requestInterceptor) {
        // 执行返回config
        config = config.interceptors.requestInterceptor(config)
      }
      // showLoading处理用户传入的false
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 将showLoading设置为true这样不会影响下一个请求
          this.showLoading = DEAFULT_LOADING
          resolve(res)
        })
        .catch((error) => {
          this.showLoading = DEAFULT_LOADING
          reject(error)
        })
    })
  }
  get<T = any>(config: ZKRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }
  post<T = any>(config: ZKRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }
  delete<T = any>(config: ZKRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }
  patch<T = any>(config: ZKRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export default ZKRequest
