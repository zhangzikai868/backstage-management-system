import { createStore } from "vuex"

import loginStore from "./login/loginStore"
import { IRootStore } from "./types"

const store = createStore<IRootStore>({
  state() {
    return {
      name: "",
      password: ""
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { loginStore }
})

// 防止刷新数据消失
export function setupStore() {
  store.dispatch("loginStore/loadLocalLogin")
}

export default store
