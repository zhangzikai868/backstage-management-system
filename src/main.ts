import { createApp } from "vue"
import App from "./App.vue"

import router from "./router"
import store from "./store"
import register from "./global"

import zkRequest from "./service"

const app = createApp(App)
register(app)
app.use(router)
app.use(store)
app.mount("#app")

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
zkRequest
  .get<DataType>({
    url: "/home/multidata",
    method: "GET",
    showLoading: false
  })
  .then((res) => {
    console.log(res)
    console.log(res.returnCode)
    console.log(res.success)
  })
// 每个方法有自己的拦截器
// zkRequest.request({
//   url: "/home/multidata",
//   method: "GET",
//   interceptors: {
//     requestInterceptor(config) {
//       console.log("每个方法自己的拦截器: 请求")
//       return config
//     },
//     responseInterceptor(res) {
//       console.log("每个方法自己的拦截器: 响应")
//       return res
//     }
//   }
// })
