import { createStore, Store, useStore as vuexUseStore } from "vuex"

import loginStore from "./login/loginStore"
import system from "./main/system/system"
import { IRootStore, IStoreType } from "./types"

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
  modules: { loginStore, system }
})

// 防止刷新数据消失
export function setupStore() {
  store.dispatch("loginStore/loadLocalLogin")
}

export function useStore(): Store<IStoreType> {
  return vuexUseStore()
}

export default store
